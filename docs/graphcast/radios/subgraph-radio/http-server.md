---
sidebar_position: 5
---

# HTTP Server

The Radio spins up an HTTP server with a GraphQL API when `SERVER_HOST` and `SERVER_PORT` environment variables are set. The supported routes are:

- `/health` for health status
- `/api/v1/graphql` for GET and POST requests with GraphQL playground interface

The GraphQL API now includes several advanced queries:

- `radioPayloadMessages`
- `localAttestations`
- `upgradeIntentMessages`
- `comparisonResults`
- `comparisonRatio`

Below are some example queries:

```graphql
query {
  radioPayloadMessages {
    identifier
    nonce
    signature
    graphAccount
    payload {
      identifier
      content
    }
  }
  localAttestations {
    deployment
    blockNumber
    attestation {
      ppoi
    }
  }
  comparisonResults(identifier: "Qm...") {
    deployment
    blockNumber
    resultType
    localAttestation {
      ppoi
    }
    attestations {
      senders
      stakeWeight
      ppoi
    }
  }
  comparisonRatio {
    deployment
    blockNumber
    stakeRatio
  }
  upgradeIntentMessages {
    subgraphId
    newHash
    nonce
    graphAccount
  }
}
```

You can customize the returned data from the `comparisonRatio` query by providing optional arguments - `deployment`, `block` and `resultType`.

```graphql
query {
  comparisonRatio(deployment: "Qm...", block: 17887350, resultType: MATCH) {
    deployment
    blockNumber
    stakeRatio
  }
}
```

In this example, the `stakeRatio` query will return the stake ratios only for attestations from deployment "Qm..." and block number 17887350, and only for the specified result type.

Note: The `result_type` field of the filter corresponds to the `resultType` field in the `comparisonResults` query. This field represents the type of comparison result.

`stakeRatio` orders the attestations by stake weight, then computes the ratio of unique senders.

To understand more about the format of the ratio results, check out [this section](#poi-comparison-results).

These queries provide a clear aggregation of the attestations from remote messages, giving a concise understanding of the Radio's state. The optional filters - deployment, block, and filter - can be used to refine the results.
