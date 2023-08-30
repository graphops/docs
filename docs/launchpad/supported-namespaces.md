---
sidebar_position: 3
---

# Supported Namespaces

Launchpad includes a number of prepackaged Kubernetes namespaces (see [Launchpad Namespaces repo](https://github.com/graphops/launchpad-namespaces)), which in turn reference Helm Charts in the [Launchpad Charts](https://github.com/graphops/launchpad-charts) repository, as well as third-party Charts. GraphOps maintains support for these namespaces, meaning that we:

- Track upstream releases and test them
- Move these releases through `canary` and `stable` release channels for both `launchpad-charts` and `launchpad-namespaces`
- Evolve the Launchpad stack to meet the evolving operational needs of these applications
- Offer support for operators experiencing challenges with these namespaces

This strategy is rooted in GraphOps' active usage of these namespaces and the applications within them.

We welcome third-party contributors to add support for additional namespaces and applications.

## Using custom releases and deploying sets of applications not defined in `launchpad-namespaces`

Launchpad's architecture is designed to be highly flexible and does not constrain you to deploying `launchpad-namespaces`.

To incorporate releases not covered within a namespace, you can utilize the `helmfile.yaml` that you generated during the [Quick Start](quick-start.md#customize-your-helmfileyaml) process.

For instance, if you required the implementation of [`kafka-operator`](https://github.com/strimzi/strimzi-kafka-operator) for specific workloads, you would add the following code to the `repositories` and `releases` sections:

```yaml
repositories:
  - name: strimzi
    url: https://strimzi.io/charts/

releases:
  - name: strimzi
    namespace: kafka
    createNamespace: true
    chart: strimzi/strimzi-kafka-operator
    missingFileHandler: Warn 
    values:
    - watchAnyNamespace: true
```

:::note
If you're considering the integration of a blockchain that currently falls outside the scope of Launchpad's Supported Namespaces, it's worth noting that including a new release in your `helmfile.yaml` might require an extra step of creating a custom Helm Chart. While certain publicly available charts (ie. [Teku](https://artifacthub.io/packages/helm/stakewise/teku), [Lighthouse](https://artifacthub.io/packages/helm/stakewise/lighthouse)) might be regularly maintained by external contributors, you might encounter cases where other charts are not readily supported.
:::