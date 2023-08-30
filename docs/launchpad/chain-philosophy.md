---
sidebar_position: 3
---

# Chain Philosophy

In the realm of blockchain indexing, Launchpad V2 strategically supports an array of prominent blockchains. This support extends to the following blockchain ecosystems:

- [arbitrum](https://docs.arbitrum.io/)
- [celo](https://docs.celo.org/)
- [ethereum](https://ethereum.org/en/developers/docs/)
- [gnosis](https://docs.gnosischain.com/)
  

This comprehensive support is rooted in GraphOps' active indexing of the mentioned blockchain networks within our production environment. The reason for this selection is due to the complexity involved in consistently testing and verifying new releases across the various components necessary for operating these blockchain networks.

 TODO add diagram

Given the rapid pace at which the blockchain ecosystem evolves, this approach underscores our commitment to maintaining a robust and current indexing infrastructure stack. 


## Using custom releases and deploying chains not defined in launchpad-namespaces

Although GraphOps' officially supported blockchain stack may be limited, Launchpad's architecture is designed to go beyond the boundaries imposed by `launchpad-namespaces`.

To incorporate releases not covered within a namespace, you can utilize the `helmfile.yaml` that you generated during the [Quickstart](quick-start.md#customize-your-helmfileyaml) process.

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
If you're considering the integration of a blockchain that currently falls outside the scope of Launchpad's supported stack, it's worth noting that including a new release in your helmfile.yaml might require an extra step of creating a custom helm-chart. While certain publicly available charts (ie. [Teku](https://artifacthub.io/packages/helm/stakewise/teku), [Lighthouse](https://artifacthub.io/packages/helm/stakewise/lighthouse)) might be regurlarly maintained by external contributors, you might encounter cases where other charts are not readily supported.
:::

While the full Launchpad stack contains:
1. Launchpad Starter ([`graphops/launchpad-starter`](https://github.com/graphops/launchpad-starter)): A starting point for every new Launchpad deployment
2. Launchpad Charts ([`graphops/launchpad-charts`](https://github.com/graphops/launchpad-charts)): A collection of Helm Charts for blockchains and web3 apps
3. Launchpad Namespaces ([`graphops/launchpad-namespaces`](https://github.com/graphops/launchpad-namespaces)): A collection of preconfigured Kubernetes Namespaces using Helmfile

We have designed Launchpad with modularity in mind therefore users can pick what elements of the stack to utilise in their own infrastructure. As such below you can find some options.

### Using launchpad-charts with launchpad-namespaces only

As a user, you have the flexibility to choose whether or not to utilize the `launchpad-starter` repository.

If you decide not to use it, you can create your own repository that includes a straightforward `helmfile.yaml` file, which will orchestrate the execution of various `launchpad-namespaces` that align with your specific requirements. An illustrative example can be found in [`sample.helmfile.yaml`](https://github.com/graphops/launchpad-starter/blob/main/sample.helmfile.yaml).

By opting out of `launchpad-starter`, you are essentially choosing not to leverage:

- Taskfile definitions that encompass commonly utilized tasks
- The automated process that installs all essential local tool dependencies on your personal machine
- The regularly refreshed `sample.helmfile.yaml` configuration


### Using launchpad-charts without launchpad-namespaces or launchpad-starter

Users also have the choice to exclusively utilise `launchpad-charts` only.

For example if you wanted to run one of our charts manually without utilising `helmfile`:
```shell
helm repo add graphops https://graphops.github.io/launchpad-charts
helm install erigon graphops/erigon
```

Another option could be to utilise [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) as a GitOps continuous delivery tool for managing Kubernetes applications. In this case the user would not need `launchpad-starter` or `launchpad-namespaces` and instead could use the `launchpad-charts` in conjunction with ArgoCD. An example of how to configure Argo with helm-charts can be found [here](https://dev.to/pavanbelagatti/argo-cd-and-helm-deploy-applications-the-gitops-way-22ae).