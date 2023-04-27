"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,465],{50494:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),l=a(86010),s=a(67294),r=a(45697),o=a.n(r),c=a(44225),i=a(90401),m=a(23184),d=a(90858),u=a(89713),b=a(63680),p=a(78372),v=a(77832);const h=e=>{let{className:t,...a}=e;return s.createElement(c.t,(0,n.Z)({className:(0,l.Z)("text-[#3ddb85]",t)},a))},f=e=>{let{className:t,...a}=e;return s.createElement(i.A,(0,n.Z)({className:(0,l.Z)("text-text",t)},a))};f.propTypes=h.propTypes={className:o().string};const g=[{id:"javascript",name:"JavaScript",icon:function(e){return s.createElement("svg",(0,n.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s.createElement("path",{d:"M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z",fill:"#F5DE19"}),s.createElement("path",{d:"M32.3894 37.6804C32.8 38.5145 33.4379 39.2155 34.2296 39.7027C35.0213 40.1899 35.9346 40.4435 36.8642 40.4342C38.7402 40.4342 39.9398 39.4962 39.9398 38.1968C39.9398 36.6478 38.7075 36.0936 36.6422 35.19L35.5097 34.7047C32.2396 33.3123 30.071 31.5688 30.071 27.8822C30.071 24.4865 32.6527 21.8997 36.7024 21.8997C38.0134 21.805 39.3232 22.0984 40.4686 22.7433C41.6139 23.3882 42.544 24.356 43.1428 25.5261L39.6025 27.7893C39.3719 27.2092 38.9704 26.7128 38.4512 26.3661C37.9321 26.0194 37.3198 25.8387 36.6956 25.8479C36.4232 25.8206 36.1482 25.8504 35.888 25.9353C35.6278 26.0202 35.3881 26.1584 35.1842 26.341C34.9804 26.5237 34.8168 26.7468 34.7039 26.9961C34.5911 27.2455 34.5314 27.5156 34.5287 27.7893C34.5287 29.1472 35.3703 29.698 37.3134 30.5431L38.4459 31.0284C42.2943 32.6789 44.4698 34.3604 44.4698 38.1417C44.4698 42.219 41.2668 44.453 36.9658 44.453C35.2899 44.5597 33.619 44.1793 32.1546 43.3574C30.6902 42.5356 29.495 41.3076 28.7131 39.8215L32.3894 37.6804ZM16.3917 38.0728C17.1025 39.3344 17.7496 40.4015 19.3055 40.4015C20.7925 40.4015 21.7323 39.8198 21.7323 37.5565V22.1579H26.2605V37.6168C26.2605 42.305 23.5067 44.4392 19.4983 44.4392C18.0814 44.5166 16.6742 44.1635 15.4617 43.4263C14.2493 42.689 13.2883 41.6022 12.7051 40.3086L16.3917 38.0728Z",fill:"black"}))}},{id:"android",name:"Android",icon:h},{id:"ios",name:"iOS",icon:f},{id:"csharp",name:"C#",icon:e=>{let{className:t,...a}=e;return s.createElement(b.F,(0,n.Z)({className:(0,l.Z)("text-[#08940e]",t)},a))}},{id:"http",name:"HTTP",icon:u.d},{id:"linux",name:"Linux",icon:e=>{let{className:t,...a}=e;return s.createElement(v.L,(0,n.Z)({className:(0,l.Z)("text-[#f5c11c]",t)},a))}},{id:"rust",name:"Rust",icon:e=>{let{className:t,...a}=e;return s.createElement(p.T,(0,n.Z)({className:(0,l.Z)("text-[black]",t)},a))}},{id:"cpp",name:"C++",icon:e=>{let{className:t,...a}=e;return s.createElement(m.q,(0,n.Z)({className:(0,l.Z)("text-[#283492]",t)},a))}},{id:"python",name:"Python",icon:d.i,disabled:!0}]},99013:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(87462),l=a(67294),s=a(86010),r=a(23746),o=a(10195),c=a(87594),i=a.n(c),m=a(95999),d=a(68793),u=a(62435),b=a(71418);const p={codeBlockContainer:"codeBlockContainer_EiTO",codeBlockContent:"codeBlockContent_X2I6",codeBlockTitle:"codeBlockTitle_PQMO",codeBlock:"codeBlock_UxnK",copyButton:"copyButton_V-PD",codeBlockLines:"codeBlockLines_W6UD"};var v=a(32822);const h=/{([\d,-]+)}/,f=["js","jsBlock","jsx","python","html"],g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},E=["highlight-next-line","highlight-start","highlight-end"],_=function(e){void 0===e&&(e=f);const t=e.map((e=>{const{start:t,end:a}=g[e];return`(?:${t}\\s*(${E.join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)},k=e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}};function Z(e){let{children:t,className:a,metastring:c,title:f}=e;const{prism:g}=(0,v.LU)(),[E,_]=(0,l.useState)(!1),[Z,N]=(0,l.useState)(!1);(0,l.useEffect)((()=>{N(!0)}),[]);const C=(0,v.bc)(c)||f,y=(0,l.useRef)(null);let w=[];const x=Array.isArray(t)?t.join(""):t;if(c&&h.test(c)){const e=c.match(h)[1];w=i()(e).filter((e=>e>0))}let B=a?.replace(/language-/,"");!B&&g.defaultLanguage&&(B=g.defaultLanguage);let S=x.replace(/\n$/,"");if(0===w.length&&void 0!==B){let e="";const t=k(B),a=x.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const s=l+1,r=a[l].match(t);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${s},`;break;case"highlight-start":n=s;break;case"highlight-end":e+=`${n}-${s-1},`}a.splice(l,1)}else l+=1}w=i()(e),S=a.join("\n")}const I=()=>{(0,o.Z)(S),_(!0),setTimeout((()=>_(!1)),2e3)};return l.createElement(r.ZP,(0,n.Z)({},r.lG,{key:String(Z),theme:b.Z,code:S,language:B}),(e=>{let{className:t,style:a,tokens:r,getLineProps:o,getTokenProps:c}=e;return l.createElement("div",{className:p.codeBlockContainer},C&&l.createElement("div",{style:a,className:p.codeBlockTitle},C),l.createElement("div",{className:(0,s.Z)(p.codeBlockContent,B)},l.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,p.codeBlock,"thin-scrollbar")},l.createElement("code",{className:p.codeBlockLines},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=o({line:e,key:t}),r=w.includes(t+1);w.includes(t+1)&&(a.className+="bg-gray-800 docusaurus-highlight-code-line");let i=(0,s.Z)(a.className,r&&"bg-gray-700");return l.createElement("span",(0,n.Z)({key:t},a,{className:i}),e.map(((e,t)=>{let a={...c({token:e,key:t})},r=a.className;return r.includes("inserted-sign")&&(r=(0,s.Z)(r,"bg-green-900")),r.includes("deleted-sign")&&(r=(0,s.Z)(r,"bg-red-900")),l.createElement("span",(0,n.Z)({key:t},a,{className:r}))})))})))),l.createElement("button",{ref:y,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(p.copyButton,"clean-btn",E?"bg-green-500":""),onClick:I},E?l.createElement("div",null,l.createElement(d.Z,{className:"w-4 h-4 inline mr-1"}),l.createElement("span",{className:"text-xs"},"Copied")):l.createElement("div",null,l.createElement(u.Z,{className:"w-4 h-4 inline mr-1"}),l.createElement("span",{className:"text-xs"},"Copy")))))}))}},39824:(e,t,a)=>{a.d(t,{Z:()=>U});var n=a(67294),l=a(86010),s=a(32822),r=a(93783),o=a(87462),c=a(39960),i=a(13919);const m={menuLinkText:"menuLinkText_C9TQ"},d=(e,t)=>"link"===e.type?(0,s.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>d(e,t))),u=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(b,(0,o.Z)({key:t,item:e},a)))))}));function b(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(p,(0,o.Z)({item:t},a)):n.createElement(v,(0,o.Z)({item:t},a))}function p(e){let{item:t,onItemClick:a,activePath:r,level:c,...i}=e;const{items:b,label:p,collapsible:v,className:h}=t,f=d(t,r),{collapsed:g,setCollapsed:E,toggleCollapsed:_}=(0,s.uR)({initialState:()=>!!v&&(!f&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const r=(0,s.D9)(t);(0,n.useEffect)((()=>{t&&!r&&a&&l(!1)}),[t,r,a])}({isActive:f,collapsed:g,setCollapsed:E}),n.createElement("li",{className:(0,l.Z)(s.kM.docs.docSidebarItemCategory,s.kM.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":g},h)},n.createElement("a",(0,o.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":v,"menu__link--active":v&&f,[m.menuLinkText]:!v}),onClick:v?e=>{e.preventDefault(),_()}:void 0,href:v?"#":void 0},i),p),n.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.createElement(u,{items:b,tabIndex:g?-1:0,onItemClick:a,activePath:r,level:c+1})))}function v(e){let{item:t,onItemClick:a,activePath:r,level:m,...u}=e;const{href:b,label:p,className:v}=t,h=d(t,r);return n.createElement("li",{className:(0,l.Z)(s.kM.docs.docSidebarItemLink,s.kM.docs.docSidebarItemLinkLevel(m),"menu__list-item",v),key:p},n.createElement(c.Z,(0,o.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:b},(0,i.Z)(b)&&{onClick:a},u),(0,i.Z)(b)?p:n.createElement("span",null,p)))}const h="sidebar_LIo8",f="sidebarWithHideableNavbar_CMI-",g="sidebarHidden_4BoQ",E="menu_oAhv",_="menuWithAnnouncementBar_IVfW";var k=a(33891),Z=a(17106),N=a(91013),C=a(58057),y=a(16550),w=a(96730),x=a(80944),B=a(45697),S=a(50494);const I=()=>window.location.pathname.split("/").slice(1),L=e=>{let{className:t}=e;const{tabGroupChoices:a,setTabGroupChoices:s}=(0,x.Z)(),r=S.Z.find((e=>e.id===a.platform)),[o,c]=(0,n.useState)(r||S.Z[0]),i=(0,w._r)(),m=(0,y.k6)();(0,n.useEffect)((()=>{let[e]=I(),t=a.platform,n=window.location.pathname;if(t&&t!==e&&"common"===e)return m.push(`/${t}${n}`);const l=(r=e,S.Z.find((e=>e.id===r)));var r;l&&l.id!==o.id&&(s("platform",l.id),c(l))}),[]);return n.createElement(k.R,{value:o,onChange:e=>{c(e),s("platform",e.id);const[,...t]=I(),a=e.id;let n=`/${a}/${t.join("/")}`;((e,t,a)=>a[e].versions[0].docs.some((e=>e.path===t)))(a,n,i)&&n!==`/${a}/`?(window.location.hash&&(n+=window.location.hash),m.push(n)):m.push(`/${a}/installation`)},className:(0,l.Z)("relative",t)},n.createElement("div",{className:"relative mt-1"},n.createElement(k.R.Button,{className:"relative flex h-12 w-full cursor-pointer items-center rounded-lg border-none bg-background-100 py-2 pl-3 pr-10 text-left outline-none focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},n.createElement(o.icon,{className:"mr-2 h-8","aria-hidden":"true",alt:o.name}),n.createElement("span",{className:"lv0_link block truncate text-text"},o.name),n.createElement("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},n.createElement(N.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}))),n.createElement("div",{className:"relative w-full"},n.createElement(Z.u,{as:n.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},n.createElement(k.R.Options,{style:{background:"white"},className:"absolute z-10 mt-1 bg-background-100 max-h-100 w-full overflow-auto bg-background-100 p-0 py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},S.Z.filter((e=>!e.disabled)).map((e=>n.createElement(k.R.Option,{key:e.id,className:e=>{let{active:t}=e;return(0,l.Z)("relative cursor-pointer select-none py-2 px-4",t&&"bg-background-200")},value:e},(t=>{let{selected:a}=t;return n.createElement("div",{className:"flex items-center justify-between"},n.createElement("div",{className:"flex items-center"},n.createElement(e.icon,{className:"mr-2 h-8",alt:e.name,"aria-hidden":"true"}),n.createElement("span",{className:(0,l.Z)("block truncate",a?"font-medium":"font-normal")},e.name)),a?n.createElement("span",{className:"left-0 flex items-center pl-3 text-blue-600"},n.createElement(C.Z,{className:"h-5 w-5","aria-hidden":"true"})):null)})))))))))};L.propTypes={className:B.string};const T=(0,n.memo)(L);var D=a(68121),j=a(91262);function A(e){let{onClick:t}=e;return n.createElement("div",{className:"absolute top-0 right-0 flex h-full w-1"},n.createElement("button",{className:"absolute right-[-12px] mt-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-background-200",onClick:t,onKeyDown:t,tabIndex:0,"aria-label":"Collapse sidebar"},n.createElement(D.Z,{className:"h-3 text-text"})))}const $=()=>{(()=>{const[,e]=window.location.pathname.split("/");["docs","","guides","cli"].includes(e)})();return n.createElement("div",{className:"my-4 flex items-center justify-end px-4"},n.createElement(T,{className:"flex-[3]"}))};function M(e){let{path:t,sidebar:a,onCollapse:r,isHidden:o}=e;const c=function(){const{isClosed:e}=(0,s.nT)(),[t,a]=(0,n.useState)(!e);return t}(),{navbar:{hideOnScroll:i},hideableSidebar:m}=(0,s.LU)(),{isClosed:d}=(0,s.nT)();return n.createElement("div",{className:(0,l.Z)(h,{[f]:i,[g]:o})},n.createElement("nav",{className:(0,l.Z)("overflow-y-auto","menu thin-scrollbar","overflow-x-visible",E,{[_]:!d&&c})},n.createElement("ul",{className:(0,l.Z)(s.kM.docs.docSidebarMenu,"menu__list")},n.createElement(j.Z,null,(()=>n.createElement($,null))),n.createElement(u,{items:a,activePath:t}))),m&&n.createElement(A,{onClick:r}))}const P=e=>{let{toggleSidebar:t,sidebar:a,path:r}=e;return n.createElement("ul",{className:(0,l.Z)(s.kM.docs.docSidebarMenu,"menu__list","overflow-y-auto")},n.createElement(j.Z,null,(()=>n.createElement($,null))),n.createElement(u,{items:a,activePath:r,onItemClick:()=>t()}))};function R(e){return n.createElement(s.Cv,{className:(0,l.Z)("overflow-y-auto"),component:P,props:e})}const V=n.memo(M),H=n.memo(R);function U(e){const t=(0,r.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(V,e),l&&n.createElement(H,e))}},82838:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),l=a(67294),s=a(86010),r=a(39960),o=a(32822),c=a(44996),i=a(13919);const m="footerLogoLink_94kH";var d=a(89750);function u(e){let{to:t,href:a,label:s,prependBaseUrlToHref:o,...m}=e;const d=(0,c.Z)(t),u=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(r.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?u:a}:{to:d},m),a&&!(0,i.Z)(a)?l.createElement("span",null,s):s)}const b=e=>{let{sources:t,alt:a}=e;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};const p=function(){const{footer:e}=(0,o.LU)(),{copyright:t,links:a=[],logo:n={}}=e||{},i={light:(0,c.Z)(n.src),dark:(0,c.Z)(n.srcDark||n.src)};return e?l.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},a&&a.length>0&&l.createElement("div",{className:"row footer__links"},a.map(((e,t)=>l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(u,e))))):null)))),(n||t)&&l.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},n.href?l.createElement(r.Z,{href:n.href,className:m},l.createElement(b,{alt:n.alt,sources:i})):l.createElement(b,{alt:n.alt,sources:i})),t?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},12172:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),l=a(67294),s=a(86010),r=a(95999),o=a(51588),c=a(40232),i=a(85350),m=a(32822),d=a(55662),u=a(31839),b=a(93783),p=a(96730),v=a(26475),h=a(55537),f=a(5506),g=a(69065);const E={toggle:"toggle_iQ2x",navbarHideable:"navbarHideable_Daeo",navbarHidden:"navbarHidden_De9J",navbarSidebarToggle:"navbarSidebarToggle_MTpz",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_pz7p"},_="right";function k(){return(0,m.LU)().navbar.items}function Z(){const{colorMode:{disableSwitch:e}}=(0,m.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=(0,i.Z)();return{isDarkTheme:t,toggle:(0,l.useCallback)((e=>e.target.checked?n():a()),[a,n]),disabled:e}}function N(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,u.Z)(t);const o=k(),i=Z(),d=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const n=(0,m.g8)()?.({toggleSidebar:a}),s=(0,m.D9)(n),[r,o]=(0,l.useState)((()=>!1));(0,l.useEffect)((()=>{n&&!s&&o(!0)}),[n,s]);const c=!!n;return(0,l.useEffect)((()=>{c?t||o(!0):o(!1)}),[t,c]),{shown:r,hide:(0,l.useCallback)((()=>{o(!1)}),[]),content:n}}({sidebarShown:t,toggleSidebar:a});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&l.createElement(c.Z,{className:E.navbarSidebarToggle,checked:i.isDarkTheme,onChange:i.toggle}),l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},l.createElement(f.Z,{width:20,height:20,className:E.navbarSidebarCloseSvg}))),l.createElement("div",{className:(0,s.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},o.map(((e,t)=>l.createElement(v.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t})))))),l.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},l.createElement(r.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}const C=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,m.LU)(),a=function(){const e=(0,b.Z)(),t="mobile"===e,[a,n]=(0,l.useState)(!1);(0,m.Rb)((()=>{a&&n(!1)}));const s=(0,l.useCallback)((()=>{n((e=>!e))}),[]);return(0,l.useEffect)((()=>{"desktop"===e&&n(!1)}),[e]),{shouldRender:t,toggle:s,shown:a}}(),r=Z(),i=(0,p.gA)(),{navbarRef:u,isNavbarVisible:f}=(0,d.Z)(e),C=k(),y=C.some((e=>"search"===e.type)),{leftItems:w,rightItems:x}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??_))),rightItems:e.filter((e=>"right"===(e.position??_)))}}(C);return l.createElement("nav",{ref:u,className:(0,s.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[E.navbarHideable]:e,[E.navbarHidden]:e&&!f})},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(C?.length>0||i)&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},l.createElement(g.Z,{width:25,height:25})),l.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),w.map(((e,t)=>l.createElement(v.Z,(0,n.Z)({},e,{key:t}))))),l.createElement("div",{className:"navbar__items navbar__items--right"},x.map(((e,t)=>l.createElement(v.Z,(0,n.Z)({},e,{key:t})))),!r.disabled&&l.createElement(c.Z,{className:E.toggle,checked:r.isDarkTheme,onChange:r.toggle}),!y&&l.createElement(o.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&l.createElement(N,{sidebarShown:a.shown,toggleSidebar:a.toggle}))}},44517:(e,t,a)=>{a.d(t,{O:()=>m,Z:()=>b});var n=a(87462),l=a(67294),s=a(86010),r=a(39960),o=a(44996),c=a(13919),i=a(26475);function m(e){let{activeBasePath:t,activeBaseRegex:a,to:s,href:i,label:m,activeClassName:d="",prependBaseUrlToHref:u,...b}=e;const p=(0,o.Z)(s),v=(0,o.Z)(t),h=(0,o.Z)(i,{forcePrependBaseUrl:!0}),f=m&&i&&!(0,c.Z)(i);return l.createElement(r.Z,(0,n.Z)({className:"inline"},i?{href:u?h:i}:{isNavLink:!0,activeClassName:b.className?.includes(d)?"":d,to:p,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}:null},b),f?l.createElement("span",{className:"inline"},m):m)}function d(e){let{className:t,isDropdownItem:a=!1,...r}=e;const o=l.createElement(m,(0,n.Z)({className:(0,s.Z)(a?"dropdown__link":"navbar__item navbar__link",t)},r));return a?l.createElement("li",null,o):o}function u(e){let{className:t,isDropdownItem:a,...r}=e;return l.createElement("li",{className:"menu__list-item"},l.createElement(m,(0,n.Z)({className:(0,s.Z)("menu__link",t)},r)))}const b=function(e){let{mobile:t=!1,position:a,...s}=e;const r=t?u:d;return l.createElement(r,(0,n.Z)({},s,{activeClassName:s.activeClassName??(0,i.E)(t)}))}},79061:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),s=a(44517),r=a(96730),o=a(86010),c=a(26475),i=a(32822),m=a(18780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:p}=(0,r.Iw)(d),{preferredVersion:v}=(0,i.J)(d),h=(0,r.yW)(d),f=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,v,h].filter(Boolean)),t),g=(0,c.E)(u.mobile);return l.createElement(s.Z,(0,n.Z)({exact:!0},u,{className:(0,o.Z)(u.className,{[g]:p?.sidebar&&p.sidebar===f.sidebar}),activeClassName:g,label:a??f.id,to:f.path}))}},43886:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),s=a(44517),r=a(29553),o=a(96730),c=a(32822),i=a(95999);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...p}=e;const v=(0,o.Iw)(a),h=(0,o.gB)(a),f=(0,o.yW)(a),{preferredVersion:g,savePreferredVersionName:E}=(0,c.J)(a);const _=function(){const e=h.map((e=>{const t=v?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===v?.activeVersion,onClick:()=>{E(e.name)}}}));return[...u,...e,...b]}(),k=v.activeVersion??g??f,Z=t&&_?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):k.label,N=t&&_?void 0:m(k).path;return _.length<=1?l.createElement(s.Z,(0,n.Z)({},p,{mobile:t,label:Z,to:N,isActive:d?()=>!1:void 0})):l.createElement(r.Z,(0,n.Z)({},p,{mobile:t,label:Z,to:N,items:_,isActive:d?()=>!1:void 0}))}},85412:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),s=a(44517),r=a(96730),o=a(32822);const c=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:a,docsPluginId:i,...m}=e;const d=(0,r.zu)(i),{preferredVersion:u}=(0,o.J)(i),b=(0,r.yW)(i),p=d??u??b,v=t??p.label,h=a??c(p).path;return l.createElement(s.Z,(0,n.Z)({},m,{label:v,to:h}))}},29553:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),l=a(67294),s=a(86010),r=a(32822),o=a(44517),c=a(26475);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,r.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function d(e){let{items:t,position:a,className:r,...m}=e;const d=(0,l.useRef)(null),u=(0,l.useRef)(null),[b,p]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),l.createElement("div",{ref:d,className:(0,s.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":b})},l.createElement(o.O,(0,n.Z)({className:(0,s.Z)("navbar__link",r)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),p(!b))}}),m.children??m.label),l.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,a)=>l.createElement(c.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);const t=d.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:a}))))))}function u(e){let{items:t,className:a,position:i,...d}=e;const u=(0,r.be)(),b=m(t,u),{collapsed:p,toggleCollapsed:v,setCollapsed:h}=(0,r.uR)({initialState:()=>!b});return(0,l.useEffect)((()=>{b&&h(!b)}),[u,b]),l.createElement("li",{className:(0,s.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(o.O,(0,n.Z)({role:"button",className:(0,s.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),v()}}),d.children??d.label),l.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},t.map(((e,t)=>l.createElement(c.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const b=function(e){let{mobile:t=!1,...a}=e;const n=t?u:d;return l.createElement(n,a)}},26475:(e,t,a)=>{a.d(t,{Z:()=>f,E:()=>h});var n=a(67294),l=a(44517),s=a(29553),r=a(87462),o=a(23264),c=a(52263),i=a(32822);const m="iconLanguage_zID8";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:l,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:p}}=(0,c.Z)(),v=(0,i.l5)();function h(e){return p[e].label}const f=[...a,...b.map((e=>{const t=`pathname://${v.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:h(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...l],g=t?"Languages":h(u);return n.createElement(s.Z,(0,r.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(o.Z,{className:m}),n.createElement("span",null,g)),items:f}))}var u=a(51588);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const p={default:()=>l.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>s.Z,docsVersion:()=>a(85412).Z,docsVersionDropdown:()=>a(43886).Z,doc:()=>a(79061).Z},v=e=>{const t=p[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const h=e=>e?"menu__link--active":"navbar__link--active";function f(e){let{type:t,...a}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),s=v(l);return n.createElement(s,a)}}}]);