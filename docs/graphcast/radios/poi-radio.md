---
sidebar_position: 2
---

# 📟 POI Radio

The source code for the POI Radio is available [here](https://github.com/graphops/poi-radio).

## Introduction

The key requirement for an Indexer to earn indexing rewards is to submit a valid Proof of Indexing (POI) promptly. The importance of valid POIs causes many Indexers to alert each other on subgraph health in community discussions. To alleviate the Indexer workload, this Radio utilized Graphcast SDK to exchange and aggregate POI along with a list of Indexer on-chain identities that can be used to trace reputations. With the pubsub pattern, the Indexer can get notified as soon as other indexers (with majority of stake) publish a POI different from the local POI.

## Getting Started

Before you follow any of the instructions below, please make sure you have a Graphcast operator address registered for your on-chain Indexer address.

:::tip
You can connect a operator address to your Indexer address (with a 1:1 relationship) using our very own [Registry contract](https://goerli.etherscan.io/address/0x1e408c2cf66fd3afcea0f49dc44c9f4db5575e79) (on Goerli). The easiest way to do that is through [Remix](https://remix.ethereum.org/) (you can check out [this guide](https://medium.com/blockchain-stories/interacting-with-an-ethereum-smart-contract-aa14401c30a0)). You need to use your Indexer wallet to call the `setGossipOperator` function, providing the address you wish to use as an operator (in all lower-case characters). You can find the contract abi [here](https://github.com/graphops/graphcast-poc/blob/main/registryAbi.json).
:::

### Docker

#### Prerequisites
1. Clone this repo and `cd` into it
2. Create a `.env` file that includes the environment variables:

- `GRAPH_NODE_STATUS_ENDPOINT` (if running **Graph Node** locally this should be set to `http://host.docker.internal:8030/graphql`)
- `PRIVATE_KEY` for the operator wallet
- `ETH_NODE` for the block provider
3. Optionally, provide `SLACK_TOKEN` and `SLACK_WEBHOOK` for POI divergence notifications, and `WAKU_HOST` and `WAKU_PORT` for the Radio's gossip node instance.

#### Running the POI Radio inside a Docker container

```bash
docker-compose up -d
```

### Building POI Radio locally

#### Prerequisites

1. Clone this repo and `cd` into it
2. Make sure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Go](https://go.dev/doc/install)
- Build tools (e.g. the `build-essentials` package for Debian-based Linux distributions or [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) for MacOS)
- C compiler (e.g. the `clang` package for Debian-based Linux distribution or [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) for MacOS)
- OpenSSL (e.g. the `libssl-dev` package for Debian-based Linux distribution or `openssl` for MacOS)
- PostreSQL libraries and headers (e.g. the `libpq-dev` package for Debian-based Linux distribution or `postgresql` for MacOS)
3. You have **Graph Node** syncing your indexer's on-chain allocations.
4. You have created a `.env` file that includes the environment variables:

- `GRAPH_NODE_STATUS_ENDPOINT` (if running **Graph Node** locally this will most likely be `http://localhost:8030/graphql`)
- `PRIVATE_KEY` for the operator wallet
- `ETH_NODE` for the block provider

6. Optionally, provide `SLACK_TOKEN` and `SLACK_WEBHOOK` for POI divergence notifications, and `WAKU_HOST` and `WAKU_PORT` for the Radio's gossip node instance.

#### Running the POI Radio natively

```
cargo run
```

## Workflow
Upon initiation, the Radio fetches active allocations of the Radio operator's corresponding Indexer and establishes Radio topics on each allocations identified by subgraph deployment IPFS hash. Also when started, the Radio immediately starts listening for new blocks on Ethereum. On a given interval, the Radio loops through the list and acquires the normalised POI for each deployment (using the metadata of the block that we're on) and saves those nPOIs in an in-memory map. Below we will refer to these nPOIs as _local_ POIs since they are the ones that we've generated.

At the same time, other Indexers running the Radio will start doing the same, which means that messages start propagating through the network. We handle each message and add the POI from it in another in-memory map, we can refer to these POIs as _remote_ POIs since these are the ones that we've received from other network participants. The messages don't come only with the POI and subgraph hash, they also include a nonce (UNIX timestamp), block number and signature. The signature is then used to derive the sender's on-chain Indexer address. It's important to note that before saving an entry to the map, the radio operator verifies through the graph network subgraph for the sender's on-chain identity and amount of tokens staked, which would be used during comparisons later on.

After another interval we compare our _local_ POIs with the _remote_ ones. We sort the remote ones so that for each subgraph (on each block) we can take the POI that is backed by the most on-chain stake (❗ This does not mean the one that is sent by the Indexer with the highest stake, but rather the one that has the most **combined** stake of all the Indexers that attested to it). After we have that top POI, we compare it with our _local_ POI for that subgraph at that block. Voilà! We now know whether our POI matches with the current consensus on the network. If we've set up a Slack Bot integration, we will also see alerts about divergence in the designated channel.
