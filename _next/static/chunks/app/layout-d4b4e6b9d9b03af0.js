(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6853:function(e,t,n){Promise.resolve().then(n.t.bind(n,6356,23)),Promise.resolve().then(n.t.bind(n,3419,23)),Promise.resolve().then(n.t.bind(n,8967,23)),Promise.resolve().then(n.bind(n,4356)),Promise.resolve().then(n.bind(n,7708))},6167:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(o(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m},default:function(){return h}});let r=n(6927),l=n(5909),o=r._(n(8431)),a=l._(n(6006)),i=n(5415),u=n(6167),s=n(1722),c=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:s}=e,p=n||t;if(p&&f.has(p))return;if(c.has(t)){f.add(p),c.get(t).then(r,s);return}let y=()=>{l&&l(),f.add(p)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",y()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(m.src=t,c.set(t,_)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:c,...d}=e,{updateScripts:y,scripts:m,getIsSsr:_,appDir:h,nonce:g}=(0,a.useContext)(i.HeadManagerContext),b=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;b.current||(l&&e&&f.has(e)&&l(),b.current=!0)},[l,t,n]);let v=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!v.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))})),v.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...d}]),y(m)):_&&_()?f.add(t||n):_&&!_()&&p(e)),h){if("beforeInteractive"===u)return n?(o.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"}),a.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(d.dangerouslySetInnerHTML&&(d.children=d.dangerouslySetInnerHTML.__html,delete d.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...d}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let h=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7708:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9268),l=n(6341),o=n.n(l);function a(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{src:"https://www.googletagmanager.com/gtag/js?id=G-8QSLBCCJYZ",strategy:"afterInteractive"}),(0,r.jsx)(o(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          {/*@ts-ignore*/}\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n  \n          gtag('config', 'G-8QSLBCCJYZ');\n        "})]})}},4356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(9268),l=n(6008);function o(){let e=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"flex mb-12 lg:mb-36",children:[(0,r.jsx)("div",{className:"flex justify-center items-center mx-6 h-12",children:(0,r.jsx)("div",{className:"lg:text-3xl text-xl text-white cursor-pointer",onClick:()=>{e.push("/list/1")},children:"preinpost log"})}),(0,r.jsx)("div",{className:"flex ml-auto",children:(0,r.jsx)("div",{className:"text-xl flex justify-end items-center mx-6 h-12 w-28",children:"about"})})]})}},3419:function(){},6356:function(){},8967:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},9268:function(e,t,n){"use strict";e.exports=n(3177)},6008:function(e,t,n){e.exports=n(3027)},6341:function(e,t,n){e.exports=n(1273)}},function(e){e.O(0,[667,488,744],function(){return e(e.s=6853)}),_N_E=e.O()}]);