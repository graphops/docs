"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8603],{6569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=t(4848),r=t(8453);const s={},o="Upgrading Kubernetes ClusterConfig with kubeadm",d={id:"launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",title:"Upgrading Kubernetes ClusterConfig with kubeadm",description:"When managing a Kubernetes cluster with kubeadm, there could be scenarios where you need to update the ClusterConfiguration independently of performing version upgrades. This guide walks you through those steps.",source:"@site/docs/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config.md",sourceDirName:"launchpad/advanced-tutorials",slug:"/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"FCOS Installation",permalink:"/launchpad/advanced-tutorials/install-fcos"},next:{title:"Upgrading Kubernetes with kubeadm",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-nodes"}},i={},c=[];function u(e){const n={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"upgrading-kubernetes-clusterconfig-with-kubeadm",children:"Upgrading Kubernetes ClusterConfig with kubeadm"})}),"\n",(0,a.jsxs)(n.p,{children:["When managing a Kubernetes cluster with ",(0,a.jsx)(n.code,{children:"kubeadm"}),", there could be scenarios where you need to update the ClusterConfiguration independently of performing version upgrades. This guide walks you through those steps."]}),"\n",(0,a.jsxs)(n.p,{children:["Kubeadm maintains the cluster configuration within a ConfigMap (",(0,a.jsx)(n.code,{children:"kubeadm-config"}),") in the ",(0,a.jsx)(n.code,{children:"kube-system"})," namespace. If you modify this ConfigMap, the changes won\u2019t be applied automatically to the running control plane components."]}),"\n",(0,a.jsxs)(n.p,{children:["To apply the changes to a control-plane node, you will have to perform a ",(0,a.jsx)(n.code,{children:"kubeadm upgrade"})," after editing the ",(0,a.jsx)(n.code,{children:"kubeadm-config"})," ConfigMap. The general steps would look like this:"]}),"\n",(0,a.jsx)(n.p,{children:"Pick a control-plane node to be the first to upgrade, followed by:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1:"})," Edit ",(0,a.jsx)(n.code,{children:"kubeadm-config"})," ConfigMap with desired changes:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl edit cm -o yaml kubeadm-config -n kube-system\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"2:"})," Verify the upgrade plan:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubeadm upgrade plan\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"3:"})," Perform the upgrade:"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Note"}),": If you have local patches applied to your Kubernetes setup (ie. altering the kube-scheduler or kube-controller-manager configurations for better performance under specific workloads or hardware configurations), ensure they are included or updated appropriately during the upgrade process. To do this pass the ",(0,a.jsx)(n.code,{children:"--patches /path/to/your/patches"})," flag to your ",(0,a.jsx)(n.code,{children:"kubeadm upgrade apply"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubeadm upgrade apply v1.28.3\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Note"}),": When using ",(0,a.jsx)(n.code,{children:"kubectl upgrade apply"}),", a version must be specified. If you do not intend to upgrade the Kubernetes version, simply specify the currently installed version. This allows you to apply changes without altering the Kubernetes version."]}),"\n",(0,a.jsxs)(n.p,{children:["Steps ",(0,a.jsx)(n.strong,{children:"2"})," and ",(0,a.jsx)(n.strong,{children:"3"})," will need to be performed against every single node, both control-planes and worker nodes as applicable depending on the changes. Once those steps are performed you should see ",(0,a.jsx)(n.code,{children:"etcd"})," and ",(0,a.jsx)(n.code,{children:"kubeapi-server"})," pods restarted. After you perform these steps, the changes you made in the ",(0,a.jsx)(n.code,{children:"kubeadm-config"})," ConfigMap the new configuration will be active."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Note"}),": When making modifications that affect ",(0,a.jsx)(n.code,{children:"etcd"}),", it\u2019s crucial to confirm that the changes have been successfully applied. Ensure that the new ",(0,a.jsx)(n.code,{children:"etcd"})," pod is integrated into the cluster and maintains a minimum quorum of two before proceeding to apply changes to the subsequent control plane. This step is vital for sustaining the stability and resilience of the cluster during the update process."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);