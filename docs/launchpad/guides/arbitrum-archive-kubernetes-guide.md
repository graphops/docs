---
---
# Arbitrum Archive Mainnet Node Guide

## Introduction
This guide provides an end-to-end walkthrough for setting up an Indexer on the Graph Protocol Mainnet for the Arbitrum One network. It details the steps for deploying both Arbitrum Classic and Arbitrum Nitro.

## Architecture Overview
Arbitrum Nitro includes a built-in proxy that automatically redirects queries for blocks older than its genesis to the Arbitrum Classic node.

## Setup Environment
This guide assumes operation within a Kubernetes cluster:
- For setups using Launchpad, follow the steps outlined [here](#kubernetes-cluster-using-launchpad).
- For setups using Helm only, refer to the instructions [here](#deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad).

## Prerequisites
Before you begin, ensure you have the following:
- An `ethereum-mainnet` RPC endpoint.
- CPU: 4 Cores / 8 Threads.
- RAM: 16 GiB.
- Storage: 3 TiB NVMe SSD.

## Kubernetes Cluster Using Launchpad

Ensure all [Launchpad Prerequisites](../prerequisites) are met before proceeding.

### Initial Configuration

1. Confirm your cluster is operational by consulting our [Quick Start](../quick-start/) guide.
2. In your private infra repo pull in latest `launchpad-starter` changes:
```shell
task launchpad:pull-upstream-starter
``` 

### Data Restoration and Configuration

1. **Blockchain node data snapshot** The [Arbitrum-One namespace](https://github.com/graphops/launchpad-namespaces/blob/main/arbitrum-one/README.md) contains default configurations for both Arbitrum Classic and Arbitrum Nitro to download data from a snapshot. The snapshots have been set by default:
- for [Arbitrum Classic](https://github.com/graphops/launchpad-namespaces/blob/585f4a0aa711b27adedd2493daa57b28f01eeca1/arbitrum/values/one/arbitrum-classic.yaml.gotmpl#L20-L24)
```yaml
restoreSnapshot:
  enabled: true
  snapshotUrl: https://snapshot.arbitrum.foundation/arb1/classic-archive.tar
```
- for [Arbitrum Nitro](https://github.com/graphops/launchpad-namespaces/blob/585f4a0aa711b27adedd2493daa57b28f01eeca1/arbitrum/values/one/arbitrum-nitro.yaml.gotmpl#L11-L13)
```yaml
restoreSnapshot:
  enabled: true
  snapshotUrl: https://snapshot.arbitrum.foundation/arb1/nitro-archive.tar
```
you can overwrite both of these values in [`<your-private-copy-of-launchpad-starter>/namespaces/arbitrum-one.yaml`](https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml)

2. **Connect to eth-mainnet-rpc-node** Both Arbitrum Classic and Arbitrum Nitro connect to l1, and recent versions of Arbitrum Nitro require connection to a beacon chain RPC:
- for **Arbitrum Classic** - update values in [`<your-private-copy-of-launchpad-starter>/namespaces/arbitrum-one.yaml`](https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml) as needed. Example:
```yaml
arbitrum-classic:
  values:
    arbitrum:
      config:
        parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme
```
- for **Arbitrum Nitro** - update values in [`<your-private-copy-of-launchpad-starter>/helmfiles/namespaces/arbitrum-one.yaml`](https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml) as needed. Example:
```yaml
arbitrum-nitro:
  values:
    nitro:
      config:
        parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme
        parentChainBeaconUrl: http://your-eth-consensus-node-url:5052  ## changeme
```

## Deploying with helm in a Kubernetes Cluster Outside Launchpad

You can find blockchain related helm packages [here](https://github.com/graphops/launchpad-charts/tree/main/charts)

### Deploy Arbitrum Classic

We'll first deploy Arbitrum Classic as Arbitrum Nitro needs to connect to the Classic endpoint. 

1. Prepare your configuration file, `arbitrum-classic.yaml`, with the necessary RPC URL and optional snapshot URL:
```yaml
arbitrum:
  config:
    parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme
  restoreSnapshot:
    enabled: true
    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz ## specify only if overriding default
```

2. Add the Helm repository and deploy:

```sh
helm repo add graphops http://graphops.github.io/launchpad-charts
helm install --dry-run arbitrum-classic graphops/arbitrum-classic:latest --namespace arbitrum-one --value arbitrum-classic.yaml
```

### Deploy Arbitrum Nitro

1. Prepare your configuration file, `arbitrum-nitro.yaml`, with the necessary RPC URLs, classic node URLs and optional snapshot URL:
```yaml
nitro:
  config:
    parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme
    parentChainBeaconUrl: http://your-eth-consensus-node-url:5052  ## changeme
    classicUrl: http://arbitrum-classic:8547/  # replace `arbitrum-classic` with the name of your arbitrum-classic release deployed at the previous step
  restoreSnapshot:
    enabled: true
    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz ## specify only if overriding default
```

2. Deploy using helm:

```sh
helm install --dry-run arbitrum-nitro graphops/arbitrum-classic:latest --namespace arbitrum-one --value arbitrum-nitro.yaml
```
