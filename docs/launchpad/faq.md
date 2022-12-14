---
sidebar_position: 90
---

# Frequently Asked Questions

## Do I need a machine for launchpad-starter?

No! The [Client Side Tooling](client-side-tooling) that comes with Launchpad should be run on your local machine. These tools are only used to instruct your cluster of services what to do.

## Can I migrate my existing Indexer into Launchpad?

Yes!

When thinking about the stateful data that would be worth migrating it can be split in 3 buckets:

1. **blockchain node data snapshot** - to migrate this data fire up `launchpad` from scratch and when you get to deploying the full gnosis namespace you would instead edit the following configuration in your `launchpad-starter` to point at the existing blockchain data. For example to point a `nethermind` deployment to an existing snapshot you would append the below in [`<your-private-copy-of-launchpad-starter>/helmfiles/release-names/gnosis-mainnet/nethermind-archive-trace-gnosis-mainnet-0.yaml`](https://github.com/graphops/launchpad-starter/blob/main/helmfiles/release-values/gnosis-mainnet/nethermind-archive-trace-gnosis-mainnet-0.yaml) before deploying the chart
```yaml
nethermind:
  restoreSnapshot:
    enable: true
    snapshotUrl: https://a-link-to-your-snapshot-archive.tar.gz
    mode: streaming # or multipart depending on chain
```

2. postgreSQL - **subgraph data** - all data is deterministic and therefore you could lose subgraph data and recreated from scratch - provided that you don't have hundreds of subgraphs synced in which case you'd have to consider the computational load on your database when resyncing from scratch.
   
3. postgreSQL - **indexer data**

Both **subgraph data** and **indexer data** can be restored via tools such as [`pg_dump`](https://www.postgresql.org/docs/current/app-pgdump.html) to backup current PostgreSQl databases and [`pg_restore`](https://www.postgresql.org/docs/current/app-pgrestore.html) to build your old database into your `launchpad-starter` instances of `graph-mainnet`.