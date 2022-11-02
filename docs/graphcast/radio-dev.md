---
sidebar_position: 5
---

# 🧑‍💻 Radio Development

Do you want to build robust, peer-to-peer messaging apps that automatically exchanges valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.

:::warning
As of today, the Graphcast SDK is not a separate npm package, but the examples below will clearly illustrate how functions and classes would be imported from it and used once it gets published. It should be treated as pseudocode for the time being and will not work properly if you try to run it on its own.
:::

For a more complex and full example of the Graphcast SDK being used to create a POI cross-checker Radio, take a look at this [implementation in the POC repo](https://github.com/graphops/graphcast-poc/tree/main/src/examples/poi-crosschecker).

## A simple ping pong example

Let's take a look at the simples possible example of a Radio, built on top of Graphcast - a ping pong app. When one participant sends `Ping`, all the others in the network are listening on the ping pong topic will send `Pong` back. Pretty straightforward.

### Register an operator address

First things first - before you can run any Radio on Graphcast, you need to register an operator address for your on-chain Indexer address. You can do that by using our [Registry smart contract](https://goerli.etherscan.io/address/0x1e408c2cf66fd3afcea0f49dc44c9f4db5575e79) (on the Goerli network).

:::tip
The easiest way to do that is through [Remix](https://remix.ethereum.org/) (you can check out [this guide](https://medium.com/blockchain-stories/interacting-with-an-ethereum-smart-contract-aa14401c30a0)). You need to use your Indexer wallet to call the `setGossipOperator` function, providing the address you wish to use as an operator (in all lower-case characters). You can find the contract abi [here](https://github.com/graphops/graphcast-poc/blob/main/registryAbi.json).
:::

Once that's done, you can start building your very first Radio.

### Populate your `.env` file

You now need to specify five essential variables in your `.env` file, here's the `.env.example`:

```bash
ETH_NODE=
RADIO_OPERATOR_PRIVATE_KEY=
NETWORK_SUBGRAPH=
INDEXER_MANAGEMENT_SERVER=
GRAPH_NODE=
```

Please use a Goerli ETH node for this example (doesn't need to be a full node).

### A few dependencies

For this example you need to have the `@graphops/graphcast`, `dotenv` and `@graphprotocol/common-ts` npm packages installed.

### The imports

Create a new file, for instance we'll be using `index.ts`, and import the following packages:

```typescript
import "dotenv/config";
import { ClientManager, GossipAgent } from "@graphops";
import { createLogger } from "@graphprotocol/common-ts";
```

:::tip
If you need a refresher on what `ClientManager` and `GossipAgent` do, refer to [this earlier section of the Graphcast docs](http://docs.graphops.xyz/graphcast/sdk#gossip-agent).
:::

### Set up a few constants

Add these constants right after the imports:

```typescript
const RADIO_PAYLOAD_TYPES = [{ name: "content", type: "string" }];
const DOMAIN = "ping-pong";

const logger = createLogger({
  name: DOMAIN,
  async: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  level: process.env.logLevel as any,
});
```

`RADIO_PAYLOAD_TYPES` defines the types for our Radio-specific message payload.
`DOMAIN` is the unique name of the Radio, which is used in many places, but mainly to construct message topics.

:::info
Topics in the Graphcast network use the following format - `/graphcast/{version}/{domain}/{subtopic}/proto}`. In our ping pong example we won't need a `subtopic`, which is an optional field where the topics need to branch out (as is the case in the POI cross-checker radio, where a subgraph hash is provided as a `subtopic`, because rarely an Indexer would want to listen for POIs for **all** the subgraphs). But in the current case our topic will look like this - `/graphcast/0/ping-pong/proto`.
:::

`logger` will be used to structure logs in a better way than the good ol' `console.log` (very important if we want to have better tracing and metrics in the future).

### Structure

The most basic structure of our ping pong code that we can have is to put everything below the imports and the constants in one `run()` function, which can looks something like this:

```typescript
const run = async () => {
  // TODO: Ping pong 🏓
};

run()
  .then()
  .catch((err) => {
    logger.error(`❌ Oh no! An error occurred: ${err.message}`);
    process.exit(1);
  });
```

From here on out everything we write will reside in the `run()` function.

### Instantiate the essentials

Let's instantiate a few classes that will do all the heavy lifting for us:

```typescript
const clientManager = new ClientManager({
  operatorPrivateKey: process.env.RADIO_OPERATOR_PRIVATE_KEY,
  ethNodeUrl: process.env.ETH_NODE,
  registry: process.env.REGISTRY_SUBGRAPH,
  graphNodeStatus: process.env.GRAPH_NODE,
  indexerManagementServer: process.env.INDEXER_MANAGEMENT_SERVER,
  graphNetworkUrl: process.env.NETWORK_SUBGRAPH,
});

const gossipAgent = new GossipAgent(logger, clientManager);
```

:::info
Don't worry about the environment variables that you see there which we haven't added to the `.env`, they will reside in the `Dockerfile` that we'll create at the end.
:::

### Making sure everything works

This next segment will make sure that our operator gets resolved to an on-chain Indexer address and that we're ready to start sending and receiving message via Graphcast.

```typescript
const indexerAddress = await gossipAgent.init();

logger.info(`🔦 Radio operator resolved to indexer address ${indexerAddress}`);

logger.info(`👂 Initialize ping pong Radio with operator status: `, {
  indexerAddress:
    indexerAddress ??
    "Graphcast agent is not registered as an indexer operator",
  topic: DOMAIN,
});
```

### Sending messages

Next, we will define a helper function (still inside of the `run` function) which will take care of sending messages to the network.

```typescript
const sendMessage = async (radioPayload) => {
  const provider = gossipAgent.clientManager.ethClient.provider;

  const block = await provider.getBlockNumber();
  const blockObject = await provider.getBlock(block);

  logger.info("Sending message with payload: ", radioPayload);

  const encodedMessage = await gossipAgent.messenger.writeMessage({
    radioPayload,
    types: RADIO_PAYLOAD_TYPES,
    block: blockObject,
  });

  await gossipAgent.messenger.sendMessage(encodedMessage, DOMAIN);
};
```

The function accepts `radioPaylaod`, which currently can be any arbitrary TS object (this will certainly change in the future). It uses an Ethereum provider from `gossipAgent` to fetch the latest block, along with its metadata. Then we encode the message using `writeMessage` and propagate it onto the network with `sendMessage`.

:::info
We are setting the message topic to be the same as the `DOMAIN` constant.
:::

### Receiving and handling messages

We now know how to send message, but how do we receive and handle message from other network participants?

```typescript
const handler = async (msg: Uint8Array, topic: string) => {
  try {
    logger.info(`📮 A new message has been received! Handling the message`);
    const message = await gossipAgent.processMessage({
      msg,
      topic,
      types: RADIO_PAYLOAD_TYPES,
    });

    logger.info(`Message: `, { message });
    const radioPayload = JSON.parse(message.radioPayload);

    if (radioPayload.content === "Ping") {
      const radioPayload = {
        content: "Pong",
      };

      await sendMessage(radioPayload);
    }
  } catch (error) {
    logger.info(`Failed to handle the message, moving on. ${error}`);
  }
};

await gossipAgent.establishTopics(DOMAIN, handler);
```

The `handler` function accepts a message of type `Uint8Array` (bytes), and of course the topic it was received on. At this point, the message is still encoded, but we can decode it using the SDK helper method `processMessage` with the `RADIO_PAYLOAD_TYPES` variable we defined before (because it was also used to encode it on the sender side). After it's decoded we can inspect the incoming `radioPayload` and read the `content` variable. Right after the function definition we can pass it to `establishTopics`. We've now started listening to messages 👂.

### The main loop

Great, we're almost there! We have a way to pass messages back and forth 🏓. But sending a one-off message is no fun, we want to create some sort of scheduled and continuous logic of message exchange, and perhaps the easiest way to do that is to use the Ethereum block number as cue. For instance we can set a schedule where the message is sent when we hit a block that is divisible by 5.

```typescript
gossipAgent.clientManager.ethClient.provider.on("block", async (block) => {
  logger.info(`🔗 Block: ${block}`);

  if (block % 5 === 0) {
    logger.info("Ping pong block!");

    const radioPayload = {
      content: "Ping",
    };

    await sendMessage(radioPayload);
  }
});
```

### The finished Radio

Congratulations, you've now written you first full Graphcast Radio! The finished code is also available in [this repo](https://github.com/graphops/graphcast-poc/tree/main/src/examples/ping-pong), the only important difference is in the imports.

### That's awesome. But how do we run it?

We can of course run this as a standalone NodeJS process, but let's take it a step further and put it into a Docker container, using the following `Dockerfile`:

```Docker
FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /usr/app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

WORKDIR /usr/app/dist/src/examples/ping-pong

ENV TERM "xterm-256color"
ENV LOG_LEVEL "trace"
ENV REGISTRY_SUBGRAPH "https://api.thegraph.com/subgraphs/name/hopeyen/gossip-registry-test"

CMD node index.js
```

We can take it even a step further and make our lives easier by using a `docker-compose.yml` file.

```yaml
version: "3.8"

services:
  ping-pong:
    build:
      context: .
      dockerfile: ./pingpong.Dockerfile
    command: node index.js
    env_file:
      - .env
```

### OK. Here's the moment we've all been waiting for

To start up our ping pong Radio, simply run the following command to spin up two instances of the Radio that will pass around the ball between each other _in perpetuum_.

```bash
docker-compose up ping-pong --scale ping-pong=2
```

Now there's just one more thing to do - have fun examining the logs & be proud of yourself - you made it! 🥂 From here on out, the only limit to the Radios you can build is your own imagination.
