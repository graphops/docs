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

- **How the Docker setup came to be**

    StakeSquid built this toolkit two years ago during [Mission Control Testnet](https://thegraph.com/blog/testnet-announcement/), a MIPs like incentivized program. After some time the tool became public and lots of indexers started using it. 

- **Prerequisites for Docker toolkit**
    - Stake on the Network
    - Set your Operator
    - Ethereum Archive Node Specs
    - Software Prerequisites

- **What is the importance of using an operator wallet?**

    Operator wallet takes care of the transactions in the network like managing allocations, but it does not have access to the funds in your staking wallet. Even if someone breaks into your server, they won't have access to your staked GRT, but only to a small amount of ETH you would keep in your operator wallet for transaction costs. 

*Note that this is not a comprehensive summary. Please watch the full workshop to make sure you do not miss any important information.*