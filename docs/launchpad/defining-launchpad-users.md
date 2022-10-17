---
sidebar_position: 4
description: Steps to get override an existing release on Launchpad, the Kubernetes toolkit for Graph Protocol Indexers
---

# Defining Launchpad Users

## Different types of users

Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty, regardless of host provider. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.

Launchpad has been designed to be extremely customisable and plugable. As such we can envision different users whose needs, depending on size and infrastructure providers, may translate into using the `launchpad` toolkit in different ways:

1. beginner, **just getting started** indexer that intends to use `launchpad` end to end from *configuring hosts*, to *joining hosts into a `k0s` Kubernetes cluster* and to *deploying all cluster related application and all indexer stack applications*. 
  
2. advanced indexer that currently has a number of hosts with advanced infrastructure setup, specialised storage setup and would like to use launchpad end to end going forward.
   
3. advancer indexer that already runs their indexing operation on top of a managed Kubernetes public cloud offering ie. GKE, AKS, EKS but would like to use *launchpad* to leverage the setup as it relates to Kubernetes resources associated with the indexer and graph stack and utilise helm.


| Users              | Host Config | Storage | k0s    | Indexer |
| :---               |    :----:   |  :----: |:----:  |   ----: |
| Beginner           | &check;     | &check; |&check; |&check;  |
| Advanced           | &check;     | &check; |&check; |&check;  |
| Advanced(no k0s)   | &cross;     | &cross; |&cross; |&check;  |

## Instructions based on user needs

1. If you are one of these users pls jump to the [Getting Started](https://docs.graphops.xyz/launchpad/getting-started) section.
