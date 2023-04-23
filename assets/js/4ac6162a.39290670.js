"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:90},i="Frequently Asked Questions",s={unversionedId:"launchpad/faq",id:"launchpad/faq",title:"Frequently Asked Questions",description:"Do I need a machine for launchpad-starter?",source:"@site/docs/launchpad/faq.md",sourceDirName:"launchpad",slug:"/launchpad/faq",permalink:"/launchpad/faq",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/faq.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"launchpadSidebar",previous:{title:"Server Side Stack",permalink:"/launchpad/server-side-stack"},next:{title:"Other Resources",permalink:"/launchpad/other-resources"}},l={},p=[{value:"Do I need a machine for launchpad-starter?",id:"do-i-need-a-machine-for-launchpad-starter",level:2},{value:"Can I migrate my existing Indexer into Launchpad?",id:"can-i-migrate-my-existing-indexer-into-launchpad",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h2",{id:"do-i-need-a-machine-for-launchpad-starter"},"Do I need a machine for launchpad-starter?"),(0,r.kt)("p",null,"No! The ",(0,r.kt)("a",{parentName:"p",href:"client-side-tooling"},"Client Side Tooling")," that comes with Launchpad should be run on your local machine. These tools are only used to instruct your cluster of services what to do."),(0,r.kt)("h2",{id:"can-i-migrate-my-existing-indexer-into-launchpad"},"Can I migrate my existing Indexer into Launchpad?"),(0,r.kt)("p",null,"Yes!"),(0,r.kt)("p",null,"When thinking about the stateful data that would be worth migrating it can be split in 3 buckets:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"blockchain node data snapshot")," - to migrate this data fire up ",(0,r.kt)("inlineCode",{parentName:"li"},"launchpad")," from scratch and when you get to deploying the full gnosis namespace you would instead edit the following configuration in your ",(0,r.kt)("inlineCode",{parentName:"li"},"launchpad-starter")," to point at the existing blockchain data. For example to point a ",(0,r.kt)("inlineCode",{parentName:"li"},"nethermind")," deployment to an existing snapshot you would append the below in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/gnosis-mainnet/nethermind-archive-trace-gnosis-mainnet-0.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"<your-private-copy-of-launchpad-starter>/helmfiles/release-names/gnosis-mainnet/nethermind-archive-trace-gnosis-mainnet-0.yaml"))," before deploying the chart")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nethermind:\n  restoreSnapshot:\n    enable: true\n    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz\n    mode: streaming # or multipart depending on chain\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"postgreSQL - ",(0,r.kt)("strong",{parentName:"li"},"subgraph data")," - all data is deterministic and therefore you could lose subgraph data and recreated from scratch - provided that you don't have hundreds of subgraphs synced in which case you'd have to consider the computational load on your database when resyncing from scratch."),(0,r.kt)("li",{parentName:"ol"},"postgreSQL - ",(0,r.kt)("strong",{parentName:"li"},"indexer data"))),(0,r.kt)("p",null,"Both ",(0,r.kt)("strong",{parentName:"p"},"subgraph data")," and ",(0,r.kt)("strong",{parentName:"p"},"indexer data")," can be restored via tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/app-pgdump.html"},(0,r.kt)("inlineCode",{parentName:"a"},"pg_dump"))," to backup current PostgreSQl databases and ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/app-pgrestore.html"},(0,r.kt)("inlineCode",{parentName:"a"},"pg_restore"))," to build your old database into your ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-starter")," instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"graph-mainnet"),"."))}u.isMDXComponent=!0}}]);