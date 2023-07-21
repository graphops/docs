---
sidebar_position: 1
---

# Introduction

Graphcast SDK is a decentralized, distributed peer-to-peer (P2P) communication tool that enables users across the network to exchange information in real-time. It is designed to overcome the high cost of signaling or coordination between blockchain participants by enabling off-chain communication (gossip/cheap talk). This is particularly useful for applications where real-time communication is essential but the cost of on-chain transactions is prohibitive.

## How it Works

The SDK serves as a base layer for Radio developers, providing essential components to build their applications without starting from scratch. These components include:

1. **Connection to the Graphcast network**: Forms a communication network and provides an interface to subscribe to receive messages on specific topics and to broadcast messages onto the network. Allows for real-time communication between different nodes in the network.

2. **Interactions with Graph entities**: This allows for necessary interactions with Graph node, Graph network subgraph, Graphcast registry.

An example of a ping-pong Radio is provided in the examples folder, which leverages the base layer and defines the specific logic around constructing and sending messages, as well as receiving and handling them. This example can serve as a starting point for developers looking to build their own Radios.

## Network Configurations

A Graphcast radio can interact with many parts of The Graph network modularly. The network configurations actively supported by the team include `mainnet` (Ethereum mainnet and Arbitrum One) and `testnet` (Goerli and Arbitrum Goerli). You are free to define and use your own Graphcast Network and Graphcast Registry. This flexibility allows for a wide range of applications and use cases.

## Contributing

Contributions are welcome and appreciated! Please refer to the Contributor Guide, Code Of Conduct, and Security Notes for this repository. These documents provide guidelines for how to contribute to the project in a way that is beneficial to all parties involved.

## Upgrading and Testing

Updates to the SDK will be merged into the main branch once their release PR has been approved. For testing, it is recommended to use `nextest` as your test runner. You can run the suite using the command `cargo nextest run`. Regular testing is crucial to ensure the stability and reliability of the software.

## Resources

- [Crates package](https://www.npmjs.com/package/@graphops/graphcast)
- [GitHub Repository](https://www.github.com/graphops/graphcast-sdk)
