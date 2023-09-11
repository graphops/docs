---
sidebar_position: 5
---
# Advanced Configuration

In the configuration table below is the full list of environment variables you can set, along with example values.

See [Basic Configuration in the Introduction](intro#basic-configuration). The following environment variables are optional:

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
| `RATELIMIT_THRESHOLD`                | Set upgrade intent ratelimit in seconds: only one upgrade per subgraph within the threshold (default: 86400 seconds = 1 day)                                                                                                                                                         |
| `PROTOCOL_NETWORK`                   | The protocol network (currently matches with suffix of the provided `NETWORK_SUBGRAPH` configuration variable)                                                                                                                                                                       |

:::info
For enhanced security, we recommend running Subgraph Radio with an independent Graphcast ID linked to your Indexer account. This Graphcast ID is an Ethereum account authorized to sign Graphcast messages on behalf of your Indexer. By default, Subgraph Radio validates messages received from any signer, that can be resolved to an Indexer address, regardless of whether or not they are registered on the Graphcast registry (though this behavior can be altered by setting the `ID_VALIDATION` config variable). Learn how to register a Graphcast ID [here](https://docs.graphops.xyz/graphcast/sdk/registry#register-a-graphcast-id).
:::

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

#### Protocol network

Available Options:

- `goerli`
- `mainnet`
- `arbitrum-one`
- `arbitrum-goerli`

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

Example TOML configuration file (`config.toml`):

```toml
[graph_stack]
graph_node_status_endpoint = 'http://127.0.0.42:8030/graphql'
indexer_address = '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6'
registry_subgraph = 'https://api.thegraph.com/subgraphs/name/randomuser/graphcast-registry-mainnet'
network_subgraph = 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-mainnet'
private_key = 'a2b3c1d4e5f6890e7f6g5h4i3j2k1l0m'
```

Then you just need to have the `CONFIG_FILE` set, either as an env variable - `CONFIG_FILE=path/to/config.toml` or passed as a CLI arg - `--config-file path/to/config.toml`.

Example YAML configuration file (`config.yaml`):

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
