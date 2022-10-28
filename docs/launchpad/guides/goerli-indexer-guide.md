---
---
# Goerli Indexer Guide

This guide is intended to be an end to end walk-through of setting up an Indexer running on the Graph Protocol Testnet on the Ethereum Goerli network.

## Prerequisites

All the [Launchpad Prerequisites](../prerequisites) apply, so be sure to read them first.

You will need:
- At least one server running Ubuntu 22.04 with keypair authenticated SSH access
- A web browser with MetaMask installed

## What we're going to do

1. Create all the relevant Ethereum accounts, fund them, register them on-chain with the protocol
1. Follow the [Quick Start](../quick-start) guide to set up our local machine, and then set up our cluster of servers, and finally deploy the Graph Stack
1. Configure DNS, verify ingress and TLS is working
1. Allocate to subgraph deployments
1. Verify that we are serving queries

## Create the Indexer and Operator Ethereum accounts

We will need to set up two new Ethereum accounts:

1. The Indexer account: this account is your Indexer's identity, and is used to stake GRT into the protocol. This account owns your in-protocol GRT. This key should be kept very safe!
1. The Operator account: this account is authorised to perform some operational actions (like managing allocations) on behalf of your Indexer. The key for this account will live on your server(s). The Indexer Software uses this account to automate interactions with the protocol. This account does not own your GRT, but can take actions that put your GRT at risk (e.g. submitting a bad POI could make you liable to slashing). You can replace the Operator account with a new one at any time.

## Generating mnemonics for your new accounts

[Ian Coleman's BIP39 generator](https://iancoleman.io/bip39/) is great for quickly generating new mnemonics and their derived accounts.

1. Set the "Coin" to "ETH - Ethereum".
1. Click Generate
1. Take note of: the mnemonic and (optionally, if you follow this guide) all details for the first derived address

Generate two new mnemonics and save their details.

:::tip
When setting up your Indexer account for mainnet, use a more secure method, like a hardware wallet, for generating your Indexer account.
:::

## Funding our new accounts

Both our new accounts will need ETH in order to pay for transaction costs. The Operator account will be used for all automated protocol interactions, so it will need a lot more ETH than the Indexer account. The Indexer account will need to pay for gas to stake GRT into the protocol, and set various metadata and parameters.

For the Goeli testnet, there are a number of ETH faucets that can be used to fund your new accounts. You can find various options here: https://faucetlink.to/goerli

Our Indexer account will also need at least 100,000 Goerli GRT in order to stake in the protocol. If you are a MIPs participant, you should follow the relevant instructions to get that GRT. Otherwise there is a Goerli GRT faucet available in the [Graph Protocol Discord](https://thegraph.com/discord).

## Registering our Indexer and Operator accounts

We will use [The Graph's Testnet Network app](https://testnet.thegraph.com) to register our new accounts with the protocol on-chain.

1. Use MetaMask to import the private key for your Indexer mnemonic's first derived account. This will allow us to transact as our Indexer.
1. Navigate to "Indexing" under your profile dropdown menu
1. Click the Stake button and Stake at least 100k GRT (first allowing GRT token access with an approval transaction, followed by the stake transaction)
1. Navigate to "Settings" under your profile dropdown menu, and then to "Operators" in the left hand menu
1. Click the plus symbol, paste in your Operator mnemonic's first derived address, click Add and submit the transaction
1. (optionally) Navigate to other settings to configure profile details

## Launching off the pad!

Now that our accounts are ready, let's follow the [Quick Start](../quick-start) guide to:

1. Create a new repository for our infrastructure
1. Configure our local machine to command our cluster
1. Configure our servers into a Kubernetes cluster
1. Deploy core cluster services and the Graph Indexing stack into our cluster

