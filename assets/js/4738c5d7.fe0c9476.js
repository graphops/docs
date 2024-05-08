"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6013],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3116:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Release Channels",s={unversionedId:"launchpad/release-channels",id:"launchpad/release-channels",title:"Release Channels",description:"Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies.",source:"@site/docs/launchpad/release-channels.md",sourceDirName:"launchpad",slug:"/launchpad/release-channels",permalink:"/launchpad/release-channels",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/release-channels.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"launchpadSidebar",previous:{title:"Quick Start",permalink:"/launchpad/quick-start"},next:{title:"Supported Namespaces",permalink:"/launchpad/supported-namespaces"}},l={},p=[],c={toc:p},u="wrapper";function h(e){let{components:a,...i}=e;return(0,r.kt)(u,(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-channels"},"Release Channels"),(0,r.kt)("p",null,"Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies. "),(0,r.kt)("p",null,"For a reminder of the various components within Launchpad and their intricate connections, we recommend revisiting our ",(0,r.kt)("a",{parentName:"p",href:"/launchpad/intro"},"Intro"),"."),(0,r.kt)("p",null,"This guide offers a comprehensive walkthrough, outlining the steps, automated and manual, required to introduce a new version release of an application, ie. Erigon, into the ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-charts")," repository as a ",(0,r.kt)("strong",{parentName:"p"},"canary")," release and ultimately transitioning it to a ",(0,r.kt)("strong",{parentName:"p"},"stable")," state within its designated ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-namespace"),", such as Ethereum. "),(0,r.kt)("p",null,"The diagram below provides a visual representation illustrating the interdependence and impact of various components and workflows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Release Channels Flow",src:n(6479).Z,width:"960",height:"540"})),(0,r.kt)("h1",{id:"from-new-version-to-launchpad-namespaces-stable"},"From new version to ",(0,r.kt)("inlineCode",{parentName:"h1"},"launchpad-namespaces")," stable"),(0,r.kt)("p",null,"Below you can find a more comprehensive breakdown of the process, divided into automated workflows within ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-charts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-namespaces"),", as well as manual operator steps. This process guides the transition of a new application version from the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-charts")," canary release to its eventual stability within the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"launchpad-namespaces"),". For this walkthrough we will use Erigon as an example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"launchpad-charts")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On each run, bot looks-up ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon/tags"},"Erigon tags")," and upon finding a new version, opens a PR into ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-charts/pull/133"},(0,r.kt)("inlineCode",{parentName:"a"},"launchpad-charts/charts/erigon")," ")),(0,r.kt)("li",{parentName:"ul"},"The new PR triggers a workflow that publishes a new ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-charts/releases/tag/erigon-0.8.1-canary.1"},(0,r.kt)("inlineCode",{parentName:"a"},"pre-release"))," into the repo."),(0,r.kt)("li",{parentName:"ul"},"Another workflow runs and adds the newly released ",(0,r.kt)("inlineCode",{parentName:"li"},"canary")," chart to the ",(0,r.kt)("inlineCode",{parentName:"li"},"canary")," Helm repo index")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"launchpad-namespaces")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On each run, bot checks for new chart releases and upon finding one, pushes an update branch and opens a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphops/launchpad-namespaces/pull/38"},"new PR to namespaces")),(0,r.kt)("li",{parentName:"ul"},"Bot runs again, auto-merges the PR and creates a tag"),(0,r.kt)("li",{parentName:"ul"},"Workflow runs, updates semver tags")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"operator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tests the new ",(0,r.kt)("inlineCode",{parentName:"li"},"canary")," chart release to verify it is working properly, if it is adds commit to PR to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")," chart release version. Following the merge of this PR, the new ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")," chart release is automatically issued in draft mode. This step provides the operator with an opportunity to review and manually publish the final release, ensuring precise control and quality assurance in the deployment process."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"task releases:apply -- eth-sepolia")," which should pick changes from latest ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum")," canary tag that would contain new ",(0,r.kt)("inlineCode",{parentName:"li"},"erigon")," canary chart version (after renovate has run and has picked those up, which it does in 15m intervals)."),(0,r.kt)("li",{parentName:"ul"},"If the previous task runs successfully and workloads appear healthy, the operator updates their helmfile reference to ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum-canary/latest")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"eth-mainnet")," namespace and runs ",(0,r.kt)("inlineCode",{parentName:"li"},"task releases:apply -- eth-mainnet"),"."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"task releases:apply -- eth-mainnet")," succeeds and all workloads are healthy, operator  manually tags the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum")," namespace as ",(0,r.kt)("inlineCode",{parentName:"li"},"stable"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Manually tagging a namespace as ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," is an intentional process. Our aim is to ensure that workloads undergo comprehensive testing before being tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," which signals to users readiness for running on ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),".")),(0,r.kt)("p",null,"Alongside the ability to choose between ",(0,r.kt)("inlineCode",{parentName:"p"},"canary")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," releases based on user risk preferences, we've also enabled the capability to manually override a specific chart version during namespace deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml?ref=ethereum-canary/latest\n    selectorsInherited: true\n    values:\n      - helmDefaults:\n          <<: *helmDefaults\n        flavor: "sepolia"\n        erigon:\n          chartVersion: "0.8.1" # to override the chart version the namespace is setup with\n          values:\n            statefulNode:\n              jwt:\n                existingSecret:\n                  name: jwt\n                  key: jwt\n        nimbus:\n          values:\n            nimbus:\n              jwt:\n                existingSecret:\n                  name: jwt\n                  key: jwt\n')),(0,r.kt)("p",null,"Similarly to being able to override ",(0,r.kt)("inlineCode",{parentName:"p"},"chartVersion"),", users have the ability to override ",(0,r.kt)("inlineCode",{parentName:"p"},"chartUrl")," to specify a self-maintained chart, or a chart maintained by a different organisation."))}h.isMDXComponent=!0},6479:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/launchpad-release-channels-a016c97fa21a1eab13467acaeb8b8235.svg"}}]);