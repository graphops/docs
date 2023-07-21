---
sidebar_position: 2
---

# Radio Development

Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.

For a more complex and full example of the Graphcast SDK being used to create a Subgraph Radio, take a look at this [repo](https://github.com/graphops/subgraph-radio).

## A simple ping pong example

Let's take a look at the simplest possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends `Ping`, all the others in the network are listening on the ping pong topic will send `Pong` back. Pretty straightforward.

### Register a Graphcast ID

We recommend that you register a Graphcast ID for your on-chain Indexer address. You can learn what a Graphcast ID is and how to register one [here](https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id).

Once you complete those steps you will have a Graphcast ID that is authorized to sign messages on behalf of your Indexer.

### Populate your `.env` file

You now need to export a few environment variables:

| Name                | Description and examples                                                                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PRIVATE_KEY`       | Private key to the Graphcast ID wallet or Indexer Operator wallet (Precendence over `MNEMONICS`).<br/>Example: `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef` |
| `REGISTRY_SUBGRAPH` | URL to the Graphcast Registry subgraph for your network. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                     |
| `NETWORK_SUBGRAPH`  | URL to the Graph Network subgraph. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                                           |
| `GRAPHCAST_NETWORK` | The Graphcast Messaging fleet and pubsub namespace to use. For this example you should use `testnet`                                                                                |

### A few dependencies

Make sure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Go](https://go.dev/doc/install)
- Build tools (e.g. the `build-essentials` package for Debian-based Linux distributions or [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) for MacOS)
- C compiler (e.g. the `clang` package for Debian-based Linux distribution or [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) for MacOS)
- OpenSSL (e.g. the `libssl-dev` package for Debian-based Linux distribution or `openssl` for MacOS)
- PostreSQL libraries and headers (e.g. the `libpq-dev` package for Debian-based Linux distribution or `postgresql` for MacOS)

Start off with a new Rust project (`cargo new ping-pong`). Then add the following dependencies to you `Cargo.toml` file:

```Rust
[dependencies]
graphcast-sdk = "0.4.0"
once_cell = "1.15"
tokio = { version = "1.1.1", features = ["full"] }
anyhow = "1.0.39"
ethers = "1.0.0"
dotenv = "0.15.0"
tracing = "0.1"
ethers-contract = "1.0.0"
ethers-core = "1.0.0"
ethers-derive-eip712 = "1.0.0"
prost = "0.11"
serde = "1.0.147"
serde_derive = "1.0.114"
```

### The imports

Open your `main.rs` file and add the following imports:

```Rust
// For date and time utils
use chrono::Utc;

// Load environment variables from .env file
use dotenv::dotenv;

// Import Arc and Mutex for thread-safe sharing of data across threads
use std::sync::{Arc, Mutex};

// Import Graphcast SDK types and functions for agent configuration, message handling, and more
use graphcast_sdk::graphcast_agent::{GraphcastAgent, GraphcastAgentConfig};

// Import sleep and Duration for handling time intervals and thread delays
use std::{thread::sleep, time::Duration};

// Import AsyncMutex for asynchronous mutual exclusion of shared resources
use tokio::sync::Mutex as AsyncMutex;

// Import tracing macros for logging and diagnostic purposes
use tracing::{debug, error, info, trace};

// Import SimpleMessage from the crate's types module
use types::SimpleMessage;

// Import Config from the crate's config module
use config::Config;

use crate::types::{GRAPHCAST_AGENT, MESSAGES};

// Include the local config and types modules
mod config;
mod types;
```

### Structure

Everything we need will be inside the `main()` function. And since we'll be using async code we have to annotate it with `#[tokio::main]`, we can start off with something as simple as:

```Rust
#[tokio::main]
async fn main() {
  // TODO: Radio logic
}
```

Before diving into the contents of the `main` function, let's quickly populate the other two files we need - `config.rs` and `types.rs`.

Let's take a look at types.rs first:

```Rust
use async_graphql::SimpleObject;
use ethers_contract::EthAbiType;
use ethers_core::types::transaction::eip712::Eip712;
use ethers_derive_eip712::*;
use graphcast_sdk::graphcast_agent::GraphcastAgent;
use prost::Message;
use serde::{Deserialize, Serialize};

// Import the OnceCell container for lazy initialization of global/static data
use once_cell::sync::OnceCell;
use std::sync::{Arc, Mutex};

/// A global static (singleton) instance of A GraphcastMessage vector.
/// It is used to save incoming messages after they've been validated, in order
/// defer their processing for later, because async code is required for the processing but
/// it is not allowed in the handler itself.
pub static MESSAGES: OnceCell<Arc<Mutex<Vec<SimpleMessage>>>> = OnceCell::new();

/// The Graphcast Agent instance must be a global static variable (for the time being).
/// This is because the Radio handler requires a static immutable context and
/// the handler itself is being passed into the Graphcast Agent, so it needs to be static as well.
pub static GRAPHCAST_AGENT: OnceCell<GraphcastAgent> = OnceCell::new();

/// Make a test radio type
#[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize, SimpleObject)]
#[eip712(
    name = "Graphcast Ping-Pong Radio",
    version = "0",
    chain_id = 1,
    verifying_contract = "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
)]
pub struct SimpleMessage {
    #[prost(string, tag = "1")]
    pub identifier: String,
    #[prost(string, tag = "2")]
    pub content: String,
}

impl SimpleMessage {
    pub fn new(identifier: String, content: String) -> Self {
        SimpleMessage {
            identifier,
            content,
        }
    }

    pub fn radio_handler(&self) {
        MESSAGES
            .get()
            .expect("Could not retrieve messages")
            .lock()
            .expect("Could not get lock on messages")
            .push(self.clone());
    }
}

```

`SimpleMessage` defines the structure that all messages for this Radio must follow.

`RadioPayloadMessage` is decorated with several macros - #[derive(Eip712, EthAbiType, Clone, Message, Serialize, Deserialize)], which automatically implement certain traits that are required by the SDK.

The `#[eip712]` macro is used to define information that is used in EIP-712, a standard for structuring typed data in Ethereum transactions.

Now let's see the `config.rs` file:

```Rust
use clap::Parser;
use ethers::signers::WalletError;
use graphcast_sdk::build_wallet;
use graphcast_sdk::graphcast_agent::message_typing::IdentityValidation;
use graphcast_sdk::init_tracing;
use graphcast_sdk::wallet_address;
use serde::{Deserialize, Serialize};
use tracing::info;

#[derive(Clone, Debug, Parser, Serialize, Deserialize)]
#[clap(
    name = "ping-pong-radio",
    about = "A simple example for using the Graphcast SDK to build Radios",
    author = "GraphOps"
)]
pub struct Config {
    #[clap(
        long,
        value_name = "ENDPOINT",
        env = "GRAPH_NODE_STATUS_ENDPOINT",
        help = "API endpoint to the Graph Node Status Endpoint"
    )]
    pub graph_node_endpoint: Option<String>,
    #[clap(
        long,
        value_name = "KEY",
        value_parser = Config::parse_key,
        env = "PRIVATE_KEY",
        hide_env_values = true,
        help = "Private key to the Graphcast ID wallet (Precendence over mnemonics)",
    )]
    pub private_key: Option<String>,
    #[clap(
        long,
        value_name = "KEY",
        value_parser = Config::parse_key,
        env = "MNEMONIC",
        hide_env_values = true,
        help = "Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of private key or mnemonic is needed)",
    )]
    pub mnemonic: Option<String>,
    #[clap(
        long,
        value_name = "SUBGRAPH",
        env = "REGISTRY_SUBGRAPH",
        help = "Subgraph endpoint to the Graphcast Registry",
        default_value = "https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli"
    )]
    pub registry_subgraph: String,
    #[clap(
        long,
        value_name = "INDEXER_ADDRESS",
        env = "INDEXER_ADDRESS",
        help = "Graph account corresponding to Graphcast operator"
    )]
    pub indexer_address: String,
    #[clap(
        long,
        value_name = "SUBGRAPH",
        env = "NETWORK_SUBGRAPH",
        help = "Subgraph endpoint to The Graph network subgraph",
        default_value = "https://gateway.testnet.thegraph.com/network"
    )]
    pub network_subgraph: String,
    #[clap(
        long,
        value_name = "LOG_FORMAT",
        env = "LOG_FORMAT",
        help = "Support logging formats: pretty, json, full, compact",
        long_help = "pretty: verbose and human readable; json: not verbose and parsable; compact:  not verbose and not parsable; full: verbose and not parsible",
        possible_values = ["pretty", "json", "full", "compact"],
        default_value = "full"
    )]
    pub log_format: String,
    #[clap(
        long,
        value_name = "ID_VALIDATION",
        value_enum,
        env = "ID_VALIDATION",
        default_value = "valid-address",
        help = "Identity validation mechanism for senders (message signers)",
        long_help = "Identity validation mechanism for senders (message signers)\n
        no-check: all messages signer is valid, \n
        valid-address: signer needs to be an valid Eth address, \n
        graphcast-registered: must be registered at Graphcast Registry, \n
        graph-network-account: must be a Graph account, \n
        registered-indexer: must be registered at Graphcast Registry, correspond to and Indexer statisfying indexer minimum stake requirement, \n
        indexer: must be registered at Graphcast Registry or is a Graph Account, correspond to and Indexer statisfying indexer minimum stake requirement"
    )]
    pub id_validation: IdentityValidation,
}

impl Config {
    /// Parse config arguments
    pub fn args() -> Self {
        // TODO: load config file before parse (maybe add new level of subcommands)
        let config = Config::parse();
        init_tracing(config.log_format.clone()).expect("Could not set up global default subscriber for logger, check environmental variable `RUST_LOG` or the CLI input `log-level`");
        config
    }

    /// Validate that private key as an Eth wallet
    fn parse_key(value: &str) -> Result<String, WalletError> {
        // The wallet can be stored instead of the original private key
        let wallet = build_wallet(value)?;
        let addr = wallet_address(&wallet);
        info!(address = addr, "Resolved Graphcast id");
        Ok(String::from(value))
    }
}
```

This file defines the `Config` struct and its associated methods for handling configuration options of our Radio. This outlines the basic configuration that all Radios have to define.

The configuration options can be provided through command-line arguments, environment variables, or a combination of both. The `Config` struct parses and validates these options, it also initializes the tracing system for logging purposes.

#### Methods

- `args()`: Parses and returns the configuration options from command-line arguments and environment variables.
- `parse_key(value: &str)`: Validates a given private key by attempting to create an Ethereum wallet with it. Returns the private key as a string if successful.

### Instantiate the essentials

From here on, all following code will be in the `main` function. To start off, we define a name for our Radio, read the provided environment variables and instantiate our configuration struct.

```Rust
// This can be any string
let radio_name = "ping-pong".to_string();
// Loads the environment variables from .env
dotenv().ok();

// Instantiates the configuration struct based on provided environment variables or CLI args
let config = Config::args();
let _parent_span = tracing::info_span!("main").entered();
```

Now let's instantiate a few variables that will do all the heavy lifting for us.

```Rust
// Subtopics are optionally provided and used as the content topic identifier of the message subject,
// if not provided then they are usually generated based on indexer allocations
let subtopics: Vec<String> = vec!["ping-pong-content-topic".to_string()];

// GraphcastAgentConfig defines the configuration that the SDK expects from all Radios, regardless of their specific functionality
let graphcast_agent_config = GraphcastAgentConfig::new(
    config.private_key.expect("No private key provided"),
    config.indexer_address,
    radio_name,
    config.registry_subgraph,
    config.network_subgraph,
    config.id_validation.clone(),
    config.graph_node_endpoint,
    None,
    Some("testnet".to_string()),
    Some(subtopics),
    None,
    None,
    None,
    None,
    Some(true),
    // Example ENR address
    Some(vec![String::from("enr:-JK4QBcfVXu2YDeSKdjF2xE5EDM5f5E_1Akpkv_yw_byn1adESxDXVLVjapjDvS_ujx6MgWDu9hqO_Az_CbKLJ8azbMBgmlkgnY0gmlwhAVOUWOJc2VjcDI1NmsxoQOUZIqKLk5xkiH0RAFaMGrziGeGxypJ03kOod1-7Pum3oN0Y3CCfJyDdWRwgiMohXdha3UyDQ")]),
    None,
)
.await
.unwrap_or_else(|e| panic!("Could not create GraphcastAgentConfig: {e}"));
```

`GraphcastAgentConfig` takes in an optional vector for content topics. Here we explicitly provide a singleton vector of "ping-pong-content-topic", but you can define topics based on the radio's use case needs. If you leave the field as None, then the agent will automatically fetch your indexer's active allocations and create a list of topics in the format of `radio application name` + the allocated subgraph deployments' IPFS hash.

Next, we will instantiate a `GraphcastAgent`:

```Rust
debug!("Initializing the Graphcast Agent");
let (graphcast_agent, waku_msg_receiver) = GraphcastAgent::new(graphcast_agent_config)
    .await
    .expect("Could not create Graphcast agent");
```

`GraphcastAgent` is the main struct through which the Radios communicate with the SDK.

And lastly for the setup part, we need to run two one-off setters for `GraphcastAgent` and for the incoming messages store:

```Rust
// A one-off setter to load the Graphcast Agent into the global static variable
_ = GRAPHCAST_AGENT.set(graphcast_agent);

// A one-off setter to instantiate an empty vec before populating it with incoming messages
_ = MESSAGES.set(Arc::new(Mutex::new(vec![])));
```

Awesome, we're all set to start with the actual Radio logic now!

### Sending messages

We'll define a helper function that holds the logic of sending messages to the Graphcast network:

```Rust
// Helper function to reuse message sending code
async fn send_message(payload: SimpleMessage) {
    if let Err(e) = GRAPHCAST_AGENT
        .get()
        .expect("Could not retrieve Graphcast agent")
        .send_message(
            // The identifier can be any string that suits your Radio logic
            // If it doesn't matter for your Radio logic (like in this case), you can just use a UUID or a hardcoded string
            "ping-pong-content-topic",
            payload,
            Utc::now().timestamp(),
        )
        .await
    {
        error!(error = tracing::field::debug(&e), "Failed to send message");
    };
}
```

Again, the `identifier` that we define as `ping-pong-content-topic` can be any string that suits your Radio logic, if it doesn't really matter for your use case (like in the ping-pong Radio case) you can just use a UUID or a hardcoded string.

### Receiving and handling messages

We now know how to send message, but how do we receive and handle message from other network participants?

After `GossipAgent` validates the incoming messages, we provide a custom callback handler that specifies what to do with the message. In this handler we cache the message for later aggregation and processing, but depending on your Radio use case you are free any data storage option - a database, a custom data structure or a simple vector.

Here is a simple handler that does just that:

```Rust
// The handler specifies what to do with incoming messages.
// This is where you can define multiple message types and how they gets handled by the radio
// by chaining radio payload typed decode and handler functions
tokio::spawn(async move {
    for msg in waku_msg_receiver {
        trace!(
            "Radio operator received a Waku message from Graphcast agent, now try to fit it to Graphcast Message with Radio specified payload"
        );
        let _ = GRAPHCAST_AGENT
            .get()
            .expect("Could not retrieve Graphcast agent")
            .decoder::<SimpleMessage>(msg.payload())
            .await
            .map(|msg| {
                msg.payload.radio_handler();
            })
            .map_err(|err| {
                error!(
                    error = tracing::field::debug(&err),
                    "Failed to handle Waku signal"
                );
                err
            });
    }
});

GRAPHCAST_AGENT
    .get()
    .expect("Could not retrieve Graphcast agent")
    .register_handler()
    .expect("Could not register handler");
```

### The main loop

Great, we're almost there! We have a way to pass messages back and forth 🏓. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use a block number as cue.

We'll start listening to Ethereum blocks coming from the Graph Node and on each block we'll do a simple check - if the block number is even we'll send a "Ping" message, and if it's odd we'll process the messages we've received. After processing the messages we'll clear our store.

```Rust
let mut block_number = 0;

loop {
    block_number += 1;
    info!(block = block_number, "🔗 Block number");
    if block_number & 2 == 0 {
        // If block number is even, send ping message
        let msg = SimpleMessage::new(
            "table".to_string(),
            std::env::args().nth(1).unwrap_or("Ping".to_string()),
        );
        send_message(msg).await;
    } else {
        // If block number is odd, process received messages
        let messages = AsyncMutex::new(
            MESSAGES
                .get()
                .expect("Could not retrieve messages")
                .lock()
                .expect("Could not get lock on messages"),
        );
        for msg in messages.lock().await.iter() {
            if msg.content == *"Ping" {
                let replay_msg = SimpleMessage::new("table".to_string(), "Pong".to_string());
                send_message(replay_msg).await;
            };
        }

        // Clear message store after processing
        messages.lock().await.clear();
    }

    // Wait before next block check
    sleep(Duration::from_secs(5));
}
```

### The finished Radio

Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in [this repo](https://github.com/graphops/graphcast-sdk/tree/main/examples/ping-pong), the only important difference is in the dependencies.

### That's awesome. But how do we run it?

You can start up the ping-pong Radio using `cargo run`.

You can spawn more instances of the `ping-pong` Radio and examine how they interact with each other in the terminal logs.

Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! 🥂 From here on out, the only limit to the Radios you can build is your own imagination.
