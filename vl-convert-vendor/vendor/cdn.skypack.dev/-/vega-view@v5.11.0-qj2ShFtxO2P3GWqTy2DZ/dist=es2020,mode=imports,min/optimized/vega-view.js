import{extend as L,inherits as ae,hasOwnProperty as x,error as h,stringValue as oe,isObject as m,isString as E,truthy as ue,isArray as g,isDate as U,toSet as le,array as de,debounce as ce,constant as W}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";import{Dataflow as _,transforms as V,asyncCallback as he,changeset as A,isChangeSet as fe,EventStream as ge}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{RenderType as f,Scenegraph as pe,CanvasHandler as I,renderModule as R,point as me}from"/-/vega-scenegraph@v4.10.0-2GCI9CL2cGgIKRDV0eDe/dist=es2020,mode=imports,min/optimized/vega-scenegraph.js";import{tickStep as _e}from"/-/d3-array@v3.1.1-Ibshj34oOmCw8da1RLSW/dist=es2020,mode=imports,min/optimized/d3-array.js";import{functionContext as ze}from"/-/vega-functions@v5.13.0-qkDakSuUeiaaLfBXkzwi/dist=es2020,mode=imports,min/optimized/vega-functions.js";import{context as ve}from"/-/vega-runtime@v6.1.3-ovAqizqBEAgC6bif8m8H/dist=es2020,mode=imports,min/optimized/vega-runtime.js";import{interval as be}from"/-/d3-timer@v3.0.1-O0QpYiI2jhOLEJodLnN1/dist=es2020,mode=imports,min/optimized/d3-timer.js";import{locale as ke}from"/-/vega-format@v1.1.0-B5FcaDDiQ30f8APLWM4h/dist=es2020,mode=imports,min/optimized/vega-format.js";function Ce(e){const t=e.container();t&&(t.setAttribute("role","graphics-document"),t.setAttribute("aria-roleDescription","visualization"),G(t,e.description()))}function G(e,t){e&&(t==null?e.removeAttribute("aria-label"):e.setAttribute("aria-label",t))}function ye(e){e.add(null,t=>(e._background=t.bg,e._resize=1,t.bg),{bg:e._signals.background})}const D="default";function Le(e){const t=e._signals.cursor||(e._signals.cursor=e.add({user:D,item:null}));e.on(e.events("view","mousemove"),t,(n,r)=>{const i=t.value,s=i?E(i)?i:i.user:D,a=r.item&&r.item.cursor||null;return i&&s===i.user&&a==i.item?i:{user:s,item:a}}),e.add(null,function(n){let r=n.cursor,i=this.value;return E(r)||(i=r.item,r=r.user),S(e,r&&r!==D?r:i||r),i},{cursor:t})}function S(e,t){const n=e.globalCursor()?typeof document!="undefined"&&document.body:e.container();if(n)return t==null?n.style.removeProperty("cursor"):n.style.cursor=t}function z(e,t){var n=e._runtime.data;return x(n,t)||h("Unrecognized data set: "+t),n[t]}function xe(e,t){return arguments.length<2?z(this,e).values.value:v.call(this,e,A().remove(ue).insert(t))}function v(e,t){fe(t)||h("Second argument to changes must be a changeset.");const n=z(this,e);return n.modified=!0,this.pulse(n.input,t)}function Ee(e,t){return v.call(this,e,A().insert(t))}function Ae(e,t){return v.call(this,e,A().remove(t))}function P(e){var t=e.padding();return Math.max(0,e._viewWidth+t.left+t.right)}function B(e){var t=e.padding();return Math.max(0,e._viewHeight+t.top+t.bottom)}function b(e){var t=e.padding(),n=e._origin;return[t.left+n[0],t.top+n[1]]}function Re(e){var t=b(e),n=P(e),r=B(e);e._renderer.background(e.background()),e._renderer.resize(n,r,t),e._handler.origin(t),e._resizeListeners.forEach(i=>{try{i(n,r)}catch(s){e.error(s)}})}function De(e,t,n){var r=e._renderer,i=r&&r.canvas(),s,a,o;return i&&(o=b(e),a=t.changedTouches?t.changedTouches[0]:t,s=me(a,i),s[0]-=o[0],s[1]-=o[1]),t.dataflow=e,t.item=n,t.vega=Se(e,n,s),t}function Se(e,t,n){const r=t?t.mark.marktype==="group"?t:t.mark.group:null;function i(a){var o=r,u;if(a){for(u=t;u;u=u.mark.group)if(u.mark.name===a){o=u;break}}return o&&o.mark&&o.mark.interactive?o:{}}function s(a){if(!a)return n;E(a)&&(a=i(a));const o=n.slice();for(;a;)o[0]-=a.x||0,o[1]-=a.y||0,a=a.mark&&a.mark.group;return o}return{view:W(e),item:W(t||{}),group:i,xy:s,x:a=>s(a)[0],y:a=>s(a)[1]}}const M="view",Oe="timer",Te="window",je={trap:!1};function He(e){const t=L({defaults:{}},e),n=(r,i)=>{i.forEach(s=>{g(r[s])&&(r[s]=le(r[s]))})};return n(t.defaults,["prevent","allow"]),n(t,["view","window","selector"]),t}function q(e,t,n,r){e._eventListeners.push({type:n,sources:de(t),handler:r})}function Ue(e,t){var n=e._eventConfig.defaults,r=n.prevent,i=n.allow;return r===!1||i===!0?!1:r===!0||i===!1?!0:r?r[t]:i?!i[t]:e.preventDefault()}function k(e,t,n){const r=e._eventConfig&&e._eventConfig[t];return r===!1||m(r)&&!r[n]?(e.warn("Blocked ".concat(t," ").concat(n," event listener.")),!1):!0}function We(e,t,n){var r=this,i=new ge(n),s=function(l,c){r.runAsync(null,()=>{e===M&&Ue(r,t)&&l.preventDefault(),i.receive(De(r,l,c))})},a;if(e===Oe)k(r,"timer",t)&&r.timer(s,t);else if(e===M)k(r,"view",t)&&r.addEventListener(t,s,je);else if(e===Te?k(r,"window",t)&&typeof window!="undefined"&&(a=[window]):typeof document!="undefined"&&(k(r,"selector",t)&&(a=document.querySelectorAll(e))),!a)r.warn("Can not resolve event source: "+e);else{for(var o=0,u=a.length;o<u;++o)a[o].addEventListener(t,s);q(r,a,t,s)}return i}function N(e){return e.item}function w(e){return e.item.mark.source}function F(e){return function(t,n){return n.vega.view().changeset().encode(n.item,e)}}function Ve(e,t){return e=[e||"hover"],t=[t||"update",e[0]],this.on(this.events("view","mouseover",N),w,F(e)),this.on(this.events("view","mouseout",N),w,F(t)),this}function Ie(){var e=this._tooltip,t=this._timers,n=this._eventListeners,r,i,s;for(r=t.length;--r>=0;)t[r].stop();for(r=n.length;--r>=0;)for(s=n[r],i=s.sources.length;--i>=0;)s.sources[i].removeEventListener(s.type,s.handler);return e&&e.call(this,this._handler,null,null,null),this}function d(e,t,n){const r=document.createElement(e);for(const i in t)r.setAttribute(i,t[i]);return n!=null&&(r.textContent=n),r}const Ge="vega-bind",Pe="vega-bind-name",Be="vega-bind-radio";function Me(e,t,n){if(!t)return;const r=n.param;let i=n.state;i||(i=n.state={elements:null,active:!1,set:null,update:a=>{a!=e.signal(r.signal)&&e.runAsync(null,()=>{i.source=!0,e.signal(r.signal,a)})}},r.debounce&&(i.update=ce(r.debounce,i.update)));const s=r.input==null&&r.element?qe:we;return s(i,t,r,e),i.active||(e.on(e._signals[r.signal],null,()=>{i.source?i.source=!1:i.set(e.signal(r.signal))}),i.active=!0),i}function qe(e,t,n,r){const i=n.event||"input",s=()=>e.update(t.value);r.signal(n.signal,t.value),t.addEventListener(i,s),q(r,t,i,s),e.set=a=>{t.value=a,t.dispatchEvent(Ne(i))}}function Ne(e){return typeof Event!="undefined"?new Event(e):{type:e}}function we(e,t,n,r){const i=r.signal(n.signal),s=d("div",{class:Ge}),a=n.input==="radio"?s:s.appendChild(d("label"));a.appendChild(d("span",{class:Pe},n.name||n.signal)),t.appendChild(s);let o=Fe;switch(n.input){case"checkbox":o=Qe;break;case"select":o=Je;break;case"radio":o=Ke;break;case"range":o=Xe;break}o(e,a,n,i)}function Fe(e,t,n,r){const i=d("input");for(const s in n)s!=="signal"&&s!=="element"&&i.setAttribute(s==="input"?"type":s,n[s]);i.setAttribute("name",n.signal),i.value=r,t.appendChild(i),i.addEventListener("input",()=>e.update(i.value)),e.elements=[i],e.set=s=>i.value=s}function Qe(e,t,n,r){const i={type:"checkbox",name:n.signal};r&&(i.checked=!0);const s=d("input",i);t.appendChild(s),s.addEventListener("change",()=>e.update(s.checked)),e.elements=[s],e.set=a=>s.checked=!!a||null}function Je(e,t,n,r){const i=d("select",{name:n.signal}),s=n.labels||[];n.options.forEach((a,o)=>{const u={value:a};C(a,r)&&(u.selected=!0),i.appendChild(d("option",u,(s[o]||a)+""))}),t.appendChild(i),i.addEventListener("change",()=>{e.update(n.options[i.selectedIndex])}),e.elements=[i],e.set=a=>{for(let o=0,u=n.options.length;o<u;++o)if(C(n.options[o],a)){i.selectedIndex=o;return}}}function Ke(e,t,n,r){const i=d("span",{class:Be}),s=n.labels||[];t.appendChild(i),e.elements=n.options.map((a,o)=>{const u={type:"radio",name:n.signal,value:a};C(a,r)&&(u.checked=!0);const l=d("input",u);l.addEventListener("change",()=>e.update(a));const c=d("label",{},(s[o]||a)+"");return c.prepend(l),i.appendChild(c),l}),e.set=a=>{const o=e.elements,u=o.length;for(let l=0;l<u;++l)C(o[l].value,a)&&(o[l].checked=!0)}}function Xe(e,t,n,r){r=r!==void 0?r:(+n.max+ +n.min)/2;const i=n.max!=null?n.max:Math.max(100,+r)||100,s=n.min||Math.min(0,i,+r)||0,a=n.step||_e(s,i,100),o=d("input",{type:"range",name:n.signal,min:s,max:i,step:a});o.value=r;const u=d("span",{},+r);t.appendChild(o),t.appendChild(u);const l=()=>{u.textContent=o.value,e.update(+o.value)};o.addEventListener("input",l),o.addEventListener("change",l),e.elements=[o],e.set=c=>{o.value=c,u.textContent=c}}function C(e,t){return e===t||e+""===t+""}function Q(e,t,n,r,i,s){return t=t||new r(e.loader()),t.initialize(n,P(e),B(e),b(e),i,s).background(e.background())}function O(e,t){return t?function(){try{t.apply(this,arguments)}catch(n){e.error(n)}}:null}function Ye(e,t,n,r){const i=new r(e.loader(),O(e,e.tooltip())).scene(e.scenegraph().root).initialize(n,b(e),e);return t&&t.handlers().forEach(s=>{i.on(s.type,s.handler)}),i}function Ze(e,t){const n=this,r=n._renderType,i=n._eventConfig.bind,s=R(r);e=n._el=e?T(n,e,!0):null,Ce(n),s||n.error("Unrecognized renderer type: "+r);const a=s.handler||I,o=e?s.renderer:s.headless;return n._renderer=o?Q(n,n._renderer,e,o):null,n._handler=Ye(n,n._handler,e,a),n._redraw=!0,e&&i!=="none"&&(t=t?n._elBind=T(n,t,!0):e.appendChild(d("form",{class:"vega-bindings"})),n._bind.forEach(u=>{u.param.element&&i!=="container"&&(u.element=T(n,u.param.element,!!u.param.input))}),n._bind.forEach(u=>{Me(n,u.element||t,u)})),n}function T(e,t,n){if(typeof t=="string")if(typeof document!="undefined"){if(t=document.querySelector(t),!t)return e.error("Signal bind element not found: "+t),null}else return e.error("DOM document instance not found."),null;if(t&&n)try{t.textContent=""}catch(r){t=null,e.error(r)}return t}const p=e=>+e||0,$e=e=>({top:e,bottom:e,left:e,right:e});function J(e){return m(e)?{top:p(e.top),bottom:p(e.bottom),left:p(e.left),right:p(e.right)}:$e(p(e))}async function j(e,t,n,r){const i=R(t),s=i&&i.headless;return s||h("Unrecognized renderer type: "+t),await e.runAsync(),Q(e,null,null,s,n,r).renderAsync(e._scenegraph.root)}async function et(e,t){e!==f.Canvas&&e!==f.SVG&&e!==f.PNG&&h("Unrecognized image type: "+e);const n=await j(this,e,t);return e===f.SVG?tt(n.svg(),"image/svg+xml"):n.canvas().toDataURL("image/png")}function tt(e,t){const n=new Blob([e],{type:t});return window.URL.createObjectURL(n)}async function nt(e,t){const n=await j(this,f.Canvas,e,t);return n.canvas()}async function rt(e){const t=await j(this,f.SVG,e);return t.svg()}function it(e,t,n){return ve(e,V,ze,n).parse(t)}function st(e){var t=this._runtime.scales;return x(t,e)||h("Unrecognized scale or projection: "+e),t[e].value}var K="width",X="height",H="padding",Y={skip:!0};function Z(e,t){var n=e.autosize(),r=e.padding();return t-(n&&n.contains===H?r.left+r.right:0)}function $(e,t){var n=e.autosize(),r=e.padding();return t-(n&&n.contains===H?r.top+r.bottom:0)}function at(e){var t=e._signals,n=t[K],r=t[X],i=t[H];function s(){e._autosize=e._resize=1}e._resizeWidth=e.add(null,o=>{e._width=o.size,e._viewWidth=Z(e,o.size),s()},{size:n}),e._resizeHeight=e.add(null,o=>{e._height=o.size,e._viewHeight=$(e,o.size),s()},{size:r});const a=e.add(null,s,{pad:i});e._resizeWidth.rank=n.rank+1,e._resizeHeight.rank=r.rank+1,a.rank=i.rank+1}function ot(e,t,n,r,i,s){this.runAfter(a=>{let o=0;a._autosize=0,a.width()!==n&&(o=1,a.signal(K,n,Y),a._resizeWidth.skip(!0)),a.height()!==r&&(o=1,a.signal(X,r,Y),a._resizeHeight.skip(!0)),a._viewWidth!==e&&(a._resize=1,a._viewWidth=e),a._viewHeight!==t&&(a._resize=1,a._viewHeight=t),(a._origin[0]!==i[0]||a._origin[1]!==i[1])&&(a._resize=1,a._origin=i),o&&a.run("enter"),s&&a.runAfter(u=>u.resize())},!1,1)}function ut(e){return this._runtime.getState(e||{data:lt,signals:dt,recurse:!0})}function lt(e,t){return t.modified&&g(t.input.value)&&e.indexOf("_:vega:_")}function dt(e,t){return!(e==="parent"||t instanceof V.proxy)}function ct(e){return this.runAsync(null,t=>{t._trigger=!1,t._runtime.setState(e)},t=>{t._trigger=!0}),this}function ht(e,t){function n(r){e({timestamp:Date.now(),elapsed:r})}this._timers.push(be(n,t))}function ft(e,t,n,r){const i=e.element();i&&i.setAttribute("title",gt(r))}function gt(e){return e==null?"":g(e)?ee(e):m(e)&&!U(e)?pt(e):e+""}function pt(e){return Object.keys(e).map(t=>{const n=e[t];return t+": "+(g(n)?ee(n):te(n))}).join(`
`)}function ee(e){return"["+e.map(te).join(", ")+"]"}function te(e){return g(e)?"[\u2026]":m(e)&&!U(e)?"{\u2026}":e}function ne(e,t){const n=this;if(t=t||{},_.call(n),t.loader&&n.loader(t.loader),t.logger&&n.logger(t.logger),t.logLevel!=null&&n.logLevel(t.logLevel),t.locale||e.locale){const s=L({},e.locale,t.locale);n.locale(ke(s.number,s.time))}n._el=null,n._elBind=null,n._renderType=t.renderer||f.Canvas,n._scenegraph=new pe;const r=n._scenegraph.root;n._renderer=null,n._tooltip=t.tooltip||ft,n._redraw=!0,n._handler=new I().scene(r),n._globalCursor=!1,n._preventDefault=!1,n._timers=[],n._eventListeners=[],n._resizeListeners=[],n._eventConfig=He(e.eventConfig),n.globalCursor(n._eventConfig.globalCursor);const i=it(n,e,t.expr);n._runtime=i,n._signals=i.signals,n._bind=(e.bindings||[]).map(s=>({state:null,param:L({},s)})),i.root&&i.root.set(r),r.source=i.data.root.input,n.pulse(i.data.root.input,n.changeset().insert(r.items)),n._width=n.width(),n._height=n.height(),n._viewWidth=Z(n,n._width),n._viewHeight=$(n,n._height),n._origin=[0,0],n._resize=0,n._autosize=1,at(n),ye(n),Le(n),n.description(e.description),t.hover&&n.hover(),t.container&&n.initialize(t.container,t.bind)}function y(e,t){return x(e._signals,t)?e._signals[t]:h("Unrecognized signal name: "+oe(t))}function re(e,t){const n=(e._targets||[]).filter(r=>r._update&&r._update.handler===t);return n.length?n[0]:null}function ie(e,t,n,r){let i=re(n,r);return i||(i=O(e,()=>r(t,n.value)),i.handler=r,e.on(n,null,i)),e}function se(e,t,n){const r=re(t,n);return r&&t._targets.remove(r),e}ae(ne,_,{async evaluate(e,t,n){if(await _.prototype.evaluate.call(this,e,t),this._redraw||this._resize)try{this._renderer&&(this._resize&&(this._resize=0,Re(this)),await this._renderer.renderAsync(this._scenegraph.root)),this._redraw=!1}catch(r){this.error(r)}return n&&he(this,n),this},dirty(e){this._redraw=!0,this._renderer&&this._renderer.dirty(e)},description(e){if(arguments.length){const t=e!=null?e+"":null;return t!==this._desc&&G(this._el,this._desc=t),this}return this._desc},container(){return this._el},scenegraph(){return this._scenegraph},origin(){return this._origin.slice()},signal(e,t,n){const r=y(this,e);return arguments.length===1?r.value:this.update(r,t,n)},width(e){return arguments.length?this.signal("width",e):this.signal("width")},height(e){return arguments.length?this.signal("height",e):this.signal("height")},padding(e){return arguments.length?this.signal("padding",J(e)):J(this.signal("padding"))},autosize(e){return arguments.length?this.signal("autosize",e):this.signal("autosize")},background(e){return arguments.length?this.signal("background",e):this.signal("background")},renderer(e){return arguments.length?(R(e)||h("Unrecognized renderer type: "+e),e!==this._renderType&&(this._renderType=e,this._resetRenderer()),this):this._renderType},tooltip(e){return arguments.length?(e!==this._tooltip&&(this._tooltip=e,this._resetRenderer()),this):this._tooltip},loader(e){return arguments.length?(e!==this._loader&&(_.prototype.loader.call(this,e),this._resetRenderer()),this):this._loader},resize(){return this._autosize=1,this.touch(y(this,"autosize"))},_resetRenderer(){this._renderer&&(this._renderer=null,this.initialize(this._el,this._elBind))},_resizeView:ot,addEventListener(e,t,n){let r=t;return n&&n.trap===!1||(r=O(this,t),r.raw=t),this._handler.on(e,r),this},removeEventListener(e,t){for(var n=this._handler.handlers(e),r=n.length,i,s;--r>=0;)if(s=n[r].type,i=n[r].handler,e===s&&(t===i||t===i.raw)){this._handler.off(s,i);break}return this},addResizeListener(e){const t=this._resizeListeners;return t.indexOf(e)<0&&t.push(e),this},removeResizeListener(e){var t=this._resizeListeners,n=t.indexOf(e);return n>=0&&t.splice(n,1),this},addSignalListener(e,t){return ie(this,e,y(this,e),t)},removeSignalListener(e,t){return se(this,y(this,e),t)},addDataListener(e,t){return ie(this,e,z(this,e).values,t)},removeDataListener(e,t){return se(this,z(this,e).values,t)},globalCursor(e){if(arguments.length){if(this._globalCursor!==!!e){const t=S(this,null);this._globalCursor=!!e,t&&S(this,t)}return this}else return this._globalCursor},preventDefault(e){return arguments.length?(this._preventDefault=e,this):this._preventDefault},timer:ht,events:We,finalize:Ie,hover:Ve,data:xe,change:v,insert:Ee,remove:Ae,scale:st,initialize:Ze,toImageURL:et,toCanvas:nt,toSVG:rt,getState:ut,setState:ct});export{ne as View};export default null;
