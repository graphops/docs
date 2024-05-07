---
sidebar_position: 5
---

# Frequently Asked Questions (FAQs)

Here are answers to some commonly asked questions. If you have a question that is not covered here, feel free to ask.

---

## Table of Contents

- [Frequently Asked Questions (FAQs)](#frequently-asked-questions-faqs)
  - [Table of Contents](#table-of-contents)
    - [Do I need a server for launchpad-starter?](#do-i-need-a-server-for-launchpad-starter)
    - [When you setup `postgres`, how do you configure the `zfs` storage parameters?](#when-you-setup-postgres-how-do-you-configure-the-zfs-storage-parameters)
    - [Is there a way to inject a pretuned postgres config into the chart?](#is-there-a-way-to-inject-a-pretuned-postgres-config-into-the-chart)
    - [Why are my stateful pods in `Pending` state and their expected `pvc` showing `WaitForFirstConsumer` errors?](#why-are-my-stateful-pods-in-pending-state-and-their-expected-pvc-showing-waitforfirstconsumer-errors)
    - [Do I need to use Cilium for Launchpad?](#do-i-need-to-use-cilium-for-launchpad)
    - [How active is the Launchpad project?](#how-active-is-the-launchpad-project)
    - [I'm not ready to use Launchpad but I use Kubernetes](#im-not-ready-to-use-launchpad-but-i-use-kubernetes)
  - [Need More Help?](#need-more-help)

---

### Do I need a server for launchpad-starter?

**Q: Do I need a server for launchpad-starter?**

**A:** No! The [Client Side Tooling](client-side-tooling) that comes with Launchpad should be run on your local machine. These tools are only used to instruct your cluster what to do..

---

### When you setup `postgres`, how do you configure the `zfs` storage parameters?

**Q: When you setup `postgres`, how do you configure the `zfs` storage parameters (eg the block size, compression, etc) ?**

**A:** Persistent workloads consume Persistent Volumes that use some specific StorageClass (an abstraction). Storage Providers in Kubernetes (like [openebs/zfs-localpv](https://github.com/openebs/zfs-localpv/tree/develop)), do the operational work of "implementing" those Storage Classes. It is the `StorageClass` object/resource that would have that particular ZFS setup controlled by parameters. Here's an example of a `zfs` StorageClass that sets some parameters:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    meta.helm.sh/release-name: openebs-zfs-storageclass
    meta.helm.sh/release-namespace: storage
  labels:
    app.kubernetes.io/managed-by: Helm
    launchpad.graphops.xyz/layer: base
    launchpad.graphops.xyz/namespace: storage
  name: openebs-zfs-localpv-compressed-128k
parameters:
  compression: "on"
  fstype: zfs
  poolname: zpool
  recordsize: "128k"
provisioner: zfs.csi.openebs.io
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
```

---

### Is there a way to inject a pretuned postgres config into the chart?

**Q: Is there a way to inject a pretuned postgres config into the chart? Or is that a post deployment step?**

**A:** Yes. The [`resource-injector`](https://github.com/graphops/launchpad-charts/tree/main/charts/resource-injector) chart allows us to inject a pre-tuned postgres db. This [`postgresql`](https://github.com/graphops/launchpad-namespaces/blob/aeedda4fe0f50766b6d8a6e5ea69c825f7fd2dd0/graph/values/_common/graph-database.yaml#L5-L37) is a CRD (custom-resource-definition) that is consumed by the [`postgres-operator`](https://github.com/zalando/postgres-operator) (which  does the whole operational work of creating the database, setting up users, etc.. as well as replication, backups are also a possiblity). It really allows a great deal of flexibility in terms of what/how it setups the database!


--- 

### Why are my stateful pods in `Pending` state and their expected `pvc` showing `WaitForFirstConsumer` errors?

**Q: Why are my stateful pods in `Pending` state and their expected `pvc` showing `WaitForFirstConsumer` errors?**
```
  Normal  WaitForPodScheduled   26m (x19 over 31m)   persistentvolume-controller  waiting for pod kube-prometheus-stack-grafana-75b74df8fb-2vwbr to be scheduled
  Normal  WaitForPodScheduled   47s (x102 over 26m)  persistentvolume-controller  waiting for pod kube-prometheus-stack-grafana-75b74df8fb-2vwbr to be scheduled
```
or 
```
Normal  WaitForFirstConsumer  6m52s                   persistentvolume-controller  waiting for first consumer to be created before binding     
```

**A:** Using [`volumeBindingMode: WaitForFirstConsumer`](https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode) although needed for both `openebs-rawfile-localpv` and `openebs-zfs-localpv` seems to misbehave when there is a `storageClass` set as default in the cluster (the `storageClass` definition has the following annotation: `storageclass.kubernetes.io/is-default-class: "true"`). Making sure there is no default `storageClass` should fix this issue.

---

### Do I need to use Cilium for Launchpad?

**Q: Do I need a specific CNI (Cilium, Calico etc) in order to use Launchpad?**

**A:** The Launchpad stack will work regardless of CNI used and in more general terms should work will all Kubernetes clusters - so you can customize your cluster how you prefer. In our [Kubernetes guide](advanced-tutorials/kubernetes-create-cluster-with-kubeadm.md) we use Cilium due to its use of [eBPF](https://ebpf.io/what-is-ebpf/) technology. This advanced approach offers a significant boost in efficiency, especially noticeable when managing a large number of nodes. It scales well and ensures lower latency, which is crucial for high-performance requirements. While Calico does enjoy a broader base of community support and is a strong choice with its iptables routing, Cilium has the upper advantage due to its performance and its more expansive set of features.

It's important to acknowledge that while Cilium has better performance and features than Calico, it is a bit trickier to set up. Our decision isn't influenced by Launchpad; it's purely a preference based on the operational benefits that Cilium brings to our infrastructure.

---

### How active is the Launchpad project?

**Q: How often is the Launchpad project updated?**

**A:** The GraphOps team actively maintains the Launchpad project as it is integral to their indexing infrastructure. For details on how new versions of applications (ie. Erigon, Graph-node etc) are integrated into Launchpad Charts and Launchpad Namespaces, please refer to our [Release Channels documentation](release-channels.md). Additionally, you can learn about our criteria for supporting different Launchpad Namespaces by visiting the [Supported Namespaces page](supported-namespaces.md). These resources provide a comprehensive view of our update frequency and decision-making processes regarding the inclusion of new features and applications.

--- 

### I'm not ready to use Launchpad but I use Kubernetes

**Q: Is this project relevant to me if I use Kubernetes to manage blockchain infrastructure?**

**A:** Absolutely, the Launchpad project is designed with modularity at its core, making it highly adaptable for users who aren't ready to fully implement all of its components. You can benefit from using our Launchpad Charts with Helm to manage specific components of your blockchain infrastructure independently. Additionally, our charts are compatible with GitOps workflows, allowing you to integrate them seamlessly into your existing management practices. For further insights into how you can leverage the modular aspects of our project, please visit our [Modularity documentation](modularity.md).

## Need More Help?

If your question is not answered here, you can message us on the [#kubernetes-launchpad](https://discord.com/channels/438038660412342282/1029379955307585568) channel on [graphprotocol](https://discord.com/invite/vtvv7FP) Discord or you can open an issue on our [launchpad-namespaces](https://github.com/graphops/launchpad-namespaces/issues) or [launchpad-charts](https://github.com/graphops/launchpad-charts/issues) repos.
