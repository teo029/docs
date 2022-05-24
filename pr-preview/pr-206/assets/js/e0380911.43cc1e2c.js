"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4531],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94575:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Server-side Webhook",sidebar_position:2},l=void 0,p={unversionedId:"guides/authentication/server",id:"guides/authentication/server",isDocsHomePage:!1,title:"Server-side Webhook",description:"The authentication webhook needs to handle an HTTP POST request. Each client",source:"@site/docs/guides/authentication/2-server.mdx",sourceDirName:"guides/authentication",slug:"/guides/authentication/server",permalink:"/pr-preview/pr-206/guides/authentication/server",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/authentication/2-server.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Server-side Webhook",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-206/guides/authentication/intro"},next:{title:"Login and Refresh",permalink:"/pr-preview/pr-206/guides/authentication/login"}},u=[{value:"Server",id:"server",children:[{value:"Incoming POST body",id:"incoming-post-body",children:[],level:3}],level:2},{value:"Deploy your server",id:"deploy-your-server",children:[],level:2},{value:"Configure your Portal App",id:"configure-your-portal-app",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The authentication webhook needs to handle an ",(0,a.kt)("strong",{parentName:"p"},"HTTP POST")," request. Each client\nthat will need to authenticate will send a payload to this webhook. The\nfollowing section requires that you have knowledge of writing server side HTTP\nendpoints and responding with a JSON payload. Code samples of server side code\nare written with a NodeJS / Express syntax. You can use any language or\nframework on the server side. "),(0,a.kt)("p",null,"This section will not cover how to write server side code in depth or how to\ndeploy your server side. "),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,"First you must implement an HTTP endpoint that will take the JWT token, provider,\nand appID and return the permissions granted for that user. "),(0,a.kt)("h3",{id:"incoming-post-body"},"Incoming POST body"),(0,a.kt)("p",null,"When your client device wants to authenticate using your webhook, your server will\nreceive an HTTP post with a JSON payload that looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "appID": "YOUR_APP_ID_HERE", // the appID\n  "provider": "my-auth", // this is the "Name" of the "Authentication Webhook"\n  "token": "eyJhbGciOiJI..." // this is what each device will send to authenticate\n}\n')),(0,a.kt)("p",null,"Your can introspect these values by parsing out the request body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let express = require('express')\nlet cors = require('cors')\nlet body = require('body-parser')\nlet app = express()\n\napp.use(cors())\napp.use(body.json())\n\nlet app = express()\n\napp.post('/', (req, res) => {\n  const appID = req.body.appID\n  const provider = req.body.provider\n  const token = req.body.token\n})\n")),(0,a.kt)("p",null,"Generally, you will want to check the token for some sort of validity. Let's\nassume you have some sort of library or logic to parse and validate the token is\nfor a specific user. "),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo")," key in your JSON response to\npass information back to client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.post(\'/\', async (req, res) => {\n  const token = req.body.token;\n  try {\n    const { userId } = await checkToken(token)\n    // payload = getDittoPermissions(userId)\n    res.json(payload)\n  } catch (err) {\n    res.json({\n      "authenticate": err,\n      "userInfo": err.message\n    }) \n  }\n})\n')),(0,a.kt)("p",null,"As a simple example, let's grant full ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," permissions to ",(0,a.kt)("em",{parentName:"p"},"all\ncollections")," and ",(0,a.kt)("em",{parentName:"p"},"all documents"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.post(\'/\', async (req, res) => {\n  const token = req.body.token;\n  try {\n    let payload = {\n      "authenticate": true,\n      "expirationSeconds": 28800,\n      "userID": "123abc",\n      "permissions": {\n        "read": {\n          "everything": true,\n          "queriesByCollection": {}\n        },\n        "write": {\n          "everything": true,\n          "queriesByCollection": {}\n        }\n      }\n    }\n    res.json(payload)\n  } catch (err) {\n    res.json({\n      "authenticate": err,\n      "userInfo": err.message\n    }) \n  }\n})\n\n')),(0,a.kt)("p",null,"For more information on how to design your app's permissions, see ",(0,a.kt)("a",{parentName:"p",href:"/security/designing-permissions"},"Security > Online With Authentication > Designing\nPermissions"),"."),(0,a.kt)("h2",{id:"deploy-your-server"},"Deploy your server"),(0,a.kt)("p",null,"Now, the portal will attempt to reach this server. That means you must deploy it\nsomewhere that this HTTP request is accessible. For testing, you\ncan use a quick-deploy service such as ",(0,a.kt)("a",{parentName:"p",href:"https://glitch.com/"},"Glitch"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please be sure that this endpoint is not behind a firewall or VPN.  If you\ncannot get around this requirement ",(0,a.kt)("a",{parentName:"p",href:"mailto:contact@ditto.live"},"contact us"),". "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.listen(process.env.PORT, () => {\n  console.log('server listening on ', process.env.PORT)\n})\n")),(0,a.kt)("h2",{id:"configure-your-portal-app"},"Configure your Portal App"),(0,a.kt)("p",null,'To use an "Online With Authentication" identity, go to your app in the ',(0,a.kt)("a",{parentName:"p",href:"https://portal.ditto.live/"},"portal")," and find the ",(0,a.kt)("strong",{parentName:"p"},"Authentication Mode & Webhook Settings")," section. Ensure that ",(0,a.kt)("strong",{parentName:"p"},'"With Authentication"')," is selected like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Online With Authentication setting in Portal",src:n(95880).Z})),(0,a.kt)("p",null,"Below, a section called ",(0,a.kt)("strong",{parentName:"p"},"Authentication Webhooks")," will be editable. Once your Authentication Webhook Endpoint(s) is deployed and ready, you can register it in the portal. Add a ",(0,a.kt)("strong",{parentName:"p"},"Name")," and ",(0,a.kt)("strong",{parentName:"p"},"URL"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Name")," is used the differentiate between multiple authentication. Most applications will have one authentication webhook, however the ",(0,a.kt)("strong",{parentName:"li"},"Name")," parameter is still required. This name value is important for the next section."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"URL")," parameter is the fully qualified URL of the webhook that you deployed in the section above. Please include the protocol (",(0,a.kt)("em",{parentName:"li"},"https:// or http://")," though we highly discourage\n",(0,a.kt)("em",{parentName:"li"},"http://"),").")))}d.isMDXComponent=!0},95880:function(e,t,n){t.Z=n.p+"assets/images/portal-with-authentication-setting-db905a14e187f9e15d460735da4712ad.png"}}]);