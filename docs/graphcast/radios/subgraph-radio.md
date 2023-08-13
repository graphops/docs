---
sidebar_position: 1
---

# Subgraph Radio

The source code for the Subgraph Radio is available [on GitHub](https://github.com/graphops/subgraph-radio) and Docker builds are automatically published as [GitHub Packages](https://github.com/graphops/subgraph-radio/pkgs/container/subgraph-radio). Subgraph Radio is also published as a crate [on crates.io](https://crates.io/crates/subgraph-radio).

## Introduction

Subgraph Radio is an optional component of the Graph Protocol Indexer Stack. It uses the Graphcast Network to facilitate the exchange of Subgraph data and information among Indexers and other participants in the network.

An essential aspect of earning indexing rewards as an Indexer is the generation of valid Proof of Indexing hashes (POIs). These POIs provide evidence of the Indexer's possession of correct data. Submitting invalid POIs could lead to a [Dispute](https://thegraph.com/docs/en/network/indexing/#what-are-disputes-and-where-can-i-view-them) and possible slashing by the protocol. With Subgraph Radio's POI feature, Indexers gain confidence knowing that their POIs are continually cross-verified against those of other participating Indexers. Should there be a discrepancy in POIs, Subgraph Radio functions as an early warning system, alerting the Indexer within minutes.

All POIs generated through Subgraph Radio are public (normalized), meaning they are hashed with a `0x0` Indexer Address and can be compared between Indexers. However, these public POIs are not valid for on-chain reward submission. Subgraph Radio groups and weighs public POIs according to the aggregate stake in GRT attesting to each. The normalized POI with the most substantial aggregate attesting stake is deemed canonical and used for comparisons with your local Indexer POIs.

For enhanced security, we recommend running Subgraph Radio with an independent Graphcast ID linked to your Indexer account. This Graphcast ID is an Ethereum account authorized to sign POI attestations on behalf of your Indexer. By default, Subgraph Radio validates messages received from any signer, that can be resolved to an Indexer address, regardless of whether or not they are registered on the Graphcast registry (though this behavior can be altered by setting the ID_VALIDATION config variable). Learn how to register a Graphcast ID [here](https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id).

### Basic Configuration

The Subgraph Radio can be configured using environment variables, CLI arguments, as well as a TOML or YAML configuration file. Take a look at the [configuration options](#configuration-options) to learn more. In all cases, users will need to prepare the following configuration variables:

| Name                         | Description and examples                                                                                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `PRIVATE_KEY`                | Private key of the Graphcast ID wallet or the Indexer Operator wallet (precendence over `MNEMONICS`).<br/>Example: `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef` |
| `INDEXER_ADDRESS`            | Indexer address for Graphcast message verification, in all lowercase.<br/>Example: `0xabcdcabdabcdabcdcabdabcdabcdcabdabcdabcd`                                                         |
| `GRAPH_NODE_STATUS_ENDPOINT` | URL to a Graph Node Indexing Status endpoint.<br/>Example: `http://index-node:8030/graphql`                                                                                             |
| `REGISTRY_SUBGRAPH`          | URL to the Graphcast Registry subgraph for your network. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                         |
| `NETWORK_SUBGRAPH`           | URL to the Graph Network subgraph. Check [APIs](../sdk/registry#subgraph-apis) for your preferred network                                                                               |     |
| `GRAPHCAST_NETWORK`          | The Graphcast Messaging fleet and pubsub namespace to use.<br/>Mainnet: `mainnet`<br/>Goerli: `testnet`                                                                                 |

### Run with Docker

1. Pull the Subgraph Radio image

```bash
docker pull ghcr.io/graphops/subgraph-radio:latest
```

2. Run the image, providing the required environment variables. Here's a sample mainnet configuration:

```bash
docker run \
    -e GRAPHCAST_NETWORK="mainnet" \
    -e REGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-mainnet" \
    -e NETWORK_SUBGRAPH="https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet" \
    -e PRIVATE_KEY="PRIVATE_KEY" \
    -e GRAPH_NODE_STATUS_ENDPOINT="http://graph-node:8030/graphql" \
    -e RUST_LOG="warn,hyper=warn,graphcast_sdk=info,subgraph_radio=info" \
    -e INDEXER_ADDRESS="INDEXER_ADDRESS" \
    ghcr.io/graphops/subgraph-radio:latest
```

### (or) Run with docker-compose

You can append this service definition to your `docker-compose` manifest and customise the definitions:

```yaml
services:
  # ... your other service definitions
  subgraph-radio:
    image: ghcr.io/graphops/subgraph-radio:latest
    container_name: subgraph-radio
    restart: unless-stopped
    environment:
      GRAPHCAST_NETWORK: "mainnet"
      REGISTRY_SUBGRAPH: "https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-mainnet"
      NETWORK_SUBGRAPH: "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet"
      PRIVATE_KEY: "PRIVATE_KEY"
      GRAPH_NODE_STATUS_ENDPOINT: "http://graph-node:8030/graphql"
      RUST_LOG: "warn,hyper=warn,graphcast_sdk=info,subgraph_radio=info"
      INDEXER_ADDRESS: "INDEXER_ADDRESS"
    logging:
      driver: local
```

### (or) Run as part of [StakeSquid](https://github.com/StakeSquid)'s docker-compose setup

Subgraph Radio is included as an optional component in both the [mainnet](https://github.com/StakeSquid/graphprotocol-mainnet-docker) and [testnet](https://github.com/StakeSquid/graphprotocol-testnet-docker) versions of StakeSquid's guide.

### (or) Run using a pre-built binary

We also provide pre-built binaries for Ubuntu and MacOS, which you can find in the `Assets` section on each release in the [releases page](https://github.com/graphops/subgraph-radio/releases) on Github. Simply download the binary, make it executable (`chmod a+x ./subgraph-radio-{TAG}-{SYSTEM}`) and then run it (using `./subgraph-radio-{TAG}-{SYSTEM}`).

## Advanced Configuration

In the configuration table below is the full list of environment variables you can set, along with example values.

See [Basic Configuration](#basic-configuration) above. The following environment variables are optional:

| Name (Optional variables)            | Description and examples                                                                                                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MNEMONIC`                           | Mnemonic to the Graphcast ID wallet or the Indexer Operator wallet (first address of the wallet is used; Only one of `PRIVATE_KEY` or `MNEMONIC` is needed). Example: `claptrap armchair violin...`                                                                                  |
| `COLLECT_MESSAGE_DURATION`           | Seconds that the Subgraph Radio will wait to collect remote POI attestations before making a comparison with the local POI. Example: `120` for 2 minutes.                                                                                                                            |
| `COVERAGE`                           | Toggle for topic coverage level. Possible values: "comprehensive", "on-chain", "minimal", "none". Default is set to "comprehensive" coverage.                                                                                                                                        |
| `TOPICS`                             | Comma separated static list of content topics (subgraphs) to subscribe to. Example: `QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz,QmUwCFhXM3f6qH9Ls9Y6gDNURBH7mxsn6JcectgxAz6CwU,QmQ1Lyh3U6YgVP6YX1RgRz6c8GmKkEpokLwPvEtJx6cF1y`                                                   |
| `WAKU_HOST`                          | Interface onto which to bind the bundled Waku node. Example: `0.0.0.0`                                                                                                                                                                                                               |
| `WAKU_PORT`                          | P2P port on which the bundled Waku node will operate. Example: `60000`                                                                                                                                                                                                               |
| `WAKU_NODE_KEY`                      | Static Waku Node Key.                                                                                                                                                                                                                                                                |
| `BOOT_NODE_ADDRESSES`                | Peer addresses to use as Waku boot nodes. Example: `"addr1, addr2, addr3"`                                                                                                                                                                                                           |
| `SLACK_TOKEN`                        | Slack Token to use for notifications. Example: `xoxp-0123456789-0123456789-0123456789-0123456789`                                                                                                                                                                                    |
| `TELEGRAM_TOKEN`                     | Telegram Bot Token to use for notifications. Example: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`                                                                                                                                                                                    |
| `TELEGRAM_CHAT_ID`                   | The ID of the Telegram chat to send messages to. Example: `-1001234567890`                                                                                                                                                                                                           |
| `SLACK_CHANNEL`                      | Name of Slack channel to send messages to (has to be a public channel). Example: `poir-notifications`                                                                                                                                                                                |
| `WAKU_LOG_LEVEL`                     | Waku node logging configuration. Example: `INFO` (is also the default)                                                                                                                                                                                                               |
| `RUST_LOG`                           | Rust tracing configuration. Example: `graphcast_sdk=debug,subgraph_radio=debug`, defaults to `info` for everything                                                                                                                                                                   |
| `DISCORD_WEBHOOK`                    | Discord webhook URL for notifications. Example: `https://discord.com/api/webhooks/123456789012345678/AbCDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN`                                                                                                                                       |
| `METRICS_PORT`                       | If set, the Radio will expose Prometheus metrics on this (off by default). Example: `3001`                                                                                                                                                                                           |
| `METRICS_HOST`                       | If set, the Radio will expose Prometheus metrics on this (off by default). Example: `0.0.0.0`                                                                                                                                                                                        |
| `SERVER_HOST`                        | If `SERVER_PORT` is set, the Radio will expose an API service on the given host and port. Default: `0.0.0.0`                                                                                                                                                                         |
| `SERVER_PORT`                        | If set, the Radio will expose an API service on the given port (off by default). Example: `8080`                                                                                                                                                                                     |
| `LOG_FORMAT`                         | Options: `pretty` - verbose and human readable; `json` - not verbose and parsable; `compact` - not verbose and not parsable; `full` - verbose and not parsible. Default value: `pretty`.                                                                                             |
| `PERSISTENCE_FILE_PATH`              | Relative path. If set, the Radio will periodically store states of the program to the file in json format (off by default).                                                                                                                                                          |
| `DISCV5_ENRS`                        | Comma separated ENRs for Waku Discv5 bootstrapping. Defaults to empty list.                                                                                                                                                                                                          |
| `DISCV5_PORT`                        | Discoverable UDP port. Default: `9000`                                                                                                                                                                                                                                               |
| `ID_VALIDATION`                      | Defines the level of validation for message signers used during radio operation. Options include: `no-check`, `valid-address`, `graphcast-registered`, `graph-network-account`, `registered-indexer`, `indexer`. Default: `indexer`                                                  |
| `INDEXER_MANAGEMENT_SERVER_ENDPOINT` | URL to the Indexer management server of Indexer Agent. Example: `http://localhost:18000`                                                                                                                                                                                             |
| `AUTO_UPGRADE`                       | Toggle for the types of subgraphs for which the Radio will send offchain syncing commands to the indexer management server. Default to upgrade all syncing deployments. Possible values: "comprehensive", "on-chain", "minimal", "none". Default is set to "comprehensive" coverage. |

### Configurations explained

#### COVERAGE (topic)

`COVERAGE` is used to specify the topic coverage level. It controls the range of topics (subgraph ipfs hashes) the Indexer subscribes to in order to process data and participate in the network.

There are three coverage levels available:

- **comprehensive**: Subscribe to on-chain topics, user-defined static topics, and subgraph deployments syncing on graph node. This level is useful for Indexers who want to compare public POIs for all deployments syncing on their graph node even if they don't have an active allocations open (their stake will not be taken into account in attestation).
- **on-chain**: Subscribe to on-chain topics and user-defined static topics. This is the default coverage level and is suitable for indexers who only want to compare data for deployments with active allocations.
- **minimal**: Only subscribe to user-defined static topics. This level is for Indexers who want to limit their participation to specific topics of interest.

#### Identity validaiton

`ID_VALIDATION` is used to define level of validation for message signers used during radio operation. We recommend `registered-indexer` for most strict identity validation, while `indexer` is a viable option for those who want to use the network before considering Grapchast ID registration. You can choose a sender identity validation mechanism for your radio, based on your use case and security preferences.

Available Options:

- **no-check**: Does not perform check on the message signature and does not verify the signer. All messages should pass the sender check.
- **valid-address**: Requires the signer to be a valid Ethereum address. Messages should be traceable to an Ethers wallet.
- **graphcast-registered**: Requires the signer to be registered on the Graphcast Registry.
- **graph-network-account**: signer must be a Graph account.
- **registered-indexer**: signer must be registered at Graphcast Registry and correspond to an Indexer satisfying the indexer minimum stake requirement.
- **indexer**: signer must be registered at Graphcast Registry or is a Graph Account, and correspond to an Indexer satisfying the indexer minimum stake requirement.

#### Gossip protocol

`WAKU_HOST` and `WAKU_PORT` specify where the bundled Waku node runs. If you want to run multiple Radios, or multiple instances of the same Radio, you should run them on different ports.

If you want to customize the log level, you can toggle `RUST_LOG` environment variable. Here's an example configuration to get more verbose logging:

```
RUST_LOG="warn,hyper=warn,graphcast_sdk=debug,subgraph_radio=debug"
```

`Discv5` is an ambient node discovery network for establishing a decentralized network of interconnected Graphcast Radios. Discv5, when used in Graphcast Radios, serves as a dedicated peer-to-peer discovery protocol that empowers Radios to form an efficient, decentralized network. Without Discv5, the traffic within the Graphcast network would largely rely on centrally hosted boot nodes, leading to a less distributed architecture. However, with Discv5, Radios are capable of directly routing messages among themselves, significantly enhancing network decentralization and reducing reliance on the central nodes. If you want to learn more about Discv5, check out the [official spec](https://rfc.vac.dev/spec/33/).

#### State management

`PERSISTENCE_FILE_PATH` configuration variable allows the Radio to maintain operational continuity across sessions. When the file path is set, it triggers the Radio to periodically store its state, including local attestations, remote messages and POI comparison results in a JSON-formatted file at the specified path. This facilitates seamless session transitions and minimizes data loss. In the event of a system disruption, the state can be reloaded from this file, ensuring the Radio can resume operation effectively.

#### Subgraph Upgrade Pre-sync feature configuration variables

The subgraph upgrade pre-sync feature provides a way for Subgraph Developers to signal when they plan on releasing a new subgraph version, thereby allowing Indexers to start syncing the subgraph in advance. If the Radio operator has set up the notification system, they will get notified whenever a new subgraph upgrade intent message is received.

If the `INDEXER_MANAGEMENT_SERVER_ENDPOINT` configuration variable has been set, the Radio will send a request to the Indexer Agent to start offchain syncing the new Subgraph deployment.

The `AUTO_UPGRADE` variable can be toggled to change the coverage level of subgraphs for which the Radio will send offchain syncing commands to the indexer management server.

### Configuration options

To configure Subgraph Radio, you can use the following methods:

#### Using Environment Variables

Example .env file:

```bash
PRIVATE_KEY="a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m"
GRAPH_NODE_STATUS_ENDPOINT="http://127.0.0.42:8030/graphql"
REGISTRY_SUBGRAPH="https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet"
NETWORK_SUBGRAPH="https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet"
GRAPHCAST_NETWORK=mainnet
INDEXER_ADDRESS="0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
```

#### Using CLI arguments

Pass the configuration options directly as command-line arguments.

```bash
docker run ghcr.io/graphops/subgraph-radio \
  --private-key "a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m" \
  --graph-node-status-endpoint "http://127.0.0.42:8030/graphql" \
  --registry-subgraph "https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet" \
  --network-subgraph "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet" \
  --graphcast-network mainnet \
  --indexer-address "0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
```

#### Using a TOML/YAML file

Example TOML configuration file (config.toml):

```toml
[graph_stack]
graph_node_status_endpoint = 'http://127.0.0.42:8030/graphql'
indexer_address = '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6'
registry_subgraph = 'https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet'
network_subgraph = 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet'
private_key = 'a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m'
```

Then you just need to have the `CONFIG_FILE` set, either as an env variable - `CONFIG_FILE=path/to/config.toml` or passed as a CLI arg - `--config-file path/to/config.toml`.

Example YAML configuration file (config.yaml):

```yaml
graph_stack:
  graph_node_status_endpoint: "http://127.0.0.42:8030/graphql"
  indexer_address: "0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
  registry_subgraph: "https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet"
  network_subgraph: "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet"
  private_key: "a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m"
```

Then you just need to have the `CONFIG_FILE` set, either as an env variable - `CONFIG_FILE=path/to/config.yaml` or passed as a CLI arg - `--config-file path/to/config.yaml`.

We also have an [extensive configuration file template](https://github.com/graphops/subgraph-radio/blob/dev/template.toml) in the repo.

## Monitoring the Radio

### Notifications

If the Radio operator has set up a Slack, Discord and/or Telegram bot integration and the Radio finds a POI mismatch, it sends alerts to the designated channels. The operator can also inspect the logs to see if the Radio is functioning properly, if it's sending and receiving messages, if it's comparing normalised POIs, if there is a found POI mismatch, etc.

### Prometheus & Grafana

The Subgraph Radio exposes metrics that can then be scraped by a Prometheus server and displayed in Grafana. In order to use them you have to have a local Prometheus server running and scraping metrics on the provided port. You can specify the metrics host and port by using the environment variables `METRICS_PORT` and `METRICS_HOST`. We also provide a [Grafana dashboard config JSON file](https://github.com/graphops/subgraph-radio/blob/dev/grafana.json) which you can use to visualise the metrics in Grafana.

## HTTP Server

The Radio spins up an HTTP server with a GraphQL API when `SERVER_HOST` and `SERVER_PORT` environment variables are set. The supported routes are:

- `/health` for health status
- `/api/v1/graphql` for GET and POST requests with GraphQL playground interface

The GraphQL API now includes several advanced queries:

- `radioPayloadMessages`
- `localAttestations`
- `comparisonResults`
- `comparisonRatio`

Below are some example queries:

```graphql
query {
  radioPayloadMessages {
    identifier
    nonce
    signature
    graphAccount
    payload {
      identifier
      content
    }
  }
  localAttestations {
    deployment
    blockNumber
    attestation {
      ppoi
    }
  }
  comparisonResults(identifier: "Qm...") {
    deployment
    blockNumber
    resultType
    localAttestation {
      ppoi
    }
    attestations {
      senders
      stakeWeight
      ppoi
    }
  }
  comparisonRatio {
    deployment
    blockNumber
    stakeRatio
  }
}
```

You can customize the returned data from the `comparisonRatio` query by providing optional arguments - `deployment`, `block` and `resultType`.

```graphql
query {
  comparisonRatio(deployment: "Qm...", block: 17887350, resultType: MATCH) {
    deployment
    blockNumber
    stakeRatio
  }
}
```

In this example, the `stakeRatio` query will return the stake ratios only for attestations from deployment "Qm..." and block number 17887350, and only for the specified result type.

Note: The `result_type` field of the filter corresponds to the `resultType` field in the `comparisonResults` query. This field represents the type of comparison result.

`comparisonRatio` provides an overview of the consensus status of the attestations from remote messages. It gives a ratio string that signifies the number of indexers with the same public POI as the local Radio. The results are presented as `x/y!/z` where:

- `x`, `y`, and `z` are sorted by descending stake weights
- `!` indicates the entry that corresponds to the local result.

For example,` 2/0!` means there are two indexers attesting with a higher sum of stake weight and no other indexer shares the same public POIs as the local Radio. `8!` means there are eight other indexers agreeing with the local Radio.

`stakeRatio` orders the attestations by stake weight, then computes the ratio of unique senders.

These queries provide a clear aggregation of the attestations from remote messages, giving a concise understanding of the Radio's state. The optional filters - deployment, block, and filter - can be used to refine the results.

## How it works

### Fetching active allocations

The Subgraph Radio is responsible for reading active allocations of the Radio operator's corresponding Indexer. It periodically polls the Graph Node for new blocks on all relevant networks and constructs Graphcast topics on each allocation identified by subgraph deployment IPFS hash.

:::tip
The relevant networks are those corresponding to the subgraphs that have active allocations.
:::

The Radio fetches new active allocations at a regular interval to ensure that it is processing the latest information. Chainheads for these networks are updated with data from the Graph Node, and the Radio ensures that it is always using the latest chainhead when processing messages.

```mermaid
sequenceDiagram
    participant Network Subgraph
    participant Graph Node
    participant Subgraph Radio
    participant Graphcast Network
    actor Human
    participant Indexer Management Server
    loop Track allocated deployments
        Subgraph Radio->>+Network Subgraph: Get latest allocated deployments
        Network Subgraph->>-Subgraph Radio: Return allocated deployments
        loop Monitor allocated deployments and chain heads
            Subgraph Radio->>+Graph Node: Get indexing statuses for allocated deployments
            Graph Node->>-Subgraph Radio: Return matching indexing statuses
            activate Subgraph Radio
            Subgraph Radio->>Subgraph Radio: Update chain heads
            deactivate Subgraph Radio
            loop For each deployment that we are tracking
                opt If deployment reached trigger block is healthy
                    Subgraph Radio->>+Graph Node: Fetch POI for deployment
                    Graph Node->>-Subgraph Radio: Normalized POI
                    activate Subgraph Radio
                    Subgraph Radio->>Subgraph Radio: Generate signed POI Attestation
                    deactivate Subgraph Radio
                    Subgraph Radio-->>Graphcast Network: Broadcast POI Attestation to Graphcast Network
                end
                opt If stored remote attestations and collect message duration passed
                    activate Subgraph Radio
                    Subgraph Radio->>Subgraph Radio: Compute consensus remote POI
                    deactivate Subgraph Radio
                    opt If local POI mismatches consensus remote POI
                        Subgraph Radio-->>Human: Send POI divergence warning notification
                    end
                end
                opt If VersionUpgradeMessage is received
                    Graphcast Network-->>Subgraph Radio: VersionUpgradeMessage
                    activate Subgraph Radio
                    Subgraph Radio-->>Human: Send Version Upgrade notification
                    opt If Indexer Management Server endpoint provided
                        Subgraph Radio->>Indexer Management Server: Sends offchain sync request for new deployment hash
                    end
                    deactivate Subgraph Radio
                end
            end
        end
    end
```

### Gathering and comparing normalised POIs

At a given interval, the Radio fetches the normalised POI for each deployment. This interval is defined in blocks different for each network. It then saves those public POIs, and as other Indexers running the Radio start doing the same, messages start propagating through the network. The Radio saves each message and processes them on a given interval.

The messages include a nonce (UNIX timestamp), block number, signature (used to derive the sender's on-chain Indexer address) and network. Before saving an entry to the map, the Radio operator verifies through the Graph network subgraph for the sender's on-chain identity and amount of tokens staked, which is used during comparisons later on.

```mermaid
flowchart LR
    a[Fetch deployment status] --> b[If healthy & synced]
    b -->|No| eee{End}
    b -->|Yes| c[If reached trigger block]
    c -->|No| eee
    c -->|Yes| d[Fetch POI for deployment]
    d -->|Broadcast| n(Graphcast\nNetwork)
    n -->|Receive remote POI| o[Other Indexers]
    n --> x{End}
```

At another interval, the Radio compares the local public POIs with the collected remote ones. The remote POIs are sorted so that for each subgraph (on each block), the POI that is backed by the most on-chain stake is selected. This means that the combined stake of all Indexers that attested to it is considered, not just the highest staking Indexer. The top POI is then compared with the local POIs for that subgraph at that block to determine consensus.

If there is a mismatch and if the Radio operator has set up a Slack, Discord and/or Telegram bot integration, the Radio will send alerts to the designated channels.

After a successful comparison, the attestations that have been checked are removed from the store.

```mermaid
flowchart LR
    q[Fetch deployment status] --> g[Has collection window expired?]
    g -->|Yes| t[Compute consensus remote POI]
    g -->|No| p{End}
    c -->|Aggregate| t
    a[Receive POI attestations] --> b[Has collection window expired?]
    b -->|Yes| eee{End}
    b -->|No| c[Store remote attestation\nfor deployment]
    t --> l[Does local POI match remote consensus POI?]
    l -->|No| i[Send notification]
    l -->|Yes| d{End}
```

## Developing the Subgraph Radio

#### Building the image using the Dockerfile locally

If you want to make any changes to the Subgraph Radio codebase, you can use this option.

##### Prerequisites

1. Clone this repo and `cd` into it
2. Create a `.env` file that includes at least the required environment variables. To see the full list of environment variables you can provide, check out the [Configuration](#configuration) section.

##### Running the Subgraph Radio inside a Docker container

```bash
docker-compose up -d
```

### Building Subgraph Radio locally

To have full control over the Subgraph Radio code and run it directly on your machine (without Docker) you can use this option.

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

#### Running the Subgraph Radio natively

```
cargo run --release
```
