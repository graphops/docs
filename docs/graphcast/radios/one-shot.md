---
sidebar_position: 3
---

# One-shot CLI

The source code for the one-shot CLI is available [on GitHub](https://github.com/graphops/one-shot-cli).

## Introduction

The one-shot CLI enables sending one-off messages. Currently, its default behaviour is to construct and send a message of type `VersionUpgradeMessage`, which is used for the [Subgraph Upgrade Pre-sync feature](https://docs.graphops.xyz/graphcast/design-principles#subgraph-upgrade-pre-sync) of Subgraph Radio.

The one-shot CLI is configured using config variables. You will need to prepare the following config variables (either as env variables or passing CLI args when running the CLI):

| Name                | Description and Examples                                                                                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PRIVATE_KEY`       | Private key to the Graphcast ID wallet (precendence over mnemonics).<br/>Example: `PRIVATE_KEY=YOUR_PRIVATE_KEY`                                                                                           |
| `MNEMONIC`          | Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of private key or mnemonic is needed).<br/>Example: `MNEMONIC=YOUR_MNEMONIC`                                            |
| `GRAPH_ACCOUNT`     | Graph account corresponding to Graphcast operator.<br/>Example: `GRAPH_ACCOUNT=YOUR_GRAPH_ACCOUNT`                                                                                                         |
| `REGISTRY_SUBGRAPH` | Subgraph endpoint to the Graphcast Registry.<br/>Default: `https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli`                                                                      |
| `NETWORK_SUBGRAPH`  | Subgraph endpoint to The Graph network subgraph.<br/>Default: `https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-goerli`                                                                 |
| `GRAPHCAST_NETWORK` | Supported Graphcast networks: mainnet, testnet.<br/>Default: `testnet`                                                                                                                                     |
| `IDENTIFIER`        | Subgraph deployment hash is used to be the message content identifier.<br/>Example: `IDENTIFIER=YOUR_IDENTIFIER`                                                                                           |
| `NEW_HASH`          | Subgraph deployment hash for the upgrade version of the subgraph.<br/>Example: `NEW_HASH=YOUR_NEW_HASH`                                                                                                    |
| `SUBGRAPH_ID`       | Subgraph id shared by the old and new deployment.<br/>Example: `SUBGRAPH_ID=YOUR_SUBGRAPH_ID`                                                                                                              |
| `INDEX_NETWORK`     | Subgraph id shared by the old and new deployment.<br/>Example: `INDEX_NETWORK=YOUR_INDEX_NETWORK`                                                                                                          |
| `MIGRATION_TIME`    | UNIX timestamp that the developer plan on migrating the usage.<br/>Example: `MIGRATION_TIME=YOUR_MIGRATION_TIME`                                                                                           |
| `ID_VALIDATION`     | Identity validation mechanism for message signers (options: no-check, valid-address, graphcast-registered, graph-network-account, registered-indexer, indexer).<br/>Example: `ID_VALIDATION=valid-address` |
| `LOG_LEVEL`         | Logging configuration to set as RUST_LOG.<br/>Default: `info`                                                                                                                                              |
| `LOG_FORMAT`        | Support logging formats: pretty, json, full, compact.<br/>Default: `pretty`                                                                                                                                |

The one-shot CLI code is very extensible and could be altered to send any kind of Graphcast-compatible message to the network.

## Run with Docker

1. Pull the one-shot CLI image

```bash
docker pull ghcr.io/graphops/one-shot-cli:latest
```

2. Run the image, providing the required configuration variables. Here's a sample configuration:

```bash
docker run ghcr.io/graphops/one-shot-cli \
    --private-key "1b098c0f518c046dc01bc9cf785cb670e6e059d99a294319598583f546f420c8" \
    --graph-account "0xedfecf44f942d53b0b8c9559560bc6cb3d6d2c1d" \
    --identifier "QmXoFPYJmtSraJDTEGDXLAP52FjVQmLBJqrj6DUevk47o" \
    --new-hash "Qmf7mgYnJktiYTvXGwBhbR52lXpjCZgFLA5Y9kugHtZmWU" \
    --subgraph-id "J5s8MTaDrNwxHVeB2okoVnZ2eULeYc47L6LKef6BLWwX" \
    --index-network "goerli" \
    --migration-time 1692114708
```

## (or) Run using a pre-built binary

We also provide pre-built binaries for Ubuntu and MacOS, which you can find in the `Assets` section on each release in the [releases page](https://github.com/graphops/one-shot-cli/releases) on Github. Simply download the binary, make it executable (`chmod a+x ./one-shot-cli-{TAG}-{SYSTEM}`) and then run it (using `./one-shot-cli-{TAG}-{SYSTEM}`), like this:

```bash
./one-shot-cli-0.0.1-macos \
    --private-key "1b098c0f518c046dc01bc9cf785cb670e6e059d99a294319598583f546f420c8" \
    --graph-account "0xedfecf44f942d53b0b8c9559560bc6cb3d6d2c1d" \
    --identifier "QmXoFPYJmtSraJDTEGDXLAP52FjVQmLBJqrj6DUevk47o" \
    --new-hash "Qmf7mgYnJktiYTvXGwBhbR52lXpjCZgFLA5Y9kugHtZmWU" \
    --subgraph-id "J5s8MTaDrNwxHVeB2okoVnZ2eULeYc47L6LKef6BLWwX" \
    --index-network "goerli" \
    --migration-time 1692114708
```

## (or) Run using a pre-built binary

1. Clone the repo

```bash
git clone https://github.com/graphops/one-shot-cli.git
```

2. Navigate to the project directory

```bash
cd one-shot-cli
```

3. Run the CLI

```bash
cargo run --release -- --private-key "1b098c0f518c046dc01bc9cf785cb670e6e059d99a294319598583f546f420c8" \
    --graph-account "0xedfecf44f942d53b0b8c9559560bc6cb3d6d2c1d" \
    --identifier "QmXoFPYJmtSraJDTEGDXLAP52FjVQmLBJqrj6DUevk47o" \
    --new-hash "Qmf7mgYnJktiYTvXGwBhbR52lXpjCZgFLA5Y9kugHtZmWU" \
    --subgraph-id "J5s8MTaDrNwxHVeB2okoVnZ2eULeYc47L6LKef6BLWwX" \
    --index-network "goerli" \
    --migration-time 1692114708
```
