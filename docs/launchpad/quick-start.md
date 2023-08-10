---
sidebar_position: 3
---

# Quick Start

Make sure you have all the [Prerequisites](prerequisites) before starting.

### Install Taskfile

Launchpad has a large number of tooling dependencies that will run on your local machine. The most important dependency is [Taskfile](https://taskfile.dev).

Follow the [installation instructions](https://taskfile.dev/installation/) for your environment and install Taskfile on your local machine before continuing.

### Use launchpad-starter for your new infra repo

Next, we are going to create the repository that will contain your new infrastructure's configuration.

First, prepare a new empty repository to hold your infrastructure repo. This could be a new repository on GitHub, GitLab, BitBucket, etc.

Next, we're going to clone `launchpad-starter`, and then replace the existing `origin` remote with your new remote repository. This allows us to retain the commit history of `launchpad-starter`. A shared commit history will make future rebases against the upstream `launchpad-starter` much easier.

```shell
# Clone the starter into my-new-infra and cd into it
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

### 🎉 Milestone: Local environment configured!

- [x] We now have our own private git repo containing the declarative configuration for our cluster deployments
- [x] We have installed all the tooling dependencies on our local machine, which will be used to control the cluster
- [ ] Next: Copy `sample.helmfile.yaml` to `helmfile.yaml` and edit it to customize and deploy Namespaces on the Kubernetes cluster

### Customize your helmfile.yaml

If you don't have an `helmfile.yaml` file yet, you can start with copying the existing sample one (`sample.helmfile.yaml`):
```shell
cp sample.helmfile.yaml helmfile.yaml
```

and edit it with your editor of choice. Under that file, there is an `helmfiles:` section declaring Namespaces to be deployed on the cluster, looking like this:

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@storage/helmfile.yaml?ref=storage-stable/latest
    selectorsInherited: true
    values:
      - helmDefaults:
          <<: *helmDefaults

  - path: git::https://github.com/graphops/launchpad-namespaces.git@monitoring/helmfile.yaml?ref=monitoring-stable/latest
    selectorsInherited: true

  - path: git::https://github.com/graphops/launchpad-namespaces.git@ingress/helmfile.yaml?ref=ingress-stable/latest
    selectorsInherited: true
    values:
      - kubeVersion: *kubeVersion
```

You can override values, and select which Namespaces you are interested in. Refer to Namespaces documentation available here for more examples on how to configure them, or to see which ones are available: [Namespaces](https://github.com/graphops/launchpad-namespaces).

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

First, update configuration in your `helmfile.yaml` for the base namespaces. You will likely need to configure storage and ingress with your own values.

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

Launchpad comes with Namespace definitions for a number of blockchain networks, including Ethereum Mainnet, Ethereum Goerli Testnet, Gnosis Chain Mainnet, Polygon mainnet, Abitrum Mainnet, Avalanche Mainnet, Celo Mainnet and others. Using those Namespaces, you can easily deploy blockchain nodes for the networks you want to index into your cluster.

#### (optional, eth-goerli) Install Erigon, Nimbus and Proxyd for Ethereum Goerli

Update your `helmfile.yaml` to add the ethereum Namespace and ensure the values are correct:

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml
    selectorsInherited: true
    values:
    - flavor: goerli
      helmDefaults:
        <<: *helmDefaults
    - erigon:
        values:
          statefulNode:
            volumeClaimSpec:
              storageClassName: "<<your storage class>>"
            jwt:
              existingSecret:
                name: jwt
                key: jwt
      nimbus:
        values:
          nimbus:
            volumeClaimSpec:
              storageClassName: "<<your storage class>>"
            jwt:
              existingSecret:
                name: jwt
                key: jwt
```

You will need to generate a JWT and create a kubernetes secret accordingly, to be used by Erigon and Nimbus.

Deploy by syncing your cluster with the declarative `helmfile.yaml`:

```shell
task releases:apply -- eth-goerli
```

### Install the Graph Goerli Indexer Stack

Update your `helmfile` to include the graph Namespace, and configure the values accordingly:

```yaml
helmfiles:
  - path: git::https://github.com/graphops/launchpad-namespaces.git@graph/helmfile.yaml
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
      flavor: "goerli"
    - graph-network-indexer:
        values:
          indexerDefaults:
            config:
              indexer-address: "<<your indexer ethereum address>>"
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
                namespace: graph-goerli
              spec:
                template:
                  metadata:
                    name: graph-operator-mnemonic
                    namespace: graph-goerli
                  type: Opaque
                encryptedData:
                  mnemonic: <<your encrypted mnemonic>> # Generate a SealedSecret encryptedData key with the "utils:seal-secrets" task, e.g.: task utils:seal-secrets -- -n graph-goerli -s graph-operator-mnemonic -k mnemonic -v "your mnemonic words"
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
task releases:apply -- graph-goerli
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

We would recommend that you either follow the latest stable releases, or pin to a specific version and use pulling in starter changes as a means to keep your `helmfile.yaml` updated regularly.

:::note
For full implemetation details and other comprehensive notes about `launchpad-namespaces` please visit the [github repo](https://github.com/graphops/launchpad-namespaces/blob/main/README.md).
:::

### Pulling in starter changes

From time to time, you may want to update your infra repo with the latest changes from our starter. 

Launchpad comes with a built in task to do this:

```shell
task launchpad:pull-upstream-starter
```
