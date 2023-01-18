---
sidebar_position: 3
---

# Quick Start

Make sure you have all the [Prerequisites](prerequisites) before starting.

## Quickstart

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

### Install the launchpad-core submodule and all local dependencies

Next, we need to install the `launchpad-core` submodule, which contains Taskfile definitions, Helm Release templates and other useful things we will use. We also need to install all of the local tooling dependencies (like Helm or Kubectl) that we will need.

We can easily do both of these things by running the launchpad:setup command.

```shell
# You may need to use sudo for this command
task launchpad:setup

# This will run two other tasks:
# launchpad:update-core, which will install the launchpad-core submodule
# launchpad:deps, which will install all the local tooling dependencies
```

Installing the `launchpad-core` submodule will leave an uncommitted change in our new repo, so let's commit that now.

```shell
git add .
git commit -m "feat: added launchpad-core submodule"
git push origin main
```

### 🎉 Milestone: Local environment configured!

- [x] We now have our own private git repo containing the declarative configuration for our new infrastructure
- [x] We have installed all the tooling dependencies on our local machine, which will be used to control the cluster
- [ ] Next: Use Launchpad to connect to our servers and set them up

### Update the configuration with your values

Next we need to fill out `inventory/inventory.yaml`. This file contains our host definitions.

You can find sample configurations in `inventory/samples`. Some details of the different sammple inventory files available:

* [`single-node.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on one host only, the host acting as both a `k0s Kubernetes controller` and a `k0s Kubernetes worker`
* [`single-node-lvm.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on one host only, the host acting as both a `k0s Kubernetes controller` and a `k0s Kubernetes worker` with lvm storage. Here LVM is being used to create single logical volumes of multiple physical volumes.
* [`single-controller.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on two hosts, one host acting as a `k0s Kubernetes controller` and the other as `k0s Kubernetes worker`.
* [`multi-node.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a HA cluster comprised of three `k0s Kubernetes controllers` and three `k0s Kubernetes workers`.
* [`multi-node-zfs.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a HA cluster comprised of three `k0s Kubernetes controllers` and three `k0s Kubernetes workers` with `zfs` storage. Using this inventory we create [`zfs`](https://wiki.archlinux.org/title/ZFS) pools on `k0s Kubernetes workers` that will act as an advanced filesystem on each worker node which Kubernetes will use when managing various [`persistent-volumes`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) resources.

### Bootstrap your hosts with Kubernetes

First, let's apply the base host configuration to your hosts.

```shell
task hosts:apply-base
```

Next, we can install [K0s](https://k0sproject.io/), our chosen distribution of Kubernetes, onto your hosts.

```shell
task hosts:apply-k0s
```

We should now have our cluster credentials at `inventory/artifacts/k0s-kubeconfig.yml`. Let's make these our default credentials.

```shell
# Make sure our config directory exists
mkdir -p ~/.kube
# Backup our existing credentials if we have any
mv ~/.kube/config ~/.kube/config.backup.$(date +%s)
# Copy our new config into the default location
cp inventory/artifacts/k0s-kubeconfig.yml ~/.kube/config
# Set secure permissions on the file
chmod 600 ~/.kube/config
```

:::tip
You can now use Kubernetes clients like `kubectl`, `k9s` or `octant` to inspect your Kubernetes cluster and the workloads running inside it. You can use these tools to watch progress as you are installing releases in the steps below.
:::

### Install releases into the cluster for base cluster services

Next we need to install key non-Graph components of our stack, including monitoring and logging systems.

Let's see what the `releases:apply-base` task is actually doing by running `task help -- releases:apply-base`:

```shell
task: releases:apply-base

Apply all namespaces for base cluster services

commands:

• task releases:apply -- sealed-secrets
• task releases:apply -- storage
• task releases:apply -- monitoring
• task releases:apply -- ingress
• task releases:apply -- postgres-operator
```

As you can see, `releases:apply-base` just calls `releases:apply` for multiple namespace.

First, update configuration in the `helmfiles/release-values/<namespace>/*` for the base namespaces. You will likely need to configure storage and ingress with your own values.

Next, let's go ahead and install all the cluster services. You will be prompted to install each namespace, with a summary of changes to be made.

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

Launchpad comes with namespace defitions for a number of blockchain networks, including Ethereum Mainnet, Ethereum Goerli Testnet, Gnosis Chain Mainnet, Polygon mainnet, Abitrum Mainnet, Avalanche Mainnet, Celo Mainnet and others. Using these defintions, you can easily deploy blockchain nodes for the networks you want to index into your cluster. Namespace definitions are located in your `helmfiles/namespace-releases` folder.

#### (optional, eth-goerli) Install Erigon, Nimbus and Proxyd for Ethereum Goerli

Update the configuration files in the `helmfiles/release-values/eth-goerli` folder to ensure they are correct. You will need to generate a JWT and configure Erigon and Nimbus with it.

```shell
task releases:apply -- eth-goerli
```

### Install the Graph Goerli Indexer Stack

Update the configuration files in the `helmfiles/release-values/graph-goerli` folder to ensure they are correct.

```shell
task releases:apply -- graph-goerli
```

### Check Indexer CLI status output



### 🎉 Milestone: Graph Indexer running and accessible

- [x] We (optionally) configured and deployed blockchain nodes into our cluster
- [x] We configured and deployed the Graph Indexing stack into our cluster
- [ ] Next: Use the remote-toolbox to allocate to subgraphs and begin serving requests

## Updates

### Updating `launchpad-core`

As new versions of key components in the stack are released, we will update `launchpad-core`'s templated definitions. You can easily inherit these updates by pulling down the latest submodule.

Launchpad comes with a built in task to do this:

```shell
task launchpad:update-core
```

### Pulling in starter changes

From time to time, you may want to update your infra repo with the latest changes from our starter. 

Launchpad comes with a built in task to do this:

```shell
task launchpad:pull-upstream-starter
```
