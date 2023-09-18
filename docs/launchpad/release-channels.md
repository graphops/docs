---
sidebar_position: 3
---

# Release Channels

Due to the intricate nature of managing indexing operations for multiple blockchains and their associated dependencies, the Launchpad project is a complex system with numerous interdependencies. 

For a reminder of the various components within Launchpad and their intricate connections, we recommend revisiting our [Intro](intro.md).

This guide offers a comprehensive walkthrough, outlining the steps, automated and manual, required to introduce a new application, ie. Erigon, into the 'launchpad-charts' repository as a **canary** release and ultimately transitioning it to a **stable** state within its designated 'launchpad-namespace,' such as Ethereum. 

The diagram below provides a visual representation illustrating the interdependence and impact of various components and workflows.

![Release Channels Flow](/img/launchpad-release-channels.svg)

# From new version to `launchpad-namespaces` stable

Here is a more comprehensive breakdown of the process, divided into automated workflows within launchpad-charts and launchpad-namespaces, as well as manual operator steps. This process guides the transition of a new application version from the initial launchpad-charts canary release to its eventual stability within the corresponding launchpad-namespace. For this walkthrough we will use Erigon as an example.

1. **launchpad-charts** Bot watches [Erigon tags](https://github.com/ledgerwatch/erigon/tags) and as a new version is published it opens a PR into [`launchpad-charts/charts/erigon` ](https://github.com/graphops/launchpad-charts/pull/133)
2. **launchpad-charts** The new PR triggers a workflow that publishes a new [`pre-release`](https://github.com/graphops/launchpad-charts/releases/tag/erigon-0.8.1-canary.1) into the repo.
3. **launchpad-namespaces** Bot sees new chart version and pushes [new PR to namespaces](https://github.com/graphops/launchpad-namespaces/pull/38)
4. **launchpad-namespaces** The new PR triggers a workflow that publishes a new [`ethereum tag`](https://github.com/graphops/launchpad-namespaces/releases/tag/ethereum-v0.2.1) into the repo.
5. **operator** - updates their helmfile reference and runs changes against ethereum testnet:

```yaml
# initial helmfile.yaml
- path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
    - values/eth-mainnet/values.yaml

  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml
    selectorsInherited: true
    values:
    - flavor: goerli
      helmDefaults:
        <<: *helmDefaults
    - values/eth-goerli/values.yaml
```

```yaml
# updated helmfile.yaml
- path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
    - values/eth-mainnet/values.yaml

  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml?ref=renovate/ethereum
    selectorsInherited: true
    values:
    - flavor: goerli
      helmDefaults:
        <<: *helmDefaults
    - values/eth-goerli/values.yaml
```

6. **operator** runs `task releases:apply -- eth-goerli` to apply new versions in their cluster against `eth-goerli`

7. **operator**: if the previous task runs successfully and workloads appear healthy, the operator approves the PR and merges it, resulting in the creation of a new `ethereum` tag in `launchpad-namespaces`

8. **operator**: repeats steps 5 & 6 against ethereum mainnet:

```yaml
# initial helmfile.yaml
- path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
    - values/eth-mainnet/values.yaml

  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml/?ref=ethereum-canary/latest
    selectorsInherited: true
    values:
    - flavor: goerli
      helmDefaults:
        <<: *helmDefaults
    - values/eth-goerli/values.yaml
```

```yaml
# updated helmfile.yaml
# replace ethereum-v0.2.1 with latest tag of ethereum namespaces produced by step 7
- path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum/helmfile.yaml?ref=ethereum-v0.2.1
    selectorsInherited: true
    values:
    - helmDefaults:
        <<: *helmDefaults
    - values/eth-mainnet/values.yaml

  - path: git::https://github.com/graphops/launchpad-namespaces.git@ethereum-canary/helmfile.yaml
    selectorsInherited: true
    values:
    - flavor: goerli
      helmDefaults:
        <<: *helmDefaults
    - values/eth-goerli/values.yaml
```





