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

## A Kubernetes cluster 

You will need to provision a Kubernetes cluster. This can be a self-managed cluster (see our [guide using Fedora CoreOS](guides/install-fcos)), or a managed cluster from a major Cloud Provider like AWS or GCP.

## Willingness to learn and contribute

Launchpad is a collaborative effort to create the best UX for Graph Protocol Indexers on Kubernetes. The Launchpad stack provides an opinionated set of defaults and recipes for success, but to be an advanced operator you will need to learn Kubernetes and many of the other tools in the stack. With Launchpad, you have guard rails to guide you in your journey towards mastering operating your Indexer on Kubernetes.

Please contribute back when you are able!
