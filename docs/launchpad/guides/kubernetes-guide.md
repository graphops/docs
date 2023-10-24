---
---
# Kubernetes Guide

## Introduction

[Kubernetes](https://kubernetes.io/) is the container orchestration system emerging as the victor of the container wars.
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
- **control-plane** nodes: these are the nodes that run *kube-apiserver*, *kube-controller-manager*, and in some setups also *etcd* nodes (*etcd* could, potentially, run externally in its own independent nodes)
- **worker** nodes: these need to run mostly *kubelet*, as their purpose is focused on running the workload containers

Setting up, and bootstrapping a cluster involves installing and configuring all the required components, certificates management, and container manifests that make up the system. There are numerous options and tools to achieve this goal, but performing manual bootstrapping is a highly educational experience: [Kubernetes - The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)).

This guide utilizes [Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/) - a tool used to bootstrap and manage the lifecycle of a Kubernetes cluster (upgrade versions, add/remove nodes). It automates the process of setting up a cluster and provides a consistent way of doing it while preserving almost as much control over the setup as a purely manual one.

## Overview

### Prerequisites

- At least a node configured with your Linux OS of choice and swap disabled - recent Kubernetes versions allow the host to have swap enabled, but that is a new feature not yet in GA (General Availability) and requires extra setup.
- The [container runtime](https://kubernetes.io/docs/setup/production-environment/container-runtimes/) of choice. We favored CRI-O, and would recommend that one. 
- Installing the required binaries: [Documentation](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)
  * kubelet
  * kubeadm
  * kubectl (the CLI tool to talk to your cluster)

**Note:** Pay attention that all the binaries, and the chosen CRI, are of matching compatible versions.

Lastly, there is one networking setup requirement, or choice: there needs to be an endpoint for the control-plane API (an IP address, and optionally, a DNS that resolves to that IP). In the special case of a single-node cluster, picking the IP of the listening interface fits the bill. But, more generally, one would either setup a Load Balancer if setting up the cluster on a Cloud Provider, and use that Load Balancer's IP / DNS, or in case of a multi-node control-plane in bare metal, one may setup something such as [Keepalived](https://keepalived.readthedocs.io/en/latest/introduction.html) to have a floating IP suitable to be used as the control-plane endpoint.

### Bootstrapping a cluster with Kubeadm

A feature that stands out in *kubeadm* is the ability to customize almost every option of the underlying components. That configuration is passed via flags to *kubeadm*, or ingested via YAML files.
*Kubeadm* always bootstraps a cluster as a single control-plane node, and other nodes are added after the bootstrapping.

We're going to create a YAML file instead of passing all the options as flags to *kubeadm*.
Create a cluster-config.yaml file as the following:
```yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: InitConfiguration
nodeRegistration:
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
kubeadm init --upload-certs --config cluster-config.yaml
```

after which, if all goes well, one should see output similar to this:

```bash
[root@demo /]# kubeadm init
I0515 19:48:51.424146 1642628 version.go:256] remote version is much newer: v1.27.1; falling back to: stable-1.25
[init] Using Kubernetes version: v1.25.9
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [demo kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 134.177.177.107]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]
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
[mark-control-plane] Marking the node demo as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node demo as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
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

You can now join any number of control-plane node by running the following command on each as a root:

kubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 --control-plane --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07

Please note that the certificate-key gives access to cluster sensitive data, keep it secret!
As a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use kubeadm init phase upload-certs to reload certs afterward.

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866
```
(*Note*: Save these `kubeadm join` commands presented in this output, as they contain secrets that will be required to add more nodes in future steps.)


this being a control-plane node, *kubeadm* will have created a *kubeconfig* file in /etc/kubernetes/admin.conf. A *kubeconfig* file is a YAML file that contains the required metadata and credentials to talk to the cluster, such as certificates/tokens and endpoint specification. *Kubectl* will use whatever *kubeconfig* file is pointed at by the KUBECONFIG environment variable, or, by default, the file in `~/.kube/config`. So, as suggested in the output, we should do:
```bash
export KUBECONFIG=/etc/kubernetes/admin.conf
```

now *kubectl* should be setup to interact your the cluster. Try it by doing the following command:

```bash
[root@demo /]# kubectl get nodes
NAME   STATUS   ROLES           AGE   VERSION
demo   Ready    control-plane   10s   v1.25.9
```

### Installing a CNI

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

### Adding more control-plane nodes

If you have gone with the default topology setup, *kubeadm* should be instantiating *etcd* instances co-located with your control-plane nodes. Given that and the fact that *etcd* is a majority quorum based system, it's especially important that for a high-availability setup, you'll keep an ***odd*** (i.e: one, three, five, ...) number of control-plane nodes. As such, the minimum number of control-plane nodes that can offer high-availability would be three.

To add more control-plane nodes you need to first get the hosts ready for such by:
- preparing the node OS as required
- provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)

