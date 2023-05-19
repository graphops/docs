"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(r),h=n,d=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={},l="Arbitrum Archive Mainnet Node Guide",s={unversionedId:"launchpad/guides/arbitrum-archive-kubernetes-guide",id:"launchpad/guides/arbitrum-archive-kubernetes-guide",title:"Arbitrum Archive Mainnet Node Guide",description:"This guide is intended to be an end to end walk-through of running an Arbitrum Archive Mainnet Node in an existing Kubernetes cluster.",source:"@site/docs/launchpad/guides/arbitrum-archive-kubernetes-guide.md",sourceDirName:"launchpad/guides",slug:"/launchpad/guides/arbitrum-archive-kubernetes-guide",permalink:"/launchpad/guides/arbitrum-archive-kubernetes-guide",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/guides/arbitrum-archive-kubernetes-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Other Resources",permalink:"/launchpad/other-resources"},next:{title:"Avalanche Archive Mainnet Node Guide",permalink:"/launchpad/guides/avalanche-archive-kubernetes"}},u={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"If running a Kubernetes cluster using <code>Launchpad</code>",id:"if-running-a-kubernetes-cluster-using-launchpad",level:2},{value:"Deploying with helm in a Kubernetes cluster outside Launchpad",id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad",level:2},{value:"Deploy Arbitrum Classic",id:"deploy-arbitrum-classic",level:3},{value:"Deploy Arbitrum Nitro",id:"deploy-arbitrum-nitro",level:3}],c={toc:o},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"arbitrum-archive-mainnet-node-guide"},"Arbitrum Archive Mainnet Node Guide"),(0,n.kt)("p",null,"This guide is intended to be an end to end walk-through of running an Arbitrum Archive Mainnet Node in an existing Kubernetes cluster.\nSync times are reported to be in the range of 1 week on dedicated hardware. The node consists of 2 parts, the classic part and the nitro hardfork. The classic part is only required to request archive data for blocks before the hardfork and takes the aforementioned 1 weeks to sync from scratch. The nitro history is shorter and can be quickly synced within 3 days."),(0,n.kt)("p",null,"Arbitrum Nitro has a built-in proxy to redirect queries with block numbers below it\u2019s genesis block (they\u2019re sent to the Arbitrum Classic node)"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"All the ",(0,n.kt)("a",{parentName:"p",href:"../prerequisites"},"Launchpad Prerequisites")," apply if running a Kubernetes cluster using ",(0,n.kt)("inlineCode",{parentName:"p"},"Launchpad"),", so be sure to read them first. This guide can be used with existing Kubernetes clusters as well."),(0,n.kt)("p",null,"You will need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("inlineCode",{parentName:"li"},"ethereum-mainnet")," RPC endpoint"),(0,n.kt)("li",{parentName:"ul"},"CPU: 4 Cores / 8 Threads"),(0,n.kt)("li",{parentName:"ul"},"RAM: 16 GiB"),(0,n.kt)("li",{parentName:"ul"},"Storage: 3 TiB NVMe SSD")),(0,n.kt)("h2",{id:"if-running-a-kubernetes-cluster-using-launchpad"},"If running a Kubernetes cluster using ",(0,n.kt)("inlineCode",{parentName:"h2"},"Launchpad")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check that the cluster is running and healthy - review ",(0,n.kt)("a",{parentName:"li",href:"../quick-start/"},"Quick Start")," guide for more info."),(0,n.kt)("li",{parentName:"ol"},"In your private infra repo pull in latest ",(0,n.kt)("inlineCode",{parentName:"li"},"launchpad-starter")," changes")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"task launchpad:pull-upstream-starter\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Pull in ",(0,n.kt)("inlineCode",{parentName:"li"},"latest-core")," changes")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"task launchpad:update-core\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"blockchain node data snapshot")," Arbitrum Classic provides functionality to download data from a snapshot. Review all files in ",(0,n.kt)("inlineCode",{parentName:"li"},"[<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/"),"](",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/"},"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/"),") before deploying the chart")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum:\n  restoreSnapshot:\n    enable: true\n    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz\n    mode: streaming # or multipart depending on chain\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"connect to eth-mainnet-rpc-node")," Both Arbitrum Classic and Arbitrum Nitro connect to l1 via the following commands:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for Arbitrum Nitro - update values in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/arbitrum-classic-archive-trace-mainnet.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/arbitrum-classic-archive-trace-mainnet.yaml"))," as needed. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum:\n  extraArgs:\n    - --node.chain-id=42161  # determines Arbitrum network - 42161 mainnet\n    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for Arbitrum Nitro - update values in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/arbitrum-nitro-archive-trace-mainnet.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/arbitrum-nitro-archive-trace-mainnet.yaml"))," as needed. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"nitro:\n  extraArgs:\n    - --http.api=net,web3,eth,debug\n    - --l2.chain-id=42161  # determines Arbitrum network - 42161 mainnet\n    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545\n    - --node.rpc.classic-redirect=http://arbitrum-classic-archive-trace-mainnet-0:8547/\n    - --init.url=https://snapshot.arbitrum.io/mainnet/nitro.tar\n")),(0,n.kt)("h2",{id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad"},"Deploying with helm in a Kubernetes cluster outside Launchpad"),(0,n.kt)("p",null,"You can find blockchain related helm packages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-charts/tree/main/charts"},"'here'")),(0,n.kt)("p",null,"Given that Arbitrum needs both Nitro and classic to run use the following commands:"),(0,n.kt)("h3",{id:"deploy-arbitrum-classic"},"Deploy Arbitrum Classic"),(0,n.kt)("p",null,"We'll first deploy Arbitrum Classic as Arbitrum Nitro needs to connect to the Classic endpoint. "),(0,n.kt)("p",null,"Create a values ",(0,n.kt)("inlineCode",{parentName:"p"},"arbitrum-classic.yaml")," file with the following contents"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"arbitrum:\n  extraArgs:\n    - --node.chain-id=42161  # determines Arbitrum network - 42161 mainnet\n    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545\n  restoreSnapshot:\n    enable: true\n    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz\n    mode: streaming # or multipart depending on chain\n")),(0,n.kt)("p",null,"Deploy helm-chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add graphops http://graphops.github.io/launchpad-charts\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --dry-run arbitrum-classic graphops/arbitrum-classic:latest --namespace arbitrum-mainnet --value arbitrum-classic.yaml\n")),(0,n.kt)("h3",{id:"deploy-arbitrum-nitro"},"Deploy Arbitrum Nitro"),(0,n.kt)("p",null,"Create a values ",(0,n.kt)("inlineCode",{parentName:"p"},"arbitrum-nitro.yaml")," file with the following contents"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"nitro:\n  extraArgs:\n    - --http.api=net,web3,eth,debug\n    - --l2.chain-id=42161  # determines Arbitrum network - 42161 mainnet\n    - --l1.url=http://a-link-to-your-eth-mainnet-url:8545\n    - --node.rpc.classic-redirect=http://arbitrum-classic:8547/  # replace `arbitrum-classic` with the name of your arbitrum-classic release deployed at the previous step\n    - --init.url=https://snapshot.arbitrum.io/mainnet/nitro.tar\n")),(0,n.kt)("p",null,"Deploy helm-chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --dry-run arbitrum-nitro graphops/arbitrum-classic:latest --namespace arbitrum-mainnet --value arbitrum-nitro.yaml\n")))}m.isMDXComponent=!0}}]);