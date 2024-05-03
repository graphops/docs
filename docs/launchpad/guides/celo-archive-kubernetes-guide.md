---
---
# Celo Archive Mainnet Node Guide

## Introduction
This guide is intended to be an end to end walk-through of running an Celo Archive Mainnet Node in an existing Kubernetes cluster.

## Sync Duration
Sync times are reported to be in the range of 4 days on dedicated hardware.

## Setup Environment
This guide assumes operation within a Kubernetes cluster:
- For setups using Launchpad, follow the steps outlined [here](#kubernetes-cluster-using-launchpad).
- For setups using Helm only, refer to the instructions [here](#deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad).

## Prerequisites

For Celo workload you will need:
- CPU: 4 Cores / 8 Threads
- RAM: 16 GiB
- Storage: 3 TiB NVMe SSD

## If running a Kubernetes cluster using `Launchpad`

All the [Launchpad Prerequisites](../prerequisites) apply if running a Kubernetes cluster using `Launchpad`, so be sure to read them first. This guide can be used with existing Kubernetes clusters as well.

1. Confirm your cluster is operational by consulting our [Quick Start](../quick-start/) guide.

2. In your private infra repo pull in latest `launchpad-starter` changes:
```shell
task launchpad:pull-upstream-starter
``` 

1. Check default values and update as needed in [`<your-private-copy-of-launchpad-starter>/helmfiles/namespaces/celo-mainnet.yaml`](https://github.com/graphops/launchpad-starter/blob/main/namespaces/celo-mainnet.yaml)

2. Deploy celo-mainnet namespace
```shell
task releases:apply celo-mainnet
``` 

## Deploying with helm in a Kubernetes cluster outside Launchpad

You can find blockchain related helm packages [here](https://github.com/graphops/launchpad-charts/tree/main/charts)

1. Prepare your configuration file, `celo-mainnet.yaml`, to override chart default values as necessary. Example:
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

2. Add the Helm repository and deploy:

```shell
helm repo add graphops http://graphops.github.io/launchpad-charts
helm install --dry-run celo graphops/celo:latest --namespace celo-mainnet --values celo-mainnet.yaml
```
