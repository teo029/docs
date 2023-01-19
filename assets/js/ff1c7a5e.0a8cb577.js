"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47119:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"Installation",sidebar_position:7},l="Linux (Raspberry Pi)",a={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Compatibility",source:"@site/docs/raspberrypi/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/raspberrypi/installation",editUrl:"https://github.com/getditto/docs/tree/main/docs/raspberrypi/installation.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Installation",sidebar_position:7},sidebar:"docs",next:{title:"Overview",permalink:"/raspberrypi/common/concepts/overview"}},s=[{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[{value:"Add support for Linux to iOS connections.",id:"add-support-for-linux-to-ios-connections",children:[],level:3}],level:2},{value:"Cross-compiling with Rust",id:"cross-compiling-with-rust",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-raspberry-pi"},"Linux (Raspberry Pi)"),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Ditto supports ARM processors on several platforms. Raspberry Pis have ARM CPUs. ",(0,r.kt)("strong",{parentName:"p"},"These instructions are required to run on Linux regardless of the programming language.")),(0,r.kt)("h2",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,r.kt)("p",null,"If you would like to run Ditto on a Linux device and leverage Bluetooth Low\nEnergy please follow the instructions. This applies to all SDKs, including\nJavaScript (Node/Electron), C#, C++, etc. "),(0,r.kt)("p",null,"Your device will need to install or update BlueZ with version 5.51 or higher. We've outlined a quick snippet set of instructions below to install BlueZ 5.61 as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\nsudo apt-get install libdbus-1-dev libglib2.0-dev libudev-dev libical-dev libreadline-dev docutils-common -y\nwget http://www.kernel.org/pub/linux/bluetooth/bluez-5.61.tar.xz\ntar -xf bluez-5.61.tar.xz\ncd bluez-5.61\n./configure\nmake\nsudo make install\n")),(0,r.kt)("h3",{id:"add-support-for-linux-to-ios-connections"},"Add support for Linux to iOS connections."),(0,r.kt)("p",null,"BlueZ 5.51 and above try to automatically read the battery status/service of\ndevices when they connect. However, by default, iOS devices will prevent BlueZ\nservices from reading the battery service. As a result, BlueZ connection\nattempts will cause iOS devices to show a pairing prompt constantly. Therefore,\nwe will need to disable the battery service in BlueZ, use the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the bluetooth service file. Depending on your system, it will be located\neither at ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/bluetooth.service"),", or\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/bluetooth.target.wants/bluetooth.service"),". Use your\nfavorite text editor like vim or nano to edit these files. In addition, you may\nneed sudo permission to write to this file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the line beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart=")," and add ",(0,r.kt)("inlineCode",{parentName:"p"},"-P battery")," to the end. Now the line should look like this:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ExecStart=/usr/lib/bluetooth/bluetoothd -P battery\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Save the file."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl daemon-reload")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl restart bluetooth")," to apply the changes to the Bluetooth service")),(0,r.kt)("p",null,"After that, BlueZ should be able to connect to iOS devices without prompting and\nDitto Apps should be able to communicate over BLE between iOS and Linux."),(0,r.kt)("h2",{id:"cross-compiling-with-rust"},"Cross-compiling with Rust"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd my-app\n\n// If cross-compiling to original RPi-Zero-W\nrustup target add arm-unknown-linux-gnueabihf\n\nDITTOFFI_SEARCH_PATH=./ LIBDITTO_STATIC=0 cargo build [--target arm-unknown-linux-gnueabihf]\n\nLD_LIBRARY_PATH=./ ./target/release/my-app\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See an example of a RaspberryPi-based moodlight, controlled over Bluetooth with Android and iPhone. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/getditto/moodlight"},"Source code on GitHub")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"moodlight.gif",src:n(50329).Z})))}u.isMDXComponent=!0},50329:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/moodlight-c007155c02a474cac7012acee71fa97b.gif"}}]);