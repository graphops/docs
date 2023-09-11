"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||s;return a?r.createElement(g,i(i({ref:t},l),{},{components:a})):r.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2},i="Design Principles",o={unversionedId:"graphcast/design-principles",id:"graphcast/design-principles",title:"Design Principles",description:"There are two main components of Graphcast",source:"@site/docs/graphcast/design-principles.md",sourceDirName:"graphcast",slug:"/graphcast/design-principles",permalink:"/graphcast/design-principles",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/design-principles.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gnSidebar",previous:{title:"Introduction",permalink:"/graphcast/intro"},next:{title:"Introduction",permalink:"/graphcast/sdk/intro"}},c={},p=[{value:"The Graphcast SDK",id:"the-graphcast-sdk",level:2},{value:"Radios",id:"radios",level:2},{value:"Features",id:"features",level:3},{value:"Proof of Indexing (POI) cross-checking",id:"proof-of-indexing-poi-cross-checking",level:4},{value:"Subgraph Upgrade Pre-sync",id:"subgraph-upgrade-pre-sync",level:4}],l={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"design-principles"},"Design Principles"),(0,n.kt)("p",null,"There are two main components of Graphcast"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Graphcast SDK: The base layer SDK which interfaces with The Graph stack and the Waku network. This includes interactions with an Ethereum client, a Graph node client, a client for the Indexer management server, the Network subgraph and the Registry subgraph)."),(0,n.kt)("li",{parentName:"ul"},"Radios: Highly customizable gossip applications, built with the help of the Graphcast SDK, which define the specific message formats and logic around constructing and handling the messages. They are the nodes communicating in the Graphcast Network.")),(0,n.kt)("h2",{id:"the-graphcast-sdk"},"The Graphcast SDK"),(0,n.kt)("p",null,"The SDK is the base layer which is used to abstract all the necessary components of each Radio away from the user. That includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Establishes a connection to Graphcast via a ",(0,n.kt)("a",{parentName:"li",href:"https://waku.org/"},"Waku")," Gossip node, providing an interface for subscribing to specific topics and broadcasting messages across the network."),(0,n.kt)("li",{parentName:"ul"},"Interactions with a Graph node and a client for the Indexer management server."),(0,n.kt)("li",{parentName:"ul"},"Queries to Network and Registry subgraphs."),(0,n.kt)("li",{parentName:"ul"},"Checks message validity for past message injections, nonexistent blocks and expired timestamps. It also guarantees that messages are signed by an authorised operator address of an active on-chain Indexer (this can be used as a basis for a reputation system)."),(0,n.kt)("li",{parentName:"ul"},"Supports a flexible and customizable configuration of the Graphcast gossip agent, enabling specification of network settings, peer discovery mechanisms, message encoding formats, and more. For detailed instructions on configuring Graphcast to suit your needs, refer to the configuration guide."),(0,n.kt)("li",{parentName:"ul"},"Topics in Graphcast represent different categories or subjects of information. Nodes can dynamically subscribe to specific topics to receive messages related to those topics. Topics enable efficient message routing and dissemination within the network."),(0,n.kt)("li",{parentName:"ul"},"Provides comprehensive message handling structure to ensure that messages are reliably transmitted, received, and processed within the network.")),(0,n.kt)("h2",{id:"radios"},"Radios"),(0,n.kt)("p",null,"General Radio components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supports Radio for specific use cases."),(0,n.kt)("li",{parentName:"ul"},"Controls topic subscriptions dynamically for interested topics."),(0,n.kt)("li",{parentName:"ul"},"Provides Radio type definition used to verify the integrity and authenticity of messages exchanged within the network."),(0,n.kt)("li",{parentName:"ul"},"Collects Radio-specific information and incorporates it into Graphcast messages along with other relevant metadata."),(0,n.kt)("li",{parentName:"ul"},"Observes and handles relevant messages received from peers."),(0,n.kt)("li",{parentName:"ul"},"Provides performance metrics, logs, and API services.")),(0,n.kt)("p",null,"The first Radio built on top of Graphcast is the Subgraph Radio. It's designed to facilitate real-time information exchange among participants in The Graph network and serves as a tool for Indexers and other network participants to share valuable Subgraph data."),(0,n.kt)("p",null,"With Subgraph Radio, Indexers can run a single Radio instance and track a wide variety of message types and data related to Subgraphs. Different use cases and message types form the different ",(0,n.kt)("em",{parentName:"p"},"features")," of the Radio."),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("h4",{id:"proof-of-indexing-poi-cross-checking"},"Proof of Indexing (POI) cross-checking"),(0,n.kt)("p",null,"Indexers must generate valid POIs to earn indexing rewards. Indexers find it beneficial to alert each other on the health status of subgraphs in community discussions. To alleviate the manual workload, the POI cross-checking feature within Subgraph Radio:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Defines message types and topics"),(0,n.kt)("li",{parentName:"ul"},"Collects public POIs from the Graph node and sends them inside of Graphcast messages along with other useful metadata"),(0,n.kt)("li",{parentName:"ul"},"Observes relevant messages and aggregates public POIs sent from other Indexers, in order to compare ",(0,n.kt)("em",{parentName:"li"},"local")," POIs to ",(0,n.kt)("em",{parentName:"li"},"remote")," POIs"),(0,n.kt)("li",{parentName:"ul"},"Monitors the network for conflicts and takes certain actions if needed, for instance Indexers can configure an alert system to send messages to a custom channel in their Slack workspace, a Discord channel, or a Telegram chat.")),(0,n.kt)("h4",{id:"subgraph-upgrade-pre-sync"},"Subgraph Upgrade Pre-sync"),(0,n.kt)("p",null,"The subgraph upgrade pre-sync feature provides a way for Subgraph Developers to signal when they plan on releasing a new subgraph version, thereby allowing Indexers to start syncing the subgraph in advance. You can learn more about the feature ",(0,n.kt)("a",{parentName:"p",href:"https://docs.graphops.xyz/graphcast/radios/subgraph-radio/subgraph_upgrade"},"here"),"."))}h.isMDXComponent=!0}}]);