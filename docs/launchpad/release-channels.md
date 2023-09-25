---
sidebar_position: 3
---

# Release Channels

Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies. 

For a reminder of the various components within Launchpad and their intricate connections, we recommend revisiting our [Intro](intro.md).

This guide offers a comprehensive walkthrough, outlining the steps, automated and manual, required to introduce a new application, ie. Erigon, into the 'launchpad-charts' repository as a **canary** release and ultimately transitioning it to a **stable** state within its designated 'launchpad-namespace,' such as Ethereum. 

The diagram below provides a visual representation illustrating the interdependence and impact of various components and workflows.

![Release Channels Flow](/img/launchpad-release-channels.svg)

# From new version to `launchpad-namespaces` stable

Here is a more comprehensive breakdown of the process, divided into automated workflows within launchpad-charts and launchpad-namespaces, as well as manual operator steps. This process guides the transition of a new application version from the initial launchpad-charts canary release to its eventual stability within the corresponding launchpad-namespace. For this walkthrough we will use Erigon as an example.

**launchpad-charts** 
  - Bot watches [Erigon tags](https://github.com/ledgerwatch/erigon/tags) and as a new version is published it opens a PR into [`launchpad-charts/charts/erigon` ](https://github.com/graphops/launchpad-charts/pull/133)
  - The new PR triggers a workflow that publishes a new [`pre-release`](https://github.com/graphops/launchpad-charts/releases/tag/erigon-0.8.1-canary.1) into the repo.

**launchpad-namespaces** 
  - Bot sees new chart version and pushes [new PR to namespaces](https://github.com/graphops/launchpad-namespaces/pull/38)
  - The new PR triggers a workflow that publishes a new [`ethereum tag`](https://github.com/graphops/launchpad-namespaces/releases/tag/ethereum-v0.2.1) into the repo.

**operator**
  - updates their helmfile reference to point at new ns and runs changes against `eth-goerli` namespace using `task releases:apply -- eth-goerli`
  - if the previous task runs successfully and workloads appear healthy, the operator approves the PR and merges it, resulting in the creation of a new `ethereum` tag in `launchpad-namespaces`
  - to make an `ethereum-stable` tag, operator would update their helmfile reference to point at the new namespace tag and run changes against `eth-mainnet` namespace using `task releases:apply -- eth-mainnet`
  - if `task releases:apply -- eth-mainnet` succeeds and all workloads are healthy operator would manually that the `ethereum` namespace as `stable`

:::note
Manually tagging a namespace as 'stable' is an intentional process. Our aim is to ensure that workloads undergo comprehensive testing before being tagged as `stable` which signals to users readiness for running on `mainnet`.
:::

In addition to following `canary` or `stable` releases depending on the user's risk appetite we have made it possible to override a specific chart version as part of a namespace deployment:

```yaml
  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml?ref=ethereum-stable/latest
    selectorsInherited: true
    values:
      - helmDefaults:
          <<: *helmDefaults
        flavor: "goerli"
        erigon:
          chartVersion: "0.8.1" # to override the chart version the namespace is setup with
          values:
            statefulNode:
              jwt:
                existingSecret:
                  name: jwt
                  key: jwt
        nimbus:
          values:
            nimbus:
              jwt:
                existingSecret:
                  name: jwt
                  key: jwt
```

Similarly to being able to override `chartVersion`, users have the ability to override `chartUrl` to specify a self-maintained chart, or a chart maintained by a different organisation.