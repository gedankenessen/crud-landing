(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[977],{4508:function(e,t,n){"use strict";n.d(t,{A:function(){return N}});var a=n(7294),r=n(1082),l=n(3587),o=n.n(l),c=[{name:"light",color:"black"},{name:"dark",color:"#D9A621"}],i=c[0],m=(0,a.createContext)(i),s=function(e){var t,n=e.children,r=e.defaultTheme,l=(0,a.useState)(null!==(t=null!=r?r:JSON.parse(localStorage.getItem("theme")))&&void 0!==t?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)")?c[1]:i),o=l[0],s=l[1];return a.createElement(m.Provider,{value:{theme:o,themes:c,setTheme:function(e){s(e),localStorage.setItem("theme",JSON.stringify(e))}}},n)},u=function(){var e=function(){var e=(0,a.useContext)(m),t=e.theme,n=e.themes,r=e.setTheme;return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",t.name)}),[t]),{theme:t,themes:n,setTheme:r,toggleTheme:function(){return r("light"===t.name?n[1]:n[0])}}}(),t=e.theme,n=e.toggleTheme;return a.createElement("div",{className:"theme-switch-wrapper"},a.createElement("button",{className:"theme-switch-button",onClick:n},a.createElement("div",{className:"theme-switch-icon",style:{backgroundColor:t.color}})))},d=function(e){var t=e.current,n=e.links;return a.createElement("div",{className:"header-mobile-burger-wrapper"},a.createElement("input",{className:"header-mobile-burger-toggle",type:"checkbox",labe:"burger-menu-toggle"}),a.createElement("div",{className:"header-mobile-burger-logo"},a.createElement(r.Link,{to:"/"},a.createElement(o(),{className:"header-mobile-burger-logo-image"}))),a.createElement("span",{className:"header-mobile-burger-icon"}),a.createElement("span",{style:{marginTop:12},className:"header-mobile-burger-icon"}),a.createElement("span",{style:{marginTop:24},className:"header-mobile-burger-icon"}),a.createElement("div",{className:"header-mobile-burger-nav"},a.createElement("div",{className:"header-mobile-burger-item"},n.map((function(e,n){var l,o;return a.createElement(r.Link,{key:n,className:(null==t?void 0:t.toLowerCase())===(null==e||null===(l=e.title)||void 0===l?void 0:l.toLowerCase())?"header-mobile-item-active":"header-mobile-item-inactive",target:null!=e&&e.asNewTab?"_blank":"_self",to:null!==(o=null==e?void 0:e.link)&&void 0!==o?o:"/"+(null==e?void 0:e.title.toLowerCase())+"/"},null==e?void 0:e.title)})),a.createElement("div",{className:"header-mobile-item-inactive"},a.createElement(u,null)),a.createElement("hr",{className:"header-mobile-burger-divider"}),a.createElement("p",{className:"header-mobile-burger-subline"},"team@gedankenessen.de"))))},E=function(e){var t=e.current,n=e.links;return a.createElement("div",{className:"header-desktop-wrapper"},a.createElement("div",{className:"header-desktop-logo"},a.createElement(r.Link,{to:"/"},a.createElement(o(),{className:"header-desktop-logo-image"}))),a.createElement("div",{className:"header-desktop-links"},n.map((function(e,n){var l,o;return a.createElement(r.Link,{key:n,className:(null==t?void 0:t.toLowerCase())===(null==e||null===(l=e.title)||void 0===l?void 0:l.toLowerCase())?"header-desktop-item-active":"header-desktop-item-inactive",target:null!=e&&e.asNewTab?"_blank":"_self",to:null!==(o=null==e?void 0:e.link)&&void 0!==o?o:"/"+(null==e?void 0:e.title.toLowerCase())+"/"},null==e?void 0:e.title)})),a.createElement("div",{className:"header-destop-item-inactive"},a.createElement(u,null))))},v=[{title:"About"},{title:"Pricing"},{title:"FAQ"},{title:"Login"}],f=function(e){var t=e.current;return a.createElement("div",{className:"header-container"},a.createElement("div",{className:"header-mobile"},a.createElement(d,{current:t,links:v})),a.createElement("div",{className:"header-desktop"},a.createElement(E,{current:t,links:v})))},h=n(6412),p=n.n(h),g=function(){return a.createElement("footer",{className:"footer-container"},a.createElement(r.Link,{to:"/"},a.createElement(p(),{className:"footer-logo"})),a.createElement("div",{className:"footer-access-container"},a.createElement(r.Link,{to:"/login",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Login")),a.createElement(r.Link,{to:"/register",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Register"))),a.createElement("div",{className:"footer-interest-container"},a.createElement(r.Link,{to:"/pricing",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Pricing")),a.createElement(r.Link,{to:"/features",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Features")),a.createElement(r.Link,{to:"/faq",className:"footer-link"},a.createElement("p",{className:"footer-text"},"FAQ"))),a.createElement("div",{className:"footer-service-container"},a.createElement(r.Link,{to:"/blog",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Blog")),a.createElement(r.Link,{to:"/privacy",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Privacy")),a.createElement(r.Link,{to:"/terms",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Terms")),a.createElement(r.Link,{to:"/contact",className:"footer-link"},a.createElement("p",{className:"footer-text"},"Contact"))))},N=function(e){var t=e.current,n=e.children;return a.createElement(a.Fragment,null,a.createElement(s,null,a.createElement("div",{className:"layout-wrapper"},a.createElement(f,{current:t}),a.createElement("div",{className:"layout-content"},n),a.createElement(g,null))))}},1198:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var a=n(7294),r=n(1082),l=["children"],o=function(e){var t,n,o,c,i,m,s,u,d,E=e.children,v=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l),f=(0,r.useStaticQuery)("4165905740").site,h=null!==(t=v.title)&&void 0!==t?t:null===(n=f.meta)||void 0===n?void 0:n.title,p=null!==(o=v.description)&&void 0!==o?o:f.meta.description,g=null!==(c=v.card)&&void 0!==c?c:null===(i=f.meta)||void 0===i?void 0:i.card,N=null!==(m=v.author)&&void 0!==m?m:null===(s=f.meta)||void 0===s?void 0:s.image,k=null!==(u=v.url)&&void 0!==u?u:null===(d=f.meta)||void 0===d?void 0:d.url;return a.createElement(a.Fragment,null,a.createElement("title",null,h),a.createElement("meta",{name:"robots",content:"noindex"}),a.createElement("meta",{name:"description",content:p}),a.createElement("meta",{name:"image",content:""+k+g}),a.createElement("meta",{property:"og:title",content:h}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:p}),a.createElement("meta",{property:"og:image",content:""+k+g}),a.createElement("meta",{property:"og:url",content:k}),a.createElement("meta",{property:"og:site_name",content:h}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:N}),a.createElement("meta",{name:"twitter:title",content:h}),a.createElement("meta",{name:"twitter:description",content:p}),E)}},3336:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),r=n(4508),l=n(1198),o=function(){return a.createElement(l.p,null)};t.default=function(){return a.createElement(r.A,null,a.createElement("h1",null,"Pricing"))}},6412:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H84V84H0V0ZM21 6.99997H63.2V21H77.2V35V35.2V49.2H63.2V63.2H21V49.2H7.00003L6.99998 35.2V21H21V6.99997ZM49.2 49H63V35.2H49.2V49ZM21.2 49H35V35.2H21.2V49ZM35.2 35V21.2H49V35H35.2Z",fill:"currentColor"}))}r.defaultProps={width:"84",height:"84",viewBox:"0 0 84 84",fill:"none"},e.exports=r,r.default=r},3587:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.2 -3.05176e-05H14V14H-5.34058e-05V28.2L-3.33786e-06 42.2H14V56.2H56.2V42.2H70.2V28.2V28V14H56.2V-3.05176e-05ZM55.9999 42H42.2V28.2H55.9999V42ZM28 42H14.2V28.2H28V42ZM28.1999 14.2V28H41.9999V14.2H28.1999Z",fill:"currentColor"}))}r.defaultProps={width:"71",height:"57",viewBox:"0 0 71 57",fill:"none"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-pricing-jsx-506ee6000e12495ca765.js.map