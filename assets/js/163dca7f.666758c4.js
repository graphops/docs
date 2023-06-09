"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6241],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=o,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},i="\ud83e\uddd1\u200d\ud83d\udcbb Radio Development",s={unversionedId:"graphcast/sdk/radio-dev",id:"graphcast/sdk/radio-dev",title:"\ud83e\uddd1\u200d\ud83d\udcbb Radio Development",description:"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.",source:"@site/docs/graphcast/sdk/radio-dev.md",sourceDirName:"graphcast/sdk",slug:"/graphcast/sdk/radio-dev",permalink:"/graphcast/sdk/radio-dev",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/sdk/radio-dev.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gnSidebar",previous:{title:"\ud83d\udc4b Introduction",permalink:"/graphcast/sdk/intro"},next:{title:"\ud83d\udcd6 Registry",permalink:"/graphcast/sdk/registry"}},l={},p=[{value:"A simple ping pong example",id:"a-simple-ping-pong-example",level:2},{value:"Register a Graphcast ID",id:"register-a-graphcast-id",level:3},{value:"Populate your <code>.env</code> file",id:"populate-your-env-file",level:3},{value:"A few dependencies",id:"a-few-dependencies",level:3},{value:"The imports",id:"the-imports",level:3},{value:"Structure",id:"structure",level:3},{value:"Methods",id:"methods",level:4},{value:"Instantiate the essentials",id:"instantiate-the-essentials",level:3},{value:"Sending messages",id:"sending-messages",level:3},{value:"Receiving and handling messages",id:"receiving-and-handling-messages",level:3},{value:"The main loop",id:"the-main-loop",level:3},{value:"The finished Radio",id:"the-finished-radio",level:3},{value:"That&#39;s awesome. But how do we run it?",id:"thats-awesome-but-how-do-we-run-it",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-radio-development"},"\ud83e\uddd1\u200d\ud83d\udcbb Radio Development"),(0,o.kt)("p",null,"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network."),(0,o.kt)("p",null,"For a more complex and full example of the Graphcast SDK being used to create a POI Radio, take a look at this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphops/poi-radio"},"implementation in the POC repo"),"."),(0,o.kt)("h2",{id:"a-simple-ping-pong-example"},"A simple ping pong example"),(0,o.kt)("p",null,"Let's take a look at the simplest possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends ",(0,o.kt)("inlineCode",{parentName:"p"},"Ping"),", all the others in the network are listening on the ping pong topic will send ",(0,o.kt)("inlineCode",{parentName:"p"},"Pong")," back. Pretty straightforward."),(0,o.kt)("h3",{id:"register-a-graphcast-id"},"Register a Graphcast ID"),(0,o.kt)("p",null,"First things first - before you can run any Radio on Graphcast, you need to register a Graphcast ID for your on-chain Indexer address. You can learn what a Graphcast ID is and how to register one ",(0,o.kt)("a",{parentName:"p",href:"https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id"},"here"),"."),(0,o.kt)("p",null,"Once you complete those steps you will have a Graphcast ID that is authorized to sign messages on behalf of your Indexer. You can then use that Graphcast ID to run a POI Radio instance."),(0,o.kt)("h3",{id:"populate-your-env-file"},"Populate your ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," file"),(0,o.kt)("p",null,"You now need to export a few environment variables:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description and examples"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PRIVATE_KEY")),(0,o.kt)("td",{parentName:"tr",align:null},"Private key to the Graphcast ID wallet (Precendence over mnemonics).",(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GRAPH_NODE_STATUS_ENDPOINT")),(0,o.kt)("td",{parentName:"tr",align:null},"URL to a Graph Node Indexing Status endpoint.",(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://index-node:8030/graphql"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REGISTRY_SUBGRAPH")),(0,o.kt)("td",{parentName:"tr",align:null},"URL to the Graphcast Registry subgraph for your network. You should set the Goerli link - ",(0,o.kt)("inlineCode",{parentName:"td"},"https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NETWORK_SUBGRAPH")),(0,o.kt)("td",{parentName:"tr",align:null},"URL to the Graph Network subgraph. You can use the testnet one - ",(0,o.kt)("inlineCode",{parentName:"td"},"https://gateway.testnet.thegraph.com/network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GRAPHCAST_NETWORK")),(0,o.kt)("td",{parentName:"tr",align:null},"The Graphcast Messaging fleet and pubsub namespace to use. For this example you should use ",(0,o.kt)("inlineCode",{parentName:"td"},"testnet"))))),(0,o.kt)("h3",{id:"a-few-dependencies"},"A few dependencies"),(0,o.kt)("p",null,"Make sure you have the following installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")),(0,o.kt)("li",{parentName:"ul"},"Build tools (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"build-essentials")," package for Debian-based Linux distributions or ",(0,o.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"C compiler (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"clang")," package for Debian-based Linux distribution or ",(0,o.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"OpenSSL (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"libssl-dev")," package for Debian-based Linux distribution or ",(0,o.kt)("inlineCode",{parentName:"li"},"openssl")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"PostreSQL libraries and headers (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"libpq-dev")," package for Debian-based Linux distribution or ",(0,o.kt)("inlineCode",{parentName:"li"},"postgresql")," for MacOS)")),(0,o.kt)("p",null,"Start off with a new Rust project (",(0,o.kt)("inlineCode",{parentName:"p"},"cargo new ping-pong"),"). Then add the following dependencies to you ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'[dependencies]\ngraphcast-sdk = "0.1.1"\nonce_cell = "1.15"\ntokio = { version = "1.1.1", features = ["full"] }\nanyhow = "1.0.39"\nethers = "1.0.0"\ndotenv = "0.15.0"\ntracing = "0.1"\nethers-contract = "1.0.0"\nethers-core = "1.0.0"\nethers-derive-eip712 = "1.0.0"\nprost = "0.11"\nserde = "1.0.147"\nserde_derive = "1.0.114"\n')),(0,o.kt)("h3",{id:"the-imports"},"The imports"),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," file and add the following imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"// Load environment variables from .env file\nuse dotenv::dotenv;\n\n// Import Graphcast SDK types and functions for agent configuration, message handling, and more\nuse graphcast_sdk::{\n    graphcast_agent::{\n        message_typing::GraphcastMessage, waku_handling::WakuHandlingError, GraphcastAgent,\n        GraphcastAgentConfig,\n    },\n    graphql::client_graph_node::update_network_chainheads,\n    networks::NetworkName,\n    BlockPointer,\n};\n\n// Import the OnceCell container for lazy initialization of global/static data\nuse once_cell::sync::OnceCell;\n\n// Import Arc and Mutex for thread-safe sharing of data across threads\nuse std::sync::{Arc, Mutex};\n\n// Import sleep and Duration for handling time intervals and thread delays\nuse std::{thread::sleep, time::Duration};\n\n// Import AsyncMutex for asynchronous mutual exclusion of shared resources\nuse tokio::sync::Mutex as AsyncMutex;\n\n// Import tracing macros for logging and diagnostic purposes\nuse tracing::{debug, error, info};\n\n// Import RadioPayloadMessage from the crate's types module\nuse types::RadioPayloadMessage;\n\n// Import Config from the crate's config module\nuse config::Config;\n\n// Include the local config and types modules\nmod config;\nmod types;\n")),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Everything we need will be inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function. And since we'll be using async code we have to annotate it with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[tokio::main]"),", we can start off with something as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"#[tokio::main]\nasync fn main() {\n  // TODO: Radio logic\n}\n")),(0,o.kt)("p",null,"Before diving into the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function, let's quickly populate the other two files we need - ",(0,o.kt)("inlineCode",{parentName:"p"},"config.rs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"types.rs"),"."),(0,o.kt)("p",null,"Let's take a look at types.rs first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'use async_graphql::SimpleObject;\nuse ethers_contract::EthAbiType;\nuse ethers_core::types::transaction::eip712::Eip712;\nuse ethers_derive_eip712::*;\nuse prost::Message;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize, SimpleObject)]\n#[eip712(\n    name = "Graphcast Ping-Pong Radio",\n    version = "0",\n    chain_id = 1,\n    verifying_contract = "0xc944e90c64b2c07662a292be6244bdf05cda44a7"\n)]\npub struct RadioPayloadMessage {\n    #[prost(string, tag = "1")]\n    pub identifier: String,\n    #[prost(string, tag = "2")]\n    pub content: String,\n}\n\nimpl RadioPayloadMessage {\n    pub fn new(identifier: String, content: String) -> Self {\n        RadioPayloadMessage {\n            identifier,\n            content,\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RadioPayloadMessage")," defines the the general structure that the Graphcast SDK expects from a type that will be used as a Radio payload."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RadioPayloadMessage")," is decorated with several macros - #","[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize)]",", which automatically implement certain traits that are required in the SDK."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"#[eip712]")," macro is used to define information that is used in EIP-712, a standard for structuring typed data in Ethereum transactions."),(0,o.kt)("p",null,"Now let's see the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.rs")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'use clap::Parser;\nuse ethers::signers::WalletError;\nuse graphcast_sdk::build_wallet;\nuse graphcast_sdk::graphcast_id_address;\nuse graphcast_sdk::init_tracing;\nuse serde::{Deserialize, Serialize};\nuse tracing::info;\n\n#[derive(Clone, Debug, Parser, Serialize, Deserialize)]\n#[clap(\n    name = "poi-radio",\n    about = "Cross-check POIs with other Indexer in real time",\n    author = "GraphOps"\n)]\npub struct Config {\n    #[clap(\n        long,\n        value_name = "ENDPOINT",\n        env = "GRAPH_NODE_STATUS_ENDPOINT",\n        help = "API endpoint to the Graph Node Status Endpoint"\n    )]\n    pub graph_node_endpoint: String,\n    #[clap(\n        long,\n        value_name = "KEY",\n        value_parser = Config::parse_key,\n        env = "PRIVATE_KEY",\n        hide_env_values = true,\n        help = "Private key to the Graphcast ID wallet (Precendence over mnemonics)",\n    )]\n    pub private_key: Option<String>,\n    #[clap(\n        long,\n        value_name = "KEY",\n        value_parser = Config::parse_key,\n        env = "MNEMONIC",\n        hide_env_values = true,\n        help = "Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of private key or mnemonic is needed)",\n    )]\n    pub mnemonic: Option<String>,\n    #[clap(\n        long,\n        value_name = "SUBGRAPH",\n        env = "REGISTRY_SUBGRAPH",\n        help = "Subgraph endpoint to the Graphcast Registry",\n        default_value = "https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli"\n    )]\n    pub registry_subgraph: String,\n    #[clap(\n        long,\n        value_name = "SUBGRAPH",\n        env = "NETWORK_SUBGRAPH",\n        help = "Subgraph endpoint to The Graph network subgraph",\n        default_value = "https://gateway.testnet.thegraph.com/network"\n    )]\n    pub network_subgraph: String,\n    #[clap(\n        long,\n        value_name = "LOG_FORMAT",\n        env = "LOG_FORMAT",\n        help = "Support logging formats: pretty, json, full, compact",\n        long_help = "pretty: verbose and human readable; json: not verbose and parsable; compact:  not verbose and not parsable; full: verbose and not parsible",\n        possible_values = ["pretty", "json", "full", "compact"],\n        default_value = "full"\n    )]\n    pub log_format: String,\n}\n\nimpl Config {\n    /// Parse config arguments\n    pub fn args() -> Self {\n        let config = Config::parse();\n        init_tracing(config.log_format.clone()).expect("Could not set up global default subscriber for logger, check environmental variable `RUST_LOG` or the CLI input `log-level`");\n        config\n    }\n\n    /// Validate that private key as an Eth wallet\n    fn parse_key(value: &str) -> Result<String, WalletError> {\n        // The wallet can be stored instead of the original private key\n        let wallet = build_wallet(value)?;\n        let addr = graphcast_id_address(&wallet);\n        info!(address = addr, "Resolved Graphcast id");\n        Ok(String::from(value))\n    }\n}\n')),(0,o.kt)("p",null,"This file defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," struct and its associated methods for handling configuration options of our Radio. This outlines the basic configuration that all Radios have to define."),(0,o.kt)("p",null,"The configuration options can be provided through command-line arguments, environment variables, or a combination of both. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," struct parses and validates these options, it also initializes the tracing system for logging purposes."),(0,o.kt)("h4",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args()"),": Parses and returns the configuration options from command-line arguments and environment variables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parse_key(value: &str)"),": Validates a given private key by attempting to create an Ethereum wallet with it. Returns the private key as a string if successful.")),(0,o.kt)("h3",{id:"instantiate-the-essentials"},"Instantiate the essentials"),(0,o.kt)("p",null,"From here on, all following code will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function. To start off, we define a name for our Radio, read the provided environment variables and instantiate our configuration struct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'// This can be any string\nlet radio_name = "ping-pong".to_string();\n// Loads the environment variables from .env\ndotenv().ok();\n\n// Instantiates the configuration struct based on provided environment variables or CLI args\nlet config = Config::args();\nlet _parent_span = tracing::info_span!("main").entered();\n')),(0,o.kt)("p",null,"Now let's instantiate a few variables that will do all the heavy lifting for us."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'/// A global static (singleton) instance of A GraphcastMessage vector.\n/// It is used to save incoming messages after they\'ve been validated, in order\n/// defer their processing for later, because async code is required for the processing but\n/// it is not allowed in the handler itself.\npub static MESSAGES: OnceCell<Arc<Mutex<Vec<GraphcastMessage<RadioPayloadMessage>>>>> =\n    OnceCell::new();\n\n/// The Graphcast Agent instance must be a global static variable (for the time being).\n/// This is because the Radio handler requires a static immutable context and\n/// the handler itself is being passed into the Graphcast Agent, so it needs to be static as well.\npub static GRAPHCAST_AGENT: OnceCell<GraphcastAgent> = OnceCell::new();\n\n// Subtopics are optionally provided and used as the content topic identifier of the message subject,\n// if not provided then they are usually generated based on indexer allocations\nlet subtopics: Vec<String> = vec!["ping-pong-content-topic".to_string()];\n\n// GraphcastAgentConfig defines the configuration that the SDK expects from all Radios, regardless of their specific functionality\nlet graphcast_agent_config = GraphcastAgentConfig::new(\n    config.private_key.expect("No private key provided"),\n    radio_name,\n    config.registry_subgraph,\n    config.network_subgraph,\n    config.graph_node_endpoint.clone(),\n    None,\n    Some("testnet".to_string()),\n    Some(subtopics),\n    None,\n    None,\n    None,\n    // Example ENR address\n    Some(vec![String::from("enr:-JK4QBcfVXu2YDeSKdjF2xE5EDM5f5E_1Akpkv_yw_byn1adESxDXVLVjapjDvS_ujx6MgWDu9hqO_Az_CbKLJ8azbMBgmlkgnY0gmlwhAVOUWOJc2VjcDI1NmsxoQOUZIqKLk5xkiH0RAFaMGrziGeGxypJ03kOod1-7Pum3oN0Y3CCfJyDdWRwgiMohXdha3UyDQ")]),\n    None,\n    None,\n)\n.await\n.unwrap_or_else(|e| panic!("Could not create GraphcastAgentConfig: {e}"));\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphcastAgentConfig")," takes in an optional vector for content topics. Here we explicitly provide a singleton vector of \"ping-pong-content-topic\", but you can define topics based on the radio's use case needs. If you leave the field as None, then the agent will automatically fetch your indexer's active allocations and create a list of topics in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"radio application name")," + the allocated subgraph deployments' IPFS hash."),(0,o.kt)("p",null,"Next, we will instantiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphcastAgent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'let graphcast_agent = GraphcastAgent::new(graphcast_agent_config)\n    .await\n    .expect("Could not create Graphcast agent");\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphcastAgent")," is the main struct through which the Radios communicate with the SDK."),(0,o.kt)("p",null,"And lastly for the setup part, we need to run two one-off setters for ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphcastAgent")," and for the incoming messages store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"// A one-off setter to load the Graphcast Agent into the global static variable\n_ = GRAPHCAST_AGENT.set(graphcast_agent);\n\n// A one-off setter to instantiate an empty vec before populating it with incoming messages\n_ = MESSAGES.set(Arc::new(Mutex::new(vec![])));\n")),(0,o.kt)("p",null,"Awesome, we're all set to start with the actual Radio logic now!"),(0,o.kt)("h3",{id:"sending-messages"},"Sending messages"),(0,o.kt)("p",null,"We'll define a helper function that holds the logic of sending messages to the Graphcast network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'// Helper function to reuse message sending code\nasync fn send_message(\n    payload: Option<RadioPayloadMessage>,\n    network: NetworkName,\n    block_number: u64,\n) {\n    if let Err(e) = GRAPHCAST_AGENT\n        .get()\n        .expect("Could not retrieve Graphcast agent")\n        .send_message(\n            // The identifier can be any string that suits your Radio logic\n            // If it doesn\'t matter for your Radio logic (like in this case), you can just use a UUID or a hardcoded string\n            "ping-pong-content-topic".to_string(),\n            network,\n            block_number,\n            payload,\n        )\n        .await\n    {\n        error!(error = tracing::field::debug(&e), "Failed to send message");\n    };\n}\n')),(0,o.kt)("p",null,"Again, the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," that we define as ",(0,o.kt)("inlineCode",{parentName:"p"},"ping-pong-content-topic")," can be any string that suits your Radio logic, if it doesn't really matter for your use case (like in the ping-pong Radio case) you can just use a UUID or a hardcoded string."),(0,o.kt)("h3",{id:"receiving-and-handling-messages"},"Receiving and handling messages"),(0,o.kt)("p",null,"We now know how to send message, but how do we receive and handle message from other network participants?"),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent")," validates the incoming messages, we provide a custom callback handler that specifies what to do with the message. In this handler we cache the message for later aggregation and processing, but depending on your Radio use case you are free any data storage option - a database, a custom data structure or a simple vector."),(0,o.kt)("p",null,"Here is a simple handler that does just that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'// The handler specifies what to do with incoming messages.\n// There cannot be any non-deterministic (this includes async) code inside the handler.\n// That is why we\'re saving the message for later processing, where we will check its content and perform some action based on it.\nlet radio_handler =\n    |msg: Result<GraphcastMessage<RadioPayloadMessage>, WakuHandlingError>| match msg {\n        Ok(msg) => {\n            MESSAGES\n                .get()\n                .expect("Could not retrieve messages")\n                .lock()\n                .expect("Could not get lock on messages")\n                .push(msg);\n        }\n        Err(err) => {\n            error!(\n                error = tracing::field::debug(&err),\n                "Failed to handle Waku signal"\n            );\n        }\n    };\n\nGRAPHCAST_AGENT\n    .get()\n    .expect("Could not retrieve Graphcast agent")\n    .register_handler(Arc::new(AsyncMutex::new(radio_handler)))\n    .expect("Could not register handler");\n')),(0,o.kt)("h3",{id:"the-main-loop"},"The main loop"),(0,o.kt)("p",null,"Great, we're almost there! We have a way to pass messages back and forth \ud83c\udfd3. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use a block number as cue."),(0,o.kt)("p",null,"We'll start listening to Ethereum blocks coming from the Graph Node and on each block we'll do a simple check - if the block number is even we'll send a \"Ping\" message, and if it's odd we'll process the messages we've received. After processing the messages we'll clear our store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'let network = NetworkName::from_string("goerli");\n\nloop {\n    let mut network_chainhead_blocks = match GRAPHCAST_AGENT\n        .get()\n        .unwrap()\n        .callbook\n        .indexing_statuses()\n        .await\n    {\n        Ok(res) => update_network_chainheads(res),\n        Err(e) => {\n            error!(\n                err = tracing::field::debug(&e),\n                "Could not query indexing statuses, pull again later"\n            );\n            continue;\n        }\n    };\n    let block_number = network_chainhead_blocks\n        .entry(network)\n        .or_insert(BlockPointer {\n            number: 0,\n            hash: "temp".to_string(),\n        })\n        .number;\n    info!(block = block_number, "\ud83d\udd17 Block number");\n\n    if block_number & 2 == 0 {\n        // If block number is even, send ping message\n        let msg = RadioPayloadMessage::new(\n            "table".to_string(),\n            std::env::args().nth(1).unwrap_or("Ping".to_string()),\n        );\n        send_message(Some(msg), network, block_number).await;\n    } else {\n        // If block number is odd, process received messages\n        let messages = AsyncMutex::new(\n            MESSAGES\n                .get()\n                .expect("Could not retrieve messages")\n                .lock()\n                .expect("Could not get lock on messages"),\n        );\n        for msg in messages.lock().await.iter() {\n            let payload = msg\n                .payload\n                .as_ref()\n                .expect("Could not get radio payload payload");\n            if *payload.content == *"Ping" {\n                let replay_msg =\n                    RadioPayloadMessage::new("table".to_string(), "Pong".to_string());\n                send_message(Some(replay_msg), network, block_number).await;\n            };\n        }\n\n        // Clear message store after processing\n        messages.lock().await.clear();\n    }\n\n    // Wait before next block check\n    sleep(Duration::from_secs(5));\n}\n')),(0,o.kt)("h3",{id:"the-finished-radio"},"The finished Radio"),(0,o.kt)("p",null,"Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphops/graphcast-sdk/tree/main/examples/ping-pong"},"this repo"),", the only important difference is in the dependencies."),(0,o.kt)("h3",{id:"thats-awesome-but-how-do-we-run-it"},"That's awesome. But how do we run it?"),(0,o.kt)("p",null,"You can start up the ping-pong Radio using ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo run"),"."),(0,o.kt)("p",null,"You can spawn more instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ping-pong")," Radio and examine how they interact with each other in the terminal logs."),(0,o.kt)("p",null,"Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! \ud83e\udd42 From here on out, the only limit to the Radios you can build is your own imagination."))}u.isMDXComponent=!0}}]);