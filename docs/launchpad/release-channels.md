---
sidebar_position: 3
---

# Release Channels

Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies. 

For a reminder of the various components within Launchpad and their intricate connections, we recommend revisiting our [Intro](intro.md).

This guide offers a comprehensive walkthrough, outlining the steps, automated and manual, required to introduce a new version release of an application, ie. Erigon, into the 'launchpad-charts' repository as a **canary** release and ultimately transitioning it to a **stable** state within its designated 'launchpad-namespace,' such as Ethereum. 

The diagram below provides a visual representation illustrating the interdependence and impact of various components and workflows.

![Release Channels Flow](/img/launchpad-release-channels.svg)

# From new version to `launchpad-namespaces` stable

Below you can find a more comprehensive breakdown of the process, divided into automated workflows within `launchpad-charts` and `launchpad-namespaces`, as well as manual operator steps. This process guides the transition of a new application version from the initial `launchpad-charts` canary release to its eventual stability within the corresponding `launchpad-namespaces`. For this walkthrough we will use Erigon as an example.

**launchpad-charts** 
  - On each run, bot looks-up [Erigon tags](https://github.com/ledgerwatch/erigon/tags) and upon finding a new version, opens a PR into [`launchpad-charts/charts/erigon` ](https://github.com/graphops/launchpad-charts/pull/133)
  - The new PR triggers a workflow that publishes a new [`pre-release`](https://github.com/graphops/launchpad-charts/releases/tag/erigon-0.8.1-canary.1) into the repo.
  - Another workflow runs and adds the newly released `canary` chart to the `canary` Helm repo index

**launchpad-namespaces** 
  - On each run, bot checks for new chart releases and upon finding one, pushes an update branch and opens a [new PR to namespaces](https://github.com/graphops/launchpad-namespaces/pull/38)
  - Bot runs again, auto-merges the PR and creates a tag
  - Workflow runs, updates semver tags

**operator**
  - Tests the new `canary` chart release to verify it is working properly, if it is adds commit to PR to set the `stable` chart release version
  - Updates their helmfile reference to point at new namespace reference and runs changes against `eth-goerli` namespace using `task releases:apply -- eth-goerli`
  - If the previous task runs successfully and workloads appear healthy, the operator updates their helmfile reference for `eth-mainnet` namespace and runs `task releases:apply -- eth-mainnet`
  - If `task releases:apply -- eth-mainnet` succeeds and all workloads are healthy, operator  manually tags the `ethereum` namespace as `stable`

:::note
Manually tagging a namespace as `stable` is an intentional process. Our aim is to ensure that workloads undergo comprehensive testing before being tagged as `stable` which signals to users readiness for running on `mainnet`.
:::

Alongside the ability to choose between `canary` or `stable` releases based on user risk preferences, we've also enabled the capability to manually override a specific chart version during namespace deployment.

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