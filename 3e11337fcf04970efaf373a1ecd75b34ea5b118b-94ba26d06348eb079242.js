(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[395],{4508:function(e,t,a){"use strict";a.d(t,{A:function(){return C}});var n=a(7294),r=a(1082),l=a(3587),c=a.n(l),i=[{name:"light",color:"black"},{name:"dark",color:"#D9A621"}],o=i[0],m=(0,n.createContext)(o),s=function(e){var t=e.children,a=e.defaultTheme,r=(0,n.useState)(o),l=r[0],c=r[1];(0,n.useEffect)((function(){var e;c(null!==(e=null!=a?a:JSON.parse(localStorage&&localStorage.getItem("theme")))&&void 0!==e?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)")?i[1]:o)}),[a]);return n.createElement(m.Provider,{value:{theme:l,themes:i,setTheme:function(e){c(e),localStorage.setItem("theme",JSON.stringify(e))}}},t)},u=function(){var e=function(){var e=(0,n.useContext)(m),t=e.theme,a=e.themes,r=e.setTheme;return(0,n.useEffect)((function(){document.documentElement.setAttribute("data-theme",t.name)}),[t]),{theme:t,themes:a,setTheme:r,toggleTheme:function(){return r("light"===t.name?a[1]:a[0])}}}(),t=e.theme,a=e.toggleTheme;return n.createElement("div",{className:"theme-switch-wrapper"},n.createElement("button",{className:"theme-switch-button",onClick:a},n.createElement("div",{className:"theme-switch-icon",style:{backgroundColor:t.color,cursor:"pointer"}})))},d=function(e){var t=e.current,a=e.links;return n.createElement("div",{className:"header-mobile-burger-wrapper"},n.createElement("input",{className:"header-mobile-burger-toggle",type:"checkbox",labe:"burger-menu-toggle"}),n.createElement("div",{className:"header-mobile-burger-logo"},n.createElement(r.Link,{to:"/"},n.createElement(c(),{className:"header-mobile-burger-logo-image"}))),n.createElement("span",{className:"header-mobile-burger-icon"}),n.createElement("span",{style:{marginTop:12},className:"header-mobile-burger-icon"}),n.createElement("span",{style:{marginTop:24},className:"header-mobile-burger-icon"}),n.createElement("div",{className:"header-mobile-burger-nav"},n.createElement("div",{className:"header-mobile-burger-item"},a.map((function(e,a){var l,c;return n.createElement(r.Link,{key:a,className:(null==t?void 0:t.toLowerCase())===(null==e||null===(l=e.title)||void 0===l?void 0:l.toLowerCase())?"header-mobile-item-active":"header-mobile-item-inactive",target:null!=e&&e.asNewTab?"_blank":"_self",to:null!==(c=null==e?void 0:e.link)&&void 0!==c?c:"/"+(null==e?void 0:e.title.toLowerCase())+"/"},null==e?void 0:e.title)})),n.createElement("div",{className:"header-mobile-item-inactive"},n.createElement(u,null)),n.createElement("hr",{className:"header-mobile-burger-divider"}),n.createElement("p",{className:"header-mobile-burger-subline"},"team@gedankenessen.de"))))},E=function(e){var t=e.current,a=e.links;return n.createElement("div",{className:"header-desktop-wrapper"},n.createElement("div",{className:"header-desktop-logo"},n.createElement(r.Link,{to:"/"},n.createElement(c(),{className:"header-desktop-logo-image"}))),n.createElement("div",{className:"header-desktop-links"},a.map((function(e,a){var l,c;return n.createElement(r.Link,{key:a,className:(null==t?void 0:t.toLowerCase())===(null==e||null===(l=e.title)||void 0===l?void 0:l.toLowerCase())?"header-desktop-item-active":"header-desktop-item-inactive",target:null!=e&&e.asNewTab?"_blank":"_self",to:null!==(c=null==e?void 0:e.link)&&void 0!==c?c:"/"+(null==e?void 0:e.title.toLowerCase())+"/"},null==e?void 0:e.title)})),n.createElement("div",{className:"header-destop-item-inactive"},n.createElement(u,null))))},h=[{title:"About"},{title:"Pricing"},{title:"FAQ"},{title:"Login"}],p=function(e){var t=e.current;return n.createElement("div",{className:"header-container"},n.createElement("div",{className:"header-mobile"},n.createElement(d,{current:t,links:h})),n.createElement("div",{className:"header-desktop"},n.createElement(E,{current:t,links:h})))},f=a(6412),v=a.n(f),g=function(){return n.createElement("footer",{className:"footer-container"},n.createElement(r.Link,{to:"/"},n.createElement(v(),{className:"footer-logo"})),n.createElement("div",{className:"footer-access-container"},n.createElement(r.Link,{to:"/login",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Login")),n.createElement(r.Link,{to:"/register",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Register"))),n.createElement("div",{className:"footer-interest-container"},n.createElement(r.Link,{to:"/pricing",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Pricing")),n.createElement(r.Link,{to:"/features",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Features")),n.createElement(r.Link,{to:"/faq",className:"footer-link"},n.createElement("p",{className:"footer-text"},"FAQ"))),n.createElement("div",{className:"footer-service-container"},n.createElement(r.Link,{to:"/blog",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Blog")),n.createElement(r.Link,{to:"/privacy",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Privacy")),n.createElement(r.Link,{to:"/terms",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Terms")),n.createElement(r.Link,{to:"/contact",className:"footer-link"},n.createElement("p",{className:"footer-text"},"Contact"))))},C=function(e){var t=e.current,a=e.children;return n.createElement(n.Fragment,null,n.createElement(s,null,n.createElement("div",{className:"layout-wrapper"},n.createElement(p,{current:t}),n.createElement("div",{className:"layout-content"},a),n.createElement(g,null))))}},1198:function(e,t,a){"use strict";a.d(t,{p:function(){return c}});var n=a(7294),r=a(1082),l=["children"],c=function(e){var t,a,c,i,o,m,s,u,d,E=e.children,h=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l),p=(0,r.useStaticQuery)("4165905740").site,f=null!==(t=h.title)&&void 0!==t?t:null===(a=p.meta)||void 0===a?void 0:a.title,v=null!==(c=h.description)&&void 0!==c?c:p.meta.description,g=null!==(i=h.card)&&void 0!==i?i:null===(o=p.meta)||void 0===o?void 0:o.card,C=null!==(m=h.author)&&void 0!==m?m:null===(s=p.meta)||void 0===s?void 0:s.image,N=null!==(u=h.url)&&void 0!==u?u:null===(d=p.meta)||void 0===d?void 0:d.url;return n.createElement(n.Fragment,null,n.createElement("title",null,f),n.createElement("meta",{name:"robots",content:"noindex"}),n.createElement("meta",{name:"description",content:v}),n.createElement("meta",{name:"image",content:""+N+g}),n.createElement("meta",{property:"og:title",content:f}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:description",content:v}),n.createElement("meta",{property:"og:image",content:""+N+g}),n.createElement("meta",{property:"og:url",content:N}),n.createElement("meta",{property:"og:site_name",content:f}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:C}),n.createElement("meta",{name:"twitter:title",content:f}),n.createElement("meta",{name:"twitter:description",content:v}),E)}},866:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return g},default:function(){return C}});var n=a(7294),r=a(4508),l=a(1198),c=function(e){var t=e.title,a=e.style,r=e.onClick,l=void 0===r?function(){}:r;return n.createElement("button",{className:"button",style:a,onClick:l},t)},i=function(){return n.createElement("div",{className:"video-wrapper"})},o=function(e){var t=e.title,a=e.description;return n.createElement("div",{className:"feature-wrapper"},t,a)},m=[{title:n.createElement("h2",null,"Build ",n.createElement("span",{className:"highlight"},"faster")),description:n.createElement("p",null,"Quickly iterate over your types by sending a POST Request to our server. Operate over the latest version of your mock data via simple REST methods. Validate ideas in hours - instead of days.")},{title:n.createElement("h2",null,"Don't mock data, ",n.createElement("span",{className:"highlight"},"prototype")," it"),description:n.createElement("p",null,"Don’t implement twice by instead getting your data from a backend right from the start.")},{title:n.createElement("h2",null,n.createElement("span",{className:"highlight"},"Share")," your progress easily"),description:n.createElement("p",null,"No need for complicated deploy strategies. Everything is online and ready for you and your team.")},{title:n.createElement("h2",null,"And ",n.createElement("span",{className:"highlight"},"more")," coming soon"),description:n.createElement("ul",{className:"feature-list"},n.createElement("li",{className:"feature-list-item"},"Generate OpenId schemas from your prototypes"),n.createElement("li",{className:"feature-list-item"},"Generate mock-data automatically"))}],s=function(){return n.createElement("div",{className:"features-wrapper"},m.map((function(e,t){return n.createElement(o,Object.assign({key:t},e))})))},u=function(e){var t=e.text,a=e.code;return n.createElement("div",{className:"demo-wrapper"},n.createElement("div",{className:"demo-text"},t),n.createElement("div",{className:"demo-code"},a))},d=[{text:n.createElement("p",null,"Let's create an ",n.createElement("span",{className:"highlight"},"user")," endpoint by sending the following POST request:"),code:n.createElement("pre",{className:"demo"},'\nPOST https://crud.io/24259317/users\n{\n  "name": "tom",\n  "theme": "dark",\n  "birthday": "1996-01-01T00:00:00.000Z"\n}')},{text:n.createElement("p",null,"CRUD will create the following ",n.createElement("span",{className:"highlight"},"endpoint")," for us, that we can now access:"),code:n.createElement("pre",{className:"demo"},"\n/users/{id}\nGET\nGET {id}\nPOST {id}\nPUT {id}\nDELETE {id}")},{text:n.createElement("p",null,"If we change our data model CRUD ",n.createElement("span",{className:"highlight"},"automatically")," cleans our database:"),code:n.createElement("div",null,n.createElement("pre",{className:"demo"},'\nPOST https://crud.io/24259317/users\n{\n  "name": "jenna",\n  "theme": "light",\n  "birthday": "1996-01-01T00:00:00.000Z",\n  "lastLogin": "2022-03-15T20:01:22.614Z",\n}\n        '),n.createElement("pre",{className:"demo"},'\nGET https://crud.io/24259317/users\n[{\n  "name": "jenna",\n  "theme": "light",\n  "birthday": "1996-01-01T00:00:00.000Z",\n  "lastLogin": "2022-03-15T20:01:22.614Z",\n  "id": "42822af8-0d95-42de-aa7f”,\n},]'))}],E=function(){return n.createElement("div",{className:"demos-wrapper"},n.createElement("h2",{className:"demos-headline"},"Demo"),n.createElement("div",{className:"demos-content"},d.map((function(e,t){return n.createElement(u,Object.assign({key:t},e))}))))},h=a(1082),p=function(e){var t=e.text,a=e.link;return n.createElement(h.Link,{to:a,style:{textDecoration:"none"}},n.createElement("div",{className:"question-wrapper"},n.createElement("p",{className:"question-text"},t),n.createElement("hr",{className:"question-line"})))},f=[{text:"Learn more about pricing",link:"/pricing"},{text:"Frequently asked questions",link:"/questions"},{text:"On how we treat your data",link:"/privacy"},{text:"Check out our blog",link:"/blog"}],v=function(){return n.createElement("div",{className:"questions-wrapper"},f.map((function(e,t){return n.createElement(p,Object.assign({key:t},e))})))},g=function(){return n.createElement(l.p,null)},C=function(){return n.createElement(r.A,{current:"About"},n.createElement("div",{className:"landing-container"},n.createElement("div",{className:"headline-container"},n.createElement("h1",null,"Prototype your ",n.createElement("span",{className:"highlight"},"backend")," with your ",n.createElement("span",{className:"highlight"},"frontend"),".")),n.createElement("div",{className:"video-container"},n.createElement(i,null)),n.createElement("div",{className:"features-container"},n.createElement(s,null)),n.createElement("div",{className:"cta-container"},n.createElement(c,{title:"Try CRUD for free"})),n.createElement("div",{className:"demos-container"},n.createElement(E,null)),n.createElement("div",{className:"cta-container"},n.createElement(c,{title:"See CRUD in action"})),n.createElement("div",{className:"questions-container"},n.createElement(v,null))))}},6412:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H84V84H0V0ZM21 6.99997H63.2V21H77.2V35V35.2V49.2H63.2V63.2H21V49.2H7.00003L6.99998 35.2V21H21V6.99997ZM49.2 49H63V35.2H49.2V49ZM21.2 49H35V35.2H21.2V49ZM35.2 35V21.2H49V35H35.2Z",fill:"currentColor"}))}r.defaultProps={width:"84",height:"84",viewBox:"0 0 84 84",fill:"none"},e.exports=r,r.default=r},3587:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.7891 0H14.9533V14H0.742264V28.2H0.742325V42.2001H14.9533V56.2H57.7891V42.2001H72V28.2V28.0001V14H57.7891V0ZM57.586 42H43.5781V28.2H57.586V42ZM29.1642 42H15.1563V28.2H29.1642V42ZM29.3672 14.2V28.0001H43.3751V14.2H29.3672Z",fill:"currentColor",key:0}),n.createElement("rect",{width:"52",height:"29",transform:"translate(65 49)",fill:"#DA2626",key:1}),n.createElement("path",{d:"M76.5771 70H75.1094V57.1152H76.6914V61.7119C77.3594 60.874 78.2119 60.4551 79.249 60.4551C79.8232 60.4551 80.3652 60.5723 80.875 60.8066C81.3906 61.0352 81.8125 61.3604 82.1406 61.7822C82.4746 62.1982 82.7354 62.7021 82.9229 63.2939C83.1104 63.8857 83.2041 64.5186 83.2041 65.1924C83.2041 66.792 82.8086 68.0283 82.0176 68.9014C81.2266 69.7744 80.2773 70.2109 79.1699 70.2109C78.0684 70.2109 77.2041 69.751 76.5771 68.8311V70ZM76.5596 65.2627C76.5596 66.3818 76.7119 67.1904 77.0166 67.6885C77.5146 68.5029 78.1885 68.9102 79.0381 68.9102C79.7295 68.9102 80.3271 68.6113 80.8311 68.0137C81.335 67.4102 81.5869 66.5137 81.5869 65.3242C81.5869 64.1055 81.3438 63.2061 80.8574 62.626C80.377 62.0459 79.7939 61.7559 79.1084 61.7559C78.417 61.7559 77.8193 62.0576 77.3154 62.6611C76.8115 63.2588 76.5596 64.126 76.5596 65.2627ZM91.5273 66.9941L93.1621 67.1963C92.9043 68.1514 92.4268 68.8926 91.7295 69.4199C91.0322 69.9473 90.1416 70.2109 89.0576 70.2109C87.6924 70.2109 86.6084 69.792 85.8057 68.9541C85.0088 68.1104 84.6104 66.9297 84.6104 65.4121C84.6104 63.8418 85.0146 62.623 85.8232 61.7559C86.6318 60.8887 87.6807 60.4551 88.9697 60.4551C90.2178 60.4551 91.2373 60.8799 92.0283 61.7295C92.8193 62.5791 93.2148 63.7744 93.2148 65.3154C93.2148 65.4092 93.2119 65.5498 93.2061 65.7373H86.2451C86.3037 66.7627 86.5938 67.5479 87.1152 68.0928C87.6367 68.6377 88.2871 68.9102 89.0664 68.9102C89.6465 68.9102 90.1416 68.7578 90.5518 68.4531C90.9619 68.1484 91.2871 67.6621 91.5273 66.9941ZM86.333 64.4365H91.5449C91.4746 63.6514 91.2754 63.0625 90.9473 62.6699C90.4434 62.0605 89.79 61.7559 88.9873 61.7559C88.2607 61.7559 87.6484 61.999 87.1504 62.4854C86.6582 62.9717 86.3857 63.6221 86.333 64.4365ZM98.6113 68.585L98.8398 69.9824C98.3945 70.0762 97.9961 70.123 97.6445 70.123C97.0703 70.123 96.625 70.0322 96.3086 69.8506C95.9922 69.6689 95.7695 69.4316 95.6406 69.1387C95.5117 68.8398 95.4473 68.2158 95.4473 67.2666V61.8965H94.2871V60.666H95.4473V58.3545L97.0205 57.4053V60.666H98.6113V61.8965H97.0205V67.3545C97.0205 67.8057 97.0469 68.0957 97.0996 68.2246C97.1582 68.3535 97.249 68.4561 97.3721 68.5322C97.501 68.6084 97.6826 68.6465 97.917 68.6465C98.0928 68.6465 98.3242 68.626 98.6113 68.585ZM106.258 68.8486C105.672 69.3467 105.106 69.6982 104.562 69.9033C104.022 70.1084 103.442 70.2109 102.821 70.2109C101.796 70.2109 101.008 69.9619 100.457 69.4639C99.9062 68.96 99.6309 68.3184 99.6309 67.5391C99.6309 67.082 99.7334 66.666 99.9385 66.291C100.149 65.9102 100.422 65.6055 100.756 65.377C101.096 65.1484 101.477 64.9756 101.898 64.8584C102.209 64.7764 102.678 64.6973 103.305 64.6211C104.582 64.4688 105.522 64.2871 106.126 64.0762C106.132 63.8594 106.135 63.7217 106.135 63.6631C106.135 63.0186 105.985 62.5645 105.687 62.3008C105.282 61.9434 104.682 61.7646 103.885 61.7646C103.141 61.7646 102.59 61.8965 102.232 62.1602C101.881 62.418 101.62 62.8779 101.45 63.54L99.9033 63.3291C100.044 62.667 100.275 62.1338 100.598 61.7295C100.92 61.3193 101.386 61.0059 101.995 60.7891C102.604 60.5664 103.311 60.4551 104.113 60.4551C104.91 60.4551 105.558 60.5488 106.056 60.7363C106.554 60.9238 106.92 61.1611 107.154 61.4482C107.389 61.7295 107.553 62.0869 107.646 62.5205C107.699 62.79 107.726 63.2764 107.726 63.9795V66.0889C107.726 67.5596 107.758 68.4912 107.822 68.8838C107.893 69.2705 108.027 69.6426 108.227 70H106.574C106.41 69.6719 106.305 69.2881 106.258 68.8486ZM106.126 65.3154C105.552 65.5498 104.69 65.749 103.542 65.9131C102.892 66.0068 102.432 66.1123 102.162 66.2295C101.893 66.3467 101.685 66.5195 101.538 66.748C101.392 66.9707 101.318 67.2197 101.318 67.4951C101.318 67.917 101.477 68.2686 101.793 68.5498C102.115 68.8311 102.584 68.9717 103.199 68.9717C103.809 68.9717 104.351 68.8398 104.825 68.5762C105.3 68.3066 105.648 67.9404 105.871 67.4775C106.041 67.1201 106.126 66.5928 106.126 65.8955V65.3154Z",fill:"black",key:2})])}r.defaultProps={width:"117",height:"84",viewBox:"0 0 117 84",fill:"none"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=3e11337fcf04970efaf373a1ecd75b34ea5b118b-94ba26d06348eb079242.js.map