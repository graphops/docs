---
sidebar_position: 3
---

# Quick Start

We have designed Launchpad to be modular so that you can implement the whole project or parts of it as best suits your needs. Checkout [this page](modularity.md) for more info about the modularity of Launchpad. 

Make sure you have all the [Prerequisites](prerequisites) before starting.

To start jump to the relevant section based on how you're using the project:

- [Using Launchpad End to End](#using-launchpad-end-to-end) 
- [Using Launchpad Charts and Helmfile](#using-helmfile-and-launchpad-charts)

## Using Launchpad end to end

This section takes you through steps of getting started using all aspects of the Launchpad project.

### Install Taskfile

Launchpad has a large number of tooling dependencies that will run on your local machine. The most important dependency is [Taskfile](https://taskfile.dev).

Follow the [installation instructions](https://taskfile.dev/installation/) for your environment and install Taskfile on your local machine before continuing.

### Use launchpad-starter for your new infra repo

Next, we are going to create the repository that will contain your new infrastructure's configuration.

First, prepare a new empty repository to hold your infrastructure repo. This could be a new repository on GitHub, GitLab, BitBucket, etc.

Next, we're going to clone `launchpad-starter`, and then replace the existing `origin` remote with your new remote repository. This allows us to retain the commit history of `launchpad-starter`. A shared commit history will make future rebases against the upstream `launchpad-starter` much easier.

```shell
# Clone the starter into my-new-infra and cd into it
git clone https://github.com/graphops/launchpad-starter my-new-infra
cd my-new-infra

# Set your own remote as origin
git remote remove origin
git remote add origin git@github.com:you/your-infra.git

# Push to your new repo
git push origin main
```

All work on your infrastructure will take place in this new repo. We recommend carefully version controlling all changes you make to your infrastructure configuration.

### Setup the launchpad dependencies

Next, we should install all of the local tooling dependencies (like Helm or Kubectl) that we will need.

We can easily do that by running the launchpad:setup command.

```shell
# You may need to use sudo for this command
task launchpad:setup

# For now, this will just run launchpad:deps, which will install all the local tooling dependencies
```

### Connect your Local environment to your Kubernetes cluster

To connect your local machine to a Kubernetes cluster, you can follow these general steps:

**Get Cluster Configuration:** Make sure your [`kubeconfig`](https://devopscube.com/kubernetes-kubeconfig-file/) has been added to `~/.kube/config` file. If you don't have this file, you may need to ask the administrator that created the cluster for the configuration.

**Verify Configuration:** Open the `config` file in a text editor to verify that it contains the correct cluster details, including server URL, certificates, and context information.

**Switch Context if working with multiple Kubernetes clusters:** A context in Kubernetes is a combination of a cluster, a user, and a namespace. Use the `kubectl config use-context` command to set your desired context. For example:

   ```sh
   kubectl config use-context <context-name>
   ```

**Test Connection:** Run a simple `kubectl` command to test if your local machine can connect to the cluster:

   ```sh
   kubectl get pods
   ```

   This command should list the pods in the default namespace of your cluster.

Remember that each cluster might have specific setup steps or requirements, especially if it's managed by a cloud provider. Always refer to the documentation provided by the cluster administrator or the cloud provider for detailed instructions on connecting your local machine to the cluster.

### 🎉 Milestone: Local environment configured!

- [x] We now have our own private git repo containing the declarative configuration for our cluster deployments
- [x] We have installed all the tooling dependencies on our local machine, which will be used to control the cluster
- [ ] Next: Copy `sample.helmfile.yaml` to `helmfile.yaml` and edit it to select which Namespaces you would like to deploy on your Kubernetes cluster

### Customize your helmfiles

To get started with Helmfile, if you don’t already have a `helmfile.yaml`, you can begin by copying the provided sample configuration file named `sample.helmfile.yaml`:

```shell
cp sample.helmfile.yaml helmfile.yaml
```

After copying, open `helmfile.yaml` in your preferred text editor to make necessary modifications. Within this file, you will find a `helmfiles:` section which organizes deployment configurations by namespace through multiple helmfile paths:

```yaml
helmfiles:
  - path: namespaces/storage.yaml
  - path: namespaces/sealed-secrets.yaml
  - path: namespaces/postgres-operator.yaml
  - path: namespaces/ingress.yaml
  - path: namespaces/monitoring.yaml
  - path: namespaces/eth-sepolia.yaml
  - path: namespaces/eth-mainnet.yaml
  - path: namespaces/arbitrum-sepolia.yaml
  - path: namespaces/graph-arbitrum-sepolia.yaml
```

This structure allows you to manage deployments modularly. You can add or remove entries in this list to include new namespaces or exclude those you no longer need. Each path points to a specific helmfile that defines resources to be deployed within that namespace. For instance, looking at `namespaces/storage.yaml`:

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-stable/latest
    selectorsInherited: true
    values:
      - helmDefaults:
          <<: *helmDefaults
```

In the example above, values can be set to override the default configurations in a given Namespace, allowing for customization according to specific requirements. Refer to Namespaces documentation available here for more examples on how to configure them, or to see which ones are available: [Namespaces](https://github.com/graphops/launchpad-namespaces).

### Syncing your `helmfile.yaml` with the cluster

Next we need to install key non-Graph components of our stack, including monitoring and logging systems.

Let's see what the `releases:apply-base` task is actually doing by running `task help -- releases:apply-base`:

```shell
task: releases:apply-base
  
Apply current helmfile state filtered by all base layer services
  
commands:
  
• task releases:apply -- launchpad.graphops.xyz/layer=base
```

As you can see, `releases:apply-base` just calls `releases:apply` filter for all namespaces with the label `launchpad.graphops.xyz/layer=base`.

You can list all the releases present in the helmfile.yaml, and their labels, by running `task releases:list`:
```shell
NAME                            NAMESPACE               ENABLED INSTALLED       LABELS                                                                                  CHART                                           VERSION       
openebs                         storage                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:storage              openebs/openebs                                 3.8.0         
openebs-zfs-localpv             storage                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:storage              openebs-zfs-localpv/zfs-localpv                 2.3.0         
openebs-zfs-storageclass        storage                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:storage              graphops/resource-injector                      0.2.0         
openebs-zfs-snapclass           storage                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:storage              graphops/resource-injector                      0.2.0         
postgres-operator               postgres-operator       true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:postgres-operator    postgres-operator-charts/postgres-operator      1.10.0        
ingress-nginx                   ingress                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:ingress              ingress-nginx/ingress-nginx                     4.7.1         
cert-manager                    ingress                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:ingress              jetstack/cert-manager                           v1.12.3       
cert-manager-resources          ingress                 true    true            launchpad.graphops.xyz/layer:base,launchpad.graphops.xyz/namespace:ingress              graphops/resource-injector                      0.2.0         
sealed-secrets                  sealed-secrets          true    true            launchpad.graphops.xyz/namespace:sealed-secrets                                         sealed-secrets/sealed-secrets                   2.1
```

First, update the Helmfile configuration for the base namespaces. You will likely need to configure storage and ingress settings in their respective files, `namespaces/storage.yaml` and `namespaces/ingress.yaml`, by customizing them with your specific values.

In particular, the storage namespace may be a requirement even for other base namespaces, so lets install that one first by running `task releases:apply -- launchpad.graphops.xyz/namespace=storage`

Next, let's go ahead and install all the remaining cluster services. You will be prompted to install each namespace, with a summary of changes to be made.

```shell
task releases:apply-base
```

### 🎉 Milestone: Kubernetes and core systems running!

- [x] We connected to our hosts, configured them, and installed Kubernetes
- [x] We installed core cluster services like Prometheus, Grafana, Loki and others
- [ ] Next: Deploy blockchain nodes and the Graph Indexing stack

:::tip
You can now use `task indexer:forward-grafana` to securely access your remote cluster's Grafana instance at http://localhost:3001
:::

### Deploy blockchain namespaces as desired

:::note
If you have existing external blockchain nodes that you would like to use instead of deploying them into your cluster, you can skip this section, but make sure that you can access those nodes securely (e.g. via an internal network, or using HTTPS and authentication).
:::

Launchpad comes with Namespace definitions for a number of blockchain networks, including Ethereum Mainnet, Ethereum Sepolia Testnet, Gnosis Chain Mainnet, Polygon mainnet, Abitrum One, Arbitrum Sepolia, Celo Mainnet and others. Using those Namespaces, you can easily deploy blockchain nodes for the networks you want to index into your cluster.

#### (optional, arbitrum-sepolia) Install Arbitrum Nitro and Proxyd for Arbitrum Sepolia

Make sure that your `helmfile.yaml` includes a path that directing to `namespaces/arbitrum-sepolia.yaml`. Afterward, carefully examine the settings within `namespaces/arbitrum-sepolia.yaml` to confirm they are accurate and align with your specific needs:

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@arbitrum/helmfile.yaml?ref=arbitrum-canary/latest
    selectorsInherited: true
    values:
    - flavor: sepolia
      helmDefaults:
        <<: *helmDefaults
      arbitrum-nitro:
        values:
          nitro:
            config:
              chain: 421614
              parentChainUrl: <<your-l1-chain-url>> ## if setup with default ethereum ns values this would be http://proxyd-proxyd.eth-sepolia:8545 
              parentChainBeaconUrl: <<your-l1-consensus-layer-url>> ## if setup with defaul ethereum ns values this would be http://nimbus.eth-sepolia:5052
```


Deploy by syncing your cluster with the declarative `helmfile.yaml`:

```shell
task releases:apply -- arbitrum-sepolia
```

### Install the Graph Arbitrum Sepolia Indexer Stack

Make sure that your `helmfile.yaml` includes a path that directing to `namespaces/graph-arbitrum-sepolia.yaml`. Afterward, carefully examine the settings within `namespaces/graph-arbitrum-sepolia.yaml` to confirm they are accurate and align with your specific needs.

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@graph/helmfile.yaml?ref=graph-canary/latest
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
      flavor: "arbitrum-sepolia"
    - graph-network-indexer:
        values:
          indexerDefaults:
            config:
              indexer-address: "<<your indexer arbitrum address>>"
          indexerAgent:
            config:
              public-indexer-url: "<<your public index URL>>"
      graph-operator-mnemonic:
        values:
          resources:
            ### RECOMMENDED, safe to commit
            sealed-secret:
              apiVersion: bitnami.com/v1alpha1
              kind: SealedSecret
              metadata:
                name: graph-operator-mnemonic
                namespace: graph-arbitrum-sepolia
              spec:
                template:
                  metadata:
                    name: graph-operator-mnemonic
                    namespace: graph-arbitrum-sepolia
                  type: Opaque
                encryptedData:
                  mnemonic: <<your encrypted mnemonic>> # Generate a SealedSecret encryptedData key with the "utils:seal-secrets" task, e.g.: task utils:seal-secrets -- -n graph-arbitrum-sepolia -s graph-operator-mnemonic -k mnemonic -v "your mnemonic words"
      graph-database:
        values:
          resources:
            postgres-cr-primary-subgraph-data:
              spec:
                volume:
                  storageClass: "<<your storage class>>"
            postgres-cr-indexer-metadata:
              spec:
                volume:
                  storageClass: "<<your storage class>>"
```

Proceed to deploy:

```shell
task releases:apply -- graph-arbitrum-sepolia
```

### 🎉 Milestone: Graph Indexer running and accessible

- [x] We (optionally) configured and deployed blockchain nodes into our cluster
- [x] We configured and deployed the Graph Indexing stack into our cluster
- [ ] Next: Use the remote-toolbox to allocate to subgraphs and begin serving requests

## Updates

### Updating `launchpad-namespace` changes into your stack 

As new versions of key components in the stack are released, we will update `launchpad-namespaces`'s templated definitions and the various release streams available. You can selectively inherit these updates with ease by changing the git ref as a means to track what release stream you may want, or to pin to any particular major, minor or patch version.

**following latest**:

Your `?ref=` would look like this, for the storage namespace: `?ref=storage-latest`, or alternatively: `?ref=storage-stable/latest`.
The path for this *Namespace*, under helmfiles, would then look like:

```shell
- path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-latest
```

**following a specific major version**:

Your `?ref=` would look like this, for the storage namespace: `?ref=storage-v1`.
The path for this *Namespace*, under helmfiles, would then look like:

```shell
- path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-v1
```

**following a specific minor version**:

Your `?ref=` would look like this, for the storage namespace: `?ref=storage-v1.2`.
The path for this *Namespace*, under helmfiles, would then look like:

```shell
- path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-v1.2
```

**pinning to an exact version**:

Your `?ref=` would look like this, for the storage namespace: `?ref=storage-v1.2.2`.
The path for this *Namespace*, under helmfiles, would then look like:

```shell
- path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-v1.2.2
```
**following the latest canary**:

Your `?ref=` would look like this, for the storage namespace: `?ref=storage-canary/latest`.
The path for this *Namespace*, under helmfiles, would then look like:

```shell
- path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-canary/latest
```

We would recommend that you either follow the latest stable releases, or pin to a specific version.

:::note
For full implementation details and other comprehensive notes about `launchpad-namespaces` please visit the [github repo](https://github.com/graphops/launchpad-namespaces/blob/main/README.md).
:::

### Pulling in starter changes

From time to time, you may want to update your infra repo with the latest changes from our starter. 

Launchpad comes with a built in task to do this:

```shell
task launchpad:pull-upstream-starter
```

## Using Helmfile and Launchpad Charts

This guide will cover two primary ways to deploy blockchain-related resources in Kubernetes using Launchpad charts: deploying all components at once using Helmfile and deploying individual components directly using Helm charts.

### Prerequisites

Ensure you have [helm](https://github.com/helm/helm), [helmfile](https://github.com/helmfile/helmfile) and it's dependency [helm-diff](https://github.com/databus23/helm-diff) installed on your local machine. This guide assumes familiarity with basic Helm and Helmfile operations.

Before proceeding with this guide, make sure the following tools are installed on your local machine:

- [Helm](https://github.com/helm/helm): The package manager for Kubernetes, essential for managing and deploying applications.
- [Helmfile](https://github.com/helmfile/helmfile): A tool to help streamline the use of Helm charts, enabling better management of Helm chart configurations.
- [Helm-diff](https://github.com/databus23/helm-diff): A Helm plugin that helps visualize differences between your Helmfile configurations and what is actually deployed in your cluster. This plugin is a dependency for effectively using Helmfile.
- (Optional)[Kustomize](https://github.com/kubernetes-sigs/kustomize): A tool for customizing Kubernetes configurations beyond what is available with Helm, useful for more complex deployment scenarios.
This guide assumes you are familiar with basic operations of Helm and Helmfile.

### Deploying using Launchpad-charts directly

If you prefer to use individual components of Launchpad, such as Launchpad Charts, you can add the Launchpad Helm repository and install charts directly:

```shell
helm repo add graphops https://graphops.github.io/launchpad-charts
helm install my-release graphops/<chart-name> --values <your-values-override.yaml>
```

#### Key Consideration

Before proceeding, it is important to note that most Kubernetes clusters do not come pre-configured with a [Container Storage Interface (CSI)](https://kubernetes-csi.github.io/docs/) for handling storage volumes. This guide relies on the ability to create storage volumes. It is also necessary to have an Ingress controller installed and configured, as it is essential for managing traffic to and from your applications.

### Deploying using Helmfile

For a comprehensive deployment, managing all related Helm releases and their values via a single Helmfile offers simplicity and maintainability. This method is particularly effective when deploying complex stacks.

### Deploy blockchain namespaces as desired

:::note
If you have existing external blockchain nodes that you would like to use instead of deploying them into your cluster, you can skip this section, but make sure that you can access those nodes securely (e.g. via an internal network, or using HTTPS and authentication).
:::

#### (optional, arbitrum-sepolia) Install Arbitrum Nitro and Proxyd for Arbitrum Sepolia

The following `helmfile.yaml` provides an example configuration for deploying Arbitrum Nitro on the Arbitrum Sepolia network. For an easier setup process, we recommend utilizing the [Launchpad Arbitrum namespace](#optional-arbitrum-sepolia-install-arbitrum-nitro-and-proxyd-for-arbitrum-sepolia), which includes most of the necessary configurations pre-defined for your convenience.

```yaml
# helmfile.yaml
repositories:
  - name: graphops
    url: https://graphops.github.io/launchpad-charts

releases:
  - name: arbitrum-nitro
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/arbitrum-nitro
    version: 0.3.4
    values:
      - nitro:
          config:
            chain: 421614 # determines Arbitrum network - 421614 Sepolia
            parentChainUrl: http://your-eth-sepolia-url:8545  ## changeme
            parentChainBeaconUrl: http://your-eth-consensus-node-url:5052  ## changeme

          volumeClaimSpec:
            resources:
              requests:
                # -- The amount of disk space to provision for Arbitrum Nitro
                storage: 1Ti
            # -- The storage class to use when provisioning a persistent volume for Arbitrum-Nitro 
            storageClassName: openebs-rawfile-localpv # change me as needed

          restoreSnapshot:
            enabled: false

          extraLabels:
            app.kubernetes.io/workload-type: blockchain-stateful
            app.kubernetes.io/blockchain: arbitrum-nitro

          # if using Prometheus for monitoring:
          prometheus:
            serviceMonitors:
              enabled: true

  - name: proxyd-nitro
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/proxyd
    version: 0.5.3
    values:
      - backends:
          arbitrum-nitro:
            enabled: true
            # -- Define the RPC URL for the backend
            rpcUrl: http://arbitrum-nitro:8547
            # -- Define the WS URL for the backend
            wsUrl: ws://arbitrum-nitro:8548
            # -- Define additional configuration keys for the backend (see [proxyd config](https://github.com/ethereum-optimism/optimism/blob/5d309e6a6d5e1ef6a88c1ce827b7e6d47f033bbb/proxyd/example.config.toml#L47))
            extraConfig:
              consensus_skip_peer_count: true
            # -- Define which backend groups the backend is part of
            groups:
              - main

          # if using Prometheus and Grafana for monitoring:
          prometheus:
            serviceMonitors:
              enabled: true

          grafana:
            dashboards: true
```


Deploy by syncing your cluster with the declarative `helmfile.yaml`:

```shell
helmfile -f path/to/helmfile.yaml sync
```

### Install the Graph Arbitrum Sepolia Indexer Stack

This section of the guide does not include the setup for `subgraph-data` and `indexer-metadata` PostgreSQL databases necessary for `graph-node` and `indexer-agent`. You are encouraged to explore [managed solutions](https://www.postgresql.org/support/professional_hosting/), use [Bitnami's chart](https://github.com/bitnami/charts/tree/main/bitnami/postgresql), or deploy [Zalando's Operator](https://github.com/zalando/postgres-operator/tree/master) as part of the Launchpad Namespaces which includes a ready-to-use Postgres setup or independently.

Include the necessary configurations for `graph-node` and `indexer-agent` in your helmfile.yaml as shown in the previous sections, adjusting PostgreSQL references and other settings to fit your specific requirements.

```yaml
releases:
  - name: graph-node
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/graph-node
    version: 0.5.3
    values:
    # This is a values.yaml override file for https://github.com/graphops/launchpad-charts/tree/main/charts/graph-node
    - graphNodeDefaults:
        env:
          # Graph Node configuration
          IPFS: "https://ipfs.network.thegraph.com"
          GRAPH_ALLOW_NON_DETERMINISTIC_FULLTEXT_SEARCH: "true"
          # Database configuration
          PRIMARY_SUBGRAPH_DATA_PGHOST: <your-subgraph-data-postgresql-host> ## change me
          PRIMARY_SUBGRAPH_DATA_PGPORT: 5432
          PRIMARY_SUBGRAPH_DATA_PGDATABASE: <your-subgraph-data-postgresql-db> ## change me

        # Database sensitive/secret information
        secretEnv:
          PRIMARY_SUBGRAPH_DATA_PGUSER:
            secretName: <your-secret-containing-subgraph-data-postgresql-username>
            key: username
          PRIMARY_SUBGRAPH_DATA_PGPASSWORD:
            secretName: <your-secret-containing-subgraph-data-postgresql-password>
            key: password

      graphNodeGroups:
        index:
          replicaCount: 1 # scale me
        query:
          replicaCount: 1 # scale me
      
      chains:
        mainnet:
          enabled: true
          shard: primary
          provider:
            - label: eth-mainnet
              url: <your-eth-mainnet-RPC> ## change me
              features: [archive, traces]

        arbitrum-sepolia:
          enabled: true
          shard: primary
          provider:
            - label: arbitrum-sepolia
              url: http://proxyd-proxyd.arbitrum-sepolia:8545
              features: [archive, traces]

      # if using Prometheus and Grafana for monitoring:
      prometheus:
        serviceMonitors:
          enabled: true

      grafana:
        dashboards: true
        datasources: true

  - name: graph-network-indexer
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/graph-network-indexer
    version: 0.2.5
    values:
      # This is a values.yaml override file for https://github.com/graphops/launchpad-charts/tree/main/charts/graph-network-indexer
    - indexerDefaults:
        config:
          ethereum: "http://proxyd-proxyd.arbitrum-sepolia:8545"
          ethereum-network: "arbitrum-sepolia"
          network-subgraph-endpoint: "https://gateway-arbitrum.network.thegraph.com/api/{{ .Values.secretEnv.api_key }}/subgraphs/id/3xQHhMudr1oh69ut36G2mbzpYmYxwqCeU6wwqyCDCnqV"
          graph-node-query-endpoint: "http://graph-node-query:8000"
          graph-node-status-endpoint: "http://graph-node-block-ingestor:8030/graphql"
          postgres-host: "<your-indexer-metadata-postgresql-host>" ## change me
          postgres-database: "<your-indexer-metadata-postgresql-db>" ## change me

        secretEnv:
          api_key: <your-secret-graph-network-api-key>

      indexerAgent:
        config:
          collect-receipts-endpoint: "https://gateway-testnet-arbitrum.network.thegraph.com/collect-receipts"
          network-subgraph-deployment: "QmT8UDGK7zKd2u2NQZwhLYHdA4KM55QsivkE3ouCuX6fEj" # find at https://github.com/graphprotocol/indexer/blob/main/docs/networks.md
          epoch-subgraph-endpoint: "https://gateway-arbitrum.network.thegraph.com/api/{{ .Values.secretEnv.api_key }}/subgraphs/id/BhnsdeZihU4SuokxZMLF4FQBVJ3jgtZf6v51gHvz3bSS" # find at https://github.com/graphprotocol/indexer/blob/main/docs/networks.md
          epoch-subgraph-deployment: "QmTpu2mVquoMpr4SWSM77nGkU3tcUS1Bhk1sVHpjDrAUAx"
          graph-node-admin-endpoint: "http://graph-node-block-ingestor:8020"
          public-indexer-url: "<your-public-indexer-url>" ## change me
          index-node-ids: "graph-node-index-0" # if more than one graph-node index, specify as comma delimited list ie "graph-node-index-0, graph-node-index-1"

        secretEnv:
          INDEXER_AGENT_MNEMONIC:
            secretName: <your-secret-containing-your-graph-operator-mnemonic>
            key: mnemonic
          INDEXER_AGENT_POSTGRES_USERNAME:
            secretName: <your-secret-containing-indexer-metadata-postgresql-username>
            key: username
          INDEXER_AGENT_POSTGRES_PASSWORD:
            secretName: <your-secret-containing-indexer-metadata-postgresql-password>
            key: password
          api_key: <your-secret-graph-network-api-key>


      indexerService:
        replicas: 1 # scale me

        config:
            client-signer-address: "0xe1EC4339019eC9628438F8755f847e3023e4ff9c" # find at https://github.com/graphprotocol/indexer/blob/main/docs/networks.md
        
        secretEnv:
          INDEXER_SERVICE_MNEMONIC:
            secretName: <your-secret-containing-your-graph-operator-mnemonic>
            key: mnemonic
          INDEXER_SERVICE_POSTGRES_USERNAME:
            secretName: <your-secret-containing-indexer-metadata-postgresql-username>
            key: username
          INDEXER_SERVICE_POSTGRES_PASSWORD:
            secretName: <your-secret-containing-indexer-metadata-postgresql-password>
            key: password
      # if using Prometheus and Grafana for monitoring:
      prometheus:
        serviceMonitors:
          enabled: true

      grafana:
        dashboards: true

  - name: subgraph-radio
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/subgraph-radio
    version: 0.2.8
    values:
    - env:
        GRAPH_NODE_STATUS_ENDPOINT: http://graph-node-block-ingestor:8030/graphql
        INDEXER_MANAGEMENT_SERVER_ENDPOINT: http://graph-network-indexer-agent:8000
        GRAPHCAST_NETWORK: "testnet"
        REGISTRY_SUBGRAPH: "https://gateway-arbitrum.network.thegraph.com/api/{{ .Values.secretEnv.api_key }}/subgraphs/id/5tHgjCNF4XxAzp9ja8dU3j9JrqU7zctXj6DnxWpwAzc6"
        NETWORK_SUBGRAPH: "https://gateway-arbitrum.network.thegraph.com/api/{{ .Values.secretEnv.api_key }}/subgraphs/id/3xQHhMudr1oh69ut36G2mbzpYmYxwqCeU6wwqyCDCnqV"
      secretEnv:
        MNEMONIC:
          secretName: <your-secret-containing-your-graph-operator-mnemonic>
          key: mnemonic
          api_key: <your-secret-graph-network-api-key>

  - name: graph-toolbox
    namespace: arbitrum-sepolia
    createNamespace: true
    chart: graphops/graph-toolbox
    version: 0.1.0
    values:
    - config:
        graphNode:
          # -- URL to Graph Node Admin API
          adminApiUrl: http://graph-node-block-ingestor:8020
          existingConfigMap:
            # -- The name of the ConfigMap that contains your Graph Node config.toml
            configMapName: graph-node-config
            # -- The name of the data key in the ConfigMap that contains your config.toml
            configFileKey: config.toml
        indexer:
          # -- URL to Indexer Agent Management Server
          indexerAgentManagementUrl: http://graph-network-indexer-agent:8000

      aliases:
        graphman: graphman --config /graphman-config/config.toml
        indexer: graph-indexer indexer
        psql-primary-subgraph-data: >
          PGPASSWORD=$PRIMARY_SUBGRAPH_DATA_PGPASSWORD psql -w -U $PRIMARY_SUBGRAPH_DATA_PGUSER -d "host=$PRIMARY_SUBGRAPH_DATA_PGHOST,port=$PRIMARY_SUBGRAPH_DATA_PGPORT,dbname=$PRIMARY_SUBGRAPH_DATA_PGDATABASE"
        psql-indexer-metadata: >
          PGPASSWORD=$INDEXER_METDATA_PGPASSWORD psql -w -U $INDEXER_METADATA_PGUSER -d "host=$INDEXER_METADATA_PGHOST,port=$INDEXER_METADATA_PGPORT,dbname=$INDEXER_METADATA_PGDATABASE"

      env:
        PRIMARY_SUBGRAPH_DATA_PGHOST: <your-subgraph-data-postgresql-host> ## change me
        PRIMARY_SUBGRAPH_DATA_PGPORT: 5432
        PRIMARY_SUBGRAPH_DATA_PGDATABASE: <your-subgraph-data-postgresql-db> ## change me
        INDEXER_METADATA_PGHOST: <your-indexer-metadata-postgresql-host> ## change me
        INDEXER_METADATA_PGPORT: 5432
        INDEXER_METADATA_PGDATABASE: <your-indexer-metadata-postgresql-db> ## change me

      secretEnv:
        PRIMARY_SUBGRAPH_DATA_PGUSER:
          secretName: <your-secret-containing-subgraph-data-postgresql-username> ## change me
          key: username
        PRIMARY_SUBGRAPH_DATA_PGPASSWORD:
          secretName: <your-secret-containing-subgraph-data-postgresql-password> ## change me
          key: password
        INDEXER_METADATA_PGUSER:
          secretName: <your-secret-containing-indexer-metadata-postgresql-username> ## change me
          key: username
        INDEXER_METDATA_PGPASSWORD:
          secretName: <your-secret-containing-indexer-metadata-postgresql-username> ## change me
          key: password
```

Proceed to deploy:

```shell
helmfile -f path/to/helmfile.yaml sync
```

### 🎉 Milestone: Graph Indexer running and accessible

Once your deployments are successfully applied, your Graph Indexer should be operational, with blockchain nodes (if deployed) and the Graph Indexing stack running in your Kubernetes cluster.

- [x] We (optionally) configured and deployed blockchain nodes into our cluster
- [x] We configured and deployed the Graph Indexing stack into our cluster
- [ ] Next: Use the remote-toolbox to allocate to subgraphs and begin serving requests
