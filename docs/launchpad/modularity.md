---
sidebar_position: 2
---
# Modularity

The full Launchpad stack contains:

1. Launchpad Starter ([`graphops/launchpad-starter`](https://github.com/graphops/launchpad-starter)): A starting point for new Launchpad deployments
2. Launchpad Charts ([`graphops/launchpad-charts`](https://github.com/graphops/launchpad-charts)): A collection of Helm Charts for blockchains and web3 apps
3. Launchpad Namespaces ([`graphops/launchpad-namespaces`](https://github.com/graphops/launchpad-namespaces)): A collection of preconfigured Kubernetes Namespaces using Helmfile

We have designed Launchpad with modularity in mind therefore users can pick what elements of the stack to utilise in their own infrastructure. As such below you can find some options.

## Using launchpad-starter

Using `launchpad-starter` as a starter repo for your own IaaC repo is the recommended approach. `launchpad-starter` comes with a sane set of defaults and leverages Helmfile to declaratively specify and orchestrate releases of software in your Kubernetes cluster.

See our [Quick Start](quick-start) guide and the [`launchpad-starter` repo](https://github.com/graphops/launchpad-starter) for more information.

## Using launchpad-namespaces without launchpad-starter

As a user, you have the flexibility to choose whether or not to utilize the `launchpad-starter` repository.

If you decide not to use it, you can create your own repository that includes a straightforward `helmfile.yaml` file, which will orchestrate the execution of various `launchpad-namespaces` that align with your specific requirements. An illustrative example can be found in [`sample.helmfile.yaml`](https://github.com/graphops/launchpad-starter/blob/main/sample.helmfile.yaml).

By opting out of `launchpad-starter`, you are essentially choosing not to leverage:

- Taskfile definitions that encompass commonly utilized tasks
- The automated process that installs all essential local tool dependencies on your personal machine
- The regularly refreshed `sample.helmfile.yaml` configuration

## Using launchpad-charts without launchpad-namespaces or launchpad-starter

Users also have the choice to exclusively utilise `launchpad-charts` only.

For example if you wanted to run one of our charts manually without utilising `helmfile`:
```shell
helm repo add graphops https://graphops.github.io/launchpad-charts
helm install erigon graphops/erigon
```

Another option could be to utilise [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) as a GitOps continuous delivery tool for managing Kubernetes applications. In this case the user would not need `launchpad-starter` or `launchpad-namespaces` and instead could use the `launchpad-charts` in conjunction with ArgoCD. An example of how to configure Argo with helm-charts can be found [here](https://dev.to/pavanbelagatti/argo-cd-and-helm-deploy-applications-the-gitops-way-22ae).