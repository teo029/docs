"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5303],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},80944:function(e,n,t){var a=t(67294),r=t(79443);n.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},49366:function(e,n,t){var a=t(67294),r=t(80944),o=t(86010);n.Z=function(e){var n,t=e.lazy,l=e.platform,i=(e.block,e.defaultValue),c=e.values,u=e.groupId,s=(e.className,a.Children.toArray(e.children)),p=null!=c?c:s.map((function(e){return{value:e.props.value,label:e.props.label}})),d=null!=i?i:null==(n=s.find((function(e){return e.props.default})))?void 0:n.props.value,m=(0,r.Z)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,g=(0,a.useState)(d),h=g[0],k=g[1];(0,a.useEffect)((function(){if(null!=u){var e=f[u];null!=e&&e!==h&&(p.some((function(n){return n.value===e}))?k(e):k(d))}}),[l,f[u]]);var b=function(e){k(e),null!=u&&v(u,e)},N=p.length>1;return a.createElement("div",{className:"tabs-container"},N&&a.createElement(a.Fragment,null,a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:h,onChange:function(e){return b(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},p.map((function(e){var n=e.value,t=e.label;return a.createElement("option",{value:n,key:n},null!=t?t:n)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},p.map((function(e){var n=e.value,t=e.label;return a.createElement("button",{key:n,onClick:function(){return b(n)},className:(0,o.Z)(h===n?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":h===n?"page":void 0},null!=t?t:n)}))))),t?(0,a.cloneElement)(s.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},14993:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(49366),i=t(30547),c=["components"],u={title:"2 - Ditto events"},s=void 0,p={unversionedId:"guides/kafka/consumer",id:"guides/kafka/consumer",isDocsHomePage:!1,title:"2 - Ditto events",description:"Consuming events",source:"@site/docs/common/guides/kafka/2-consumer.md",sourceDirName:"guides/kafka",slug:"/guides/kafka/consumer",permalink:"/pr-preview/pr-218/guides/kafka/consumer",editUrl:"https://github.com/getditto/docs/edit/master/docs/common/guides/kafka/2-consumer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Ditto events"}},d=[{value:"Consuming events",id:"consuming-events",children:[],level:2},{value:"New document created",id:"new-document-created",children:[],level:2},{value:"Update",id:"update",children:[],level:2},{value:"Remove",id:"remove",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"consuming-events"},"Consuming events"),(0,o.kt)("p",null,"Once you have your consumer running, you will see events written to the console every time a change is replicated to the Ditto Big Peer. "),(0,o.kt)("p",null,"While the script is running, make a change to see the event in the console. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," a new value into the ",(0,o.kt)("inlineCode",{parentName:"p"},"people")," collection:"),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"HTTP",value:"http"},{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"http",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://<CLOUD_ENDPOINT>/api/v1/collections/people/documents' \\\n  --header 'X-DITTO-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==' \\\n  --header 'Content-Type: application/json' \\\n  --data-raw '{\"name\": \"Susan\", \"age\": 31}'\n"))),(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const docID = await ditto.store.collection('people').upsert({\n    name: \"Susan\",\n    age: 31\n})\n"))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// upsert JSON-compatible data into Ditto\nlet docId = ditto.store["people"].upsert([\n    "name": "Susan",\n    "age": 31\n])\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'// upsert JSON-compatible data into Ditto\nDITDocumentID *docID = [[ditto.store collection:@"people"]\n     upsert:@{ @"name": @"Susan", @"age": [NSNumber numberWithInt:31] }\n     isDefault:false\n     error:nil];\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docId = ditto.store["people"].upsert(mapOf(\n    "name" to "Susan",\n    "age" to 31\n))\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> content = new HashMap<>();\ncontent.put("name", "Susan");\ncontent.put("age", 31);\nDittoDocumentID docId = ditto.store.collection("people").upsert(content);\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = new Dictionary<string, object>\n{\n    { "name", "Susan" },\n    { "age", 31 }\n};\nvar docId = ditto.Store.Collection("people").upsert(content);\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'json content = json({\n    { "name", "Susan" },\n    { "age", 31 }\n});\nDocumentId doc_id = ditto.store.collection("people").upsert(content);\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use serde_json::json;\nlet content = json!({\n  "name": "Susan",\n  "age": 31\n});\nlet doc_id = ditto.store().collection("people")?.upsert(content, None, false)?;\n')))),(0,o.kt)("p",null,"After changing a document, look at the terminal running the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/kafka-console-consumer.sh")," script. "),(0,o.kt)("h2",{id:"new-document-created"},"New document created"),(0,o.kt)("p",null,"When a new document is created, ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," and the property ",(0,o.kt)("inlineCode",{parentName:"p"},"change.oldValue")," will always be null."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please take note of the ",(0,o.kt)("inlineCode",{parentName:"p"},"txnID")," field which describes a timestamp of when the big peer internally replicated data modifications from small peers. This number is an always increasing value."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 552789,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "upsert",\n    "oldValue": null,\n    "newValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472201,\n      "name": "Susan",\n      "age": 31\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("p",null,"When a document was updated, ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"change.oldValue")," will contain the old version of the document and ",(0,o.kt)("inlineCode",{parentName:"p"},"change.newValue")," contains the full document after the upsert was complete. ",(0,o.kt)("inlineCode",{parentName:"p"},"newValue"),' also includes all properties that did not change as a result of this operation. For example, even though we do not change "age" in the following example, we still see ',(0,o.kt)("inlineCode",{parentName:"p"},"age")," in the resulting Kafka stream. "),(0,o.kt)("p",null,"After updating the document ",(0,o.kt)("inlineCode",{parentName:"p"},"6213e9c90012e4af0017cb9f")," with the properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  ownedCars: 0, \n  friends: [], \n  name: "Frank"\n}\n')),(0,o.kt)("p",null,"We will see the following JSON event stream through the Kafka console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 553358,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "upsert",\n    "oldValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472312,\n      "name": "Susan",\n      "age": 31\n    },\n    "newValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472312,\n      "name": "Frank",\n      "age": 31,\n      "ownedCars": 0,\n      "friends": []\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"remove"},"Remove"),(0,o.kt)("p",null,"When a document was removed, ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),", and the property ",(0,o.kt)("inlineCode",{parentName:"p"},"change.value")," contains the full document at the time it was removed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 701251,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "remove",\n    "value": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645468039,\n      "name": "Susan",\n      "age": 31 \n    }\n  }\n}\n')))}f.isMDXComponent=!0},86010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);