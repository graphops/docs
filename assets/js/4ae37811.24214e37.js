"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(d,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},l="Advanced Configuration",o={unversionedId:"graphcast/radios/subgraph-radio/advanced-configuration",id:"graphcast/radios/subgraph-radio/advanced-configuration",title:"Advanced Configuration",description:"In the configuration table below is the full list of environment variables you can set, along with example values.",source:"@site/docs/graphcast/radios/subgraph-radio/advanced-configuration.md",sourceDirName:"graphcast/radios/subgraph-radio",slug:"/graphcast/radios/subgraph-radio/advanced-configuration",permalink:"/graphcast/radios/subgraph-radio/advanced-configuration",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/subgraph-radio/advanced-configuration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"gnSidebar",previous:{title:"Notifications and Monitoring",permalink:"/graphcast/radios/subgraph-radio/monitoring"},next:{title:"HTTP Server",permalink:"/graphcast/radios/subgraph-radio/http-server"}},d={},p=[{value:"Configurations explained",id:"configurations-explained",level:3},{value:"GOSSIP_TOPIC_COVERAGE",id:"gossip_topic_coverage",level:4},{value:"Identity validaiton",id:"identity-validaiton",level:4},{value:"Gossip protocol",id:"gossip-protocol",level:4},{value:"Protocol network",id:"protocol-network",level:4},{value:"State management",id:"state-management",level:4},{value:"Subgraph Upgrade Pre-sync feature configuration variables",id:"subgraph-upgrade-pre-sync-feature-configuration-variables",level:4},{value:"Configuration options",id:"configuration-options",level:3},{value:"Using Environment Variables",id:"using-environment-variables",level:4},{value:"Using CLI arguments",id:"using-cli-arguments",level:4},{value:"Using a TOML/YAML file",id:"using-a-tomlyaml-file",level:4}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-configuration"},"Advanced Configuration"),(0,r.kt)("p",null,"In the configuration table below is the full list of environment variables you can set, along with example values."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"intro#basic-configuration"},"Basic Configuration in the Introduction"),". The following environment variables are optional:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name (Optional variables)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description and examples"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MNEMONIC")),(0,r.kt)("td",{parentName:"tr",align:null},"Mnemonic to the Graphcast ID wallet or the Indexer Operator wallet (first address of the wallet is used; Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"PRIVATE_KEY")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"MNEMONIC")," is needed). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"claptrap armchair violin...")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COLLECT_MESSAGE_DURATION")),(0,r.kt)("td",{parentName:"tr",align:null},"Seconds that the Subgraph Radio will wait to collect remote POI attestations before making a comparison with the local POI. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"120")," for 2 minutes."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GOSSIP_TOPIC_COVERAGE")),(0,r.kt)("td",{parentName:"tr",align:null},'Toggle for topic coverage level. Possible values: "comprehensive", "on-chain", "minimal". Default is set to "comprehensive" coverage.'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTO_UPGRADE_COVERAGE")),(0,r.kt)("td",{parentName:"tr",align:null},'Toggle for the types of subgraph the radio send offchain syncing commands to indexer management server. Default to upgrade all syncing deployments. Default is set to "comprehensive" coverage.'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TOPICS")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated static list of content topics (subgraphs) to subscribe to. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz,QmUwCFhXM3f6qH9Ls9Y6gDNURBH7mxsn6JcectgxAz6CwU,QmQ1Lyh3U6YgVP6YX1RgRz6c8GmKkEpokLwPvEtJx6cF1y"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface onto which to bind the bundled Waku node. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"P2P port on which the bundled Waku node will operate. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"60000")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_NODE_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Static Waku Node Key."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOT_NODE_ADDRESSES")),(0,r.kt)("td",{parentName:"tr",align:null},"Peer addresses to use as Waku boot nodes. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},'"addr1, addr2, addr3"')),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TELEGRAM_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"Telegram Bot Token to use for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TELEGRAM_CHAT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Telegram chat to send messages to. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"-1001234567890")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SLACK_WEBHOOK")),(0,r.kt)("td",{parentName:"tr",align:null},"Slack webhook URL for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://hooks.slack.com/services/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")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_LOG_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"Waku node logging configuration. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"INFO")," (is also the default)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RUST_LOG")),(0,r.kt)("td",{parentName:"tr",align:null},"Rust tracing configuration. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"graphcast_sdk=debug,subgraph_radio=debug"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"info")," for everything"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCORD_WEBHOOK")),(0,r.kt)("td",{parentName:"tr",align:null},"Discord webhook URL for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://discord.com/api/webhooks/123456789012345678/AbCDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"METRICS_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose Prometheus metrics on this (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"3001")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"METRICS_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose Prometheus metrics on this (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_PORT")," is set, the Radio will expose an API service on the given host and port. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose an API service on the given port (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"8080")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOG_FORMAT")),(0,r.kt)("td",{parentName:"tr",align:null},"Options: ",(0,r.kt)("inlineCode",{parentName:"td"},"pretty")," - verbose and human readable; ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," - not verbose and parsable; ",(0,r.kt)("inlineCode",{parentName:"td"},"compact")," - not verbose and not parsable; ",(0,r.kt)("inlineCode",{parentName:"td"},"full")," - verbose and not parsible. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"pretty"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SQLITE_FILE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will persist the database between reruns (off by default) Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"./store.sql"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCV5_ENRS")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated ENRs for Waku Discv5 bootstrapping. Defaults to empty list."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCV5_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Discoverable UDP port. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"9000")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ID_VALIDATION")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the level of validation for message signers used during radio operation. Options include: ",(0,r.kt)("inlineCode",{parentName:"td"},"no-check"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"valid-address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"graphcast-registered"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"graph-network-account"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"registered-indexer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"indexer"),". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"indexer")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INDEXER_MANAGEMENT_SERVER_ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the Indexer management server of Indexer Agent. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"http://localhost:18000")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTO_UPGRADE")),(0,r.kt)("td",{parentName:"tr",align:null},'Toggle for the types of subgraphs for which the Radio will send offchain syncing commands to the indexer management server. Default to upgrade all syncing deployments. Possible values: "comprehensive", "on-chain", "minimal", "none". Default is set to "comprehensive" coverage.'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RATELIMIT_THRESHOLD")),(0,r.kt)("td",{parentName:"tr",align:null},"Set upgrade intent ratelimit in seconds: only one upgrade per subgraph within the threshold (default: 86400 seconds = 1 day)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROTOCOL_NETWORK")),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol network (currently matches with suffix of the provided ",(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_SUBGRAPH")," configuration variable)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOTIFICATION_MODE")),(0,r.kt)("td",{parentName:"tr",align:null},"Options: ",(0,r.kt)("inlineCode",{parentName:"td"},"live"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"periodic-report"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"periodic-update"),". Learn more about notification modes ",(0,r.kt)("a",{parentName:"td",href:"monitoring#notification-modes"},"here"),". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"live")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOTIFICATION_INTERVAL")),(0,r.kt)("td",{parentName:"tr",align:null},"Interval (in hours) between sending a divergence notification (used in the ",(0,r.kt)("inlineCode",{parentName:"td"},"periodic-update")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"periodic-report")," nofitification modes). Learn more about notification modes ",(0,r.kt)("a",{parentName:"td",href:"monitoring#notification-modes"},"here"),". Default: 24"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For enhanced security, we recommend running Subgraph Radio with an independent Graphcast ID linked to your Indexer account. This Graphcast ID is an Ethereum account authorized to sign Graphcast messages on behalf of your Indexer. By default, Subgraph Radio validates messages received from any signer, that can be resolved to an Indexer address, regardless of whether or not they are registered on the Graphcast registry (though this behavior can be altered by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID_VALIDATION")," config variable). Learn how to register a Graphcast ID ",(0,r.kt)("a",{parentName:"p",href:"https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id"},"here"),".")),(0,r.kt)("h3",{id:"configurations-explained"},"Configurations explained"),(0,r.kt)("h4",{id:"gossip_topic_coverage"},"GOSSIP_TOPIC_COVERAGE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GOSSIP_TOPIC_COVERAGE")," is used to specify the topic coverage level. It controls the range of topics (subgraph ipfs hashes) the Indexer subscribes to in order to process data and participate in the network."),(0,r.kt)("p",null,"There are three coverage levels available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"comprehensive"),": Subscribe to on-chain topics, user-defined static topics, and subgraph deployments syncing on graph node. This level is useful for Indexers who want to compare public POIs for all deployments syncing on their graph node even if they don't have an active allocations open (their stake will not be taken into account in attestation)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on-chain"),": Subscribe to on-chain topics and user-defined static topics. This is the default coverage level and is suitable for indexers who only want to compare data for deployments with active allocations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minimal"),": Only subscribe to user-defined static topics. This level is for Indexers who want to limit their participation to specific topics of interest.")),(0,r.kt)("h4",{id:"identity-validaiton"},"Identity validaiton"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ID_VALIDATION")," is used to define level of validation for message signers used during radio operation. We recommend ",(0,r.kt)("inlineCode",{parentName:"p"},"registered-indexer")," for most strict identity validation, while ",(0,r.kt)("inlineCode",{parentName:"p"},"indexer")," is a viable option for those who want to use the network before considering Grapchast ID registration. You can choose a sender identity validation mechanism for your radio, based on your use case and security preferences."),(0,r.kt)("p",null,"Available Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no-check"),": Does not perform check on the message signature and does not verify the signer. All messages should pass the sender check."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"valid-address"),": Requires the signer to be a valid Ethereum address. Messages should be traceable to an Ethers wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"graphcast-registered"),": Requires the signer to be registered on the Graphcast Registry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"graph-network-account"),": signer must be a Graph account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"registered-indexer"),": signer must be registered at Graphcast Registry and correspond to an Indexer satisfying the indexer minimum stake requirement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"indexer"),": signer must be registered at Graphcast Registry or is a Graph Account, and correspond to an Indexer satisfying the indexer minimum stake requirement.")),(0,r.kt)("h4",{id:"gossip-protocol"},"Gossip protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WAKU_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WAKU_PORT")," specify where the bundled Waku node runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports."),(0,r.kt)("p",null,"If you want to customize the log level, you can toggle ",(0,r.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," environment variable. Here's an example configuration to get more verbose logging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'RUST_LOG="warn,hyper=warn,graphcast_sdk=debug,subgraph_radio=debug"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Discv5")," is an ambient node discovery network for establishing a decentralized network of interconnected Graphcast Radios. Discv5, when used in Graphcast Radios, serves as a dedicated peer-to-peer discovery protocol that empowers Radios to form an efficient, decentralized network. Without Discv5, the traffic within the Graphcast network would largely rely on centrally hosted boot nodes, leading to a less distributed architecture. However, with Discv5, Radios are capable of directly routing messages among themselves, significantly enhancing network decentralization and reducing reliance on the central nodes. If you want to learn more about Discv5, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/33/"},"official spec"),"."),(0,r.kt)("h4",{id:"protocol-network"},"Protocol network"),(0,r.kt)("p",null,"Available Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goerli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arbitrum-one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arbitrum-goerli"))),(0,r.kt)("h4",{id:"state-management"},"State management"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PERSISTENCE_FILE_PATH")," configuration variable allows the Radio to maintain operational continuity across sessions. When the file path is set, it triggers the Radio to periodically store its state, including local attestations, remote messages and POI comparison results in a JSON-formatted file at the specified path. This facilitates seamless session transitions and minimizes data loss. In the event of a system disruption, the state can be reloaded from this file, ensuring the Radio can resume operation effectively."),(0,r.kt)("h4",{id:"subgraph-upgrade-pre-sync-feature-configuration-variables"},"Subgraph Upgrade Pre-sync feature configuration variables"),(0,r.kt)("p",null,"The subgraph upgrade pre-sync feature provides a way for Subgraph Developers to signal when they plan on releasing a new subgraph version, thereby allowing Indexers to start syncing the subgraph in advance. If the Radio operator has set up the notification system, they will get notified whenever a new subgraph upgrade intent message is received."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"INDEXER_MANAGEMENT_SERVER_ENDPOINT")," configuration variable has been set, the Radio will send a request to the Indexer Agent to start offchain syncing the new Subgraph deployment."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_UPGRADE_COVERAGE")," variable can be toggled to change the coverage level of subgraphs for which the Radio will send offchain syncing commands to the indexer management server."),(0,r.kt)("h3",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"To configure Subgraph Radio, you can use the following methods:"),(0,r.kt)("h4",{id:"using-environment-variables"},"Using Environment Variables"),(0,r.kt)("p",null,"Example .env file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PRIVATE_KEY="a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m"\nGRAPH_NODE_STATUS_ENDPOINT="http://127.0.0.42:8030/graphql"\nREGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet"\nNETWORK_SUBGRAPH="https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet"\nGRAPHCAST_NETWORK=mainnet\nINDEXER_ADDRESS="0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"\n')),(0,r.kt)("h4",{id:"using-cli-arguments"},"Using CLI arguments"),(0,r.kt)("p",null,"Pass the configuration options directly as command-line arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run ghcr.io/graphops/subgraph-radio \\\n  --private-key "a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m" \\\n  --graph-node-status-endpoint "http://127.0.0.42:8030/graphql" \\\n  --registry-subgraph "https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet" \\\n  --network-subgraph "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet" \\\n  --graphcast-network mainnet \\\n  --indexer-address "0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"\n')),(0,r.kt)("h4",{id:"using-a-tomlyaml-file"},"Using a TOML/YAML file"),(0,r.kt)("p",null,"Example TOML configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[graph_stack]\ngraph_node_status_endpoint = 'http://127.0.0.42:8030/graphql'\nindexer_address = '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6'\nregistry_subgraph = 'https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet'\nnetwork_subgraph = 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet'\nprivate_key = 'a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m'\n")),(0,r.kt)("p",null,"Then you just need to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_FILE")," set, either as an env variable - ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_FILE=path/to/config.toml")," or passed as a CLI arg - ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-file path/to/config.toml"),"."),(0,r.kt)("p",null,"Example YAML configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'graph_stack:\n  graph_node_status_endpoint: "http://127.0.0.42:8030/graphql"\n  indexer_address: "0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"\n  registry_subgraph: "https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet"\n  network_subgraph: "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet"\n  private_key: "a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m"\n')),(0,r.kt)("p",null,"Then you just need to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_FILE")," set, either as an env variable - ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_FILE=path/to/config.yaml")," or passed as a CLI arg - ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-file path/to/config.yaml"),"."),(0,r.kt)("p",null,"We also have an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphops/subgraph-radio/blob/dev/template.toml"},"extensive configuration file template")," in the repo."))}u.isMDXComponent=!0}}]);