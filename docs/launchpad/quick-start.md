---
sidebar_position: 3
---

# Quick Start

Make sure you have all the [Prerequisites](prerequisites) before starting.

## Quickstart

### 1. Install Taskfile

Launchpad has a large number of tooling dependencies that will run on your local machine. The most important dependency is [Taskfile](https://taskfile.dev).

Follow the [installation instructions](https://taskfile.dev/installation/) for your environment and install Taskfile on your local machine before continuing.

### 2. Use launchpad-starter for your new infra repo

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

### 3. Install the launchpad-core submodule and all local dependencies

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
```

### 4. Update the configuration with your values

Next we need to fill out `inventory/inventory.yaml`. This file contains our host definitions. You can find sample configurations in `inventory/samples`. Some details of the different sammple inventory files available:
* [`single-node.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on one host only, the host acting as both a `k0s Kubernetes controller` and a `k0s Kubernetes worker`
* [`single-node-lvm.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on one host only, the host acting as both a `k0s Kubernetes controller` and a `k0s Kubernetes worker` with lvm storage. Here LVM is being used to create single logical volumes of multiple physical volumes, allowing for dynamic volume resizing that Kubernetes will use when managing various [`persistent-volumes`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) resources.
* [`single-controller.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a cluster running on two hosts, one host acting as a `k0s Kubernetes controller` and the other as `k0s Kubernetes worker`.
* [`multi-node.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a HA cluster comprised of three `k0s Kubernetes controllers` and three `k0s Kubernetes workers`.
* [`multi-node-zfs.sample.yaml`](https://github.com/graphops/launchpad-starter/blob/main/inventory/samples/single-node.sample.yaml) - shows an example of a HA cluster comprised of three `k0s Kubernetes controllers` and three `k0s Kubernetes workers` with `zfs` storage. Using this inventory we create [`zfs`](https://wiki.archlinux.org/title/ZFS) pools on `k0s Kubernetes workers` that will act as an advanced filesystem on each worker node which Kubernetes will use when managing various [`persistent-volumes`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) resources.

### 5. Bootstrap your hosts with Kubernetes

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

### 6. Install releases into the cluster for base cluster services

Next we need to install key non-Graph components of our stack, including monitoring and logging systems.

```shell
task releases:apply-base
```

### 7. Install Erigon, Nimbus and Proxyd for Ethereum mainnet

```shell
task releases:apply -- eth-mainnet
```

### 8. Install the Indexer Stack on the Goerli Protocol Deployment

```shell
task releases:apply -- graph-goerli
```

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

## Contributing

We welcome and appreciate your contributions! Please see the [Contributor Guide](https://github.com/graphops/launchpad-starter/blob/main/CONTRIBUTING.md), [Code Of Conduct](https://github.com/graphops/launchpad-starter/blob/main/CODE_OF_CONDUCT.md) and [Security Notes](https://github.com/graphops/launchpad-starter/blob/main/SECURITY.md) for this repository.

## See also

- [`graphops/launchpad-core`](https://github.com/graphops/launchpad-core)
- [`graphops/helm-charts`](https://github.com/graphops/helm-charts)
