import{Transform as p}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{inherits as v,array as k,isFunction as d,accessorFields as x,hasOwnProperty as F,error as M}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";import{forceSimulation as w,forceCenter as D,forceCollide as C,forceManyBody as P,forceLink as j,forceX as z,forceY as O}from"/-/d3-force@v3.0.0-cshj62qMoyIGNIXoil9u/dist=es2020,mode=imports,min/optimized/d3-force.js";const y={center:D,collide:C,nbody:P,link:j,x:z,y:O},s="forces",u=["alpha","alphaMin","alphaTarget","velocityDecay","forces"],I=["static","iterations"],h=["x","y","vx","vy"];function l(e){p.call(this,null,e)}l.Definition={type:"Force",metadata:{modifies:!0},params:[{name:"static",type:"boolean",default:!1},{name:"restart",type:"boolean",default:!1},{name:"iterations",type:"number",default:300},{name:"alpha",type:"number",default:1},{name:"alphaMin",type:"number",default:.001},{name:"alphaTarget",type:"number",default:0},{name:"velocityDecay",type:"number",default:.4},{name:"forces",type:"param",array:!0,params:[{key:{force:"center"},params:[{name:"x",type:"number",default:0},{name:"y",type:"number",default:0}]},{key:{force:"collide"},params:[{name:"radius",type:"number",expr:!0},{name:"strength",type:"number",default:.7},{name:"iterations",type:"number",default:1}]},{key:{force:"nbody"},params:[{name:"strength",type:"number",default:-30},{name:"theta",type:"number",default:.9},{name:"distanceMin",type:"number",default:1},{name:"distanceMax",type:"number"}]},{key:{force:"link"},params:[{name:"links",type:"data"},{name:"id",type:"field"},{name:"distance",type:"number",default:30,expr:!0},{name:"strength",type:"number",expr:!0},{name:"iterations",type:"number",default:1}]},{key:{force:"x"},params:[{name:"strength",type:"number",default:.1},{name:"x",type:"field"}]},{key:{force:"y"},params:[{name:"strength",type:"number",default:.1},{name:"y",type:"field"}]}]},{name:"as",type:"string",array:!0,modify:!1,default:h}]},v(l,p,{transform(e,t){var a=this.value,n=t.changed(t.ADD_REM),o=e.modified(u),r=e.iterations||300;if(a?(n&&(t.modifies("index"),a.nodes(t.source)),(o||t.changed(t.MOD))&&g(a,e,0,t)):(this.value=a=S(t.source,e),a.on("tick",L(t.dataflow,this)),e.static||(n=!0,a.tick()),t.modifies("index")),o||n||e.modified(I)||t.changed()&&e.restart){if(a.alpha(Math.max(a.alpha(),e.alpha||1)).alphaDecay(1-Math.pow(a.alphaMin(),1/r)),e.static)for(a.stop();--r>=0;)a.tick();else if(a.stopped()&&a.restart(),!n)return t.StopPropagation}return this.finish(e,t)},finish(e,t){const a=t.dataflow;for(let i=this._argops,m=0,b=i.length,c;m<b;++m){if(c=i[m],c.name!==s||c.op._argval.force!=="link")continue;for(var n=c.op._argops,o=0,r=n.length,f;o<r;++o)if(n[o].name==="links"&&(f=n[o].op.source)){a.pulse(f,a.changeset().reflow());break}}return t.reflow(e.modified()).modifies(h)}});function L(e,t){return()=>e.touch(t).run()}function S(e,t){const a=w(e),n=a.stop,o=a.restart;let r=!1;return a.stopped=()=>r,a.restart=()=>(r=!1,o()),a.stop=()=>(r=!0,n()),g(a,t,!0).on("end",()=>r=!0)}function g(e,t,a,n){var o=k(t.forces),r,f,i,m;for(r=0,f=u.length;r<f;++r)i=u[r],i!==s&&t.modified(i)&&e[i](t[i]);for(r=0,f=o.length;r<f;++r)m=s+r,i=a||t.modified(s,r)?q(o[r]):n&&T(o[r],n)?e.force(m):null,i&&e.force(m,i);for(f=e.numForces||0;r<f;++r)e.force(s+r,null);return e.numForces=o.length,e}function T(e,t){var a,n;for(a in e)if(d(n=e[a])&&t.modified(x(n)))return 1;return 0}function q(e){var t,a;F(y,e.force)||M("Unrecognized force: "+e.force),t=y[e.force]();for(a in e)d(t[a])&&B(t[a],e[a],e);return t}function B(e,t,a){e(d(t)?n=>t(n,a):t)}export{l as force};export default null;
