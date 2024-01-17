---
---
# Deploying a Monitoring stack with HA

## Prerequisites
- A fully functional working Kubernetes cluster
- Two object storage buckets: one for Logs data, used by Loki, and one for Metrics data, used by Thanos

## Configuring Loki for HA

Launchpad uses the [loki-distributed](https://github.com/grafana/helm-charts/tree/main/charts/loki-distributed) release for setting up Loki, which can be configured according to its values interface (as seen [here](https://github.com/grafana/helm-charts/blob/main/charts/loki-distributed/values.yaml))

*Note*: The example setups we'll show will be based on an architecture that makes use of the following components: querier, distributor, ingester, queryFrontend, gateway, compactor, ruler, indexGateway. Different architectures are possible so adjust to your needs as necessary.

For an HA setup, deploying several components with multiple replicas each, loki-distributed values can be set like in the following example snippet:
```yaml
querier:
  replicas: 2
  maxUnavailable: 1
distributor:
  replicas: 3
  maxUnavailable: 2
ingester:
  replicas: 3
  maxUnavailable: 2
queryFrontend:
  replicas: 2
  maxUnavailable: 1
gateway:
  replicas: 2
  maxUnavailable: 1
compactor:
  kind: Deployment
  replicas: 1
  enabled: true
ruler:
  enabled: true
  replicas: 2
  maxUnavailable: 1
indexGateway:
  enabled: true
  replicas: 2
  maxUnavailable: 1
loki:
  structuredConfig:
    ruler:
      ring:
        kvstore:
          store: memberlist
    ingester:
      lifecycler:
        ring:
          replication_factor: 2
```

*Note*: If you use a compactor, only one will run at a time and it's not critical so you don't really need more than one instance of it.

Besides increasing the number of replicas, ingester `replication_factor` is of particular relevance as the Distributor will distribute the write load to multiple ingesters and will require a quorum of them to have acknowledged the write (replication_factor / 2 + 1). For lowering the chances of loosing logs, a replication_factor of at least two should be used (Loki default is 3).

Loki's storage fundamentally requires object storage, regardless of whether HA is used or if there's more than one replica for any component, as multiple components need to share this storage.

Object storage can be setup as shown in the following snippet:
```yaml
loki:
  structuredConfig:
    storage_config:
      tsdb_shipper:
        active_index_directory: /var/loki/data/tsdb-index
        cache_location: /var/loki/data/tsdb-cache
        index_gateway_client:
          # only applicable if using microservices where index-gateways are independently deployed.
          # This example is using kubernetes-style naming.
          server_address: dns:///loki-loki-distributed-index-gateway.monitoring.svc.cluster.local:9095
        shared_store: s3
      aws:
        bucketnames: <<bucket>>
        endpoint: <<endpoint>>
        region: <<region>>
        access_key_id: "${S3_ACCESS_KEY_ID}"
        secret_access_key: "${S3_SECRET_ACCESS_KEY}"
        insecure: false
        sse_encryption: false
        s3forcepathstyle: true
    schema_config:
      configs:
        # New TSDB schema below
        - from: "2024-01-01"
          index:
            period: 24h
            prefix: index_
          object_store: s3
          schema: v12
          store: tsdb
    query_scheduler:
      # the TSDB index dispatches many more, but each individually smaller, requests.
      # We increase the pending request queue sizes to compensate.
      max_outstanding_requests_per_tenant: 32768
    querier:
      max_concurrent: 16
    compactor:
      shared_store: s3
querier:
  extraArgs:
    - -config.expand-env=true
  extraEnv:
    - name: S3_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_ACCESS_KEY_ID
    - name: S3_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_SECRET_ACCESS_KEY
distributor:
  extraArgs:
    - -config.expand-env=true
  extraEnv:
    - name: S3_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_ACCESS_KEY_ID
    - name: S3_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_SECRET_ACCESS_KEY
ingester:
  extraArgs:
    - -config.expand-env=true
  extraEnv:
    - name: S3_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_ACCESS_KEY_ID
    - name: S3_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_SECRET_ACCESS_KEY
compactor:
  extraArgs:
    - -config.expand-env=true
  extraEnv:
    - name: S3_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_ACCESS_KEY_ID
    - name: S3_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: <<bucket-secret>>
          key: S3_SECRET_ACCESS_KEY
```

Here we are setting up object storage in the `structuredConfig` section, but to keep the credentials secret, we are adding env vars from secrets to several components and an extra command line argument `-config.expand-env=true`, the purpose of which is being able to use ENV vars in the `structuredConfig` section. With that argument, the components will replace the values such as `${S3_ACCESS_KEY_ID}` by the corresponding ENV var value upon processing the config.

Besides setting up object storage, we're also configuring TSDB index schema in substitution of the default boltdb-shipper, which is a more recent and more efficient alternative to it. Doing so is not mandatory but recommended.

Putting it all together and adding a few more standard options such as persistence (PVC) to some components, and enabling ServiceMonitor and Prometheus Rules, a Launchpad Monitoring namespace `helmfile.yaml` Loki config could look like:
```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@monitoring/helmfile.yaml?ref=monitoring-stable/latest
    selectorsInherited: true
    values:
    - features: [ metrics, logs]
      loki:
        values:
          loki:
            structuredConfig:
              ingester:
                # Disable chunk transfer which is not possible with statefulsets
                # and unnecessary for boltdb-shipper
                max_transfer_retries: 0
                chunk_idle_period: 1h
                chunk_target_size: 1536000
                max_chunk_age: 1h
              storage_config:
                tsdb_shipper:
                  active_index_directory: /var/loki/data/tsdb-index
                  cache_location: /var/loki/data/tsdb-cache
                  index_gateway_client:
                    # only applicable if using microservices where index-gateways are independently deployed.
                    # This example is using kubernetes-style naming.
                    server_address: dns:///loki-loki-distributed-index-gateway.monitoring.svc.cluster.local:9095
                  shared_store: s3
                aws:
                  bucketnames: <<bucket>>
                  endpoint: <<endpoint>>
                  region: <<region>>
                  access_key_id: "${S3_ACCESS_KEY_ID}"
                  secret_access_key: "${S3_SECRET_ACCESS_KEY}"
                  insecure: false
                  sse_encryption: false
                  s3forcepathstyle: true
              schema_config:
                configs:
                  # New TSDB schema below
                  - from: "2024-01-01"
                    index:
                      period: 24h
                      prefix: index_
                    object_store: s3
                    schema: v12
                    store: tsdb
              query_scheduler:
                # the TSDB index dispatches many more, but each individually smaller, requests.
                # We increase the pending request queue sizes to compensate.
                max_outstanding_requests_per_tenant: 32768
              querier:
                # Each `querier` component process runs a number of parallel workers to process queries simultaneously.
                # You may want to adjust this up or down depending on your resource usage
                # (more available cpu and memory can tolerate higher values and vice versa),
                # but we find the most success running at around `16` with tsdb
                max_concurrent: 16
              compactor:
                shared_store: s3
              ruler:
                ring:
                  kvstore:
                    store: memberlist
                rule_path: /tmp/loki/scratch
                alertmanager_url: http://kube-prometheus-stack-alertmanager:9093
                external_url: <<your alertmanager external URL>>

          querier:
            replicas: 2
            maxUnavailable: 1
            extraArgs:
              - -config.expand-env=true
            extraEnv:
              - name: S3_ACCESS_KEY_ID
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_ACCESS_KEY_ID
              - name: S3_SECRET_ACCESS_KEY
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_SECRET_ACCESS_KEY
          distributor:
            replicas: 3
            maxUnavailable: 2
            extraArgs:
              - -config.expand-env=true
            extraEnv:
              - name: S3_ACCESS_KEY_ID
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_ACCESS_KEY_ID
              - name: S3_SECRET_ACCESS_KEY
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_SECRET_ACCESS_KEY
          ingester:
            replicas: 3
            maxUnavailable: 2
            persistence:
              enabled: true
              inMemory: false
              claims:
                - name: data
                  size: 10Gi
            extraArgs:
              - -config.expand-env=true
            extraEnv:
              - name: S3_ACCESS_KEY_ID
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_ACCESS_KEY_ID
              - name: S3_SECRET_ACCESS_KEY
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_SECRET_ACCESS_KEY
          queryFrontend:
            replicas: 2
            maxUnavailable: 1
          gateway:
            replicas: 2
            maxUnavailable: 1
          compactor:
            kind: Deployment
            replicas: 1
            enabled: true
            extraArgs:
              - -config.expand-env=true
            extraEnv:
              - name: S3_ACCESS_KEY_ID
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_ACCESS_KEY_ID
              - name: S3_SECRET_ACCESS_KEY
                valueFrom:
                  secretKeyRef:
                    name: <<bucket-secret>>
                    key: S3_SECRET_ACCESS_KEY
          ruler:
            enabled: true
            replicas: 2
            maxUnavailable: 1
          indexGateway:
            enabled: true
            replicas: 2
            maxUnavailable: 1
          serviceMonitor:
            enabled: true
          prometheusRule:
            enabled: true
            namespace: monitoring
```

We've also added setting up Ruler with Alertmanager's endpoint (which can be deployed by the Monitoring Namespace as well, as will be seen in the Metrics section).


## Setting up a Prometheus Stack with HA

### Thanos

For an HA Prometheus Stack we'll need [Thanos](https://github.com/thanos-io/thanos) which is not yet part of the Monitoring Namespace, so we'll start by going over how to deploy it with Launchpad.

Thanos requires object storage so a bucket (and credentials) will be needed. To deploy Thanos we're going to use bitnami's [thanos chart](https://github.com/bitnami/charts/tree/main/bitnami/thanos), and we'll deploy that with Launchpad as in the following example helmfile:

```yaml
repositories:
- name: bitnami
  url: https://charts.bitnami.com/bitnami
          
releases:
  - name: thanos
    namespace: monitoring
    createNamespace: true
    chart: bitnami/thanos
    version: ~12.20
    missingFileHandler: Warn
    values:
    - existingObjstoreSecret: <<thanos-objstore-secret>>
      query:
        replicaCount: 2
        dnsDiscovery:
          sidecarsService: "prometheus-operated"
          sidecarsNamespace: "monitoring"
        replicaLabel:
          - prometheus_replica
      queryFrontend:
        enabled: true
        replicaCount: 2
      compactor:
        enabled: true
        persistence:
          enabled: true
        retentionResolutionRaw: 30d
        retentionResolution5m: 30d
        retentionResolution1h: 10y
      storegateway:
        enabled: true
        replicaCount: 2
        persistence:
          enabled: true
      metrics:
        enabled: true
        serviceMonitor:
          enabled: true
      prometheusRule:
        enabled: true
```

*Warning*: Never try to run more than one instance of compactor. If your object storage does not support locking, it will lead to error states.

where we added the bitnami repository, and a release to deploy the thanos chart from that repository. From the values used in this example, notice the `query.dnsDiscovery` and `query.replicaLabel` keys, as those values need to match the ones used in thanos prometheus sidecar, deployed in the `kube-prometheus-stack` release with the Monitoring Namespace.

There is one extra thing needed for Thanos, a secret with the bucket credentials as referred previously with `<<thanos-objstore-secret>>`. That secret need to have a key called `objstore.yml`, and its value content should be yaml and have keys like these:

```yaml
type: S3
config: 
  endpoint: <<endpoint>>
  bucket: <<bucket name>>
  bucket_lookup_type: path 
  insecure: false
  access_key: <<access_key>>
  secret_key: <<secret_key>>
```

`bucket_lookup_type` can be `auto`, `path` or `virtual_host`, and you would want to use `path` for Ceph Object Storage. You can check [here](https://thanos.io/tip/thanos/storage.md/#s3) all the available options.

Adding a secret like that with Launchpad and Sealed Secrets will add a release like so:

```yaml
releases:
  - name: thanos-objstore-secret
    namespace: monitoring
    chart: graphops/resource-injector
    values:
      - resources:
          thanos-objstore-secret:
            apiVersion: bitnami.com/v1alpha1
            kind: SealedSecret
            metadata:
              name: thanos-objstore-secret
              namespace: monitoring
            spec:
              encryptedData:
                objstore.yml: <<SealedSecrets Encrypted Data>>
```

The last remaining required Thanos component, the prometheus sidecar, will be deployed with `kube-prometheus-stack` so keep reading.

### Prometheus Stack

There are three components we want to focus on, Prometheus, Grafana and Alertmanager.
We'll start with adjusting Alertmanager's config for HA which is the simplest:

```yaml
alertmanager:
  alertmanagerSpec:
    replicas: 3
```

This will change our setup to a 3 replica Alertmanager and that's all that's required.

For grafana we have the added requirement of changing from the default embedded sqlite database to a shared database like Postgres.

So let's start by adding a release to create a Postgres database with the Postgres-Operator (from Launchpad Postgres-Operator Namespace). As an example:

```yaml
releases:
  - name: grafana-database
    namespace: monitoring
    createNamespace: true
    chart: graphops/resource-injector
    version: 0.2.0
    missingFileHandler: Warn
    values:
      - resources:
          grafana-database:
            apiVersion: "acid.zalan.do/v1"
            kind: postgresql
            metadata:
              name: grafana-database
              teamId: "pg"
              numberOfInstances: 2
              users:
                grafana:
                  - superuser
                  - createdb
              enableMasterLoadBalancer: false
              enableReplicaLoadBalancer: false
              enableConnectionPooler: false
              enableReplicaConnectionPooler: false
              databases:
                grafana: grafana
              postgresql:
                version: "15"
                parameters: {}
              volume:
                size: 1Gi
                storageClass: <<your_storage_class>>
              resources:
                requests:
                  cpu: 250m
                  memory: 1Gi
                limits:
                  cpu: 1000m
                  memory: 4Gi
              patroni:
                initdb:
                  encoding: "UTF8"
                  locale: "C"
                pg_hba:
                  - local   all             all                                   trust
                  - hostssl all             +zalandos    127.0.0.1/32       pam
                  - host    all             all                127.0.0.1/32       md5
                  - hostssl all             +zalandos    ::1/128            pam
                  - host    all             all                ::1/128            md5
                  - local   replication     standby                    trust
                  - hostssl replication     standby all                md5
                  - hostnossl all           all                all                md5
                  - hostssl all             +zalandos    all                pam
                  - hostssl all             all                all                md5
              podAnnotations:
                coa.zalan.do/auto-create-database: "true"
```

Having that database, adjusting grafana values setup can be achieved like so:

```yaml
grafana:
  replicas: 2
  envValueFrom:
    DATABASE_PASSWORD:
      secretKeyRef:
        name: grafana.grafana-database.credentials.postgresql.acid.zalan.do
        key: password
  sidecar:
    datasources:
      url: http://thanos-query-frontend:9090
      createPrometheusReplicasDatasources: false
  grafana.ini:
    database:
      type: postgres
      host: grafana-database.monitoring.svc:5432
      name: grafana
      user: grafana
      password: "$__env{DATABASE_PASSWORD}"
```

Finally, we need to adjust prometheus to increase replicas and use thanos sidecar.
A workable set of values for accomplishing that looks like:

```yaml
prometheus:
  prometheusSpec:
    replicas: 2
    shards: 1
    thanos:
      objectStorageConfig:
        existingSecret:
          name: <<thanos-objstore-secret>>
          key: objstore.yml
    replicaExternalLabelName: prometheus_replica
  thanosService:
    enabled: true
  thanosServiceMonitor:
    enabled: true
```

Notice the sidecar will be configured to use the same secret provisioned before for Thanos, and the `replicaExternalLabelName` matches the value used before as well.

Taking all of this together, here's an example of an helmfile that deploys Thanos and `kube-prometheus-stack` setting the most important values for HA:

```yaml
repositories:
- name: bitnami
  url: https://charts.bitnami.com/bitnami

helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@monitoring/helmfile.yaml?ref=monitoring-stable/latest
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
      features: [ metrics, logs]
      kube-prometheus-stack:
        values:
          kube-prometheus-stack:
            alertmanager:
              alertmanagerSpec:
                replicas: 3
            grafana:
              replicas: 2
              envValueFrom:
                DATABASE_PASSWORD:
                  secretKeyRef:
                    name: grafana.grafana-database.credentials.postgresql.acid.zalan.do
                    key: password
              sidecar:
                datasources:
                  url: http://thanos-query-frontend:9090
                  createPrometheusReplicasDatasources: false
              grafana.ini:
                database:
                  type: postgres
                  host: grafana-database.monitoring.svc:5432
                  name: grafana
                  user: grafana
                  password: "$__env{DATABASE_PASSWORD}"
            prometheus:
              prometheusSpec:
                replicas: 2
                shards: 1
                thanos:
                  objectStorageConfig:
                    existingSecret:
                      name: <<thanos-objstore-secret>>
                      key: objstore.yml
                replicaExternalLabelName: prometheus_replica
              thanosService:
                enabled: true
              thanosServiceMonitor:
                enabled: true

releases:
  - name: thanos-objstore-secret
    namespace: monitoring
    chart: graphops/resource-injector
    values:
      - resources:
          thanos-objstore-secret:
            apiVersion: bitnami.com/v1alpha1
            kind: SealedSecret
            metadata:
              name: thanos-objstore-secret
              namespace: monitoring
            spec:
              encryptedData:
                objstore.yml: <<SealedSecrets Encrypted Data>>

  - name: thanos
    namespace: monitoring
    createNamespace: true
    chart: bitnami/thanos
    version: ~12.20
    missingFileHandler: Warn
    values:
    - existingObjstoreSecret: <<thanos-objstore-secret>>
      query:
        replicaCount: 2
        dnsDiscovery:
          sidecarsService: "prometheus-operated"
          sidecarsNamespace: "monitoring"
        replicaLabel:
          - prometheus_replica
      queryFrontend:
        enabled: true
        replicaCount: 2
      compactor:
        enabled: true
        persistence:
          enabled: true
        retentionResolutionRaw: 30d
        retentionResolution5m: 30d
        retentionResolution1h: 10y
      storegateway:
        enabled: true
        replicaCount: 2
        persistence:
          enabled: true
      metrics:
        enabled: true
        serviceMonitor:
          enabled: true
      prometheusRule:
        enabled: true

  - name: grafana-database
    namespace: monitoring
    createNamespace: true
    chart: graphops/resource-injector
    version: 0.2.0
    missingFileHandler: Warn
    values:
      - resources:
          grafana-database:
            apiVersion: "acid.zalan.do/v1"
            kind: postgresql
            metadata:
              name: grafana-database
              teamId: "pg"
              numberOfInstances: 2
              users:
                grafana:
                  - superuser
                  - createdb
              enableMasterLoadBalancer: false
              enableReplicaLoadBalancer: false
              enableConnectionPooler: false
              enableReplicaConnectionPooler: false
              databases:
                grafana: grafana
              postgresql:
                version: "15"
                parameters: {}
              volume:
                size: 1Gi
                storageClass: <<your_storage_class>>
              resources:
                requests:
                  cpu: 250m
                  memory: 1Gi
                limits:
                  cpu: 1000m
                  memory: 4Gi
              patroni:
                initdb:
                  encoding: "UTF8"
                  locale: "C"
                pg_hba:
                  - local   all             all                                   trust
                  - hostssl all             +zalandos    127.0.0.1/32       pam
                  - host    all             all                127.0.0.1/32       md5
                  - hostssl all             +zalandos    ::1/128            pam
                  - host    all             all                ::1/128            md5
                  - local   replication     standby                    trust
                  - hostssl replication     standby all                md5
                  - hostnossl all           all                all                md5
                  - hostssl all             +zalandos    all                pam
                  - hostssl all             all                all                md5
              podAnnotations:
                coa.zalan.do/auto-create-database: "true"

```

