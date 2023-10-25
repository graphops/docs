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

## Need More Help?

If your question is not answered here, you can message us on the [#kubernetes-launchpad](https://discord.com/channels/438038660412342282/1029379955307585568) channel on [graphprotocol](https://discord.com/invite/vtvv7FP) Discord or you can open an issue on our [launchpad-namespaces](https://github.com/graphops/launchpad-namespaces/issues) or [launchpad-charts](https://github.com/graphops/launchpad-charts/issues) repos.