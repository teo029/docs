"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4154],{20830:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},39960:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(73727),o=n(52263),c=n(13919),l=n(10412);const s=(0,r.createContext)({collectLink:()=>{}});var i=n(44996),u=n(18780);const m=function(e){let{isNavLink:t,to:n,href:m,activeClassName:d,isActive:h,"data-noBrokenLinkCheck":f,autoAddBaseUrl:g=!0,...v}=e;var p;const{siteConfig:{trailingSlash:E,baseUrl:k}}=(0,o.Z)(),{withBaseUrl:b}=(0,i.C)(),y=(0,r.useContext)(s),w=n||m,C=(0,c.Z)(w),Z=null==w?void 0:w.replace("pathname://","");let S=void 0!==Z?(L=Z,g&&(e=>e.startsWith("/"))(L)?b(L):L):void 0;var L;S&&C&&(S=(0,u.applyTrailingSlash)(S,{trailingSlash:E,baseUrl:k}));const T=(0,r.useRef)(!1),M=t?a.OL:a.rU,N=l.default.canUseIntersectionObserver,_=(0,r.useRef)();(0,r.useEffect)((()=>(!N&&C&&null!=S&&window.docusaurus.prefetch(S),()=>{N&&_.current&&_.current.disconnect()})),[_,S,N,C]);const I=null!==(p=null==S?void 0:S.startsWith("#"))&&void 0!==p&&p,A=!S||!C||I;return S&&C&&!I&&!f&&y.collectLink(S),A?r.createElement("a",{href:S,...w&&!C&&{target:"_blank",rel:"noopener noreferrer"},...v}):r.createElement(M,{...v,onMouseEnter:()=>{T.current||null==S||(window.docusaurus.preload(S),T.current=!0)},innerRef:e=>{var t,n;N&&e&&C&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},_.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),n())}))})),_.current.observe(t))},to:S||"",...t&&{isActive:h,activeClassName:d}})}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>a,b:()=>r})},44996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>c});var r=n(52263),a=n(13919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:o=!1,absolute:c=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(t,e,n,r)}}function c(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},51588:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),o=n(73935),c=n(52263),l=n(16550),s=n(44996),i=n(39960),u=n(12859),m=n(2644),d=n(32822);function h(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var f=n(20830),g=["translations"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(s){l=!0,a=s}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b="Ctrl";var y=a.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,o=k(e,g),c=r.buttonText,l=void 0===c?"Search":c,s=r.buttonAriaLabel,i=void 0===s?"Search":s,u=p((0,a.useState)(null),2),m=u[0],d=u[1];return(0,a.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?d("\u2318"):d(b))}),[]),a.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},o,{ref:t}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(f.W,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==m&&a.createElement(a.Fragment,null,a.createElement("kbd",{className:"DocSearch-Button-Key"},m===b?a.createElement(h,null):m),a.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),w=n(96730);function C(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,c.Z)(),t=(0,w._r)(),n=(0,w.WS)(),r=(0,d.Oh)(),a=[d.HX,...Object.keys(t).map((function(e){const a=n?.activePlugin?.pluginId===e?n.activeVersion:void 0,o=r[e],c=t[e].versions.find((e=>e.isLast)),l=a??o??c;return(0,d.os)(e,l.name)}))];return{locale:e.currentLocale,tags:a}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}var Z=n(95999);const S="searchBox_Bc3W";let L=null;function T(e){let{hit:t,children:n}=e;return a.createElement(i.Z,{to:t.url},n)}function M(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:r}=(0,m.Z)();return a.createElement(i.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function N(e){let{contextualSearch:t,externalUrlRegex:i,...m}=e;const{siteMetadata:h}=(0,c.Z)(),f=C(),g=m.searchParameters?.facetFilters??[],v=t?[...f,...g]:g,p={...m.searchParameters,facetFilters:v},{withBaseUrl:E}=(0,s.C)(),k=(0,l.k6)(),b=(0,a.useRef)(null),w=(0,a.useRef)(null),[N,_]=(0,a.useState)(!1),[I,A]=(0,a.useState)(null),O=(0,a.useCallback)((()=>L?Promise.resolve():Promise.all([n.e(6780).then(n.bind(n,76780)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(5040)]).then(n.bind(n,55040))]).then((e=>{let[{DocSearchModal:t}]=e;L=t}))),[]),x=(0,a.useCallback)((()=>{O().then((()=>{b.current=document.createElement("div"),document.body.insertBefore(b.current,document.body.firstChild),_(!0)}))}),[O,_]),B=(0,a.useCallback)((()=>{_(!1),b.current.remove()}),[_]),P=(0,a.useCallback)((e=>{O().then((()=>{_(!0),A(e.key)}))}),[O,_,A]),R=(0,a.useRef)({navigate(e){let{itemUrl:t}=e;(0,d.Fx)(i,t)?window.location.href=t:k.push(t)}}).current,U=(0,a.useRef)((e=>e.map((e=>{if((0,d.Fx)(i,e.url))return e;const t=new URL(e.url);return{...e,url:E(`${t.pathname}${t.hash}`)}})))).current,D=(0,a.useMemo)((()=>e=>a.createElement(M,(0,r.Z)({},e,{onClose:B}))),[B]),W=(0,a.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e)),[h.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,c=e.searchButtonRef;a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key.toLowerCase()&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,o,c])}({isOpen:N,onOpen:x,onClose:B,onInput:P,searchButtonRef:w});const j=(0,Z.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return a.createElement(a.Fragment,null,a.createElement(u.Z,null,a.createElement("link",{rel:"preconnect",href:`https://${m.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),a.createElement("div",{className:S},a.createElement(y,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:x,ref:w,translations:{buttonText:j,buttonAriaLabel:j}})),N&&(0,o.createPortal)(a.createElement(L,(0,r.Z)({onClose:B,initialScrollY:window.scrollY,initialQuery:I,navigator:R,transformItems:U,hitComponent:T,resultsFooterComponent:D,transformSearchClient:W},m,{searchParameters:p})),b.current))}const _=function(){const{siteConfig:e}=(0,c.Z)();return a.createElement(N,e.themeConfig.algolia)}},2644:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(16550),a=n(52263),o=n(67294);const c=function(){const e=(0,r.k6)(),{siteConfig:{baseUrl:t}}=(0,a.Z)(),[n,c]=(0,o.useState)("");return(0,o.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("q")??"";c(e)}),[]),{searchQuery:n,setSearchQuery:(0,o.useCallback)((t=>{const n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),c(t)}),[e]),generateSearchPageLink:(0,o.useCallback)((e=>`${t}search?q=${encodeURIComponent(e)}`),[t])}}},23264:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462),a=n(67294);const o=e=>{let{width:t=20,height:n=20,...o}=e;return a.createElement("svg",(0,r.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},o),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))}},97518:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(67294),a=n(86010),o=n(16550),c=n(95999),l=n(32822);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,r.useRef)(null),{action:t}=(0,o.k6)();return(0,l.SL)((n=>{let{location:r}=n;e.current&&!r.hash&&"PUSH"===t&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(c.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var m=n(87462);function d(e){let{width:t=21,height:n=21,color:a="currentColor",strokeWidth:o=1.2,className:c,...l}=e;return r.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:t,height:n},l),r.createElement("g",{stroke:a,strokeWidth:o},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",g="announcementBarClose_A3A1",v="announcementBarContent_6uhP";const p=function(){const{isActive:e,close:t}=(0,l.nT)(),{announcementBar:n}=(0,l.LU)();if(!e)return null;const{content:o,backgroundColor:s,textColor:i,isCloseable:u}=n;return r.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},u&&r.createElement("div",{className:f}),r.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:o}}),u?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",g),onClick:t,"aria-label":(0,c.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(d,{width:14,height:14,strokeWidth:3.1})):null)};var E=n(12172),k=n(82838),b=n(10412);const y=(0,l.WA)("theme"),w="light",C="dark",Z=e=>e===C?C:w,S=e=>{(0,l.WA)("theme").set(Z(e))},L=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,l.LU)(),[a,o]=(0,r.useState)((e=>b.default.canUseDOM?Z(document.documentElement.getAttribute("data-theme")):Z(e))(e)),c=(0,r.useCallback)((()=>{o(w),S(w)}),[]),s=(0,r.useCallback)((()=>{o(C),S(C)}),[]);return(0,r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",Z(a))}),[a]),(0,r.useEffect)((()=>{if(!t)try{const e=y.get();null!==e&&o(Z(e))}catch(e){console.error(e)}}),[t,o]),(0,r.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;o(t?C:w)}))}),[t,n]),{isDarkTheme:a===C,setLightTheme:c,setDarkTheme:s}};var T=n(82924);const M=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=L();return r.createElement(T.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)},N="docusaurus.tab.",_=()=>{const[e,t]=(0,r.useState)({}),n=(0,r.useCallback)(((e,t)=>{(0,l.WA)(`${N}${e}`).set(t)}),[]);return(0,r.useEffect)((()=>{try{const e={};(0,l._f)().forEach((t=>{if(t.startsWith(N)){const n=t.substring(N.length);e[n]=(0,l.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t((t=>({...t,[e]:r}))),n(e,r)}}};var I=n(79443);const A=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=_();return r.createElement(I.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function O(e){let{children:t}=e;return r.createElement(M,null,r.createElement(l.pl,null,r.createElement(A,null,r.createElement(l.OC,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t))))))}var x=n(12859),B=n(52263),P=n(44996);function R(e){let{locale:t,version:n,tag:a}=e;const o=t;return r.createElement(x.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var U=n(41217);function D(){const{i18n:{defaultLocale:e,locales:t}}=(0,B.Z)(),n=(0,l.l5)();return r.createElement(x.Z,null,t.map((e=>r.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function W(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,B.Z)(),a=function(){const{siteConfig:{url:e}}=(0,B.Z)(),{pathname:t}=(0,o.TH)();return e+(0,P.Z)(t)}(),c=t?`${n}${t}`:a;return r.createElement(x.Z,null,r.createElement("meta",{property:"og:url",content:c}),r.createElement("link",{rel:"canonical",href:c}))}function j(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:a}}=(0,B.Z)(),{metadatas:o,image:c}=(0,l.LU)(),{title:s,description:i,image:u,keywords:d,searchMetadatas:h}=e,f=(0,P.Z)(t),g=(0,l.pe)(s),v=n,p=a[n].direction;return r.createElement(r.Fragment,null,r.createElement(x.Z,null,r.createElement("html",{lang:v,dir:p}),t&&r.createElement("link",{rel:"shortcut icon",href:f}),r.createElement("title",null,g),r.createElement("meta",{property:"og:title",content:g}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c&&r.createElement(U.Z,{image:c}),u&&r.createElement(U.Z,{image:u}),r.createElement(U.Z,{description:i,keywords:d}),r.createElement(W,null),r.createElement(D,null),r.createElement(R,(0,m.Z)({tag:l.HX,locale:n},h)),r.createElement(x.Z,null,o.map(((e,t)=>r.createElement("meta",(0,m.Z)({key:`metadata_${t}`},e))))))}const F=function(){(0,r.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const $=function(e){const{children:t,noFooter:n,wrapperClassName:o,pageClassName:c}=e;return F(),r.createElement(O,null,r.createElement(j,e),r.createElement(u,null),r.createElement(p,null),r.createElement(E.Z,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,c)},t),!n&&r.createElement(k.Z,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(39960),c=n(89750),l=n(44996),s=n(52263),i=n(32822);const u=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:u={src:""}}}=(0,i.LU)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,l.Z)(u.href||"/"),g={light:(0,l.Z)(u.src),dark:(0,l.Z)(u.srcDark||u.src)},v=a.createElement(c.Z,{sources:g,height:u.height,width:u.width,alt:u.alt||n||t});return a.createElement(o.Z,(0,r.Z)({to:f},h,u.target&&{target:u.target}),u.src&&(m?a.createElement("div",{className:m},v):a.createElement(a.Fragment,null,v)),null!=n&&a.createElement("b",{className:d},n))}},41217:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(12859),o=n(32822),c=n(44996);function l(e){let{title:t,description:n,keywords:l,image:s,children:i}=e;const u=(0,o.pe)(t),{withBaseUrl:m}=(0,c.C)(),d=s?m(s,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),i)}},82924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(void 0)},89750:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(87462),a=n(67294),o=n(86010),c=n(72389),l=n(85350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,c.Z)(),{isDarkTheme:n}=(0,l.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return a.createElement(a.Fragment,null,h.map((e=>a.createElement("img",(0,r.Z)({key:e,src:i[e],alt:m,className:(0,o.Z)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},40232:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(32822),c=n(72389),l=n(86010);const s={toggle:"toggle_iYfV",toggleScreenReader:"toggleScreenReader_h9qa",toggleDisabled:"toggleDisabled_xj38",toggleTrack:"toggleTrack_t-f2",toggleTrackCheck:"toggleTrackCheck_mk7D",toggleChecked:"toggleChecked_a04y",toggleTrackX:"toggleTrackX_dm8H",toggleTrackThumb:"toggleTrackThumb_W6To",toggleFocused:"toggleFocused_pRSw",toggleIcon:"toggleIcon_pHJ9"},i=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,l.Z)(s.toggleIcon,s.dark),style:n},t)},u=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,l.Z)(s.toggleIcon,s.light),style:n},t)},m=(0,a.memo)((e=>{let{className:t,icons:n,checked:r,disabled:o,onChange:c}=e;const[i,u]=(0,a.useState)(r),[m,d]=(0,a.useState)(!1),h=(0,a.useRef)(null);return a.createElement("div",{className:(0,l.Z)(s.toggle,t,{[s.toggleChecked]:i,[s.toggleFocused]:m,[s.toggleDisabled]:o})},a.createElement("div",{className:s.toggleTrack,role:"button",tabIndex:-1,onClick:()=>h.current?.click()},a.createElement("div",{className:s.toggleTrackCheck},n.checked),a.createElement("div",{className:s.toggleTrackX},n.unchecked),a.createElement("div",{className:s.toggleTrackThumb})),a.createElement("input",{ref:h,checked:i,type:"checkbox",className:s.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>u(!i),onFocus:()=>d(!0),onBlur:()=>d(!1),onKeyDown:e=>{"Enter"===e.key&&h.current?.click()}}))}));function d(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:l,lightIconStyle:s}}}=(0,o.LU)(),d=(0,c.Z)();return a.createElement(m,(0,r.Z)({disabled:!d,icons:{checked:a.createElement(i,{icon:t,style:n}),unchecked:a.createElement(u,{icon:l,style:s})}},e))}},55662:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(32822);const o=e=>{const[t,n]=(0,r.useState)(e),o=(0,r.useRef)(!1),c=(0,r.useRef)(0),l=(0,r.useCallback)((e=>{null!==e&&(c.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)(((t,r)=>{if(!e)return;const a=t.scrollY;if(a<c.current)return void n(!0);if(o.current)return void(o.current=!1);const l=r?.scrollY,s=document.documentElement.scrollHeight-c.current,i=window.innerHeight;l&&a>=l?n(!1):a+i<s&&n(!0)})),(0,a.SL)((t=>{if(e)return t.location.hash?(o.current=!0,void n(!1)):void n(!0)})),{navbarRef:l,isNavbarVisible:t}}},31839:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){void 0===e&&(e=!0),(0,r.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},85350:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(82924);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(10412);const o="desktop",c="mobile",l="ssr";function s(){return a.default.canUseDOM?window.innerWidth>996?o:c:l}const i=function(){const[e,t]=(0,r.useState)((()=>s()));return(0,r.useEffect)((()=>{function e(){t(s())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(c=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(c):function(e){return e.endsWith("/")?e.slice(0,-1):e}(c));var c;return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},69065:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))}))},5506:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))}}]);