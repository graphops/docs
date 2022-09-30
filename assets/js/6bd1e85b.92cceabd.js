"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4950:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const l={},i=void 0,s={unversionedId:"launchpad/defining-releases",id:"launchpad/defining-releases",title:"defining-releases",description:"LEVEL 1 CUSTOMISATION - overriding release name",source:"@site/docs/launchpad/defining-releases.md",sourceDirName:"launchpad",slug:"/launchpad/defining-releases",permalink:"/launchpad/defining-releases",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/defining-releases.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Getting Started",permalink:"/launchpad/getting-started"}},o={},c=[{value:"LEVEL 1 CUSTOMISATION - overriding release name",id:"level-1-customisation---overriding-release-name",level:2}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"<<: *template-default-ingress-releases\n")),(0,a.kt)("h2",{id:"level-1-customisation---overriding-release-name"},"LEVEL 1 CUSTOMISATION - overriding release name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"releases:\n  - name: ingress-nginx-some-release-name #\xa0override the release name\n    version: v100.0.0 # override the Chart version\n    <<: *template-default-release-ingress-nginx #\xa0inject defaults\n  - name: ingress-nginx-some-other-release-name  #\xa0override the release name\n    version: v100.0.0 # override the Chart version\n    <<: *template-default-release-ingress-nginx #\xa0inject defaults\n")),(0,a.kt)("p",null,"##\xa0LEVEL 2 CUSTOMISATION"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"releases:\n  - name: ingress-nginx-blah-blah\n    <<: *template-default-release-ingress-nginx #\xa0inject release defaults\n    values:\n      - *template-default-values-ingress-nginx #\xa0inject default release values\n      - commonLabels: #\xa0specify custom values overrides\n          someValue2: true\n")))}p.isMDXComponent=!0}}]);