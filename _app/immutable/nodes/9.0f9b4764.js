import{S as q,i as w,s as B,k as h,q as S,a as b,l as v,m as y,r as T,h as a,c as L,b as f,D as E,M as P,u as D,H as g,P as H,o as U}from"../chunks/index.d64f225b.js";function $(l){let o,c,u,e,_,m,n,i,p,r,d,M,N;return{c(){o=h("h2"),c=S("Stream"),u=b(),e=h("button"),_=S("Load Many Things"),m=b(),n=h("button"),i=S("Stop Many Things"),p=b(),r=h("p"),d=S(l[0])},l(t){o=v(t,"H2",{});var s=y(o);c=T(s,"Stream"),s.forEach(a),u=L(t),e=v(t,"BUTTON",{});var O=y(e);_=T(O,"Load Many Things"),O.forEach(a),m=L(t),n=v(t,"BUTTON",{});var k=y(n);i=T(k,"Stop Many Things"),k.forEach(a),p=L(t),r=v(t,"P",{});var J=y(r);d=T(J,l[0]),J.forEach(a)},m(t,s){f(t,o,s),E(o,c),f(t,u,s),f(t,e,s),E(e,_),f(t,m,s),f(t,n,s),E(n,i),f(t,p,s),f(t,r,s),E(r,d),M||(N=[P(e,"click",l[1]),P(n,"click",l[2])],M=!0)},p(t,[s]){s&1&&D(d,t[0])},i:g,o:g,d(t){t&&a(o),t&&a(u),t&&a(e),t&&a(m),t&&a(n),t&&a(p),t&&a(r),M=!1,H(N)}}}function x(l,o,c){let u,e;function _(){e=new EventSource("http://localhost:5000/large"),e.addEventListener("message",n)}function m(){e.close()}U(()=>{e=new EventSource("http://localhost:5000/large"),e.addEventListener("message",n)});function n(p){console.log(p);const r=JSON.parse(p.data);c(3,i=[...i,r])}let i=[];return l.$$.update=()=>{l.$$.dirty&8&&c(0,u=JSON.stringify(i))},[u,_,m,i]}class j extends q{constructor(o){super(),w(this,o,x,$,B,{})}}export{j as component};
