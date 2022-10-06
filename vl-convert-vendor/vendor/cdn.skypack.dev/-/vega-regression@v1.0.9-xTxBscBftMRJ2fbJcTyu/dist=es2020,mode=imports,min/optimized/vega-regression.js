import{regressionLoess as R,sampleCurve as k,regressionLinear as z,regressionLog as D,regressionExp as I,regressionPow as P,regressionQuad as U,regressionPoly as j}from"/-/vega-statistics@v1.7.10-LV9NsWqBJNud79RMDFen/dist=es2020,mode=imports,min/optimized/vega-statistics.js";import{Transform as x,ingest as w}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{inherits as S,accessorName as f,hasOwnProperty as F,error as B,extent as M}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";function C(e,r){var t=[],p=function(l){return l(o)},m,i,s,o,n,a;if(r==null)t.push(e);else for(m={},i=0,s=e.length;i<s;++i)o=e[i],n=r.map(p),a=m[n],a||(m[n]=a=[],a.dims=n,t.push(a)),a.push(o);return t}function b(e){x.call(this,null,e)}b.Definition={type:"Loess",metadata:{generates:!0},params:[{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"groupby",type:"field",array:!0},{name:"bandwidth",type:"number",default:.3},{name:"as",type:"string",array:!0}]},S(b,x,{transform(e,r){const t=r.fork(r.NO_SOURCE|r.NO_FIELDS);if(!this.value||r.changed()||e.modified()){const p=r.materialize(r.SOURCE).source,m=C(p,e.groupby),i=(e.groupby||[]).map(f),s=i.length,o=e.as||[f(e.x),f(e.y)],n=[];m.forEach(a=>{R(a,e.x,e.y,e.bandwidth||.3).forEach(l=>{const d={};for(let u=0;u<s;++u)d[i[u]]=a.dims[u];d[o[0]]=l[0],d[o[1]]=l[1],n.push(w(d))})}),this.value&&(t.rem=this.value),this.value=t.add=t.source=n}return t}});const E={linear:z,log:D,exp:I,pow:P,quad:U,poly:j},V=(e,r)=>e==="poly"?r:e==="quad"?2:1;function O(e){x.call(this,null,e)}O.Definition={type:"Regression",metadata:{generates:!0},params:[{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"groupby",type:"field",array:!0},{name:"method",type:"string",default:"linear",values:Object.keys(E)},{name:"order",type:"number",default:3},{name:"extent",type:"number",array:!0,length:2},{name:"params",type:"boolean",default:!1},{name:"as",type:"string",array:!0}]},S(O,x,{transform(e,r){const t=r.fork(r.NO_SOURCE|r.NO_FIELDS);if(!this.value||r.changed()||e.modified()){const p=r.materialize(r.SOURCE).source,m=C(p,e.groupby),i=(e.groupby||[]).map(f),s=e.method||"linear",o=e.order||3,n=V(s,o),a=e.as||[f(e.x),f(e.y)],l=E[s],d=[];let u=e.extent;F(E,s)||B("Invalid regression method: "+s),u!=null&&(s==="log"&&u[0]<=0&&(r.dataflow.warn("Ignoring extent with values <= 0 for log regression."),u=null)),m.forEach(g=>{const N=g.length;if(N<=n){r.dataflow.warn("Skipping regression with more parameters than data points.");return}const h=l(g,e.x,e.y,o);if(e.params){d.push(w({keys:g.dims,coef:h.coef,rSquared:h.rSquared}));return}const q=u||M(g,e.x),L=c=>{const y={};for(let v=0;v<i.length;++v)y[i[v]]=g.dims[v];y[a[0]]=c[0],y[a[1]]=c[1],d.push(w(y))};s==="linear"?q.forEach(c=>L([c,h.predict(c)])):k(h.predict,q,25,200).forEach(L)}),this.value&&(t.rem=this.value),this.value=t.add=t.source=d}return t}});export{b as loess,O as regression};export default null;
