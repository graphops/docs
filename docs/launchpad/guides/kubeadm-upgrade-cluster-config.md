---
---
# Upgrading Kubernetes ClusterConfig with kubeadm

When managing a Kubernetes cluster with `kubeadm`, there could be scenarios where you need to update the ClusterConfiguration independently of performing version upgrades. This guide walks you through those steps.

Kubeadm maintains the cluster configuration within a ConfigMap (`kubeadm-config`) in the `kube-system` namespace. If you modify this ConfigMap, the changes won’t be applied automatically to the running control plane components.

To apply the changes to a control-plane node, you will have to perform a `kubeadm upgrade` after editing the `kubeadm-config` ConfigMap. The general steps would look like this:

Pick a control-plane node to be the first to upgrade, followed by:

**1:** Edit `kubeadm-config` ConfigMap with desired changes:
```bash
kubectl edit cm -o yaml kubeadm-config -n kube-system
```

**2:** Verify the upgrade plan:
```bash
kubeadm upgrade plan
```

**3:** Perform the upgrade:
```bash
kubeadm upgrade apply v1.28.3
```
*Note*: When using `kubectl upgrade apply`, a version must be specified. If you do not intend to upgrade the Kubernetes version, simply specify the currently installed version. This allows you to apply changes without altering the Kubernetes version.

Steps **2** and **3** will need to be performed against every single control-plane node, one by one. Once those steps are performed you should see `etcd` and `kubeapi-server` pods restarted. After you perform these steps, the changes you made in the `kubeadm-config` ConfigMap the new configuration will be active.

*Note*: When making modifications that affect `etcd`, it’s crucial to confirm that the changes have been successfully applied. Ensure that the new `etcd` pod is integrated into the cluster and maintains a minimum quorum of two before proceeding to apply changes to the subsequent control plane. This step is vital for sustaining the stability and resilience of the cluster during the update process.
