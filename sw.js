if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>s(e,t),c={module:{uri:t},exports:o,require:d};i[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--nxRGWbj.css",revision:null},{url:"assets/index-quIYjrax.js",revision:null},{url:"index.html",revision:"88a0227431e67fd94b3552373d450a0c"},{url:"registerSW.js",revision:"a753eee22bd1fd254c8eed69a7581b7d"},{url:"vite.png",revision:"176e07a5cd42bc0765062d16eea24c48"},{url:"manifest.webmanifest",revision:"784decc4d3c93a8a0f7ac056389547cb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
