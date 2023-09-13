"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Prerequisites",s={unversionedId:"launchpad/prerequisites",id:"launchpad/prerequisites",title:"Prerequisites",description:"You will need some things to use Launchpad for your infrastructure:",source:"@site/docs/launchpad/prerequisites.md",sourceDirName:"launchpad",slug:"/launchpad/prerequisites",permalink:"/launchpad/prerequisites",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/prerequisites.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"launchpadSidebar",previous:{title:"Modularity",permalink:"/launchpad/modularity"},next:{title:"Quick Start",permalink:"/launchpad/quick-start"}},l={},u=[{value:"A basic understanding of infrastructure",id:"a-basic-understanding-of-infrastructure",level:2},{value:"A basic, functional knowledge of git",id:"a-basic-functional-knowledge-of-git",level:2},{value:"A basic understanding of operating a Graph Protocol Indexer",id:"a-basic-understanding-of-operating-a-graph-protocol-indexer",level:2},{value:"A client machine",id:"a-client-machine",level:2},{value:"Knowledge of Kubernetes and a Kubernetes cluster",id:"knowledge-of-kubernetes-and-a-kubernetes-cluster",level:2},{value:"Operational knowledge of Helm",id:"operational-knowledge-of-helm",level:2},{value:"Willingness to learn and contribute",id:"willingness-to-learn-and-contribute",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need some things to use Launchpad for your infrastructure:"),(0,a.kt)("h2",{id:"a-basic-understanding-of-infrastructure"},"A basic understanding of infrastructure"),(0,a.kt)("p",null,"We expect that you are familiar with infrastructure basics, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux"),(0,a.kt)("li",{parentName:"ul"},"Networking, DNS"),(0,a.kt)("li",{parentName:"ul"},"SSH and authentication"),(0,a.kt)("li",{parentName:"ul"},"Storage fundamentals"),(0,a.kt)("li",{parentName:"ul"},"Basic system administration")),(0,a.kt)("h2",{id:"a-basic-functional-knowledge-of-git"},"A basic, functional knowledge of git"),(0,a.kt)("p",null,"The Launchpad stack advocates for declarative, version controlled infrastructure. This means the declarative state of your infrastructure will be committed into a private ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"git")," repo as it evolves over time. You will need to be able to perform basic git workflows like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Staging files (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"git add ."),")"),(0,a.kt)("li",{parentName:"ul"},"Committing changes and pushing code (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"git push origin main"),")"),(0,a.kt)("li",{parentName:"ul"},"Viewing the repo history (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"git show"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"git log"),", or using GitHub)")),(0,a.kt)("p",null,"More advanced users will benefit from understanding how to pull and rebase, but this is not a requirement."),(0,a.kt)("h2",{id:"a-basic-understanding-of-operating-a-graph-protocol-indexer"},"A basic understanding of operating a Graph Protocol Indexer"),(0,a.kt)("p",null,"We will assume a basic understanding of the Graph Protocol Indexing stack, as well as some of the operational requirements of Indexing."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"other-resources"},"Other Resources")," for links to helpful resources."),(0,a.kt)("h2",{id:"a-client-machine"},"A client machine"),(0,a.kt)("p",null,"Launchpad comes with a ",(0,a.kt)("a",{parentName:"p",href:"client-side-tooling"},"series of tools")," that should run on a client device. This is most likely your local machine. These tools should not run on your servers. Instead, they help you instruct your cluster of servers to do what you want."),(0,a.kt)("p",null,"Currently, Launchpad comes with support for Linux and MacOS clients. Windows is currently not supported, though you may be able to use Launchpad using the ",(0,a.kt)("em",{parentName:"p"},"Windows Subsystem for Linux"),"."),(0,a.kt)("h2",{id:"knowledge-of-kubernetes-and-a-kubernetes-cluster"},"Knowledge of Kubernetes and a Kubernetes cluster"),(0,a.kt)("p",null,"The Launchpad project requires a certain level of familiarity with ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," and its intricacies. The extent of this Kubernetes expertise depends on your choice of cluster. Opting for a managed cluster from a leading Cloud Provider requires less intensive Kubernetes knowledge, as operating such a cluster is more straightforward, necessitating only a fundamental grasp of different Kubernetes resource types."),(0,a.kt)("p",null,"However, it's essential to note that managed clusters can be very costly when running blockchains. In contrast, selecting a self-managed cluster demands a deeper understanding, encompassing all components necessary for cluster provisioning and management - for more details on this please checkout our ",(0,a.kt)("a",{parentName:"p",href:"/launchpad/guides/kubernetes-guide"},"Kubernetes guide"),". Regardless of your choice, you'll need to create a Kubernetes cluster. This can involve setting up a self-managed cluster, as outlined in our ",(0,a.kt)("a",{parentName:"p",href:"/launchpad/guides/install-fcos"},"Fedora CoreOS guide"),", or opting for a managed cluster provided by a major Cloud Provider like AWS or GCP."),(0,a.kt)("h2",{id:"operational-knowledge-of-helm"},"Operational knowledge of Helm"),(0,a.kt)("p",null,"Launchpad operates in tandem with ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," and ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"Helm Charts"),". However, no need to worry if you're new to Helm or chart authoring \u2013 we've got you covered. Launchpad leverages a combination of widely used and publicly available charts (ie. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grafana/helm-charts"},"grafana/helm-charts"),"), along with our in-house helm-charts, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphops/launchpad-charts"},"launchpad-charts"),". This ensures a seamless experience without the need for in-depth Helm expertise."),(0,a.kt)("p",null,"In addition, we abstracted some of the Helm usage by using tasks ( ie. ",(0,a.kt)("inlineCode",{parentName:"p"},"task releases:apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"task releases:delete"),") as outlined in our ",(0,a.kt)("a",{parentName:"p",href:"/launchpad/quick-start"},"Quick Start")," guide. As such, all you need is a basic understanding of Helm's core functions and ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/"},"release management"),". Writing helm-charts is not a prerequisite for most users, as we provide the necessary charts to streamline your experience."),(0,a.kt)("h2",{id:"willingness-to-learn-and-contribute"},"Willingness to learn and contribute"),(0,a.kt)("p",null,"Launchpad is a collaborative effort to create the best UX for Graph Protocol Indexers on Kubernetes. The Launchpad stack provides an opinionated set of defaults and recipes for success, but to be an advanced operator you will need to learn Kubernetes and many of the other tools in the stack. With Launchpad, you have guard rails to guide you in your journey towards mastering operating your Indexer on Kubernetes."),(0,a.kt)("p",null,"Please contribute back when you are able!"))}p.isMDXComponent=!0}}]);