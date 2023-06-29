---
sidebar_position: 2
---

# ⚙️ Design Principles

There are two main components of Graphcast

- The Graphcast SDK: The base layer SDK which interfaces with The Graph stack and the Waku network. This includes interactions with an Ethereum client, a Graph node client, a client for the Indexer management server, the Network subgraph and the Registry subgraph).
- Radios: Highly customizable gossip applications, built with the help of the Graphcast SDK, which define the specific message formats and logic around constructing and handling the messages. They are the nodes communicating in the Graphcast Network.

## The Graphcast SDK

The SDK is the base layer which is used to abstract all the necessary components of each Radio away from the user. That includes:

- Establishes a connection to Graphcast via a [Waku](https://waku.org/) Gossip node, providing an interface for subscribing to specific topics and broadcasting messages across the network.
- Interactions with an Ethereum node, a Graph node and a client for the Indexer management server.
- Queries to Network and Registry subgraphs.
- Checks message validity for past message injections, nonexistent blocks and expired timestamps. It also guarantees that messages are signed by an authorised operator address of an active on-chain Indexer (this can be used as a basis for a reputation system).
- Supports a flexible and customizable configuration of the Graphcast gossip agent, enabling specification of network settings, peer discovery mechanisms, message encoding formats, and more. For detailed instructions on configuring Graphcast to suit your needs, refer to the configuration guide.
- Topics in Graphcast represent different categories or subjects of information. Nodes can dynamically subscribe to specific topics to receive messages related to those topics. Topics enable efficient message routing and dissemination within the network.
- Provides comprehensive message handling structure to ensure that messages are reliably transmitted, received, and processed within the network. 

## Radios

General Radio components

- Supports Radio for specific use cases.
- Controls topic subscriptions dynamically for interested topics. 
- Provides radio type definition used to verify the integrity and authenticity of messages exchanged within the network.
- Collects Radio-specific information and incorporates it into Graphcast messages along with other relevant metadata.
- Observes and handles relevant messages received from peers.
- Provides performance metrics, logs, and API services.

Our first example Radio is built for real-time cross-checking of Indexer Proof of Indexing attestations (POIs). Indexers must generate valid POIs to earn indexing rewards. Indexers find it beneficial to alert each other on the health status of subgraphs in community discussions. To alleviate the manual workload, the POI Radio:

- Defines message types and topics
- Collects POIs from the Graph node and sends them inside of Graphcast messages along with other useful metadata
- Observes relevant messages and aggregates POIs sent from other Indexers, in order to compare _local_ POIs to _remote_ POIs
- Monitors the network for conflicts and takes certain actions if needed, for instance Indexers can configure an alert system to send messages to a custom channel in their Slack workspace (support for Discord and email notifications coming soon).
