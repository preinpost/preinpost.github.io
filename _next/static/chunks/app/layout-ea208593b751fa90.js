(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1549:function(e,t,n){Promise.resolve().then(n.t.bind(n,6356,23)),Promise.resolve().then(n.bind(n,988)),Promise.resolve().then(n.t.bind(n,3419,23)),Promise.resolve().then(n.t.bind(n,8967,23)),Promise.resolve().then(n.bind(n,4356)),Promise.resolve().then(n.bind(n,7708))},6167:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!n[e]:l.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:o}=n;return o?l.innerHTML=o.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(a(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y},default:function(){return h}});let r=n(6927),l=n(5909),a=r._(n(8431)),o=l._(n(6006)),i=n(5415),s=n(6167),u=n(1722),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:o="",strategy:i="afterInteractive",onError:u}=e,p=n||t;if(p&&d.has(p))return;if(c.has(t)){d.add(p),c.get(t).then(r,u);return}let m=()=>{l&&l(),d.add(p)},y=document.createElement("script"),g=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(y.innerHTML=a.__html||"",m()):o?(y.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",m()):t&&(y.src=t,c.set(t,g)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function y(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:s="afterInteractive",onError:c,...f}=e,{updateScripts:m,scripts:y,getIsSsr:g,appDir:h,nonce:b}=(0,o.useContext)(i.HeadManagerContext),_=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;_.current||(l&&e&&d.has(e)&&l(),_.current=!0)},[l,t,n]);let v=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!v.current&&("afterInteractive"===s?p(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),v.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...f}]),m(y)):g&&g()?d.add(t||n):g&&!g()&&p(e)),h){if("beforeInteractive"===s)return n?(a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===s&&n&&a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let h=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7708:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(9268),l=n(6341),a=n.n(l);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{src:"https://www.googletagmanager.com/gtag/js?id=G-8QSLBCCJYZ",strategy:"afterInteractive"}),(0,r.jsx)(a(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          {/*@ts-ignore*/}\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n  \n          gtag('config', 'G-8QSLBCCJYZ');\n        "})]})}},4356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9268),l=n(6008);function a(){let e=(0,l.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between space-x-20 my-6 mb-24",children:[(0,r.jsx)("div",{className:"text-2xl text-grayishBlack font-sans font-bold dark:text-white pl-3 cursor-pointer md:text-3xl",onClick:()=>{e.push("/list/1")},children:"preinpost.log"}),(0,r.jsx)("div",{className:"flex space-x-6 pr-6"}),(0,r.jsxs)("button",{id:"menu-btn",className:"z-30 mt-2 block md:hidden focus:outline-none hamburger",onClick:o,children:[(0,r.jsx)("span",{className:"hamburger-top bg-grayishBlack dark:bg-softWhite"}),(0,r.jsx)("span",{className:"hamburger-middle bg-grayishBlack dark:bg-softWhite"}),(0,r.jsx)("span",{className:"hamburger-bottom bg-grayishBlack dark:bg-softWhite"})]})]}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&family=Barlow+Semi+Condensed:wght@400;500;600&family=Open+Sans:wght@400;700&family=Poppins:wght@400;500;700&family=Raleway:ital,wght@0,400;0,700;1,400&family=Rubik:wght@400;600;700&family=Ubuntu+Mono:wght@700&display=swap&Noto+Sans+KR&display=swap",rel:"stylesheet"})]})}function o(){let e=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");e.classList.toggle("open"),t.classList.toggle("flex"),t.classList.toggle("hidden")}},988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9268),l=n(6008);function a(){let e=(0,l.useRouter)();return(0,r.jsx)("div",{id:"mobile-menu",className:"fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest font-bold text-grayishBlack uppercase divide-y bg-neutral-400 opacity-95",children:(0,r.jsx)("div",{className:"w-full py-3 text-center cursor-pointer",onClick:()=>{(function(){let e=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");e.classList.remove("open"),t.classList.add("hidden"),t.classList.remove("flex")})(),e.push("/about")},children:"About"})})}},3419:function(){},6356:function(){},8967:function(e){e.exports={style:{fontFamily:"'__Inter_d9825c', '__Inter_Fallback_d9825c'",fontStyle:"normal"},className:"__className_d9825c"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:u,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(3177)},6008:function(e,t,n){e.exports=n(3027)},6341:function(e,t,n){e.exports=n(1273)}},function(e){e.O(0,[315,667,488,744],function(){return e(e.s=1549)}),_N_E=e.O()}]);