import{truthy as T,error as h,hasOwnProperty as y,isFunction as Y,isString as b,extend as D,isArray as m,field as Zt,peek as R,isBoolean as te,isDate as ee,isNumber as ne,isObject as $,isRegExp as ie,toBoolean as re,toDate as oe,toNumber as ae,toString as se,flush as ce,lerp as ue,pad as le,span as fe,inrange as de,truncate as me,quarter as pe,utcquarter as ge,extent as he,clampRange as ve,panLinear as xe,panLog as we,panPow as ye,panSymlog as be,zoomLinear as Se,zoomLog as Pe,zoomPow as ze,zoomSymlog as Fe,stringValue as S,identity as Ne,array as U}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";import{Literal as v,constants as ke,codegenExpression as je,functions as Ae,parseExpression as De,CallExpression as Re}from"/-/vega-expression@v5.0.0-kP0F2avA8xgwhtleXksI/dist=es2020,mode=imports,min/optimized/vega-expression.js";import{geoBounds as $e,geoCentroid as Le,geoArea as qe}from"/-/d3-geo@v2.0.2-zBkSruiFfVO6u3ShEPhG/dist=es2020,mode=imports,min/optimized/d3-geo.js";import{rgb as W,lab as Be,hcl as Ee,hsl as Oe}from"/-/d3-color@v2.0.0-M7DoazrAgRWgKp0xauLw/dist=es2020,mode=imports,min/optimized/d3-color.js";import{isTuple as X}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{bandSpace as _e,scale as H,scaleFraction as Ie}from"/-/vega-scale@v7.1.1-ZDIRLXqFpzGB7NTGb7z6/dist=es2020,mode=imports,min/optimized/vega-scale.js";import{Gradient as Ve,pathRender as Me,pathParse as Ce,Bounds as Ge,intersect as Te}from"/-/vega-scenegraph@v4.9.4-Rfd7OGmaS9T7w10Fz4Yx/dist=es2020,mode=imports,min/optimized/vega-scenegraph.js";import{selectionVisitor as L,selectionTest as Ye,selectionIdTest as Ue,selectionResolve as We,selectionTuples as Xe}from"/-/vega-selections@v5.3.1-crM1gefxjj3cwUmv2SI7/dist=es2020,mode=imports,min/optimized/vega-selections.js";import{random as He,cumulativeNormal as Je,cumulativeLogNormal as Ke,cumulativeUniform as Qe,densityNormal as Ze,densityLogNormal as tn,densityUniform as en,quantileNormal as nn,quantileLogNormal as rn,quantileUniform as on,sampleNormal as an,sampleLogNormal as sn,sampleUniform as cn}from"/-/vega-statistics@v1.7.10-LV9NsWqBJNud79RMDFen/dist=es2020,mode=imports,min/optimized/vega-statistics.js";import{utcOffset as un,utcSequence as ln,timeOffset as fn,timeSequence as dn,timeUnitSpecifier as mn,week as pn,utcweek as gn,dayofyear as hn,utcdayofyear as vn}from"/-/vega-time@v2.0.4-Ylq8WGKplJoZYQPOPvwD/dist=es2020,mode=imports,min/optimized/vega-time.js";import{range as xn}from"/-/d3-array@v2.12.1-Ilh7e293asl3yQWpnFdl/dist=es2020,mode=imports,min/optimized/d3-array.js";function q(t){const e=this.context.data[t];return e?e.values.value:[]}function J(t,e,n){const i=this.context.data[t]["index:"+e],r=i?i.value.get(n):void 0;return r&&r.count}function K(t,e){const n=this.context.dataflow,i=this.context.data[t],r=i.input;return n.pulse(r,n.changeset().remove(T).insert(e)),1}function Q(t,e,n){if(t){const i=this.context.dataflow,r=t.mark.source;i.pulse(r,i.changeset().encode(t,e))}return n!==void 0?n:t}const x=t=>function(e,n){const i=this.context.dataflow.locale();return i[t](n)(e)},Z=x("format"),B=x("timeFormat"),tt=x("utcFormat"),et=x("timeParse"),nt=x("utcParse"),P=new Date(2e3,0,1);function z(t,e,n){return!Number.isInteger(t)||!Number.isInteger(e)?"":(P.setYear(2e3),P.setMonth(t),P.setDate(e),B.call(this,P,n))}function it(t){return z.call(this,t,1,"%B")}function rt(t){return z.call(this,t,1,"%b")}function ot(t){return z.call(this,0,2+t,"%A")}function at(t){return z.call(this,0,2+t,"%a")}const st=":",ct="@",F="%",E="$";function N(t,e,n,i){e[0].type!==v&&h("First argument to data functions must be a string literal.");const r=e[0].value,o=st+r;if(!y(o,i))try{i[o]=n.getData(r).tuplesRef()}catch(a){}}function ut(t,e,n,i){e[0].type!==v&&h("First argument to indata must be a string literal."),e[1].type!==v&&h("Second argument to indata must be a string literal.");const r=e[0].value,o=e[1].value,a=ct+o;y(a,i)||(i[a]=n.getData(r).indataRef(n,o))}function c(t,e,n,i){if(e[0].type===v)lt(n,i,e[0].value);else for(t in n.scales)lt(n,i,t)}function lt(t,e,n){const i=F+n;if(!y(e,i))try{e[i]=t.scaleRef(n)}catch(r){}}function d(t,e){let n;return Y(t)?t:b(t)?(n=e.scales[t])&&n.value:void 0}function wn(t,e,n){e.__bandwidth=r=>r&&r.bandwidth?r.bandwidth():0,n._bandwidth=c,n._range=c,n._scale=c;const i=r=>"_["+(r.type===v?S(F+r.value):S(F)+"+"+t(r))+"]";return{_bandwidth:r=>`this.__bandwidth(${i(r[0])})`,_range:r=>`${i(r[0])}.range()`,_scale:r=>`${i(r[0])}(${t(r[1])})`}}function O(t,e){return function(n,i,r){if(n){const o=d(n,(r||this).context);return o&&o.path[t](i)}else return e(i)}}const ft=O("area",qe),dt=O("bounds",$e),mt=O("centroid",Le);function pt(t){const e=this.context.group;let n=!1;if(e)for(;t;){if(t===e){n=!0;break}t=t.mark.group}return n}function _(t,e,n){try{t[e].apply(t,["EXPRESSION"].concat([].slice.call(n)))}catch(i){t.warn(i)}return n[n.length-1]}function gt(){return _(this.context.dataflow,"warn",arguments)}function ht(){return _(this.context.dataflow,"info",arguments)}function vt(){return _(this.context.dataflow,"debug",arguments)}function I(t){const e=t/255;return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}function k(t){const e=W(t),n=I(e.r),i=I(e.g),r=I(e.b);return .2126*n+.7152*i+.0722*r}function xt(t,e){const n=k(t),i=k(e),r=Math.max(n,i),o=Math.min(n,i);return(r+.05)/(o+.05)}function wt(){const t=[].slice.call(arguments);return t.unshift({}),D(...t)}function yt(t,e){return t===e||t!==t&&e!==e?!0:m(t)?m(e)&&t.length===e.length?yn(t,e):!1:$(t)&&$(e)?bt(t,e):!1}function yn(t,e){for(let n=0,i=t.length;n<i;++n)if(!yt(t[n],e[n]))return!1;return!0}function bt(t,e){for(const n in t)if(!yt(t[n],e[n]))return!1;return!0}function St(t){return e=>bt(t,e)}function Pt(t,e,n,i,r,o){const a=this.context.dataflow,u=this.context.data[t],f=u.input,p=a.stamp();let l=u.changes,g,A;if(a._trigger===!1||!(f.value.length||e||i))return 0;if((!l||l.stamp<p)&&(u.changes=l=a.changeset(),l.stamp=p,a.runAfter(()=>{u.modified=!0,a.pulse(f,l).run()},!0,1)),n&&(g=n===!0?T:m(n)||X(n)?n:St(n),l.remove(g)),e&&l.insert(e),i&&(g=St(i),f.value.some(g)?l.remove(g):l.insert(i)),r)for(A in o)l.modify(r,A,o[A]);return 1}function zt(t){const e=t.touches,n=e[0].clientX-e[1].clientX,i=e[0].clientY-e[1].clientY;return Math.sqrt(n*n+i*i)}function Ft(t){const e=t.touches;return Math.atan2(e[0].clientY-e[1].clientY,e[0].clientX-e[1].clientX)}const Nt={};function kt(t,e){const n=Nt[e]||(Nt[e]=Zt(e));return m(t)?t.map(n):n(t)}function V(t){return m(t)||ArrayBuffer.isView(t)?t:null}function M(t){return V(t)||(b(t)?t:null)}function jt(t,...e){return V(t).join(...e)}function At(t,...e){return M(t).indexOf(...e)}function Dt(t,...e){return M(t).lastIndexOf(...e)}function Rt(t,...e){return M(t).slice(...e)}function $t(t,e,n){return Y(n)&&h("Function argument passed to replace."),String(t).replace(e,n)}function Lt(t){return V(t).slice().reverse()}function qt(t,e,n){return _e(t||0,e||0,n||0)}function Bt(t,e){const n=d(t,(e||this).context);return n&&n.bandwidth?n.bandwidth():0}function Et(t,e){const n=d(t,(e||this).context);return n?n.copy():void 0}function Ot(t,e){const n=d(t,(e||this).context);return n?n.domain():[]}function _t(t,e,n){const i=d(t,(n||this).context);return i?m(e)?(i.invertRange||i.invert)(e):(i.invert||i.invertExtent)(e):void 0}function It(t,e){const n=d(t,(e||this).context);return n&&n.range?n.range():[]}function Vt(t,e,n){const i=d(t,(n||this).context);return i?i(e):void 0}function Mt(t,e,n,i,r){t=d(t,(r||this).context);const o=Ve(e,n);let a=t.domain(),u=a[0],f=R(a),p=Ne;return f-u?p=Ie(t,u,f):t=(t.interpolator?H("sequential")().interpolator(t.interpolator()):H("linear")().interpolate(t.interpolate()).range(t.range())).domain([u=0,f=1]),t.ticks&&(a=t.ticks(+i||15),u!==a[0]&&a.unshift(u),f!==R(a)&&a.push(f)),a.forEach(l=>o.stop(p(l),t(l))),o}function Ct(t,e,n){const i=d(t,(n||this).context);return function(r){return i?i.path.context(r)(e):""}}function Gt(t){let e=null;return function(n){return n?Me(n,e=e||Ce(t)):t}}const Tt=t=>t.data;function Yt(t,e){const n=q.call(e,t);return n.root&&n.root.lookup||{}}function Ut(t,e,n){const i=Yt(t,this),r=i[e],o=i[n];return r&&o?r.path(o).map(Tt):void 0}function Wt(t,e){const n=Yt(t,this)[e];return n?n.ancestors().map(Tt):void 0}const Xt=()=>typeof window!="undefined"&&window||null;function Ht(){const t=Xt();return t?t.screen:{}}function Jt(){const t=Xt();return t?[t.innerWidth,t.innerHeight]:[void 0,void 0]}function Kt(){const t=this.context.dataflow,e=t.container&&t.container();return e?[e.clientWidth,e.clientHeight]:[void 0,void 0]}function bn(t,e,n){if(!t)return[];const[i,r]=t,o=new Ge().set(i[0],i[1],r[0],r[1]),a=n||this.context.dataflow.scenegraph().root;return Te(a,o,Sn(e))}function Sn(t){let e=null;if(t){const n=U(t.marktype),i=U(t.markname);e=r=>(!n.length||n.some(o=>r.marktype===o))&&(!i.length||i.some(o=>r.name===o))}return e}const w={random(){return He()},cumulativeNormal:Je,cumulativeLogNormal:Ke,cumulativeUniform:Qe,densityNormal:Ze,densityLogNormal:tn,densityUniform:en,quantileNormal:nn,quantileLogNormal:rn,quantileUniform:on,sampleNormal:an,sampleLogNormal:sn,sampleUniform:cn,isArray:m,isBoolean:te,isDate:ee,isDefined(t){return t!==void 0},isNumber:ne,isObject:$,isRegExp:ie,isString:b,isTuple:X,isValid(t){return t!=null&&t===t},toBoolean:re,toDate:oe,toNumber:ae,toString:se,indexof:At,join:jt,lastindexof:Dt,replace:$t,reverse:Lt,slice:Rt,flush:ce,lerp:ue,merge:wt,pad:le,peek:R,pluck:kt,span:fe,inrange:de,truncate:me,rgb:W,lab:Be,hcl:Ee,hsl:Oe,luminance:k,contrast:xt,sequence:xn,format:Z,utcFormat:tt,utcParse:nt,utcOffset:un,utcSequence:ln,timeFormat:B,timeParse:et,timeOffset:fn,timeSequence:dn,timeUnitSpecifier:mn,monthFormat:it,monthAbbrevFormat:rt,dayFormat:ot,dayAbbrevFormat:at,quarter:pe,utcquarter:ge,week:pn,utcweek:gn,dayofyear:hn,utcdayofyear:vn,warn:gt,info:ht,debug:vt,extent:he,inScope:pt,intersect:bn,clampRange:ve,pinchDistance:zt,pinchAngle:Ft,screen:Ht,containerSize:Kt,windowSize:Jt,bandspace:qt,setdata:K,pathShape:Gt,panLinear:xe,panLog:we,panPow:ye,panSymlog:be,zoomLinear:Se,zoomLog:Pe,zoomPow:ze,zoomSymlog:Fe,encode:Q,modify:Pt},Pn=["view","item","group","xy","x","y"],zn="event.vega.",Qt="this.",C={},G={forbidden:["_"],allowed:["datum","event","item"],fieldvar:"datum",globalvar:t=>`_[${S(E+t)}]`,functions:Fn,constants:ke,visitors:C},j=je(G);function Fn(t){const e=Ae(t);Pn.forEach(n=>e[n]=zn+n);for(const n in w)e[n]=Qt+n;return D(e,wn(t,w,C)),e}function s(t,e,n){return arguments.length===1?w[t]:(w[t]=e,n&&(C[t]=n),j&&(j.functions[t]=Qt+t),this)}s("bandwidth",Bt,c),s("copy",Et,c),s("domain",Ot,c),s("range",It,c),s("invert",_t,c),s("scale",Vt,c),s("gradient",Mt,c),s("geoArea",ft,c),s("geoBounds",dt,c),s("geoCentroid",mt,c),s("geoShape",Ct,c),s("indata",J,ut),s("data",q,N),s("treePath",Ut,N),s("treeAncestors",Wt,N),s("vlSelectionTest",Ye,L),s("vlSelectionIdTest",Ue,L),s("vlSelectionResolve",We,L),s("vlSelectionTuples",Xe);function Nn(t,e){const n={};let i;try{t=b(t)?t:S(t)+"",i=De(t)}catch(o){h("Expression parse error: "+t)}i.visit(o=>{if(o.type!==Re)return;const a=o.callee.name,u=G.visitors[a];u&&u(a,o.arguments,e,n)});const r=j(i);return r.globals.forEach(o=>{const a=E+o;!y(n,a)&&e.getSignal(o)&&(n[a]=e.signalRef(o))}),{$expr:D({code:r.code},e.options.ast?{ast:i}:null),$fields:r.fields,$params:n}}export{st as DataPrefix,ct as IndexPrefix,F as ScalePrefix,E as SignalPrefix,qt as bandspace,Bt as bandwidth,j as codeGenerator,G as codegenParams,Kt as containerSize,xt as contrast,Et as copy,q as data,N as dataVisitor,at as dayAbbrevFormat,ot as dayFormat,vt as debug,Ot as domain,Q as encode,s as expressionFunction,Z as format,w as functionContext,ft as geoArea,dt as geoBounds,mt as geoCentroid,Ct as geoShape,pt as inScope,J as indata,ut as indataVisitor,At as indexof,ht as info,_t as invert,jt as join,Dt as lastindexof,k as luminance,wt as merge,Pt as modify,rt as monthAbbrevFormat,it as monthFormat,Nn as parseExpression,Gt as pathShape,Ft as pinchAngle,zt as pinchDistance,kt as pluck,It as range,$t as replace,Lt as reverse,Vt as scale,Mt as scaleGradient,c as scaleVisitor,Ht as screen,K as setdata,Rt as slice,B as timeFormat,et as timeParse,Wt as treeAncestors,Ut as treePath,tt as utcFormat,nt as utcParse,gt as warn,Jt as windowSize};export default null;