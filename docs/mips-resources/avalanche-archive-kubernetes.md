---
sidebar_position: 1
description: desc
---
# Avalanche Archive Mainnet Node Guide

This guide is intended to be an end to end walk-through of running an Avalanche Archive Mainnet Node in an existing Kubernetes cluster.
Sync times are reported to be in the range of 3 weeks on dedicated hardware.

## Prerequisites

All the [Launchpad Prerequisites](../prerequisites) apply if running a Kubernetes cluster using `Launchpad`, so be sure to read them first. This guide can be used with existing Kubernetes clusters as well.

For avalanche workload you will need:
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
4. Check default values- double-check values and update as needed in [`<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/avalanche-archive-trace-mainnet-0.yaml`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/avalanche-archive-trace-mainnet-0.yaml)

5. Deploy avalanche-mainnet namespace
```shell
task releases:apply avalanche-mainnet
``` 

## Deploying with helm in a Kubernetes cluster outside Launchpad

You can find blockchain related helm packages [here](https://github.com/graphops/helm-charts/tree/main/charts)

By default avalanche is told what type of node to run by the following default `toml` config:

```yaml
configTemplate: |
    # Store configuration in toml format
    snowman-api-enabled = "false"
    eth-apis = [
      "eth",
      "eth-filter",
      "net",
      "web3",
      "internal-eth",
      "internal-blockchain",
      "internal-transaction",
      "internal-tx-pool",
      "internal-account"
    ]
    metrics-enabled = "true"
    pruning-enabled = "false"
    state-sync-enabled = "false"
```
Override the above config by providing a new one in a values file and deploy:

```sh
helm install --dry-run avalanche graphops/avalanche:latest --namespace avalanche-mainnet --values avalanche-mainnet.yaml
```