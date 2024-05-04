---
---
# Upgrading Kubernetes with kubeadm

In this guide we will use as an example upgrading from kubernetes v1.28.1 to v1.28.3

The the control-plane nodes must be upgraded first, followed by the worker nodes.

## Upgrade Control-Plane Nodes

Pick a control-plane node to be the first to upgrade, followed by:

**1:** Upgrading kubeadm and kubectl to the latest patch version of the desired major version:
```bash
apt-get update
apt-mark unhold kubeadm
apt-get install -y kubeadm='1.28.3-*'
apt-mark hold kubeadm
```

**2:** Verify the upgrade plan:
```bash
kubeadm upgrade plan v1.28.3
```

**3:** Drain the node:
```
kubectl drain <node-name> --ignore-daemonsets
```

**4:** Perform the upgrade:
```bash
kubeadm upgrade apply v1.28.3
```
**5:** Upgrade the node's CRI-O or other container runtime to an appropriate version if need be. For CRI-O that would be changing the minor version in the repositories added to `/etc/apt/sources.list.d` and then running:
```bash
apt-get update
apt-get install cri-o cri-o-runc
systemctl daemon-reload
systemctl restart crio
```

**6:** Upgrade kubelet and kubectl
```bash
apt-get update
apt-mark unhold kubelet
apt-mark unhold kubectl
apt-get install -y kubelet='1.28.3-*'
apt-get install -y kubectl='1.28.3-*'
apt-mark hold kubelet
apt-mark hold kubectl
```

**7:** Restart kubelet
```bash
systemctl daemon-reload
systemctl restart kubelet
```

**8:** Uncordon the node
```
kubectl uncordon <node-name>
```

**9:** Possibly, upgrade CNI. Particularly if it's a minor version upgrade there may be a need to update the CNI to a new version as well according to the vendor's release notes for the upgrade process

## Upgrade remaining Control-Plane Nodes

For the remaining control-plane nodes, execute steps 1 to 8, one at a time but:

- step 2 is skipped, no need to plan the upgrade anymore
- step 4 is replaced by:
```bash
kubeadm upgrade node
```

## Upgrade Worker Nodes

After all the control-plane nodes are upgraded, it's time to upgrade your worker nodes by following the previous steps from 1 to 8 but:
- step 2 is skipped
- step 4 is replaced by:
```bash
kubeadm upgrade node
```

*Note*: You can upgrade as many worker nodes in parallel as you see fit and/or find adequate to your availability requirements, as the nodes being upgraded will be drained from workloads.
