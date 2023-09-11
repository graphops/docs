"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Listener Radio",l={unversionedId:"graphcast/radios/listener-radio",id:"graphcast/radios/listener-radio",title:"Listener Radio",description:"The source code for Listener Radio is available on GitHub and Docker builds are automatically published as GitHub Packages.",source:"@site/docs/graphcast/radios/listener-radio.md",sourceDirName:"graphcast/radios",slug:"/graphcast/radios/listener-radio",permalink:"/graphcast/radios/listener-radio",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/listener-radio.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gnSidebar",previous:{title:"Graphcast CLI",permalink:"/graphcast/radios/graphcast-cli"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"Example message table",id:"example-message-table",level:4},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Configurations explained",id:"configurations-explained",level:3},{value:"COVERAGE (topic)",id:"coverage-topic",level:4},{value:"Identity validaiton",id:"identity-validaiton",level:4},{value:"Gossip protocol",id:"gossip-protocol",level:4},{value:"Monitoring the Radio",id:"monitoring-the-radio",level:2},{value:"Prometheus &amp; Grafana",id:"prometheus--grafana",level:3},{value:"HTTP Server",id:"http-server",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listener-radio"},"Listener Radio"),(0,r.kt)("p",null,"The source code for Listener Radio is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphops/listener-radio"},"on GitHub")," and Docker builds are automatically published as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphops/listener-radio/pkgs/container/listener-radio"},"GitHub Packages"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This Radio shall monitor Graphcast network by the pubsub topic of ",(0,r.kt)("inlineCode",{parentName:"p"},"graphcast-v[version]-[network]"),". The Radio will not send messages to the network, but instead will record the messages and generate basic metrics for network monitoring."),(0,r.kt)("p",null,"Graphcast network is a complex system with numerous nodes and connections, and monitoring it is crucial for maintaining its performance, identifying potential issues, and ensuring its robustness and reliability."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Performance Optimization: to identify bottlenecks and areas of inefficiency."),(0,r.kt)("li",{parentName:"ul"},"Troubleshooting: to quickly diagnose issues within the network, reducing downtime and improving reliability."),(0,r.kt)("li",{parentName:"ul"},"Security: to immediately detect any unusual activity that might indicate a security breach."),(0,r.kt)("li",{parentName:"ul"},"Planning and Forecasting: Record valuable data that can be used for planning and forecasting purposes, helping us to make informed decisions about the network's future.")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure a running Postgres instance"),(0,r.kt)("li",{parentName:"ul"},"Set Postgres url to ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ul"},"Set general GraphcastAgent environmental variables shown in the below table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cargo run")," from source code (later should use Github actions to build source and dockerize")),(0,r.kt)("h3",{id:"basic-configuration"},"Basic Configuration"),(0,r.kt)("p",null,"You will need to prepare the following environment variables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description and examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Database URL. The tool comes with automatic database migration, database url passed in must be exist and can be connected. ",(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"postgresql://[username]:[password]@[pg_host]:[pg_port]/[db_name]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRIVATE_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Private key to the Graphcast ID wallet (Precendence over mnemonics).",(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GRAPH_NODE_STATUS_ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to a Graph Node Indexing Status endpoint.",(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"http://index-node:8030/graphql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REGISTRY_SUBGRAPH")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the Graphcast Registry subgraph for your network. Check ",(0,r.kt)("a",{parentName:"td",href:"../sdk/registry#subgraph-apis"},"APIs")," for your preferred network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_SUBGRAPH")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the Graph Network subgraph. Check ",(0,r.kt)("a",{parentName:"td",href:"../sdk/registry#subgraph-apis"},"APIs")," for your preferred network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GRAPHCAST_NETWORK")),(0,r.kt)("td",{parentName:"tr",align:null},"The Graphcast Messaging fleet and pubsub namespace to use.",(0,r.kt)("br",null),"Mainnet: ",(0,r.kt)("inlineCode",{parentName:"td"},"mainnet"),(0,r.kt)("br",null),"Goerli: ",(0,r.kt)("inlineCode",{parentName:"td"},"testnet"))))),(0,r.kt)("h4",{id:"example-message-table"},"Example message table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},'{"nonce": 1686182179, "network": "mainnet", "payload": {"content": "0x3f...", "identifier": "QmVhiE4nax9i86UBnBmQCYDzvjWuwHShYh7aspGPQhU5Sj"}, "signature": "dff1...", "block_hash": "276e...", "identifier": "QmVhiE4nax9i86UBnBmQCYDzvjWuwHShYh7aspGPQhU5Sj", "block_number": 17431860}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},'{"nonce": 1686182183, "network": "goerli", "payload": {"content": "0xc0...", "identifier": "QmacQnSgia4iDPWHpeY6aWxesRFdb8o5DKZUx96zZqEWrB"}, "signature": "dbd2...", "block_hash": "0198...", "identifier": "QmacQnSgia4iDPWHpeY6aWxesRFdb8o5DKZUx96zZqEWrB", "block_number": 9140860}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,r.kt)("p",null,"In the configuration table below is the full list of environment variables you can set, along with example values."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#basic-configuration"},"Basic Configuration")," above. The following environment variables are optional:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name (Optional variables)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description and examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MNEMONIC")),(0,r.kt)("td",{parentName:"tr",align:null},"Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"PRIVATE_KEY")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"MNEMONIC")," is needed). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"claptrap armchair violin..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COLLECT_MESSAGE_DURATION")),(0,r.kt)("td",{parentName:"tr",align:null},"Seconds that the Subgraph Radio will wait to collect remote POI attestations before making a comparison with the local POI. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"120")," for 2 minutes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COVERAGE")),(0,r.kt)("td",{parentName:"tr",align:null},'Toggle for topic coverage level. Possible values: "comprehensive", "on-chain", "minimal". Default is set to "on-chain" coverage.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TOPICS")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated static list of content topics (subgraphs) to subscribe to. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz,QmUwCFhXM3f6qH9Ls9Y6gDNURBH7mxsn6JcectgxAz6CwU,QmQ1Lyh3U6YgVP6YX1RgRz6c8GmKkEpokLwPvEtJx6cF1y"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface onto which to bind the bundled Waku node. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"P2P port on which the bundled Waku node will operate. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"60000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_NODE_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Static Waku Node Key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOT_NODE_ADDRESSES")),(0,r.kt)("td",{parentName:"tr",align:null},"Peer addresses to use as Waku boot nodes. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},'"addr1, addr2, addr3"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SLACK_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"Slack Token to use for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"xoxp-0123456789-0123456789-0123456789-0123456789"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TELEGRAM_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"Telegram Bot Token to use for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TELEGRAM_CHAT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Telegram chat to send messages to. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"-1001234567890"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SLACK_CHANNEL")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of Slack channel to send messages to (has to be a public channel). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"poir-notifications"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WAKU_LOG_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"Waku node logging configuration. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"INFO")," (is also the default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RUST_LOG")),(0,r.kt)("td",{parentName:"tr",align:null},"Rust tracing configuration. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"graphcast_sdk=debug,subgraph_radio=debug"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"info")," for everything")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCORD_WEBHOOK")),(0,r.kt)("td",{parentName:"tr",align:null},"Discord webhook URL for notifications. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://discord.com/api/webhooks/123456789012345678/AbCDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"METRICS_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose Prometheus metrics on this (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"3001"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"METRICS_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose Prometheus metrics on this (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_PORT")," is set, the Radio will expose an API service on the given host and port. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Radio will expose an API service on the given port (off by default). Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"8080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOG_FORMAT")),(0,r.kt)("td",{parentName:"tr",align:null},"Options: ",(0,r.kt)("inlineCode",{parentName:"td"},"pretty")," - verbose and human readable; ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," - not verbose and parsable; ",(0,r.kt)("inlineCode",{parentName:"td"},"compact")," - not verbose and not parsable; ",(0,r.kt)("inlineCode",{parentName:"td"},"full")," - verbose and not parsible. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"pretty"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PERSISTENCE_FILE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"Relative path. If set, the Radio will periodically store states of the program to the file in json format (off by default).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCV5_ENRS")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated ENRs for Waku Discv5 bootstrapping. Defaults to empty list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCV5_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Discoverable UDP port. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"9000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ID_VALIDATION")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the level of validation for message signers used during radio operation. Options include: ",(0,r.kt)("inlineCode",{parentName:"td"},"no-check"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"valid-address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"graphcast-registered"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"graph-network-account"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"registered-indexer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"indexer"))))),(0,r.kt)("h3",{id:"configurations-explained"},"Configurations explained"),(0,r.kt)("h4",{id:"coverage-topic"},"COVERAGE (topic)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"COVERAGE")," is used to specify the topic coverage level. It controls the range of topics (subgraph ipfs hashes) the Indexer subscribes to in order to process data and participate in the network."),(0,r.kt)("p",null,"There are three coverage levels available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"comprehensive"),": Subscribe to on-chain topics, user-defined static topics, and subgraph deployments syncing on graph node. This level is useful for Indexers who want to compare public POIs for all deployments syncing on their graph node even if they don't have an active allocations open (their stake will not be taken into account in attestation)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on-chain"),": Subscribe to on-chain topics and user-defined static topics. This is the default coverage level and is suitable for indexers who only want to compare data for deployments with active allocations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minimal"),": Only subscribe to user-defined static topics. This level is for Indexers who want to limit their participation to specific topics of interest.")),(0,r.kt)("h4",{id:"identity-validaiton"},"Identity validaiton"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ID_VALIDATION")," is used to define level of validation for message signers used during radio operation."),(0,r.kt)("p",null,"Available Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no-check"),": does not perform check on the message signature and does not verify the signer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"valid-address"),": checks the signer to be a valid Ethereum address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"graphcast-registered"),": checks the signer to be registered on Graphcast Registry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"graph-network-account"),": checks the signer to be a Graph account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"registered-indexer"),": checks the signer to be registered on Graphcast Registry and corresponds to an Indexer that satisfies the minimum stake requirement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"indexer"),": checks the signer to be either registered on Graphcast Registry or to be a Graph Account, and corresponds to an Indexer satisfying the minimum stake requirement.")),(0,r.kt)("h4",{id:"gossip-protocol"},"Gossip protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WAKU_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WAKU_PORT")," specify where the bundled Waku node runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports."),(0,r.kt)("p",null,"If you want to customize the log level, you can toggle ",(0,r.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," environment variable. Here's an example configuration to get more verbose logging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'RUST_LOG="warn,hyper=warn,graphcast_sdk=debug,subgraph_radio=debug"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Discv5")," is an ambient node discovery network for establishing a decentralized network of interconnected Graphcast Radios. Discv5, when used in Graphcast Radios, serves as a dedicated peer-to-peer discovery protocol that empowers Radios to form an efficient, decentralized network. Without Discv5, the traffic within the Graphcast network would largely rely on centrally hosted boot nodes, leading to a less distributed architecture. However, with Discv5, Radios are capable of directly routing messages among themselves, significantly enhancing network decentralization and reducing reliance on the central nodes. If you want to learn more about Discv5, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/33/"},"official spec"),"."),(0,r.kt)("h2",{id:"monitoring-the-radio"},"Monitoring the Radio"),(0,r.kt)("h3",{id:"prometheus--grafana"},"Prometheus & Grafana"),(0,r.kt)("p",null,"The exposed metrics can be scraped by a Prometheus server and displayed in Grafana. In order to use them you have to have a local Prometheus server running and scraping metrics on the provided port. You can specify the metrics host and port by using the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"METRICS_PORT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"METRICS_HOST"),"."),(0,r.kt)("h2",{id:"http-server"},"HTTP Server"),(0,r.kt)("p",null,"The Radio spins up an HTTP server with a GraphQL API when ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_PORT")," environment variables are set. The supported routes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/health")," for health status"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/graphql")," for GET and POST requests with GraphQL playground interface")),(0,r.kt)("p",null,"The GraphQL API now includes:"),(0,r.kt)("p",null,"Below are an example query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  rows {\n    id\n    message {\n      nonce\n      network\n      payload {\n        content\n      }\n    }\n  }\n\n  messages {\n    identifier\n    nonce\n    network\n    blockNumber\n    blockHash\n    signature\n    payload {\n      identifier\n      content\n    }\n  }\n}\n")),(0,r.kt)("p",null,"example mutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mutation{\n  deleteMessage(id:1)\n}\n")))}u.isMDXComponent=!0}}]);