import{Transform as h,ingest as k,tupleid as me,stableCompare as N}from"/-/vega-dataflow@v5.7.5-asKYS4gpPLMPf64pSozt/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{tickCount as R,tickFormat as ue,validTicks as ce,tickValues as he,SymbolLegend as C,labelFormat as ge,labelValues as pe,GradientLegend as ve,scaleFraction as Me,labelFraction as ye,scale as Se,isContinuous as F,Sequential as z,Linear as O,Time as ke,UTC as De,Pow as T,Sqrt as U,Ordinal as X,scaleImplicit as be,Log as xe,Symlog as we,isLogarithmic as ze,BinOrdinal as Y,bandSpace as Ae,isInterpolating as j,interpolateRange as Re,quantizeInterpolator as Ce,interpolateColors as q,interpolate as Oe,Band as Le,Point as B,scheme as Ee,Threshold as Pe,Quantile as Ie,Quantize as Ne,Diverging as Fe}from"/-/vega-scale@v7.3.0-RE8rHwByiw8oUoAe4pNs/dist=es2020,mode=imports,min/optimized/vega-scale.js";import{inherits as y,isArray as A,error as x,falsy as D,isFunction as b,constant as Te,peek as w,fastmap as V,one as $,toSet as Ue,isString as Xe,zoomLog as Ye,zoomPow as G,zoomSymlog as je,zoomLinear as qe,stringValue as Be}from"/-/vega-util@v1.17.1-uwuqwLZrXXBeO0DFYRgh/dist=es2020,mode=imports,min/optimized/vega-util.js";import{sum as Ve,range as H}from"/-/d3-array@v3.2.2-mREp9VYvdluM4XTkemzD/dist=es2020,mode=imports,min/optimized/d3-array.js";import{interpolateRound as $e,interpolate as Ge}from"/-/d3-interpolate@v3.0.1-i9AsUdFHwyaukRBWNe8d/dist=es2020,mode=imports,min/optimized/d3-interpolate.js";function Z(e){h.call(this,null,e)}y(Z,h,{transform(e,t){if(this.value&&!e.modified())return t.StopPropagation;var i=t.dataflow.locale(),a=t.fork(t.NO_SOURCE|t.NO_FIELDS),n=this.value,o=e.scale,l=e.count==null?e.values?e.values.length:10:e.count,r=R(o,l,e.minstep),s=e.format||ue(i,o,r,e.formatSpecifier,e.formatType,!!e.values),d=e.values?ce(o,e.values,r):he(o,r);return n&&(a.rem=n),n=d.map((f,m)=>k({index:m/(d.length-1||1),value:f,label:s(f)})),e.extra&&n.length&&n.push(k({index:-1,extra:{value:n[0].value},label:""})),a.source=n,a.add=n,this.value=n,a}});function K(e){h.call(this,null,e)}function He(){return k({})}function Ze(e){const t=V().test(i=>i.exit);return t.lookup=i=>t.get(e(i)),t}y(K,h,{transform(e,t){var i=t.dataflow,a=t.fork(t.NO_SOURCE|t.NO_FIELDS),n=e.item||He,o=e.key||me,l=this.value;return A(a.encode)&&(a.encode=null),l&&(e.modified("key")||t.modified(o))&&x("DataJoin does not support modified key function or fields."),l||(t=t.addAll(),this.value=l=Ze(o)),t.visit(t.ADD,r=>{const s=o(r);let d=l.get(s);d?d.exit?(l.empty--,a.add.push(d)):a.mod.push(d):(d=n(r),l.set(s,d),a.add.push(d)),d.datum=r,d.exit=!1}),t.visit(t.MOD,r=>{const s=o(r),d=l.get(s);d&&(d.datum=r,a.mod.push(d))}),t.visit(t.REM,r=>{const s=o(r),d=l.get(s);r===d.datum&&!d.exit&&(a.rem.push(d),d.exit=!0,++l.empty)}),t.changed(t.ADD_MOD)&&a.modifies("datum"),(t.clean()||e.clean&&l.empty>i.cleanThreshold)&&i.runAfter(l.clean),a}});function J(e){h.call(this,null,e)}y(J,h,{transform(e,t){var i=t.fork(t.ADD_REM),a=e.mod||!1,n=e.encoders,o=t.encode;if(A(o))if(i.changed()||o.every(m=>n[m]))o=o[0],i.encode=null;else return t.StopPropagation;var l=o==="enter",r=n.update||D,s=n.enter||D,d=n.exit||D,f=(o&&!l?n[o]:r)||D;if(t.changed(t.ADD)&&(t.visit(t.ADD,m=>{s(m,e),r(m,e)}),i.modifies(s.output),i.modifies(r.output),f!==D&&f!==r&&(t.visit(t.ADD,m=>{f(m,e)}),i.modifies(f.output))),t.changed(t.REM)&&d!==D&&(t.visit(t.REM,m=>{d(m,e)}),i.modifies(d.output)),l||f!==D){const m=t.MOD|(e.modified()?t.REFLOW:0);l?(t.visit(m,u=>{const g=s(u,e)||a;(f(u,e)||g)&&i.mod.push(u)}),i.mod.length&&i.modifies(s.output)):t.visit(m,u=>{(f(u,e)||a)&&i.mod.push(u)}),i.mod.length&&i.modifies(f.output)}return i.changed()?i:t.StopPropagation}});function Q(e){h.call(this,[],e)}y(Q,h,{transform(e,t){if(this.value!=null&&!e.modified())return t.StopPropagation;var i=t.dataflow.locale(),a=t.fork(t.NO_SOURCE|t.NO_FIELDS),n=this.value,o=e.type||C,l=e.scale,r=+e.limit,s=R(l,e.count==null?5:e.count,e.minstep),d=!!e.values||o===C,f=e.format||ge(i,l,s,o,e.formatSpecifier,e.formatType,d),m=e.values||pe(l,s),u,g,c,M,S;return n&&(a.rem=n),o===C?(r&&m.length>r?(t.dataflow.warn("Symbol legend count exceeds limit, filtering items."),n=m.slice(0,r-1),S=!0):n=m,b(c=e.size)?(!e.values&&l(n[0])===0&&(n=n.slice(1)),M=n.reduce((p,v)=>Math.max(p,c(v,e)),0)):c=Te(M=c||8),n=n.map((p,v)=>k({index:v,label:f(p,v,n),value:p,offset:M,size:c(p,e)})),S&&(S=m[n.length],n.push(k({index:n.length,label:`\u2026${m.length-n.length} entries`,value:S,offset:M,size:c(S,e)})))):o===ve?(u=l.domain(),g=Me(l,u[0],w(u)),m.length<3&&!e.values&&u[0]!==w(u)&&(m=[u[0],w(u)]),n=m.map((p,v)=>k({index:v,label:f(p,v,m),value:p,perc:g(p)}))):(c=m.length-1,g=ye(l),n=m.map((p,v)=>k({index:v,label:f(p,v,m),value:p,perc:v?g(p):0,perc2:v===c?1:g(m[v+1])}))),a.source=n,a.add=n,this.value=n,a}});const Ke=e=>e.source.x,Je=e=>e.source.y,Qe=e=>e.target.x,We=e=>e.target.y;function L(e){h.call(this,{},e)}L.Definition={type:"LinkPath",metadata:{modifies:!0},params:[{name:"sourceX",type:"field",default:"source.x"},{name:"sourceY",type:"field",default:"source.y"},{name:"targetX",type:"field",default:"target.x"},{name:"targetY",type:"field",default:"target.y"},{name:"orient",type:"enum",default:"vertical",values:["horizontal","vertical","radial"]},{name:"shape",type:"enum",default:"line",values:["line","arc","curve","diagonal","orthogonal"]},{name:"require",type:"signal"},{name:"as",type:"string",default:"path"}]},y(L,h,{transform(e,t){var i=e.sourceX||Ke,a=e.sourceY||Je,n=e.targetX||Qe,o=e.targetY||We,l=e.as||"path",r=e.orient||"vertical",s=e.shape||"line",d=te.get(s+"-"+r)||te.get(s);return d||x("LinkPath unsupported type: "+e.shape+(e.orient?"-"+e.orient:"")),t.visit(t.SOURCE,f=>{f[l]=d(i(f),a(f),n(f),o(f))}),t.reflow(e.modified()).modifies(l)}});const W=(e,t,i,a)=>"M"+e+","+t+"L"+i+","+a,_e=(e,t,i,a)=>W(t*Math.cos(e),t*Math.sin(e),a*Math.cos(i),a*Math.sin(i)),_=(e,t,i,a)=>{var n=i-e,o=a-t,l=Math.sqrt(n*n+o*o)/2,r=180*Math.atan2(o,n)/Math.PI;return"M"+e+","+t+"A"+l+","+l+" "+r+" 0 1 "+i+","+a},et=(e,t,i,a)=>_(t*Math.cos(e),t*Math.sin(e),a*Math.cos(i),a*Math.sin(i)),ee=(e,t,i,a)=>{const n=i-e,o=a-t,l=.2*(n+o),r=.2*(o-n);return"M"+e+","+t+"C"+(e+l)+","+(t+r)+" "+(i+r)+","+(a-l)+" "+i+","+a},tt=(e,t,i,a)=>ee(t*Math.cos(e),t*Math.sin(e),a*Math.cos(i),a*Math.sin(i)),nt=(e,t,i,a)=>"M"+e+","+t+"V"+a+"H"+i,it=(e,t,i,a)=>"M"+e+","+t+"H"+i+"V"+a,at=(e,t,i,a)=>{const n=Math.cos(e),o=Math.sin(e),l=Math.cos(i),r=Math.sin(i),s=Math.abs(i-e)>Math.PI?i<=e:i>e;return"M"+t*n+","+t*o+"A"+t+","+t+" 0 0,"+(s?1:0)+" "+t*l+","+t*r+"L"+a*l+","+a*r},ot=(e,t,i,a)=>{const n=(e+i)/2;return"M"+e+","+t+"C"+n+","+t+" "+n+","+a+" "+i+","+a},rt=(e,t,i,a)=>{const n=(t+a)/2;return"M"+e+","+t+"C"+e+","+n+" "+i+","+n+" "+i+","+a},lt=(e,t,i,a)=>{const n=Math.cos(e),o=Math.sin(e),l=Math.cos(i),r=Math.sin(i),s=(t+a)/2;return"M"+t*n+","+t*o+"C"+s*n+","+s*o+" "+s*l+","+s*r+" "+a*l+","+a*r},te=V({line:W,"line-radial":_e,arc:_,"arc-radial":et,curve:ee,"curve-radial":tt,"orthogonal-horizontal":nt,"orthogonal-vertical":it,"orthogonal-radial":at,"diagonal-horizontal":ot,"diagonal-vertical":rt,"diagonal-radial":lt});function E(e){h.call(this,null,e)}E.Definition={type:"Pie",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"startAngle",type:"number",default:0},{name:"endAngle",type:"number",default:6.283185307179586},{name:"sort",type:"boolean",default:!1},{name:"as",type:"string",array:!0,length:2,default:["startAngle","endAngle"]}]},y(E,h,{transform(e,t){var i=e.as||["startAngle","endAngle"],a=i[0],n=i[1],o=e.field||$,l=e.startAngle||0,r=e.endAngle!=null?e.endAngle:2*Math.PI,s=t.source,d=s.map(o),f=d.length,m=l,u=(r-l)/Ve(d),g=H(f),c,M,S;for(e.sort&&g.sort((p,v)=>d[p]-d[v]),c=0;c<f;++c)S=d[g[c]],M=s[g[c]],M[a]=m,M[n]=m+=S*u;return this.value=d,t.reflow(e.modified()).modifies(i)}});const st=5;function dt(e){const t=e.type;return!e.bins&&(t===O||t===T||t===U)}function ne(e){return F(e)&&e!==z}const ft=Ue(["set","modified","clear","type","scheme","schemeExtent","schemeCount","domain","domainMin","domainMid","domainMax","domainRaw","domainImplicit","nice","zero","bins","range","rangeStep","round","reverse","interpolate","interpolateGamma"]);function ie(e){h.call(this,null,e),this.modified(!0)}y(ie,h,{transform(e,t){var i=t.dataflow,a=this.value,n=mt(e);(!a||n!==a.type)&&(this.value=a=Se(n)());for(n in e)if(!ft[n]){if(n==="padding"&&ne(a.type))continue;b(a[n])?a[n](e[n]):i.warn("Unsupported scale property: "+n)}return vt(a,e,pt(a,e,ct(a,e,i))),t.fork(t.NO_SOURCE|t.NO_FIELDS)}});function mt(e){var t=e.type,i="",a;return t===z?z+"-"+O:(ut(e)&&(a=e.rawDomain?e.rawDomain.length:e.domain?e.domain.length+ +(e.domainMid!=null):0,i=a===2?z+"-":a===3?Fe+"-":""),(i+t||O).toLowerCase())}function ut(e){const t=e.type;return F(t)&&t!==ke&&t!==De&&(e.scheme||e.range&&e.range.length&&e.range.every(Xe))}function ct(e,t,i){const a=ht(e,t.domainRaw,i);if(a>-1)return a;var n=t.domain,o=e.type,l=t.zero||t.zero===void 0&&dt(e),r,s;if(!n)return 0;if(ne(o)&&t.padding&&n[0]!==w(n)&&(n=gt(o,n,t.range,t.padding,t.exponent,t.constant)),(l||t.domainMin!=null||t.domainMax!=null||t.domainMid!=null)&&(r=(n=n.slice()).length-1||1,l&&(n[0]>0&&(n[0]=0),n[r]<0&&(n[r]=0)),t.domainMin!=null&&(n[0]=t.domainMin),t.domainMax!=null&&(n[r]=t.domainMax),t.domainMid!=null)){s=t.domainMid;const d=s>n[r]?r+1:s<n[0]?0:r;d!==r&&i.warn("Scale domainMid exceeds domain min or max.",s),n.splice(d,0,s)}return e.domain(ae(o,n,i)),o===X&&e.unknown(t.domainImplicit?be:void 0),t.nice&&e.nice&&e.nice(t.nice!==!0&&R(e,t.nice)||null),n.length}function ht(e,t,i){return t?(e.domain(ae(e.type,t,i)),t.length):-1}function gt(e,t,i,a,n,o){var l=Math.abs(w(i)-i[0]),r=l/(l-2*a),s=e===xe?Ye(t,null,r):e===U?G(t,null,r,.5):e===T?G(t,null,r,n||1):e===we?je(t,null,r,o||1):qe(t,null,r);return t=t.slice(),t[0]=s[0],t[t.length-1]=s[1],t}function ae(e,t,i){if(ze(e)){var a=Math.abs(t.reduce((n,o)=>n+(o<0?-1:o>0?1:0),0));a!==t.length&&i.warn("Log scale domain includes zero: "+Be(t))}return t}function pt(e,t,i){let a=t.bins;if(a&&!A(a)){const n=e.domain(),o=n[0],l=w(n),r=a.step;let s=a.start==null?o:a.start,d=a.stop==null?l:a.stop;r||x("Scale bins parameter missing step property."),s<o&&(s=r*Math.ceil(o/r)),d>l&&(d=r*Math.floor(l/r)),a=H(s,d+r/2,r)}return a?e.bins=a:e.bins&&delete e.bins,e.type===Y&&(a?!t.domain&&!t.domainRaw&&(e.domain(a),i=a.length):e.bins=e.domain()),i}function vt(e,t,i){var a=e.type,n=t.round||!1,o=t.range;if(t.rangeStep!=null)o=Mt(a,t,i);else if(t.scheme&&(o=yt(a,t,i),b(o))){if(e.interpolator)return e.interpolator(o);x(`Scale type ${a} does not support interpolating color schemes.`)}if(o&&j(a))return e.interpolator(q(P(o,t.reverse),t.interpolate,t.interpolateGamma));o&&t.interpolate&&e.interpolate?e.interpolate(Oe(t.interpolate,t.interpolateGamma)):b(e.round)?e.round(n):b(e.rangeRound)&&e.interpolate(n?$e:Ge),o&&e.range(P(o,t.reverse))}function Mt(e,t,i){e!==Le&&e!==B&&x("Only band and point scales support rangeStep.");var a=(t.paddingOuter!=null?t.paddingOuter:t.padding)||0,n=e===B?1:(t.paddingInner!=null?t.paddingInner:t.padding)||0;return[0,t.rangeStep*Ae(i,n,a)]}function yt(e,t,i){var a=t.schemeExtent,n,o;return A(t.scheme)?o=q(t.scheme,t.interpolate,t.interpolateGamma):(n=t.scheme.toLowerCase(),o=Ee(n),o||x(`Unrecognized scheme name: ${t.scheme}`)),i=e===Pe?i+1:e===Y?i-1:e===Ie||e===Ne?+t.schemeCount||st:i,j(e)?oe(o,a,t.reverse):b(o)?Ce(oe(o,a),i):e===X?o:o.slice(0,i)}function oe(e,t,i){return b(e)&&(t||i)?Re(e,P(t||[0,1],i)):e}function P(e,t){return t?e.slice().reverse():e}function re(e){h.call(this,null,e)}y(re,h,{transform(e,t){const i=e.modified("sort")||t.changed(t.ADD)||t.modified(e.sort.fields)||t.modified("datum");return i&&t.source.sort(N(e.sort)),this.modified(i),t}});const le="zero",se="center",de="normalize",fe=["y0","y1"];function I(e){h.call(this,null,e)}I.Definition={type:"Stack",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"groupby",type:"field",array:!0},{name:"sort",type:"compare"},{name:"offset",type:"enum",default:le,values:[le,se,de]},{name:"as",type:"string",array:!0,length:2,default:fe}]},y(I,h,{transform(e,t){var i=e.as||fe,a=i[0],n=i[1],o=N(e.sort),l=e.field||$,r=e.offset===se?St:e.offset===de?kt:Dt,s,d,f,m;for(s=bt(t.source,e.groupby,o,l),d=0,f=s.length,m=s.max;d<f;++d)r(s[d],m,l,a,n);return t.reflow(e.modified()).modifies(i)}});function St(e,t,i,a,n){for(var o=(t-e.sum)/2,l=e.length,r=0,s;r<l;++r)s=e[r],s[a]=o,s[n]=o+=Math.abs(i(s))}function kt(e,t,i,a,n){for(var o=1/e.sum,l=0,r=e.length,s=0,d=0,f;s<r;++s)f=e[s],f[a]=l,f[n]=l=o*(d+=Math.abs(i(f)))}function Dt(e,t,i,a,n){for(var o=0,l=0,r=e.length,s=0,d,f;s<r;++s)f=e[s],d=+i(f),d<0?(f[a]=l,f[n]=l+=d):(f[a]=o,f[n]=o+=d)}function bt(e,t,i,a){var n=[],o=M=>M(f),l,r,s,d,f,m,u,g,c;if(t==null)n.push(e.slice());else for(l={},r=0,s=e.length;r<s;++r)f=e[r],m=t.map(o),u=l[m],u||(l[m]=u=[],n.push(u)),u.push(f);for(m=0,c=0,d=n.length;m<d;++m){for(u=n[m],r=0,g=0,s=u.length;r<s;++r)g+=Math.abs(a(u[r]));u.sum=g,g>c&&(c=g),i&&u.sort(i)}return n.max=c,n}export{Z as axisticks,K as datajoin,J as encode,Q as legendentries,L as linkpath,E as pie,ie as scale,re as sortitems,I as stack};export default null;
