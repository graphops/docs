"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"launchpadSidebar":[{"type":"link","label":"Introduction","href":"/launchpad/intro","docId":"launchpad/intro"},{"type":"link","label":"Prerequisites","href":"/launchpad/prerequisites","docId":"launchpad/prerequisites"},{"type":"link","label":"Quick Start","href":"/launchpad/quick-start","docId":"launchpad/quick-start"},{"type":"link","label":"Design Principles","href":"/launchpad/design-principles","docId":"launchpad/design-principles"},{"type":"link","label":"Client Side Tooling","href":"/launchpad/client-side-tooling","docId":"launchpad/client-side-tooling"},{"type":"link","label":"Server Side Stack","href":"/launchpad/server-side-stack","docId":"launchpad/server-side-stack"},{"type":"link","label":"Frequently Asked Questions","href":"/launchpad/faq","docId":"launchpad/faq"},{"type":"link","label":"Other Resources","href":"/launchpad/other-resources","docId":"launchpad/other-resources"},{"type":"category","label":"Guides","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Arbitrum Archive Mainnet Node Guide","href":"/launchpad/guides/arbitrum-archive-kubernetes-guide","docId":"launchpad/guides/arbitrum-archive-kubernetes-guide"},{"type":"link","label":"Avalanche Archive Mainnet Node Guide","href":"/launchpad/guides/avalanche-archive-kubernetes","docId":"launchpad/guides/avalanche-archive-kubernetes"},{"type":"link","label":"Celo Archive Mainnet Node Guide","href":"/launchpad/guides/celo-archive-kubernetes-guide","docId":"launchpad/guides/celo-archive-kubernetes-guide"},{"type":"link","label":"Goerli Indexer Guide","href":"/launchpad/guides/goerli-indexer-guide","docId":"launchpad/guides/goerli-indexer-guide"}]}],"gnSidebar":[{"type":"link","label":"Introduction","href":"/graphcast/intro","docId":"graphcast/intro"},{"type":"link","label":"Design Principles","href":"/graphcast/design-principles","docId":"graphcast/design-principles"},{"type":"category","label":"SDK","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/graphcast/sdk/intro","docId":"graphcast/sdk/intro"},{"type":"link","label":"Radio Development","href":"/graphcast/sdk/radio-dev","docId":"graphcast/sdk/radio-dev"},{"type":"link","label":"Registry","href":"/graphcast/sdk/registry","docId":"graphcast/sdk/registry"}]},{"type":"category","label":"Radios","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"3LA - Listener Radio","href":"/graphcast/radios/3la-monitor","docId":"graphcast/radios/3la-monitor"},{"type":"link","label":"Subgraph Radio","href":"/graphcast/radios/subgraph-radio","docId":"graphcast/radios/subgraph-radio"},{"type":"link","label":"One-shot CLI","href":"/graphcast/radios/one-shot","docId":"graphcast/radios/one-shot"}]}],"mipsSidebar":[{"type":"link","label":"Introduction","href":"/mips-resources/intro","docId":"mips-resources/intro"},{"type":"link","label":"MIPs FAQs","href":"/mips-resources/mips-faq","docId":"mips-resources/mips-faq"}]},"docs":{"graphcast/design-principles":{"id":"graphcast/design-principles","title":"Design Principles","description":"There are two main components of Graphcast","sidebar":"gnSidebar"},"graphcast/intro":{"id":"graphcast/intro","title":"Introduction","description":"Is there something you\'d like to learn from or share with your fellow Indexers in an automated manner, but it\'s too much hassle or costs too much gas?","sidebar":"gnSidebar"},"graphcast/radios/3la-monitor":{"id":"graphcast/radios/3la-monitor","title":"3LA - Listener Radio","description":"The source code for 3LA is available on GitHub and Docker builds are automatically published as GitHub Packages.","sidebar":"gnSidebar"},"graphcast/radios/one-shot":{"id":"graphcast/radios/one-shot","title":"One-shot CLI","description":"The source code for the one-shot CLI is available on GitHub as a member of the Subgraph Radio workspace.","sidebar":"gnSidebar"},"graphcast/radios/subgraph-radio":{"id":"graphcast/radios/subgraph-radio","title":"Subgraph Radio","description":"The source code for the Subgraph Radio is available on GitHub and Docker builds are automatically published as GitHub Packages. Subgraph Radio is also published as a crate on crates.io.","sidebar":"gnSidebar"},"graphcast/sdk/intro":{"id":"graphcast/sdk/intro","title":"Introduction","description":"Graphcast SDK is a decentralized, distributed peer-to-peer (P2P) communication tool that enables users across the network to exchange information in real-time. It is designed to overcome the high cost of signaling or coordination between blockchain participants by enabling off-chain communication (gossip/cheap talk). This is particularly useful for applications where real-time communication is essential but the cost of on-chain transactions is prohibitive.","sidebar":"gnSidebar"},"graphcast/sdk/radio-dev":{"id":"graphcast/sdk/radio-dev","title":"Radio Development","description":"Do you want to build robust, peer-to-peer messaging apps that automatically exchange valuable data with other Indexers in real time? Do you have an idea for what data could be useful to share that could lead to greater communication efficiency in The Graph network as a whole? Then you want to build a Radio on top of the Graphcast network.","sidebar":"gnSidebar"},"graphcast/sdk/registry":{"id":"graphcast/sdk/registry","title":"Registry","description":"The Graphcast Registry contracts allow an address to set a GraphcastID by calling setGraphcastID(indexeraddress, graphcastIDaddress) as either an Indexer or an Indexer operator, or calling setGraphcastID(graphcastID_address) as the Indexer address. The relationship between an Indexer address to its GraphcastID is limited to 1:1, and cannot be set to itself. This restriction provides consistency and security for the Indexer identity to operate on Graphcast as one GraphcastID operating across Radio applications. To learn more about the registry, you can check out the Github repository.","sidebar":"gnSidebar"},"launchpad/client-side-tooling":{"id":"launchpad/client-side-tooling","title":"Client Side Tooling","description":"Launchpad comes with an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.","sidebar":"launchpadSidebar"},"launchpad/design-principles":{"id":"launchpad/design-principles","title":"Design Principles","description":"Design Principles","sidebar":"launchpadSidebar"},"launchpad/faq":{"id":"launchpad/faq","title":"Frequently Asked Questions","description":"Do I need a machine for launchpad-starter?","sidebar":"launchpadSidebar"},"launchpad/guides/arbitrum-archive-kubernetes-guide":{"id":"launchpad/guides/arbitrum-archive-kubernetes-guide","title":"Arbitrum Archive Mainnet Node Guide","description":"This guide is intended to be an end to end walk-through of running an Arbitrum Archive Mainnet Node in an existing Kubernetes cluster.","sidebar":"launchpadSidebar"},"launchpad/guides/avalanche-archive-kubernetes":{"id":"launchpad/guides/avalanche-archive-kubernetes","title":"Avalanche Archive Mainnet Node Guide","description":"This guide is intended to be an end to end walk-through of running an Avalanche Archive Mainnet Node in an existing Kubernetes cluster.","sidebar":"launchpadSidebar"},"launchpad/guides/celo-archive-kubernetes-guide":{"id":"launchpad/guides/celo-archive-kubernetes-guide","title":"Celo Archive Mainnet Node Guide","description":"This guide is intended to be an end to end walk-through of running an Celo Archive Mainnet Node in an existing Kubernetes cluster.","sidebar":"launchpadSidebar"},"launchpad/guides/goerli-indexer-guide":{"id":"launchpad/guides/goerli-indexer-guide","title":"Goerli Indexer Guide","description":"This guide is intended to be an end to end walk-through of setting up an Indexer running on the Graph Protocol Testnet on the Ethereum Goerli network.","sidebar":"launchpadSidebar"},"launchpad/intro":{"id":"launchpad/intro","title":"Introduction","description":"Launchpad is a toolkit for running a Graph Protocol Indexer on Kubernetes. It aims to provide the fastest path to production multi-chain indexing, with sane security and performance defaults. It should work well whether you have a single host or twenty, regardless of host provider. It is comprised of an opinionated set of tools on your local machine, layered over one another to provide a declarative workflow through all the layers of your infrastructure.","sidebar":"launchpadSidebar"},"launchpad/other-resources":{"id":"launchpad/other-resources","title":"Other Resources","description":"Kubernetes","sidebar":"launchpadSidebar"},"launchpad/prerequisites":{"id":"launchpad/prerequisites","title":"Prerequisites","description":"You will need some things to use Launchpad for your infrastructure:","sidebar":"launchpadSidebar"},"launchpad/quick-start":{"id":"launchpad/quick-start","title":"Quick Start","description":"Make sure you have all the Prerequisites before starting.","sidebar":"launchpadSidebar"},"launchpad/server-side-stack":{"id":"launchpad/server-side-stack","title":"Server Side Stack","description":"Server Side Stack","sidebar":"launchpadSidebar"},"mips-resources/intro":{"id":"mips-resources/intro","title":"Introduction","description":"It\'s an exciting time to be participating in The Graph ecosystem! During Graph Day 2022 Yaniv Tal announced the sunsetting of the hosted service, a moment The Graph ecosystem has been working towards for many years.","sidebar":"mipsSidebar"},"mips-resources/mips-faq":{"id":"mips-resources/mips-faq","title":"MIPs FAQs","description":"desc","sidebar":"mipsSidebar"}}}')}}]);