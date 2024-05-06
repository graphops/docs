"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={},l="Arbitrum Archive Mainnet Node Guide",o={unversionedId:"launchpad/tutorials/arbitrum-archive-kubernetes-guide",id:"launchpad/tutorials/arbitrum-archive-kubernetes-guide",title:"Arbitrum Archive Mainnet Node Guide",description:"Introduction",source:"@site/docs/launchpad/tutorials/arbitrum-archive-kubernetes-guide.md",sourceDirName:"launchpad/tutorials",slug:"/launchpad/tutorials/arbitrum-archive-kubernetes-guide",permalink:"/launchpad/tutorials/arbitrum-archive-kubernetes-guide",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/tutorials/arbitrum-archive-kubernetes-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Other Resources",permalink:"/launchpad/other-resources"},next:{title:"Celo Archive Mainnet Node Guide",permalink:"/launchpad/tutorials/celo-archive-kubernetes-guide"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Setup Environment",id:"setup-environment",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Kubernetes Cluster Using Launchpad",id:"kubernetes-cluster-using-launchpad",level:2},{value:"Initial Configuration",id:"initial-configuration",level:3},{value:"Data Restoration and Configuration",id:"data-restoration-and-configuration",level:3},{value:"Deploying with helm in a Kubernetes Cluster Outside Launchpad",id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad",level:2},{value:"Deploy Arbitrum Classic",id:"deploy-arbitrum-classic",level:3},{value:"Deploy Arbitrum Nitro",id:"deploy-arbitrum-nitro",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"arbitrum-archive-mainnet-node-guide"},"Arbitrum Archive Mainnet Node Guide"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This guide provides an end-to-end walkthrough for setting up an Indexer on the Graph Protocol Mainnet for the Arbitrum One network. It details the steps for deploying both Arbitrum Classic and Arbitrum Nitro."),(0,n.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,n.kt)("p",null,"Arbitrum Nitro includes a built-in proxy that automatically redirects queries for blocks older than its genesis to the Arbitrum Classic node."),(0,n.kt)("h2",{id:"setup-environment"},"Setup Environment"),(0,n.kt)("p",null,"This guide assumes operation within a Kubernetes cluster:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For setups using Launchpad, follow the steps outlined ",(0,n.kt)("a",{parentName:"li",href:"#kubernetes-cluster-using-launchpad"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"For setups using Helm only, refer to the instructions ",(0,n.kt)("a",{parentName:"li",href:"#deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad"},"here"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before you begin, ensure you have the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("inlineCode",{parentName:"li"},"ethereum-mainnet")," RPC endpoint."),(0,n.kt)("li",{parentName:"ul"},"CPU: 4 Cores / 8 Threads."),(0,n.kt)("li",{parentName:"ul"},"RAM: 16 GiB."),(0,n.kt)("li",{parentName:"ul"},"Storage: 3 TiB NVMe SSD.")),(0,n.kt)("h2",{id:"kubernetes-cluster-using-launchpad"},"Kubernetes Cluster Using Launchpad"),(0,n.kt)("p",null,"Ensure all ",(0,n.kt)("a",{parentName:"p",href:"../prerequisites"},"Launchpad Prerequisites")," are met before proceeding."),(0,n.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Confirm your cluster is operational by consulting our ",(0,n.kt)("a",{parentName:"li",href:"../quick-start/"},"Quick Start")," guide."),(0,n.kt)("li",{parentName:"ol"},"In your private infra repo pull in latest ",(0,n.kt)("inlineCode",{parentName:"li"},"launchpad-starter")," changes:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"task launchpad:pull-upstream-starter\n")),(0,n.kt)("h3",{id:"data-restoration-and-configuration"},"Data Restoration and Configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Blockchain node data snapshot")," The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-namespaces/blob/main/arbitrum-one/README.md"},"Arbitrum-One namespace")," contains default configurations for both Arbitrum Classic and Arbitrum Nitro to download data from a snapshot. The snapshots have been set by default:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-namespaces/blob/585f4a0aa711b27adedd2493daa57b28f01eeca1/arbitrum/values/one/arbitrum-classic.yaml.gotmpl#L20-L24"},"Arbitrum Classic"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"restoreSnapshot:\n  enabled: true\n  snapshotUrl: https://snapshot.arbitrum.foundation/arb1/classic-archive.tar\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-namespaces/blob/585f4a0aa711b27adedd2493daa57b28f01eeca1/arbitrum/values/one/arbitrum-nitro.yaml.gotmpl#L11-L13"},"Arbitrum Nitro"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"restoreSnapshot:\n  enabled: true\n  snapshotUrl: https://snapshot.arbitrum.foundation/arb1/nitro-archive.tar\n")),(0,n.kt)("p",null,"you can overwrite both of these values in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/namespaces/arbitrum-one.yaml"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Connect to eth-mainnet-rpc-node")," Both Arbitrum Classic and Arbitrum Nitro connect to l1, and recent versions of Arbitrum Nitro require connection to a beacon chain RPC:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("strong",{parentName:"li"},"Arbitrum Classic")," - update values in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/namespaces/arbitrum-one.yaml"))," as needed. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum-classic:\n  values:\n    arbitrum:\n      config:\n        parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("strong",{parentName:"li"},"Arbitrum Nitro")," - update values in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/namespaces/arbitrum-one.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/helmfiles/namespaces/arbitrum-one.yaml"))," as needed. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum-nitro:\n  values:\n    nitro:\n      config:\n        parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme\n        parentChainBeaconUrl: http://your-eth-consensus-node-url:5052  ## changeme\n")),(0,n.kt)("h2",{id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad"},"Deploying with helm in a Kubernetes Cluster Outside Launchpad"),(0,n.kt)("p",null,"You can find blockchain related helm packages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-charts/tree/main/charts"},"here")),(0,n.kt)("h3",{id:"deploy-arbitrum-classic"},"Deploy Arbitrum Classic"),(0,n.kt)("p",null,"We'll first deploy Arbitrum Classic as Arbitrum Nitro needs to connect to the Classic endpoint. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prepare your configuration file, ",(0,n.kt)("inlineCode",{parentName:"li"},"arbitrum-classic.yaml"),", with the necessary RPC URL and optional snapshot URL:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum:\n  config:\n    parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme\n  restoreSnapshot:\n    enabled: true\n    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz ## specify only if overriding default\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Add the Helm repository and deploy:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add graphops http://graphops.github.io/launchpad-charts\nhelm install --dry-run arbitrum-classic graphops/arbitrum-classic:latest --namespace arbitrum-one --value arbitrum-classic.yaml\n")),(0,n.kt)("h3",{id:"deploy-arbitrum-nitro"},"Deploy Arbitrum Nitro"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prepare your configuration file, ",(0,n.kt)("inlineCode",{parentName:"li"},"arbitrum-nitro.yaml"),", with the necessary RPC URLs, classic node URLs and optional snapshot URL:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"nitro:\n  config:\n    parentChainUrl: http://your-eth-mainnet-url:8545  ## changeme\n    parentChainBeaconUrl: http://your-eth-consensus-node-url:5052  ## changeme\n    classicUrl: http://arbitrum-classic:8547/  # replace `arbitrum-classic` with the name of your arbitrum-classic release deployed at the previous step\n  restoreSnapshot:\n    enabled: true\n    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz ## specify only if overriding default\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Deploy using helm:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --dry-run arbitrum-nitro graphops/arbitrum-classic:latest --namespace arbitrum-one --value arbitrum-nitro.yaml\n")))}m.isMDXComponent=!0}}]);