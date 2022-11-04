---
---
# Upgrading K0s Cluster Guide

This guide is intended to be an end-to-end walk-through of the steps needed to upgrade a cluster's *k0s* version, one node at a time starting with *controller* nodes.

## Prerequisites

This guide assumes that a `k0s` cluster deployed using the [Quick Start](../quick-start) guide already exists.

The upgrade workflow at high level is the following:
Upgrade a primary control plane node.
Upgrade additional control plane nodes.
Upgrade worker nodes.

## What we're going to do

1. Decide what [k0s version](https://github.com/k0sproject/k0s/tags) to upgrade the cluster to.
:::note
Make sure you read the [release notes](https://github.com/k0sproject/k0s/releases) carefully.

2. Update the value of the `k0s_version` variable in your `inventory/inventory.yaml` file created at [Quick Start Step 4](../quick-start#update-the-configuration-with-your-values).
   
3. Run task to upgrade nodes one by one.
:::note
Before starting a node upgrade, it is recommended to move applications to another node to avoid downtime. This can be done by draining a worker node. Once the node is drained and k0s upgraded it is safe to uncordon the worker node to tell Kubernetes that it can resume scheduling new pods onto the node. This is all handled by the `task hosts:k0s-node-upgrade` command.
:::
```shell
# run k0s-node-upgrade
task hosts:k0s-node-upgrade
```
Once executed, the above command will prompt you to ***Specify which node to upgrade***. Start with the hostname of the `initial_controller` in your `inventory/inventory.yaml` updated at step 2. 

:::note
Upgrading a controller node in a non-HA cluster (one controller node) will result in a temporary downtime of the Kubernetes API. This will not affect the availability of the applications deployed on the cluster.
:::

4. TODO Add instructions to ensure application workloads are healthy
5. Repeat step 3 for each node in the cluster until all nodes are running on the new `k0s` version.