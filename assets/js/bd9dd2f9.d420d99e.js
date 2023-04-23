"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"launchpad/intro",id:"launchpad/intro",title:"Introduction",description:"Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty, regardless of host provider. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.",source:"@site/docs/launchpad/intro.md",sourceDirName:"launchpad",slug:"/launchpad/intro",permalink:"/launchpad/intro",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"launchpadSidebar",next:{title:"Prerequisites",permalink:"/launchpad/prerequisites"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty, regardless of host provider. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure."),(0,n.kt)("p",null,"There are two major components to be aware of:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Starter (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter"},(0,n.kt)("inlineCode",{parentName:"a"},"graphops/launchpad-starter")),"): A starting point for every new Launchpad deployment. It uses a submodule to import all templated definitions from Core."),(0,n.kt)("li",{parentName:"ol"},"Core (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-core"},(0,n.kt)("inlineCode",{parentName:"a"},"graphops/launchpad-core")),"): Templated tasks, release definitions, scripts and other components")),(0,n.kt)("p",null,"Core also references Helm Charts that are hosted in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/helm-charts"},(0,n.kt)("inlineCode",{parentName:"a"},"graphops/helm-charts"))," repo."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Actively maintained by ",(0,n.kt)("a",{parentName:"li",href:"https://graphops.xyz"},"GraphOps")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/helm-charts/graphs/contributors"},"and contributors")),(0,n.kt)("li",{parentName:"ul"},"Deploy Kubernetes (",(0,n.kt)("a",{parentName:"li",href:"https://k0sproject.io/"},"k0s"),") onto any existing set of SSH-capable hosts you have"),(0,n.kt)("li",{parentName:"ul"},"Predefined release definitions for monitoring, logging and other cluster functions, as well as for the complete Graph Indexer Stack"),(0,n.kt)("li",{parentName:"ul"},"An opinionated starter (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter"},(0,n.kt)("inlineCode",{parentName:"a"},"launchpad-starter")),") to define and manage your stack in a declarative, version controlled manner"),(0,n.kt)("li",{parentName:"ul"},"A workflow to seamlessly inherit new templated release updates, while still supporting a enormous degree of deployment flexibility"),(0,n.kt)("li",{parentName:"ul"},"Utilises ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/helm-charts"},(0,n.kt)("inlineCode",{parentName:"a"},"graphops/helm-charts")),", a set of templated kubernetes resources that are packaged into charts which can then be customized and deployed into Kubernetes clusters. Example applications ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/helm-charts/tree/main/charts/nethermind"},(0,n.kt)("inlineCode",{parentName:"a"},"nethermind")),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/helm-charts/tree/main/charts/erigon"},(0,n.kt)("inlineCode",{parentName:"a"},"erigon")),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphops/helm-charts/tree/main/charts/graph-node"},(0,n.kt)("inlineCode",{parentName:"a"},"graph-node")),".")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read the ",(0,n.kt)("a",{parentName:"li",href:"prerequisites"},"Prerequisites")," section to understand what you need to bring"),(0,n.kt)("li",{parentName:"ul"},"Read the ",(0,n.kt)("a",{parentName:"li",href:"quick-start"},"Quick Start guide")," to get up and running"),(0,n.kt)("li",{parentName:"ul"},"Look at the repositories above on GitHub to understand how they work"),(0,n.kt)("li",{parentName:"ul"},"Review ",(0,n.kt)("strong",{parentName:"li"},"Advanced Topics")," to understand more advanced behaviour")))}h.isMDXComponent=!0}}]);