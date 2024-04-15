---
---
# Overview of High Availability in PostgreSQL

:::note
This guide is currently under development. We will be expanding it shortly to include additional concepts and detailed instructions. Stay tuned for updates!
:::

One of the prerequisites of running an indexer stack is currently using PostgreSQL as a database for storing indexer metadata and subgraph data. To ensure redundancy of data and operations and enable systems to continue functioning despite individual component failures we want to account for the following areas as they relate to running PostgreSQL:

- **Automatic Failover**: the ability to automatically switch operations to standby replicas if the primary database server fails, ensuring service continuity.

- **Data Integrity and Consistency**: the ability to maintain data integrity and consistency across primary and replica servers, even in failover scenarios, through WAL and Transaction Management

- **Scalability**: the ability to support scalability, allowing databases to handle increased loads by distributing read queries across replicas.

- **Disaster Recovery**: planning for data backups and restores, PITRs(Point In Time Recoverys) ensuring that data is replicated to geographically diverse locations, protecting against site-wide failures.

- **Monitoring and Health Checks**: continuous monitoring of database health and performance metrics to detect and address issues before they lead to downtime.

This guide takes an indexer through the different steps needed to configure HA in PostgreSQL, utilising the `postgres-operator` and `graph` namespaces as starting points.

## Prerequisites
- A fully functional working Kubernetes cluster.
- Object storage buckets for WAL (Write-Ahead Logs) archiving and base backups.

## Configuring Postgresql with Zalando's Operator

