---
sidebar_position: 1
---

# Introduction

## Subgraph Radio

Subgraph Radio is an optional component of the Graph Protocol Indexer Stack. It uses the Graphcast Network to facilitate the exchange of data among Indexers and other participants about Subgraphs.

The source code for the Subgraph Radio is available [on GitHub](https://github.com/graphops/subgraph-radio) and Docker builds are automatically published as [GitHub Packages](https://github.com/graphops/subgraph-radio/pkgs/container/subgraph-radio). Subgraph Radio is also published as a crate [on crates.io](https://crates.io/crates/subgraph-radio).

### Basic Configuration

The Subgraph Radio can be configured using environment variables, CLI arguments, as well as a `.toml` or `.yaml` configuration file. Take a look at the [configuration options](#configuration-options) to learn more. In all cases, users will need to prepare the following configuration variables:

| Name                         | Description and examples                                                                                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PRIVATE_KEY`                | Private key of the Graphcast ID wallet or the Indexer Operator wallet (precendence over `MNEMONIC`).<br/>Example: `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef` |
| `INDEXER_ADDRESS`            | Indexer address for Graphcast message verification, in all lowercase.<br/>Example: `0xabcdcabdabcdabcdcabdabcdabcdcabdabcdabcd`                                                         |
| `GRAPH_NODE_STATUS_ENDPOINT` | URL to a Graph Node Indexing Status endpoint.<br/>Example: `http://index-node:8030/graphql`                                                                                             |
| `INDEXER_MANAGEMENT_SERVER_ENDPOINT` | URL to the Indexer management server of Indexer Agent. Example: `http://localhost:18000`                                                                                        |
| `REGISTRY_SUBGRAPH`          | URL to the Graphcast Registry subgraph for your network. Check [APIs](../../sdk/registry#subgraph-apis) for your preferred network                                                      |
| `NETWORK_SUBGRAPH`           | URL to the Graph Network subgraph. Check [APIs](../../sdk/registry#subgraph-apis) for your preferred network                                                                            |
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
