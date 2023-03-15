"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},s="\ud83e\uddd1\u200d\ud83d\udcbb Radio Development",r={unversionedId:"graphcast/sdk/radio-dev",id:"graphcast/sdk/radio-dev",title:"\ud83e\uddd1\u200d\ud83d\udcbb Radio Development",description:"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.",source:"@site/docs/graphcast/sdk/radio-dev.md",sourceDirName:"graphcast/sdk",slug:"/graphcast/sdk/radio-dev",permalink:"/graphcast/sdk/radio-dev",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/sdk/radio-dev.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gnSidebar",previous:{title:"\ud83d\udc4b Introduction",permalink:"/graphcast/sdk/intro"},next:{title:"\ud83d\udcdf POI Radio",permalink:"/graphcast/radios/poi-radio"}},l={},d=[{value:"A simple ping pong example",id:"a-simple-ping-pong-example",level:2},{value:"Register an operator address",id:"register-an-operator-address",level:3},{value:"Populate your <code>.env</code> file",id:"populate-your-env-file",level:3},{value:"A few dependencies",id:"a-few-dependencies",level:3},{value:"The imports",id:"the-imports",level:3},{value:"Structure",id:"structure",level:3},{value:"Instantiate the essentials",id:"instantiate-the-essentials",level:3},{value:"Sending messages",id:"sending-messages",level:3},{value:"Receiving and handling messages",id:"receiving-and-handling-messages",level:3},{value:"The main loop",id:"the-main-loop",level:3},{value:"The finished Radio",id:"the-finished-radio",level:3},{value:"That&#39;s awesome. But how do we run it?",id:"thats-awesome-but-how-do-we-run-it",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-radio-development"},"\ud83e\uddd1\u200d\ud83d\udcbb Radio Development"),(0,o.kt)("p",null,"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network."),(0,o.kt)("p",null,"For a more complex and full example of the Graphcast SDK being used to create a POI Radio, take a look at this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphops/poi-radio"},"implementation in the POC repo"),"."),(0,o.kt)("h2",{id:"a-simple-ping-pong-example"},"A simple ping pong example"),(0,o.kt)("p",null,"Let's take a look at the simples possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends ",(0,o.kt)("inlineCode",{parentName:"p"},"Ping"),", all the others in the network are listening on the ping pong topic will send ",(0,o.kt)("inlineCode",{parentName:"p"},"Pong")," back. Pretty straightforward."),(0,o.kt)("h3",{id:"register-an-operator-address"},"Register an operator address"),(0,o.kt)("p",null,"First things first - before you can run any Radio on Graphcast, you need to register a Graphcast operator address for your on-chain Indexer address."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can connect a Graphcast Operator address to your Indexer address (with a 1:1 relationship) using our very own ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0xBFdA8191D1ec09bB8ADc138DAbf413d00DAfb6c8"},"Registry contract")," (on Goerli). You need to use your Indexer wallet to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"setGossipOperator")," function, providing the address you wish to use as an operator.")),(0,o.kt)("p",null,"Once that's done, you can start building your very first Radio."),(0,o.kt)("h3",{id:"populate-your-env-file"},"Populate your ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," file"),(0,o.kt)("p",null,"You now need to export two environment variables, ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_NODE")," (url to an Ethereum node) and ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," (your operator address private key)."),(0,o.kt)("p",null,"Please use a Goerli ETH node for this example (doesn't need to be a full node)."),(0,o.kt)("h3",{id:"a-few-dependencies"},"A few dependencies"),(0,o.kt)("p",null,"Make sure you have the following installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")),(0,o.kt)("li",{parentName:"ul"},"Build tools (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"build-essentials")," package for Debian-based Linux distributions or ",(0,o.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"C compiler (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"clang")," package for Debian-based Linux distribution or ",(0,o.kt)("a",{parentName:"li",href:"https://mac.install.guide/commandlinetools/index.html"},"Xcode Command Line Tools")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"OpenSSL (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"libssl-dev")," package for Debian-based Linux distribution or ",(0,o.kt)("inlineCode",{parentName:"li"},"openssl")," for MacOS)"),(0,o.kt)("li",{parentName:"ul"},"PostreSQL libraries and headers (e.g. the ",(0,o.kt)("inlineCode",{parentName:"li"},"libpq-dev")," package for Debian-based Linux distribution or ",(0,o.kt)("inlineCode",{parentName:"li"},"postgresql")," for MacOS)")),(0,o.kt)("p",null,"Start off with a new Rust project (",(0,o.kt)("inlineCode",{parentName:"p"},"cargo new ping-pong"),"). Then add the following dependencies to you ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[dependencies]\ngraphcast_sdk = { package = "graphcast-sdk", git = "https://github.com/graphops/graphcast-sdk" }\nonce_cell = "1.15"\ntokio = { version = "1.1.1", features = ["full"] }\nanyhow = "1.0.39"\nethers = "1.0.0"\ndotenv = "0.15.0"\ntracing = "0.1"\nethers-contract = "1.0.0"\nethers-core = "1.0.0"\nethers-derive-eip712 = "1.0.0"\nprost = "0.11"\nserde = "1.0.147"\nserde_derive = "1.0.114"\n')),(0,o.kt)("h3",{id:"the-imports"},"The imports"),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," file and add the following imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"// These allow for communicating with Ethereum nodes using the JSON-RPC protocol over HTTP\nuse ethers::{\n    providers::{Http, Middleware, Provider},\n    types::U64,\n};\n\n// This is used for encoding/decoding structs to/from Ethereum ABI\nuse ethers_contract::EthAbiType;\n\n// This is used for encoding structs following EIP-712 standard\nuse ethers_core::types::transaction::eip712::Eip712;\n\n// This is used to automatically derive EIP-712 implementation for structs\nuse ethers_derive_eip712::*;\n\n// This is used to automatically implement protobuf encoding/decoding for structs\nuse prost::Message;\n\n// This is used to automatically implement serialization/deserialization for structs\nuse serde::{Deserialize, Serialize};\n\n// Provides the main structs that are used to create, send, receive and keep track of messages and other global state\nuse graphcast_sdk::{gossip_agent::{message_typing::GraphcastMessage, GossipAgent}, init_tracing};\n\n// The OnceCell struct which can be used to ensure that a value is initialized only once and can be safely shared between threads\nuse once_cell::sync::OnceCell;\n\n// This provides functions for interacting with the environment, such as getting and setting environment variables\nuse std::env;\n\n// Provides the Arc and Mutex structs which can be used for shared memory concurrency\nuse std::sync::{Arc, Mutex};\n\n// The leep function which can be used to make the current thread sleep for a specified duration and the Duration struct which can be used to represent time intervals\nuse std::{thread::sleep, time::Duration};\n\n// Provides the AsyncMutex struct which is an asynchronous version of the Mutex struct and can be used for shared memory concurrency in asynchronous contexts\nuse tokio::sync::Mutex as AsyncMutex;\n\n// The `tracing` crate provides macros for structured logging\nuse tracing::error;\n\n// To handle environment variables defined in .env\nuse dotenv::dotenv;\n")),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Everything we need will be inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function. And since we'll be using async code we have to annotate it with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[tokio::main]"),", we can start off with something as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#[tokio::main]\nasync fn main() {\n  // TODO: Radio logic\n}\n")),(0,o.kt)("p",null,"Above the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function, we can define the type of message that our Radio will use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'#[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize)]\n#[eip712(\n    name = "Graphcast Ping-Pong Radio",\n    version = "0",\n    chain_id = 1,\n    verifying_contract = "0xc944e90c64b2c07662a292be6244bdf05cda44a7"\n)]\npub struct RadioPayloadMessage {\n    #[prost(string, tag = "1")]\n    pub identifier: String,\n    #[prost(string, tag = "2")]\n    pub content: String,\n}\n\nimpl RadioPayloadMessage {\n    pub fn new(identifier: String, content: String) -> Self {\n        RadioPayloadMessage {\n            identifier,\n            content,\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This is the general structure that the Graphcast SDK expects from a type that will be used as a Radio payload."),(0,o.kt)("p",null,"The struct is decorated with several macros - #","[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize)]",", which automatically implement certain traits that are required in the SDK."),(0,o.kt)("p",null,"The #","[eip712]"," macro is used to define information that is used in EIP-712, a standard for structuring typed data in Ethereum transactions."),(0,o.kt)("p",null,"All following code will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,o.kt)("h3",{id:"instantiate-the-essentials"},"Instantiate the essentials"),(0,o.kt)("p",null,"First off, call these two functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"// Loads the environment variables from our .env file\ndotenv().ok();\n\n// Enables tracing, you can set your preferred log level in your .env file\n// You can choose one of: TRACE, DEBUG, INFO, WARN, ERROR\n// If none is provided, defaults to INFO\ninit_tracing();\n")),(0,o.kt)("p",null,"Now let's instantiate a few variables that will do all the heavy lifting for us."),(0,o.kt)("p",null,"First is the vector we'll use to store incoming messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"pub static MESSAGES: OnceCell<Arc<Mutex<Vec<GraphcastMessage<RadioPayloadMessage>>>>> =\n    OnceCell::new();\n")),(0,o.kt)("p",null,"This vector keeps tracks of already validated messages and allows Radios to freely process the messages separately (at a later time, not at the exact time that they are received)."),(0,o.kt)("p",null,"Next is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"pub static GOSSIP_AGENT: OnceCell<GossipAgent> = OnceCell::new();\n")),(0,o.kt)("p",null,"This is also a global static definition, because the Radio handler requires a static immutable context and the handler itself is being passed into the GossipAgent, so it needs to be static as well."),(0,o.kt)("p",null,"We also need to load our environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'let private_key = env::var("PRIVATE_KEY").expect("No operator private key provided.");\nlet eth_node = env::var("ETH_NODE").expect("No ETH URL provided.");\n')),(0,o.kt)("p",null,"Using the Ethereum node we can now set up a provider instance that will help us read on-chain data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"let provider: Provider<Http> = Provider::<Http>::try_from(eth_node.clone()).unwrap();\n")),(0,o.kt)("p",null,"Next, we will set our Radio name (can be any string) and instantiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'// This can be any string\nlet radio_name: &str = "ping-pong";\n\n/// A constant defining the goerli registry subgraph endpoint.\npub const REGISTRY_SUBGRAPH: &str =\n    "https://api.thegraph.com/subgraphs/name/hopeyen/gossip-registry-test";\n\n/// A constant defining the goerli network subgraph endpoint.\npub const NETWORK_SUBGRAPH: &str = "https://gateway.testnet.thegraph.com/network";\n\nlet gossip_agent = GossipAgent::new(\n    // private_key resolves into ethereum wallet and indexer identity.\n    private_key,\n    eth_node,\n    // radio_name is used as part of the content topic for the radio application\n    radio_name,\n    REGISTRY_SUBGRAPH,\n    NETWORK_SUBGRAPH,\n    // subtopic optionally provided and used as the content topic identifier of the message subject,\n    // if not provided then they are generated based on indexer allocations\n    Some(vec!["ping-pong-content-topic"]),\n    // Waku node address is set up by optionally providing a host and port, and an advertised address to be connected among the waku peers\n    // Advertised address can be any multiaddress that is self-describing and support addresses for any network protocol (tcp, udp, ip; tcp6, udp6, ip6 for IPv6)\n    None,\n    None,\n    None,\n)\n.await\n.unwrap();\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent")," takes in an optional vector for content topics. Here we explicitly provide a singleton vector of \"ping-pong-content-topic\", but you can define topics based on the radio's use case needs. If you leave the field as None, then the agent will automatically fetch your indexer's active allocations and create a list of topics in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"radio application name")," + the allocated subgraph deployments' IPFS hash."),(0,o.kt)("p",null,"And lastly for the setup part, we need to run two one-off setters for ",(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent")," and for the incomingthe messages store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},"_ = GOSSIP_AGENT.set(gossip_agent);\n_ = MESSAGES.set(Arc::new(Mutex::new(vec![])));\n")),(0,o.kt)("p",null,"Awesome, we're all set to start with the actual Radio logic now!"),(0,o.kt)("h3",{id:"sending-messages"},"Sending messages"),(0,o.kt)("p",null,"We'll define a helper function that holds the logic of sending messages to the Graphcast network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'async fn send_message(payload: Option<RadioPayloadMessage>, block_number: u64) {\n        match GOSSIP_AGENT\n            .get()\n            .unwrap()\n            .send_message(\n                "ping-pong-content-topic".to_string(),\n                block_number,\n                payload,\n            )\n            .await\n        {\n            Ok(sent) => println!("Sent message id:: {}", sent),\n            Err(e) => println!("Failed to send message: {}", e),\n        };\n    }\n')),(0,o.kt)("p",null,"Again, the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," that we define as ",(0,o.kt)("inlineCode",{parentName:"p"},"ping-pong-content-topic")," can be any string that suits your Radio logic, if it doesn't really matter for your use case (like in the ping-pong Radio case) you can just use a UUID or a hardcoded string."),(0,o.kt)("h3",{id:"receiving-and-handling-messages"},"Receiving and handling messages"),(0,o.kt)("p",null,"We now know how to send message, but how do we receive and handle message from other network participants?"),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"GossipAgent")," validates the incoming messages, we provide a custom callback handler that specifies what to do with the message. In this handler we cache the message for later aggregation and processing, but depending on your Radio use case you are free any data storage option - a database, a custom data structure or a simple vector."),(0,o.kt)("p",null,"Here is a simple handler that does just that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'let radio_handler = |msg: Result<GraphcastMessage<RadioPayloadMessage>, anyhow::Error>| match msg {\n        Ok(msg) => {\n            println!("New message received! {:?}\\n Saving to message store.", msg);\n            MESSAGES.get().unwrap().lock().unwrap().push(msg);\n        }\n        Err(err) => {\n            println!("{}", err);\n        }\n    };\n\nGOSSIP_AGENT\n    .get()\n    .unwrap()\n    .register_handler(Arc::new(Mutex::new(radio_handler)));\n')),(0,o.kt)("h3",{id:"the-main-loop"},"The main loop"),(0,o.kt)("p",null,"Great, we're almost there! We have a way to pass messages back and forth \ud83c\udfd3. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use the Ethereum block number as cue."),(0,o.kt)("p",null,"We'll start listening to Ethereum blocks and on each block we'll do a simple check - if the block number is even we'll send a \"Ping\" message, and if it's odd we'll process the messages we've received. After processing the messages we'll clear our store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Rust"},'loop {\n    let block_number = U64::as_u64(&provider.get_block_number().await.unwrap());\n    debug!("\ud83d\udd17 Block number: {}", block_number);\n\n    if block_number & 2 == 0 {\n        let msg = RadioPayloadMessage::new("table".to_string(), "Ping".to_string());\n        // If block number is even, send ping message\n        send_message(Some(msg), block_number).await;\n    } else {\n        // If block number is odd, process received messages\n        let messages = AsyncMutex::new(MESSAGES.get().unwrap().lock().unwrap());\n        for msg in messages.lock().await.iter() {\n            let payload = msg\n                .payload\n                .as_ref()\n                .expect("Could not get radio payload payload");\n            if *payload.content == *"Ping" {\n                let replay_msg =\n                    RadioPayloadMessage::new("table".to_string(), "Pong".to_string());\n                send_message(Some(replay_msg), block_number).await;\n            };\n        }\n\n        // Clear message store after processing\n        messages.lock().await.clear();\n    }\n\n    sleep(Duration::from_secs(5));\n}\n')),(0,o.kt)("h3",{id:"the-finished-radio"},"The finished Radio"),(0,o.kt)("p",null,"Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphops/graphcast-sdk/tree/main/examples/ping-pong"},"this repo"),", the only important difference is in the dependencies."),(0,o.kt)("h3",{id:"thats-awesome-but-how-do-we-run-it"},"That's awesome. But how do we run it?"),(0,o.kt)("p",null,"You can start up the ping-pong Radio using ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo run"),"."),(0,o.kt)("p",null,"You can spawn more instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ping-pong")," Radio and examine how they interact with each other in the terminal logs."),(0,o.kt)("p",null,"Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! \ud83e\udd42 From here on out, the only limit to the Radios you can build is your own imagination."))}c.isMDXComponent=!0}}]);