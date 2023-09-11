---
sidebar_position: 20
---
# Server Side Stack

![Server Side Stack](/img/launchpad-server-side-stack.svg)

## Your Kubernetes Cluster


:::note
Launchpad v1 used [`k0s`](https://k0sproject.io/) as the [`Kubernetes distribution`](https://acloudguru.com/blog/engineering/which-kubernetes-distribution-is-right-for-you) for managing Kubernetes. K0s was picked for this project as it was viewed to be one of the top open-source lightweight certified Kubernetes distributions targeted at public & private clouds, on-premises, edge & hybrid.
:::

Launchpad V2 represents a departure from the previous model of orchestrating the configuration of host machines to form a Kubernetes cluster. Instead, users are now encouraged to bring their own Kubernetes clusters to be used in conjunction with Launchpad. This approach ensures that users are not tied to a specific Kubernetes distribution or mode of installation. 

Alternatively, for the indexers seeking more detailed guidance with regards to a Kubernetes setup, we have created guides that outline the steps one should consider when installing and deploying [Fedora CoreOS (FCOS)](https://docs.fedoraproject.org/en-US/fedora-coreos/) - an auto-updating, minimal, container-focused OS, designed for clusters or standalone use and optimized for Kubernetes. These guides are designed to assist you in getting started with the process of setting up and guide you through the management of your Kubernetes cluster.

If you are bringing your own Kubernetes cluster, feel free to skip to [Quick Start](quick-start). 

For guidance on Fedora CoreOS setup and considerations, skip to [Install FCOS Guide](guides/install-fcos).
