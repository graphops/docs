"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8223],{7641:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=s(4848),t=s(8453);const r={sidebar_position:3},i="Supported Namespaces",c={id:"launchpad/supported-namespaces",title:"Supported Namespaces",description:"Launchpad includes a number of prepackaged Kubernetes namespaces (see Launchpad Namespaces repo), which in turn reference Helm Charts in the Launchpad Charts repository, as well as third-party Charts. GraphOps maintains support for these namespaces, meaning that we:",source:"@site/docs/launchpad/supported-namespaces.md",sourceDirName:"launchpad",slug:"/launchpad/supported-namespaces",permalink:"/launchpad/supported-namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/supported-namespaces.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"launchpadSidebar",previous:{title:"Release Channels",permalink:"/launchpad/release-channels"},next:{title:"Design Principles",permalink:"/launchpad/design-principles"}},o={},p=[{value:"Using custom releases and deploying sets of applications not defined in <code>launchpad-namespaces</code>",id:"using-custom-releases-and-deploying-sets-of-applications-not-defined-in-launchpad-namespaces",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"supported-namespaces",children:"Supported Namespaces"})}),"\n",(0,n.jsxs)(a.p,{children:["Launchpad includes a number of prepackaged Kubernetes namespaces (see ",(0,n.jsx)(a.a,{href:"https://github.com/graphops/launchpad-namespaces",children:"Launchpad Namespaces repo"}),"), which in turn reference Helm Charts in the ",(0,n.jsx)(a.a,{href:"https://github.com/graphops/launchpad-charts",children:"Launchpad Charts"})," repository, as well as third-party Charts. GraphOps maintains support for these namespaces, meaning that we:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Track upstream releases and test them"}),"\n",(0,n.jsxs)(a.li,{children:["Move these releases through ",(0,n.jsx)(a.code,{children:"canary"})," and ",(0,n.jsx)(a.code,{children:"stable"})," release channels for both ",(0,n.jsx)(a.code,{children:"launchpad-charts"})," and ",(0,n.jsx)(a.code,{children:"launchpad-namespaces"})]}),"\n",(0,n.jsx)(a.li,{children:"Evolve the Launchpad stack to meet the evolving operational needs of these applications"}),"\n",(0,n.jsx)(a.li,{children:"Offer support for operators experiencing challenges with these namespaces"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["This strategy is rooted in GraphOps' active usage of these namespaces and the applications within them. For more details on how a new application makes it from a ",(0,n.jsx)(a.code,{children:"canary"})," release all the way to a ",(0,n.jsx)(a.code,{children:"stable"})," launchpad-namespace please check out our ",(0,n.jsx)(a.a,{href:"/launchpad/release-channels",children:(0,n.jsx)(a.code,{children:"release-channels"})})," guide"]}),"\n",(0,n.jsx)(a.p,{children:"We welcome third-party contributors to add support for additional namespaces and applications."}),"\n",(0,n.jsxs)(a.h2,{id:"using-custom-releases-and-deploying-sets-of-applications-not-defined-in-launchpad-namespaces",children:["Using custom releases and deploying sets of applications not defined in ",(0,n.jsx)(a.code,{children:"launchpad-namespaces"})]}),"\n",(0,n.jsxs)(a.p,{children:["Launchpad's architecture is designed to be highly flexible and does not constrain you to deploying ",(0,n.jsx)(a.code,{children:"launchpad-namespaces"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To incorporate releases not covered within a namespace, you can utilize the ",(0,n.jsx)(a.code,{children:"helmfile.yaml"})," that you generated during the ",(0,n.jsx)(a.a,{href:"/launchpad/quick-start#customize-your-helmfileyaml",children:"Quick Start"})," process."]}),"\n",(0,n.jsxs)(a.p,{children:["For instance, if you required the implementation of ",(0,n.jsx)(a.a,{href:"https://github.com/strimzi/strimzi-kafka-operator",children:(0,n.jsx)(a.code,{children:"kafka-operator"})})," for specific workloads, you would add the following code to the ",(0,n.jsx)(a.code,{children:"repositories"})," and ",(0,n.jsx)(a.code,{children:"releases"})," sections:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:"repositories:\n  - name: strimzi\n    url: https://strimzi.io/charts/\n\nreleases:\n  - name: strimzi\n    namespace: kafka\n    createNamespace: true\n    chart: strimzi/strimzi-kafka-operator\n    missingFileHandler: Warn \n    values:\n    - watchAnyNamespace: true\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you're considering the integration of a blockchain that currently falls outside the scope of Launchpad's Supported Namespaces, it's worth noting that including a new release in your ",(0,n.jsx)(a.code,{children:"helmfile.yaml"})," might require an extra step of creating a custom Helm Chart. While certain publicly available charts (ie. ",(0,n.jsx)(a.a,{href:"https://artifacthub.io/packages/helm/stakewise/teku",children:"Teku"}),", ",(0,n.jsx)(a.a,{href:"https://artifacthub.io/packages/helm/stakewise/lighthouse",children:"Lighthouse"}),") might be regularly maintained by external contributors, you might encounter cases where other charts are not readily supported."]})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>c});var n=s(6540);const t={},r=n.createContext(t);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);