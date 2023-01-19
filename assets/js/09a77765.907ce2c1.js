(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2653],{79846:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Check:()=>u,Clock:()=>k,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=o(87462),i=o(67294),r=o(3905),a=(o(78561),o(58057));const l=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}))})),s={title:"Overview",sidebar_position:1},c=void 0,d={unversionedId:"mesh-network/supported-transports",id:"mesh-network/supported-transports",isDocsHomePage:!1,title:"Overview",description:"export function Check() {",source:"@site/docs/common/mesh-network/supported-transports.mdx",sourceDirName:"mesh-network",slug:"/mesh-network/supported-transports",permalink:"/common/mesh-network/supported-transports",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/mesh-network/supported-transports.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Access Control Permissions",permalink:"/common/concepts/designing-permissions"},next:{title:"Online Playground",permalink:"/common/mesh-network/online-playground"}},p=[{value:"Intro to the Rainbow Connection",id:"intro-to-the-rainbow-connection",children:[],level:2},{value:"About the network transports",id:"about-the-network-transports",children:[{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[],level:3},{value:"Peer-to-Peer Wi-Fi",id:"peer-to-peer-wi-fi",children:[{value:"Apple Wireless Direct Link (AWDL)",id:"apple-wireless-direct-link-awdl",children:[],level:4},{value:"Wi-Fi Direct",id:"wi-fi-direct",children:[],level:4},{value:"Wi-Fi Aware",id:"wi-fi-aware",children:[],level:4}],level:3},{value:"Local Area Network",id:"local-area-network",children:[],level:3},{value:"WebSockets",id:"websockets",children:[],level:3},{value:"Universal Serial Bus (USB)",id:"universal-serial-bus-usb",children:[],level:3},{value:"The Ditto Multiplexer",id:"the-ditto-multiplexer",children:[],level:3}],level:2}];function u(){return(0,r.kt)(a.Z,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"CheckIcon"})}function k(){return(0,r.kt)(l,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"ClockIcon"})}const h={toc:p,Check:u,Clock:k};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(a.Z,{style:{width:18,height:18},mdxType:"CheckIcon"})," Already supported in our current releases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l,{style:{width:18,height:18},mdxType:"ClockIcon"})," Under development and will be released soon.")),(0,r.kt)("table",{class:"table table-bordered reference-document-table"},(0,r.kt)("thead",{class:"thead-dark"},(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"col"},"Transport"),(0,r.kt)("th",{scope:"col"},"iOS"),(0,r.kt)("th",{scope:"col"},"Android"),(0,r.kt)("th",{scope:"col"},"macOS"),(0,r.kt)("th",{scope:"col"},"Windows"),(0,r.kt)("th",{scope:"col"},"Linux"),(0,r.kt)("th",{scope:"col"},"Web Browser"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Bluetooth Low Energy (BLE)"),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Apple Wireless Direct Link (AWDL)"),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Wi-Fi Aware"),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Wi-Fi Direct"),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Local Area Network (LAN)"),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"WebSockets"),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"})),(0,r.kt)("td",null,(0,r.kt)(u,{mdxType:"Check"}))),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},"Universal Serial Bus (USB)"),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"})),(0,r.kt)("td",null,(0,r.kt)(k,{mdxType:"Clock"}))))),(0,r.kt)("h2",{id:"intro-to-the-rainbow-connection"},"Intro to the Rainbow Connection"),(0,r.kt)("p",null,"Ditto's ",(0,r.kt)("strong",{parentName:"p"},"Multiplexer")," automatically handles the complex process of establishing and maintaining these above transports for your apps and devices.\nTo learn more about these the capabilities of these transports, watch the narrated video below. "),(0,r.kt)("div",{className:"iframe-container",align:"center"},(0,r.kt)("iframe",{className:"responsive-iframe",width:"560",height:"315",src:"https://www.youtube.com/embed/8_A1CkYfzoM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"about-the-network-transports"},"About the network transports"),(0,r.kt)("p",null,"The following details specific information about each transport. Please read to fully understand how each platform behaves to align your expectations. We provide some ",(0,r.kt)("em",{parentName:"p"},"estimates")," of distances and bandwidth however the environment and hardware can greatly affect these numbers."),(0,r.kt)("h3",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,r.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,r.kt)("source",{src:"/animations/transports/rainbow_connection/ble.webm",type:"video/webm"}),"Your browser does not support the video tag."),(0,r.kt)("p",null,"Ditto will use Bluetooth Low Energy (BLE) to form ",(0,r.kt)("strong",{parentName:"p"},"low-powered")," and ",(0,r.kt)("strong",{parentName:"p"},"high distance")," connections between devices. Depending on your device's chip, you may see some variation of distance and bandwidth. All devices that support Bluetooth Low Energy are fully capable of communicating with each other."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Devices can ",(0,r.kt)("em",{parentName:"li"},"discover")," each other at about 30m-60m away from each other but the connections can be sustained for further distances."),(0,r.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 4.0 chip, expect distances of 80 meters from point to point."),(0,r.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 5.x chip, expect impressive distances up to 130 meters from point to point.")),(0,r.kt)("p",null,"Most devices will have a Bluetooth 5.x chip if it was made during or after 2017. Bluetooth Low Energy is great for structured documents but performs poorly for large file sizes."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you intend to run Ditto on a Raspberry Pi or Linux device, ",(0,r.kt)("a",{parentName:"p",href:"/raspberrypi/installation"},"please follow the instructions to enable Bluetooth Low Energy support")))),(0,r.kt)("h3",{id:"peer-to-peer-wi-fi"},"Peer-to-Peer Wi-Fi"),(0,r.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,r.kt)("source",{src:"/animations/transports/rainbow_connection/P2P.webm",type:"video/webm"}),"Your browser does not support the video tag."),"*connection maximum distance varies across P2P transport type",(0,r.kt)("h4",{id:"apple-wireless-direct-link-awdl"},"Apple Wireless Direct Link (AWDL)"),(0,r.kt)("p",null,"Apple Wireless Direct Link (AWDL) is most known for powering ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204144"},"AirDrop")," and is only supported on iOS and macOS devices. Apple Wireless Direct Link does not require an internet connection and is capable of communicating as long as the device Wi-Fi settings are turned on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distances are shorter than Bluetooth Low Energy with an average maximum of 35 meters from point-to-point."),(0,r.kt)("li",{parentName:"ul"},"However, the bandwidth is tremendously more powerful: capable of syncing 1 gigabyte of data in times as low as 8 seconds.")),(0,r.kt)("h4",{id:"wi-fi-direct"},"Wi-Fi Direct"),(0,r.kt)("p",null,"Wi-Fi Direct is supported on almost all Android (4.0 or higher, API Level 14 or higher) but only on some Windows 10 devices. P2P Wi-Fi Direct can achieve speeds as a fast as Apple Wireless Direct Link but unfortunately makes connections by requiring a permission alert to every new peer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distances can be achieved as far as 80 meters"),(0,r.kt)("li",{parentName:"ul"},"Can send 1 gigabyte of data in times as low as 8 seconds.")),(0,r.kt)("h4",{id:"wi-fi-aware"},"Wi-Fi Aware"),(0,r.kt)("p",null,"Wi-Fi aware is a new open standard introduced to Android devices that closely resembles Apple Wireless Direct Link in terms of distance and bandwidth. It is supported at the operating system level since Android 8, however not all Android manufacturers have enabled it at the hardware level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distances from point to point are approximately 40 meters"),(0,r.kt)("li",{parentName:"ul"},"It can sync 1 gigabyte files in as little as 8 seconds.")),(0,r.kt)("p",null,"In general most Google Pixel, Samsung, and LG phones built after 2018 can support Wi-Fi Aware. Other devices are being updated to include support. To check if your device can support Wi-Fi aware, ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=live.ditto.wifiawarechecker"},"download this app"),"."),(0,r.kt)("h3",{id:"local-area-network"},"Local Area Network"),(0,r.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,r.kt)("source",{src:"/animations/transports/rainbow_connection/lan.webm",type:"video/webm"}),"Your browser does not support the video tag."),(0,r.kt)("p",null,"If devices are connected over the same Wi-Fi access point or via some other means like an ethernet cable, they can take advantage of communicating over the LAN or Local Area Network."),(0,r.kt)("p",null,"Many enterprise or educational networks may have Client Isolation Mode turned ",(0,r.kt)("strong",{parentName:"p"},"ON"),". If the network has this setting ",(0,r.kt)("strong",{parentName:"p"},"ON"),' then devices are unable to discover each other and form a connection. Almost all "home" settings have this setting turned ',(0,r.kt)("strong",{parentName:"p"},"OFF"),'. Different router manufacturers refer to this feature in a wide variety of different ways, but it generally has "isolation" in its name.'),(0,r.kt)("p",null,"Ditto's discovery protocol also uses ",(0,r.kt)("strong",{parentName:"p"},"UDP multicasting"),", which needs to be enabled if you want devices to automatically discover each other. If you don't enable multicasting, you will need to ",(0,r.kt)("a",{parentName:"p",href:"./manual#connecting-to-a-remote-ditto-instance"},"manually configure the connections")," between peers."),(0,r.kt)("p",null,"There are some limitations affecting LAN sync on ",(0,r.kt)("strong",{parentName:"p"},"iOS devices"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS devices will only sync with desktop platforms like Windows if you have ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/forums/thread/663858"},"requested the multicast entitlement from Apple and applied it to your iOS app"),". Work is on the roadmap which will allow iOS devices to sync with all platforms, even without this entitlement."),(0,r.kt)("li",{parentName:"ul"},"iOS can always sync with other mobile devices like iOS and Android.")),(0,r.kt)("h3",{id:"websockets"},"WebSockets"),(0,r.kt)("p",null,"All devices support WebSocket connections. It is by far the most easily available network transports which require no permissions to work. In general, WebSockets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Require an internet connection for devices to communicate"),(0,r.kt)("li",{parentName:"ul"},"Cannot automatically discover each other like the other peer to peer transports.")),(0,r.kt)("p",null,"Devices need to specify an IP/PORT for a connection to be established. While most use cases require an internet connection. WebSockets can also work over the Local Area Network."),(0,r.kt)("h3",{id:"universal-serial-bus-usb"},"Universal Serial Bus (USB)"),(0,r.kt)("p",null,"If Ditto devices are active and share permissions for USB communication, Ditto will be able to form a wired connection between the two devices."),(0,r.kt)("h3",{id:"the-ditto-multiplexer"},"The Ditto Multiplexer"),(0,r.kt)("p",null,"Ditto automatically handles the complexity of maintaining the above transports. In production, the transports combine to look something like this.\nWatch how data is broken into chunks and sent across the different transports, efficiently switching as the network topology changes. "),(0,r.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,r.kt)("source",{src:"/animations/transports/rainbow_connection/rainbow_connection_transparent.webm",type:"video/webm"}),"Your browser does not support the video tag."))}m.isMDXComponent=!0},11748:(e,t,o)=>{var n={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return o(t)}function r(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748},58057:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}))}}]);