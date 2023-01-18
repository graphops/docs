---
sidebar_position: 1
description: desc
---
# Celo Archive Mainnet Node Guide

This guide is intended to be an end to end walk-through of running an Celo Archive Mainnet Node in an existing Kubernetes cluster.
Sync times are reported to be in the range of 4 days on dedicated hardware.

## Prerequisites

All the [Launchpad Prerequisites](../prerequisites) apply if running a Kubernetes cluster using `Launchpad`, so be sure to read them first. This guide can be used with existing Kubernetes clusters as well.

For Celo workload you will need:
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
4. Check default values- double-check values and update as needed in [`<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/celo-archive-trace-mainnet-0.yaml`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/celo-archive-trace-mainnet-0.yaml)

5. Deploy celo-mainnet namespace
```shell
task releases:apply celo-mainnet
``` 

## Deploying with helm in a Kubernetes cluster outside Launchpad

You can find blockchain related helm packages [here](https://github.com/graphops/helm-charts/tree/main/charts)

Create a values `celo-mainnet.yaml` file with the following contents or similar:
```yaml
celo:
  extraArgs:
    - --verbosity 3
    - --syncmode full
    - --gcmode archive
    - --txlookuplimit=0
    - --cache.preimages
    - --http.corsdomain=*
    - --ws # enable ws
    - --http.api=eth,net,web3,debug,admin,personal
```

Deploy helm-chart:

```sh
helm repo add graphops http://graphops.github.io/helm-charts
```

```sh
helm install --dry-run celo graphops/celo:latest --namespace celo-mainnet --values celo-mainnet.yaml
```