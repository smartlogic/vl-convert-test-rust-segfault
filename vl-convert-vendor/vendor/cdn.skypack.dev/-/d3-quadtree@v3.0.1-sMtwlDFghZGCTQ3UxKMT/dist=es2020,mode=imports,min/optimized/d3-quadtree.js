function j(e){const t=+this._x.call(null,e),i=+this._y.call(null,e);return k(this.cover(t,i),t,i,e)}function k(e,t,i,r){if(isNaN(t)||isNaN(i))return e;var n,s=e._root,h={data:r},a=e._x0,o=e._y0,l=e._x1,u=e._y1,f,_,c,y,g,x,v,N;if(!s)return e._root=h,e;for(;s.length;)if((g=t>=(f=(a+l)/2))?a=f:l=f,(x=i>=(_=(o+u)/2))?o=_:u=_,n=s,!(s=s[v=x<<1|g]))return n[v]=h,e;if(c=+e._x.call(null,s.data),y=+e._y.call(null,s.data),t===c&&i===y)return h.next=s,n?n[v]=h:e._root=h,e;do n=n?n[v]=new Array(4):e._root=new Array(4),(g=t>=(f=(a+l)/2))?a=f:l=f,(x=i>=(_=(o+u)/2))?o=_:u=_;while((v=x<<1|g)===(N=(y>=_)<<1|c>=f));return n[N]=s,n[v]=h,e}function Q(e){var t,i,r=e.length,n,s,h=new Array(r),a=new Array(r),o=Infinity,l=Infinity,u=-Infinity,f=-Infinity;for(i=0;i<r;++i){if(isNaN(n=+this._x.call(null,t=e[i]))||isNaN(s=+this._y.call(null,t)))continue;h[i]=n,a[i]=s,n<o&&(o=n),n>u&&(u=n),s<l&&(l=s),s>f&&(f=s)}if(o>u||l>f)return this;for(this.cover(o,l).cover(u,f),i=0;i<r;++i)k(this,h[i],a[i],e[i]);return this}function P(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,n=this._x1,s=this._y1;if(isNaN(i))n=(i=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var h=n-i||1,a=this._root,o,l;i>e||e>=n||r>t||t>=s;){l=(t<r)<<1|e<i,o=new Array(4),o[l]=a,a=o,h*=2;switch(l){case 0:n=i+h,s=r+h;break;case 1:i=n-h,s=r+h;break;case 2:n=i+h,r=s-h;break;case 3:i=n-h,r=s-h;break}}this._root&&this._root.length&&(this._root=a)}return this._x0=i,this._y0=r,this._x1=n,this._y1=s,this}function X(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function Y(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function p(e,t,i,r,n){this.node=e,this.x0=t,this.y0=i,this.x1=r,this.y1=n}function B(e,t,i){var r,n=this._x0,s=this._y0,h,a,o,l,u=this._x1,f=this._y1,_=[],c=this._root,y,g;for(c&&_.push(new p(c,n,s,u,f)),i==null?i=Infinity:(n=e-i,s=t-i,u=e+i,f=t+i,i*=i);y=_.pop();){if(!(c=y.node)||(h=y.x0)>u||(a=y.y0)>f||(o=y.x1)<n||(l=y.y1)<s)continue;if(c.length){var x=(h+o)/2,v=(a+l)/2;_.push(new p(c[3],x,v,o,l),new p(c[2],h,v,x,l),new p(c[1],x,a,o,v),new p(c[0],h,a,x,v)),(g=(t>=v)<<1|e>=x)&&(y=_[_.length-1],_[_.length-1]=_[_.length-1-g],_[_.length-1-g]=y)}else{var N=e-+this._x.call(null,c.data),q=t-+this._y.call(null,c.data),b=N*N+q*q;if(b<i){var d=Math.sqrt(i=b);n=e-d,s=t-d,u=e+d,f=t+d,r=c.data}}}return r}function C(e){if(isNaN(u=+this._x.call(null,e))||isNaN(f=+this._y.call(null,e)))return this;var t,i=this._root,r,n,s,h=this._x0,a=this._y0,o=this._x1,l=this._y1,u,f,_,c,y,g,x,v;if(!i)return this;if(i.length)for(;;){if((y=u>=(_=(h+o)/2))?h=_:o=_,(g=f>=(c=(a+l)/2))?a=c:l=c,!(t=i,i=i[x=g<<1|y]))return this;if(!i.length)break;(t[x+1&3]||t[x+2&3]||t[x+3&3])&&(r=t,v=x)}for(;i.data!==e;)if(!(n=i,i=i.next))return this;return(s=i.next)&&delete i.next,n?(s?n.next=s:delete n.next,this):t?(s?t[x]=s:delete t[x],(i=t[0]||t[1]||t[2]||t[3])&&i===(t[3]||t[2]||t[1]||t[0])&&!i.length&&(r?r[v]=i:this._root=i),this):(this._root=s,this)}function D(e){for(var t=0,i=e.length;t<i;++t)this.remove(e[t]);return this}function E(){return this._root}function F(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function G(e){var t=[],i,r=this._root,n,s,h,a,o;for(r&&t.push(new p(r,this._x0,this._y0,this._x1,this._y1));i=t.pop();)if(!e(r=i.node,s=i.x0,h=i.y0,a=i.x1,o=i.y1)&&r.length){var l=(s+a)/2,u=(h+o)/2;(n=r[3])&&t.push(new p(n,l,u,a,o)),(n=r[2])&&t.push(new p(n,s,u,l,o)),(n=r[1])&&t.push(new p(n,l,h,a,u)),(n=r[0])&&t.push(new p(n,s,h,l,u))}return this}function H(e){var t=[],i=[],r;for(this._root&&t.push(new p(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var n=r.node;if(n.length){var s,h=r.x0,a=r.y0,o=r.x1,l=r.y1,u=(h+o)/2,f=(a+l)/2;(s=n[0])&&t.push(new p(s,h,a,u,f)),(s=n[1])&&t.push(new p(s,u,a,o,f)),(s=n[2])&&t.push(new p(s,h,f,u,l)),(s=n[3])&&t.push(new p(s,u,f,o,l))}i.push(r)}for(;r=i.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function J(e){return e[0]}function K(e){return arguments.length?(this._x=e,this):this._x}function L(e){return e[1]}function O(e){return arguments.length?(this._y=e,this):this._y}function I(e,t,i){var r=new A(t??J,i??L,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function A(e,t,i,r,n,s){this._x=e,this._y=t,this._x0=i,this._y0=r,this._x1=n,this._y1=s,this._root=void 0}function M(e){for(var t={data:e.data},i=t;e=e.next;)i=i.next={data:e.data};return t}var w=I.prototype=A.prototype;w.copy=function(){var e=new A(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,i,r;if(!t)return e;if(!t.length)return e._root=M(t),e;for(i=[{source:t,target:e._root=new Array(4)}];t=i.pop();)for(var n=0;n<4;++n)(r=t.source[n])&&(r.length?i.push({source:r,target:t.target[n]=new Array(4)}):t.target[n]=M(r));return e},w.add=j,w.addAll=Q,w.cover=P,w.data=X,w.extent=Y,w.find=B,w.remove=C,w.removeAll=D,w.root=E,w.size=F,w.visit=G,w.visitAfter=H,w.x=K,w.y=O;export{I as quadtree};export default null;
