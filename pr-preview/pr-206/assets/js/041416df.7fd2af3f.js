"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8156],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=a,y=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(y,o(o({ref:t},d),{},{components:i})):n.createElement(y,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},79443:function(e,t,i){var n=(0,i(67294).createContext)(void 0);t.Z=n},80944:function(e,t,i){var n=i(67294),a=i(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,i){var n=i(67294);t.Z=function(e){var t=e.children,i=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:i,className:a},t)}},49366:function(e,t,i){var n=i(67294),a=i(80944),r=i(86010);t.Z=function(e){var t,i=e.lazy,o=(e.block,e.defaultValue),l=e.values,s=e.groupId,c=(e.className,n.Children.toArray(e.children)),d=null!=l?l:c.map((function(e){return{value:e.props.value,label:e.props.label}})),u=null!=o?o:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,p=(0,a.Z)(),h=p.tabGroupChoices,y=p.setTabGroupChoices,m=(0,n.useState)(u),f=m[0],v=m[1];if(null!=s){var g=h[s];null!=g&&g!==f&&d.some((function(e){return e.value===g}))&&v(g)}var b=function(e){v(e),null!=s&&y(s,e)};return n.createElement("div",{className:"tabs-container"},n.createElement("div",{className:"sm:hidden"},n.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),n.createElement("select",{id:"tabs",name:"tabs",value:f,onChange:function(e){return b(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},d.map((function(e){var t=e.value,i=e.label;return n.createElement("option",{value:t,key:t},null!=i?i:t)})))),n.createElement("div",{className:"hidden sm:block"},n.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},d.map((function(e){var t=e.value,i=e.label;return n.createElement("button",{key:t,onClick:function(){return b(t)},className:(0,r.Z)(f===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":f===t?"page":void 0},null!=i?i:t)})))),i?(0,n.cloneElement)(c.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},82394:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=(i(49366),i(30547),["components"]),l={title:"Identities",sidebar_position:2},s=void 0,c={unversionedId:"security/identities",id:"security/identities",isDocsHomePage:!1,title:"Identities",description:"Every installation of an app that uses Ditto has its own identity. This identity",source:"@site/docs/security/identities.md",sourceDirName:"security",slug:"/security/identities",permalink:"/pr-preview/pr-206/security/identities",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/identities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Identities",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/pr-preview/pr-206/concepts/security"},next:{title:"Designing Permissions",permalink:"/pr-preview/pr-206/security/designing-permissions"}},d=[{value:"Ditto Identity Lifecycle",id:"ditto-identity-lifecycle",children:[],level:3},{value:"Parts of a Ditto Identity",id:"parts-of-a-ditto-identity",children:[],level:3},{value:"Subtypes of Ditto Identity",id:"subtypes-of-ditto-identity",children:[],level:3}],u={toc:d};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every installation of an app that uses Ditto has its own identity. This identity\nis used to identify each unique peer in the mesh network. When you start\nprototyping with Ditto you can use a development identity, which contains\ndefault settings and offers no real security. Development certificates should\nabsolutely not be deployed to any production environments. Once you are ready to\ndeploy, this can be swapped for a production identity where security is\nenforced."),(0,r.kt)("p",null,"The Ditto Identity is one of the main inputs to the Ditto Constructor and\ncontrols how your local Ditto instance will communicate with other Ditto Peers.\nEach Ditto Identity is associated to a single Ditto client via a globally unique\nAppId and may not be used across multiple Ditto apps. A Ditto Identity is used to accept or reject read and writes with peer instances. Each Ditto Identity can be associated to a set of ",(0,r.kt)("a",{parentName:"p",href:"/security/designing-permissions"},"access control permissions"),"\nwhich you specify."),(0,r.kt)("h3",{id:"ditto-identity-lifecycle"},"Ditto Identity Lifecycle"),(0,r.kt)("p",null,"While highly configurable, each Ditto Identity has a typical life cycle. First, the Ditto Identity is constructed. Typically the only prerequisites are a Ditto persistence root (working directory for local data storage, where configured) and a globally unique Ditto AppId. In order to sync, all app instances, regardless of SDK language, ",(0,r.kt)("em",{parentName:"p"},"must"),' have the same globally unique Ditto AppId. Therefore this value will typically be incorporated in the App\'s bundle or provided to the App when it starts. The Ditto Big Peer can create AppIds for you, but it is not the authentication provider. Ditto Cloud is a proxy to your own "source of truth" for identities, credential validation, and permissions.'),(0,r.kt)("p",null,"Next the Ditto Identity is consumed by the Ditto constructor, yielding a configured ",(0,r.kt)("inlineCode",{parentName:"p"},"Ditto")," instance. The Ditto instance will contain a Ditto Authenticator and your own implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoAuthEventHandler")," interface, which can provide login credentials. Ditto will then contact the configured Auth Url and supply the login credentials to an Authentication Provider. If the credentials are valid, then the Authentication Provider will return to Ditto an Authentication Token, validating its credentials and granting the Ditto instance individualized permissions. The Ditto instance can now sync with other peers."),(0,r.kt)("h3",{id:"parts-of-a-ditto-identity"},"Parts of a Ditto Identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AppId"),' - Uniquely Identifies a Ditto-based App. It establishes a top-level "namespace" within which all Ditto Identities, collections of documents, timeseries events, and permissions live. It is a part of all Identity types. It may be either a string or, more typically, a UUID v4 lowercased and hyphenated. The Ditto Big Peer provisions ',(0,r.kt)("inlineCode",{parentName:"li"},"UUIDv4")," strings that be used to sync with it's servers in the Cloud."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CustomAuthUrl")," - The URL of an Auth Provider which can validate credentials and issue Auth Tokens and x509 certificates. The default values is ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<app-id>.cloud.ditto.live/"),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomAuthUrl")," is only required when another, possibly self-hosted, Auth Provider is preferred. ",(0,r.kt)("inlineCode",{parentName:"li"},"OfflinePlayground"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SharedKey"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Manual")," Identities don't require any AuthURL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EnableCloudSync")," - Whether Ditto should attempt to sync with ",(0,r.kt)("inlineCode",{parentName:"li"},"wss://<app-id>.cloud.ditto.live"),". Only used by ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlinePlayground")," Identities. If you're hosting your own Ditto Big Peer, this should be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," and a custom SyncUrl provided to the Ditto ",(0,r.kt)("inlineCode",{parentName:"li"},"TransportConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WorkingDir")," (DittoRoot) - A location where Ditto can cache Auth Tokens, x509 certificates, and other auth-related data. Typically the same as the working directory containing Ditto's local data store."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthEventHandler")," (Callback) - A type defined by the App developer which implements the ",(0,r.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DittoAuthCallback"),") Trait/Interface/Protocol. Typically responsible for obtaining and storing credentials like a username, password, or other token from the App's user and then supplying them to Ditto when authentication is required.")),(0,r.kt)("p",null,"For more detailed information on what is contained within Ditto Identity certificates, see ",(0,r.kt)("a",{parentName:"p",href:"/how-it-works/certificate-security"},"Certificate Security"),"."),(0,r.kt)("h3",{id:"subtypes-of-ditto-identity"},"Subtypes of Ditto Identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/concepts/online-playground"},"OnlinePlayground")," - An insecure identity for prototyping and development use. All modes of sync are supported but no Authentication Provider needs to be configured. Instead, all users will receive full read and write permissions to all App collections and timeseries. Do not use this Identity in production. No ",(0,r.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," needs to be provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/security/online-with-authentication/overview"},"OnlineWithAuthentication")," - Use this identity for most production Apps. The ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," identity supports both Cloud and peer-to-peer sync with secure authentication, encryption, and access control.  The Ditto instance requests the Ditto Big Peer sign an x509 certificate, using the previously validated credentials and Authentication Token as proof of its identity. Use typically requires configuring an Authentication Provider for your App within the Ditto Big Peer portal, which can validate user-provided credentials. This identity also requires a developer-provided implementation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DittoAuthCallback"),") interface. For a more thorough walkthrough for setting up authentication with your application, see the ",(0,r.kt)("a",{parentName:"li",href:"/guides/authentication/intro"},"tutorial"),".  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/security/shared-key"},"SharedKey"),' - A secure Identity used for "private" Apps where the developer trusts all users, the Ditto-based App, and devices and would prefer a fully self-contained deployment. Ditto instances are each provided with a pre-shared key that is used for mutual authentication. This Identity does NOT support sync over the Big Peer. Typically used with some external device management solution which can provide and rotate the pre-shared key. Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ',(0,r.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-it-works/certificate-security"},"Manual")," - An advanced Identity where the app developer will provide each Ditto instance with an x509 Client Certificate signed by a common, trusted Certificate Authority. Like ",(0,r.kt)("inlineCode",{parentName:"li"},"SharedKey")," typically deployed along side existing PKI and device management solutions. This Identity cannot sync with the publicly-accessible Big Peer at ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud.ditto.live")," but may sync with a custom deployment. Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OfflinePlayground")," - An ",(0,r.kt)("em",{parentName:"li"},"unsecured")," identity suitable for local testing, CI/CD pipelines, and peer-to-peer sync. Cloud sync is not permitted. All peers are automatically trusted and no authentication takes place. Do ",(0,r.kt)("em",{parentName:"li"},"not")," use this Identity in production. Given that this identity doesn't use the Ditto cloud, Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),".")))}p.isMDXComponent=!0},86010:function(e,t,i){function n(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=n(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}i.d(t,{Z:function(){return a}})}}]);