and then execute, on that node, the appropriate `kubeadm join` command as shown in the previous `kubeadm init` output.
For a control-plane node, that takes the form: 
```bash
kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash> --control-plane --certificate-key <secret>
```

*Note*: the `kubeadm join` commands shown after bootstrapping the cluster or, rather, the secrets uploaded and displayed are temporary and expire after a certain time. In case you lost them or they've expired, you can re-upload new certificates and display the new ones, on the bootstrapping control-plane node, by running:
```bash
kubeadm init phase upload-certs --upload-certs
kubeadm token create --print-join-command
```

### Adding worker nodes

To add worker nodes to your cluster, first get them ready for such by:
- preparing the node OS as required
- provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)

Next, you can run the appropriate `kubeadm join` command that was displayed at cluster bootstrap. It has the form:
```bash
kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash>
```

In case you haven't saved that output, you can run (on one of the existing control-plane cluster members) the following command:
```bash
kubeadm token create --print-join-command
```

which will display you the appropriate kubeadm join command and the relevant secrets, again.

## QuickStart on Ubuntu 22.04 with CRI-O

*Note*: This guide assumes you'll be running these commands as root.

### Prerequisites

**1:** Enable the required kernel modules on boot:
```bash
cat <<EOF > /etc/modules-load.d/crio-network.conf
overlay
br_netfilter
EOF
```

and load them now:
```bash
modprobe overlay
modprobe br_netfilter
```

**2:** Set appropriate networking sysctl toggles:
```bash
cat <<EOF > /etc/sysctl.d/99-kubernetes.conf
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF
```

and apply them immediately:
```bash
sysctl --system
```

**3:** Disable swap:
```bash
swapoff -a
```

and take care to disable swap setup on boot, in case it is enabled (maybe on /etc/fstab)

### Install packages

**4:** Install dependencies:
```bash
apt-get update
apt-get install -y apt-transport-https ca-certificates curl gpg
```

**5:** Set variables for CRI-O commands:
```bash
export OS="xUbuntu_22.04"
export VERSION="1.28"
```

**6:** Install CRI-O:
```bash
echo "deb [signed-by=/usr/share/keyrings/libcontainers-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
echo "deb [signed-by=/usr/share/keyrings/libcontainers-crio-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list

mkdir -p /usr/share/keyrings
curl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-archive-keyring.gpg
curl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-crio-archive-keyring.gpg

apt-get update
apt-get install cri-o cri-o-runc

systemctl daemon-reload
systemctl enable --now crio
```

**7:** Install kubernetes pacakges:
```bash
curl -fsSL https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
apt-get update
apt-get install -y kubelet kubeadm kubectl
```

**8:** Hold package versions so they don't auto-update:
```bash
apt-mark hold kubelet kubeadm kubectl
```

### Initialize the Cluster

**9:** Create a kubeadm config for initializing the Cluster:
```bash
cat << EOF > /tmp/cluster-config.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: InitConfiguration
nodeRegistration:
  kubeletExtraArgs:
    cgroup-driver: systemd
    node-ip: 10.110.0.2
  taints: []
skipPhases:
  - addon/kube-proxy
---
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
networking:
  serviceSubnet: "10.96.0.0/16"
  podSubnet: "10.10.0.0/16"
controllerManager:
  extraArgs:
    allocate-node-cidrs: "true"
    node-cidr-mask-size: "20"
kubernetesVersion: "v1.28.3"
controlPlaneEndpoint: 10.110.0.2 
EOF
```

***Note***: If you intend to setup a HA Cluster, you should take care of setting up the VIP beforehand (be it by creating a Load Balancer in a Cloud Provider, or using a bare-metal solution based on something like Keepalived). That VIP (or DNS) should go into the `controlPlaneEndpoint`, as changing this after creating the Cluster is an elaborate endeavor.

