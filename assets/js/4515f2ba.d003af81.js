"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="Celo Archive Mainnet Node Guide",u={unversionedId:"launchpad/guides/celo-archive-kubernetes-guide",id:"launchpad/guides/celo-archive-kubernetes-guide",title:"Celo Archive Mainnet Node Guide",description:"This guide is intended to be an end to end walk-through of running an Celo Archive Mainnet Node in an existing Kubernetes cluster.",source:"@site/docs/launchpad/guides/celo-archive-kubernetes-guide.md",sourceDirName:"launchpad/guides",slug:"/launchpad/guides/celo-archive-kubernetes-guide",permalink:"/launchpad/guides/celo-archive-kubernetes-guide",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/guides/celo-archive-kubernetes-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Avalanche Archive Mainnet Node Guide",permalink:"/launchpad/guides/avalanche-archive-kubernetes"},next:{title:"Goerli Indexer Guide",permalink:"/launchpad/guides/goerli-indexer-guide"}},o={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"If running a Kubernetes cluster using <code>Launchpad</code>",id:"if-running-a-kubernetes-cluster-using-launchpad",level:2},{value:"Deploying with helm in a Kubernetes cluster outside Launchpad",id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celo-archive-mainnet-node-guide"},"Celo Archive Mainnet Node Guide"),(0,r.kt)("p",null,"This guide is intended to be an end to end walk-through of running an Celo Archive Mainnet Node in an existing Kubernetes cluster.\nSync times are reported to be in the range of 4 days on dedicated hardware."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"All the ",(0,r.kt)("a",{parentName:"p",href:"../prerequisites"},"Launchpad Prerequisites")," apply if running a Kubernetes cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"Launchpad"),", so be sure to read them first. This guide can be used with existing Kubernetes clusters as well."),(0,r.kt)("p",null,"For Celo workload you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU: 4 Cores / 8 Threads"),(0,r.kt)("li",{parentName:"ul"},"RAM: 16 GiB"),(0,r.kt)("li",{parentName:"ul"},"Storage: 3 TiB NVMe SSD")),(0,r.kt)("h2",{id:"if-running-a-kubernetes-cluster-using-launchpad"},"If running a Kubernetes cluster using ",(0,r.kt)("inlineCode",{parentName:"h2"},"Launchpad")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check that the cluster is running and healthy - review ",(0,r.kt)("a",{parentName:"li",href:"../quick-start/"},"Quick Start")," guide for more info."),(0,r.kt)("li",{parentName:"ol"},"In your private infra repo pull in latest ",(0,r.kt)("inlineCode",{parentName:"li"},"launchpad-starter")," changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"task launchpad:pull-upstream-starter\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Pull in ",(0,r.kt)("inlineCode",{parentName:"li"},"latest-core")," changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"task launchpad:update-core\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check default values- double-check values and update as needed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/arbitrum-mainnet/celo-archive-trace-mainnet-0.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/helmfiles/release-names/arbitrum-mainnet/celo-archive-trace-mainnet-0.yaml")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy celo-mainnet namespace"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"task releases:apply celo-mainnet\n")),(0,r.kt)("h2",{id:"deploying-with-helm-in-a-kubernetes-cluster-outside-launchpad"},"Deploying with helm in a Kubernetes cluster outside Launchpad"),(0,r.kt)("p",null,"You can find blockchain related helm packages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphops/helm-charts/tree/main/charts"},"here")),(0,r.kt)("p",null,"Create a values ",(0,r.kt)("inlineCode",{parentName:"p"},"celo-mainnet.yaml")," file with the following contents or similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"celo:\n  extraArgs:\n    - --verbosity 3\n    - --syncmode full\n    - --gcmode archive\n    - --txlookuplimit=0\n    - --cache.preimages\n    - --http.corsdomain=*\n    - --ws # enable ws\n    - --http.api=eth,net,web3,debug,admin,personal\n")),(0,r.kt)("p",null,"Deploy helm-chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add graphops http://graphops.github.io/helm-charts\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --dry-run celo graphops/celo:latest --namespace celo-mainnet --values celo-mainnet.yaml\n")))}d.isMDXComponent=!0}}]);