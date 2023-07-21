"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Introduction",s={unversionedId:"graphcast/sdk/intro",id:"graphcast/sdk/intro",title:"Introduction",description:"Graphcast SDK is a decentralized, distributed peer-to-peer (P2P) communication tool that enables users across the network to exchange information in real-time. It is designed to overcome the high cost of signaling or coordination between blockchain participants by enabling off-chain communication (gossip/cheap talk). This is particularly useful for applications where real-time communication is essential but the cost of on-chain transactions is prohibitive.",source:"@site/docs/graphcast/sdk/intro.md",sourceDirName:"graphcast/sdk",slug:"/graphcast/sdk/intro",permalink:"/graphcast/sdk/intro",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/sdk/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"gnSidebar",previous:{title:"Design Principles",permalink:"/graphcast/design-principles"},next:{title:"Radio Development",permalink:"/graphcast/sdk/radio-dev"}},c={},l=[{value:"How it Works",id:"how-it-works",level:2},{value:"Network Configurations",id:"network-configurations",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Upgrading and Testing",id:"upgrading-and-testing",level:2},{value:"Resources",id:"resources",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Graphcast SDK is a decentralized, distributed peer-to-peer (P2P) communication tool that enables users across the network to exchange information in real-time. It is designed to overcome the high cost of signaling or coordination between blockchain participants by enabling off-chain communication (gossip/cheap talk). This is particularly useful for applications where real-time communication is essential but the cost of on-chain transactions is prohibitive."),(0,i.kt)("h2",{id:"how-it-works"},"How it Works"),(0,i.kt)("p",null,"The SDK serves as a base layer for Radio developers, providing essential components to build their applications without starting from scratch. These components include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Connection to the Graphcast network"),": Forms a communication network and provides an interface to subscribe to receive messages on specific topics and to broadcast messages onto the network. Allows for real-time communication between different nodes in the network.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Interactions with Graph entities"),": This allows for necessary interactions with Graph node, Graph network subgraph, Graphcast registry."))),(0,i.kt)("p",null,"An example of a ping-pong Radio is provided in the examples folder, which leverages the base layer and defines the specific logic around constructing and sending messages, as well as receiving and handling them. This example can serve as a starting point for developers looking to build their own Radios."),(0,i.kt)("h2",{id:"network-configurations"},"Network Configurations"),(0,i.kt)("p",null,"A Graphcast radio can interact with many parts of The Graph network modularly. The network configurations actively supported by the team include ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," (Ethereum mainnet and Arbitrum One) and ",(0,i.kt)("inlineCode",{parentName:"p"},"testnet")," (Goerli and Arbitrum Goerli). You are free to define and use your own Graphcast Network and Graphcast Registry. This flexibility allows for a wide range of applications and use cases."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Contributions are welcome and appreciated! Please refer to the Contributor Guide, Code Of Conduct, and Security Notes for this repository. These documents provide guidelines for how to contribute to the project in a way that is beneficial to all parties involved."),(0,i.kt)("h2",{id:"upgrading-and-testing"},"Upgrading and Testing"),(0,i.kt)("p",null,"Updates to the SDK will be merged into the main branch once their release PR has been approved. For testing, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"nextest")," as your test runner. You can run the suite using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo nextest run"),". Regular testing is crucial to ensure the stability and reliability of the software."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@graphops/graphcast"},"Crates package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/graphops/graphcast-sdk"},"GitHub Repository"))))}d.isMDXComponent=!0}}]);