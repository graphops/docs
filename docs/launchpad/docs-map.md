---
sidebar_position: 1
---

# Launchpad Documentation

Launchpad is a comprehensive toolkit designed for running a Graph Protocol Indexer on Kubernetes, aimed at providing the fastest route to production deployments of multi-chain indexing software stacks with robust security and performance defaults.

Launchpad is suitable for environments ranging from a single node cluster to large scale multi-region clusters. Launchpad is also comprised of an opinionated set of tools that run on your local machine, that are layered to offer a declarative workflow for managing your deployment stack.

Key components of Launchpad include the Launchpad Starter ([`graphops/launchpad-starter`](https://github.com/graphops/launchpad-starter)), which serves as the initial setup point for new deployments; Launchpad Charts ([`graphops/launchpad-charts`](https://github.com/graphops/launchpad-charts)), a collection of Helm Charts for blockchains and web3 applications; Launchpad Namespaces ([`graphops/launchpad-namespaces`](https://github.com/graphops/launchpad-namespaces)), which are preconfigured Kubernetes Namespaces that utilize Helmfile for enhanced management; and Launchpad Taskfiles ([`graphops/launchpad-taskfiles`](https://github.com/graphops/launchpad-taskfiles)), a collection of Tasks defined with Taskfile.

Here's a guide to help you navigate this documentation based on the information you're seeking:

## First steps

Are you new to Launchpad or to Kubernetes? Here's a high-level overview of how this documentation is organised, to help you know where to look for the information you need:

* **From Scratch** - this includes overview of the project, details on the project modularity and how you can leverage features of Launchpad as best suits your needs: [Launchpad Introduction](intro) | [Opt in features](modularity) | [Installation](client-side-tooling) 
* **Project Maintenance** - find out how often new versions of the project are released and how GraphOps decides what namespaces and chains to support: [Release Channels](release-channels) | [Supported Namespaces](supported-namespaces)
* **Tutorials** - guides to get you started with Launchpad, everything you need to deploy different blockchain nodes and guides on what you need for highly available postgresql and monitoring: [Getting Started](quick-start) | [Arbitrum-One Guide](tutorials/arbitrum-archive-kubernetes-guide) | [Celo-Mainnet Guide](tutorials/celo-archive-kubernetes-guide) | [PostgreSQL HA](tutorials/postgresql_ha.md) | [Monitoring Stack HA](tutorials/monitoring-stack-with-HA.md)
* **Advanced Tutorials** - want to start with Launchpad but you don't yet have a Kubernetes Cluster? Find out how to create one: [Creating a Kubernetes Cluster with kubeadm](advanced-tutorials/kubernetes-create-cluster-with-kubeadm) | [Creating a Kubernetes Cluster with FCOS](advanced-tutorials/advanced-kubernetes.md) 

## Getting help

Having trouble? We'd like to help!

* The [FAQ](faq) page has answers to many common questions.
* Not found something you need? See [FAQ: Need more help](faq#need-more-help) for information on getting support and asking questions.
* Request new features, check out existing bugs or report new ones in [Launchpad Charts](https://github.com/graphops/launchpad-charts/issues) and [Launchpad Namespaces](https://github.com/graphops/launchpad-namespaces/issues)


## Getting Involved

Launchpad is a collaborative effort to create the best UX for Graph Protocol Indexers on Kubernetes. As such contributors are highly appreciated and welcome. Visit the github repos' guidance to contribute code to [Launchpad Charts](https://github.com/graphops/launchpad-charts/blob/main/CONTRIBUTING.md) or [Launchpad Namespaces](https://github.com/graphops/launchpad-namespaces/blob/main/CONTRIBUTING.md)

You can also get involved by simply attending our biweekly [Launchpad Office Hours(LOH)](https://discord.com/events/438038660412342282/1229824398127534130) community call on discord. You can access previous LOH recordings [here](https://www.youtube.com/watch?v=qC5KbhD3urc&list=PLpbkfkwg_V6Ceidcn06VSP9BoU0g14voq).