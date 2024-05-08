"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:5},i="Client Side Tooling",r={unversionedId:"launchpad/client-side-tooling",id:"launchpad/client-side-tooling",title:"Client Side Tooling",description:"Launchpad comes with an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow to manage your cluster software stack.",source:"@site/docs/launchpad/client-side-tooling.md",sourceDirName:"launchpad",slug:"/launchpad/client-side-tooling",permalink:"/launchpad/client-side-tooling",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/client-side-tooling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"launchpadSidebar",previous:{title:"Design Principles",permalink:"/launchpad/design-principles"},next:{title:"Frequently Asked Questions (FAQs)",permalink:"/launchpad/faq"}},s={},c=[{value:"Installing on your local machine",id:"installing-on-your-local-machine",level:2},{value:"Understanding the tools in the client-side stack",id:"understanding-the-tools-in-the-client-side-stack",level:2},{value:"Taskfile",id:"taskfile",level:3},{value:"Helm",id:"helm",level:3},{value:"Helmfile",id:"helmfile",level:3},{value:"Kustomize",id:"kustomize",level:3},{value:"Kubectl",id:"kubectl",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-side-tooling"},"Client Side Tooling"),(0,o.kt)("p",null,"Launchpad comes with an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow to manage your cluster software stack."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Client Side Stack",src:n(2562).Z,width:"960",height:"540"})),(0,o.kt)("p",null,"These tools do not run on your servers, but on your local machine. They form the command & control center that you use to send instructions to your cluster."),(0,o.kt)("h2",{id:"installing-on-your-local-machine"},"Installing on your local machine"),(0,o.kt)("p",null,"Launchpad comes with a task to install local dependencies on your machine. See the ",(0,o.kt)("a",{parentName:"p",href:"quick-start"},"Quick Start Guide")," for more information."),(0,o.kt)("h2",{id:"understanding-the-tools-in-the-client-side-stack"},"Understanding the tools in the client-side stack"),(0,o.kt)("h3",{id:"taskfile"},"Taskfile"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-task/task"},"Taskfile")," is a simple task runner for automation and devops tasks. It allows you to define tasks in a single file, ",(0,o.kt)("inlineCode",{parentName:"p"},"Taskfile.yml"),", and run them in a consistent, cross-platform way. It can be used to automate anything from building and deploying applications to running tests and linting code. Taskfile is written in Go and is easy to install and use."),(0,o.kt)("p",null,"Launchpad uses ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," as the primary command line interface. You can also define your own tasks!"),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a package manager for Kubernetes that helps you manage and automate the deployment of your applications. It allows you to define, install, and upgrade Kubernetes resources in a consistent, versioned way. Helm uses a simple templating syntax to allow you to parameterize your deployments and create reusable chart templates. Helm also provides a variety of pre-built charts for popular software."),(0,o.kt)("p",null,"Launchpad uses Helm to deploy packages (Helm Charts) into your cluster."),(0,o.kt)("h3",{id:"helmfile"},"Helmfile"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/roboll/helmfile"},"Helmfile")," is a tool for managing multiple Helm charts together using a single file. It allows you to define a set of Helm releases together in a file, and then use a single command to install, upgrade, or delete all of the releases at once. This makes it easy to manage complex, multi-chart applications. Helmfile is written in Go and is easy to install and use."),(0,o.kt)("p",null,"Launchpad uses Helmfile to declare and manage sets of related Helm releases."),(0,o.kt)("h3",{id:"kustomize"},"Kustomize"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"Kustomize")," lets you customize raw, template-free YAML files for multiple purposes, leaving the original YAML untouched and usable as is. It is used by helmfile for some of its features."),(0,o.kt)("h3",{id:"kubectl"},"Kubectl"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubectl"},"Kubectl")," is the command-line interface for Kubernetes that allows you to deploy, scale, and manage applications on a Kubernetes cluster. It provides a simple, easy-to-use command-line interface for performing common Kubernetes tasks such as creating and managing pods, services, and deployments."),(0,o.kt)("p",null,"Launchpad uses Kubectl to interact with your Kubernetes cluster."))}d.isMDXComponent=!0},2562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launchpad-client-side-stack-ad8f19cbdeace34b0e4280136597a180.svg"}}]);