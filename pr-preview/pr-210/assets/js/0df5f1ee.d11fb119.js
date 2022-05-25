"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3678],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55687:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Conflict-Free Replicated Data Types (CRDTs)",sidebar_position:1},l="Ditto Delta State CRDT",c={unversionedId:"how-it-works/crdt",id:"how-it-works/crdt",isDocsHomePage:!1,title:"Conflict-Free Replicated Data Types (CRDTs)",description:"This current page is undergoing extensive updates and edits. Please visit this page frequently for more up-to-date information.",source:"@site/docs/how-it-works/crdt.md",sourceDirName:"how-it-works",slug:"/how-it-works/crdt",permalink:"/pr-preview/pr-210/how-it-works/crdt",editUrl:"https://github.com/getditto/docs/edit/master/docs/how-it-works/crdt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Conflict-Free Replicated Data Types (CRDTs)",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shared Key",permalink:"/pr-preview/pr-210/security/shared-key"},next:{title:"Mesh Network",permalink:"/pr-preview/pr-210/how-it-works/mesh-network"}},p=[{value:"Version Vector",id:"version-vector",children:[],level:2},{value:"Types",id:"types",children:[],level:2},{value:"Documents",id:"documents",children:[],level:2},{value:"Hybrid Logical Clock",id:"hybrid-logical-clock",children:[],level:2},{value:"Causal Consistency",id:"causal-consistency",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditto-delta-state-crdt"},"Ditto Delta State CRDT"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This current page is undergoing extensive updates and edits. Please visit this page frequently for more up-to-date information. ")),(0,o.kt)("p",null,"Ditto's data types are based on CRDTs. CRDTs stand for Conflict Free Replicated Data Types.\nCRDTs can be updated concurrently by multiple users in a distributed system, without locking or\nconsensus. Each user edits their own version of the data, and when the versions\nare replicated the concurrently edited versions merge together to form a single\nversion."),(0,o.kt)("p",null,'This merged version\'s value is deterministic, which means regardless of the\norder that the versions are merged the result is the same. As well as\ndeterministic we strive to make it unsurprising, and meaningful, in that the\nresult reflects the input, and some rational interpretation of the input. For\nexample, if two users set a register to the values "Coca-Cola" and "Pepsi" we\ndon\'t deterministically resolve all conflicting registers to the value "Sprite",\nbut instead pick whichever value of "Coca-Cola" or "Pepsi" was written at the\nlatest time.'),(0,o.kt)("h2",{id:"version-vector"},"Version Vector"),(0,o.kt)("p",null,"The foundation of determining how data should be merged is using a Ditto document's version vector.\nEach document in each peer contains a hidden metadata map of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Site_ID")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"HLC"),". The HLC stands for a\nhybrid logical clock. This ",(0,o.kt)("inlineCode",{parentName:"p"},"HLC"),' is used to determine whether a change has "happened before".\nFor more information about the Hybrid Logical Clock, see below.'),(0,o.kt)("p",null,"Say we have DocumentId: ",(0,o.kt)("inlineCode",{parentName:"p"},'"123abc"')," on Peer A. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DocumentId: "123abc"\nVersion Vector: {\n  "A": 5,\n  "B": 1,\n  "C": 4\n}\n')),(0,o.kt)("p",null,"The version vector above represents that Peer ",(0,o.kt)("inlineCode",{parentName:"p"},'"A"')," has incorporated change from other peers ",(0,o.kt)("inlineCode",{parentName:"p"},'"B"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"C"')," at times ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," respectively."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Disclaimer: Ditto uses a ",(0,o.kt)("inlineCode",{parentName:"em"},"UInt128")," to represent the ",(0,o.kt)("inlineCode",{parentName:"em"},"Site_ID")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"64bit timestamp")," for the ",(0,o.kt)("inlineCode",{parentName:"em"},"HLC"),". But for educational purposes,\nthis documentation will often use strings and numbers for readability. Please continue to the Hybrid Logical Clock portion below to learn more.")),(0,o.kt)("p",null,"If an incoming change arrives at Peer ",(0,o.kt)("inlineCode",{parentName:"p"},'"A"')," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"B": 4'),", then Document will merge the incoming data. This is because Peer ",(0,o.kt)("inlineCode",{parentName:"p"},'"A"')," determined that the document's current state has yet not seen the new change. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DocumentId: "123abc"\nVersion Vector: {\n  "A": 5,\n  "B": 1, // \ud83d\udc48 merge in {"B": 4} because 4 > 1\n  "C": 4\n}\n')),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Merge Semantics"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/datamodel/register"},"Register")),(0,o.kt)("td",{parentName:"tr",align:null},"A single primitive value (Number, String, Boolean, Binary File)"),(0,o.kt)("td",{parentName:"tr",align:null},"Last (temporal) Write Wins")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/datamodel/counter"},"Counter")),(0,o.kt)("td",{parentName:"tr",align:null},"A special number capable of preserving incrementing and decrementing semantics"),(0,o.kt)("td",{parentName:"tr",align:null},"The sum of all site's counters")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/datamodel/array"},"Replicated Growable Array")),(0,o.kt)("td",{parentName:"tr",align:null},"An ordered sequence of any of the other types"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove wins, updates merge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/datamodel/map"},"Map")),(0,o.kt)("td",{parentName:"tr",align:null},"A dictionary of name->value mappings where name is a string and value is any of the other types"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove wins, updates merge")))),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,"The Ditto document is a JSON like document made from a CRDT Map that represents\nthe JSON Object. The JSON properties are map keys, and the values are any of the\ntypes listed above. One way to think about the types that make up a Ditto\ndocument is like a tree, where there are collections (Array and Map) and leaf\nvalues that are registers or counters."),(0,o.kt)("h2",{id:"hybrid-logical-clock"},"Hybrid Logical Clock"),(0,o.kt)("p",null,"It might be tempting to use physical clocks to resolve conflicts when attempting to merge concurrent data changes. However, it's essential to know that even quartz-crystal-based physical clocks can skew forwards or backward in time. Almost every device regularly attempts to synchronize with an NTP-synchronized clock server. But even then, the round trip time from the request to the server's response adds additional variability. In addition, there are limitations to nature and physics that will never allow two measurements of physical time to align precisely. Thus, these conditions led us to determine that physical clocks were not reliable in a distributed mesh network. "),(0,o.kt)("p",null,"Each Ditto document includes a version vector. The replication system uses the version vector to capture local and observed edits from other peers. When a peer incorporates changes from other peers, the local peer can use the incoming remote peer's version vectors to determine whether the changes are new or old. In other words, a peer can distinguish from other peer's incoming version vectors if the incoming data has \"happened before\" or not."),(0,o.kt)("p",null,"Although we decided that we could not build a system that resolved conflicts based purely on physical time, we needed to preserve the notion of physical time as not to confuse users of collaborative applications. However, each peer still needs a deterministic way to resolve conflicts. In other words, each peer when sharing CRDT deltas needs to always resolve conflicts exactly the same way. This requirement still needs ",(0,o.kt)("em",{parentName:"p"},"logical")," ordering. This requirement led us to implement the version vector with a Hybrid Logical Clock (often referred to as HLC)."),(0,o.kt)("p",null,"In Ditto's distributed system, the HLC is a 64-bit timestamp comprised of 48 bits of a physical timestamp and 16 bits of a monotonically increasing logical clock. "),(0,o.kt)("h2",{id:"causal-consistency"},"Causal Consistency"),(0,o.kt)("p",null,"Causal Consistency is guaranteed by Ditto. It is causally consistent across any number of related\nchanges, across many documents and different collections, as long as they are\nwithin the same Ditto AppID. "),(0,o.kt)("p",null,"To give an intuition about causal consistency,\nimagine the following scenario:"),(0,o.kt)("p",null,"On a social network Bob posts a message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\n')),(0,o.kt)("p",null,"Then after some time, he posts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Bob: "I found him! What a relief!"\n')),(0,o.kt)("p",null,"To which Sue replies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Sue: "Great news!"\n')),(0,o.kt)("p",null,"In contrast, an ",(0,o.kt)("strong",{parentName:"p"},"eventually consistent")," database shows messages in any order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nSue: "Great news!"\nBob: ...etc\n')),(0,o.kt)("p",null,"Ditto's Causal Consistency ensures that if a new message is written after seeing some\nprior message, then the new message is not visible unless that prior message is\nalso visible."),(0,o.kt)("p",null,"To help differentiate Causal Consistency from stronger consistency models, imagine that Alice replies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Alice: "Wonderful!"\n')),(0,o.kt)("p",null,'Causal Consistency allows that the two concurrent messages "Great news!" from\nSue and "Wonderful!" from Alice appear in any order. Both:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nBob: "I found him! What a relief!"\nSue: "Great news!"\nAlice: "Wonderful!"\n')),(0,o.kt)("p",null,"And:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nBob: "I found him! What a relief!"\nAlice: "Wonderful!"\nSue: "Great news!"\n')),(0,o.kt)("p",null,"Are allowed with Causal Consistency."))}u.isMDXComponent=!0}}]);