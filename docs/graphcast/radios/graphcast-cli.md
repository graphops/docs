---
sidebar_position: 2
---

# Graphcast CLI

The source code for the Graphcast CLI is available [on GitHub](https://github.com/graphops/graphcast-cli).

## Introduction

The Graphcast CLI enables sending one-off messages. Currently, it can be used for the [Subgraph Upgrade Pre-sync feature](https://docs.graphops.xyz/graphcast/design-principles#subgraph-upgrade-pre-sync) of Subgraph Radio.

The Graphcast CLI is configured using config variables. You will need to prepare the following config variables (either as env variables or passing CLI args when running the CLI):

| Name                | Description and Examples                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PRIVATE_KEY`       | Private key to the Graphcast ID wallet (precendence over mnemonics).<br/>Example: `PRIVATE_KEY=YOUR_PRIVATE_KEY`                                                |
| `MNEMONIC`          | Mnemonic to the Graphcast ID wallet (first address of the wallet is used; Only one of private key or mnemonic is needed).<br/>Example: `MNEMONIC=YOUR_MNEMONIC` |
| `GRAPH_ACCOUNT`     | Graph account corresponding to Graphcast operator.<br/>Example: `GRAPH_ACCOUNT=YOUR_GRAPH_ACCOUNT`                                                              |
| `REGISTRY_SUBGRAPH` | Subgraph endpoint to the Graphcast Registry.<br/>Default: `https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli`                           |
| `NETWORK_SUBGRAPH`  | Subgraph endpoint to The Graph network subgraph.<br/>Default: `https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-goerli`                      |
| `GRAPHCAST_NETWORK` | Supported Graphcast networks: mainnet, testnet.<br/>Default: `testnet`                                                                                          |
| `LOG_LEVEL`         | Logging configuration to set as RUST_LOG.<br/>Default: `info`                                                                                                   |
| `LOG_FORMAT`        | Support logging formats: pretty, json, full, compact.<br/>Default: `pretty`                                                                                     |

The Graphcast CLI code is very extensible and could be altered to send any kind of Graphcast-compatible message to the network.

## Usage

The Graphcast CLI supports the following subcommands - `upgrade-presync` and `indexing-status`. Both of them work with additional configuration options:

| Name          | Description and Examples                               |
| ------------- | ------------------------------------------------------ |
| `SUBGRAPH_ID` | Subgraph id shared by the old and new deployment.      |
| `NEW_HASH`    | Subgraph hash for the upgrade version of the subgraph. |

The `upgrade-presync` subcommand has an additional `MAX_RETRY` variable, which specifies the number of retries for the subcommand. The default value is `5`.

Below you can see examples of working CLI commands.

### Run with Docker

1. Pull the Graphcast CLI image

```bash
docker pull ghcr.io/graphops/graphcast-cli:latest
```

2. Run the image, providing the required configuration variables. Here's a sample configuration:

```bash
docker run ghcr.io/graphops/graphcast-cli \
    --private-key "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" \
    --graph-account "0xe9a1cabd57700b17945fd81feefba82340d9568f" \
    upgrade-presync --new-hash "QmVVfLWowm1xkqc41vcygKNwFUvpsDSMbHdHghxmDVmH9x" \
    --subgraph-id "CnJMdCkW3pr619gsJVtUPAWxspALPdCMw6o7obzYBNp3"
```

### (or) Run using a pre-built binary

We also provide pre-built binaries for Ubuntu and MacOS, which you can find in the `Assets` section on each release in the [releases page](https://github.com/graphops/graphcast-cli/releases) on Github. Simply download the binary, make it executable (`chmod a+x ./graphcast-cli-{TAG}-{SYSTEM}`) and then run it (using `./graphcast-cli-{TAG}-{SYSTEM}`), like this:

```bash
./graphcast-cli-0.0.1-macos \
    --private-key "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" \
    --graph-account "0xe9a1cabd57700b17945fd81feefba82340d9568f" \
    upgrade-presync --new-hash "QmVVfLWowm1xkqc41vcygKNwFUvpsDSMbHdHghxmDVmH9x" \
    --subgraph-id "CnJMdCkW3pr619gsJVtUPAWxspALPdCMw6o7obzYBNp3"
```

### (or) Run using a pre-built binary

1. Clone the repo

```bash
git clone https://github.com/graphops/graphcast-cli.git
```

2. Navigate to the project directory

```bash
cd graphcast-cli
```

3. Run the CLI

```bash
cargo run --release -- --private-key "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" \
    --graph-account "0xe9a1cabd57700b17945fd81feefba82340d9568f" \
    upgrade-presync --new-hash "QmVVfLWowm1xkqc41vcygKNwFUvpsDSMbHdHghxmDVmH9x" \
    --subgraph-id "CnJMdCkW3pr619gsJVtUPAWxspALPdCMw6o7obzYBNp3"
```
