import{orient2d as G}from"/-/robust-predicates@v3.0.1-HLqPGJ72Lz4vKeF3T1y8/dist=es2020,mode=imports,min/optimized/robust-predicates.js";const C=Math.pow(2,-52),H=new Uint32Array(512);class X{static from(t,i=V,l=W){const r=t.length,h=new Float64Array(r*2);for(let n=0;n<r;n++){const o=t[n];h[2*n]=i(o),h[2*n+1]=l(o)}return new X(h)}constructor(t){const i=t.length>>1;if(i>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const l=Math.max(2*i-5,0);this._triangles=new Uint32Array(l*3),this._halfedges=new Int32Array(l*3),this._hashSize=Math.ceil(Math.sqrt(i)),this._hullPrev=new Uint32Array(i),this._hullNext=new Uint32Array(i),this._hullTri=new Uint32Array(i),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(i),this._dists=new Float64Array(i),this.update()}update(){const{coords:t,_hullPrev:i,_hullNext:l,_hullTri:r,_hullHash:h}=this,n=t.length>>1;let o=Infinity,_=Infinity,f=-Infinity,p=-Infinity;for(let s=0;s<n;s++){const c=t[2*s],g=t[2*s+1];c<o&&(o=c),g<_&&(_=g),c>f&&(f=c),g>p&&(p=g),this._ids[s]=s}const m=(o+f)/2,b=(_+p)/2;let d=Infinity,u,y,x;for(let s=0;s<n;s++){const c=Y(m,b,t[2*s],t[2*s+1]);c<d&&(u=s,d=c)}const I=t[2*u],U=t[2*u+1];d=Infinity;for(let s=0;s<n;s++){if(s===u)continue;const c=Y(I,U,t[2*s],t[2*s+1]);c<d&&c>0&&(y=s,d=c)}let A=t[2*y],L=t[2*y+1],N=Infinity;for(let s=0;s<n;s++){if(s===u||s===y)continue;const c=B(I,U,A,L,t[2*s],t[2*s+1]);c<N&&(x=s,N=c)}let P=t[2*x],E=t[2*x+1];if(N===Infinity){for(let g=0;g<n;g++)this._dists[g]=t[2*g]-t[0]||t[2*g+1]-t[1];v(this._ids,this._dists,0,n-1);const s=new Uint32Array(n);let c=0;for(let g=0,w=-Infinity;g<n;g++){const S=this._ids[g];this._dists[S]>w&&(s[c++]=S,w=this._dists[S])}this.hull=s.subarray(0,c),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(G(I,U,A,L,P,E)<0){const s=y,c=A,g=L;y=x,A=P,L=E,x=s,P=c,E=g}const D=Q(I,U,A,L,P,E);this._cx=D.x,this._cy=D.y;for(let s=0;s<n;s++)this._dists[s]=Y(t[2*s],t[2*s+1],D.x,D.y);v(this._ids,this._dists,0,n-1),this._hullStart=u;let j=3;l[u]=i[x]=y,l[y]=i[u]=x,l[x]=i[y]=u,r[u]=0,r[y]=1,r[x]=2,h.fill(-1),h[this._hashKey(I,U)]=u,h[this._hashKey(A,L)]=y,h[this._hashKey(P,E)]=x,this.trianglesLen=0,this._addTriangle(u,y,x,-1,-1,-1);for(let s=0,c,g;s<this._ids.length;s++){const w=this._ids[s],S=t[2*w],K=t[2*w+1];if(s>0&&Math.abs(S-c)<=C&&Math.abs(K-g)<=C)continue;if(c=S,g=K,w===u||w===y||w===x)continue;let T=0;for(let F=0,J=this._hashKey(S,K);F<this._hashSize&&!(T=h[(J+F)%this._hashSize],T!==-1&&T!==l[T]);F++);T=i[T];let a=T,k;for(;k=l[a],G(S,K,t[2*a],t[2*a+1],t[2*k],t[2*k+1])>=0;)if(a=k,a===T){a=-1;break}if(a===-1)continue;let M=this._addTriangle(a,w,l[a],-1,-1,r[a]);r[w]=this._legalize(M+2),r[a]=M,j++;let z=l[a];for(;k=l[z],G(S,K,t[2*z],t[2*z+1],t[2*k],t[2*k+1])<0;)M=this._addTriangle(z,w,k,r[w],-1,r[z]),r[w]=this._legalize(M+2),l[z]=z,j--,z=k;if(a===T)for(;k=i[a],G(S,K,t[2*k],t[2*k+1],t[2*a],t[2*a+1])<0;)M=this._addTriangle(k,w,a,-1,r[a],r[k]),this._legalize(M+2),r[k]=M,l[a]=a,j--,a=k;this._hullStart=i[w]=a,l[a]=i[z]=w,l[w]=z,h[this._hashKey(S,K)]=w,h[this._hashKey(t[2*a],t[2*a+1])]=a}this.hull=new Uint32Array(j);for(let s=0,c=this._hullStart;s<j;s++)this.hull[s]=c,c=l[c];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,i){return Math.floor(O(t-this._cx,i-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:i,_halfedges:l,coords:r}=this;let h=0,n=0;for(;;){const o=l[t],_=t-t%3;if(n=_+(t+2)%3,o===-1){if(h===0)break;t=H[--h];continue}const f=o-o%3,p=_+(t+1)%3,m=f+(o+2)%3,b=i[n],d=i[t],u=i[p],y=i[m],x=R(r[2*b],r[2*b+1],r[2*d],r[2*d+1],r[2*u],r[2*u+1],r[2*y],r[2*y+1]);if(x){i[t]=y,i[o]=b;const I=l[m];if(I===-1){let A=this._hullStart;do{if(this._hullTri[A]===m){this._hullTri[A]=t;break}A=this._hullPrev[A]}while(A!==this._hullStart)}this._link(t,I),this._link(o,l[n]),this._link(n,m);const U=f+(o+1)%3;h<H.length&&(H[h++]=U)}else{if(h===0)break;t=H[--h]}}return n}_link(t,i){this._halfedges[t]=i,i!==-1&&(this._halfedges[i]=t)}_addTriangle(t,i,l,r,h,n){const o=this.trianglesLen;return this._triangles[o]=t,this._triangles[o+1]=i,this._triangles[o+2]=l,this._link(o,r),this._link(o+1,h),this._link(o+2,n),this.trianglesLen+=3,o}}function O(e,t){const i=e/(Math.abs(e)+Math.abs(t));return(t>0?3-i:1+i)/4}function Y(e,t,i,l){const r=e-i,h=t-l;return r*r+h*h}function R(e,t,i,l,r,h,n,o){const _=e-n,f=t-o,p=i-n,m=l-o,b=r-n,d=h-o,u=_*_+f*f,y=p*p+m*m,x=b*b+d*d;return _*(m*x-y*d)-f*(p*x-y*b)+u*(p*d-m*b)<0}function B(e,t,i,l,r,h){const n=i-e,o=l-t,_=r-e,f=h-t,p=n*n+o*o,m=_*_+f*f,b=.5/(n*f-o*_),d=(f*p-o*m)*b,u=(n*m-_*p)*b;return d*d+u*u}function Q(e,t,i,l,r,h){const n=i-e,o=l-t,_=r-e,f=h-t,p=n*n+o*o,m=_*_+f*f,b=.5/(n*f-o*_),d=e+(f*p-o*m)*b,u=t+(n*m-_*p)*b;return{x:d,y:u}}function v(e,t,i,l){if(l-i<=20)for(let r=i+1;r<=l;r++){const h=e[r],n=t[h];let o=r-1;for(;o>=i&&t[e[o]]>n;)e[o+1]=e[o--];e[o+1]=h}else{const r=i+l>>1;let h=i+1,n=l;q(e,r,h),t[e[i]]>t[e[l]]&&q(e,i,l),t[e[h]]>t[e[l]]&&q(e,h,l),t[e[i]]>t[e[h]]&&q(e,i,h);const o=e[h],_=t[o];for(;;){do h++;while(t[e[h]]<_);do n--;while(t[e[n]]>_);if(n<h)break;q(e,h,n)}e[i+1]=e[n],e[n]=o,l-h+1>=n-i?(v(e,t,h,l),v(e,t,i,n-1)):(v(e,t,i,n-1),v(e,t,h,l))}}function q(e,t,i){const l=e[t];e[t]=e[i],e[i]=l}function V(e){return e[0]}function W(e){return e[1]}export default X;
