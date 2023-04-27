"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[465],{82838:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(39960),s=a(32822),i=a(44996),c=a(13919);const m="footerLogoLink_94kH";var d=a(89750);function u(e){let{to:t,href:a,label:l,prependBaseUrlToHref:s,...m}=e;const d=(0,i.Z)(t),u=(0,i.Z)(a,{forcePrependBaseUrl:!0});return r.createElement(o.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?u:a}:{to:d},m),a&&!(0,c.Z)(a)?r.createElement("span",null,l):l)}const b=e=>{let{sources:t,alt:a}=e;return r.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};const v=function(){const{footer:e}=(0,s.LU)(),{copyright:t,links:a=[],logo:n={}}=e||{},c={light:(0,i.Z)(n.src),dark:(0,i.Z)(n.srcDark||n.src)};return e?r.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},a&&a.length>0&&r.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(u,e))))):null)))),(n||t)&&r.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},n.href?r.createElement(o.Z,{href:n.href,className:m},r.createElement(b,{alt:n.alt,sources:c})):r.createElement(b,{alt:n.alt,sources:c})),t?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},12172:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(95999),s=a(51588),i=a(40232),c=a(85350),m=a(32822),d=a(55662),u=a(31839),b=a(93783),v=a(96730),f=a(26475),_=a(55537),g=a(5506),h=a(69065);const p={toggle:"toggle_iQ2x",navbarHideable:"navbarHideable_Daeo",navbarHidden:"navbarHidden_De9J",navbarSidebarToggle:"navbarSidebarToggle_MTpz",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_pz7p"},E="right";function Z(){return(0,m.LU)().navbar.items}function N(){const{colorMode:{disableSwitch:e}}=(0,m.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=(0,c.Z)();return{isDarkTheme:t,toggle:(0,r.useCallback)((e=>e.target.checked?n():a()),[a,n]),disabled:e}}function k(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,u.Z)(t);const s=Z(),c=N(),d=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const n=(0,m.g8)()?.({toggleSidebar:a}),l=(0,m.D9)(n),[o,s]=(0,r.useState)((()=>!1));(0,r.useEffect)((()=>{n&&!l&&s(!0)}),[n,l]);const i=!!n;return(0,r.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,r.useCallback)((()=>{s(!1)}),[]),content:n}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(i.Z,{className:p.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},r.createElement(g.Z,{width:20,height:20,className:p.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},s.map(((e,t)=>r.createElement(f.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t})))))),r.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}const w=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,m.LU)(),a=function(){const e=(0,b.Z)(),t="mobile"===e,[a,n]=(0,r.useState)(!1);(0,m.Rb)((()=>{a&&n(!1)}));const l=(0,r.useCallback)((()=>{n((e=>!e))}),[]);return(0,r.useEffect)((()=>{"desktop"===e&&n(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),o=N(),c=(0,v.gA)(),{navbarRef:u,isNavbarVisible:g}=(0,d.Z)(e),w=Z(),y=w.some((e=>"search"===e.type)),{leftItems:C,rightItems:D}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??E))),rightItems:e.filter((e=>"right"===(e.position??E)))}}(w);return r.createElement("nav",{ref:u,className:(0,l.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[p.navbarHideable]:e,[p.navbarHidden]:e&&!g})},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},(w?.length>0||c)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},r.createElement(h.Z,{width:25,height:25})),r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),C.map(((e,t)=>r.createElement(f.Z,(0,n.Z)({},e,{key:t}))))),r.createElement("div",{className:"navbar__items navbar__items--right"},D.map(((e,t)=>r.createElement(f.Z,(0,n.Z)({},e,{key:t})))),!o.disabled&&r.createElement(i.Z,{className:p.toggle,checked:o.isDarkTheme,onChange:o.toggle}),!y&&r.createElement(s.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&r.createElement(k,{sidebarShown:a.shown,toggleSidebar:a.toggle}))}},44517:(e,t,a)=>{a.d(t,{O:()=>m,Z:()=>b});var n=a(87462),r=a(67294),l=a(86010),o=a(39960),s=a(44996),i=a(13919),c=a(26475);function m(e){let{activeBasePath:t,activeBaseRegex:a,to:l,href:c,label:m,activeClassName:d="",prependBaseUrlToHref:u,...b}=e;const v=(0,s.Z)(l),f=(0,s.Z)(t),_=(0,s.Z)(c,{forcePrependBaseUrl:!0}),g=m&&c&&!(0,i.Z)(c);return r.createElement(o.Z,(0,n.Z)({className:"inline"},c?{href:u?_:c}:{isNavLink:!0,activeClassName:b.className?.includes(d)?"":d,to:v,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}:null},b),g?r.createElement("span",{className:"inline"},m):m)}function d(e){let{className:t,isDropdownItem:a=!1,...o}=e;const s=r.createElement(m,(0,n.Z)({className:(0,l.Z)(a?"dropdown__link":"navbar__item navbar__link",t)},o));return a?r.createElement("li",null,s):s}function u(e){let{className:t,isDropdownItem:a,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,n.Z)({className:(0,l.Z)("menu__link",t)},o)))}const b=function(e){let{mobile:t=!1,position:a,...l}=e;const o=t?u:d;return r.createElement(o,(0,n.Z)({},l,{activeClassName:l.activeClassName??(0,c.E)(t)}))}},79061:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(44517),o=a(96730),s=a(86010),i=a(26475),c=a(32822),m=a(18780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:v}=(0,o.Iw)(d),{preferredVersion:f}=(0,c.J)(d),_=(0,o.yW)(d),g=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,f,_].filter(Boolean)),t),h=(0,i.E)(u.mobile);return r.createElement(l.Z,(0,n.Z)({exact:!0},u,{className:(0,s.Z)(u.className,{[h]:v?.sidebar&&v.sidebar===g.sidebar}),activeClassName:h,label:a??g.id,to:g.path}))}},43886:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(44517),o=a(29553),s=a(96730),i=a(32822),c=a(95999);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...v}=e;const f=(0,s.Iw)(a),_=(0,s.gB)(a),g=(0,s.yW)(a),{preferredVersion:h,savePreferredVersionName:p}=(0,i.J)(a);const E=function(){const e=_.map((e=>{const t=f?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{p(e.name)}}}));return[...u,...e,...b]}(),Z=f.activeVersion??h??g,N=t&&E?(0,c.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):Z.label,k=t&&E?void 0:m(Z).path;return E.length<=1?r.createElement(l.Z,(0,n.Z)({},v,{mobile:t,label:N,to:k,isActive:d?()=>!1:void 0})):r.createElement(o.Z,(0,n.Z)({},v,{mobile:t,label:N,to:k,items:E,isActive:d?()=>!1:void 0}))}},85412:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(44517),o=a(96730),s=a(32822);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function c(e){let{label:t,to:a,docsPluginId:c,...m}=e;const d=(0,o.zu)(c),{preferredVersion:u}=(0,s.J)(c),b=(0,o.yW)(c),v=d??u??b,f=t??v.label,_=a??i(v).path;return r.createElement(l.Z,(0,n.Z)({},m,{label:f,to:_}))}},29553:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),r=a(67294),l=a(86010),o=a(32822),s=a(44517),i=a(26475);const c="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function d(e){let{items:t,position:a,className:o,...m}=e;const d=(0,r.useRef)(null),u=(0,r.useRef)(null),[b,v]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),r.createElement("div",{ref:d,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":b})},r.createElement(s.O,(0,n.Z)({className:(0,l.Z)("navbar__link",o)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),v(!b))}}),m.children??m.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,a)=>r.createElement(i.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);const t=d.current.nextElementSibling;t&&t.focus()}},activeClassName:c},e,{key:a}))))))}function u(e){let{items:t,className:a,position:c,...d}=e;const u=(0,o.be)(),b=m(t,u),{collapsed:v,toggleCollapsed:f,setCollapsed:_}=(0,o.uR)({initialState:()=>!b});return(0,r.useEffect)((()=>{b&&_(!b)}),[u,b]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(s.O,(0,n.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),f()}}),d.children??d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},t.map(((e,t)=>r.createElement(i.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const b=function(e){let{mobile:t=!1,...a}=e;const n=t?u:d;return r.createElement(n,a)}},26475:(e,t,a)=>{a.d(t,{Z:()=>g,E:()=>_});var n=a(67294),r=a(44517),l=a(29553),o=a(87462),s=a(23264),i=a(52263),c=a(32822);const m="iconLanguage_zID8";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:r,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:v}}=(0,i.Z)(),f=(0,c.l5)();function _(e){return v[e].label}const g=[...a,...b.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:_(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],h=t?"Languages":_(u);return n.createElement(l.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{className:m}),n.createElement("span",null,h)),items:g}))}var u=a(51588);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const v={default:()=>r.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>l.Z,docsVersion:()=>a(85412).Z,docsVersionDropdown:()=>a(43886).Z,doc:()=>a(79061).Z},f=e=>{const t=v[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const _=e=>e?"menu__link--active":"navbar__link--active";function g(e){let{type:t,...a}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),l=f(r);return n.createElement(l,a)}}}]);