import{Adder as k,merge as Nr,range as mn}from"/-/d3-array@v2.12.1-DLYr8nhtskzmh0Qw482w/dist=es2020,mode=imports,min/optimized/d3-array.js";var $=1e-6,xn=1e-12,L=Math.PI,O=L/2,nt=L/4,U=L*2,X=180/L,N=L/180,C=Math.abs,$n=Math.atan,Q=Math.atan2,m=Math.cos,tt=Math.ceil,Ar=Math.exp,Tt=Math.hypot,rt=Math.log,Yt=Math.pow,w=Math.sin,on=Math.sign||function(n){return n>0?1:n<0?-1:0},H=Math.sqrt,Xt=Math.tan;function zr(n){return n>1?0:n<-1?L:Math.acos(n)}function J(n){return n>1?O:n<-1?-O:Math.asin(n)}function Lr(n){return(n=w(n/2))*n}function D(){}function it(n,t){n&&Cr.hasOwnProperty(n.type)&&Cr[n.type](n,t)}var qr={Feature:function(n,t){it(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,r=-1,e=i.length;++r<e;)it(i[r].geometry,t)}},Cr={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)n=i[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){Ft(n.coordinates,t,0)},MultiLineString:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)Ft(i[r],t,0)},Polygon:function(n,t){Ir(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)Ir(i[r],t)},GeometryCollection:function(n,t){for(var i=n.geometries,r=-1,e=i.length;++r<e;)it(i[r],t)}};function Ft(n,t,i){var r=-1,e=n.length-i,o;for(t.lineStart();++r<e;)o=n[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function Ir(n,t){var i=-1,r=n.length;for(t.polygonStart();++i<r;)Ft(n[i],t,1);t.polygonEnd()}function an(n,t){n&&qr.hasOwnProperty(n.type)?qr[n.type](n,t):it(n,t)}var et=new k,ot=new k,xr,Tr,Dt,Gt,Ot,fn={point:D,lineStart:D,lineEnd:D,polygonStart:function(){et=new k,fn.lineStart=Gi,fn.lineEnd=Oi},polygonEnd:function(){var n=+et;ot.add(n<0?U+n:n),this.lineStart=this.lineEnd=this.point=D},sphere:function(){ot.add(U)}};function Gi(){fn.point=Zi}function Oi(){Yr(xr,Tr)}function Zi(n,t){fn.point=Yr,xr=n,Tr=t,n*=N,t*=N,Dt=n,Gt=m(t=t/2+nt),Ot=w(t)}function Yr(n,t){n*=N,t*=N,t=t/2+nt;var i=n-Dt,r=i>=0?1:-1,e=r*i,o=m(t),u=w(t),c=Ot*u,f=Gt*o+c*m(e),p=c*r*w(e);et.add(Q(p,f)),Dt=n,Gt=o,Ot=u}function Wi(n){return ot=new k,an(n,fn),ot*2}function ut(n){return[Q(n[1],n[0]),J(n[2])]}function wn(n){var t=n[0],i=n[1],r=m(i);return[r*m(t),r*w(t),w(i)]}function at(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Nn(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Zt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ct(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ft(n){var t=H(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var G,nn,Z,tn,Pn,Xr,Fr,An,Tn,dn,vn,En={point:Wt,lineStart:Gr,lineEnd:Or,polygonStart:function(){En.point=Zr,En.lineStart=Bi,En.lineEnd=Hi,Tn=new k,fn.polygonStart()},polygonEnd:function(){fn.polygonEnd(),En.point=Wt,En.lineStart=Gr,En.lineEnd=Or,et<0?(G=-(Z=180),nn=-(tn=90)):Tn>$?tn=90:Tn<-$&&(nn=-90),vn[0]=G,vn[1]=Z},sphere:function(){G=-(Z=180),nn=-(tn=90)}};function Wt(n,t){dn.push(vn=[G=n,Z=n]),t<nn&&(nn=t),t>tn&&(tn=t)}function Dr(n,t){var i=wn([n*N,t*N]);if(An){var r=Nn(An,i),e=[r[1],-r[0],0],o=Nn(e,r);ft(o),o=ut(o);var u=n-Pn,c=u>0?1:-1,f=o[0]*X*c,p,a=C(u)>180;a^(c*Pn<f&&f<c*n)?(p=o[1]*X,p>tn&&(tn=p)):(f=(f+360)%360-180,a^(c*Pn<f&&f<c*n))?(p=-o[1]*X,p<nn&&(nn=p)):(t<nn&&(nn=t),t>tn&&(tn=t)),a?n<Pn?rn(G,n)>rn(G,Z)&&(Z=n):rn(n,Z)>rn(G,Z)&&(G=n):Z>=G?(n<G&&(G=n),n>Z&&(Z=n)):n>Pn?rn(G,n)>rn(G,Z)&&(Z=n):rn(n,Z)>rn(G,Z)&&(G=n)}else dn.push(vn=[G=n,Z=n]);t<nn&&(nn=t),t>tn&&(tn=t),An=i,Pn=n}function Gr(){En.point=Dr}function Or(){vn[0]=G,vn[1]=Z,En.point=Wt,An=null}function Zr(n,t){if(An){var i=n-Pn;Tn.add(C(i)>180?i+(i>0?360:-360):i)}else Xr=n,Fr=t;fn.point(n,t),Dr(n,t)}function Bi(){fn.lineStart()}function Hi(){Zr(Xr,Fr),fn.lineEnd(),C(Tn)>$&&(G=-(Z=180)),vn[0]=G,vn[1]=Z,An=null}function rn(n,t){return(t-=n)<0?t+360:t}function ki(n,t){return n[0]-t[0]}function Wr(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}function Ui(n){var t,i,r,e,o,u,c;if(tn=Z=-(G=nn=Infinity),dn=[],an(n,En),i=dn.length){for(dn.sort(ki),t=1,r=dn[0],o=[r];t<i;++t)e=dn[t],Wr(r,e[0])||Wr(r,e[1])?(rn(r[0],e[1])>rn(r[0],r[1])&&(r[1]=e[1]),rn(e[0],r[1])>rn(r[0],r[1])&&(r[0]=e[0])):o.push(r=e);for(u=-Infinity,i=o.length-1,t=0,r=o[i];t<=i;r=e,++t)e=o[t],(c=rn(r[1],e[0]))>u&&(u=c,G=e[0],Z=r[1])}return dn=vn=null,G===Infinity||nn===Infinity?[[NaN,NaN],[NaN,NaN]]:[[G,nn],[Z,tn]]}var Yn,lt,st,pt,gt,ht,vt,Et,Bt,Ht,kt,Br,Hr,K,V,j,cn={sphere:D,point:Ut,lineStart:kr,lineEnd:Ur,polygonStart:function(){cn.lineStart=Ki,cn.lineEnd=Vi},polygonEnd:function(){cn.lineStart=kr,cn.lineEnd=Ur}};function Ut(n,t){n*=N,t*=N;var i=m(t);Xn(i*m(n),i*w(n),w(t))}function Xn(n,t,i){++Yn,st+=(n-st)/Yn,pt+=(t-pt)/Yn,gt+=(i-gt)/Yn}function kr(){cn.point=Qi}function Qi(n,t){n*=N,t*=N;var i=m(t);K=i*m(n),V=i*w(n),j=w(t),cn.point=Ji,Xn(K,V,j)}function Ji(n,t){n*=N,t*=N;var i=m(t),r=i*m(n),e=i*w(n),o=w(t),u=Q(H((u=V*o-j*e)*u+(u=j*r-K*o)*u+(u=K*e-V*r)*u),K*r+V*e+j*o);lt+=u,ht+=u*(K+(K=r)),vt+=u*(V+(V=e)),Et+=u*(j+(j=o)),Xn(K,V,j)}function Ur(){cn.point=Ut}function Ki(){cn.point=ji}function Vi(){Qr(Br,Hr),cn.point=Ut}function ji(n,t){Br=n,Hr=t,n*=N,t*=N,cn.point=Qr;var i=m(t);K=i*m(n),V=i*w(n),j=w(t),Xn(K,V,j)}function Qr(n,t){n*=N,t*=N;var i=m(t),r=i*m(n),e=i*w(n),o=w(t),u=V*o-j*e,c=j*r-K*o,f=K*e-V*r,p=Tt(u,c,f),a=J(p),s=p&&-a/p;Bt.add(s*u),Ht.add(s*c),kt.add(s*f),lt+=a,ht+=a*(K+(K=r)),vt+=a*(V+(V=e)),Et+=a*(j+(j=o)),Xn(K,V,j)}function _i(n){Yn=lt=st=pt=gt=ht=vt=Et=0,Bt=new k,Ht=new k,kt=new k,an(n,cn);var t=+Bt,i=+Ht,r=+kt,e=Tt(t,i,r);return e<xn&&(t=ht,i=vt,r=Et,lt<$&&(t=st,i=pt,r=gt),e=Tt(t,i,r),e<xn)?[NaN,NaN]:[Q(i,t)*X,J(r/e)*X]}function zn(n){return function(){return n}}function Qt(n,t){function i(r,e){return r=n(r,e),t(r[0],r[1])}return n.invert&&t.invert&&(i.invert=function(r,e){return r=t.invert(r,e),r&&n.invert(r[0],r[1])}),i}function Jt(n,t){return[C(n)>L?n+Math.round(-n/U)*U:n,t]}Jt.invert=Jt;function Kt(n,t,i){return(n%=U)?t||i?Qt(Kr(n),Vr(t,i)):Kr(n):t||i?Vr(t,i):Jt}function Jr(n){return function(t,i){return t+=n,[t>L?t-U:t<-L?t+U:t,i]}}function Kr(n){var t=Jr(n);return t.invert=Jr(-n),t}function Vr(n,t){var i=m(n),r=w(n),e=m(t),o=w(t);function u(c,f){var p=m(f),a=m(c)*p,s=w(c)*p,l=w(f),g=l*i+a*r;return[Q(s*e-g*o,a*i-l*r),J(g*e+s*o)]}return u.invert=function(c,f){var p=m(f),a=m(c)*p,s=w(c)*p,l=w(f),g=l*e-s*o;return[Q(s*e+l*o,a*i+g*r),J(g*i-a*r)]},u}function jr(n){n=Kt(n[0]*N,n[1]*N,n.length>2?n[2]*N:0);function t(i){return i=n(i[0]*N,i[1]*N),i[0]*=X,i[1]*=X,i}return t.invert=function(i){return i=n.invert(i[0]*N,i[1]*N),i[0]*=X,i[1]*=X,i},t}function _r(n,t,i,r,e,o){if(!i)return;var u=m(t),c=w(t),f=r*i;e==null?(e=t+r*U,o=t-f/2):(e=br(u,e),o=br(u,o),(r>0?e<o:e>o)&&(e+=r*U));for(var p,a=e;r>0?a>o:a<o;a-=f)p=ut([u,-c*m(a),-c*w(a)]),n.point(p[0],p[1])}function br(n,t){t=wn(t),t[0]-=n,ft(t);var i=zr(-t[1]);return((-t[2]<0?-i:i)+U-$)%U}function bi(){var n=zn([0,0]),t=zn(90),i=zn(6),r,e,o={point:u};function u(f,p){r.push(f=e(f,p)),f[0]*=X,f[1]*=X}function c(){var f=n.apply(this,arguments),p=t.apply(this,arguments)*N,a=i.apply(this,arguments)*N;return r=[],e=Kt(-f[0]*N,-f[1]*N,0).invert,_r(o,p,a,1),f={type:"Polygon",coordinates:[r]},r=e=null,f}return c.center=function(f){return arguments.length?(n=typeof f=="function"?f:zn([+f[0],+f[1]]),c):n},c.radius=function(f){return arguments.length?(t=typeof f=="function"?f:zn(+f),c):t},c.precision=function(f){return arguments.length?(i=typeof f=="function"?f:zn(+f),c):i},c}function ni(){var n=[],t;return{point:function(i,r,e){t.push([i,r,e])},lineStart:function(){n.push(t=[])},lineEnd:D,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var i=n;return n=[],t=null,i}}}function St(n,t){return C(n[0]-t[0])<$&&C(n[1]-t[1])<$}function dt(n,t,i,r){this.x=n,this.z=t,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function ti(n,t,i,r,e){var o=[],u=[],c,f;if(n.forEach(function(h){if((y=h.length-1)<=0)return;var y,d=h[0],P=h[y],M;if(St(d,P)){if(!d[2]&&!P[2]){for(e.lineStart(),c=0;c<y;++c)e.point((d=h[c])[0],d[1]);e.lineEnd();return}P[0]+=2*$}o.push(M=new dt(d,h,null,!0)),u.push(M.o=new dt(d,null,M,!1)),o.push(M=new dt(P,h,null,!1)),u.push(M.o=new dt(P,null,M,!0))}),!o.length)return;for(u.sort(t),ri(o),ri(u),c=0,f=u.length;c<f;++c)u[c].e=i=!i;for(var p=o[0],a,s;;){for(var l=p,g=!0;l.v;)if((l=l.n)===p)return;a=l.z,e.lineStart();do{if(l.v=l.o.v=!0,l.e){if(g)for(c=0,f=a.length;c<f;++c)e.point((s=a[c])[0],s[1]);else r(l.x,l.n.x,1,e);l=l.n}else{if(g)for(a=l.p.z,c=a.length-1;c>=0;--c)e.point((s=a[c])[0],s[1]);else r(l.x,l.p.x,-1,e);l=l.p}l=l.o,a=l.z,g=!g}while(!l.v);e.lineEnd()}}function ri(n){if(!(t=n.length))return;for(var t,i=0,r=n[0],e;++i<t;)r.n=e=n[i],e.p=r,r=e;r.n=e=n[0],e.p=r}function Vt(n){return C(n[0])<=L?n[0]:on(n[0])*((C(n[0])+L)%U-L)}function ii(n,t){var i=Vt(t),r=t[1],e=w(r),o=[w(i),-m(i),0],u=0,c=0,f=new k;e===1?r=O+$:e===-1&&(r=-O-$);for(var p=0,a=n.length;p<a;++p){if(!(l=(s=n[p]).length))continue;for(var s,l,g=s[l-1],h=Vt(g),y=g[1]/2+nt,d=w(y),P=m(y),M=0;M<l;++M,h=E,d=A,P=I,g=v){var v=s[M],E=Vt(v),R=v[1]/2+nt,A=w(R),I=m(R),x=E-h,T=x>=0?1:-1,F=T*x,z=F>L,_=d*A;if(f.add(Q(_*T*w(F),P*I+_*m(F))),u+=z?x+T*U:x,z^h>=i^E>=i){var W=Nn(wn(g),wn(v));ft(W);var Y=Nn(o,W);ft(Y);var S=(z^x>=0?-1:1)*J(Y[2]);(r>S||r===S&&(W[0]||W[1]))&&(c+=z^x>=0?1:-1)}}}return(u<-$||u<$&&f<-xn)^c&1}function ei(n,t,i,r){return function(e){var o=t(e),u=ni(),c=t(u),f=!1,p,a,s,l={point:g,lineStart:y,lineEnd:d,polygonStart:function(){l.point=P,l.lineStart=M,l.lineEnd=v,a=[],p=[]},polygonEnd:function(){l.point=g,l.lineStart=y,l.lineEnd=d,a=Nr(a);var E=ii(p,r);a.length?(f||(e.polygonStart(),f=!0),ti(a,te,E,i,e)):E&&(f||(e.polygonStart(),f=!0),e.lineStart(),i(null,null,1,e),e.lineEnd()),f&&(e.polygonEnd(),f=!1),a=p=null},sphere:function(){e.polygonStart(),e.lineStart(),i(null,null,1,e),e.lineEnd(),e.polygonEnd()}};function g(E,R){n(E,R)&&e.point(E,R)}function h(E,R){o.point(E,R)}function y(){l.point=h,o.lineStart()}function d(){l.point=g,o.lineEnd()}function P(E,R){s.push([E,R]),c.point(E,R)}function M(){c.lineStart(),s=[]}function v(){P(s[0][0],s[0][1]),c.lineEnd();var E=c.clean(),R=u.result(),A,I=R.length,x,T,F;if(s.pop(),p.push(s),s=null,!I)return;if(E&1){if(T=R[0],(x=T.length-1)>0){for(f||(e.polygonStart(),f=!0),e.lineStart(),A=0;A<x;++A)e.point((F=T[A])[0],F[1]);e.lineEnd()}return}I>1&&E&2&&R.push(R.pop().concat(R.shift())),a.push(R.filter(ne))}return l}}function ne(n){return n.length>1}function te(n,t){return((n=n.x)[0]<0?n[1]-O-$:O-n[1])-((t=t.x)[0]<0?t[1]-O-$:O-t[1])}var jt=ei(function(){return!0},re,ee,[-L,-O]);function re(n){var t=NaN,i=NaN,r=NaN,e;return{lineStart:function(){n.lineStart(),e=1},point:function(o,u){var c=o>0?L:-L,f=C(o-t);C(f-L)<$?(n.point(t,i=(i+u)/2>0?O:-O),n.point(r,i),n.lineEnd(),n.lineStart(),n.point(c,i),n.point(o,i),e=0):r!==c&&f>=L&&(C(t-r)<$&&(t-=r*$),C(o-c)<$&&(o-=c*$),i=ie(t,i,o,u),n.point(r,i),n.lineEnd(),n.lineStart(),n.point(c,i),e=0),n.point(t=o,i=u),r=c},lineEnd:function(){n.lineEnd(),t=i=NaN},clean:function(){return 2-e}}}function ie(n,t,i,r){var e,o,u=w(n-i);return C(u)>$?$n((w(t)*(o=m(r))*w(i)-w(r)*(e=m(t))*w(n))/(e*o*u)):(t+r)/2}function ee(n,t,i,r){var e;if(n==null)e=i*O,r.point(-L,e),r.point(0,e),r.point(L,e),r.point(L,0),r.point(L,-e),r.point(0,-e),r.point(-L,-e),r.point(-L,0),r.point(-L,e);else if(C(n[0]-t[0])>$){var o=n[0]<t[0]?L:-L;e=i*o/2,r.point(-o,e),r.point(0,e),r.point(o,e)}else r.point(t[0],t[1])}function oi(n){var t=m(n),i=6*N,r=t>0,e=C(t)>$;function o(a,s,l,g){_r(g,n,i,l,a,s)}function u(a,s){return m(a)*m(s)>t}function c(a){var s,l,g,h,y;return{lineStart:function(){h=g=!1,y=1},point:function(d,P){var M=[d,P],v,E=u(d,P),R=r?E?0:p(d,P):E?p(d+(d<0?L:-L),P):0;if(!s&&(h=g=E)&&a.lineStart(),E!==g&&(v=f(s,M),(!v||St(s,v)||St(M,v))&&(M[2]=1)),E!==g)y=0,E?(a.lineStart(),v=f(M,s),a.point(v[0],v[1])):(v=f(s,M),a.point(v[0],v[1],2),a.lineEnd()),s=v;else if(e&&s&&r^E){var A;!(R&l)&&(A=f(M,s,!0))&&(y=0,r?(a.lineStart(),a.point(A[0][0],A[0][1]),a.point(A[1][0],A[1][1]),a.lineEnd()):(a.point(A[1][0],A[1][1]),a.lineEnd(),a.lineStart(),a.point(A[0][0],A[0][1],3)))}E&&(!s||!St(s,M))&&a.point(M[0],M[1]),s=M,g=E,l=R},lineEnd:function(){g&&a.lineEnd(),s=null},clean:function(){return y|(h&&g)<<1}}}function f(a,s,l){var g=wn(a),h=wn(s),y=[1,0,0],d=Nn(g,h),P=at(d,d),M=d[0],v=P-M*M;if(!v)return!l&&a;var E=t*P/v,R=-t*M/v,A=Nn(y,d),I=ct(y,E),x=ct(d,R);Zt(I,x);var T=A,F=at(I,T),z=at(T,T),_=F*F-z*(at(I,I)-1);if(_<0)return;var W=H(_),Y=ct(T,(-F-W)/z);if(Zt(Y,I),Y=ut(Y),!l)return Y;var S=a[0],q=s[0],B=a[1],b=s[1],en;q<S&&(en=S,S=q,q=en);var In=q-S,gn=C(In-L)<$,yn=gn||In<$;if(!gn&&b<B&&(en=B,B=b,b=en),yn?gn?B+b>0^Y[1]<(C(Y[0]-S)<$?B:b):B<=Y[1]&&Y[1]<=b:In>L^(S<=Y[0]&&Y[0]<=q)){var hn=ct(T,(-F+W)/z);return Zt(hn,I),[Y,ut(hn)]}}function p(a,s){var l=r?n:L-n,g=0;return a<-l?g|=1:a>l&&(g|=2),s<-l?g|=4:s>l&&(g|=8),g}return ei(u,c,o,r?[0,-n]:[-L,n-L])}function oe(n,t,i,r,e,o){var u=n[0],c=n[1],f=t[0],p=t[1],a=0,s=1,l=f-u,g=p-c,h;if(h=i-u,!l&&h>0)return;if(h/=l,l<0){if(h<a)return;h<s&&(s=h)}else if(l>0){if(h>s)return;h>a&&(a=h)}if(h=e-u,!l&&h<0)return;if(h/=l,l<0){if(h>s)return;h>a&&(a=h)}else if(l>0){if(h<a)return;h<s&&(s=h)}if(h=r-c,!g&&h>0)return;if(h/=g,g<0){if(h<a)return;h<s&&(s=h)}else if(g>0){if(h>s)return;h>a&&(a=h)}if(h=o-c,!g&&h<0)return;if(h/=g,g<0){if(h>s)return;h>a&&(a=h)}else if(g>0){if(h<a)return;h<s&&(s=h)}return a>0&&(n[0]=u+a*l,n[1]=c+a*g),s<1&&(t[0]=u+s*l,t[1]=c+s*g),!0}var Fn=1e9,yt=-Fn;function wt(n,t,i,r){function e(p,a){return n<=p&&p<=i&&t<=a&&a<=r}function o(p,a,s,l){var g=0,h=0;if(p==null||(g=u(p,s))!==(h=u(a,s))||f(p,a)<0^s>0)do l.point(g===0||g===3?n:i,g>1?r:t);while((g=(g+s+4)%4)!==h);else l.point(a[0],a[1])}function u(p,a){return C(p[0]-n)<$?a>0?0:3:C(p[0]-i)<$?a>0?2:1:C(p[1]-t)<$?a>0?1:0:a>0?3:2}function c(p,a){return f(p.x,a.x)}function f(p,a){var s=u(p,1),l=u(a,1);return s!==l?s-l:s===0?a[1]-p[1]:s===1?p[0]-a[0]:s===2?p[1]-a[1]:a[0]-p[0]}return function(p){var a=p,s=ni(),l,g,h,y,d,P,M,v,E,R,A,I={point:x,lineStart:_,lineEnd:W,polygonStart:F,polygonEnd:z};function x(S,q){e(S,q)&&a.point(S,q)}function T(){for(var S=0,q=0,B=g.length;q<B;++q)for(var b=g[q],en=1,In=b.length,gn=b[0],yn,hn,bn=gn[0],Mn=gn[1];en<In;++en)yn=bn,hn=Mn,gn=b[en],bn=gn[0],Mn=gn[1],hn<=r?Mn>r&&(bn-yn)*(r-hn)>(Mn-hn)*(n-yn)&&++S:Mn<=r&&(bn-yn)*(r-hn)<(Mn-hn)*(n-yn)&&--S;return S}function F(){a=s,l=[],g=[],A=!0}function z(){var S=T(),q=A&&S,B=(l=Nr(l)).length;(q||B)&&(p.polygonStart(),q&&(p.lineStart(),o(null,null,1,p),p.lineEnd()),B&&ti(l,c,S,o,p),p.polygonEnd()),a=p,l=g=h=null}function _(){I.point=Y,g&&g.push(h=[]),R=!0,E=!1,M=v=NaN}function W(){l&&(Y(y,d),P&&E&&s.rejoin(),l.push(s.result())),I.point=x,E&&a.lineEnd()}function Y(S,q){var B=e(S,q);if(g&&h.push([S,q]),R)y=S,d=q,P=B,R=!1,B&&(a.lineStart(),a.point(S,q));else if(B&&E)a.point(S,q);else{var b=[M=Math.max(yt,Math.min(Fn,M)),v=Math.max(yt,Math.min(Fn,v))],en=[S=Math.max(yt,Math.min(Fn,S)),q=Math.max(yt,Math.min(Fn,q))];oe(b,en,n,t,i,r)?(E||(a.lineStart(),a.point(b[0],b[1])),a.point(en[0],en[1]),B||a.lineEnd(),A=!1):B&&(a.lineStart(),a.point(S,q),A=!1)}M=S,v=q,E=B}return I}}function ue(){var n=0,t=0,i=960,r=500,e,o,u;return u={stream:function(c){return e&&o===c?e:e=wt(n,t,i,r)(o=c)},extent:function(c){return arguments.length?(n=+c[0][0],t=+c[0][1],i=+c[1][0],r=+c[1][1],e=o=null,u):[[n,t],[i,r]]}}}var _t,bt,Pt,Rt,Ln={sphere:D,point:D,lineStart:ae,lineEnd:D,polygonStart:D,polygonEnd:D};function ae(){Ln.point=fe,Ln.lineEnd=ce}function ce(){Ln.point=Ln.lineEnd=D}function fe(n,t){n*=N,t*=N,bt=n,Pt=w(t),Rt=m(t),Ln.point=le}function le(n,t){n*=N,t*=N;var i=w(t),r=m(t),e=C(n-bt),o=m(e),u=w(e),c=r*u,f=Rt*i-Pt*r*o,p=Pt*i+Rt*r*o;_t.add(Q(H(c*c+f*f),p)),bt=n,Pt=i,Rt=r}function ui(n){return _t=new k,an(n,Ln),+_t}var nr=[null,null],se={type:"LineString",coordinates:nr};function Mt(n,t){return nr[0]=n,nr[1]=t,ui(se)}var ai={Feature:function(n,t){return mt(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,r=-1,e=i.length;++r<e;)if(mt(i[r].geometry,t))return!0;return!1}},ci={Sphere:function(){return!0},Point:function(n,t){return fi(n.coordinates,t)},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)if(fi(i[r],t))return!0;return!1},LineString:function(n,t){return li(n.coordinates,t)},MultiLineString:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)if(li(i[r],t))return!0;return!1},Polygon:function(n,t){return si(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)if(si(i[r],t))return!0;return!1},GeometryCollection:function(n,t){for(var i=n.geometries,r=-1,e=i.length;++r<e;)if(mt(i[r],t))return!0;return!1}};function mt(n,t){return n&&ci.hasOwnProperty(n.type)?ci[n.type](n,t):!1}function fi(n,t){return Mt(n,t)===0}function li(n,t){for(var i,r,e,o=0,u=n.length;o<u;o++){if(r=Mt(n[o],t),r===0)return!0;if(o>0&&(e=Mt(n[o],n[o-1]),e>0&&i<=e&&r<=e&&(i+r-e)*(1-Math.pow((i-r)/e,2))<xn*e))return!0;i=r}return!1}function si(n,t){return!!ii(n.map(pe),pi(t))}function pe(n){return n=n.map(pi),n.pop(),n}function pi(n){return[n[0]*N,n[1]*N]}function ge(n,t){return(n&&ai.hasOwnProperty(n.type)?ai[n.type]:mt)(n,t)}function gi(n,t,i){var r=mn(n,t-$,i).concat(t);return function(e){return r.map(function(o){return[e,o]})}}function hi(n,t,i){var r=mn(n,t-$,i).concat(t);return function(e){return r.map(function(o){return[o,e]})}}function vi(){var n,t,i,r,e,o,u,c,f=10,p=f,a=90,s=360,l,g,h,y,d=2.5;function P(){return{type:"MultiLineString",coordinates:M()}}function M(){return mn(tt(r/a)*a,i,a).map(h).concat(mn(tt(c/s)*s,u,s).map(y)).concat(mn(tt(t/f)*f,n,f).filter(function(v){return C(v%a)>$}).map(l)).concat(mn(tt(o/p)*p,e,p).filter(function(v){return C(v%s)>$}).map(g))}return P.lines=function(){return M().map(function(v){return{type:"LineString",coordinates:v}})},P.outline=function(){return{type:"Polygon",coordinates:[h(r).concat(y(u).slice(1),h(i).reverse().slice(1),y(c).reverse().slice(1))]}},P.extent=function(v){return arguments.length?P.extentMajor(v).extentMinor(v):P.extentMinor()},P.extentMajor=function(v){return arguments.length?(r=+v[0][0],i=+v[1][0],c=+v[0][1],u=+v[1][1],r>i&&(v=r,r=i,i=v),c>u&&(v=c,c=u,u=v),P.precision(d)):[[r,c],[i,u]]},P.extentMinor=function(v){return arguments.length?(t=+v[0][0],n=+v[1][0],o=+v[0][1],e=+v[1][1],t>n&&(v=t,t=n,n=v),o>e&&(v=o,o=e,e=v),P.precision(d)):[[t,o],[n,e]]},P.step=function(v){return arguments.length?P.stepMajor(v).stepMinor(v):P.stepMinor()},P.stepMajor=function(v){return arguments.length?(a=+v[0],s=+v[1],P):[a,s]},P.stepMinor=function(v){return arguments.length?(f=+v[0],p=+v[1],P):[f,p]},P.precision=function(v){return arguments.length?(d=+v,l=gi(o,e,90),g=hi(t,n,d),h=gi(c,u,90),y=hi(r,i,d),P):d},P.extentMajor([[-180,-90+$],[180,90-$]]).extentMinor([[-180,-80-$],[180,80+$]])}function he(){return vi()()}function ve(n,t){var i=n[0]*N,r=n[1]*N,e=t[0]*N,o=t[1]*N,u=m(r),c=w(r),f=m(o),p=w(o),a=u*m(i),s=u*w(i),l=f*m(e),g=f*w(e),h=2*J(H(Lr(o-r)+u*f*Lr(e-i))),y=w(h),d=h?function(P){var M=w(P*=h)/y,v=w(h-P)/y,E=v*a+M*l,R=v*s+M*g,A=v*c+M*p;return[Q(R,E)*X,Q(A,H(E*E+R*R))*X]}:function(){return[i*X,r*X]};return d.distance=h,d}var Dn=n=>n,tr=new k,rr=new k,Ei,Si,ir,er,Sn={point:D,lineStart:D,lineEnd:D,polygonStart:function(){Sn.lineStart=Ee,Sn.lineEnd=de},polygonEnd:function(){Sn.lineStart=Sn.lineEnd=Sn.point=D,tr.add(C(rr)),rr=new k},result:function(){var n=tr/2;return tr=new k,n}};function Ee(){Sn.point=Se}function Se(n,t){Sn.point=di,Ei=ir=n,Si=er=t}function di(n,t){rr.add(er*n-ir*t),ir=n,er=t}function de(){di(Ei,Si)}var qn=Infinity,$t=qn,Gn=-qn,Nt=Gn,At={point:ye,lineStart:D,lineEnd:D,polygonStart:D,polygonEnd:D,result:function(){var n=[[qn,$t],[Gn,Nt]];return Gn=Nt=-($t=qn=Infinity),n}};function ye(n,t){n<qn&&(qn=n),n>Gn&&(Gn=n),t<$t&&($t=t),t>Nt&&(Nt=t)}var or=0,ur=0,On=0,zt=0,Lt=0,Cn=0,ar=0,cr=0,Zn=0,yi,wi,ln,sn,un={point:Rn,lineStart:Pi,lineEnd:Ri,polygonStart:function(){un.lineStart=Re,un.lineEnd=Me},polygonEnd:function(){un.point=Rn,un.lineStart=Pi,un.lineEnd=Ri},result:function(){var n=Zn?[ar/Zn,cr/Zn]:Cn?[zt/Cn,Lt/Cn]:On?[or/On,ur/On]:[NaN,NaN];return or=ur=On=zt=Lt=Cn=ar=cr=Zn=0,n}};function Rn(n,t){or+=n,ur+=t,++On}function Pi(){un.point=we}function we(n,t){un.point=Pe,Rn(ln=n,sn=t)}function Pe(n,t){var i=n-ln,r=t-sn,e=H(i*i+r*r);zt+=e*(ln+n)/2,Lt+=e*(sn+t)/2,Cn+=e,Rn(ln=n,sn=t)}function Ri(){un.point=Rn}function Re(){un.point=me}function Me(){Mi(yi,wi)}function me(n,t){un.point=Mi,Rn(yi=ln=n,wi=sn=t)}function Mi(n,t){var i=n-ln,r=t-sn,e=H(i*i+r*r);zt+=e*(ln+n)/2,Lt+=e*(sn+t)/2,Cn+=e,e=sn*n-ln*t,ar+=e*(ln+n),cr+=e*(sn+t),Zn+=e*3,Rn(ln=n,sn=t)}function mi(n){this._context=n}mi.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,U);break}}},result:D};var fr=new k,lr,$i,Ni,Wn,Bn,Hn={point:D,lineStart:function(){Hn.point=$e},lineEnd:function(){lr&&Ai($i,Ni),Hn.point=D},polygonStart:function(){lr=!0},polygonEnd:function(){lr=null},result:function(){var n=+fr;return fr=new k,n}};function $e(n,t){Hn.point=Ai,$i=Wn=n,Ni=Bn=t}function Ai(n,t){Wn-=n,Bn-=t,fr.add(H(Wn*Wn+Bn*Bn)),Wn=n,Bn=t}function zi(){this._string=[]}zi.prototype={_radius:4.5,_circle:Li(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._string.push("M",n,",",t),this._point=1;break}case 1:{this._string.push("L",n,",",t);break}default:{this._circle==null&&(this._circle=Li(this._radius)),this._string.push("M",n,",",t,this._circle);break}}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}else return null}};function Li(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ne(n,t){var i=4.5,r,e;function o(u){return u&&(typeof i=="function"&&e.pointRadius(+i.apply(this,arguments)),an(u,r(e))),e.result()}return o.area=function(u){return an(u,r(Sn)),Sn.result()},o.measure=function(u){return an(u,r(Hn)),Hn.result()},o.bounds=function(u){return an(u,r(At)),At.result()},o.centroid=function(u){return an(u,r(un)),un.result()},o.projection=function(u){return arguments.length?(r=u==null?(n=null,Dn):(n=u).stream,o):n},o.context=function(u){return arguments.length?(e=u==null?(t=null,new zi):new mi(t=u),typeof i!="function"&&e.pointRadius(i),o):t},o.pointRadius=function(u){return arguments.length?(i=typeof u=="function"?u:(e.pointRadius(+u),+u),o):i},o.projection(n).context(t)}function Ae(n){return{stream:kn(n)}}function kn(n){return function(t){var i=new sr;for(var r in n)i[r]=n[r];return i.stream=t,i}}function sr(){}sr.prototype={constructor:sr,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function pr(n,t,i){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),r!=null&&n.clipExtent(null),an(i,n.stream(At)),t(At.result()),r!=null&&n.clipExtent(r),n}function qt(n,t,i){return pr(n,function(r){var e=t[1][0]-t[0][0],o=t[1][1]-t[0][1],u=Math.min(e/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),c=+t[0][0]+(e-u*(r[1][0]+r[0][0]))/2,f=+t[0][1]+(o-u*(r[1][1]+r[0][1]))/2;n.scale(150*u).translate([c,f])},i)}function gr(n,t,i){return qt(n,[[0,0],t],i)}function hr(n,t,i){return pr(n,function(r){var e=+t,o=e/(r[1][0]-r[0][0]),u=(e-o*(r[1][0]+r[0][0]))/2,c=-o*r[0][1];n.scale(150*o).translate([u,c])},i)}function vr(n,t,i){return pr(n,function(r){var e=+t,o=e/(r[1][1]-r[0][1]),u=-o*r[0][0],c=(e-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([u,c])},i)}var qi=16,ze=m(30*N);function Ci(n,t){return+t?qe(n,t):Le(n)}function Le(n){return kn({point:function(t,i){t=n(t,i),this.stream.point(t[0],t[1])}})}function qe(n,t){function i(r,e,o,u,c,f,p,a,s,l,g,h,y,d){var P=p-r,M=a-e,v=P*P+M*M;if(v>4*t&&y--){var E=u+l,R=c+g,A=f+h,I=H(E*E+R*R+A*A),x=J(A/=I),T=C(C(A)-1)<$||C(o-s)<$?(o+s)/2:Q(R,E),F=n(T,x),z=F[0],_=F[1],W=z-r,Y=_-e,S=M*W-P*Y;(S*S/v>t||C((P*W+M*Y)/v-.5)>.3||u*l+c*g+f*h<ze)&&(i(r,e,o,u,c,f,z,_,T,E/=I,R/=I,A,y,d),d.point(z,_),i(z,_,T,E,R,A,p,a,s,l,g,h,y,d))}}return function(r){var e,o,u,c,f,p,a,s,l,g,h,y,d={point:P,lineStart:M,lineEnd:E,polygonStart:function(){r.polygonStart(),d.lineStart=R},polygonEnd:function(){r.polygonEnd(),d.lineStart=M}};function P(x,T){x=n(x,T),r.point(x[0],x[1])}function M(){s=NaN,d.point=v,r.lineStart()}function v(x,T){var F=wn([x,T]),z=n(x,T);i(s,l,a,g,h,y,s=z[0],l=z[1],a=x,g=F[0],h=F[1],y=F[2],qi,r),r.point(s,l)}function E(){d.point=P,r.lineEnd()}function R(){M(),d.point=A,d.lineEnd=I}function A(x,T){v(e=x,T),o=s,u=l,c=g,f=h,p=y,d.point=v}function I(){i(s,l,a,g,h,y,o,u,e,c,f,p,qi,r),d.lineEnd=E,E()}return d}}var Ce=kn({point:function(n,t){this.stream.point(n*N,t*N)}});function Ie(n){return kn({point:function(t,i){var r=n(t,i);return this.stream.point(r[0],r[1])}})}function xe(n,t,i,r,e){function o(u,c){return u*=r,c*=e,[t+n*u,i-n*c]}return o.invert=function(u,c){return[(u-t)/n*r,(i-c)/n*e]},o}function Ii(n,t,i,r,e,o){if(!o)return xe(n,t,i,r,e);var u=m(o),c=w(o),f=u*n,p=c*n,a=u/n,s=c/n,l=(c*i-u*t)/n,g=(c*t+u*i)/n;function h(y,d){return y*=r,d*=e,[f*y-p*d+t,i-p*y-f*d]}return h.invert=function(y,d){return[r*(a*y-s*d+l),e*(g-s*y-a*d)]},h}function pn(n){return Er(function(){return n})()}function Er(n){var t,i=150,r=480,e=250,o=0,u=0,c=0,f=0,p=0,a,s=0,l=1,g=1,h=null,y=jt,d=null,P,M,v,E=Dn,R=.5,A,I,x,T,F;function z(S){return x(S[0]*N,S[1]*N)}function _(S){return S=x.invert(S[0],S[1]),S&&[S[0]*X,S[1]*X]}z.stream=function(S){return T&&F===S?T:T=Ce(Ie(a)(y(A(E(F=S)))))},z.preclip=function(S){return arguments.length?(y=S,h=void 0,Y()):y},z.postclip=function(S){return arguments.length?(E=S,d=P=M=v=null,Y()):E},z.clipAngle=function(S){return arguments.length?(y=+S?oi(h=S*N):(h=null,jt),Y()):h*X},z.clipExtent=function(S){return arguments.length?(E=S==null?(d=P=M=v=null,Dn):wt(d=+S[0][0],P=+S[0][1],M=+S[1][0],v=+S[1][1]),Y()):d==null?null:[[d,P],[M,v]]},z.scale=function(S){return arguments.length?(i=+S,W()):i},z.translate=function(S){return arguments.length?(r=+S[0],e=+S[1],W()):[r,e]},z.center=function(S){return arguments.length?(o=S[0]%360*N,u=S[1]%360*N,W()):[o*X,u*X]},z.rotate=function(S){return arguments.length?(c=S[0]%360*N,f=S[1]%360*N,p=S.length>2?S[2]%360*N:0,W()):[c*X,f*X,p*X]},z.angle=function(S){return arguments.length?(s=S%360*N,W()):s*X},z.reflectX=function(S){return arguments.length?(l=S?-1:1,W()):l<0},z.reflectY=function(S){return arguments.length?(g=S?-1:1,W()):g<0},z.precision=function(S){return arguments.length?(A=Ci(I,R=S*S),Y()):H(R)},z.fitExtent=function(S,q){return qt(z,S,q)},z.fitSize=function(S,q){return gr(z,S,q)},z.fitWidth=function(S,q){return hr(z,S,q)},z.fitHeight=function(S,q){return vr(z,S,q)};function W(){var S=Ii(i,0,0,l,g,s).apply(null,t(o,u)),q=Ii(i,r-S[0],e-S[1],l,g,s);return a=Kt(c,f,p),I=Qt(t,q),x=Qt(a,I),A=Ci(I,R),Y()}function Y(){return T=F=null,z}return function(){return t=n.apply(this,arguments),z.invert=t.invert&&_,W()}}function Sr(n){var t=0,i=L/3,r=Er(n),e=r(t,i);return e.parallels=function(o){return arguments.length?r(t=o[0]*N,i=o[1]*N):[t*X,i*X]},e}function Te(n){var t=m(n);function i(r,e){return[r*t,w(e)/t]}return i.invert=function(r,e){return[r/t,J(e*t)]},i}function xi(n,t){var i=w(n),r=(i+w(t))/2;if(C(r)<$)return Te(n);var e=1+i*(2*r-i),o=H(e)/r;function u(c,f){var p=H(e-2*r*w(f))/r;return[p*w(c*=r),o-p*m(c)]}return u.invert=function(c,f){var p=o-f,a=Q(c,C(p))*on(p);return p*r<0&&(a-=L*on(c)*on(p)),[a/r,J((e-(c*c+p*p)*r*r)/(2*r))]},u}function Ct(){return Sr(xi).scale(155.424).center([0,33.6442])}function Ti(){return Ct().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Ye(n){var t=n.length;return{point:function(i,r){for(var e=-1;++e<t;)n[e].point(i,r)},sphere:function(){for(var i=-1;++i<t;)n[i].sphere()},lineStart:function(){for(var i=-1;++i<t;)n[i].lineStart()},lineEnd:function(){for(var i=-1;++i<t;)n[i].lineEnd()},polygonStart:function(){for(var i=-1;++i<t;)n[i].polygonStart()},polygonEnd:function(){for(var i=-1;++i<t;)n[i].polygonEnd()}}}function Xe(){var n,t,i=Ti(),r,e=Ct().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o,u=Ct().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c,f,p={point:function(l,g){f=[l,g]}};function a(l){var g=l[0],h=l[1];return f=null,(r.point(g,h),f)||(o.point(g,h),f)||(c.point(g,h),f)}a.invert=function(l){var g=i.scale(),h=i.translate(),y=(l[0]-h[0])/g,d=(l[1]-h[1])/g;return(d>=.12&&d<.234&&y>=-.425&&y<-.214?e:d>=.166&&d<.234&&y>=-.214&&y<-.115?u:i).invert(l)},a.stream=function(l){return n&&t===l?n:n=Ye([i.stream(t=l),e.stream(l),u.stream(l)])},a.precision=function(l){return arguments.length?(i.precision(l),e.precision(l),u.precision(l),s()):i.precision()},a.scale=function(l){return arguments.length?(i.scale(l),e.scale(l*.35),u.scale(l),a.translate(i.translate())):i.scale()},a.translate=function(l){if(!arguments.length)return i.translate();var g=i.scale(),h=+l[0],y=+l[1];return r=i.translate(l).clipExtent([[h-.455*g,y-.238*g],[h+.455*g,y+.238*g]]).stream(p),o=e.translate([h-.307*g,y+.201*g]).clipExtent([[h-.425*g+$,y+.12*g+$],[h-.214*g-$,y+.234*g-$]]).stream(p),c=u.translate([h-.205*g,y+.212*g]).clipExtent([[h-.214*g+$,y+.166*g+$],[h-.115*g-$,y+.234*g-$]]).stream(p),s()},a.fitExtent=function(l,g){return qt(a,l,g)},a.fitSize=function(l,g){return gr(a,l,g)},a.fitWidth=function(l,g){return hr(a,l,g)},a.fitHeight=function(l,g){return vr(a,l,g)};function s(){return n=t=null,a}return a.scale(1070)}function Yi(n){return function(t,i){var r=m(t),e=m(i),o=n(r*e);return o===Infinity?[2,0]:[o*e*w(t),o*w(i)]}}function Un(n){return function(t,i){var r=H(t*t+i*i),e=n(r),o=w(e),u=m(e);return[Q(t*o,r*u),J(r&&i*o/r)]}}var dr=Yi(function(n){return H(2/(1+n))});dr.invert=Un(function(n){return 2*J(n/2)});function Fe(){return pn(dr).scale(124.75).clipAngle(180-.001)}var yr=Yi(function(n){return(n=zr(n))&&n/w(n)});yr.invert=Un(function(n){return n});function De(){return pn(yr).scale(79.4188).clipAngle(180-.001)}function Qn(n,t){return[n,rt(Xt((O+t)/2))]}Qn.invert=function(n,t){return[n,2*$n(Ar(t))-O]};function Ge(){return Xi(Qn).scale(961/U)}function Xi(n){var t=pn(n),i=t.center,r=t.scale,e=t.translate,o=t.clipExtent,u=null,c,f,p;t.scale=function(s){return arguments.length?(r(s),a()):r()},t.translate=function(s){return arguments.length?(e(s),a()):e()},t.center=function(s){return arguments.length?(i(s),a()):i()},t.clipExtent=function(s){return arguments.length?(s==null?u=c=f=p=null:(u=+s[0][0],c=+s[0][1],f=+s[1][0],p=+s[1][1]),a()):u==null?null:[[u,c],[f,p]]};function a(){var s=L*r(),l=t(jr(t.rotate()).invert([0,0]));return o(u==null?[[l[0]-s,l[1]-s],[l[0]+s,l[1]+s]]:n===Qn?[[Math.max(l[0]-s,u),c],[Math.min(l[0]+s,f),p]]:[[u,Math.max(l[1]-s,c)],[f,Math.min(l[1]+s,p)]])}return a()}function It(n){return Xt((O+n)/2)}function Fi(n,t){var i=m(n),r=n===t?w(n):rt(i/m(t))/rt(It(t)/It(n)),e=i*Yt(It(n),r)/r;if(!r)return Qn;function o(u,c){e>0?c<-O+$&&(c=-O+$):c>O-$&&(c=O-$);var f=e/Yt(It(c),r);return[f*w(r*u),e-f*m(r*u)]}return o.invert=function(u,c){var f=e-c,p=on(r)*H(u*u+f*f),a=Q(u,C(f))*on(f);return f*r<0&&(a-=L*on(u)*on(f)),[a/r,2*$n(Yt(e/p,1/r))-O]},o}function Oe(){return Sr(Fi).scale(109.5).parallels([30,30])}function Jn(n,t){return[n,t]}Jn.invert=Jn;function Ze(){return pn(Jn).scale(152.63)}function Di(n,t){var i=m(n),r=n===t?w(n):(i-m(t))/(t-n),e=i/r+n;if(C(r)<$)return Jn;function o(u,c){var f=e-c,p=r*u;return[f*w(p),e-f*m(p)]}return o.invert=function(u,c){var f=e-c,p=Q(u,C(f))*on(f);return f*r<0&&(p-=L*on(u)*on(f)),[p/r,e-on(r)*H(u*u+f*f)]},o}function We(){return Sr(Di).scale(131.154).center([0,13.9389])}var Kn=1.340264,Vn=-.081106,jn=893e-6,_n=.003796,xt=H(3)/2,Be=12;function wr(n,t){var i=J(xt*w(t)),r=i*i,e=r*r*r;return[n*m(i)/(xt*(Kn+3*Vn*r+e*(7*jn+9*_n*r))),i*(Kn+Vn*r+e*(jn+_n*r))]}wr.invert=function(n,t){for(var i=t,r=i*i,e=r*r*r,o=0,u,c,f;o<Be&&!(c=i*(Kn+Vn*r+e*(jn+_n*r))-t,f=Kn+3*Vn*r+e*(7*jn+9*_n*r),i-=u=c/f,r=i*i,e=r*r*r,C(u)<xn);++o);return[xt*n*(Kn+3*Vn*r+e*(7*jn+9*_n*r))/m(i),J(w(i)/xt)]};function He(){return pn(wr).scale(177.158)}function Pr(n,t){var i=m(t),r=m(n)*i;return[i*w(n)/r,w(t)/r]}Pr.invert=Un($n);function ke(){return pn(Pr).scale(144.049).clipAngle(60)}function Ue(){var n=1,t=0,i=0,r=1,e=1,o=0,u,c,f=null,p,a,s,l=1,g=1,h=kn({point:function(E,R){var A=v([E,R]);this.stream.point(A[0],A[1])}}),y=Dn,d,P;function M(){return l=n*r,g=n*e,d=P=null,v}function v(E){var R=E[0]*l,A=E[1]*g;if(o){var I=A*u-R*c;R=R*u+A*c,A=I}return[R+t,A+i]}return v.invert=function(E){var R=E[0]-t,A=E[1]-i;if(o){var I=A*u+R*c;R=R*u-A*c,A=I}return[R/l,A/g]},v.stream=function(E){return d&&P===E?d:d=h(y(P=E))},v.postclip=function(E){return arguments.length?(y=E,f=p=a=s=null,M()):y},v.clipExtent=function(E){return arguments.length?(y=E==null?(f=p=a=s=null,Dn):wt(f=+E[0][0],p=+E[0][1],a=+E[1][0],s=+E[1][1]),M()):f==null?null:[[f,p],[a,s]]},v.scale=function(E){return arguments.length?(n=+E,M()):n},v.translate=function(E){return arguments.length?(t=+E[0],i=+E[1],M()):[t,i]},v.angle=function(E){return arguments.length?(o=E%360*N,c=w(o),u=m(o),M()):o*X},v.reflectX=function(E){return arguments.length?(r=E?-1:1,M()):r<0},v.reflectY=function(E){return arguments.length?(e=E?-1:1,M()):e<0},v.fitExtent=function(E,R){return qt(v,E,R)},v.fitSize=function(E,R){return gr(v,E,R)},v.fitWidth=function(E,R){return hr(v,E,R)},v.fitHeight=function(E,R){return vr(v,E,R)},v}function Rr(n,t){var i=t*t,r=i*i;return[n*(.8707-.131979*i+r*(-.013791+r*(.003971*i-.001529*r))),t*(1.007226+i*(.015085+r*(-.044475+.028874*i-.005916*r)))]}Rr.invert=function(n,t){var i=t,r=25,e;do{var o=i*i,u=o*o;i-=e=(i*(1.007226+o*(.015085+u*(-.044475+.028874*o-.005916*u)))-t)/(1.007226+o*(.015085*3+u*(-.044475*7+.028874*9*o-.005916*11*u)))}while(C(e)>$&&--r>0);return[n/(.8707+(o=i*i)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),i]};function Qe(){return pn(Rr).scale(175.295)}function Mr(n,t){return[m(t)*w(n),w(t)]}Mr.invert=Un(J);function Je(){return pn(Mr).scale(249.5).clipAngle(90+$)}function mr(n,t){var i=m(t),r=1+m(n)*i;return[i*w(n)/r,w(t)/r]}mr.invert=Un(function(n){return 2*$n(n)});function Ke(){return pn(mr).scale(250).clipAngle(142)}function $r(n,t){return[rt(Xt((O+t)/2)),-n]}$r.invert=function(n,t){return[-t,2*$n(Ar(n))-O]};function Ve(){var n=Xi($r),t=n.center,i=n.rotate;return n.center=function(r){return arguments.length?t([-r[1],r[0]]):(r=t(),[r[1],-r[0]])},n.rotate=function(r){return arguments.length?i([r[0],r[1],r.length>2?r[2]+90:90]):(r=i(),[r[0],r[1],r[2]-90])},i([0,0,90]).scale(159.155)}export{Ti as geoAlbers,Xe as geoAlbersUsa,Wi as geoArea,Fe as geoAzimuthalEqualArea,dr as geoAzimuthalEqualAreaRaw,De as geoAzimuthalEquidistant,yr as geoAzimuthalEquidistantRaw,Ui as geoBounds,_i as geoCentroid,bi as geoCircle,jt as geoClipAntimeridian,oi as geoClipCircle,ue as geoClipExtent,wt as geoClipRectangle,Oe as geoConicConformal,Fi as geoConicConformalRaw,Ct as geoConicEqualArea,xi as geoConicEqualAreaRaw,We as geoConicEquidistant,Di as geoConicEquidistantRaw,ge as geoContains,Mt as geoDistance,He as geoEqualEarth,wr as geoEqualEarthRaw,Ze as geoEquirectangular,Jn as geoEquirectangularRaw,ke as geoGnomonic,Pr as geoGnomonicRaw,vi as geoGraticule,he as geoGraticule10,Ue as geoIdentity,ve as geoInterpolate,ui as geoLength,Ge as geoMercator,Qn as geoMercatorRaw,Qe as geoNaturalEarth1,Rr as geoNaturalEarth1Raw,Je as geoOrthographic,Mr as geoOrthographicRaw,Ne as geoPath,pn as geoProjection,Er as geoProjectionMutator,jr as geoRotation,Ke as geoStereographic,mr as geoStereographicRaw,an as geoStream,Ae as geoTransform,Ve as geoTransverseMercator,$r as geoTransverseMercatorRaw};export default null;
