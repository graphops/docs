"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Upgrading Kubernetes ClusterConfig with kubeadm",p={unversionedId:"launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",id:"launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",title:"Upgrading Kubernetes ClusterConfig with kubeadm",description:"When managing a Kubernetes cluster with kubeadm, there could be scenarios where you need to update the ClusterConfiguration independently of performing version upgrades. This guide walks you through those steps.",source:"@site/docs/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config.md",sourceDirName:"launchpad/advanced-tutorials",slug:"/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/advanced-tutorials/kubeadm-upgrade-cluster-config.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"FCOS Installation",permalink:"/launchpad/advanced-tutorials/install-fcos"},next:{title:"Upgrading Kubernetes with kubeadm",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-nodes"}},u={},l=[],s={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrading-kubernetes-clusterconfig-with-kubeadm"},"Upgrading Kubernetes ClusterConfig with kubeadm"),(0,r.kt)("p",null,"When managing a Kubernetes cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm"),", there could be scenarios where you need to update the ClusterConfiguration independently of performing version upgrades. This guide walks you through those steps."),(0,r.kt)("p",null,"Kubeadm maintains the cluster configuration within a ConfigMap (",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm-config"),") in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. If you modify this ConfigMap, the changes won\u2019t be applied automatically to the running control plane components."),(0,r.kt)("p",null,"To apply the changes to a control-plane node, you will have to perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm upgrade")," after editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm-config")," ConfigMap. The general steps would look like this:"),(0,r.kt)("p",null,"Pick a control-plane node to be the first to upgrade, followed by:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1:")," Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm-config")," ConfigMap with desired changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit cm -o yaml kubeadm-config -n kube-system\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2:")," Verify the upgrade plan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm upgrade plan\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3:")," Perform the upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm upgrade apply v1.28.3\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": When using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl upgrade apply"),", a version must be specified. If you do not intend to upgrade the Kubernetes version, simply specify the currently installed version. This allows you to apply changes without altering the Kubernetes version."),(0,r.kt)("p",null,"Steps ",(0,r.kt)("strong",{parentName:"p"},"2")," and ",(0,r.kt)("strong",{parentName:"p"},"3")," will need to be performed against every single node, both control-planes and worker nodes as applicable depending on the changes. Once those steps are performed you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeapi-server")," pods restarted. After you perform these steps, the changes you made in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm-config")," ConfigMap the new configuration will be active."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": When making modifications that affect ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),", it\u2019s crucial to confirm that the changes have been successfully applied. Ensure that the new ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," pod is integrated into the cluster and maintains a minimum quorum of two before proceeding to apply changes to the subsequent control plane. This step is vital for sustaining the stability and resilience of the cluster during the update process."))}c.isMDXComponent=!0}}]);