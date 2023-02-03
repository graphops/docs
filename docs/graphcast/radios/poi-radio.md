---
sidebar_position: 1
---

# 📟 POI Radio

The source code for the POI Radio is available [here](https://github.com/graphops/poi-radio).

## Introduction

The key requirement for an Indexer to earn indexing rewards is to submit a valid Proof of Indexing (POI) promptly. The importance of valid POIs causes many Indexers to alert each other on subgraph health in community discussions. To alleviate the Indexer workload, this Radio utilized Graphcast SDK to exchange and aggregate POI along with a list of Indexer on-chain identities that can be used to trace reputations. With the pubsub pattern, the Indexer can get notified as soon as other indexers (with majority of stake) publish a POI different from the local POI.

## Getting Started

Before you follow any of the instructions below, please make sure you have a Graphcast Operator address registered for your on-chain Indexer address.

:::tip
You can connect a Graphcast Operator address to your Indexer address (with a 1:1 relationship) using our very own [Registry contract](https://goerli.etherscan.io/address/0xBFdA8191D1ec09bB8ADc138DAbf413d00DAfb6c8) (on Goerli). You need to use your Indexer wallet to call the `setGossipOperator` function, providing the address you wish to use as an operator.
:::

### Docker

#### Using pre-built image

This is the option you should go for if you're just looking to run the POI Radio as part of your Indexing stack.

##### Steps

1. Pull the image

```bash
docker pull ghcr.io/graphops/poi-radio:latest
```

2. Run the image, providing the required environment variables

```bash
docker run -e REGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/hopeyen/gossip-registry-test" -e NETWORK_SUBGRAPH="https://gateway.testnet.thegraph.com/network" -e GRAPH_NODE_STATUS_ENDPOINT="http://host.docker.internal:8030/graphql" -e PRIVATE_KEY="your operator address private key" -e ETH_NODE="an ethereum rpc node url" ghcr.io/graphops/poi-radio
```

:::tip
The `PRIVATE_KEY` here is for your Graphcast Operator address, which is entirely separate from your Indexer Operator address. The Graphcast Operator address is authorised using our [Registry contract](https://goerli.etherscan.io/address/0xBFdA8191D1ec09bB8ADc138DAbf413d00DAfb6c8). You need to use your Indexer wallet to call the `setGossipOperator` function, providing the operator address.
:::

To see the full list of environment variables you can provide, check out the [Configuration](#configuration) section.

#### Building the image using the Dockerfile locally

If you want to make any changes to the POI Radio codebase, you can use this option.

##### Prerequisites

1. Clone this repo and `cd` into it
2. Create a `.env` file that includes at least the required environment variables. To see the full list of environment variables you can provide, check out the [Configuration](#configuration) section.

##### Running the POI Radio inside a Docker container

```bash
docker-compose up -d
```

### Using a pre-built binary

We also provide pre-built binaries for Ubuntu and MacOS, which you can find in the `Assets` section on each release in the [releases page](https://github.com/graphops/poi-radio/releases) on Github. Simply download the binary, make it executable (`chmod a+x ./poi-radio-{TAG}-{SYSTEM}`) and then run it (using `./poi-radio-{TAG}-{SYSTEM}`).

### Building POI Radio locally

To have full control over the POI Radio code and run it directly on your machine (without Docker) you can use this option.

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
4. You have created a `.env` file that includes at least the required environment variables. To see the full list of environment variables you can provide, check out the [Configuration](#configuration) section.

#### Running the POI Radio natively

```
cargo run
```

## Configuration

### Testnet (Goerli)

| Name                         | Example                                                                   |
| ---------------------------- | ------------------------------------------------------------------------- |
| `ETH_NODE`                   | `https://goerli.infura.io/v3/<PROJECT_ID>`                                |
| `PRIVATE_KEY`                | `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`      |
| `GRAPH_NODE_STATUS_ENDPOINT` | `http://localhost:8030/graphql`                                         |
| `REGISTRY_SUBGRAPH`          | `https://api.thegraph.com/subgraphs/name/hopeyen/gossip-registry-test`    |
| `NETWORK_SUBGRAPH`           | `https://gateway.testnet.thegraph.com/network`                            |
| `WAKU_HOST` (Optional)       | Defaults to `127.0.0.1`                                                   |
| `WAKU_PORT` (Optional)       | Defaults to `8546`                                                        |
| `SLACK_TOKEN` (Optional)     | `xoxp-0123456789-0123456789-0123456789-0123456789` (defaults to `None`)   |
| `SLACK_WEBHOOK` (Optional)   | `https://hooks.slack.com/services/<ID>/<ID>/<TOKEN>` (defaults to `None`) |
| `LOG_LEVEL` (Optional)       | Defaults to `INFO`                                                        |

`SLACK_TOKEN` and `SLACK_WEBHOOK` are used for POI divergence notifications in a Slack channel.

`WAKU_HOST` and `WAKU_PORT` specify where the Graphcast node (included in all Radios) runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports. 

If you want to customize the log level, you can set `LOG_LEVEL` to one of `ERROR`, `WARN`, `DEBUG`, `TRACE`.

## Workflow

Upon initiation, the Radio fetches active allocations of the Radio operator's corresponding Indexer and establishes Radio topics on each allocations identified by subgraph deployment IPFS hash. Also when started, the Radio immediately starts listening for new blocks on Ethereum. On a given interval, the Radio loops through the list and acquires the normalised POI for each deployment (using the metadata of the block that we're on) and saves those nPOIs in an in-memory map. Below we will refer to these nPOIs as _local_ POIs since they are the ones that we've generated.

At the same time, other Indexers running the Radio will start doing the same, which means that messages start propagating through the network. We handle each message and add the POI from it in another in-memory map, we can refer to these POIs as _remote_ POIs since these are the ones that we've received from other network participants. The messages don't come only with the POI and subgraph hash, they also include a nonce (UNIX timestamp), block number and signature. The signature is then used to derive the sender's on-chain Indexer address. It's important to note that before saving an entry to the map, the radio operator verifies through the graph network subgraph for the sender's on-chain identity and amount of tokens staked, which would be used during comparisons later on.

After another interval we compare our _local_ POIs with the _remote_ ones. We sort the remote ones so that for each subgraph (on each block) we can take the POI that is backed by the most on-chain stake (❗ This does not mean the one that is sent by the Indexer with the highest stake, but rather the one that has the most **combined** stake of all the Indexers that attested to it). After we have that top POI, we compare it with our _local_ POI for that subgraph at that block. Voilà! We now know whether our POI matches with the current consensus on the network. If we've set up a Slack Bot integration, we will also see alerts about divergence in the designated channel.
