import{InternMap as tn}from"/-/internmap@v1.0.1-HLDkqdYa5TOMS4hva8H7/dist=es2020,mode=imports,min/optimized/internmap.js";export{InternMap,InternSet}from"/-/internmap@v1.0.1-HLDkqdYa5TOMS4hva8H7/dist=es2020,mode=imports,min/optimized/internmap.js";function a(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function N(n){let e=n,t=n;n.length===1&&(e=(o,u)=>n(o)-u,t=rn(n));function i(o,u,l,c){for(l==null&&(l=0),c==null&&(c=o.length);l<c;){const d=l+c>>>1;t(o[d],u)<0?l=d+1:c=d}return l}function r(o,u,l,c){for(l==null&&(l=0),c==null&&(c=o.length);l<c;){const d=l+c>>>1;t(o[d],u)>0?c=d:l=d+1}return l}function f(o,u,l,c){l==null&&(l=0),c==null&&(c=o.length);const d=i(o,u,l,c-1);return d>l&&e(o[d-1],u)>-e(o[d],u)?d-1:d}return{left:i,center:f,right:r}}function rn(n){return(e,t)=>a(n(e),t)}function F(n){return n===null?NaN:+n}function*fn(n,e){if(e===void 0)for(let t of n)t!=null&&(t=+t)>=t&&(yield t);else{let t=-1;for(let i of n)(i=e(i,++t,n))!=null&&(i=+i)>=i&&(yield i)}}const C=N(a),L=C.right,on=C.left,un=N(F).center;function M(n,e){let t=0;if(e===void 0)for(let i of n)i!=null&&(i=+i)>=i&&++t;else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(r=+r)>=r&&++t}return t}function ln(n){return n.length|0}function cn(n){return!(n>0)}function dn(n){return typeof n!="object"||"length"in n?n:Array.from(n)}function sn(n){return e=>n(...e)}function hn(...n){const e=typeof n[n.length-1]=="function"&&sn(n.pop());n=n.map(dn);const t=n.map(ln),i=n.length-1,r=new Array(i+1).fill(0),f=[];if(i<0||t.some(cn))return f;for(;;){f.push(r.map((u,l)=>n[l][u]));let o=i;for(;++r[o]===t[o];){if(o===0)return e?f.map(e):f;r[o--]=0}}}function an(n,e){var t=0,i=0;return Float64Array.from(n,e===void 0?r=>t+=+r||0:r=>t+=+e(r,i++,n)||0)}function mn(n,e){return e<n?-1:e>n?1:e>=n?0:NaN}function R(n,e){let t=0,i,r=0,f=0;if(e===void 0)for(let o of n)o!=null&&(o=+o)>=o&&(i=o-r,r+=i/++t,f+=i*(o-r));else{let o=-1;for(let u of n)(u=e(u,++o,n))!=null&&(u=+u)>=u&&(i=u-r,r+=i/++t,f+=i*(u-r))}if(t>1)return f/(t-1)}function Y(n,e){const t=R(n,e);return t&&Math.sqrt(t)}function A(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let f of n)(f=e(f,++r,n))!=null&&(t===void 0?f>=f&&(t=i=f):(t>f&&(t=f),i<f&&(i=f)))}return[t,i]}class j{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const f=t[r],o=e+f,u=Math.abs(e)<Math.abs(f)?e-(o-f):f-(o-e);u&&(t[i++]=u),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,f,o=0;if(t>0){for(o=e[--t];t>0&&!(i=o,r=e[--t],o=i+r,f=r-(o-i),f););t>0&&(f<0&&e[t-1]<0||f>0&&e[t-1]>0)&&(r=f*2,i=o+r,r==i-o&&(o=i))}return o}}function wn(n,e){const t=new j;if(e===void 0)for(let i of n)(i=+i)&&t.add(i);else{let i=-1;for(let r of n)(r=+e(r,++i,n))&&t.add(r)}return+t}function gn(n,e){const t=new j;let i=-1;return Float64Array.from(n,e===void 0?r=>t.add(+r||0):r=>t.add(+e(r,++i,n)||0))}function g(n){return n}function B(n,...e){return p(n,g,g,e)}function pn(n,...e){return p(n,Array.from,g,e)}function U(n,e,...t){return p(n,g,e,t)}function yn(n,e,...t){return p(n,Array.from,e,t)}function xn(n,...e){return p(n,g,$,e)}function Mn(n,...e){return p(n,Array.from,$,e)}function $(n){if(n.length!==1)throw new Error("duplicate key");return n[0]}function p(n,e,t,i){return function r(f,o){if(o>=i.length)return t(f);const u=new tn,l=i[o++];let c=-1;for(const d of f){const s=l(d,++c,f),h=u.get(s);h?h.push(d):u.set(s,[d])}for(const[d,s]of u)u.set(d,r(s,o));return e(u)}(n,0)}function G(n,e){return Array.from(e,t=>n[t])}function z(n,...e){if(typeof n[Symbol.iterator]!="function")throw new TypeError("values is not iterable");n=Array.from(n);let[t=a]=e;if(t.length===1||e.length>1){const i=Uint32Array.from(n,(r,f)=>f);return e.length>1?(e=e.map(r=>n.map(r)),i.sort((r,f)=>{for(const o of e){const u=a(o[r],o[f]);if(u)return u}})):(t=n.map(t),i.sort((r,f)=>a(t[r],t[f]))),G(n,i)}return n.sort(t)}function An(n,e,t){return(e.length===1?z(U(n,e,t),([i,r],[f,o])=>a(r,o)||a(i,f)):z(B(n,t),([i,r],[f,o])=>e(r,o)||a(i,f))).map(([i])=>i)}var bn=Array.prototype,Sn=bn.slice;function b(n){return function(){return n}}var k=Math.sqrt(50),O=Math.sqrt(10),D=Math.sqrt(2);function J(n,e,t){var i,r=-1,f,o,u;if(e=+e,n=+n,t=+t,n===e&&t>0)return[n];if((i=e<n)&&(f=n,n=e,e=f),(u=S(n,e,t))===0||!isFinite(u))return[];if(u>0){let l=Math.round(n/u),c=Math.round(e/u);for(l*u<n&&++l,c*u>e&&--c,o=new Array(f=c-l+1);++r<f;)o[r]=(l+r)*u}else{u=-u;let l=Math.round(n*u),c=Math.round(e*u);for(l/u<n&&++l,c/u>e&&--c,o=new Array(f=c-l+1);++r<f;)o[r]=(l+r)/u}return i&&o.reverse(),o}function S(n,e,t){var i=(e-n)/Math.max(0,t),r=Math.floor(Math.log(i)/Math.LN10),f=i/Math.pow(10,r);return r>=0?(f>=k?10:f>=O?5:f>=D?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(f>=k?10:f>=O?5:f>=D?2:1)}function qn(n,e,t){var i=Math.abs(e-n)/Math.max(0,t),r=Math.pow(10,Math.floor(Math.log(i)/Math.LN10)),f=i/r;return f>=k?r*=10:f>=O?r*=5:f>=D&&(r*=2),e<n?-r:r}function K(n,e,t){let i;for(;;){const r=S(n,e,t);if(r===i||r===0||!isFinite(r))return[n,e];r>0?(n=Math.floor(n/r)*r,e=Math.ceil(e/r)*r):r<0&&(n=Math.ceil(n*r)/r,e=Math.floor(e*r)/r),i=r}}function P(n){return Math.ceil(Math.log(M(n))/Math.LN2)+1}function Q(){var n=g,e=A,t=P;function i(r){Array.isArray(r)||(r=Array.from(r));var f,o=r.length,u,l=new Array(o);for(f=0;f<o;++f)l[f]=n(r[f],f,r);var c=e(l),d=c[0],s=c[1],h=t(l,d,s);if(!Array.isArray(h)){const en=s,E=+h;if(e===A&&([d,s]=K(d,s,E)),h=J(d,s,E),h[h.length-1]>=s)if(en>=s&&e===A){const w=S(d,s,E);isFinite(w)&&(w>0?s=(Math.floor(s/w)+1)*w:w<0&&(s=(Math.ceil(s*-w)+1)/-w))}else h.pop()}for(var m=h.length;h[0]<=d;)h.shift(),--m;for(;h[m-1]>s;)h.pop(),--m;var y=new Array(m+1),T;for(f=0;f<=m;++f)T=y[f]=[],T.x0=f>0?h[f-1]:d,T.x1=f<m?h[f]:s;for(f=0;f<o;++f)u=l[f],d<=u&&u<=s&&y[L(h,u,0,m)].push(r[f]);return y}return i.value=function(r){return arguments.length?(n=typeof r=="function"?r:b(r),i):n},i.domain=function(r){return arguments.length?(e=typeof r=="function"?r:b([r[0],r[1]]),i):e},i.thresholds=function(r){return arguments.length?(t=typeof r=="function"?r:Array.isArray(r)?b(Sn.call(r)):b(r),i):t},i}function H(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function q(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function V(n,e,t=0,i=n.length-1,r=a){for(;i>t;){if(i-t>600){const l=i-t+1,c=e-t+1,d=Math.log(l),s=.5*Math.exp(2*d/3),h=.5*Math.sqrt(d*s*(l-s)/l)*(c-l/2<0?-1:1),m=Math.max(t,Math.floor(e-c*s/l+h)),y=Math.min(i,Math.floor(e+(l-c)*s/l+h));V(n,e,m,y,r)}const f=n[e];let o=t,u=i;for(x(n,t,e),r(n[i],f)>0&&x(n,t,i);o<u;){for(x(n,o,u),++o,--u;r(n[o],f)<0;)++o;for(;r(n[u],f)>0;)--u}r(n[t],f)===0?x(n,t,u):(++u,x(n,u,i)),u<=e&&(t=u+1),e<=u&&(i=u-1)}return n}function x(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function I(n,e,t){if(n=Float64Array.from(fn(n,t)),!(i=n.length))return;if((e=+e)<=0||i<2)return q(n);if(e>=1)return H(n);var i,r=(i-1)*e,f=Math.floor(r),o=H(V(n,f).subarray(0,f+1)),u=q(n.subarray(f+1));return o+(u-o)*(r-f)}function In(n,e,t=F){if(!(i=n.length))return;if((e=+e)<=0||i<2)return+t(n[0],0,n);if(e>=1)return+t(n[i-1],i-1,n);var i,r=(i-1)*e,f=Math.floor(r),o=+t(n[f],f,n),u=+t(n[f+1],f+1,n);return o+(u-o)*(r-f)}function Tn(n,e,t){return Math.ceil((t-e)/(2*(I(n,.75)-I(n,.25))*Math.pow(M(n),-1/3)))}function En(n,e,t){return Math.ceil((t-e)/(3.5*Y(n)*Math.pow(M(n),-1/3)))}function W(n,e){let t,i=-1,r=-1;if(e===void 0)for(const f of n)++r,f!=null&&(t<f||t===void 0&&f>=f)&&(t=f,i=r);else for(let f of n)(f=e(f,++r,n))!=null&&(t<f||t===void 0&&f>=f)&&(t=f,i=r);return i}function Nn(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let f of n)(f=e(f,++r,n))!=null&&(f=+f)>=f&&(++t,i+=f)}if(t)return i/t}function Ln(n,e){return I(n,.5,e)}function*jn(n){for(const e of n)yield*e}function zn(n){return Array.from(jn(n))}function X(n,e){let t,i=-1,r=-1;if(e===void 0)for(const f of n)++r,f!=null&&(t>f||t===void 0&&f>=f)&&(t=f,i=r);else for(let f of n)(f=e(f,++r,n))!=null&&(t>f||t===void 0&&f>=f)&&(t=f,i=r);return i}function kn(n,e=On){const t=[];let i,r=!1;for(const f of n)r&&t.push(e(i,f)),i=f,r=!0;return t}function On(n,e){return[n,e]}function Dn(n,e,t){n=+n,e=+e,t=(r=arguments.length)<2?(e=n,n=0,1):r<3?1:+t;for(var i=-1,r=Math.max(0,Math.ceil((e-n)/t))|0,f=new Array(r);++i<r;)f[i]=n+i*t;return f}function Hn(n,e=a){let t,i=!1;if(e.length===1){let r;for(const f of n){const o=e(f);(i?a(o,r)<0:a(o,o)===0)&&(t=f,r=o,i=!0)}}else for(const r of n)(i?e(r,t)<0:e(r,r)===0)&&(t=r,i=!0);return t}function Z(n,e=a){if(e.length===1)return X(n,e);let t,i=-1,r=-1;for(const f of n)++r,(i<0?e(f,f)===0:e(f,t)<0)&&(t=f,i=r);return i}function Vn(n,e=a){let t,i=!1;if(e.length===1){let r;for(const f of n){const o=e(f);(i?a(o,r)>0:a(o,o)===0)&&(t=f,r=o,i=!0)}}else for(const r of n)(i?e(r,t)>0:e(r,r)===0)&&(t=r,i=!0);return t}function Fn(n,e=a){if(e.length===1)return W(n,e);let t,i=-1,r=-1;for(const f of n)++r,(i<0?e(f,f)===0:e(f,t)>0)&&(t=f,i=r);return i}function Cn(n,e){const t=Z(n,e);return t<0?void 0:t}var Rn=_(Math.random);function _(n){return function(t,i=0,r=t.length){let f=r-(i=+i);for(;f;){const o=n()*f--|0,u=t[f+i];t[f+i]=t[o+i],t[o+i]=u}return t}}function Yn(n,e){let t=0;if(e===void 0)for(let i of n)(i=+i)&&(t+=i);else{let i=-1;for(let r of n)(r=+e(r,++i,n))&&(t+=r)}return t}function v(n){if(!(f=n.length))return[];for(var e=-1,t=q(n,Bn),i=new Array(t);++e<t;)for(var r=-1,f,o=i[e]=new Array(f);++r<f;)o[r]=n[r][e];return i}function Bn(n){return n.length}function Un(){return v(arguments)}function $n(n,e){if(typeof e!="function")throw new TypeError("test is not a function");let t=-1;for(const i of n)if(!e(i,++t,n))return!1;return!0}function Gn(n,e){if(typeof e!="function")throw new TypeError("test is not a function");let t=-1;for(const i of n)if(e(i,++t,n))return!0;return!1}function Jn(n,e){if(typeof e!="function")throw new TypeError("test is not a function");const t=[];let i=-1;for(const r of n)e(r,++i,n)&&t.push(r);return t}function Kn(n,e){if(typeof n[Symbol.iterator]!="function")throw new TypeError("values is not iterable");if(typeof e!="function")throw new TypeError("mapper is not a function");return Array.from(n,(t,i)=>e(t,i,n))}function Pn(n,e,t){if(typeof e!="function")throw new TypeError("reducer is not a function");const i=n[Symbol.iterator]();let r,f,o=-1;if(arguments.length<3){if({done:r,value:t}=i.next(),r)return;++o}for(;{done:r,value:f}=i.next(),!r;)t=e(t,f,++o,n);return t}function Qn(n){if(typeof n[Symbol.iterator]!="function")throw new TypeError("values is not iterable");return Array.from(n).reverse()}function Wn(n,...e){n=new Set(n);for(const t of e)for(const i of t)n.delete(i);return n}function Xn(n,e){const t=e[Symbol.iterator](),i=new Set;for(const r of n){if(i.has(r))return!1;let f,o;for(;({value:f,done:o}=t.next())&&!o;){if(Object.is(r,f))return!1;i.add(f)}}return!0}function Zn(n){return n instanceof Set?n:new Set(n)}function _n(n,...e){n=new Set(n),e=e.map(Zn);n:for(const t of n)for(const i of e)if(!i.has(t)){n.delete(t);continue n}return n}function nn(n,e){const t=n[Symbol.iterator](),i=new Set;for(const r of e){if(i.has(r))continue;let f,o;for(;{value:f,done:o}=t.next();){if(o)return!1;if(i.add(f),Object.is(r,f))break}}return!0}function vn(n,e){return nn(e,n)}function ne(...n){const e=new Set;for(const t of n)for(const i of t)e.add(i);return e}export{j as Adder,a as ascending,Q as bin,L as bisect,un as bisectCenter,on as bisectLeft,L as bisectRight,N as bisector,M as count,hn as cross,an as cumsum,mn as descending,Y as deviation,Wn as difference,Xn as disjoint,$n as every,A as extent,gn as fcumsum,Jn as filter,wn as fsum,Vn as greatest,Fn as greatestIndex,B as group,An as groupSort,pn as groups,Q as histogram,xn as index,Mn as indexes,_n as intersection,Hn as least,Z as leastIndex,Kn as map,H as max,W as maxIndex,Nn as mean,Ln as median,zn as merge,q as min,X as minIndex,K as nice,kn as pairs,G as permute,I as quantile,In as quantileSorted,V as quickselect,Dn as range,Pn as reduce,Qn as reverse,U as rollup,yn as rollups,Cn as scan,Rn as shuffle,_ as shuffler,Gn as some,z as sort,vn as subset,Yn as sum,nn as superset,Tn as thresholdFreedmanDiaconis,En as thresholdScott,P as thresholdSturges,S as tickIncrement,qn as tickStep,J as ticks,v as transpose,ne as union,R as variance,Un as zip};export default null;
