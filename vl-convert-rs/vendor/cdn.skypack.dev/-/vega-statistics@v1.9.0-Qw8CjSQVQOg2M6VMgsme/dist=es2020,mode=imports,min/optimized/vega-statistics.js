import{ascending as T,quantileSorted as ae,deviation as he,quantile as v,median as ge}from"/-/d3-array@v3.2.3-YYAnwYSQZgGML08QhecQ/dist=es2020,mode=imports,min/optimized/d3-array.js";function*G(t,n){if(n==null)for(let e of t)e!=null&&e!==""&&(e=+e)>=e&&(yield e);else{let e=-1;for(let l of t)l=n(l,++e,t),l!=null&&l!==""&&(l=+l)>=l&&(yield l)}}function K(t,n,e){const l=Float64Array.from(G(t,e));return l.sort(T),n.map(o=>ae(l,o))}function W(t,n){return K(t,[.25,.5,.75],n)}function Z(t,n){const e=t.length,l=he(t,n),o=W(t,n),r=(o[2]-o[0])/1.34,i=Math.min(l,r)||l||Math.abs(o[0])||1;return 1.06*i*Math.pow(e,-.2)}function pe(t){const n=t.maxbins||20,e=t.base||10,l=Math.log(e),o=t.divide||[5,2];let r=t.extent[0],i=t.extent[1],u,f,s,c,a,h;const g=t.span||i-r||Math.abs(r)||1;if(t.step)u=t.step;else if(t.steps){for(c=g/n,a=0,h=t.steps.length;a<h&&t.steps[a]<c;++a);u=t.steps[Math.max(0,a-1)]}else{for(f=Math.ceil(Math.log(n)/l),s=t.minstep||0,u=Math.max(s,Math.pow(e,Math.round(Math.log(g)/l)-f));Math.ceil(g/u)>n;)u*=e;for(a=0,h=o.length;a<h;++a)c=u/o[a],c>=s&&g/c<=n&&(u=c)}c=Math.log(u);const p=c>=0?0:~~(-c/l)+1,M=Math.pow(e,-p-1);return(t.nice||t.nice===void 0)&&(c=Math.floor(r/u+M)*u,r=r<c?c-u:c,i=Math.ceil(i/u)*u),{start:r,stop:i===r?r+u:i,step:u}}var N=Math.random;function Me(t){N=t}function de(t,n,e,l){if(!t.length)return[void 0,void 0];const o=Float64Array.from(G(t,l)),r=o.length,i=n;let u,f,s,c;for(s=0,c=Array(i);s<i;++s){for(u=0,f=0;f<r;++f)u+=o[~~(N()*r)];c[s]=u/r}return c.sort(T),[v(c,e/2),v(c,1-e/2)]}function me(t,n,e,l){l=l||(h=>h);const o=t.length,r=new Float64Array(o);let i=0,u=1,f=l(t[0]),s=f,c=f+n,a;for(;u<o;++u){if(a=l(t[u]),a>=c){for(s=(f+s)/2;i<u;++i)r[i]=s;c=a+n,f=a}s=a}for(s=(f+s)/2;i<u;++i)r[i]=s;return e?we(r,n+n/4):r}function we(t,n){const e=t.length;let l=0,o=1,r,i;for(;t[l]===t[o];)++o;for(;o<e;){for(r=o+1;t[o]===t[r];)++r;if(t[o]-t[o-1]<n){for(i=o+(l+r-o-o>>1);i<o;)t[i++]=t[o];for(;i>o;)t[i--]=t[l]}l=o,o=r}return t}function be(t){return function(){return t=(1103515245*t+12345)%2147483647,t/2147483647}}function Ne(t,n){n==null&&(n=t,t=0);let e,l,o;const r={min(i){return arguments.length?(e=i||0,o=l-e,r):e},max(i){return arguments.length?(l=i||0,o=l-e,r):l},sample(){return e+Math.floor(o*N())},pdf(i){return i===Math.floor(i)&&i>=e&&i<l?1/o:0},cdf(i){const u=Math.floor(i);return u<e?0:u>=l?1:(u-e+1)/o},icdf(i){return i>=0&&i<=1?e-1+Math.floor(i*o):NaN}};return r.min(t).max(n)}const B=Math.sqrt(2*Math.PI),Xe=Math.SQRT2;let F=NaN;function j(t,n){t=t||0,n=n??1;let e=0,l=0,o,r;if(F===F)e=F,F=NaN;else{do e=N()*2-1,l=N()*2-1,o=e*e+l*l;while(o===0||o>1);r=Math.sqrt(-2*Math.log(o)/o),e*=r,F=l*r}return t+e*n}function H(t,n,e){e=e??1;const l=(t-(n||0))/e;return Math.exp(-.5*l*l)/(e*B)}function z(t,n,e){n=n||0,e=e??1;const l=(t-n)/e,o=Math.abs(l);let r;if(o>37)r=0;else{const i=Math.exp(-o*o/2);let u;o<7.07106781186547?(u=.0352624965998911*o+.700383064443688,u=u*o+6.37396220353165,u=u*o+33.912866078383,u=u*o+112.079291497871,u=u*o+221.213596169931,u=u*o+220.206867912376,r=i*u,u=.0883883476483184*o+1.75566716318264,u=u*o+16.064177579207,u=u*o+86.7807322029461,u=u*o+296.564248779674,u=u*o+637.333633378831,u=u*o+793.826512519948,u=u*o+440.413735824752,r=r/u):(u=o+.65,u=o+4/u,u=o+3/u,u=o+2/u,u=o+1/u,r=i/u/2.506628274631)}return l>0?1-r:r}function P(t,n,e){return t<0||t>1?NaN:(n||0)+(e??1)*Xe*qe(2*t-1)}function qe(t){let n=-Math.log((1-t)*(1+t)),e;return n<6.25?(n-=3.125,e=-364441206401782e-35,e=-16850591381820166e-35+e*n,e=128584807152564e-32+e*n,e=11157877678025181e-33+e*n,e=-1333171662854621e-31+e*n,e=20972767875968562e-33+e*n,e=6637638134358324e-30+e*n,e=-4054566272975207e-29+e*n,e=-8151934197605472e-29+e*n,e=26335093153082323e-28+e*n,e=-12975133253453532e-27+e*n,e=-5415412054294628e-26+e*n,e=10512122733215323e-25+e*n,e=-4112633980346984e-24+e*n,e=-29070369957882005e-24+e*n,e=42347877827932404e-23+e*n,e=-13654692000834679e-22+e*n,e=-13882523362786469e-21+e*n,e=.00018673420803405714+e*n,e=-.000740702534166267+e*n,e=-.006033670871430149+e*n,e=.24015818242558962+e*n,e=1.6536545626831027+e*n):n<16?(n=Math.sqrt(n)-3.25,e=22137376921775787e-25,e=9075656193888539e-23+e*n,e=-27517406297064545e-23+e*n,e=18239629214389228e-24+e*n,e=15027403968909828e-22+e*n,e=-4013867526981546e-21+e*n,e=29234449089955446e-22+e*n,e=12475304481671779e-21+e*n,e=-47318229009055734e-21+e*n,e=6828485145957318e-20+e*n,e=24031110387097894e-21+e*n,e=-.0003550375203628475+e*n,e=.0009532893797373805+e*n,e=-.0016882755560235047+e*n,e=.002491442096107851+e*n,e=-.003751208507569241+e*n,e=.005370914553590064+e*n,e=1.0052589676941592+e*n,e=3.0838856104922208+e*n):Number.isFinite(n)?(n=Math.sqrt(n)-5,e=-27109920616438573e-27,e=-2555641816996525e-25+e*n,e=15076572693500548e-25+e*n,e=-3789465440126737e-24+e*n,e=761570120807834e-23+e*n,e=-1496002662714924e-23+e*n,e=2914795345090108e-23+e*n,e=-6771199775845234e-23+e*n,e=22900482228026655e-23+e*n,e=-99298272942317e-20+e*n,e=4526062597223154e-21+e*n,e=-1968177810553167e-20+e*n,e=7599527703001776e-20+e*n,e=-.00021503011930044477+e*n,e=-.00013871931833623122+e*n,e=1.0103004648645344+e*n,e=4.849906401408584+e*n):e=Infinity,e*t}function J(t,n){let e,l;const o={mean(r){return arguments.length?(e=r||0,o):e},stdev(r){return arguments.length?(l=r??1,o):l},sample:()=>j(e,l),pdf:r=>H(r,e,l),cdf:r=>z(r,e,l),icdf:r=>P(r,e,l)};return o.mean(t).stdev(n)}function ye(t,n){const e=J();let l=0;const o={data(r){return arguments.length?(t=r,l=r?r.length:0,o.bandwidth(n)):t},bandwidth(r){return arguments.length?(n=r,!n&&t&&(n=Z(t)),o):n},sample(){return t[~~(N()*l)]+n*e.sample()},pdf(r){let i=0,u=0;for(;u<l;++u)i+=e.pdf((r-t[u])/n);return i/n/l},cdf(r){let i=0,u=0;for(;u<l;++u)i+=e.cdf((r-t[u])/n);return i/l},icdf(){throw Error("KDE icdf not supported.")}};return o.data(t)}function O(t,n){return t=t||0,n=n??1,Math.exp(t+j()*n)}function V(t,n,e){if(t<=0)return 0;n=n||0,e=e??1;const l=(Math.log(t)-n)/e;return Math.exp(-.5*l*l)/(e*B*t)}function $(t,n,e){return z(Math.log(t),n,e)}function _(t,n,e){return Math.exp(P(t,n,e))}function Ye(t,n){let e,l;const o={mean(r){return arguments.length?(e=r||0,o):e},stdev(r){return arguments.length?(l=r??1,o):l},sample:()=>O(e,l),pdf:r=>V(r,e,l),cdf:r=>$(r,e,l),icdf:r=>_(r,e,l)};return o.mean(t).stdev(n)}function Ae(t,n){let e=0,l;function o(i){const u=[];let f=0,s;for(s=0;s<e;++s)f+=u[s]=i[s]==null?1:+i[s];for(s=0;s<e;++s)u[s]/=f;return u}const r={weights(i){return arguments.length?(l=o(n=i||[]),r):n},distributions(i){return arguments.length?(i?(e=i.length,t=i):(e=0,t=[]),r.weights(n)):t},sample(){const i=N();let u=t[e-1],f=l[0],s=0;for(;s<e-1;f+=l[++s])if(i<f){u=t[s];break}return u.sample()},pdf(i){let u=0,f=0;for(;f<e;++f)u+=l[f]*t[f].pdf(i);return u},cdf(i){let u=0,f=0;for(;f<e;++f)u+=l[f]*t[f].cdf(i);return u},icdf(){throw Error("Mixture icdf not supported.")}};return r.distributions(t).weights(n)}function x(t,n){return n==null&&(n=t??1,t=0),t+(n-t)*N()}function ee(t,n,e){return e==null&&(e=n??1,n=0),t>=n&&t<=e?1/(e-n):0}function ne(t,n,e){return e==null&&(e=n??1,n=0),t<n?0:t>e?1:(t-n)/(e-n)}function te(t,n,e){return e==null&&(e=n??1,n=0),t>=0&&t<=1?n+t*(e-n):NaN}function Le(t,n){let e,l;const o={min(r){return arguments.length?(e=r||0,o):e},max(r){return arguments.length?(l=r??1,o):l},sample:()=>x(e,l),pdf:r=>ee(r,e,l),cdf:r=>ne(r,e,l),icdf:r=>te(r,e,l)};return n==null&&(n=t??1,t=0),o.min(t).max(n)}function re(t,n,e){let l=0,o=0;for(const r of t){const i=e(r);if(n(r)==null||i==null||isNaN(i))continue;l+=(i-l)/++o}return{coef:[l],predict:()=>l,rSquared:0}}function S(t,n,e,l){const o=l-t*t,r=Math.abs(o)<1e-24?0:(e-t*n)/o,i=n-r*t;return[i,r]}function I(t,n,e,l){t=t.filter(g=>{let p=n(g),M=e(g);return p!=null&&(p=+p)>=p&&M!=null&&(M=+M)>=M}),l&&t.sort((g,p)=>n(g)-n(p));const o=t.length,r=new Float64Array(o),i=new Float64Array(o);let u=0,f=0,s=0,c,a,h;for(h of t)r[u]=c=+n(h),i[u]=a=+e(h),++u,f+=(c-f)/u,s+=(a-s)/u;for(u=0;u<o;++u)r[u]-=f,i[u]-=s;return[r,i,f,s]}function k(t,n,e,l){let o=-1,r,i;for(const u of t)r=n(u),i=e(u),r!=null&&(r=+r)>=r&&i!=null&&(i=+i)>=i&&l(r,i,++o)}function Y(t,n,e,l,o){let r=0,i=0;return k(t,n,e,(u,f)=>{const s=f-o(u),c=f-l;r+=s*s,i+=c*c}),1-r/i}function oe(t,n,e){let l=0,o=0,r=0,i=0,u=0;k(t,n,e,(c,a)=>{++u,l+=(c-l)/u,o+=(a-o)/u,r+=(c*a-r)/u,i+=(c*c-i)/u});const f=S(l,o,r,i),s=c=>f[0]+f[1]*c;return{coef:f,predict:s,rSquared:Y(t,n,e,o,s)}}function Fe(t,n,e){let l=0,o=0,r=0,i=0,u=0;k(t,n,e,(c,a)=>{++u,c=Math.log(c),l+=(c-l)/u,o+=(a-o)/u,r+=(c*a-r)/u,i+=(c*c-i)/u});const f=S(l,o,r,i),s=c=>f[0]+f[1]*Math.log(c);return{coef:f,predict:s,rSquared:Y(t,n,e,o,s)}}function Se(t,n,e){const[l,o,r,i]=I(t,n,e);let u=0,f=0,s=0,c=0,a=0,h,g,p;k(t,n,e,(b,w)=>{h=l[a++],g=Math.log(w),p=h*w,u+=(w*g-u)/a,f+=(p-f)/a,s+=(p*g-s)/a,c+=(h*p-c)/a});const[M,d]=S(f/i,u/i,s/i,c/i),m=b=>Math.exp(M+d*(b-r));return{coef:[Math.exp(M-d*r),d],predict:m,rSquared:Y(t,n,e,i,m)}}function ke(t,n,e){let l=0,o=0,r=0,i=0,u=0,f=0;k(t,n,e,(a,h)=>{const g=Math.log(a),p=Math.log(h);++f,l+=(g-l)/f,o+=(p-o)/f,r+=(g*p-r)/f,i+=(g*g-i)/f,u+=(h-u)/f});const s=S(l,o,r,i),c=a=>s[0]*Math.pow(a,s[1]);return s[0]=Math.exp(s[0]),{coef:s,predict:c,rSquared:Y(t,n,e,u,c)}}function le(t,n,e){const[l,o,r,i]=I(t,n,e),u=l.length;let f=0,s=0,c=0,a=0,h=0,g,p,M,d;for(g=0;g<u;)p=l[g],M=o[g++],d=p*p,f+=(d-f)/g,s+=(d*p-s)/g,c+=(d*d-c)/g,a+=(p*M-a)/g,h+=(d*M-h)/g;const m=c-f*f,b=f*m-s*s,w=(h*f-a*s)/b,X=(a*m-h*s)/b,q=-w*f,A=y=>(y=y-r,w*y*y+X*y+q+i);return{coef:[q-X*r+w*r*r+i,X-2*w*r,w],predict:A,rSquared:Y(t,n,e,i,A)}}function Ie(t,n,e,l){if(l===0)return re(t,n,e);if(l===1)return oe(t,n,e);if(l===2)return le(t,n,e);const[o,r,i,u]=I(t,n,e),f=o.length,s=[],c=[],a=l+1;let h,g,p,M,d;for(h=0;h<a;++h){for(p=0,M=0;p<f;++p)M+=Math.pow(o[p],h)*r[p];for(s.push(M),d=new Float64Array(a),g=0;g<a;++g){for(p=0,M=0;p<f;++p)M+=Math.pow(o[p],h+g);d[g]=M}c.push(d)}c.push(s);const m=Qe(c),b=w=>{w-=i;let X=u+m[0]+m[1]*w+m[2]*w*w;for(h=3;h<a;++h)X+=m[h]*Math.pow(w,h);return X};return{coef:Ee(a,m,-i,u),predict:b,rSquared:Y(t,n,e,u,b)}}function Ee(t,n,e,l){const o=Array(t);let r,i,u,f;for(r=0;r<t;++r)o[r]=0;for(r=t-1;r>=0;--r)for(u=n[r],f=1,o[r]+=u,i=1;i<=r;++i)f*=(r+1-i)/i,o[r-i]+=u*Math.pow(e,i)*f;return o[0]+=l,o}function Qe(t){const n=t.length-1,e=[];let l,o,r,i,u;for(l=0;l<n;++l){for(i=l,o=l+1;o<n;++o)Math.abs(t[l][o])>Math.abs(t[l][i])&&(i=o);for(r=l;r<n+1;++r)u=t[r][l],t[r][l]=t[r][i],t[r][i]=u;for(o=l+1;o<n;++o)for(r=n;r>=l;r--)t[r][o]-=t[r][l]*t[l][o]/t[l][l]}for(o=n-1;o>=0;--o){for(u=0,r=o+1;r<n;++r)u+=t[r][o]*e[r];e[o]=(t[n][o]-u)/t[o][o]}return e}const ue=2,ie=1e-12;function Re(t,n,e,l){const[o,r,i,u]=I(t,n,e,!0),f=o.length,s=Math.max(2,~~(l*f)),c=new Float64Array(f),a=new Float64Array(f),h=new Float64Array(f).fill(1);for(let g=-1;++g<=ue;){const p=[0,s-1];for(let d=0;d<f;++d){const m=o[d],b=p[0],w=p[1],X=m-o[b]>o[w]-m?b:w;let q=0,A=0,y=0,D=0,U=0;const fe=1/Math.abs(o[X]-m||1);for(let L=b;L<=w;++L){const E=o[L],C=r[L],Q=je(Math.abs(m-E)*fe)*h[L],R=E*Q;q+=Q,A+=R,y+=C*Q,D+=C*R,U+=E*R}const[se,ce]=S(A/q,y/q,D/q,U/q);c[d]=se+ce*m,a[d]=Math.abs(r[d]-c[d]),ze(o,d+1,p)}if(g===ue)break;const M=ge(a);if(Math.abs(M)<ie)break;for(let d=0,m,b;d<f;++d)m=a[d]/(6*M),h[d]=m>=1?ie:(b=1-m*m)*b}return Pe(o,c,i,u)}function je(t){return(t=1-t*t*t)*t*t}function ze(t,n,e){const l=t[n];let o=e[0],r=e[1]+1;if(r>=t.length)return;for(;n>o&&t[r]-l<=l-t[o];)e[0]=++o,e[1]=r,++r}function Pe(t,n,e,l){const o=t.length,r=[];let i=0,u=0,f=[],s;for(;i<o;++i)s=t[i]+e,f[0]===s?f[1]+=(n[i]-f[1])/++u:(u=0,f[1]+=l,f=[s,n[i]],r.push(f));return f[1]+=l,r}const De=.5*Math.PI/180;function Ue(t,n,e,l){e=e||25,l=Math.max(e,l||200);const o=M=>[M,t(M)],r=n[0],i=n[1],u=i-r,f=u/l,s=[o(r)],c=[];if(e===l){for(let M=1;M<l;++M)s.push(o(r+M/e*u));return s.push(o(i)),s}else{c.push(o(i));for(let M=e;--M>0;)c.push(o(r+M/e*u))}let a=s[0],h=c[c.length-1];const g=1/u,p=Ce(a[1],c);for(;h;){const M=o((a[0]+h[0])/2),d=M[0]-a[0]>=f;d&&Te(a,M,h,g,p)>De?c.push(M):(a=h,s.push(h),c.pop()),h=c[c.length-1]}return s}function Ce(t,n){let e=t,l=t;const o=n.length;for(let r=0;r<o;++r){const i=n[r][1];i<e&&(e=i),i>l&&(l=i)}return 1/(l-e)}function Te(t,n,e,l,o){const r=Math.atan2(o*(e[1]-t[1]),l*(e[0]-t[0])),i=Math.atan2(o*(n[1]-t[1]),l*(n[0]-t[0]));return Math.abs(r-i)}export{Z as bandwidthNRD,pe as bin,de as bootstrapCI,$ as cumulativeLogNormal,z as cumulativeNormal,ne as cumulativeUniform,V as densityLogNormal,H as densityNormal,ee as densityUniform,me as dotbin,_ as quantileLogNormal,P as quantileNormal,te as quantileUniform,K as quantiles,W as quartiles,N as random,Ne as randomInteger,ye as randomKDE,be as randomLCG,Ye as randomLogNormal,Ae as randomMixture,J as randomNormal,Le as randomUniform,re as regressionConstant,Se as regressionExp,oe as regressionLinear,Re as regressionLoess,Fe as regressionLog,Ie as regressionPoly,ke as regressionPow,le as regressionQuad,Ue as sampleCurve,O as sampleLogNormal,j as sampleNormal,x as sampleUniform,Me as setRandom};export default null;