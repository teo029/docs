"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1403],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92749:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={title:"Preventing SwiftUI Previews from Syncing"},c=void 0,l={unversionedId:"quick-tips/preventing-swiftui-previews-from-syncing",id:"quick-tips/preventing-swiftui-previews-from-syncing",isDocsHomePage:!1,title:"Preventing SwiftUI Previews from Syncing",description:"When developing with SwiftUI, you may notice that data from a regular simulator or physical device will sync with a mysterious \"other\" device. This mysterious device is most likely the SwiftUI Preview Simulator. Simply closing XCode doesn't guarantee that this preview simulator closes. In order to stop this from happening, you'll need to prevent SwiftUI preview simulator from calling startSync.",source:"@site/docs/ios/quick-tips/preventing-swiftui-previews-from-syncing.md",sourceDirName:"quick-tips",slug:"/quick-tips/preventing-swiftui-previews-from-syncing",permalink:"/ios/quick-tips/preventing-swiftui-previews-from-syncing",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/quick-tips/preventing-swiftui-previews-from-syncing.md",tags:[],version:"current",frontMatter:{title:"Preventing SwiftUI Previews from Syncing"},sidebar:"docs",previous:{title:"Avoiding Excessive Memory Consumption",permalink:"/ios/quick-tips/avoiding-excessive-memory-consumption"},next:{title:"Overview",permalink:"/ios/common/security/overview"}},p=[],u={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When developing with SwiftUI, you may notice that data from a regular simulator or physical device will sync with a mysterious \"other\" device. This mysterious device is most likely the SwiftUI Preview Simulator. Simply closing XCode doesn't guarantee that this preview simulator closes. In order to stop this from happening, you'll need to prevent SwiftUI preview simulator from calling ",(0,o.kt)("inlineCode",{parentName:"p"},"startSync"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SwiftUI Preview",src:n(87090).Z})),(0,o.kt)("p",null,"If you want to check that your runtime is running as a SwiftUI preview, you can read the process environment variables like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let isPreview: Bool = ProcessInfo.processInfo.environment["XCODE_RUNNING_FOR_PREVIEWS"] == "1"\n')),(0,o.kt)("p",null,"To prevent your Ditto instance in the preview from syncing, ensure to wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"startSync()")," in an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," clause like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let isPreview: Bool = ProcessInfo.processInfo.environment["XCODE_RUNNING_FOR_PREVIEWS"] == "1"\n\nif !isPreview {\n  // non preview simulators and real devices can sync \n  try ditto.startSync()\n}\n')),(0,o.kt)("p",null,"Remember, a Ditto instance that has not called ",(0,o.kt)("inlineCode",{parentName:"p"},"startSync")," will not connect or replicate to devices that it can discover. However, a device that has not called ",(0,o.kt)("inlineCode",{parentName:"p"},"startSync")," ",(0,o.kt)("em",{parentName:"p"},"can still insert, find, observe, update, and remove")," documents as if it were just a local database."))}m.isMDXComponent=!0},87090:function(e,t,n){t.Z=n.p+"assets/images/swiftui_preview-9e0cf0a0ccdce029945700514d991e15.jpg"}}]);