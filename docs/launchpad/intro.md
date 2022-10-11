---
sidebar_position: 1
description: Introduction to Launchpad, the Kubernetes toolkit for Graph Protocol Indexers
---

# Introduction

Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty.

There are two components to be aware of:

1. Starter (this repo): A starting point for every new Launchpad deployment. It uses a submodule to import all templated definitions from Core.
2. Core ([`graphops/launchpad-core`](https://github.com/graphops/launchpad-core)): Templated tasks, release definitions, scripts and other components

## Features

- Actively maintained by [GraphOps](https://graphops.xyz) [and contributors](https://github.com/graphops/helm-charts/graphs/contributors)
- Deploy Kubernetes (K0s) onto any existing set of SSH-capable hosts you have
- Predefined release definitions for monitoring, logging and other cluster functions, as well as for the complete Graph Indexer Stack
- An opinionated starter (this repo) to define and manage your stack in a declarative, version controlled manner
- A workflow to seamlessly inherit new templated release updates, while still supporting a enormous degree of deployment flexibility

