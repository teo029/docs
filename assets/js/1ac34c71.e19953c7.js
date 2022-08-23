"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26534:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],a={},s="Troubleshooting",u={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Ditto won't sync",source:"@site/docs/common/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/common/troubleshooting",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/troubleshooting.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Big Peer",permalink:"/common/how-it-works/big-peer"},next:{title:"2.0 Migration Guide",permalink:"/common/v2"}},c=[{value:"Ditto won&#39;t sync",id:"ditto-wont-sync",children:[{value:"Syncronization seems slow, or comes to a halt over time",id:"syncronization-seems-slow-or-comes-to-a-halt-over-time",children:[],level:3},{value:"General diagnostics",id:"general-diagnostics",children:[],level:3},{value:"Bluetooth",id:"bluetooth",children:[],level:3},{value:"Apple Wireless Direct Link, P2P-Wifi, Wifi Aware",id:"apple-wireless-direct-link-p2p-wifi-wifi-aware",children:[],level:3},{value:"Local Area Network (LAN)",id:"local-area-network-lan",children:[],level:3},{value:"Online Playground",id:"online-playground",children:[{value:"Is your playground token copied correctly?",id:"is-your-playground-token-copied-correctly",children:[],level:4},{value:"Did your device connect to the internet?",id:"did-your-device-connect-to-the-internet",children:[],level:4}],level:3},{value:"Online with Authentication",id:"online-with-authentication",children:[],level:3},{value:"Offline Playground and Shared Key",id:"offline-playground-and-shared-key",children:[],level:3},{value:"Still having trouble?",id:"still-having-trouble",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"ditto-wont-sync"},"Ditto won't sync"),(0,r.kt)("p",null,"If you are having trouble syncronizing devices in Ditto, follow this guide."),(0,r.kt)("h3",{id:"syncronization-seems-slow-or-comes-to-a-halt-over-time"},"Syncronization seems slow, or comes to a halt over time"),(0,r.kt)("p",null,"Ensure that you are only creating a fixed number of live queries. Each live query will "),(0,r.kt)("h3",{id:"general-diagnostics"},"General diagnostics"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"DittoLogger.minimumLogLevel = DittoLogLevel.VERBOSE")," before you initialize ",(0,r.kt)("inlineCode",{parentName:"li"},"Ditto(identity)"),"."),(0,r.kt)("li",{parentName:"ol"},"Look at the logs. Do you see any helpful errors or warnings?"),(0,r.kt)("li",{parentName:"ol"},"Verify that your app id is the same on all devices")),(0,r.kt)("h3",{id:"bluetooth"},"Bluetooth"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Turn Use Location on"),(0,r.kt)("li",{parentName:"ol"},"Turn Bluetooth Scanning on"),(0,r.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,r.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to your OS-level permissions for Bluetooth and clear the app permissions for your application."),(0,r.kt)("li",{parentName:"ol"},"Delete the app, install it again, and open it. Does it ask for Bluetooth permissions?"),(0,r.kt)("li",{parentName:"ol"},"Android only: are you calling ",(0,r.kt)("inlineCode",{parentName:"li"},"ditto.refreshPermissions()"),"?")),(0,r.kt)("h3",{id:"apple-wireless-direct-link-p2p-wifi-wifi-aware"},"Apple Wireless Direct Link, P2P-Wifi, Wifi Aware"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,r.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to your OS-level permissions and clear the app permissions for your application."),(0,r.kt)("li",{parentName:"ol"},"Delete the app, install it again, and open it. Does it ask for location permissions?"),(0,r.kt)("li",{parentName:"ol"},"If you are using a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"TransportConfig"),", make sure you have enabled all peer-to-peer transports using ",(0,r.kt)("inlineCode",{parentName:"li"},"enableAllPeerToPeer()"),".")),(0,r.kt)("h3",{id:"local-area-network-lan"},"Local Area Network (LAN)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,r.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,r.kt)("li",{parentName:"ol"},"Are both devices connected to the same WiFi network?"),(0,r.kt)("li",{parentName:"ol"},"Check your router settings and see the ",(0,r.kt)("a",{parentName:"li",href:"./mesh-network/supported-transports/#local-area-network"},"LAN troubleshooting guide"),".")),(0,r.kt)("h3",{id:"online-playground"},"Online Playground"),(0,r.kt)("h4",{id:"is-your-playground-token-copied-correctly"},"Is your playground token copied correctly?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"Portal")," "),(0,r.kt)("li",{parentName:"ol"},"Go to your App."),(0,r.kt)("li",{parentName:"ol"},"Make sure that the portal playground token is the same as the value you are using in your code.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Online Playground enabled in the Ditto Portal",src:n(21035).Z})),(0,r.kt)("h4",{id:"did-your-device-connect-to-the-internet"},"Did your device connect to the internet?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnlinePlayground")," applications must connect to the Big Peer first\n",(0,r.kt)("em",{parentName:"p"},"before")," going offline. ",(0,r.kt)("a",{parentName:"p",href:"./mesh-network/online-playground"},"Read more about online playground"),"."),(0,r.kt)("p",null,"If your app need full offline access without ever connecting to the Internet, please\nrequest an ",(0,r.kt)("a",{parentName:"p",href:"./mesh-network/offline-license"},"offline license token"),"."),(0,r.kt)("h3",{id:"online-with-authentication"},"Online with Authentication"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Did you follow the ",(0,r.kt)("a",{parentName:"li",href:"./guides/authentication/intro"},"tutorial"),"?"),(0,r.kt)("li",{parentName:"ol"},"Is the website address behind ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," and available on the open Internet? "),(0,r.kt)("li",{parentName:"ol"},"Verfiy that your server is reachable by the Big Peer at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://APP_ID.ditto.live")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"https://cloud.ditto.live"),"."),(0,r.kt)("li",{parentName:"ol"},"Are you implementing the ",(0,r.kt)("a",{parentName:"li",href:"./security/online-with-authentication#creating-your-client"},"authentication expiring soon")," delegate?"),(0,r.kt)("li",{parentName:"ol"},"Verify that your webhook provider name is ",(0,r.kt)("a",{parentName:"li",href:"./security/online-with-authentication#login"},"correctly copied in the Ditto portal"),".")),(0,r.kt)("h3",{id:"offline-playground-and-shared-key"},"Offline Playground and Shared Key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"Ditto Portal"),"."),(0,r.kt)("li",{parentName:"ol"},"Check the value of your offline license token in the Ditto Portal. Is the offline license token expired?"),(0,r.kt)("li",{parentName:"ol"},"Is the offline license token copied correctly?"),(0,r.kt)("li",{parentName:"ol"},"Is the shared key copied correctly? ",(0,r.kt)("a",{parentName:"li",href:"./security/shared-key"},"Generate a new shared key."))),(0,r.kt)("h3",{id:"still-having-trouble"},"Still having trouble?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Are you creating many live queries? Reduce the number of live queries in your app. ")),(0,r.kt)("p",null,"Email us at ",(0,r.kt)("a",{parentName:"p",href:"support.ditto.live"},"support@ditto.live")," or ",(0,r.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"login to your Ditto account")," to chat with the support bot in the\nlower right corner of your screen. An engineer will reach out to you shortly."))}d.isMDXComponent=!0},21035:function(e,t,n){t.Z=n.p+"assets/images/portal-playground-setting-99074a40a3741119540b4be524814aa5.png"}}]);