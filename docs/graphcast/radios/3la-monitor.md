---
sidebar_position: 1
---

# 3LA - Listener Radio

The source code for 3LA is available [on GitHub](https://github.com/graphops/graphcast-3la) and Docker builds are automatically published as [GitHub Packages](https://github.com/graphops/graphcast-3la/pkgs/container/graphcast-3la).

## Introduction

This Radio shall monitor Graphcast network by the pubsub topic of `graphcast-v[version]-[network]`. The Radio will not send messages to the network, but instead will record the messages and generate basic metrics for network monitoring.

Graphcast network is a complex system with numerous nodes and connections, and monitoring it is crucial for maintaining its performance, identifying potential issues, and ensuring its robustness and reliability.

- Performance Optimization: to identify bottlenecks and areas of inefficiency.
- Troubleshooting: to quickly diagnose issues within the network, reducing downtime and improving reliability.
- Security: to immediately detect any unusual activity that might indicate a security breach.
- Planning and Forecasting: Record valuable data that can be used for planning and forecasting purposes, helping us to make informed decisions about the network's future.

## Quick Start

- Ensure a running Postgres instance
- Set Postgres url to `DATABASE_URL` in `.env`
- Set general GraphcastAgent environmental variables shown in the below table
- `cargo run` from source code (later should use Github actions to build source and dockerize

### Basic Configuration

You will need to prepare the following environment variables:

| Name                         | Description and examples                                                                                                                                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`               | Postgres Database URL. The tool comes with automatic database migration, database url passed in must be exist and can be connected. <br/>Example: `postgresql://[username]:[password]@[pg_host]:[pg_port]/[db_name]` |
| `PRIVATE_KEY`                | Private key to the Graphcast ID wallet (Precendence over mnemonics).<br/>Example: `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`                                                               |
| `GRAPH_NODE_STATUS_ENDPOINT` | URL to a Graph Node Indexing Status endpoint.<br/>Example: `http://index-node:8030/graphql`                                                                                                                          |
| `REGISTRY_SUBGRAPH`          | URL to the Graphcast Registry subgraph for your network. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                                                      |
| `NETWORK_SUBGRAPH`           | URL to the Graph Network subgraph. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                                                                            |
| `GRAPHCAST_NETWORK`          | The Graphcast Messaging fleet and pubsub namespace to use.<br/>Mainnet: `mainnet`<br/>Goerli: `testnet`                                                                                                              |

#### Example message table

| id  | message                                                                                                                                                                                                                                                                                   |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | {"nonce": 1686182179, "network": "mainnet", "payload": {"content": "0x3f...", "identifier": "QmVhiE4nax9i86UBnBmQCYDzvjWuwHShYh7aspGPQhU5Sj"}, "signature": "dff1...", "block_hash": "276e...", "identifier": "QmVhiE4nax9i86UBnBmQCYDzvjWuwHShYh7aspGPQhU5Sj", "block_number": 17431860} |
| 2   | {"nonce": 1686182183, "network": "goerli", "payload": {"content": "0xc0...", "identifier": "QmacQnSgia4iDPWHpeY6aWxesRFdb8o5DKZUx96zZqEWrB"}, "signature": "dbd2...", "block_hash": "0198...", "identifier": "QmacQnSgia4iDPWHpeY6aWxesRFdb8o5DKZUx96zZqEWrB", "block_number": 9140860}   |
| ... | ...                                                                                                                                                                                                                                                                                       |

## Advanced Configuration

In the configuration table below is the full list of environment variables you can set, along with example values.

See [Basic Configuration](#basic-configuration) above. The following environment variables are optional:

| Name (Optional variables)  | Description and examples                                                                                                                                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MNEMONIC`                 | Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of `PRIVATE_KEY` or `MNEMONIC` is needed). Example: `claptrap armchair violin...`                                                               |
| `COLLECT_MESSAGE_DURATION` | Seconds that the Subgraph Radio will wait to collect remote POI attestations before making a comparison with the local POI. Example: `120` for 2 minutes.                                                                          |
| `COVERAGE`                 | Toggle for topic coverage level. Possible values: "comprehensive", "on-chain", "minimal". Default is set to "on-chain" coverage.                                                                                                   |
| `TOPICS`                   | Comma separated static list of content topics (subgraphs) to subscribe to. Example: `QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz,QmUwCFhXM3f6qH9Ls9Y6gDNURBH7mxsn6JcectgxAz6CwU,QmQ1Lyh3U6YgVP6YX1RgRz6c8GmKkEpokLwPvEtJx6cF1y` |
| `WAKU_HOST`                | Interface onto which to bind the bundled Waku node. Example: `0.0.0.0`                                                                                                                                                             |
| `WAKU_PORT`                | P2P port on which the bundled Waku node will operate. Example: `60000`                                                                                                                                                             |
| `WAKU_NODE_KEY`            | Static Waku Node Key.                                                                                                                                                                                                              |
| `BOOT_NODE_ADDRESSES`      | Peer addresses to use as Waku boot nodes. Example: `"addr1, addr2, addr3"`                                                                                                                                                         |
| `SLACK_TOKEN`              | Slack Token to use for notifications. Example: `xoxp-0123456789-0123456789-0123456789-0123456789`                                                                                                                                  |
| `TELEGRAM_TOKEN`           | Telegram Bot Token to use for notifications. Example: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`                                                                                                                                  |
| `TELEGRAM_CHAT_ID`         | The ID of the Telegram chat to send messages to. Example: `-1001234567890`                                                                                                                                                         |
| `SLACK_CHANNEL`            | Name of Slack channel to send messages to (has to be a public channel). Example: `poir-notifications`                                                                                                                              |
| `WAKU_LOG_LEVEL`           | Waku node logging configuration. Example: `INFO` (is also the default)                                                                                                                                                             |
| `RUST_LOG`                 | Rust tracing configuration. Example: `graphcast_sdk=debug,subgraph_radio=debug`, defaults to `info` for everything                                                                                                                 |
| `DISCORD_WEBHOOK`          | Discord webhook URL for notifications. Example: `https://discord.com/api/webhooks/123456789012345678/AbCDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN`                                                                                     |
| `METRICS_PORT`             | If set, the Radio will expose Prometheus metrics on this (off by default). Example: `3001`                                                                                                                                         |
| `METRICS_HOST`             | If set, the Radio will expose Prometheus metrics on this (off by default). Example: `0.0.0.0`                                                                                                                                      |
| `SERVER_HOST`              | If `SERVER_PORT` is set, the Radio will expose an API service on the given host and port. Default: `0.0.0.0`                                                                                                                       |
| `SERVER_PORT`              | If set, the Radio will expose an API service on the given port (off by default). Example: `8080`                                                                                                                                   |
| `LOG_FORMAT`               | Options: `pretty` - verbose and human readable; `json` - not verbose and parsable; `compact` - not verbose and not parsable; `full` - verbose and not parsible. Default value: `pretty`.                                           |
| `PERSISTENCE_FILE_PATH`    | Relative path. If set, the Radio will periodically store states of the program to the file in json format (off by default).                                                                                                        |
| `DISCV5_ENRS`              | Comma separated ENRs for Waku Discv5 bootstrapping. Defaults to empty list.                                                                                                                                                        |
| `DISCV5_PORT`              | Discoverable UDP port. Default: `9000`                                                                                                                                                                                             |
| `ID_VALIDATION`            | Defines the level of validation for message signers used during radio operation. Options include: `no-check`, `valid-address`, `graphcast-registered`, `graph-network-account`, `registered-indexer`, `indexer`                    |

### Configurations explained

#### COVERAGE (topic)

`COVERAGE` is used to specify the topic coverage level. It controls the range of topics (subgraph ipfs hashes) the Indexer subscribes to in order to process data and participate in the network.

There are three coverage levels available:

- **comprehensive**: Subscribe to on-chain topics, user-defined static topics, and subgraph deployments syncing on graph node. This level is useful for Indexers who want to compare public POIs for all deployments syncing on their graph node even if they don't have an active allocations open (their stake will not be taken into account in attestation).
- **on-chain**: Subscribe to on-chain topics and user-defined static topics. This is the default coverage level and is suitable for indexers who only want to compare data for deployments with active allocations.
- **minimal**: Only subscribe to user-defined static topics. This level is for Indexers who want to limit their participation to specific topics of interest.

#### Identity validaiton

`ID_VALIDATION` is used to define level of validation for message signers used during radio operation.

Available Options:

- **no-check**: does not perform check on the message signature and does not verify the signer.
- **valid-address**: checks the signer to be a valid Ethereum address.
- **graphcast-registered**: checks the signer to be registered on Graphcast Registry.
- **graph-network-account**: checks the signer to be a Graph account.
- **registered-indexer**: checks the signer to be registered on Graphcast Registry and corresponds to an Indexer that satisfies the minimum stake requirement.
- **indexer**: checks the signer to be either registered on Graphcast Registry or to be a Graph Account, and corresponds to an Indexer satisfying the minimum stake requirement.

#### Gossip protocol

`WAKU_HOST` and `WAKU_PORT` specify where the bundled Waku node runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports.

If you want to customize the log level, you can toggle `RUST_LOG` environment variable. Here's an example configuration to get more verbose logging:

```
RUST_LOG="warn,hyper=warn,graphcast_sdk=debug,subgraph_radio=debug"
```

`Discv5` is an ambient node discovery network for establishing a decentralized network of interconnected Graphcast Radios. Discv5, when used in Graphcast Radios, serves as a dedicated peer-to-peer discovery protocol that empowers Radios to form an efficient, decentralized network. Without Discv5, the traffic within the Graphcast network would largely rely on centrally hosted boot nodes, leading to a less distributed architecture. However, with Discv5, Radios are capable of directly routing messages among themselves, significantly enhancing network decentralization and reducing reliance on the central nodes. If you want to learn more about Discv5, check out the [official spec](https://rfc.vac.dev/spec/33/).

## Monitoring the Radio

### Prometheus & Grafana

The exposed metrics can be scraped by a Prometheus server and displayed in Grafana. In order to use them you have to have a local Prometheus server running and scraping metrics on the provided port. You can specify the metrics host and port by using the environment variables `METRICS_PORT` and `METRICS_HOST`.

## HTTP Server

The Radio spins up an HTTP server with a GraphQL API when `SERVER_HOST` and `SERVER_PORT` environment variables are set. The supported routes are:

- `/health` for health status
- `/api/v1/graphql` for GET and POST requests with GraphQL playground interface

The GraphQL API now includes:

Below are an example query:

```graphql
Query {
  rows{
    id
    message{
      nonce
      network
      payload{
        content
      }
    }
  }

  messages{
    identifier
    nonce
    network
    blockNumber
    blockHash
    signature
    payload{
      identifier
      content
    }
  }
}
```

example mutation:

```
mutation{
  deleteMessage(id:1)
}
```
