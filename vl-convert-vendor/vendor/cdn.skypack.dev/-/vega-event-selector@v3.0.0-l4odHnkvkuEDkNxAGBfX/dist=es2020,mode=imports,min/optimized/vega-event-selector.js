const y="view",h="[",m="]",s="{",w="}",A=":",g=",",x="@",R=">",L=/[[\]{}]/,k={"*":1,arc:1,area:1,group:1,image:1,line:1,path:1,rect:1,rule:1,shape:1,symbol:1,text:1,trail:1};let b,d;function v(e,t,n){return b=t||y,d=n||k,E(e.trim()).map(p)}function M(e){return d[e]}function f(e,t,n,i,o){const c=e.length;let l=0,r;for(;t<c;++t){if(r=e[t],!l&&r===n)return t;o&&o.indexOf(r)>=0?--l:i&&i.indexOf(r)>=0&&++l}return t}function E(e){const t=[],n=e.length;let i=0,o=0;for(;o<n;)o=f(e,o,g,h+s,m+w),t.push(e.substring(i,o).trim()),i=++o;if(t.length===0)throw"Empty event selector: "+e;return t}function p(e){return e[0]==="["?O(e):S(e)}function O(e){const t=e.length;let n=1,i;if(n=f(e,n,m,h,m),n===t)throw"Empty between selector: "+e;if(i=E(e.substring(1,n)),i.length!==2)throw"Between selector must have two elements: "+e;if(e=e.slice(n+1).trim(),e[0]!==R)throw"Expected '>' after between selector: "+e;i=i.map(p);const o=p(e.slice(1).trim());return o.between?{between:i,stream:o}:(o.between=i,o)}function S(e){const t={source:b},n=[];let i=[0,0],o=0,c=0,l=e.length,r=0,u,a;if(e[l-1]===w){if(r=e.lastIndexOf(s),r>=0){try{i=B(e.substring(r+1,l-1))}catch(U){throw"Invalid throttle specification: "+e}e=e.slice(0,r).trim(),l=e.length}else throw"Unmatched right brace: "+e;r=0}if(!l)throw e;if(e[0]===x&&(o=++r),u=f(e,r,A),u<l&&(n.push(e.substring(c,u).trim()),c=r=++u),r=f(e,r,h),r===l)n.push(e.substring(c,l).trim());else if(n.push(e.substring(c,r).trim()),a=[],c=++r,c===l)throw"Unmatched left bracket: "+e;for(;r<l;){if(r=f(e,r,m),r===l)throw"Unmatched left bracket: "+e;if(a.push(e.substring(c,r).trim()),r<l-1&&e[++r]!==h)throw"Expected left bracket: "+e;c=++r}if(!(l=n.length)||L.test(n[l-1]))throw"Invalid event selector: "+e;return l>1?(t.type=n[1],o?t.markname=n[0].slice(1):M(n[0])?t.marktype=n[0]:t.source=n[0]):t.type=n[0],t.type.slice(-1)==="!"&&(t.consume=!0,t.type=t.type.slice(0,-1)),a!=null&&(t.filter=a),i[0]&&(t.throttle=i[0]),i[1]&&(t.debounce=i[1]),t}function B(e){const t=e.split(g);if(!e.length||t.length>2)throw e;return t.map(n=>{const i=+n;if(i!==i)throw e;return i})}export{v as parseSelector};export default null;
