---
sidebar_position: 5
---

# Client Side Tooling

Launchpad comes with an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow to manage your cluster software stack.

![Client Side Stack](/img/launchpad-client-side-stack.svg)

These tools do not run on your servers, but on your local machine. They form the command & control center that you use to send instructions to your cluster.

## Installing on your local machine

Launchpad comes with a task to install local dependencies on your machine. See the [Quick Start Guide](quick-start) for more information.

## Understanding the tools in the client-side stack

### Taskfile

[Taskfile](https://github.com/go-task/task) is a simple task runner for automation and devops tasks. It allows you to define tasks in a single file, `Taskfile.yml`, and run them in a consistent, cross-platform way. It can be used to automate anything from building and deploying applications to running tests and linting code. Taskfile is written in Go and is easy to install and use.

Launchpad uses `task` as the primary command line interface. You can also define your own tasks!

### Helm

[Helm](https://github.com/helm/helm) is a package manager for Kubernetes that helps you manage and automate the deployment of your applications. It allows you to define, install, and upgrade Kubernetes resources in a consistent, versioned way. Helm uses a simple templating syntax to allow you to parameterize your deployments and create reusable chart templates. Helm also provides a variety of pre-built charts for popular software.

Launchpad uses Helm to deploy packages (Helm Charts) into your cluster.

### Helmfile

[Helmfile](https://github.com/roboll/helmfile) is a tool for managing multiple Helm charts together using a single file. It allows you to define a set of Helm releases together in a file, and then use a single command to install, upgrade, or delete all of the releases at once. This makes it easy to manage complex, multi-chart applications. Helmfile is written in Go and is easy to install and use.

Launchpad uses Helmfile to declare and manage sets of related Helm releases.

### Kustomize

[Kustomize](https://github.com/kubernetes-sigs/kustomize) lets you customize raw, template-free YAML files for multiple purposes, leaving the original YAML untouched and usable as is. It is used by helmfile for some of its features.

### Kubectl

[Kubectl](https://github.com/kubernetes/kubectl) is the command-line interface for Kubernetes that allows you to deploy, scale, and manage applications on a Kubernetes cluster. It provides a simple, easy-to-use command-line interface for performing common Kubernetes tasks such as creating and managing pods, services, and deployments.

Launchpad uses Kubectl to interact with your Kubernetes cluster.
