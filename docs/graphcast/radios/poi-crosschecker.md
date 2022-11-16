---
sidebar_position: 5
---

# 📟 POI cross-checker 

### Introduction

The key requirement for an Indexer to earn indexing rewards is to submit a valid Proof of Indexing promptly. The importance of valid POIs causes many Indexers to alert each other on subgraph health in community discussions. To alleviate the Indexer workload, this Radio can aggregate and exchange POI along with a list of Indexer on-chain identities that can be used to trace reputations. With the pubsub pattern, the Indexer can effectively automatically close an allocation when some trusted Indexer(s) publishes a different POI or alert subgraph syncing failure.

### Workflow

When an Indexer runs the POI cross-checker, they immediately start listening for new blocks on the Ethereum mainnet. On a certain interval (in the current example it's set to 5 blocks) the Radio fetches all the allocations of that Indexer and saves a list of the IPFS hashes of the subgraphs that the Indexer is allocating to. Right after that we loop through the list and send a request for a normalised POI for each subgraph (using the metadata of the block that we're on) and save those POIs in a sqlite database inside the container, below we will refer to these POIs as _local_ POIs since they are the ones that we've generated.

At the same time, other Indexers running the Radio will start doing the same, which means that messages start propagating through the network. We handle each message and add the POI from it in another in-memory store, we can refer to these POIs as _remote_ POIs since these are the ones that we've received from other network participants. The messages don't come only with the POI and subgraph hash, they also include a nonce (UNIX timestamp), block number, sender (operator) address and sender stake. It's important to note that before saving an entry to the store, we send a request for the sender's on-chain stake, which will be used later for sorting the entries.

After another interval (3 blocks in the current example) we compare our _local_ POIs with the _remote_ ones. We sort the remote ones so that for each subgraph (on each block) we can take the POI that is backed by the most on-chain stake (❗ This does not mean the one that is sent by the Indexer with the highest stake, but rather the one that has the most **combined** stake of all the Indexers that attested to it). After we have that top POI, we compare it with our _local_ POI for that subgraph at that block. Voilà! We now know whether our POI matches with the current consensus on the network.

[![](https://mermaid.ink/img/pako:eNptz8EKwjAMBuBXKTkpbC-wg7A5j17cbtZDaUJXtrajawXZ9u5WhyBoTsnPR0hmkA4JClBejB1ra25ZqvJ6HDTZcGN5flguJEnfCdmZpkkomhZW7c4O40D7f74anOxZ67VS5H9s9TYN2e99JWRgyBuhMR0zvySH0JEhDkVqUfieA7drcnFEEeiEOjgPRfCRMhAxuOZh5WfeTK1F-sts4foEUQJOKQ)](https://mermaid.live/edit#pako:eNptz8EKwjAMBuBXKTkpbC-wg7A5j17cbtZDaUJXtrajawXZ9u5WhyBoTsnPR0hmkA4JClBejB1ra25ZqvJ6HDTZcGN5flguJEnfCdmZpkkomhZW7c4O40D7f74anOxZ67VS5H9s9TYN2e99JWRgyBuhMR0zvySH0JEhDkVqUfieA7drcnFEEeiEOjgPRfCRMhAxuOZh5WfeTK1F-sts4foEUQJOKQ)
