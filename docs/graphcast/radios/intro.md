---
sidebar_position: 1
---

# 🧑‍💻 Radio Development

Do you want to build robust, peer-to-peer messaging apps that automatically exchanges valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.

:::warning
As of today, the Graphcast SDK is not published to [crates.io](https://crates.io), but the examples below will clearly illustrate how functions and structs would be imported from it and used once it gets published. It should be treated as pseudocode for the time being and will not work properly if you try to run it on its own.
:::

For a more complex and full example of the Graphcast SDK being used to create a POI Radio, take a look at this [implementation in the POC repo](https://github.com/graphops/poi-radio).

## A simple ping pong example

Let's take a look at the simples possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends `Ping`, all the others in the network are listening on the ping pong topic will send `Pong` back. Pretty straightforward.

### Register an operator address

First things first - before you can run any Radio on Graphcast, you need to register an operator address for your on-chain Indexer address. You can do that by using our [Registry smart contract](https://goerli.etherscan.io/address/0x1e408c2cf66fd3afcea0f49dc44c9f4db5575e79) (on the Goerli network).

:::tip
The easiest way to do that is through [Remix](https://remix.ethereum.org/) (you can check out [this guide](https://medium.com/blockchain-stories/interacting-with-an-ethereum-smart-contract-aa14401c30a0)). You need to use your Indexer wallet to call the `setGossipOperator` function, providing the address you wish to use as an operator (in all lower-case characters). You can find the contract abi [here](https://github.com/graphops/graphcast-poc/blob/main/registryAbi.json).
:::

Once that's done, you can start building your very first Radio.

### Populate your `.env` file

You now need to export two environment variables, `ETH_NODE` (url to an Ethereum node) and `PRIVATE_KEY` (your operator address private key).

Please use a Goerli ETH node for this example (doesn't need to be a full node).

### A few dependencies

Start off with a new Rust project (`cargo new ping-pong`). Then add the following dependencies to you `Cargo.toml` file:

```
[dependencies]
graphcast_sdk = "0.0.1"
once_cell = "1.15"
tokio = { version = "1.1.1", features = ["full"] }
anyhow = "1.0.39"
ethers = "1.0.0"
```

### The imports

Open your `main.rs` file and add the following imports:

```Rust
//These allow for communicating with Ethereum nodes using the JSON-RPC protocol over HTTP
use ethers::{
    providers::{Http, Middleware, Provider},
    types::U64,
};

//Provides the main structs that are used to create, send, receive and keep track of messages and other global state
use graphcast_sdk::gossip_agent::{message_typing::GraphcastMessage, GossipAgent};

//The OnceCell struct which can be used to ensure that a value is initialized only once and can be safely shared between threads
use once_cell::sync::OnceCell;

//This provides functions for interacting with the environment, such as getting and setting environment variables
use std::env;

//Provides the Arc and Mutex structs which can be used for shared memory concurrency
use std::sync::{Arc, Mutex};

//The leep function which can be used to make the current thread sleep for a specified duration and the Duration struct which can be used to represent time intervals
use std::{thread::sleep, time::Duration};

//Provides the AsyncMutex struct which is an asynchronous version of the Mutex struct and can be used for shared memory concurrency in asynchronous contexts
use tokio::sync::Mutex as AsyncMutex;


```

### Structure

Everything we need will be inside the `main()` function. And since we'll be using async code we have to annotate it with `#[tokio::main]`, we can start off with something as simple as:

```
#[tokio::main]
async fn main() {
  // TODO: Radio logic
}
```

### Instantiate the essentials

Let's instantiate a few variables that will do all the heavy lifting for us.

First is the vector we'll use to store incoming messages:

```Rust
pub static MESSAGES: OnceCell<Arc<Mutex<Vec<GraphcastMessage>>>> = OnceCell::new();
```

This vector keeps tracks of already validated messages and allows Radios to freely process the messages separately (at a later time, not at the exact time that they are received).

Next is an instance of `GossipAgent`:
dddd

```Rust
pub static GOSSIP_AGENT: OnceCell<GossipAgent> = OnceCell::new();
```

This is also a global static definition, because the Radio handler requires a static immutable context and the handler itself is being passed into the GossipAgent, so it needs to be static as well.

We also need to load our environment variables:

```Rust
let private_key = env::var("PRIVATE_KEY").expect("No operator private key provided.");
let eth_node = env::var("ETH_NODE").expect("No ETH URL provided.");
```

Using the Ethereum node we can now set up a provider instance that will help us read on-chain data:

```Rust
let provider: Provider<Http> = Provider::<Http>::try_from(eth_node.clone()).unwrap();
```

Next, we will set our Radio name (can be any string) and instantiate a `GossipAgent`:

```Rust
let radio_name: &str = "ping-pong";

let gossip_agent = GossipAgent::new(
    private_key,
    eth_node,
    radio_name,
    Some(vec!["ping-pong-content-topic"]),
    None,
    None
)
.await
.unwrap();
```

`GossipAgent` takes in an optional vector for content topics. Here we explicitly provide a singleton vector of "ping-pong-content-topic", but you can define topics based on the radio's use case needs. If you leave the field as None, then the agent will automatically fetch your indexer's active allocations and create a list of topics in the format of `radio application name` + the allocated subgraph deployments' IPFS hash.

And lastly for the setup part, we need to run two one-off setters for `GossipAgent` and for the incomingthe messages store:

```Rust
_ = GOSSIP_AGENT.set(gossip_agent);
_ = MESSAGES.set(Arc::new(Mutex::new(vec![])));
```

Awesome, we're all set to start with the actual Radio logic now!

### Sending messages

We'll define a helper function that holds the logic of sending messages to the Graphcast network:

```Rust
async fn send_message(content: String, block_number: u64) {
        match GOSSIP_AGENT
            .get()
            .unwrap()
            .send_message(
                "ping-pong-content-topic".to_string(),
                block_number,
                content,
            )
            .await
        {
            Ok(sent) => println!("Sent message id:: {}", sent),
            Err(e) => println!("Failed to send message: {}", e),
        };
    }
```

Again, the `identifier` that we define as `ping-pong-content-topic` can be any string that suits your Radio logic, if it doesn't really matter for your use case (like in the ping-pong Radio case) you can just use a UUID or a hardcoded string.

### Receiving and handling messages

We now know how to send message, but how do we receive and handle message from other network participants?

After `GossipAgent` validates the incoming messages, we provide a custom callback handler that specifies what to do with the message. In this handler we cache the message for later aggregation and processing, but depending on your Radio use case you are free any data storage option - a database, a custom data structure or a simple vector.

Here is a simple handler that does just that:

```Rust
let radio_handler = |msg: Result<GraphcastMessage, anyhow::Error>| match msg {
        Ok(msg) => {
            println!("New message received! {:?}\n Saving to message store.", msg);
            MESSAGES.get().unwrap().lock().unwrap().push(msg);
        }
        Err(err) => {
            println!("{}", err);
        }
    };

GOSSIP_AGENT
    .get()
    .unwrap()
    .register_handler(Arc::new(Mutex::new(radio_handler)));
```

### The main loop

Great, we're almost there! We have a way to pass messages back and forth 🏓. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use the Ethereum block number as cue.

We'll start listening to Ethereum blocks and on each block we'll do a simple check - if the block number is even we'll send a "Ping" message, and if it's odd we'll process the messages we've received. After processing the messages we'll clear our store.

```Rust
loop {
    let block_number = U64::as_u64(&provider.get_block_number().await.unwrap());
    println!("🔗 Block number: {}", block_number);

    if block_number & 2 == 0 {
        send_message("Ping".to_string(), block_number).await;
    } else {
        let messages = AsyncMutex::new(MESSAGES.get().unwrap().lock().unwrap());
        for msg in messages.lock().await.iter() {
            if msg.content == *"Ping" {
                send_message("Pong".to_string(), block_number).await;
            }
        }

        messages.lock().await.clear();
    };

    sleep(Duration::from_secs(5));
}
```

### The finished Radio

Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in [this repo](https://github.com/graphops/graphcast-sdk/tree/main/examples/ping-pong), the only important difference is in the dependencies.

### That's awesome. But how do we run it?

You can start up the ping-pong Radio using `cargo run boot`.

:::note
Passing the "boot" flag will run the Radio in boot mode, meaning it will run on a full node instead of a light node. When the Radio starts in boot mode it writes the boot node's ID and address to a local file for later use.
Not passing the "boot" flag will run the Radio in light mode. In that case it will read the running boot node's ID and address from the local file and connect to it, and after that it will subscribe to specific pubsub topics if provided, if not - it will subscribe to the default ones.

To summarise - in order to run a light node, you need to have a boot node running. Once you have a boot node running, you can run as many light nodes as you want.
:::

After that, you can spawn more instances of the `ping-pong` Radio and examine how they interact with each other in the terminal logs by running more light nodes with `cargo run`.

Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! 🥂 From here on out, the only limit to the Radios you can build is your own imagination.
