---
sidebar_position: 3
---

# Quick Start

:::warning
This Quick Start guide has not yet been updated for Launchpad V2.
:::

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

and edit it with your editor of choice.



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
