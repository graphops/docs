---
sidebar_position: 3
---

# Tooling & terminology

- K0s
- Ansible
- Helm
- Helmfile
- Kubectl
- Taskfile
- SSH

Diagram showing interactions between tools

As launchpad is a complex stack clarity on different technical terms is warranted. The following terms will be used throughout launchpad:

## Your Kubernetes cluster

Note that launchpad uses [`k0s`](https://k0sproject.io/) as the [`Kubernetes distribution`](https://acloudguru.com/blog/engineering/which-kubernetes-distribution-is-right-for-you) for managing Kubernetes. K0s was picked for this project as it is viewed to be one of the top open-source lightweight certified Kubernetes distributions targeted at public & private clouds, on-premises, edge & hybrid. This capability together with it's small compute footprint- it can run on machines with less than half GB of RAM- makes k0s the ideal distribution for most indexers. 

### Kubernetes architecture

Details on the different components that can be normally found in a Kubernetes cluster can be found [here](https://kubernetes.io/docs/concepts/overview/components/).
Note that in a K0s cluster a few of the components that make up your usual Kubernetes cluster have been abstracted away in a single binary. If you have experience with other Kubernetes distributions you will notice when spinning up your `k0s` cluster, that you are missing `kubelet`, `kube-scheduler` and `kube-controller-manager` . This [design](https://docs.k0sproject.io/v1.23.6+k0s.2/architecture/#control-plane) is intentional.