"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(y,p(p({ref:n},l),{},{components:t})):r.createElement(y,p({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>l});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"ConnectionTransport.onmessage"},i="ConnectionTransport.onmessage property",s={unversionedId:"api/puppeteer.connectiontransport.onmessage",id:"version-19.6.2/api/puppeteer.connectiontransport.onmessage",title:"ConnectionTransport.onmessage property",description:"Signature:",source:"@site/versioned_docs/version-19.6.2/api/puppeteer.connectiontransport.onmessage.md",sourceDirName:"api",slug:"/api/puppeteer.connectiontransport.onmessage",permalink:"/api/puppeteer.connectiontransport.onmessage",draft:!1,tags:[],version:"19.6.2",frontMatter:{sidebar_label:"ConnectionTransport.onmessage"},sidebar:"api",previous:{title:"ConnectionTransport.onclose",permalink:"/api/puppeteer.connectiontransport.onclose"},next:{title:"ConnectionTransport.send",permalink:"/api/puppeteer.connectiontransport.send"}},c={},l=[{value:"Signature:",id:"signature",level:4}],u={toc:l};function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"connectiontransportonmessage-property"}),"ConnectionTransport.onmessage property"),(0,r.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface ConnectionTransport {\n  onmessage?: (message: string) => void;\n}\n")))}f.isMDXComponent=!0}}]);