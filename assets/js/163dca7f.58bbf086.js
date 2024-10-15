"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7816],{3179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(4848),s=t(8453);const i={sidebar_position:2},r="Radio Development",o={id:"graphcast/sdk/radio-dev",title:"Radio Development",description:"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.",source:"@site/docs/graphcast/sdk/radio-dev.md",sourceDirName:"graphcast/sdk",slug:"/graphcast/sdk/radio-dev",permalink:"/graphcast/sdk/radio-dev",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/sdk/radio-dev.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gnSidebar",previous:{title:"Introduction",permalink:"/graphcast/sdk/intro"},next:{title:"Registry Contract",permalink:"/graphcast/sdk/registry"}},l={},d=[{value:"A simple ping pong example",id:"a-simple-ping-pong-example",level:2},{value:"Register a Graphcast ID",id:"register-a-graphcast-id",level:3},{value:"Populate your <code>.env</code> file",id:"populate-your-env-file",level:3},{value:"A few dependencies",id:"a-few-dependencies",level:3},{value:"The imports",id:"the-imports",level:3},{value:"Structure",id:"structure",level:3},{value:"Methods",id:"methods",level:4},{value:"Instantiate the essentials",id:"instantiate-the-essentials",level:3},{value:"Sending messages",id:"sending-messages",level:3},{value:"Receiving and handling messages",id:"receiving-and-handling-messages",level:3},{value:"The main loop",id:"the-main-loop",level:3},{value:"The finished Radio",id:"the-finished-radio",level:3},{value:"That&#39;s awesome. But how do we run it?",id:"thats-awesome-but-how-do-we-run-it",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"radio-development",children:"Radio Development"})}),"\n",(0,a.jsx)(n.p,{children:"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network."}),"\n",(0,a.jsxs)(n.p,{children:["For a more complex and full example of the Graphcast SDK being used to create a Subgraph Radio, take a look at this ",(0,a.jsx)(n.a,{href:"https://github.com/graphops/subgraph-radio",children:"repo"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"a-simple-ping-pong-example",children:"A simple ping pong example"}),"\n",(0,a.jsxs)(n.p,{children:["Let's take a look at the simplest possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends ",(0,a.jsx)(n.code,{children:"Ping"}),", all the others in the network are listening on the ping pong topic will send ",(0,a.jsx)(n.code,{children:"Pong"})," back. Pretty straightforward."]}),"\n",(0,a.jsx)(n.h3,{id:"register-a-graphcast-id",children:"Register a Graphcast ID"}),"\n",(0,a.jsxs)(n.p,{children:["We recommend that you register a Graphcast ID for your on-chain Indexer address. You can learn what a Graphcast ID is and how to register one ",(0,a.jsx)(n.a,{href:"https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Once you complete those steps you will have a Graphcast ID that is authorized to sign messages on behalf of your Indexer."}),"\n",(0,a.jsxs)(n.h3,{id:"populate-your-env-file",children:["Populate your ",(0,a.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,a.jsx)(n.p,{children:"You now need to export a few environment variables:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description and examples"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"PRIVATE_KEY"})}),(0,a.jsxs)(n.td,{children:["Private key to the Graphcast ID wallet or Indexer Operator wallet (Precendence over ",(0,a.jsx)(n.code,{children:"MNEMONICS"}),").",(0,a.jsx)("br",{}),"Example: ",(0,a.jsx)(n.code,{children:"0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"REGISTRY_SUBGRAPH"})}),(0,a.jsxs)(n.td,{children:["URL to the Graphcast Registry subgraph for your network. Check ",(0,a.jsx)(n.a,{href:"../sdk/registry#subgraph-apis",children:"APIs"})," for your preferred network"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"NETWORK_SUBGRAPH"})}),(0,a.jsxs)(n.td,{children:["URL to the Graph Network subgraph. Check ",(0,a.jsx)(n.a,{href:"../sdk/registry#subgraph-apis",children:"APIs"})," for your preferred network"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"GRAPHCAST_NETWORK"})}),(0,a.jsxs)(n.td,{children:["The Graphcast Messaging fleet and pubsub namespace to use. For this example you should use ",(0,a.jsx)(n.code,{children:"testnet"})]})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"a-few-dependencies",children:"A few dependencies"}),"\n",(0,a.jsx)(n.p,{children:"Make sure you have the following installed:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://go.dev/doc/install",children:"Go"})}),"\n",(0,a.jsxs)(n.li,{children:["Build tools (e.g. the ",(0,a.jsx)(n.code,{children:"build-essentials"})," package for Debian-based Linux distributions or ",(0,a.jsx)(n.a,{href:"https://mac.install.guide/commandlinetools/index.html",children:"Xcode Command Line Tools"})," for MacOS)"]}),"\n",(0,a.jsxs)(n.li,{children:["C compiler (e.g. the ",(0,a.jsx)(n.code,{children:"clang"})," package for Debian-based Linux distribution or ",(0,a.jsx)(n.a,{href:"https://mac.install.guide/commandlinetools/index.html",children:"Xcode Command Line Tools"})," for MacOS)"]}),"\n",(0,a.jsxs)(n.li,{children:["OpenSSL (e.g. the ",(0,a.jsx)(n.code,{children:"libssl-dev"})," package for Debian-based Linux distribution or ",(0,a.jsx)(n.code,{children:"openssl"})," for MacOS)"]}),"\n",(0,a.jsxs)(n.li,{children:["PostreSQL libraries and headers (e.g. the ",(0,a.jsx)(n.code,{children:"libpq-dev"})," package for Debian-based Linux distribution or ",(0,a.jsx)(n.code,{children:"postgresql"})," for MacOS)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Start off with a new Rust project (",(0,a.jsx)(n.code,{children:"cargo new ping-pong"}),"). Then add the following dependencies to you ",(0,a.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'[dependencies]\ngraphcast-sdk = "0.4.0"\nonce_cell = "1.15"\ntokio = { version = "1.1.1", features = ["full"] }\nanyhow = "1.0.39"\nethers = "1.0.0"\ndotenv = "0.15.0"\ntracing = "0.1"\nethers-contract = "1.0.0"\nethers-core = "1.0.0"\nethers-derive-eip712 = "1.0.0"\nprost = "0.11"\nserde = "1.0.147"\nserde_derive = "1.0.114"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"the-imports",children:"The imports"}),"\n",(0,a.jsxs)(n.p,{children:["Open your ",(0,a.jsx)(n.code,{children:"main.rs"})," file and add the following imports:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:"// For date and time utils\nuse chrono::Utc;\n\n// Load environment variables from .env file\nuse dotenv::dotenv;\n\n// Import Arc and Mutex for thread-safe sharing of data across threads\nuse std::sync::{Arc, Mutex};\n\n// Import Graphcast SDK types and functions for agent configuration, message handling, and more\nuse graphcast_sdk::graphcast_agent::{GraphcastAgent, GraphcastAgentConfig};\n\n// Import sleep and Duration for handling time intervals and thread delays\nuse std::{thread::sleep, time::Duration};\n\n// Import AsyncMutex for asynchronous mutual exclusion of shared resources\nuse tokio::sync::Mutex as AsyncMutex;\n\n// Import tracing macros for logging and diagnostic purposes\nuse tracing::{debug, error, info, trace};\n\n// Import SimpleMessage from the crate's types module\nuse types::SimpleMessage;\n\n// Import Config from the crate's config module\nuse config::Config;\n\nuse crate::types::{GRAPHCAST_AGENT, MESSAGES};\n\n// Include the local config and types modules\nmod config;\nmod types;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"structure",children:"Structure"}),"\n",(0,a.jsxs)(n.p,{children:["Everything we need will be inside the ",(0,a.jsx)(n.code,{children:"main()"})," function. And since we'll be using async code we have to annotate it with ",(0,a.jsx)(n.code,{children:"#[tokio::main]"}),", we can start off with something as simple as:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:"#[tokio::main]\nasync fn main() {\n  // TODO: Radio logic\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Before diving into the contents of the ",(0,a.jsx)(n.code,{children:"main"})," function, let's quickly populate the other two files we need - ",(0,a.jsx)(n.code,{children:"config.rs"})," and ",(0,a.jsx)(n.code,{children:"types.rs"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at types.rs first:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'use async_graphql::SimpleObject;\nuse ethers_contract::EthAbiType;\nuse ethers_core::types::transaction::eip712::Eip712;\nuse ethers_derive_eip712::*;\nuse graphcast_sdk::graphcast_agent::GraphcastAgent;\nuse prost::Message;\nuse serde::{Deserialize, Serialize};\n\n// Import the OnceCell container for lazy initialization of global/static data\nuse once_cell::sync::OnceCell;\nuse std::sync::{Arc, Mutex};\n\n/// A global static (singleton) instance of A GraphcastMessage vector.\n/// It is used to save incoming messages after they\'ve been validated, in order\n/// defer their processing for later, because async code is required for the processing but\n/// it is not allowed in the handler itself.\npub static MESSAGES: OnceCell<Arc<Mutex<Vec<SimpleMessage>>>> = OnceCell::new();\n\n/// The Graphcast Agent instance must be a global static variable (for the time being).\n/// This is because the Radio handler requires a static immutable context and\n/// the handler itself is being passed into the Graphcast Agent, so it needs to be static as well.\npub static GRAPHCAST_AGENT: OnceCell<GraphcastAgent> = OnceCell::new();\n\n/// Make a test radio type\n#[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize, SimpleObject)]\n#[eip712(\n    name = "Graphcast Ping-Pong Radio",\n    version = "0",\n    chain_id = 1,\n    verifying_contract = "0xc944e90c64b2c07662a292be6244bdf05cda44a7"\n)]\npub struct SimpleMessage {\n    #[prost(string, tag = "1")]\n    pub identifier: String,\n    #[prost(string, tag = "2")]\n    pub content: String,\n}\n\nimpl SimpleMessage {\n    pub fn new(identifier: String, content: String) -> Self {\n        SimpleMessage {\n            identifier,\n            content,\n        }\n    }\n\n    pub fn radio_handler(&self) {\n        MESSAGES\n            .get()\n            .expect("Could not retrieve messages")\n            .lock()\n            .expect("Could not get lock on messages")\n            .push(self.clone());\n    }\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SimpleMessage"})," defines the structure that all messages for this Radio must follow."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"RadioPayloadMessage"})," is decorated with several macros - #[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize)], which automatically implement certain traits that are required by the SDK."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"#[eip712]"})," macro is used to define information that is used in EIP-712, a standard for structuring typed data in Ethereum transactions."]}),"\n",(0,a.jsxs)(n.p,{children:["Now let's see the ",(0,a.jsx)(n.code,{children:"config.rs"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'use clap::Parser;\nuse ethers::signers::WalletError;\nuse graphcast_sdk::build_wallet;\nuse graphcast_sdk::graphcast_agent::message_typing::IdentityValidation;\nuse graphcast_sdk::init_tracing;\nuse graphcast_sdk::wallet_address;\nuse serde::{Deserialize, Serialize};\nuse tracing::info;\n\n#[derive(Clone, Debug, Parser, Serialize, Deserialize)]\n#[clap(\n    name = "ping-pong-radio",\n    about = "A simple example for using the Graphcast SDK to build Radios",\n    author = "GraphOps"\n)]\npub struct Config {\n    #[clap(\n        long,\n        value_name = "ENDPOINT",\n        env = "GRAPH_NODE_STATUS_ENDPOINT",\n        help = "API endpoint to the Graph Node Status Endpoint"\n    )]\n    pub graph_node_endpoint: Option<String>,\n    #[clap(\n        long,\n        value_name = "KEY",\n        value_parser = Config::parse_key,\n        env = "PRIVATE_KEY",\n        hide_env_values = true,\n        help = "Private key to the Graphcast ID wallet (Precendence over mnemonics)",\n    )]\n    pub private_key: Option<String>,\n    #[clap(\n        long,\n        value_name = "KEY",\n        value_parser = Config::parse_key,\n        env = "MNEMONIC",\n        hide_env_values = true,\n        help = "Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of private key or mnemonic is needed)",\n    )]\n    pub mnemonic: Option<String>,\n    #[clap(\n        long,\n        value_name = "SUBGRAPH",\n        env = "REGISTRY_SUBGRAPH",\n        help = "Subgraph endpoint to the Graphcast Registry",\n        default_value = "https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli"\n    )]\n    pub registry_subgraph: String,\n    #[clap(\n        long,\n        value_name = "INDEXER_ADDRESS",\n        env = "INDEXER_ADDRESS",\n        help = "Graph account corresponding to Graphcast operator"\n    )]\n    pub indexer_address: String,\n    #[clap(\n        long,\n        value_name = "SUBGRAPH",\n        env = "NETWORK_SUBGRAPH",\n        help = "Subgraph endpoint to The Graph network subgraph",\n        default_value = "https://gateway.testnet.thegraph.com/network"\n    )]\n    pub network_subgraph: String,\n    #[clap(\n        long,\n        value_name = "LOG_FORMAT",\n        env = "LOG_FORMAT",\n        help = "Support logging formats: pretty, json, full, compact",\n        long_help = "pretty: verbose and human readable; json: not verbose and parsable; compact:  not verbose and not parsable; full: verbose and not parsible",\n        possible_values = ["pretty", "json", "full", "compact"],\n        default_value = "full"\n    )]\n    pub log_format: String,\n    #[clap(\n        long,\n        value_name = "ID_VALIDATION",\n        value_enum,\n        env = "ID_VALIDATION",\n        default_value = "valid-address",\n        help = "Identity validation mechanism for senders (message signers)",\n        long_help = "Identity validation mechanism for senders (message signers)\\n\n        no-check: all messages signer is valid, \\n\n        valid-address: signer needs to be an valid Eth address, \\n\n        graphcast-registered: must be registered at Graphcast Registry, \\n\n        graph-network-account: must be a Graph account, \\n\n        registered-indexer: must be registered at Graphcast Registry, correspond to and Indexer statisfying indexer minimum stake requirement, \\n\n        indexer: must be registered at Graphcast Registry or is a Graph Account, correspond to and Indexer statisfying indexer minimum stake requirement"\n    )]\n    pub id_validation: IdentityValidation,\n}\n\nimpl Config {\n    /// Parse config arguments\n    pub fn args() -> Self {\n        // TODO: load config file before parse (maybe add new level of subcommands)\n        let config = Config::parse();\n        init_tracing(config.log_format.clone()).expect("Could not set up global default subscriber for logger, check environmental variable `RUST_LOG` or the CLI input `log-level`");\n        config\n    }\n\n    /// Validate that private key as an Eth wallet\n    fn parse_key(value: &str) -> Result<String, WalletError> {\n        // The wallet can be stored instead of the original private key\n        let wallet = build_wallet(value)?;\n        let addr = wallet_address(&wallet);\n        info!(address = addr, "Resolved Graphcast id");\n        Ok(String::from(value))\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This file defines the ",(0,a.jsx)(n.code,{children:"Config"})," struct and its associated methods for handling configuration options of our Radio. This outlines the basic configuration that all Radios have to define."]}),"\n",(0,a.jsxs)(n.p,{children:["The configuration options can be provided through command-line arguments, environment variables, or a combination of both. The ",(0,a.jsx)(n.code,{children:"Config"})," struct parses and validates these options, it also initializes the tracing system for logging purposes."]}),"\n",(0,a.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"args()"}),": Parses and returns the configuration options from command-line arguments and environment variables."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parse_key(value: &str)"}),": Validates a given private key by attempting to create an Ethereum wallet with it. Returns the private key as a string if successful."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"instantiate-the-essentials",children:"Instantiate the essentials"}),"\n",(0,a.jsxs)(n.p,{children:["From here on, all following code will be in the ",(0,a.jsx)(n.code,{children:"main"})," function. To start off, we define a name for our Radio, read the provided environment variables and instantiate our configuration struct."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'// This can be any string\nlet radio_name = "ping-pong".to_string();\n// Loads the environment variables from .env\ndotenv().ok();\n\n// Instantiates the configuration struct based on provided environment variables or CLI args\nlet config = Config::args();\nlet _parent_span = tracing::info_span!("main").entered();\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now let's instantiate a few variables that will do all the heavy lifting for us."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'// Subtopics are optionally provided and used as the content topic identifier of the message subject,\n// if not provided then they are usually generated based on indexer allocations\nlet subtopics: Vec<String> = vec!["ping-pong-content-topic".to_string()];\n\n// GraphcastAgentConfig defines the configuration that the SDK expects from all Radios, regardless of their specific functionality\nlet graphcast_agent_config = GraphcastAgentConfig::new(\n    config.private_key.expect("No private key provided"),\n    config.indexer_address,\n    radio_name,\n    config.registry_subgraph,\n    config.network_subgraph,\n    config.id_validation.clone(),\n    config.graph_node_endpoint,\n    None,\n    Some("testnet".to_string()),\n    Some(subtopics),\n    None,\n    None,\n    None,\n    None,\n    Some(true),\n    // Example ENR address\n    Some(vec![String::from("enr:-JK4QBcfVXu2YDeSKdjF2xE5EDM5f5E_1Akpkv_yw_byn1adESxDXVLVjapjDvS_ujx6MgWDu9hqO_Az_CbKLJ8azbMBgmlkgnY0gmlwhAVOUWOJc2VjcDI1NmsxoQOUZIqKLk5xkiH0RAFaMGrziGeGxypJ03kOod1-7Pum3oN0Y3CCfJyDdWRwgiMohXdha3UyDQ")]),\n    None,\n)\n.await\n.unwrap_or_else(|e| panic!("Could not create GraphcastAgentConfig: {e}"));\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GraphcastAgentConfig"})," takes in an optional vector for content topics. Here we explicitly provide a singleton vector of \"ping-pong-content-topic\", but you can define topics based on the radio's use case needs. If you leave the field as None, then the agent will automatically fetch your indexer's active allocations and create a list of topics in the format of ",(0,a.jsx)(n.code,{children:"radio application name"})," + the allocated subgraph deployments' IPFS hash."]}),"\n",(0,a.jsxs)(n.p,{children:["Next, we will instantiate a ",(0,a.jsx)(n.code,{children:"GraphcastAgent"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'debug!("Initializing the Graphcast Agent");\nlet (graphcast_agent, waku_msg_receiver) = GraphcastAgent::new(graphcast_agent_config)\n    .await\n    .expect("Could not create Graphcast agent");\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GraphcastAgent"})," is the main struct through which the Radios communicate with the SDK."]}),"\n",(0,a.jsxs)(n.p,{children:["And lastly for the setup part, we need to run two one-off setters for ",(0,a.jsx)(n.code,{children:"GraphcastAgent"})," and for the incoming messages store:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:"// A one-off setter to load the Graphcast Agent into the global static variable\n_ = GRAPHCAST_AGENT.set(graphcast_agent);\n\n// A one-off setter to instantiate an empty vec before populating it with incoming messages\n_ = MESSAGES.set(Arc::new(Mutex::new(vec![])));\n"})}),"\n",(0,a.jsx)(n.p,{children:"Awesome, we're all set to start with the actual Radio logic now!"}),"\n",(0,a.jsx)(n.h3,{id:"sending-messages",children:"Sending messages"}),"\n",(0,a.jsx)(n.p,{children:"We'll define a helper function that holds the logic of sending messages to the Graphcast network:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'// Helper function to reuse message sending code\nasync fn send_message(payload: SimpleMessage) {\n    if let Err(e) = GRAPHCAST_AGENT\n        .get()\n        .expect("Could not retrieve Graphcast agent")\n        .send_message(\n            // The identifier can be any string that suits your Radio logic\n            // If it doesn\'t matter for your Radio logic (like in this case), you can just use a UUID or a hardcoded string\n            "ping-pong-content-topic",\n            payload,\n            Utc::now().timestamp(),\n        )\n        .await\n    {\n        error!(error = tracing::field::debug(&e), "Failed to send message");\n    };\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Again, the ",(0,a.jsx)(n.code,{children:"identifier"})," that we define as ",(0,a.jsx)(n.code,{children:"ping-pong-content-topic"})," can be any string that suits your Radio logic, if it doesn't really matter for your use case (like in the ping-pong Radio case) you can just use a UUID or a hardcoded string."]}),"\n",(0,a.jsx)(n.h3,{id:"receiving-and-handling-messages",children:"Receiving and handling messages"}),"\n",(0,a.jsx)(n.p,{children:"We now know how to send message, but how do we receive and handle message from other network participants?"}),"\n",(0,a.jsxs)(n.p,{children:["After ",(0,a.jsx)(n.code,{children:"GossipAgent"})," validates the incoming messages, we provide a custom callback handler that specifies what to do with the message. In this handler we cache the message for later aggregation and processing, but depending on your Radio use case you are free any data storage option - a database, a custom data structure or a simple vector."]}),"\n",(0,a.jsx)(n.p,{children:"Here is a simple handler that does just that:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'// The handler specifies what to do with incoming messages.\n// This is where you can define multiple message types and how they gets handled by the radio\n// by chaining radio payload typed decode and handler functions\ntokio::spawn(async move {\n    for msg in waku_msg_receiver {\n        trace!(\n            "Radio operator received a Waku message from Graphcast agent, now try to fit it to Graphcast Message with Radio specified payload"\n        );\n        let _ = GRAPHCAST_AGENT\n            .get()\n            .expect("Could not retrieve Graphcast agent")\n            .decoder::<SimpleMessage>(msg.payload())\n            .await\n            .map(|msg| {\n                msg.payload.radio_handler();\n            })\n            .map_err(|err| {\n                error!(\n                    error = tracing::field::debug(&err),\n                    "Failed to handle Waku signal"\n                );\n                err\n            });\n    }\n});\n\nGRAPHCAST_AGENT\n    .get()\n    .expect("Could not retrieve Graphcast agent")\n    .register_handler()\n    .expect("Could not register handler");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"the-main-loop",children:"The main loop"}),"\n",(0,a.jsx)(n.p,{children:"Great, we're almost there! We have a way to pass messages back and forth \ud83c\udfd3. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use a block number as cue."}),"\n",(0,a.jsx)(n.p,{children:"We'll start listening to Ethereum blocks coming from the Graph Node and on each block we'll do a simple check - if the block number is even we'll send a \"Ping\" message, and if it's odd we'll process the messages we've received. After processing the messages we'll clear our store."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Rust",children:'let mut block_number = 0;\n\nloop {\n    block_number += 1;\n    info!(block = block_number, "\ud83d\udd17 Block number");\n    if block_number & 2 == 0 {\n        // If block number is even, send ping message\n        let msg = SimpleMessage::new(\n            "table".to_string(),\n            std::env::args().nth(1).unwrap_or("Ping".to_string()),\n        );\n        send_message(msg).await;\n    } else {\n        // If block number is odd, process received messages\n        let messages = AsyncMutex::new(\n            MESSAGES\n                .get()\n                .expect("Could not retrieve messages")\n                .lock()\n                .expect("Could not get lock on messages"),\n        );\n        for msg in messages.lock().await.iter() {\n            if msg.content == *"Ping" {\n                let replay_msg = SimpleMessage::new("table".to_string(), "Pong".to_string());\n                send_message(replay_msg).await;\n            };\n        }\n\n        // Clear message store after processing\n        messages.lock().await.clear();\n    }\n\n    // Wait before next block check\n    sleep(Duration::from_secs(5));\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"the-finished-radio",children:"The finished Radio"}),"\n",(0,a.jsxs)(n.p,{children:["Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in ",(0,a.jsx)(n.a,{href:"https://github.com/graphops/graphcast-sdk/tree/main/examples/ping-pong",children:"this repo"}),", the only important difference is in the dependencies."]}),"\n",(0,a.jsx)(n.h3,{id:"thats-awesome-but-how-do-we-run-it",children:"That's awesome. But how do we run it?"}),"\n",(0,a.jsxs)(n.p,{children:["You can start up the ping-pong Radio using ",(0,a.jsx)(n.code,{children:"cargo run"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can spawn more instances of the ",(0,a.jsx)(n.code,{children:"ping-pong"})," Radio and examine how they interact with each other in the terminal logs."]}),"\n",(0,a.jsx)(n.p,{children:"Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! \ud83e\udd42 From here on out, the only limit to the Radios you can build is your own imagination."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);