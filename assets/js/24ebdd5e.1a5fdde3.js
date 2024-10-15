"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1410],{315:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var t=n(4848),s=n(8453);const o={sidebar_position:3},r="POI Cross-checking",i={id:"graphcast/radios/subgraph-radio/poi-cross-checking",title:"POI Cross-checking",description:"An essential aspect of earning indexing rewards as an Indexer is the generation of valid Proof of Indexing hashes (POIs). These POIs provide evidence of the Indexer's possession of correct data. Submitting invalid POIs could lead to a Dispute and possible slashing by the protocol. With Subgraph Radio's POI feature, Indexers gain confidence knowing that their POIs are continually cross-verified against those of other participating Indexers. Should there be a discrepancy in POIs, Subgraph Radio functions as an early warning system, alerting the Indexer within minutes.",source:"@site/docs/graphcast/radios/subgraph-radio/poi-cross-checking.md",sourceDirName:"graphcast/radios/subgraph-radio",slug:"/graphcast/radios/subgraph-radio/poi-cross-checking",permalink:"/graphcast/radios/subgraph-radio/poi-cross-checking",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/subgraph-radio/poi-cross-checking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gnSidebar",previous:{title:"Introduction",permalink:"/graphcast/radios/subgraph-radio/intro"},next:{title:"Subgraph Upgrade Pre-syncing",permalink:"/graphcast/radios/subgraph-radio/subgraph-upgrade-presyncing"}},d={},h=[{value:"Determining which Subgraphs to gossip about",id:"determining-which-subgraphs-to-gossip-about",level:2},{value:"Gathering and comparing normalised POIs",id:"gathering-and-comparing-normalised-pois",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",mermaid:"mermaid",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"poi-cross-checking",children:"POI Cross-checking"})}),"\n",(0,t.jsxs)(a.p,{children:["An essential aspect of earning indexing rewards as an Indexer is the generation of valid Proof of Indexing hashes (POIs). These POIs provide evidence of the Indexer's possession of correct data. Submitting invalid POIs could lead to a ",(0,t.jsx)(a.a,{href:"https://thegraph.com/docs/en/network/indexing/#what-are-disputes-and-where-can-i-view-them",children:"Dispute"})," and possible slashing by the protocol. With Subgraph Radio's POI feature, Indexers gain confidence knowing that their POIs are continually cross-verified against those of other participating Indexers. Should there be a discrepancy in POIs, Subgraph Radio functions as an early warning system, alerting the Indexer within minutes."]}),"\n",(0,t.jsxs)(a.p,{children:["All POIs generated through Subgraph Radio are public (normalized), meaning they are hashed with a ",(0,t.jsx)(a.code,{children:"0x0"})," Indexer Address and can be compared between Indexers. However, these public POIs are not valid for on-chain reward submission. Subgraph Radio groups and weighs public POIs according to the aggregate stake in GRT attesting to each. The normalized POI with the most substantial aggregate attesting stake is deemed canonical and used for comparisons with your local Indexer POIs."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"POI Cross-checking",src:n(9231).A+"",width:"960",height:"540"})}),"\n",(0,t.jsx)(a.h2,{id:"determining-which-subgraphs-to-gossip-about",children:"Determining which Subgraphs to gossip about"}),"\n",(0,t.jsxs)(a.p,{children:["Subgraph Radio will gossip about different subgraphs depending on the ",(0,t.jsx)(a.code,{children:"COVERAGE"})," configuration (see more). By default, the Radio will gossip about all healthy subgraphs, whether they are allocated to or not."]}),"\n",(0,t.jsx)(a.p,{children:"Subgraph Radio periodically polls the Graph Node for new blocks on all relevant networks and constructs Graphcast topics on each allocation identified by subgraph deployment IPFS hash. Chainheads for these networks are updated with data from the Graph Node, and the Radio ensures that it is always using the latest chainhead when processing messages."}),"\n",(0,t.jsx)(a.h2,{id:"gathering-and-comparing-normalised-pois",children:"Gathering and comparing normalised POIs"}),"\n",(0,t.jsx)(a.p,{children:"At a given interval, the Radio fetches the normalised POI for each deployment. This interval is defined in blocks different for each network. It then saves those public POIs, and as other Indexers running the Radio start doing the same, messages start propagating through the network. The Radio saves each message and processes them on a given interval."}),"\n",(0,t.jsx)(a.p,{children:"The messages include a nonce (UNIX timestamp), block number, signature (used to derive the sender's on-chain Indexer address) and network. Before saving an entry to the map, the Radio operator verifies through the Graph network subgraph for the sender's on-chain identity and amount of tokens staked, which is used during comparisons later on."}),"\n",(0,t.jsx)(a.mermaid,{value:"flowchart LR\n    a[Fetch deployment status] --\x3e b[If healthy & synced]\n    b --\x3e|No| eee{End}\n    b --\x3e|Yes| c[If reached trigger block]\n    c --\x3e|No| eee\n    c --\x3e|Yes| d[Fetch POI for deployment]\n    d --\x3e|Broadcast| n(Graphcast\\nNetwork)\n    n --\x3e|Receive remote POI| o[Other Indexers]\n    n --\x3e x{End}"}),"\n",(0,t.jsx)(a.p,{children:"At another interval, the Radio compares the local public POIs with the collected remote ones. The remote POIs are sorted so that for each subgraph (on each block), the POI that is backed by the most on-chain stake is selected. This means that the combined stake of all Indexers that attested to it is considered, not just the highest staking Indexer. The top POI is then compared with the local POIs for that subgraph at that block to determine consensus."}),"\n",(0,t.jsx)(a.p,{children:"If there is a mismatch and if the Radio operator has set up a Slack, Discord and/or Telegram bot integration, the Radio will send alerts to the designated channels."}),"\n",(0,t.jsx)(a.p,{children:"After a successful comparison, the attestations that have been checked are removed from the store."}),"\n",(0,t.jsx)(a.mermaid,{value:"flowchart LR\n    q[Fetch deployment status] --\x3e g[Has collection window expired?]\n    g --\x3e|Yes| t[Compute consensus remote POI]\n    g --\x3e|No| p{End}\n    c --\x3e|Aggregate| t\n    a[Receive POI attestations] --\x3e b[Has collection window expired?]\n    b --\x3e|Yes| eee{End}\n    b --\x3e|No| c[Store remote attestation\\nfor deployment]\n    t --\x3e l[Does local POI match remote consensus POI?]\n    l --\x3e|No| i[Send notification]\n    l --\x3e|Yes| d{End}"}),"\n",(0,t.jsx)(a.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,t.jsx)(a.mermaid,{value:"sequenceDiagram\n    participant Network Subgraph\n    participant Graph Node\n    participant Subgraph Radio\n    participant Graphcast Network\n    actor Human\n    participant Indexer Management Server\n    loop Track allocated deployments\n        opt\n            Subgraph Radio->>+Network Subgraph: Get latest allocated deployments\n            Network Subgraph->>-Subgraph Radio: Return allocated deployments\n        end\n        loop Monitor allocated deployments and chain heads\n            Subgraph Radio->>+Graph Node: Get indexing statuses for relevant deployments\n            Graph Node->>-Subgraph Radio: Return matching indexing statuses\n            activate Subgraph Radio\n            Subgraph Radio->>Subgraph Radio: Update chain heads\n            deactivate Subgraph Radio\n            loop For each deployment that we are tracking\n                opt If deployment reached trigger block is healthy\n                    Subgraph Radio->>+Graph Node: Fetch POI for deployment\n                    Graph Node->>-Subgraph Radio: Normalized POI\n                    activate Subgraph Radio\n                    Subgraph Radio->>Subgraph Radio: Generate signed POI Attestation\n                    deactivate Subgraph Radio\n                    Subgraph Radio--\x3e>Graphcast Network: Broadcast POI Attestation to Graphcast Network\n                end\n                opt If stored remote attestations and collect message duration passed\n                    activate Subgraph Radio\n                    Subgraph Radio->>Subgraph Radio: Compute consensus remote POI\n                    deactivate Subgraph Radio\n                    opt If local POI mismatches consensus remote POI\n                        Subgraph Radio--\x3e>Human: Send POI divergence warning notification\n                    end\n                end\n                opt If UpgradeIntentMessage is received\n                    Graphcast Network--\x3e>Subgraph Radio: UpgradeIntentMessage\n                    activate Subgraph Radio\n                    Subgraph Radio--\x3e>Human: Send Version Upgrade notification\n                    opt If Indexer Management Server endpoint provided\n                        Subgraph Radio->>Indexer Management Server: Sends offchain sync request for new deployment hash\n                    end\n                    deactivate Subgraph Radio\n                end\n            end\n        end\n    end"})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9231:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/graphcast-poi-crosschecking-3656b0a3d43beec3febe22b0fb071134.svg"},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var t=n(6540);const s={},o=t.createContext(s);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);