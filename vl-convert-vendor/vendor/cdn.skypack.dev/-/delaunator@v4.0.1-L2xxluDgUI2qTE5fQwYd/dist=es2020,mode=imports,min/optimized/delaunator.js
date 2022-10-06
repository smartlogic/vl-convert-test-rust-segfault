const R=Math.pow(2,-52),G=new Uint32Array(512);class C{static from(t,n=Z,s=$){const o=t.length,h=new Float64Array(o*2);for(let e=0;e<o;e++){const l=t[e];h[2*e]=n(l),h[2*e+1]=s(l)}return new C(h)}constructor(t){const n=t.length>>1;if(n>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const s=Math.max(2*n-5,0);this._triangles=new Uint32Array(s*3),this._halfedges=new Int32Array(s*3),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){const{coords:t,_hullPrev:n,_hullNext:s,_hullTri:o,_hullHash:h}=this,e=t.length>>1;let l=Infinity,u=Infinity,f=-Infinity,x=-Infinity;for(let r=0;r<e;r++){const c=t[2*r],g=t[2*r+1];c<l&&(l=c),g<u&&(u=g),c>f&&(f=c),g>x&&(x=g),this._ids[r]=r}const d=(l+f)/2,k=(u+x)/2;let w=Infinity,_,y,m;for(let r=0;r<e;r++){const c=F(d,k,t[2*r],t[2*r+1]);c<w&&(_=r,w=c)}const z=t[2*_],M=t[2*_+1];w=Infinity;for(let r=0;r<e;r++){if(r===_)continue;const c=F(z,M,t[2*r],t[2*r+1]);c<w&&c>0&&(y=r,w=c)}let S=t[2*y],L=t[2*y+1],X=Infinity;for(let r=0;r<e;r++){if(r===_||r===y)continue;const c=V(z,M,S,L,t[2*r],t[2*r+1]);c<X&&(m=r,X=c)}let P=t[2*m],v=t[2*m+1];if(X===Infinity){for(let g=0;g<e;g++)this._dists[g]=t[2*g]-t[0]||t[2*g+1]-t[1];E(this._ids,this._dists,0,e-1);const r=new Uint32Array(e);let c=0;for(let g=0,b=-Infinity;g<e;g++){const p=this._ids[g];this._dists[p]>b&&(r[c++]=p,b=this._dists[p])}this.hull=r.subarray(0,c),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(H(z,M,S,L,P,v)){const r=y,c=S,g=L;y=m,S=P,L=v,m=r,P=c,v=g}const j=W(z,M,S,L,P,v);this._cx=j.x,this._cy=j.y;for(let r=0;r<e;r++)this._dists[r]=F(t[2*r],t[2*r+1],j.x,j.y);E(this._ids,this._dists,0,e-1),this._hullStart=_;let D=3;s[_]=n[m]=y,s[y]=n[_]=m,s[m]=n[y]=_,o[_]=0,o[y]=1,o[m]=2,h.fill(-1),h[this._hashKey(z,M)]=_,h[this._hashKey(S,L)]=y,h[this._hashKey(P,v)]=m,this.trianglesLen=0,this._addTriangle(_,y,m,-1,-1,-1);for(let r=0,c,g;r<this._ids.length;r++){const b=this._ids[r],p=t[2*b],U=t[2*b+1];if(r>0&&Math.abs(p-c)<=R&&Math.abs(U-g)<=R)continue;if(c=p,g=U,b===_||b===y||b===m)continue;let T=0;for(let Y=0,B=this._hashKey(p,U);Y<this._hashSize&&!(T=h[(B+Y)%this._hashSize],T!==-1&&T!==s[T]);Y++);T=n[T];let a=T,A;for(;A=s[a],!H(p,U,t[2*a],t[2*a+1],t[2*A],t[2*A+1]);)if(a=A,a===T){a=-1;break}if(a===-1)continue;let K=this._addTriangle(a,b,s[a],-1,-1,o[a]);o[b]=this._legalize(K+2),o[a]=K,D++;let I=s[a];for(;A=s[I],H(p,U,t[2*I],t[2*I+1],t[2*A],t[2*A+1]);)K=this._addTriangle(I,b,A,o[b],-1,o[I]),o[b]=this._legalize(K+2),s[I]=I,D--,I=A;if(a===T)for(;A=n[a],H(p,U,t[2*A],t[2*A+1],t[2*a],t[2*a+1]);)K=this._addTriangle(A,b,a,-1,o[a],o[A]),this._legalize(K+2),o[A]=K,s[a]=a,D--,a=A;this._hullStart=n[b]=a,s[a]=n[I]=b,s[b]=I,h[this._hashKey(p,U)]=b,h[this._hashKey(t[2*a],t[2*a+1])]=a}this.hull=new Uint32Array(D);for(let r=0,c=this._hullStart;r<D;r++)this.hull[r]=c,c=s[c];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,n){return Math.floor(J(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:n,_halfedges:s,coords:o}=this;let h=0,e=0;for(;;){const l=s[t],u=t-t%3;if(e=u+(t+2)%3,l===-1){if(h===0)break;t=G[--h];continue}const f=l-l%3,x=u+(t+1)%3,d=f+(l+2)%3,k=n[e],w=n[t],_=n[x],y=n[d],m=Q(o[2*k],o[2*k+1],o[2*w],o[2*w+1],o[2*_],o[2*_+1],o[2*y],o[2*y+1]);if(m){n[t]=y,n[l]=k;const z=s[d];if(z===-1){let S=this._hullStart;do{if(this._hullTri[S]===d){this._hullTri[S]=t;break}S=this._hullPrev[S]}while(S!==this._hullStart)}this._link(t,z),this._link(l,s[e]),this._link(e,d);const M=f+(l+1)%3;h<G.length&&(G[h++]=M)}else{if(h===0)break;t=G[--h]}}return e}_link(t,n){this._halfedges[t]=n,n!==-1&&(this._halfedges[n]=t)}_addTriangle(t,n,s,o,h,e){const l=this.trianglesLen;return this._triangles[l]=t,this._triangles[l+1]=n,this._triangles[l+2]=s,this._link(l,o),this._link(l+1,h),this._link(l+2,e),this.trianglesLen+=3,l}}function J(i,t){const n=i/(Math.abs(i)+Math.abs(t));return(t>0?3-n:1+n)/4}function F(i,t,n,s){const o=i-n,h=t-s;return o*o+h*h}function O(i,t,n,s,o,h){const e=(s-t)*(o-i),l=(n-i)*(h-t);return Math.abs(e-l)>=33306690738754716e-32*Math.abs(e+l)?e-l:0}function H(i,t,n,s,o,h){const e=O(o,h,i,t,n,s)||O(i,t,n,s,o,h)||O(n,s,o,h,i,t);return e<0}function Q(i,t,n,s,o,h,e,l){const u=i-e,f=t-l,x=n-e,d=s-l,k=o-e,w=h-l,_=u*u+f*f,y=x*x+d*d,m=k*k+w*w;return u*(d*m-y*w)-f*(x*m-y*k)+_*(x*w-d*k)<0}function V(i,t,n,s,o,h){const e=n-i,l=s-t,u=o-i,f=h-t,x=e*e+l*l,d=u*u+f*f,k=.5/(e*f-l*u),w=(f*x-l*d)*k,_=(e*d-u*x)*k;return w*w+_*_}function W(i,t,n,s,o,h){const e=n-i,l=s-t,u=o-i,f=h-t,x=e*e+l*l,d=u*u+f*f,k=.5/(e*f-l*u),w=i+(f*x-l*d)*k,_=t+(e*d-u*x)*k;return{x:w,y:_}}function E(i,t,n,s){if(s-n<=20)for(let o=n+1;o<=s;o++){const h=i[o],e=t[h];let l=o-1;for(;l>=n&&t[i[l]]>e;)i[l+1]=i[l--];i[l+1]=h}else{const o=n+s>>1;let h=n+1,e=s;N(i,o,h),t[i[n]]>t[i[s]]&&N(i,n,s),t[i[h]]>t[i[s]]&&N(i,h,s),t[i[n]]>t[i[h]]&&N(i,n,h);const l=i[h],u=t[l];for(;;){do h++;while(t[i[h]]<u);do e--;while(t[i[e]]>u);if(e<h)break;N(i,h,e)}i[n+1]=i[e],i[e]=l,s-h+1>=e-n?(E(i,t,h,s),E(i,t,n,e-1)):(E(i,t,n,e-1),E(i,t,h,s))}}function N(i,t,n){const s=i[t];i[t]=i[n],i[n]=s}function Z(i){return i[0]}function $(i){return i[1]}export default C;