Here, we are also passing along a specific node-ip to guarantee the internal interface is gonna be used as the node we're using has multiple interfaces/IPs, and we're skipping kube-proxy install because we intend to use cilium CNI replacing kube-proxy.

**10:** Initialize the Cluster:
```bash
kubeadm init --upload-certs --config /tmp/cluster-config.yaml
```

**11:** Copy kubeconfig to ~/.kube/config:
```bash
mkdir ~/.kube
cp /etc/kubernetes/admin.conf ~/.kube/config
```

**12:** Verify the cluster is online and ready with `kubectl get nodes`:
```bash
NAME                             STATUS   ROLES           AGE   VERSION
ubuntu-s-2vcpu-4gb-amd-ams3-01   Ready    control-plane   85m   v1.28.3
```

### Install Cilium CNI

**13:** Install cilium binary
```bash
CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)
CLI_ARCH=amd64
cd /usr/local/bin
curl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
sha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum
sudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin
rm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
```

**14:** Install cilium CNI with `cilium install`:
```bash
ℹ  Using Cilium version 1.14.2
🔮 Auto-detected cluster name: kubernetes
🔮 Auto-detected kube-proxy has not been installed
ℹ  Cilium will fully replace all functionalities of kube-proxy
```

**15:** Wait a minute and verify it has been deployed successfully with `cilium status`:
```bash
    /¯¯\
 /¯¯\__/¯¯\    Cilium:             OK
 \__/¯¯\__/    Operator:           OK
 /¯¯\__/¯¯\    Envoy DaemonSet:    disabled (using embedded mode)
 \__/¯¯\__/    Hubble Relay:       disabled
    \__/       ClusterMesh:        disabled

Deployment             cilium-operator    Desired: 1, Ready: 1/1, Available: 1/1
DaemonSet              cilium             Desired: 1, Ready: 1/1, Available: 1/1
Containers:            cilium             Running: 1
                       cilium-operator    Running: 1
Cluster Pods:          2/2 managed by Cilium
Helm chart version:    1.14.2
Image versions         cilium             quay.io/cilium/cilium:v1.14.2@sha256:6263f3a3d5d63b267b538298dbeb5ae87da3efacf09a2c620446c873ba807d35: 1
                       cilium-operator    quay.io/cilium/operator-generic:v1.14.2@sha256:52f70250dea22e506959439a7c4ea31b10fe8375db62f5c27ab746e3a2af866d: 1
```

Congratulations! :tada:

### Add more nodes

#### Control-Plane nodes

**1:** On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)

**2:** Create a kubeadm join config:
```bash
cat << EOF > /tmp/join-config.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: JoinConfiguration
discovery:
  bootstrapToken:
    token: <token>
    apiServerEndpoint: <control plane endpoint>
    caCertHashes:
      - <ca cert hash>
nodeRegistration:
  kubeletExtraArgs:
    cgroup-driver: systemd
    node-ip: 10.110.0.5
controlPlane:
  certificateKey: <ca certificate key>
EOF
```

The `<token>`,`<ca cert hash>` and `<ca certificate key>` will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can get a new certificateKey with:
```bash
kubeadm init phase upload-certs --upload-certs
```

and obtain the token and certificate hash with:
```bash
kubeadm token create --print-join-command
```

We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on.

**3:** On each node, provided each join-config.yaml has been adjusted if required, join the node with:
```bash
kubeadm join --config /tmp/join-config.yaml
```

#### Worker nodes

**1:** On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)

**2:** Create a kubeadm join config:
```bash
cat << EOF > /tmp/join-config.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: JoinConfiguration
discovery:
  bootstrapToken:
    token: <token>
    apiServerEndpoint: 10.110.0.2:6443
    caCertHashes:
      - <ca cert hash>
nodeRegistration:
  kubeletExtraArgs:
    cgroup-driver: systemd
    node-ip: 10.110.0.7
  taints: []
EOF
```

The `<token>` and `<ca cert hash>` will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can obtain them again by running on a control-plane node:
```bash
kubeadm token create --print-join-command
```

We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on.

**3:** On each node, provided each join-config.yaml has been adjusted if required, join the node with:
```bash
kubeadm join --config /tmp/join-config.yaml
```

**4:** Label the new worker nodes, by running on a control-plane node:
```bash
kubectl label node <node_name> node-role.kubernetes.io/worker=""
```
