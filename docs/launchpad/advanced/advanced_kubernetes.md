---
---
# Considerents for Kubernetes installation using FCOS

This guide provides a general walkthrough for installing Kubernetes using Fedora CoreOS (FCOS) as the base operating system.

## Prerequisites

Before proceeding with this guide, ensure you have a solid understanding of how `fcos` works and the steps required to install and enable fcos as detailed in [Install fcos guide](guide/install-fcos).

Additionally, a clear grasp of the fundamental [Kubernetes architecture](https://devopscube.com/kubernetes-architecture-explained/) will greatly aid in navigating the guidance outlined ahead .

## Key components for Kubernetes Installation

To set up Kubernetes on any node, you will require the [`kubeadm`](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) tool and a compatible [`container runtime`](https://kubernetes.io/docs/setup/production-environment/container-runtimes/).

Key features of `kubeadm` include:

* **Cluster Initialization:** kubeadm helps you initialize the control plane node of a Kubernetes cluster. It handles tasks like generating TLS certificates, creating the Kubernetes configuration files, and setting up the initial control plane components.

* **Node Joining:** You can use kubeadm to add worker nodes (also known as worker or minion nodes) to the cluster. This involves generating the necessary credentials and configurations for nodes to communicate with the control plane.

* **Upgrades:** kubeadm assists in upgrading a Kubernetes cluster to a newer version by providing commands to perform version-specific upgrade tasks.

* **Configurations:** The tool helps generate the necessary Kubernetes configuration files (e.g., kubeconfig) that enable communication between different components of the cluster.

* **Networking:** While kubeadm itself does not handle networking directly, it can help you integrate with various networking solutions, such as Calico, Flannel, or others.

* **Token Management:** kubeadm uses tokens for securely joining nodes to the cluster. It manages the generation and distribution of these tokens.

* **Certificate Management:** kubeadm manages TLS certificates required for secure communication between cluster components.

* **Configuration Validation:** kubeadm performs preflight checks to validate whether the host system is ready for cluster creation or joining.

**Note:** If you opt for a multi-node Kubernetes cluster, your Butane configurations will differ based on the specific role each node plays, whether it's a control plane or a worker node.

### Butane config for Kubernetes control-planes

Running `kubeadm init` is the first step in setting up the Kubernetes control plane, but there are several additional tasks you need to perform to ensure that the control plane is fully functional and secure: 

1. **Install kubectl**: After running kubeadm init, you'll receive instructions on how to set up the `kubectl` command-line tool will be used to interact with the Kubernetes cluster. 

2. **Set Up Network Plugin**: Kubernetes requires a network plugin to enable communication between pods and nodes. Choose a network plugin that suits your needs (e.g., Calico, Flannel, Cilium) and install it on the cluster.

3. **Secure the Control Plane**: Apply security best practices to the control plane components. For example, you can restrict access to the API server, enable RBAC (Role-Based Access Control), and set up authentication and authorization mechanisms.

4. **Back Up Certificates**: Back up the Kubernetes certificates generated during the kubeadm init process. These certificates are critical for secure communication within the cluster.

5. **Configure Load Balancing:** If you're setting up a high-availability control plane, you might need to configure load balancing for the API server to distribute traffic among multiple control plane nodes.

Remember that this list provides a general overview of the tasks you need to complete after running kubeadm init. The specific steps may vary depending on your cluster's requirements and the components you choose to install.

### Butane config for Kubernetes worker nodes

On a worker node you need to perform the following steps for installing Kubernetes:

1. Install the Container Runtime of your choice. This runtime is responsible for managing and running containers.

2. Install the kubelet: The kubelet is the primary node agent responsible for managing containers on the node and ensuring they match the desired state described in the Kubernetes manifest files. 

3. Run kubeadm join: Once the container runtime and kubelet are installed and properly configured on the worker node, you can run the kubeadm join command to connect the node to the cluster's control plane.

4. Network Configuration: After the node is joined to the cluster, you might need to configure network plugins (e.g., Calico, Flannel) to enable communication between nodes and pods.