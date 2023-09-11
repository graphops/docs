"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,u=p["".concat(d,".").concat(g)]||p[g]||l[g]||o;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="POI Cross-checking",s={unversionedId:"graphcast/radios/subgraph-radio/poi-cross-checking",id:"graphcast/radios/subgraph-radio/poi-cross-checking",title:"POI Cross-checking",description:"An essential aspect of earning indexing rewards as an Indexer is the generation of valid Proof of Indexing hashes (POIs). These POIs provide evidence of the Indexer's possession of correct data. Submitting invalid POIs could lead to a Dispute and possible slashing by the protocol. With Subgraph Radio's POI feature, Indexers gain confidence knowing that their POIs are continually cross-verified against those of other participating Indexers. Should there be a discrepancy in POIs, Subgraph Radio functions as an early warning system, alerting the Indexer within minutes.",source:"@site/docs/graphcast/radios/subgraph-radio/poi-cross-checking.md",sourceDirName:"graphcast/radios/subgraph-radio",slug:"/graphcast/radios/subgraph-radio/poi-cross-checking",permalink:"/graphcast/radios/subgraph-radio/poi-cross-checking",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/subgraph-radio/poi-cross-checking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gnSidebar",previous:{title:"Introduction",permalink:"/graphcast/radios/subgraph-radio/intro"},next:{title:"Subgraph Upgrade Pre-syncing",permalink:"/graphcast/radios/subgraph-radio/subgraph-upgrade-presyncing"}},d={},c=[{value:"Determining which Subgraphs to gossip about",id:"determining-which-subgraphs-to-gossip-about",level:2},{value:"Gathering and comparing normalised POIs",id:"gathering-and-comparing-normalised-pois",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],h={toc:c},p="wrapper";function l(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"poi-cross-checking"},"POI Cross-checking"),(0,r.kt)("p",null,"An essential aspect of earning indexing rewards as an Indexer is the generation of valid Proof of Indexing hashes (POIs). These POIs provide evidence of the Indexer's possession of correct data. Submitting invalid POIs could lead to a ",(0,r.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/network/indexing/#what-are-disputes-and-where-can-i-view-them"},"Dispute")," and possible slashing by the protocol. With Subgraph Radio's POI feature, Indexers gain confidence knowing that their POIs are continually cross-verified against those of other participating Indexers. Should there be a discrepancy in POIs, Subgraph Radio functions as an early warning system, alerting the Indexer within minutes."),(0,r.kt)("p",null,"All POIs generated through Subgraph Radio are public (normalized), meaning they are hashed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0")," Indexer Address and can be compared between Indexers. However, these public POIs are not valid for on-chain reward submission. Subgraph Radio groups and weighs public POIs according to the aggregate stake in GRT attesting to each. The normalized POI with the most substantial aggregate attesting stake is deemed canonical and used for comparisons with your local Indexer POIs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"POI Cross-checking",src:a(1353).Z,width:"960",height:"540"})),(0,r.kt)("h2",{id:"determining-which-subgraphs-to-gossip-about"},"Determining which Subgraphs to gossip about"),(0,r.kt)("p",null,"Subgraph Radio will gossip about different subgraphs depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"COVERAGE")," configuration (see more). By default, the Radio will gossip about all healthy subgraphs, whether they are allocated to or not."),(0,r.kt)("p",null,"Subgraph Radio periodically polls the Graph Node for new blocks on all relevant networks and constructs Graphcast topics on each allocation identified by subgraph deployment IPFS hash. Chainheads for these networks are updated with data from the Graph Node, and the Radio ensures that it is always using the latest chainhead when processing messages."),(0,r.kt)("h2",{id:"gathering-and-comparing-normalised-pois"},"Gathering and comparing normalised POIs"),(0,r.kt)("p",null,"At a given interval, the Radio fetches the normalised POI for each deployment. This interval is defined in blocks different for each network. It then saves those public POIs, and as other Indexers running the Radio start doing the same, messages start propagating through the network. The Radio saves each message and processes them on a given interval."),(0,r.kt)("p",null,"The messages include a nonce (UNIX timestamp), block number, signature (used to derive the sender's on-chain Indexer address) and network. Before saving an entry to the map, the Radio operator verifies through the Graph network subgraph for the sender's on-chain identity and amount of tokens staked, which is used during comparisons later on."),(0,r.kt)("mermaid",{value:"flowchart LR\n    a[Fetch deployment status] --\x3e b[If healthy & synced]\n    b --\x3e|No| eee{End}\n    b --\x3e|Yes| c[If reached trigger block]\n    c --\x3e|No| eee\n    c --\x3e|Yes| d[Fetch POI for deployment]\n    d --\x3e|Broadcast| n(Graphcast\\nNetwork)\n    n --\x3e|Receive remote POI| o[Other Indexers]\n    n --\x3e x{End}"}),(0,r.kt)("p",null,"At another interval, the Radio compares the local public POIs with the collected remote ones. The remote POIs are sorted so that for each subgraph (on each block), the POI that is backed by the most on-chain stake is selected. This means that the combined stake of all Indexers that attested to it is considered, not just the highest staking Indexer. The top POI is then compared with the local POIs for that subgraph at that block to determine consensus."),(0,r.kt)("p",null,"If there is a mismatch and if the Radio operator has set up a Slack, Discord and/or Telegram bot integration, the Radio will send alerts to the designated channels."),(0,r.kt)("p",null,"After a successful comparison, the attestations that have been checked are removed from the store."),(0,r.kt)("mermaid",{value:"flowchart LR\n    q[Fetch deployment status] --\x3e g[Has collection window expired?]\n    g --\x3e|Yes| t[Compute consensus remote POI]\n    g --\x3e|No| p{End}\n    c --\x3e|Aggregate| t\n    a[Receive POI attestations] --\x3e b[Has collection window expired?]\n    b --\x3e|Yes| eee{End}\n    b --\x3e|No| c[Store remote attestation\\nfor deployment]\n    t --\x3e l[Does local POI match remote consensus POI?]\n    l --\x3e|No| i[Send notification]\n    l --\x3e|Yes| d{End}"}),(0,r.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    participant Network Subgraph\n    participant Graph Node\n    participant Subgraph Radio\n    participant Graphcast Network\n    actor Human\n    participant Indexer Management Server\n    loop Track allocated deployments\n        opt\n            Subgraph Radio->>+Network Subgraph: Get latest allocated deployments\n            Network Subgraph->>-Subgraph Radio: Return allocated deployments\n        end\n        loop Monitor allocated deployments and chain heads\n            Subgraph Radio->>+Graph Node: Get indexing statuses for relevant deployments\n            Graph Node->>-Subgraph Radio: Return matching indexing statuses\n            activate Subgraph Radio\n            Subgraph Radio->>Subgraph Radio: Update chain heads\n            deactivate Subgraph Radio\n            loop For each deployment that we are tracking\n                opt If deployment reached trigger block is healthy\n                    Subgraph Radio->>+Graph Node: Fetch POI for deployment\n                    Graph Node->>-Subgraph Radio: Normalized POI\n                    activate Subgraph Radio\n                    Subgraph Radio->>Subgraph Radio: Generate signed POI Attestation\n                    deactivate Subgraph Radio\n                    Subgraph Radio--\x3e>Graphcast Network: Broadcast POI Attestation to Graphcast Network\n                end\n                opt If stored remote attestations and collect message duration passed\n                    activate Subgraph Radio\n                    Subgraph Radio->>Subgraph Radio: Compute consensus remote POI\n                    deactivate Subgraph Radio\n                    opt If local POI mismatches consensus remote POI\n                        Subgraph Radio--\x3e>Human: Send POI divergence warning notification\n                    end\n                end\n                opt If UpgradeIntentMessage is received\n                    Graphcast Network--\x3e>Subgraph Radio: UpgradeIntentMessage\n                    activate Subgraph Radio\n                    Subgraph Radio--\x3e>Human: Send Version Upgrade notification\n                    opt If Indexer Management Server endpoint provided\n                        Subgraph Radio->>Indexer Management Server: Sends offchain sync request for new deployment hash\n                    end\n                    deactivate Subgraph Radio\n                end\n            end\n        end\n    end"}))}l.isMDXComponent=!0},1353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphcast-poi-crosschecking-3656b0a3d43beec3febe22b0fb071134.svg"}}]);