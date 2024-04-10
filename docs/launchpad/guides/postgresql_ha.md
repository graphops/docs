---
---
# PostgreSQL HA Overview

## Prerequisites
- A fully functional working Kubernetes cluster
- An object storage buckets: for WAL (Write Ahead Logs) archiving and basebackups

## Configuring Postgresql

Launchpad uses the [Zalando postgres-operator](https://github.com/zalando/postgres-operator) to easily create and manage [PostgreSQL](https://www.postgresql.org/) databases. PostgreSQL is a requirement for storing indexer metadata and subgraph data when running an indexer. The Postgres Operator delivers an easy to run highly-available PostgreSQL clusters on Kubernetes powered by [Patroni](https://github.com/zalando/patroni). It is configured only through Postgres manifests (CRDs) to ease integration into automated CI/CD pipelines with no access to Kubernetes API directly, promoting infrastructure as code vs manual operations.

Once [`postgres-operator` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/postgres-operator/README.md) has been deployed you are ready to create PostgreSQL databases.

The [`graph` namespace](https://github.com/graphops/launchpad-namespaces/blob/main/graph/README.md) is setup to deploy a [one replica PostgreSQL](https://github.com/graphops/launchpad-namespaces/blob/main/graph/values/_common/graph-database.yaml) for `subgraph-data` and one for `indexer-data`. To increase replication for each database simply increase the `numberOfInstances` in your helmfile. 

```yaml
graph-database:
    values:
        resources:
            postgres-cr-primary-subgraph-data:
                spec:
                    numberOfInstances: 3
```

The above example increases number of instances to three, thus maintaining a primary instance that accepts writes and reads and two replicas that accept reads. In the event of a failure on the primary instance one of the replicas would be promoted to primary - this process is managed by [Patroni](https://github.com/zalando/patroni/blob/master/docs/kubernetes.rst).

The data between servers is replicated through WAL(Write-Ahead Logs) streaming replication which allows for changes to be streamed in real-time or near real-time to replicas. By first recording changes in the Write-Ahead Logging (WAL) system instead of directly applying every change to the disk immediately, PostgreSQL enhances performance by batching disk writes and reducing I/O operations. Another benefit of using WAL is that in case of system failure, the database can be rebuilt by replaying these entries.

## Enabling WAL Archiving and base backups

By archiving the WAL data we can support reverting to any time instant covered by the available WAL data: we simply install a prior base backup of the database, and replay the WAL just as far as the desired time. To enable WAL archiving and base backups we need to create a `postgres-env-config` as per the following example:

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
    name: postgres-env-config
    namespace: postgres-operator # any namespace can be used
data:
    AWS_ENDPOINT: http://your-object-storage-endpoint.com
    AWS_S3_FORCE_PATH_STYLE: "true" # needed if you're object storage solution uses path style bucket naming convention instead of DNS ie. Ceph
    USE_WALG_BACKUP: "true"
    USE_WALG_RESTORE: "true"
    WALG_DISABLE_S3_SSE: "true"
    BACKUP_NUM_TO_RETAIN: "4"
    BACKUP_SCHEDULE: "00 02 * * sun"
    WAL_BUCKET_SCOPE_PREFIX: ""
    WAL_BUCKET_SCOPE_SUFFIX: ""
```

Your databases will need to be configured with the right credentials to write WAL files to your bucket:

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



