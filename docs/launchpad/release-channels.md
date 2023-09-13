---
sidebar_position: 3
---

# Release Channels and Live Testing

Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies. 

For a reminder of the various components within Launchpad and their intricate connections, we recommend revisiting our [Intro](intro.md).

This guide offers a comprehensive walkthrough, outlining the steps, automated and manual, required to introduce a new application, ie. Erigon, into the 'launchpad-charts' repository as a **canary** release and ultimately transitioning it to a **stable** state within its designated 'launchpad-namespace,' such as Ethereum. 

The diagram below provides a visual representation illustrating the interdependence and impact of various components and workflows.

![Release Channels Flow](/img/launchpad-release-channels.svg)

1. **launchpad-charts** Bot watches [Erigon tags](https://github.com/ledgerwatch/erigon/tags) and as a new version is published it opens a PR into [`launchpad-charts/charts/erigon` ](https://github.com/graphops/launchpad-charts/pull/133)
2. **launchpad-charts** The new PR triggers a workflow that publishes a new [`pre-release`](https://github.com/graphops/launchpad-charts/releases/tag/erigon-0.8.1-canary.1) into the repo.
3. **launchpad-namespaces** Bot sees new chart version and pushes [new PR to namespaces](https://github.com/graphops/launchpad-namespaces/pull/58)
4. **launchpad-namespaces** The new PR triggers a workflow that publishes a new [`ethereum tag`](https://github.com/graphops/launchpad-namespaces/releases/tag/ethereum-v0.2.1) into the repo.
5. **user** - updates helmfile add example



