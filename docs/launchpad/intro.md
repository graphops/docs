---
sidebar_position: 1
---

# Introduction

Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty, regardless of host provider. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.

There are two components to be aware of:

1. Starter ([`graphops/launchpad-starter`](https://github.com/graphops/launchpad-starter)): A starting point for every new Launchpad deployment. It uses a submodule to import all templated definitions from Core.
2. Core ([`graphops/launchpad-core`](https://github.com/graphops/launchpad-core)): Templated tasks, release definitions, scripts and other components

## Features

- Actively maintained by [GraphOps](https://graphops.xyz) [and contributors](https://github.com/graphops/helm-charts/graphs/contributors)
- Deploy Kubernetes ([k0s](https://k0sproject.io/)) onto any existing set of SSH-capable hosts you have
- Predefined release definitions for monitoring, logging and other cluster functions, as well as for the complete Graph Indexer Stack
- An opinionated starter ([`launchpad-starter`](https://github.com/graphops/launchpad-starter)) to define and manage your stack in a declarative, version controlled manner
- A workflow to seamlessly inherit new templated release updates, while still supporting a enormous degree of deployment flexibility
- Utilises [`graphos/helm-charts`](https://github.com/graphops/helm-charts), a set of templated kubernetes resources that are packaged into charts which can then be customized and deployed into Kubernetes clusters. Example applications [`nethermind`](https://github.com/graphops/helm-charts/tree/main/charts/nethermind), [`erigon`](https://github.com/graphops/helm-charts/tree/main/charts/erigon), [`graph-node`](https://github.com/graphops/helm-charts/tree/main/charts/graph-node).

