var o=0,a=0,f=0,T=1e3,p,u,h=0,r=0,m=0,c=typeof performance=="object"&&performance.now?performance:Date,I=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function v(){return r||(I(A),r=c.now()+m)}function A(){r=0}function s(){this._call=this._time=this._next=null}s.prototype=F.prototype={constructor:s,restart:function(n,t,i){if(typeof n!="function")throw new TypeError("callback is not a function");i=(i==null?v():+i)+(t==null?0:+t),!this._next&&u!==this&&(u?u._next=this:p=this,u=this),this._call=n,this._time=i,k()},stop:function(){this._call&&(this._call=null,this._time=Infinity,k())}};function F(n,t,i){var e=new s;return e.restart(n,t,i),e}function y(){v(),++o;for(var n=p,t;n;)(t=r-n._time)>=0&&n._call.call(null,t),n=n._next;--o}function b(){r=(h=c.now())+m,o=a=0;try{y()}finally{o=0,N(),r=0}}function D(){var n=c.now(),t=n-h;t>T&&(m-=t,h=n)}function N(){for(var n,t=p,i,e=Infinity;t;)t._call?(e>t._time&&(e=t._time),n=t,t=t._next):(i=t._next,t._next=null,t=n?n._next=i:p=i);u=n,k(e)}function k(n){if(o)return;a&&(a=clearTimeout(a));var t=n-r;t>24?(n<Infinity&&(a=setTimeout(b,n-c.now()-m)),f&&(f=clearInterval(f))):(f||(h=c.now(),f=setInterval(D,T)),o=1,I(b))}function $(n,t,i){var e=new s;return t=t==null?0:+t,e.restart(w=>{e.stop(),n(w+t)},t,i),e}function E(n,t,i){var e=new s,w=t;return t==null?(e.restart(n,t,i),e):(e._restart=e.restart,e.restart=function(j,_,l){_=+_,l=l==null?v():+l,e._restart(function q(x){x+=w,e._restart(q,w+=_,l),j(x)},_,l)},e.restart(n,t,i),e)}export{E as interval,v as now,$ as timeout,F as timer,y as timerFlush};export default null;
