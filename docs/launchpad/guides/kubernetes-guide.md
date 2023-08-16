---
---
# Kubernetes Guide

## Introduction

Kubernetes ([https://kubernetes.irg](https://kubernetes.irg/)) is the container orchestration system emerging as the victor of the container wars.
Some of its characteristics that stand out are:

- being opensource
- having an API designed to be easily extended
- following a design pattern based on controllers and reconciliation loops

The major components that make up k8s are:

- **etcd:** a key-value store 
- **kube-apiserver:** exposes the Kubernetes API 
- **kube-controller-manager:** single binary that combines a variety of controllers
- **kube-scheduler:** assigns containers to nodes
- **kubelet:** responsible for setting up containers
- **kube-proxy:** manages iptables rules in order to implement the Kubernetes service abstraction

Being a multi-node clustered system, Kubernetes topology distinguishes between two different roles:
- **control-plane** nodes: these are the nodes that run *apiserver*, *kube-controller-manager*, and in some setups also *etcd* nodes (*etcd* could, potentially, run externally in its own independent nodes)
- **worker** nodes: these need to run mostly *kubelet*, as their purpose is focused on running the workload containers

Setting up, and bootstrapping a cluster involves installing and configuring all the required components, certificates management, and container manifests that make up the system. There are quite a few choices and tools available to accomplish just that (and doing everything manually is an insane but educative way amongst those: [Kubernetes - The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)).

This guide is focused on [Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/) - a tool used to bootstrap and manage the lifecycle of a Kubernetes cluster (upgrade, add/remove nodes, ...). It automates the process of setting up a cluster and provides a consistent way of doing it, while preserving almost as much control over the setup as a purely manual one.

## Prerequisites

- At least a node configured with your Linux OS of choice and swap disabled - recent Kubernetes versions allow the host to have swap enabled, but that is a new feature not yet in GA (General Availability) and requires extra setup.
- The [container runtime](https://kubernetes.io/docs/setup/production-environment/container-runtimes/) of choice. We favored CRI-O, and would recommend that one. 
- Installing the required binaries: [Documentation](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)
  * kubelet
  * kubeadm
  * kubectl (the CLI tool to talk to your cluster)

**Note:** Pay attention that all the binaries, and the chosen CRI, are of matching compatible versions.

Lastly, there is one networking setup requirement, or choice: there needs to be an endpoint for the control-plane API (an IP address, and optionally, a DNS that resolves to that IP). In the special case of a single-node cluster, then picking the IP of the listening interface fits the bill. But, more generally, one would either setup a Load Balancer if setting up the cluster on a Cloud Provider, and use that Load Balancer's IP / DNS, or in case of a multi-node control-plane in bare metal, one may setup something like [Keepalived](https://keepalived.readthedocs.io/en/latest/introduction.html) to have a floating IP suitable to be used as the control-plane endpoint.

## Bootstrapping a cluster with Kubeadm

A feature that stands out in *kubeadm* is the ability to customize almost every option of the underlying components. That configuration is passed via flags to *kubeadm*, or ingested via YAML files.
*Kubeadm* always bootstraps a cluster as a single control-plane node, and other nodes are added after the bootstrapping.

We're going to create a YAML file instead of passing all the options as flags to *kubeadm*.
Create a cluster-config.yaml file as the following:
```yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: InitConfiguration
kubeletExtraArgs:
  cgroup-driver: systemd
taints: []
---
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
networking:
  serviceSubnet: "10.96.0.0/16"
  podSubnet: "10.10.0.0/16"
kubernetesVersion: "v1.25.9"
controlPlaneEndpoint: <endpoint_ip_or_dns>
```
where you must replace `<endpoint_ip_or_dns>` by the control-plane's endpoint and, optionally, choose a different podSubnet and/or serviceSubnet. Documentation on all the many configuration options available can be found [here](https://kubernetes.io/docs/reference/config-api/kubeadm-config.v1beta3/).

next, you can use *kubeadm* to bootstrap the cluster with:
```yaml
kubeadm init --config cluster-config.yaml
```

after which, if all goes well, one should see output similar to this:

```bash
[root@iris /]# kubeadm init
I0515 19:48:51.424146 1642628 version.go:256] remote version is much newer: v1.27.1; falling back to: stable-1.25
[init] Using Kubernetes version: v1.25.9
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [iris kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 135.181.181.107]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [iris localhost] and IPs [135.181.181.107 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [iris localhost] and IPs [135.181.181.107 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 4.502328 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node iris as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node iris as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
[bootstrap-token] Using token: 4y3umx.fnuv7v9pgp4jn74b
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 135.181.181.107:6443 --token 4y3umx.fnuv7v9pgp4jn74b \
        --discovery-token-ca-cert-hash sha256:78ed580c4290e433bd7469dd6737da020c480ccb3a099a497ad641da1fecf0d5
```

this being a control-plane node, *kubeadm* will have created a *kubeconfig* file in /etc/kubernetes/admin.conf. A *kubeconfig* file is an YAML file that contains the required metadata and credentials to talk to the cluster, that being: certificates/tokens and endpoint specification. *Kubectl* will use whatever *kubeconfig* file is pointed at by the KUBECONFIG environment variable, or, by default, the file in `~/.kube/config`. So, as suggested in the output, we should do:
```bash
export KUBECONFIG=/etc/kubernetes/admin.conf
```

now *kubectl* should be setup to interact your the cluster. Try it by doing the following command:

```bash
[root@iris /]# kubectl get nodes
NAME   STATUS   ROLES           AGE   VERSION
iris   Ready    control-plane   10s   v1.25.9
```

## Installing a CNI

Kubernetes follows a very modular API interface based design. Some of those components, like the CSI (https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/ ) CNI (https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) or Ingress controller, come together to form the core of most kubernetes platform setups.

The CNI is the module that will take care of enabling networking between containers and services in different nodes, or setup each container's networking properties. As such, it is a critical next step in order to add more nodes to the cluster, or even run workload containers.

We have chosen to use [cilium](https://github.com/cilium/cilium/) as a CNI solution, but there are [many options](https://github.com/containernetworking/cni/) to choose from.

We'll go ahead and fetch the cilium binary from upstream by running the following script:
```bash
CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)
CLI_ARCH=amd64
cd /usr/local/bin
curl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
sha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum
sudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin
rm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
```

and then proceed to install cilium with default options by running:
```bash
/usr/local/bin/cilium install
```

## Adding more control-plane nodes



## Adding worker nodes
