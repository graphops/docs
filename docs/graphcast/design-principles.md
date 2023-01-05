---
sidebar_position: 2
---

# ⚙️ Design Principles

There are two main components of Graphcast

- The Graphcast SDK: The base layer SDK which interfaces with The Graph stack and the Waku network. This includes interactions with an Ethereum client, a Graph node client, a client for the Indexer management server, the Network subgraph and the Registry subgraph).
- Radios: Highly customizable gossip applications, built with the help of the Graphcast SDK, which define the specific message formats and logic around constructing and handling the messages.

## The Graphcast SDK

The SDK is the base layer which is used to abstract all the necessary components of each Radio away from the user. That includes:

- Connection to Graphcast by spinning up a [Waku](https://waku.org/) node. It also provides an interface to subscribe to receive messages on specific topics and to broadcast messages onto the network.
- Interactions with an Ethereum node, a Graph node and a client for the Indexer management server.
- Queries to Network and Registry subgraphs.
- Checks message validity for past message injections, nonexistent blocks and expired timestamps. It also guarantees that messages are signed by an authorised operator address of an active on-chain Indexer (this can be used as a basis for a reputation system).

## Radios

Our first example Radio is built for real-time cross-checking of Indexer Proof of Indexing attestations (POIs). Indexers must generate valid POIs to earn indexing rewards. Indexers find it beneficial to alert each other on the health status of subgraphs in community discussions. To alleviate the manual workload, the POI cross-checker Radio:

- Defines message types and topics
- Collects POIs from the Graph node and sends them inside of Graphcast messages along with other useful metadata
- Observes relevant messages and aggregates POIs sent from other Indexers, in order to compare _local_ POIs to _remote_ POIs
- Monitors the network for conflicts and takes certain actions if needed, for instance Indexers can configure an alert system to send messages to a custom channel in their Slack workspace (support for Discord and email notifications coming soon).
