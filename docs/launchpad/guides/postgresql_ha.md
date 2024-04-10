---
---
# Overview of High Availability in PostgreSQL

:::note
This guide is currently under development. We will be expanding it shortly to include additional concepts and detailed instructions. Stay tuned for updates!
:::

## Prerequisites
- A fully functional working Kubernetes cluster.
- Object storage buckets for WAL (Write-Ahead Logs) archiving and base backups.

## Configuring Postgresql with Zalando's Operator

Launchpad leverages the [Zalando postgres-operator](https://github.com/zalando/postgres-operator) for seamless creation and management of [PostgreSQL](https://www.postgresql.org/) databases within Kubernetes, facilitating highly-available clusters with [Patroni](https://github.com/zalando/patroni). PostgreSQL is a requirement for storing indexer metadata and subgraph data when running an indexer. Configuration is streamlined through Postgres manifests (CRDs), enhancing CI/CD pipeline integration by removing the need for direct Kubernetes API access and promoting infrastructure-as-code practices.

Following the deployment of the [`postgres-operator` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/postgres-operator/README.md), you're set to initiate PostgreSQL database creation.

The [`graph` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/graph/README.md) is preconfigured to deploy [one replica PostgreSQL](https://github.com/graphops/launchpad-namespaces/blob/main/graph/values/_common/graph-database.yaml) for `subgraph-data` and one for `indexer-data`. Adjust the `numberOfInstances` in your Helmfile to modify replication levels.

```yaml
graph-database:
    values:
        resources:
            postgres-cr-primary-subgraph-data:
                spec:
                    numberOfInstances: 3
```

This setup establishes a primary instance for both writes and reads, with two read-only replicas. [Patroni](https://github.com/zalando/patroni/blob/master/docs/kubernetes.rst) automates the failover process, promoting a replica to primary in case of primary failure.

The data between servers is replicated through WAL(Write-Ahead Logs) streaming replication which allows for changes to be streamed in real-time or near real-time to replicas. By first recording changes in the Write-Ahead Logging (WAL) system instead of directly applying every change to the disk immediately, PostgreSQL enhances performance by batching disk writes and minimizing I/O operations. Another benefit of using WAL is that in case of system failure, the database can be rebuilt by replaying these entries.


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

Ensure your databases are equipped with the necessary credentials for WAL file storage:

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
