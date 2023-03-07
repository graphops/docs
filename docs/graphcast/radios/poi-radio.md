---
sidebar_position: 1
---

# 📟 POI Radio

The source code for the POI Radio is available [here](https://github.com/graphops/poi-radio).

## Introduction

The key requirement for an Indexer to earn indexing rewards is to submit a valid Proof of Indexing (POI) promptly. The importance of valid POIs causes many Indexers to alert each other on subgraph health in community discussions. To alleviate the Indexer workload, this Radio utilized Graphcast SDK to exchange and aggregate POI along with a list of Indexer on-chain identities that can be used to trace reputations. With the pubsub pattern, the Indexer can get notified as soon as other indexers (with majority of stake) publish a POI different from the local POI.

## Getting Started

Before you follow any of the instructions below, please make sure you have a Graphcast ID registered for your on-chain Indexer address.

:::info
You can connect a Graphcast ID address to your Indexer address (with a 1:1 relationship) using our very own **Registry contract**, we have [one for mainnet](https://etherscan.io/address/0x89f97698d6006f25570cd2e31737d3d22aedcbcf) and [one for testnet](https://goerli.etherscan.io/address/0x26ebbA649FAa7b56FDB8DE9Ea17aF3504B76BFA0) (on Goerli). You need to use your Indexer or Operator wallet to call the `setGraphcastIDFor` function, providing the Indexer address, as well as the address you wish to use as a Graphcast ID. Note that the Graphcast ID address must be different from the wallet you are calling the `setGraphcastIDFor`function from. It also has to not be already registered as a Graphcast ID for another Indexer address, you can check if it's available by calling the `graphcastIDRegistered` function.
:::

### Quickstart

##### Steps

1. Pull the POI Radio image

```bash
docker pull ghcr.io/graphops/poi-radio:latest
```

2. Run the image, providing the required environment variables. Here's a sample testnet configuration:

```bash
docker run \
-e ETH_NODE="ETH_NODE" \
-e PRIVATE_KEY="GRAPHCAST_ID_PRIVATE_KEY" \
-e GRAPH_NODE_STATUS_ENDPOINT="http://host.docker.internal:8030/graphql" \
-e REGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli" \
-e NETWORK_SUBGRAPH="https://gateway.testnet.thegraph.com/network" \
-e GRAPHCAST_NETWORK="testnet" \
-e RUST_LOG="off,hyper=off,graphcast_sdk=debug,poi_radio=debug" \
ghcr.io/graphops/poi-radio
```

In the configuration table below is the full list of environment variables you can use, along with example values.

## Configuration

### Mainnet

| Name                                  | Example                                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ETH_NODE`                            | `https://mainnet.infura.io/v3/<API_KEY>`                                                 |
| `PRIVATE_KEY`                         | `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`                       |
| `GRAPH_NODE_STATUS_ENDPOINT`          | `http://localhost:8030/graphql` or `http://host.docker.internal:8030/graphql` for Docker |
| `REGISTRY_SUBGRAPH`                   | `https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-mainnet`        |
| `NETWORK_SUBGRAPH`                    | `https://gateway.thegraph.com/network`                                                   |
| `GRAPHCAST_NETWORK`                   | `mainnet`                                                                                |
| `COLLECT_MESSAGE_DURATION` (Optional) | Defaults to 30 seconds                                                                   |
| `WAKU_HOST` (Optional)                | Defaults to `127.0.0.1`                                                                  |
| `WAKU_PORT` (Optional)                | Defaults to `8546`                                                                       |
| `WAKU_NODE_KEY` (Optional)            | Defaults to `None`                                                                       |
| `BOOT_NODE_ADDRESSES` (Optional)      | "addr1, addr2, addr3" (defaults to `None`)                                               |
| `SLACK_TOKEN` (Optional)              | `xoxp-0123456789-0123456789-0123456789-0123456789` (defaults to `None`)                  |
| `SLACK_WEBHOOK` (Optional)            | `https://hooks.slack.com/services/<ID>/<ID>/<TOKEN>` (defaults to `None`)                |
| `RUST_LOG` (Optional)                 | `graphcast_sdk=debug,poi_radio=debug`, defaults to `info` for everything                 |

### Testnet (Goerli)

| Name                                  | Example                                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ETH_NODE`                            | `https://goerli.infura.io/v3/<API_KEY>`                                                  |
| `PRIVATE_KEY`                         | `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`                       |
| `GRAPH_NODE_STATUS_ENDPOINT`          | `http://localhost:8030/graphql` or `http://host.docker.internal:8030/graphql` for Docker |
| `REGISTRY_SUBGRAPH`                   | `https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli`              |
| `NETWORK_SUBGRAPH`                    | `https://gateway.testnet.thegraph.com/network`                                           |
| `GRAPHCAST_NETWORK`                   | `testnet`                                                                                |
| `COLLECT_MESSAGE_DURATION` (Optional) | Defaults to 30 seconds                                                                   |
| `WAKU_HOST` (Optional)                | Defaults to `127.0.0.1`                                                                  |
| `WAKU_PORT` (Optional)                | Defaults to `8546`                                                                       |
| `WAKU_NODE_KEY` (Optional)            | Defaults to `None`                                                                       |
| `BOOT_NODE_ADDRESSES` (Optional)      | "addr1, addr2, addr3" (defaults to `None`)                                               |
| `SLACK_TOKEN` (Optional)              | `xoxp-0123456789-0123456789-0123456789-0123456789` (defaults to `None`)                  |
| `SLACK_WEBHOOK` (Optional)            | `https://hooks.slack.com/services/<ID>/<ID>/<TOKEN>` (defaults to `None`)                |
| `RUST_LOG` (Optional)                 | `graphcast_sdk=debug,poi_radio=debug`, defaults to `info` for everything                 |

`SLACK_TOKEN` and `SLACK_WEBHOOK` are used for POI divergence notifications in a Slack channel.

`WAKU_HOST` and `WAKU_PORT` specify where the Graphcast node (included in all Radios) runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports.

If you want to customize the log level, you can toggle `RUST_LOG` environment variable. Here's an example configuration to get more verbose logging:

```
RUST_LOG="off,hyper=off,graphcast_sdk=debug,poi_radio=debug"
```

## Alternative options for using the POI Radio

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

## More details

### Fetching active allocations

The POI Radio is responsible for reading active allocations of the Radio operator's corresponding Indexer. It periodically polls the Graph Node for new blocks on all relevant networks and constructs Graphcast topics on each allocation identified by subgraph deployment IPFS hash.

:::tip
The relevant networks are those corresponding to the subgraphs that have active allocations.
:::

The Radio fetches new active allocations at a set interval (currently set to 2 minutes) to ensure that it is processing the latest information. Chainheads for these networks are updated with data from the Graph Node, and the Radio ensures that it is always using the latest chainhead when processing messages.

### Gathering and comparing normalised POIs

At a given interval, the Radio fetches the normalised POI for each deployment. This interval is defined in blocks different for each network.

:::info
These are the current intervals:

- goerli - 2 blocks
- eth mainnet - 10 blocks
- gnosis - 5 blocks
- hardhat - 5 blocks
- arbitrum one - 5 blocks
- arbitrum goerli - 5 blocks
- avalanche - 5 blocks
- polygon - 5 blocks
- celo - 5 blocks
- optimism - 5 blocks
:::

It then saves those nPOIs in an in-memory map. These nPOIs are referred to as _local_ POIs since they are generated by the Radio. As other Indexers running the Radio start doing the same, messages start propagating through the network. The Radio handles each message and adds the POI from it in another in-memory map. These POIs are referred to as _remote_ POIs since they are received from other network participants.

The messages include a nonce (UNIX timestamp), block number, signature (used to derive the sender's on-chain Indexer address) and network. Before saving an entry to the map, the Radio operator verifies through the Graph network subgraph for the sender's on-chain identity and amount of tokens staked, which is used during comparisons later on.

At another interval, the Radio compares the local POIs with the collected remote ones. That interval can be set by the operator, the default currently is 30 seconds. The remote POIs are sorted so that for each subgraph (on each block), the POI that is backed by the most on-chain stake is selected. This means that the combined stake of all Indexers that attested to it is considered, not just the highest staking Indexer. The top POI is then compared with the local POI for that subgraph at that block to determine consensus.

After a successful comparison, the attestations that have been checked are removed from the store.

:::tip
There are other small delays in the attestation and comparison process that can make it tricky to calculate the exact attestation and comparison times. Also, since the Radio is relying on the Graph Node to get latest blocks (currently it checks for the latest chainhead block every 5 seconds) pinpointing the exact time of those events becomes difficult. All this is to say that operators should expect a certain level of variation in the exact time that the Radio sends and proccesses messages.
:::

### Monitoring the Radio

If the Radio operator has set up a Slack Bot integration and the Radio finds a POI mismatch, it sends alerts to the designated channel. The operator can also inspect the logs to see if the Radio is functioning properly, if it's sending and receiving messages, if it's comparing normalised POIs, if there is a found POI mismatch, etc.
