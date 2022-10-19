---
sidebar_position: 8
---

# Workshop 6: StakeSquid’s Docker Toolkit

All the calls and workshops are recorded and can be found in [this](https://www.youtube.com/playlist?list=PLTqyKgxaGF3SvYpAaIFAj9Gr-Rp0l7gUa) playlist. 

In [Indexer Office Hours](https://www.youtube.com/channel/UCQ7G_cCufIVUdUUUf-jdoVA) 81, Payne from StakeSquid gave a workshop on [Docker Toolkit for indexer stack](https://www.youtube.com/watch?v=85Tw5dCMrwo).


[Here](https://github.com/StakeSquid/graphprotocol-testnet-docker) is the docs used in the workshop. 

Here is what is covered in the workshop: 

- How the Docker setup came to be
- What the Docket toolkit is used for 
- Prerequisites for using the toolkit
- Getting started with the toolkit 
- How to manage allocations using the toolkit
- Q&A 

## Highlights of the Workshop

- **Ecosystem Tools for Indexer Stack**
    - [Docker-compose setup](https://github.com/StakeSquid/graphprotocol-testnet-docker) from StakeSquid
    - [Kubernetes Launchpad](https://github.com/graphops/launchpad-starter) from GraphOps
    - [Bare metal install suite](https://github.com/MindHeartSoul/Graph-InstallSuite) from MindHeartSoul
    - [Ansible install suite](https://github.com/stakemachine/thegraph-ansible) from Stake-machine
    - Build your own setup… but why reinvent the wheel?

- **Prerequisites for Docker toolkit**

: stake on the network and set up an operator
    - Stake on the Network
    - Set your Operator
    - RAM: 8GB
    - Disk: 3TB+ SSD
    - Docker: v18.06.0+
    - Docker-compose: v3.7

- **How to run an archive node on Gnosis post-merge**
    - Run a version of the Execution Layer client (e.g. Nethermind) that supports the Merge for GnosisChain
    - Make sure that the Execution Layer client is fully synced 
    - Deploy a Consensus Layer node, see instructions at [this link](https://docs.gnosischain.com/node/consensus-layer-validator)
    - Get prepared for the Merge, see recommendations from the [Prysm](https://docs.prylabs.network/docs/prepare-for-merge) team and the [Nethermind team](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge)


*Note that this is not a comprehensive summary. Please watch the full workshop to make sure you do not miss any important information.*