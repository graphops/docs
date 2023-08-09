---
sidebar_position: 1
---

# Introduction

Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.

There are three major components to be aware of:

1. Launchpad Starter ([`graphops/launchpad-starter`](https://github.com/graphops/launchpad-starter)): A starting point for every new Launchpad deployment
2. Launchpad Charts ([`graphops/launchpad-charts`](https://github.com/graphops/launchpad-charts)): A collection of Helm Charts for blockchains and web3 apps
3. Launchpad Namespaces ([`graphops/launchpad-namespaces`](https://github.com/graphops/launchpad-namespaces)): A collection of preconfigured Kubernetes Namespaces using Helmfile

![Launchpad components](/img/launchpad-repos-slide.svg)

## Features

- Actively maintained by [GraphOps](https://graphops.xyz) [and contributors](https://github.com/graphops/launchpad-charts/graphs/contributors)
- An opinionated starter ([`launchpad-starter`](https://github.com/graphops/launchpad-starter)) to define and manage your stack in a declarative, version controlled manner
- A collection of Helm Charts for deploying and monitoring blockchain nodes and Graph Protocol Indexers in Kubernetes, with P2P `NodePort` support
- Preconfigured namespaces for core cluster functions (logging, monitoring, etc) and major blockchains
- An automated dependency update pipeline for [`graphops/launchpad-charts`](https://github.com/graphops/launchpad-charts) and [`graphops/launchpad-namespaces`](https://github.com/graphops/launchpad-namespaces)

## Next Steps

- Read the [Prerequisites](prerequisites) section to understand what you need to bring
- Read the [Quick Start guide](quick-start) to get up and running
- Look at the repositories above on GitHub to understand how they work
- Review **Advanced Topics** to understand more advanced behaviour
