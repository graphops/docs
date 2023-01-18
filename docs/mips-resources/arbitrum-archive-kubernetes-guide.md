---
sidebar_position: 1
description: desc
---
# Arbitrum Archive Mainnet Node Guide

This guide is intended to be an end to end walk-through of running an Arbitrum Archive Mainnet Node in an existing Kubernetes cluster.
Sync times are reported to be in the range of 1 week on dedicated hardware. The node consists of 2 parts, the classic part and the nitro hardfork. The classic part is only required to request archive data for blocks before the hardfork and takes the aforementioned 1 weeks to sync from scratch. The nitro history is shorter and can be quickly synced within 3 days.

Arbitrum Nitro has a built-in proxy to redirect queries with block numbers below it’s genesis block (they’re sent to the Arbitrum Classic node)

## Prerequisites

All the [Launchpad Prerequisites](../prerequisites) apply if running a Kubernetes cluster using `Launchpad`, so be sure to read them first. This guide can be used with existing Kubernetes clusters as well.

You will need:
- an `ethereum-mainnet` RPC endpoint
- CPU: 4 Cores / 8 Threads
- RAM: 16 GiB
- Storage: 3 TiB NVMe SSD

## If running a Kubernetes cluster using `Launchpad`

1. Check that the cluster is running and healthy - review [Quick Start](../quick-start/) guide for more info.
2. In your private infra repo pull in latest `launchpad-starter` changes
```shell
task launchpad:pull-upstream-starter
``` 
3. Pull in `latest-core` changes
```shell
task launchpad:update-core
``` 
4. **blockchain node data snapshot** Arbitrum Classic provides functionality to download data from a snapshot. Review all files in `[<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/) before deploying the chart
```yaml
arbitrum:
  restoreSnapshot:
    enable: true
    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz
    mode: streaming # or multipart depending on chain
```

5. **connect to eth-mainnet-rpc-node** Both Arbitrum Classic and Arbitrum Nitro connect to l1 via the following commands:
- for Arbitrum Nitro - update values in [`<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/arbitrum-classic-archive-trace-mainnet.yaml`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/arbitrum-classic-archive-trace-mainnet.yaml) as needed. Example:
```yaml
arbitrum:
  extraArgs:
    - --node.chain-id=42161  # determines Arbitrum network - 42161 mainnet
    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545
```
- for Arbitrum Nitro - update values in [`<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/arbitrum-nitro-archive-trace-mainnet.yaml`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/arbitrum-nitro-archive-trace-mainnet.yaml) as needed. Example:
```yaml
nitro:
  extraArgs:
    - --http.api=net,web3,eth,debug
    - --l2.chain-id=42161  # determines Arbitrum network - 42161 mainnet
    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545
    - --node.rpc.classic-redirect=http://arbitrum-classic-archive-trace-mainnet-0:8547/
    - --init.url=https://snapshot.arbitrum.io/mainnet/nitro.tar
```

## Deploying with helm in a Kubernetes cluster outside Launchpad

You can find blockchain related helm packages ['here'](https://github.com/graphops/helm-charts/tree/main/charts)

Given that Arbitrum needs both Nitro and classic to run use the following commands:

### Deploy Arbitrum Classic

We'll first deploy Arbitrum Classic as Arbitrum Nitro needs to connect to the Classic endpoint. 

Create a values `arbitrum-classic.yaml` file with the following contents
```yaml
arbitrum:
  extraArgs:
    - --node.chain-id=42161  # determines Arbitrum network - 42161 mainnet
    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545
  restoreSnapshot:
    enable: true
    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz
    mode: streaming # or multipart depending on chain
```

Deploy helm-chart:

```sh
helm repo add graphops http://graphops.github.io/helm-charts
```

```sh
helm install --dry-run arbitrum-classic graphops/arbitrum-classic:latest --namespace arbitrum-mainnet --value arbitrum-classic.yaml
```

### Deploy Arbitrum Nitro


Create a values `arbitrum-nitro.yaml` file with the following contents
```yaml
nitro:
  extraArgs:
    - --http.api=net,web3,eth,debug
    - --l2.chain-id=42161  # determines Arbitrum network - 42161 mainnet
    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545
    - --node.rpc.classic-redirect=http://arbitrum-classic:8547/  # replace `arbitrum-classic` with the name of your arbitrum-classic release deployed at the previous step
    - --init.url=https://snapshot.arbitrum.io/mainnet/nitro.tar
```

Deploy helm-chart:

```sh
helm install --dry-run arbitrum-nitro graphops/arbitrum-classic:latest --namespace arbitrum-mainnet --value arbitrum-nitro.yaml
```