"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8348],{3833:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(4848),t=r(8453);const i={sidebar_position:2},a="Prerequisites",o={id:"launchpad/prerequisites",title:"Prerequisites",description:"You will need some things to use Launchpad for your infrastructure:",source:"@site/docs/launchpad/prerequisites.md",sourceDirName:"launchpad",slug:"/launchpad/prerequisites",permalink:"/launchpad/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/prerequisites.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"launchpadSidebar",previous:{title:"Modularity",permalink:"/launchpad/modularity"},next:{title:"Quick Start",permalink:"/launchpad/quick-start"}},l={},c=[{value:"A basic understanding of infrastructure",id:"a-basic-understanding-of-infrastructure",level:2},{value:"A basic, functional knowledge of git",id:"a-basic-functional-knowledge-of-git",level:2},{value:"A basic understanding of operating a Graph Protocol Indexer",id:"a-basic-understanding-of-operating-a-graph-protocol-indexer",level:2},{value:"A client machine",id:"a-client-machine",level:2},{value:"Knowledge of Kubernetes and a Kubernetes cluster",id:"knowledge-of-kubernetes-and-a-kubernetes-cluster",level:2},{value:"Operational knowledge of Helm",id:"operational-knowledge-of-helm",level:2},{value:"Willingness to learn and contribute",id:"willingness-to-learn-and-contribute",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"prerequisites",children:"Prerequisites"})}),"\n",(0,s.jsx)(n.p,{children:"You will need some things to use Launchpad for your infrastructure:"}),"\n",(0,s.jsx)(n.h2,{id:"a-basic-understanding-of-infrastructure",children:"A basic understanding of infrastructure"}),"\n",(0,s.jsx)(n.p,{children:"We expect that you are familiar with infrastructure basics, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux"}),"\n",(0,s.jsx)(n.li,{children:"Networking, DNS"}),"\n",(0,s.jsx)(n.li,{children:"SSH and authentication"}),"\n",(0,s.jsx)(n.li,{children:"Storage fundamentals"}),"\n",(0,s.jsx)(n.li,{children:"Basic system administration"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"a-basic-functional-knowledge-of-git",children:"A basic, functional knowledge of git"}),"\n",(0,s.jsxs)(n.p,{children:["The Launchpad stack advocates for declarative, version controlled infrastructure. This means the declarative state of your infrastructure will be committed into a private ",(0,s.jsx)(n.a,{href:"https://github.com/",children:"git"})," repo as it evolves over time. You will need to be able to perform basic git workflows like:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Staging files (e.g. ",(0,s.jsx)(n.code,{children:"git add ."}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Committing changes and pushing code (e.g. ",(0,s.jsx)(n.code,{children:"git push origin main"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Viewing the repo history (e.g. ",(0,s.jsx)(n.code,{children:"git show"}),", ",(0,s.jsx)(n.code,{children:"git log"}),", or using GitHub)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"More advanced users will benefit from understanding how to pull and rebase, but this is not a requirement."}),"\n",(0,s.jsx)(n.h2,{id:"a-basic-understanding-of-operating-a-graph-protocol-indexer",children:"A basic understanding of operating a Graph Protocol Indexer"}),"\n",(0,s.jsx)(n.p,{children:"We will assume a basic understanding of the Graph Protocol Indexing stack, as well as some of the operational requirements of Indexing."}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"other-resources",children:"Other Resources"})," for links to helpful resources."]}),"\n",(0,s.jsx)(n.h2,{id:"a-client-machine",children:"A client machine"}),"\n",(0,s.jsxs)(n.p,{children:["Launchpad comes with a ",(0,s.jsx)(n.a,{href:"client-side-tooling",children:"series of tools"})," that should run on a client device. This is most likely your local machine. These tools should not run on your servers. Instead, they help you instruct your cluster of servers to do what you want."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, Launchpad comes with support for Linux and MacOS clients. Windows is currently not supported, though you may be able to use Launchpad using the ",(0,s.jsx)(n.em,{children:"Windows Subsystem for Linux"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"knowledge-of-kubernetes-and-a-kubernetes-cluster",children:"Knowledge of Kubernetes and a Kubernetes cluster"}),"\n",(0,s.jsxs)(n.p,{children:["The Launchpad project requires a certain level of familiarity with ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," and its intricacies. The extent of this Kubernetes expertise depends on your choice of cluster. Opting for a managed cluster from a leading Cloud Provider requires less intensive Kubernetes knowledge, as operating such a cluster is more straightforward, necessitating only a fundamental grasp of different Kubernetes resource types."]}),"\n",(0,s.jsx)(n.p,{children:"However, it's essential to note that managed clusters can be very costly when running blockchains. In contrast, selecting a self-managed cluster demands a deeper understanding, encompassing all components necessary for cluster provisioning and management. Regardless of your choice, you'll need to create a Kubernetes cluster."}),"\n",(0,s.jsxs)(n.p,{children:["For a detailed exploration of setting up a Kubernetes cluster yourself, please refer to our ",(0,s.jsx)(n.a,{href:"/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",children:"Kubernetes guide"}),". If you choose to set up a self-managed cluster, you might consider using Fedora CoreOS as one of the possible options, detailed in our ",(0,s.jsx)(n.a,{href:"/launchpad/advanced-tutorials/install-fcos",children:"Fedora CoreOS guide"}),", among other methods."]}),"\n",(0,s.jsx)(n.h2,{id:"operational-knowledge-of-helm",children:"Operational knowledge of Helm"}),"\n",(0,s.jsxs)(n.p,{children:["Launchpad operates in tandem with ",(0,s.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," and ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm Charts"}),". However, no need to worry if you're new to Helm or chart authoring \u2013 we've got you covered. Launchpad leverages a combination of widely used and publicly available charts (ie. ",(0,s.jsx)(n.a,{href:"https://github.com/grafana/helm-charts",children:"grafana/helm-charts"}),"), along with our in-house helm-charts, ",(0,s.jsx)(n.a,{href:"https://github.com/graphops/launchpad-charts",children:"launchpad-charts"}),". This ensures a seamless experience without the need for in-depth Helm expertise."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, we abstracted some of the Helm usage by using tasks ( ie. ",(0,s.jsx)(n.code,{children:"task releases:apply"})," or ",(0,s.jsx)(n.code,{children:"task releases:delete"}),") as outlined in our ",(0,s.jsx)(n.a,{href:"/launchpad/quick-start",children:"Quick Start"})," guide. As such, all you need is a basic understanding of Helm's core functions and ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/using_helm/",children:"release management"}),". Writing helm-charts is not a prerequisite for most users, as we provide the necessary charts to streamline your experience."]}),"\n",(0,s.jsx)(n.h2,{id:"willingness-to-learn-and-contribute",children:"Willingness to learn and contribute"}),"\n",(0,s.jsx)(n.p,{children:"Launchpad is a collaborative effort to create the best UX for Graph Protocol Indexers on Kubernetes. The Launchpad stack provides an opinionated set of defaults and recipes for success, but to be an advanced operator you will need to learn Kubernetes and many of the other tools in the stack. With Launchpad, you have guard rails to guide you in your journey towards mastering operating your Indexer on Kubernetes."}),"\n",(0,s.jsx)(n.p,{children:"Please contribute back when you are able!"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(6540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);