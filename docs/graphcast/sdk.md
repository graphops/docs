---
sidebar_position: 3
---

# 🧰 SDK

As mentioned before, the SDK is the base layer which is used to abstract all the necessary components of each Radio away from the
user. In the current Graphcast POC implementation that's achieved by a few classes that hold the needed functionality, we'll take
a deeper look at those classes below.

## Gossip Agent

The main structure that holds the SDK logic is the `GossipAgent` class, which looks like this:

```typescript
export class GossipAgent {
  messenger: Messenger;
  observer: Observer;
  logger: Logger;
  clientManager: ClientManager;
  registry: Client;
  radioFilter: RadioFilter;
  waku?: Waku;
  operator?: string;
  indexer?: string;
}
```

The main properties we need to take note of are `messenger`, `observer`, `clientManager` and `radioFilter`. We will look into what each of them does below.

### Messenger

The `Messenger` class handles constructing, signing and propagating messages onto the Graphcast network. It also wraps the Radio-specific message payload with network metadata like nonce (UNIX timestamp), block number and block hash.

### Observer

The `Observer` class handles decoding and validating incoming messages. It also runs custom handler logic (defined by the Radio) in the form of a callback that takes the decoded and validated message payload as input.

### ClientManager

The `ClientManager` class is a wrapper for a few other ones that handle interactions with different part of the stack that Graphcast needs to interact with. Let's break it down a bit more:

```typescript
export class ClientManager {
  ethClient: EthClient;
  networkSubgraph: Client;
  registry: Client;
  graphNodeStatus: Client;
  indexerManagement: Client;
}
```

All of those properties represent different services that we need to query/send requests to.

### RadioFilter

The `RadioFilter` class includes all internal logic that has to do with security checks, as well as checks on the Indexer identity (identity resolution, minimum stake requirements, slashing and dispute history).