Launchpad leverages the [Zalando postgres-operator](https://github.com/zalando/postgres-operator) for seamless creation and management of [PostgreSQL](https://www.postgresql.org/) databases within Kubernetes, facilitating highly-available clusters with [Patroni](https://github.com/zalando/patroni).

Following the deployment of the [`postgres-operator` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/postgres-operator/README.md), you're set to initiate PostgreSQL database creation.

## Scalability

The [`graph` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/graph/README.md) is preconfigured to deploy [one replica PostgreSQL](https://github.com/graphops/launchpad-namespaces/blob/main/graph/values/_common/graph-database.yaml) for `subgraph-data` and one for `indexer-metadata`. To scale the number of replicas, simply modify the numberOfInstances attribute in your Helmfile. Example:

```yaml
graph-database:
    values:
        resources:
            postgres-cr-primary-subgraph-data:
                spec:
                    numberOfInstances: 3
```

This configuration initiates a primary instance for handling writes and reads alongside two read-only replicas. The failover protocol, orchestrated by [Patroni](https://github.com/zalando/patroni/blob/master/docs/kubernetes.rst), promotes a replica to the primary role in the event of a primary node's failure.

Given that `graph-node` query nodes require write permissions to run SQL migrations, the intended way to use read-only replicas with graph-node is the following:


```yaml
store:
  primary:
    enabled: true
    connection: "postgresql://${PRIMARY_SUBGRAPH_DATA_PGUSER}:${PRIMARY_SUBGRAPH_DATA_PGPASSWORD}@${PRIMARY_SUBGRAPH_DATA_PGHOST}:${PRIMARY_SUBGRAPH_DATA_PGPORT}/${PRIMARY_SUBGRAPH_DATA_PGDATABASE}"
    weight: 0
  "primary.replicas.repl1":
    enabled: true
    connection: "postgresql://${PRIMARY_SUBGRAPH_DATA_PGUSER}:${PRIMARY_SUBGRAPH_DATA_PGPASSWORD}@${PRIMARY_SUBGRAPH_DATA_PGHOST_REPL}:${PRIMARY_SUBGRAPH_DATA_PGPORT}/${PRIMARY_SUBGRAPH_DATA_PGDATABASE}"
    weight: 1
```

The above ensures that write requests will be handled by the primary instance and read requests will be handled by replica instances.

:::warning
Before setting up your `graph-node-query` nodes with read-only replicas beware that there is a ongoing [issue](https://github.com/graphprotocol/graph-node/issues/4326) that makes query results not deterministic because the read replicas can trail behind the main database, usually up to 30s.
:::

The data between servers is replicated through WAL(Write-Ahead Logs) streaming replication which allows for changes to be streamed in real-time or near real-time to replicas. By first recording changes in the Write-Ahead Logging (WAL) system instead of directly applying every change to the disk immediately, PostgreSQL prioritises data safety, enforces atomic writes and minimizes I/O operations. Another benefit of using WAL is that in case of system failure, the database can be rebuilt from the latest available base backup and by replaying the WAL files. Note that a base backup is a full copy of the database cluster's data files, taken at a specific point in time, which serves as a starting point for both recovery and replication processes.


## Implementing WAL Archiving and Base Backups

By archiving the WAL data we can support reverting to any time instant covered by the available WAL data: we simply install a prior base backup of the database, and replay the WAL just as far as the desired time. 

While `archive_mode` is enabled by default, it requires specific configurations for functionality, including setting `AWS_ENDPOINT` and providing valid bucket credentials. Verify `archive_mode` using `patronictl edit-config` within your database pod. To configure `AWS_ENDPOINT` for archiving and backups, create a `postgres-env-config` ConfigMap:

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
    name: postgres-env-config
    namespace: postgres-operator # any namespace can be used
data:
    AWS_ENDPOINT: http://your-object-storage-endpoint.com
    AWS_S3_FORCE_PATH_STYLE: "true" # needed if your object storage solution uses path style bucket naming convention instead of DNS ie. Ceph
    USE_WALG_BACKUP: "true"
    USE_WALG_RESTORE: "true"
    WALG_DISABLE_S3_SSE: "true"
    BACKUP_NUM_TO_RETAIN: "4"
    BACKUP_SCHEDULE: "00 02 * * sun"
    WAL_BUCKET_SCOPE_PREFIX: ""
    WAL_BUCKET_SCOPE_SUFFIX: ""
```
:::note
When using object storage for WAL archiving by default the PostgreSQL Operator expects that the bucket endpoint follows the DNS style naming convention. If you’re using object storage that follows path style naming convention for buckets (ie. Ceph) you need to pass `AWS_S3_FORCE_PATH_STYLE: “true”` to the `postgres-operator` configmap
:::

Ensure your databases are equipped with the necessary credentials for WAL files and `basebackups` storage:

```yaml
graph-database:
    values:
        resources:
            postgres-cr-primary-subgraph-data:
              spec:
                env:
                  - name: WAL_S3_BUCKET
                    value: <name-of-your-bucket>
                  - name: AWS_ACCESS_KEY_ID
                    valueFrom:
                      secretKeyRef:
                        name: subgraph-database-bucket-secret
                        key: AWS_ACCESS_KEY_ID
                  - name: AWS_SECRET_ACCESS_KEY
                    valueFrom:
                      secretKeyRef:
                        name: subgraph-database-bucket-secret
                        key: AWS_SECRET_ACCESS_KEY
                  - name: BACKUP_NUM_TO_RETAIN
                    value: "2"
                  - name: BACKUP_SCHEDULE
                    value: '00 00 * * sun'
```

:::tip
Important mentions about WAL files that can impact the availability of your cluster:

- Should a replica experience a failure, it's important to note that WAL files will be retained and not deleted until either the replica has been successfully recovered, or removed. This retention policy is crucial for ensuring data integrity and consistency across the database cluster. However, it can lead to rapid disk space consumption, posing a risk of exhausting available storage.

- Whenever taking a basebackup (new replica, standby, etc), WAL files accumulate at a fast pace and exhaust disk space. Beware of that.
:::

## Setting up Clones and Standby Clusters

A Clone is a PIT copy of the production database that one would use for testing for development or for major upgrades - think of it as an independent staging area. The postgres-operator allows for two ways to create clones:

- Clone from an S3 bucket (recommended)
- Clone directly from a live instance

To clone from an S3 bucket you need to define a new PostgreSQL CRD resource with `spec.clone` section defined. Example:

```yaml
apiVersion: "acid.zalan.do/v1"
kind: postgresql
metadata:
  name: primary-subgraph-data-clone
spec:
  clone:
    # can be found in the metadata.uid of the source cluster Postgresql resource def
    uid: "efd12e58-5786-11e8-b5a7-06148230260c"
    # name of the cluster being cloned
    cluster: "primary-subgraph-data"
    # the new cluster will be cloned using the latest backup available before the timestamp
    timestamp: "2024-04-12T12:40:33+00:00"
    s3_wal_path: "s3://custom/path/to/bucket"
    s3_endpoint: <your-s3-endpoint>
    s3_force_path_style: true
  env:
    - name: CLONE_AWS_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: primary-subgraph-data-bucket-secret
          key: AWS_ACCESS_KEY_ID
    - name: CLONE_AWS_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: primary-subgraph-data-bucket-secret
          key: AWS_SECRET_ACCESS_KEY
```

Cloning directly from your source DB cluster is done via `pg_basebackup`. To use this feature simply define your clone's PostgreSQL CRD as above and leave out the `timestamp` field from the clone section.

:::info
The operator will connect to the service of the source cluster by name. If the cluster is called test, then the connection string will look like host=test port=5432), which means that you can clone only from clusters within the same namespace.

To set up a new standby or clone PostgreSQL instance that streams from a live instance, you must ensure that the new instance has the correct credentials. This involves [copying the credentials from the source cluster's secrets](https://github.com/zalando/postgres-operator/blob/master/docs/user.md#providing-credentials-of-source-cluster) to successfully bootstrap the standby cluster or clone.
:::

A Standby Cluster is a cluster that first clones a database, and keeps replicating changes afterwards. It can exist in a different location than its source database, but unlike cloning, the PostgreSQL version between source and target cluster has to be the same. A Standby Cluster is a great way to ensure you have a disaster recovery plan if you main database fails.

Similarly to cloning you can start a Standby Cluster by streaming changes from archived WAL files or by streaming changes directly from your primary database. 

To start a cluster as a standby from archived WAL files, add the following `standby` section in the Postgres CR definition:

```yaml
apiVersion: "acid.zalan.do/v1"
kind: postgresql
metadata:
  name: primary-subgraph-data-clone
spec:
  standby:
    s3_wal_path: "s3://<bucketname>/spilo/<source_db_cluster>/<UID>/wal/<PGVERSION>"
    s3_endpoint: <your-s3-endpoint>
    s3_force_path_style: true # optional but needed if your object storage solution uses path style bucket naming convention instead of DNS ie. Ceph
  env:
    - name: STANDBY_AWS_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: primary-subgraph-data-bucket-secret
          key: AWS_ACCESS_KEY_ID
    - name: STANDBY_AWS_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: primary-subgraph-data-bucket-secret
          key: AWS_SECRET_ACCESS_KEY
```

To start a cluster as a standby from a remote primary, add the following `standby` options in the PostgreSQL CRD definition:

```yaml
spec:
  standby:
    standby_host: "<your-source-db-host>.<namespace>"
    standby_port: "5433"
```

:::note
For both clones and standby clusters, specifying both S3 storage and remote live clusters as data sources is not possible; attempting to configure both simultaneously will result in an error. You must choose either S3 or a remote live cluster as the source but not both.
:::

### Promoting a standby cluster to a database cluster

To promote a standby cluster to a proper database cluster you have to ensure it stops replicating changes from the source, and starts accepting writes instead. To promote, remove the standby section from the postgres cluster manifest. A rolling update will be triggered removing the STANDBY_* environment variables from the pods, followed by a Patroni config update that promotes the cluster.

## Monitoring

By default the postgres-operator does not come setup up with any monitoring capabilities. However, to enable metric collection for database performance and WALs performance the following exporters can be used:

- [Prometheus exporter](https://github.com/prometheus-community/postgres_exporter) for PostgreSQL server metrics
- [WAL-G exporter](https://github.com/thedatabaseme/wal-g-exporter) for gathering WAL-G backup metrics for Postgres databases

:::note
The above mentioned exporters are not the only ones that can be used. There is a large variety of PostgreSQL exporters that you can pick from, however the wal-g-exporter specifically has been used as it designed to work well with [Zalando's Spilo](https://github.com/zalando/spilo).
:::

To enable the use of the above exporters you need to pass the following configuration to the postgres-operator to run your postgresql dbs with exporter sidecars:

```yaml
postgres-operator:
  values:
    configGeneral:
      sidecars:
        - name: wal-g-exporter
          image: ghcr.io/thedatabaseme/wal-g-exporter:0.3.1
          imagePullPolicy: IfNotPresent
          env:
          - name: HTTP_PORT
            value: "9351"
          - name: PGUSER
            value: "$(POSTGRES_USER)"
          - name: PGPASSWORD
            value: "$(POSTGRES_PASSWORD)"
          ports:
          - name: wal-g-exporter
            containerPort: 9351
            protocol: TCP
        - name: exporter
          image: quay.io/prometheuscommunity/postgres-exporter:v0.15.0
          ports:
          - name: pg-exporter
            containerPort: 9187
            protocol: TCP
          resources:
            requests:
              cpu: 50m
              memory: 200M
          env:
          - name: CLUSTER_NAME
            valueFrom:
              fieldRef:
                apiVersion: v1
                fieldPath: metadata.labels['cluster-name']
          - name: DATA_SOURCE_NAME
            value: "postgresql://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@localhost:5432/postgres?sslmode=disable"
```

Additionally the `wal-g-exporter` relies on having all needed WAL-G environment variables within an envdir under `/run/etc/wal-e.d/env`. As such you need to add the following spec to each postgresql CR definitions for the aforementioned path to be shared with the exporter sidecars:


```yaml
apiVersion: "acid.zalan.do/v1"
kind: postgresql
metadata:
  name: <you-db-name>
spec:
  additionalVolumes:
    - name: walg
      mountPath: /run/etc
      targetContainers:
        - postgres
        - wal-g-exporter
      volumeSource:
        emptyDir: {}
  # the rest of your spec goes here
```

Once you've updated your `postgres-operator` spec and the CR of each of your PostgreSQL databases it's time to add PodMonitors for Prometheus to track and collect the metrics. Example:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: <your-database-name>
  namespace: <your-database-namespace>
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: postgresql
      app.kubernetes.io/instance: <your-database-name>
  podMetricsEndpoints:
  - port: pg-exporter
    path: /metrics
    scrapeTimeout: "60s"
    honorLabels: true
  - port: wal-g-exporter
    path: /metrics
    scrapeTimeout: "60s"
    honorLabels: true
  - targetPort: 8008
    path: /metrics
    scrapeTimeout: "10s"
    honorLabels: true
  namespaceSelector:
    matchNames:
    - <your-database-namespace>
```

## Useful commands

When using Zalando's operator, the pods running the PostgreSQL database come installed with useful scripts and CLIs as they are running the [Spilo image](https://github.com/zalando/spilo). One such functionality is `patronictl` which is used to manage and interact with your database cluster.

You can use the `patroni reinit <cluster_name> <member_name>` in the event one of the cluster members needs to be reinitialized after falling out of sync with the primary due to corruption or other issues that prevent it from catching up through normal replication. It can also be used to clean a member that has been problematic or to refresh its data completely for consistency checks. This command resets a replica by wiping its existing data and then resynchronizing it from the current leader or another specified member of the cluster.