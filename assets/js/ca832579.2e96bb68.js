"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=n.createContext({}),d=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(h.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,h=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,g=p["".concat(h,".").concat(u)]||p[u]||c[u]||o;return a?n.createElement(g,r(r({ref:t},l),{},{components:a})):n.createElement(g,r({ref:t},l))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:4},r="Notifications and Monitoring",s={unversionedId:"graphcast/radios/subgraph-radio/monitoring",id:"graphcast/radios/subgraph-radio/monitoring",title:"Notifications and Monitoring",description:"Notifications",source:"@site/docs/graphcast/radios/subgraph-radio/monitoring.md",sourceDirName:"graphcast/radios/subgraph-radio",slug:"/graphcast/radios/subgraph-radio/monitoring",permalink:"/graphcast/radios/subgraph-radio/monitoring",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/graphcast/radios/subgraph-radio/monitoring.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"gnSidebar",previous:{title:"Subgraph Upgrade Pre-syncing",permalink:"/graphcast/radios/subgraph-radio/subgraph-upgrade-presyncing"},next:{title:"Advanced Configuration",permalink:"/graphcast/radios/subgraph-radio/advanced-configuration"}},h={},d=[{value:"Notifications",id:"notifications",level:2},{value:"Notification modes",id:"notification-modes",level:3},{value:"Prometheus &amp; Grafana",id:"prometheus--grafana",level:2},{value:"Setting up the Grafana dashboard",id:"setting-up-the-grafana-dashboard",level:3},{value:"Reading the Grafana dashboard",id:"reading-the-grafana-dashboard",level:3},{value:"POI Comparison Overview",id:"poi-comparison-overview",level:4},{value:"Message stats",id:"message-stats",level:4},{value:"Number of Gossiping Indexers per Subgraph",id:"number-of-gossiping-indexers-per-subgraph",level:4},{value:"POI Comparison Results",id:"poi-comparison-results",level:4},{value:"Function Call Stats",id:"function-call-stats",level:4},{value:"Number of diverged subgraphs",id:"number-of-diverged-subgraphs",level:4},{value:"Locally tracked Public POIs",id:"locally-tracked-public-pois",level:4}],l={toc:d},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications-and-monitoring"},"Notifications and Monitoring"),(0,i.kt)("h2",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"If the Radio operator has set up a Slack, Discord and/or Telegram bot integration and the Radio finds a POI mismatch, it sends alerts to the designated channels. The operator can also inspect the logs to see if the Radio is functioning properly, if it's sending and receiving messages, if it's comparing normalised POIs, if there is a found POI mismatch, etc."),(0,i.kt)("h3",{id:"notification-modes"},"Notification modes"),(0,i.kt)("p",null,"Subgraph Radio supports three modes of notification, based on the user's preference for how often they'd like to get notified, and what data the notifications contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"live")," - the Radio sends a notification as soon as it finds a divergence, providing the Subgraph deployment and the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"periodic-update")," - the Radio sends a notification on a specified interval (default is 24 hours) containing any updates to comparison results that have happened since the previous notification (the notification message format is the same as the one using live mode). If there are no updates it will not send a notification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"periodic-report")," - the Radio sends a notification on a specified interval (default is 24 hours) with a summary of total subgraphs being cross-checked, number of matched subgraphs, number of diverged subgraphs, and a list of the divergent subgraphs and the blocks where the divergence was caught.")),(0,i.kt)("p",null,"The default notification mode if there's Slack/Discord/Telegram integration in place is ",(0,i.kt)("inlineCode",{parentName:"p"},"live"),"."),(0,i.kt)("p",null,"The notification mode can be toggled using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTIFICATION_MODE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTIFICATION_INTERVAL")," configuration variables."),(0,i.kt)("p",null,"See more information on how to configure notifications, as well as how to set up Slack, Discord and Telegram in the ",(0,i.kt)("a",{parentName:"p",href:"advanced-configuration"},"advanced configuration section"),"."),(0,i.kt)("h2",{id:"prometheus--grafana"},"Prometheus & Grafana"),(0,i.kt)("p",null,"The Subgraph Radio exposes metrics that can then be scraped by a Prometheus server and displayed in Grafana. In order to use them you have to have a local Prometheus server running and scraping metrics on the provided port. You can specify the metrics host and port by using the environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"METRICS_PORT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"METRICS_HOST"),"."),(0,i.kt)("h3",{id:"setting-up-the-grafana-dashboard"},"Setting up the Grafana dashboard"),(0,i.kt)("p",null,"The Subgraph Radio Grafana dashboard is included by default in Stakesquid's docker-compose stack. If you're not using the stack, below is a walk-through of how you can set it up."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphops/subgraph-radio/blob/dev/grafana.json"},"Grafana dashboard config JSON file")," provided in the repo, which you can import and use to visualise the metrics in Grafana. When importing the dashboard, it will require you to specify two data sources - a Prometheus one and a GraphQL one. For Prometheus you should select the Prometheus instance that you've set up to scrape metrics from Subgraph Radio's metrics host and port. For GraphQL, you'd need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/fifemon-graphql-datasource/?tab=installation"},"GraphQL data source plugin"),", if you don't have it already installed. Then you need to create a new GraphQL data srouce that points to the GraphQL API of the Radio's integrated HTTP server. For instance, if you've set ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_HOST")," to",(0,i.kt)("inlineCode",{parentName:"p"}," 0.0.0.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_PORT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"3012"),", your GraphQL data source would need to point at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:3012/api/v1/graphql"),". You can learn more about the HTTP server in the next section."),(0,i.kt)("h3",{id:"reading-the-grafana-dashboard"},"Reading the Grafana dashboard"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Grafana Dashboard",src:a(1643).Z,width:"2800",height:"1592"})),(0,i.kt)("p",null,"When the Subgraph Radio Grafana dashboard has been set up, it offers 6 panels:"),(0,i.kt)("h4",{id:"poi-comparison-overview"},"POI Comparison Overview"),(0,i.kt)("p",null,"At a glance, you can see the number of matching and diverging subgraphs. These two gauges update to reflect the results continiously after each comparison. The reason these are gauges and not counters is because a subgraph's comparison result can change between POI comparison events, for instance you might have a diverging public POI for a given subgraph on block X, but then at block Y it could be matching with the consensus public POI, in that case is would change groups, the number of divergent subgraphs would decrement and the number of matching subgraphs would increment."),(0,i.kt)("h4",{id:"message-stats"},"Message stats"),(0,i.kt)("p",null,"This includes the validated messages per minute, as well as the total cached messages in the store."),(0,i.kt)("h4",{id:"number-of-gossiping-indexers-per-subgraph"},"Number of Gossiping Indexers per Subgraph"),(0,i.kt)("p",null,"This panel shows how many Indexers are actively sending public POIs for the subgraphs that you're interested in. This view can be filtered by a specific subgraph."),(0,i.kt)("h4",{id:"poi-comparison-results"},"POI Comparison Results"),(0,i.kt)("p",null,"This is the most insightful and important panel. The data in it is coming directly from the HTTP server's GraphQL endpoint. It shows the most recent comparison results for each subgraph that is being actively cross-checked, as well as the block for which that comparison happened."),(0,i.kt)("p",null,"The Count Ratio shows the ratio of unique senders that have attested to a public POI for that subgraph on that block. For instance ",(0,i.kt)("inlineCode",{parentName:"p"},"3:1:1*")," means that there are three distinct public POIs that were compared. It also means there are four Indexers attesting to public POIs that is different that the locally generated public POI, three of them attest to the same POI and the third Indexer attests to a different one, but none of those two POIs match the locally generated one. If it's ",(0,i.kt)("inlineCode",{parentName:"p"},"3*:1")," it means that the local POI matches with the most often attested POI (highest sender count), meaning that the local Indexer is in that group of three Indexers, and there is one other Indexer who has sent a different POI. If it's ",(0,i.kt)("inlineCode",{parentName:"p"},"4*")," it means that there are four Indexers attesting to a given POI and all four POIs are the same (the local one included). ",(0,i.kt)("strong",{parentName:"p"},"The count that has a ",(0,i.kt)("inlineCode",{parentName:"strong"},"*")," sign is where the local attestation is.")),(0,i.kt)("p",null,"Another possible ratio value is ",(0,i.kt)("inlineCode",{parentName:"p"},"3:0*"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"0*")," here represents that there is no local public POI, generated for this subgraph on this block (this might happen due to a lot of reasons, one of them being that the subgraph isn't fully synced)."),(0,i.kt)("p",null,"The Stake Ratio is similar to the Count Ratio, but POIs are grouped by stake, so ",(0,i.kt)("inlineCode",{parentName:"p"},"11686531*")," means that that is the combined stake backing the public POI for that subgraph on that block (the local Indexer stake is included) where as for example ",(0,i.kt)("inlineCode",{parentName:"p"},"44141361*:651361")," would mean that there are two distinct POIs and hence two different sender groups, and these two stake values are the aggregated stake values behind each of those POIs. The ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," on the first one means that the local Indexer's stake is attesting to the same public POIs and the local stake is included in that value. Similar to the Count Ratio, if there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"0*"),", for instance - ",(0,i.kt)("inlineCode",{parentName:"p"},"44141361:0*"),", it means that there is no local public POI, generated for this subgraph on this block (therefore there is no attesting stake from the local Indexer)."),(0,i.kt)("h4",{id:"function-call-stats"},"Function Call Stats"),(0,i.kt)("p",null,"Shows insights into the frequency of different functions running in the Radio, it helps convey a sense of how often/how many times certain events have happened, like POI comparison, processing a validated message, sending a message, and more."),(0,i.kt)("h4",{id:"number-of-diverged-subgraphs"},"Number of diverged subgraphs"),(0,i.kt)("p",null,"Count of diverged subgraphs and how it's changed over time."),(0,i.kt)("h4",{id:"locally-tracked-public-pois"},"Locally tracked Public POIs"),(0,i.kt)("p",null,"Number of locally generated public POIs for all of the subgraphs that are actively being cross-checked."))}c.isMDXComponent=!0},1643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphcast-grafana-dashboard-4bdfaf0d4121420e6810682b3e27c8f7.png"}}]);