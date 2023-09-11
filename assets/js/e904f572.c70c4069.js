"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:20},o="Server Side Stack",i={unversionedId:"launchpad/server-side-stack",id:"launchpad/server-side-stack",title:"Server Side Stack",description:"Server Side Stack",source:"@site/docs/launchpad/server-side-stack.md",sourceDirName:"launchpad",slug:"/launchpad/server-side-stack",permalink:"/launchpad/server-side-stack",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/server-side-stack.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"launchpadSidebar",previous:{title:"Client Side Tooling",permalink:"/launchpad/client-side-tooling"},next:{title:"Frequently Asked Questions",permalink:"/launchpad/faq"}},c={},u=[{value:"Your Kubernetes Cluster",id:"your-kubernetes-cluster",level:2},{value:"Launchpad Namespaces",id:"launchpad-namespaces",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-side-stack"},"Server Side Stack"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Side Stack",src:r(3147).Z,width:"960",height:"540"})),(0,a.kt)("h2",{id:"your-kubernetes-cluster"},"Your Kubernetes Cluster"),(0,a.kt)("p",null,"Launchpad V2 requires users to bring their own Kubernetes cluster. This approach ensures that users are not tied to a specific Kubernetes distribution or mode of installation."),(0,a.kt)("p",null,"For users seeking more detailed guidance with regards to a Kubernetes setup, we have created guides that outline the steps one should consider when installing and deploying ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/"},"Fedora CoreOS (FCOS)")," - an auto-updating, minimal, container-focused OS, designed for clusters or standalone use and optimized for Kubernetes. These guides are designed to assist you in getting started with the process of setting up and guide you through the management of your Kubernetes cluster. For guidance on Fedora CoreOS setup and considerations, skip to ",(0,a.kt)("a",{parentName:"p",href:"guides/install-fcos"},"Install FCOS Guide"),"."),(0,a.kt)("p",null,"Once your Kubernetes cluster is ready, head over to ",(0,a.kt)("a",{parentName:"p",href:"quick-start"},"Quick Start"),"."),(0,a.kt)("h2",{id:"launchpad-namespaces"},"Launchpad Namespaces"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Side Stack",src:r(3147).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-namespaces"},"Launchpad Namespaces repository")," for details about which namespaces are available, as well as which Helm Releases are specified within each one."))}p.isMDXComponent=!0},3147:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/launchpad-server-side-stack-b78ee50ca435dae3e4cd5673c8e2bacf.svg"}}]);