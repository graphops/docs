"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,g=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"graphcast/radios/subgraph-radio/intro",id:"graphcast/radios/subgraph-radio/intro",title:"Introduction",description:"Subgraph Radio",source:"@site/docs/graphcast/radios/subgraph-radio/intro.md",sourceDirName:"graphcast/radios/subgraph-radio",slug:"/graphcast/radios/subgraph-radio/intro",permalink:"/graphcast/radios/subgraph-radio/intro",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/subgraph-radio/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"gnSidebar",previous:{title:"Registry Contract",permalink:"/graphcast/sdk/registry"},next:{title:"POI Cross-checking",permalink:"/graphcast/radios/subgraph-radio/poi-cross-checking"}},p={},s=[{value:"Subgraph Radio",id:"subgraph-radio",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"Run with Docker",id:"run-with-docker",level:3},{value:"(or) Run with docker-compose",id:"or-run-with-docker-compose",level:3},{value:"(or) Run as part of StakeSquid&#39;s docker-compose setup",id:"or-run-as-part-of-stakesquids-docker-compose-setup",level:3},{value:"(or) Run using a pre-built binary",id:"or-run-using-a-pre-built-binary",level:3},{value:"Developing the Subgraph Radio",id:"developing-the-subgraph-radio",level:2},{value:"Building the image using the Dockerfile locally",id:"building-the-image-using-the-dockerfile-locally",level:4},{value:"Prerequisites",id:"prerequisites",level:5},{value:"Running the Subgraph Radio inside a Docker container",id:"running-the-subgraph-radio-inside-a-docker-container",level:5},{value:"Building Subgraph Radio locally",id:"building-subgraph-radio-locally",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Running the Subgraph Radio natively",id:"running-the-subgraph-radio-natively",level:4}],d={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"subgraph-radio"},"Subgraph Radio"),(0,n.kt)("p",null,"Subgraph Radio is an optional component of the Graph Protocol Indexer Stack. It uses the Graphcast Network to facilitate the exchange of data among Indexers and other participants about Subgraphs."),(0,n.kt)("p",null,"The source code for the Subgraph Radio is available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/subgraph-radio"},"on GitHub")," and Docker builds are automatically published as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/subgraph-radio/pkgs/container/subgraph-radio"},"GitHub Packages"),". Subgraph Radio is also published as a crate ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/subgraph-radio"},"on crates.io"),"."),(0,n.kt)("h3",{id:"basic-configuration"},"Basic Configuration"),(0,n.kt)("p",null,"The Subgraph Radio can be configured using environment variables, CLI arguments, as well as a ",(0,n.kt)("inlineCode",{parentName:"p"},".toml")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".yaml")," configuration file. Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"#configuration-options"},"configuration options")," to learn more. In all cases, users will need to prepare the following configuration variables:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description and examples"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PRIVATE_KEY")),(0,n.kt)("td",{parentName:"tr",align:null},"Private key of the Graphcast ID wallet or the Indexer Operator wallet (precendence over ",(0,n.kt)("inlineCode",{parentName:"td"},"MNEMONIC"),").",(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"INDEXER_ADDRESS")),(0,n.kt)("td",{parentName:"tr",align:null},"Indexer address for Graphcast message verification, in all lowercase.",(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"0xabcdcabdabcdabcdcabdabcdabcdcabdabcdabcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GRAPH_NODE_STATUS_ENDPOINT")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to a Graph Node Indexing Status endpoint.",(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://index-node:8030/graphql"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"INDEXER_MANAGEMENT_SERVER_ENDPOINT")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the Indexer management server of Indexer Agent. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://localhost:18000"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"REGISTRY_SUBGRAPH")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the Graphcast Registry subgraph for your network. Check ",(0,n.kt)("a",{parentName:"td",href:"../../sdk/registry#subgraph-apis"},"APIs")," for your preferred network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NETWORK_SUBGRAPH")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the Graph Network subgraph. Check ",(0,n.kt)("a",{parentName:"td",href:"../../sdk/registry#subgraph-apis"},"APIs")," for your preferred network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GRAPHCAST_NETWORK")),(0,n.kt)("td",{parentName:"tr",align:null},"The Graphcast Messaging fleet and pubsub namespace to use.",(0,n.kt)("br",null),"Mainnet: ",(0,n.kt)("inlineCode",{parentName:"td"},"mainnet"),(0,n.kt)("br",null),"Goerli: ",(0,n.kt)("inlineCode",{parentName:"td"},"testnet"))))),(0,n.kt)("h3",{id:"run-with-docker"},"Run with Docker"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pull the Subgraph Radio image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/graphops/subgraph-radio:latest\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Run the image, providing the required environment variables. Here's a sample mainnet configuration:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n    -e GRAPHCAST_NETWORK="mainnet" \\\n    -e REGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-mainnet" \\\n    -e NETWORK_SUBGRAPH="https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet" \\\n    -e PRIVATE_KEY="PRIVATE_KEY" \\\n    -e GRAPH_NODE_STATUS_ENDPOINT="http://graph-node:8030/graphql" \\\n    -e RUST_LOG="warn,hyper=warn,graphcast_sdk=info,subgraph_radio=info" \\\n    -e INDEXER_ADDRESS="INDEXER_ADDRESS" \\\n    ghcr.io/graphops/subgraph-radio:latest\n')),(0,n.kt)("h3",{id:"or-run-with-docker-compose"},"(or) Run with docker-compose"),(0,n.kt)("p",null,"You can append this service definition to your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose")," manifest and customise the definitions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  # ... your other service definitions\n  subgraph-radio:\n    image: ghcr.io/graphops/subgraph-radio:latest\n    container_name: subgraph-radio\n    restart: unless-stopped\n    environment:\n      GRAPHCAST_NETWORK: "mainnet"\n      REGISTRY_SUBGRAPH: "https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-mainnet"\n      NETWORK_SUBGRAPH: "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet"\n      PRIVATE_KEY: "PRIVATE_KEY"\n      GRAPH_NODE_STATUS_ENDPOINT: "http://graph-node:8030/graphql"\n      RUST_LOG: "warn,hyper=warn,graphcast_sdk=info,subgraph_radio=info"\n      INDEXER_ADDRESS: "INDEXER_ADDRESS"\n    logging:\n      driver: local\n')),(0,n.kt)("h3",{id:"or-run-as-part-of-stakesquids-docker-compose-setup"},"(or) Run as part of ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/StakeSquid"},"StakeSquid"),"'s docker-compose setup"),(0,n.kt)("p",null,"Subgraph Radio is included as an optional component in both the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/StakeSquid/graphprotocol-mainnet-docker"},"mainnet")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/StakeSquid/graphprotocol-testnet-docker"},"testnet")," versions of StakeSquid's guide."),(0,n.kt)("h3",{id:"or-run-using-a-pre-built-binary"},"(or) Run using a pre-built binary"),(0,n.kt)("p",null,"We also provide pre-built binaries for Ubuntu and MacOS, which you can find in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Assets")," section on each release in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphops/subgraph-radio/releases"},"releases page")," on Github. Simply download the binary, make it executable (",(0,n.kt)("inlineCode",{parentName:"p"},"chmod a+x ./subgraph-radio-{TAG}-{SYSTEM}"),") and then run it (using ",(0,n.kt)("inlineCode",{parentName:"p"},"./subgraph-radio-{TAG}-{SYSTEM}"),")."),(0,n.kt)("h2",{id:"developing-the-subgraph-radio"},"Developing the Subgraph Radio"),(0,n.kt)("h4",{id:"building-the-image-using-the-dockerfile-locally"},"Building the image using the Dockerfile locally"),(0,n.kt)("p",null,"If you want to make any changes to the Subgraph Radio codebase, you can use this option."),(0,n.kt)("h5",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone this repo and ",(0,n.kt)("inlineCode",{parentName:"li"},"cd")," into it"),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file that includes at least the required environment variables. To see the full list of environment variables you can provide, check out the ",(0,n.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")," section.")),(0,n.kt)("h5",{id:"running-the-subgraph-radio-inside-a-docker-container"},"Running the Subgraph Radio inside a Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,n.kt)("h3",{id:"building-subgraph-radio-locally"},"Building Subgraph Radio locally"),(0,n.kt)("p",null,"To have full control over the Subgraph Radio code and run it directly on your machine (without Docker) you can use this option."),(0,n.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone this repo and ",(0,n.kt)("inlineCode",{parentName:"li"},"cd")," into it"),(0,n.kt)("li",{parentName:"ol"},"Make sure you have the following installed:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")),(0,n.kt)("li",{parentName:"ul"},"Build tools (e.g. the ",(0,n.kt)("inlineCode",{parentName:"li"},"build-essentials")," package for Debian-based Linux distributions or ",(0,n.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,n.kt)("li",{parentName:"ul"},"C compiler (e.g. the ",(0,n.kt)("inlineCode",{parentName:"li"},"clang")," package for Debian-based Linux distribution or ",(0,n.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,n.kt)("li",{parentName:"ul"},"OpenSSL (e.g. the ",(0,n.kt)("inlineCode",{parentName:"li"},"libssl-dev")," package for Debian-based Linux distribution or ",(0,n.kt)("inlineCode",{parentName:"li"},"openssl")," for MacOS)"),(0,n.kt)("li",{parentName:"ul"},"PostreSQL libraries and headers (e.g. the ",(0,n.kt)("inlineCode",{parentName:"li"},"libpq-dev")," package for Debian-based Linux distribution or ",(0,n.kt)("inlineCode",{parentName:"li"},"postgresql")," for MacOS)")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"You have ",(0,n.kt)("strong",{parentName:"li"},"Graph Node")," syncing your indexer's on-chain allocations."),(0,n.kt)("li",{parentName:"ol"},"You have created a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file that includes at least the required environment variables. To see the full list of environment variables you can provide, check out the ",(0,n.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")," section.")),(0,n.kt)("h4",{id:"running-the-subgraph-radio-natively"},"Running the Subgraph Radio natively"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cargo run --release\n")))}c.isMDXComponent=!0}}]);