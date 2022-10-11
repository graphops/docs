---
sidebar_position: 2
---
# 🟦 Design Principles

There are two main components of Graphcast
- Graphcast SDK: The base layer sdk which abstracts interaction with The Graph stack and Waku network. (Ethereum client, Graph node client, indexer management server client, network subgraph, registry subgraph, waku node)
- Radio: Customizable radio application which defines the specific message formats and logic around constructing and handling the messages.  

## 1️⃣ Base layer (SDK)
The base layer is used to abstract all the necessary components of each Radio away from the user. That includes:
- Connection to Graphcast by spinning up a [Waku](https://waku.org/) node. It also provides an interface to subscribe to receive messages on specific topics and to broadcast messages onto the network.
- Interactions with an Ethereum node, Graph node, Indexer management server.
- Queries to network subgraph and registry subgraph. 
- Checks message validity for past message injections, nonexistent blocks, expired timestamps, and signatured by the operator of an on-chain active indexer (can be used to trace reputations). 

## 2️⃣ Radio agent (Application: POI cross-checker)
Our first example radio is built for real-time cross-checking of Indexer Proofs of Indexing (POIs). Indexers must generate valid POIs to earn indexing rewards. Indexers find it benefiting to indexing operations to alert each other on subgraph health in community discussions. To alleviate the manual workload, this Radio agent
- Defines message types and topics
- Collects POIs from graph node and send as a message
- Observes relevant messages and aggregates POIs sent from operators with 
- Monitors the network for conflicts and update the stack. In this case, the agent sets indexer's cost model to a high constant to avoid query volume.
