---
sidebar_position: 20
---
# Server Side Stack

![Server Side Stack](/img/launchpad-server-side-stack.svg)

## Your Kubernetes Cluster

Launchpad V2 requires users to bring their own Kubernetes cluster. This approach ensures that users are not tied to a specific Kubernetes distribution or mode of installation.

For users seeking more detailed guidance with regards to a Kubernetes setup, we have created guides that outline the steps one should consider when installing and deploying [Fedora CoreOS (FCOS)](https://docs.fedoraproject.org/en-US/fedora-coreos/) - an auto-updating, minimal, container-focused OS, designed for clusters or standalone use and optimized for Kubernetes. These guides are designed to assist you in getting started with the process of setting up and guide you through the management of your Kubernetes cluster. For guidance on Fedora CoreOS setup and considerations, skip to [Install FCOS Guide](guides/install-fcos).

Once your Kubernetes cluster is ready, head over to [Quick Start](quick-start).

## Launchpad Namespaces

![Server Side Stack](/img/launchpad-server-side-stack.svg)


See the [Launchpad Namespaces repository](https://github.com/graphops/launchpad-namespaces) for details about which namespaces are available, as well as which Helm Releases are specified within each one.