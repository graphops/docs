---
sidebar_position: 1
---

# 👋 Introduction

Is there something you'd like to learn from or share with your fellow Indexers in an automated manner, but it's too much hassle or costs too much gas?

Currently, the cost to broadcast information to other network participants is determined by gas fees on the Ethereum blockchain. Graphcast solves this problem by acting as an optional decentralized, distributed peer-to-peer (P2P) communication tool that allows Indexers across the network to exchange information in real time. The cost of exchanging P2P messages is near zero, with the tradeoff of no data integrity guarantees. Nevertheless, Graphcast aims to provide message validity guarantees (i.e. that the message is valid and signed by a known protocol participant) with an open design space of reputation models.

We intend to release a Software Development Kit that allows developers to build Radios, which are gossip-powered applications that Indexers can run to serve a given purpose. We also intend to create a few Radios for the following uses cases:

- Real-time cross-checking of subgraph data integrity, with active bail-out in the case of diverging from stake-weighted POI consensus.
- Conducting auctions and coordination for warp syncing subgraphs, substreams, and Firehose data from other Indexers.
- Self-reporting on active query analytics, including subgraph request volumes, fee volumes, etc.
- Self-reporting on indexing analytics, including subgraph indexing time, handler gas costs, indexing errors encountered, etc.
- Self-reporting on stack information including graph-node version, Postgres version, Ethereum client version, etc.

## Learn more

If you want to find out more about the initial idea behind Graphcast, as well as stay up to date with the newest developments, keep an eye on the [GRC post on The Graph Forum](https://forum.thegraph.com/t/grc-001-graphcast-a-gossip-network-for-indexers/3544).

## Contributing

We welcome and appreciate your contributions! 🤝 
➡️ [Proof of Concept repo](https://github.com/graphops/graphcast-poc)
➡️ [SDK repo](https://github.com/graphops/graphcast-sdk)
