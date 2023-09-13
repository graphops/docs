---
sidebar_position: 2
---
# Prerequisites

You will need some things to use Launchpad for your infrastructure:

## A basic understanding of infrastructure

We expect that you are familiar with infrastructure basics, including:

- Linux
- Networking, DNS
- SSH and authentication
- Storage fundamentals
- Basic system administration

## A basic, functional knowledge of git

The Launchpad stack advocates for declarative, version controlled infrastructure. This means the declarative state of your infrastructure will be committed into a private git repo as it evolves over time. You will need to be able to perform basic git workflows like:

- Staging files (e.g. `git add .`)
- Committing changes and pushing code (e.g. `git push origin main`)
- Viewing the repo history (e.g. `git show`, `git log`, or using GitHub)

More advanced users will benefit from understanding how to pull and rebase, but this is not a requirement.

## A basic understanding of operating a Graph Protocol Indexer

We will assume a basic understanding of the Graph Protocol Indexing stack, as well as some of the operational requirements of Indexing.

See [Other Resources](other-resources) for links to helpful resources.

## A client machine

Launchpad comes with a [series of tools](client-side-tooling) that should run on a client device. This is most likely your local machine. These tools should not run on your servers. Instead, they help you instruct your cluster of servers to do what you want.

Currently, Launchpad comes with support for Linux and MacOS clients. Windows is currently not supported, though you may be able to use Launchpad using the *Windows Subsystem for Linux*.

## Knowledge of Kubernetes and a Kubernetes cluster

The Launchpad project requires a certain level of familiarity with [Kubernetes](https://kubernetes.org/) and its intricacies. The extent of this Kubernetes expertise depends on your choice of cluster. Opting for a managed cluster from a leading Cloud Provider requires less intensive Kubernetes knowledge, as operating such a cluster is more straightforward, necessitating only a fundamental grasp of different Kubernetes resource types.

However, it's essential to note that managed clusters can be very costly when running blockchains. In contrast, selecting a self-managed cluster demands a deeper understanding, encompassing all components necessary for cluster provisioning and management - for more details on this please checkout our [Kubernetes guide](guides/kubernetes-guide.md). Regardless of your choice, you'll need to create a Kubernetes cluster. This can involve setting up a self-managed cluster, as outlined in our [Fedora CoreOS guide](guides/install-fcos.md), or opting for a managed cluster provided by a major Cloud Provider like AWS or GCP.

## Operational knowledge of Helm

Launchpad operates in tandem with [Helm](https://helm.sh/) and [helm-charts](https://helm.sh/docs/topics/charts/). However, no need to worry if you're new to Helm or chart authoring – we've got you covered. Launchpad leverages a combination of widely used and publicly available charts (ie. [grafana/helm-charts](https://github.com/grafana/helm-charts)), along with our in-house helm-charts, [launchpad-charts](https://github.com/graphops/launchpad-charts). This ensures a seamless experience without the need for in-depth Helm expertise.

In addition, we abstracted some of the Helm usage by using tasks ( ie. `task releases:apply` or `task releases:delete`) as outlined in our [Quick Start](quickstart) guide. As such, all you need is a basic understanding of Helm's core functions and [release management](https://helm.sh/docs/intro/using_helm/). Writing helm-charts is not a prerequisite for most users, as we provide the necessary charts to streamline your experience.

## Willingness to learn and contribute

Launchpad is a collaborative effort to create the best UX for Graph Protocol Indexers on Kubernetes. The Launchpad stack provides an opinionated set of defaults and recipes for success, but to be an advanced operator you will need to learn Kubernetes and many of the other tools in the stack. With Launchpad, you have guard rails to guide you in your journey towards mastering operating your Indexer on Kubernetes.

Please contribute back when you are able!
