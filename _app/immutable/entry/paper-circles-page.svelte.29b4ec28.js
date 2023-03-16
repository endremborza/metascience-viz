import{S as Ge,i as Oe,s as $e,J as V,K,m as $,h as p,n as M,b,H as he,L as Fe,q as re,r as ue,D as L,u as Ye,k as ve,a as we,e as Ae,l as fe,c as ye,g as te,f as je,d as pe,y as ze,z as Ve,A as Ke,B as Je,v as Le}from"../chunks/index.7a1075dc.js";import{i as Se,c as Ue,n as Qe,l as We,w as Ze,a as O}from"../chunks/path.cfaee979.js";const ea="Test Graph",aa=[{name:"Fing",outward:10,inward:2},{name:"Bam",outward:13,inward:7},{name:"Poo",outward:3,inward:8},{name:"Vennegoor of Hesselink",outward:9,inward:11},{name:"Parampampampam",outward:22,inward:0}],na={title:ea,links:aa};class ke extends Map{constructor(n,s=ua){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),n!=null)for(const[t,r]of n)this.set(t,r)}get(n){return super.get(Be(this,n))}has(n){return super.has(Be(this,n))}set(n,s){return super.set(ta(this,n),s)}delete(n){return super.delete(ra(this,n))}}function Be({_intern:e,_key:n},s){const t=n(s);return e.has(t)?e.get(t):s}function ta({_intern:e,_key:n},s){const t=n(s);return e.has(t)?e.get(t):(e.set(t,s),s)}function ra({_intern:e,_key:n},s){const t=n(s);return e.has(t)&&(s=e.get(t),e.delete(t)),s}function ua(e){return e!==null&&typeof e=="object"?e.valueOf():e}function ia(e,n,s){e=+e,n=+n,s=(r=arguments.length)<2?(n=e,e=0,1):r<3?1:+s;for(var t=-1,r=Math.max(0,Math.ceil((n-e)/s))|0,u=new Array(r);++t<r;)u[t]=e+t*s;return u}const _e=Symbol("implicit");function qe(){var e=new ke,n=[],s=[],t=_e;function r(u){let c=e.get(u);if(c===void 0){if(t!==_e)return t;e.set(u,c=n.push(u)-1)}return s[c%s.length]}return r.domain=function(u){if(!arguments.length)return n.slice();n=[],e=new ke;for(const c of u)e.has(c)||e.set(c,n.push(c)-1);return r},r.range=function(u){return arguments.length?(s=Array.from(u),r):s.slice()},r.unknown=function(u){return arguments.length?(t=u,r):t},r.copy=function(){return qe(n,s).unknown(t)},Se.apply(r,arguments),r}function Xe(){var e=qe().unknown(void 0),n=e.domain,s=e.range,t=0,r=1,u,c,o=!1,h=0,g=0,i=.5;delete e.unknown;function v(){var a=n().length,l=r<t,m=l?r:t,f=l?t:r;u=(f-m)/Math.max(1,a-h+g*2),o&&(u=Math.floor(u)),m+=(f-m-u*(a-h))*i,c=u*(1-h),o&&(m=Math.round(m),c=Math.round(c));var I=ia(a).map(function(y){return m+u*y});return s(l?I.reverse():I)}return e.domain=function(a){return arguments.length?(n(a),v()):n()},e.range=function(a){return arguments.length?([t,r]=a,t=+t,r=+r,v()):[t,r]},e.rangeRound=function(a){return[t,r]=a,t=+t,r=+r,o=!0,v()},e.bandwidth=function(){return c},e.step=function(){return u},e.round=function(a){return arguments.length?(o=!!a,v()):o},e.padding=function(a){return arguments.length?(h=Math.min(1,g=+a),v()):h},e.paddingInner=function(a){return arguments.length?(h=Math.min(1,a),v()):h},e.paddingOuter=function(a){return arguments.length?(g=+a,v()):g},e.align=function(a){return arguments.length?(i=Math.max(0,Math.min(1,a)),v()):i},e.copy=function(){return Xe(n(),[t,r]).round(o).paddingInner(h).paddingOuter(g).align(i)},Se.apply(v(),arguments)}function be(e){return Math.sign(e)*e*e}function oa(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function Me(){var e=Ue(),n=[0,1],s=!1,t;function r(u){var c=oa(e(u));return isNaN(c)?t:s?Math.round(c):c}return r.invert=function(u){return e.invert(be(u))},r.domain=function(u){return arguments.length?(e.domain(u),r):e.domain()},r.range=function(u){return arguments.length?(e.range((n=Array.from(u,Qe)).map(be)),r):n.slice()},r.rangeRound=function(u){return r.range(u).round(!0)},r.round=function(u){return arguments.length?(s=!!u,r):s},r.clamp=function(u){return arguments.length?(e.clamp(u),r):e.clamp()},r.unknown=function(u){return arguments.length?(t=u,r):t},r.copy=function(){return Me(e.domain(),n).round(s).clamp(e.clamp()).unknown(t)},Se.apply(r,arguments),We(r)}const Ie=Math.abs,S=Math.atan2,q=Math.cos,sa=Math.max,de=Math.min,H=Math.sin,z=Math.sqrt,P=1e-12,U=Math.PI,ie=U/2,ca=2*U;function la(e){return e>1?0:e<-1?U:Math.acos(e)}function xe(e){return e>=1?ie:e<=-1?-ie:Math.asin(e)}function ma(e){return e.innerRadius}function ga(e){return e.outerRadius}function da(e){return e.startAngle}function ha(e){return e.endAngle}function va(e){return e&&e.padAngle}function wa(e,n,s,t,r,u,c,o){var h=s-e,g=t-n,i=c-r,v=o-u,a=v*h-i*g;if(!(a*a<P))return a=(i*(n-u)-v*(e-r))/a,[e+a*h,n+a*g]}function ne(e,n,s,t,r,u,c){var o=e-s,h=n-t,g=(c?u:-u)/z(o*o+h*h),i=g*h,v=-g*o,a=e+i,l=n+v,m=s+i,f=t+v,I=(a+m)/2,y=(l+f)/2,A=m-a,E=f-l,_=A*A+E*E,x=r-u,C=a*f-m*l,N=(E<0?-1:1)*z(sa(0,x*x*_-C*C)),D=(C*E-A*N)/_,G=(-C*A-E*N)/_,R=(C*E+A*N)/_,k=(-C*A+E*N)/_,B=D-I,d=G-y,w=R-I,F=k-y;return B*B+d*d>w*w+F*F&&(D=R,G=k),{cx:D,cy:G,x01:-i,y01:-v,x11:D*(r/x-1),y11:G*(r/x-1)}}function Ce(){var e=ma,n=ga,s=O(0),t=null,r=da,u=ha,c=va,o=null,h=Ze(g);function g(){var i,v,a=+e.apply(this,arguments),l=+n.apply(this,arguments),m=r.apply(this,arguments)-ie,f=u.apply(this,arguments)-ie,I=Ie(f-m),y=f>m;if(o||(o=i=h()),l<a&&(v=l,l=a,a=v),!(l>P))o.moveTo(0,0);else if(I>ca-P)o.moveTo(l*q(m),l*H(m)),o.arc(0,0,l,m,f,!y),a>P&&(o.moveTo(a*q(f),a*H(f)),o.arc(0,0,a,f,m,y));else{var A=m,E=f,_=m,x=f,C=I,N=I,D=c.apply(this,arguments)/2,G=D>P&&(t?+t.apply(this,arguments):z(a*a+l*l)),R=de(Ie(l-a)/2,+s.apply(this,arguments)),k=R,B=R,d,w;if(G>P){var F=xe(G/a*H(D)),Q=xe(G/l*H(D));(C-=F*2)>P?(F*=y?1:-1,_+=F,x-=F):(C=0,_=x=(m+f)/2),(N-=Q*2)>P?(Q*=y?1:-1,A+=Q,E-=Q):(N=0,A=E=(m+f)/2)}var Y=l*q(A),j=l*H(A),W=a*q(x),Z=a*H(x);if(R>P){var ee=l*q(E),ae=l*H(E),oe=a*q(_),se=a*H(_),T;if(I<U)if(T=wa(Y,j,oe,se,ee,ae,W,Z)){var ce=Y-T[0],le=j-T[1],me=ee-T[0],ge=ae-T[1],Pe=1/H(la((ce*me+le*ge)/(z(ce*ce+le*le)*z(me*me+ge*ge)))/2),Ee=z(T[0]*T[0]+T[1]*T[1]);k=de(R,(a-Ee)/(Pe-1)),B=de(R,(l-Ee)/(Pe+1))}else k=B=0}N>P?B>P?(d=ne(oe,se,Y,j,l,B,y),w=ne(ee,ae,W,Z,l,B,y),o.moveTo(d.cx+d.x01,d.cy+d.y01),B<R?o.arc(d.cx,d.cy,B,S(d.y01,d.x01),S(w.y01,w.x01),!y):(o.arc(d.cx,d.cy,B,S(d.y01,d.x01),S(d.y11,d.x11),!y),o.arc(0,0,l,S(d.cy+d.y11,d.cx+d.x11),S(w.cy+w.y11,w.cx+w.x11),!y),o.arc(w.cx,w.cy,B,S(w.y11,w.x11),S(w.y01,w.x01),!y))):(o.moveTo(Y,j),o.arc(0,0,l,A,E,!y)):o.moveTo(Y,j),!(a>P)||!(C>P)?o.lineTo(W,Z):k>P?(d=ne(W,Z,ee,ae,a,-k,y),w=ne(Y,j,oe,se,a,-k,y),o.lineTo(d.cx+d.x01,d.cy+d.y01),k<R?o.arc(d.cx,d.cy,k,S(d.y01,d.x01),S(w.y01,w.x01),!y):(o.arc(d.cx,d.cy,k,S(d.y01,d.x01),S(d.y11,d.x11),!y),o.arc(0,0,a,S(d.cy+d.y11,d.cx+d.x11),S(w.cy+w.y11,w.cx+w.x11),y),o.arc(w.cx,w.cy,k,S(w.y11,w.x11),S(w.y01,w.x01),!y))):o.arc(0,0,a,x,_,y)}if(o.closePath(),i)return o=null,i+""||null}return g.centroid=function(){var i=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,v=(+r.apply(this,arguments)+ +u.apply(this,arguments))/2-U/2;return[q(v)*i,H(v)*i]},g.innerRadius=function(i){return arguments.length?(e=typeof i=="function"?i:O(+i),g):e},g.outerRadius=function(i){return arguments.length?(n=typeof i=="function"?i:O(+i),g):n},g.cornerRadius=function(i){return arguments.length?(s=typeof i=="function"?i:O(+i),g):s},g.padRadius=function(i){return arguments.length?(t=i==null?null:typeof i=="function"?i:O(+i),g):t},g.startAngle=function(i){return arguments.length?(r=typeof i=="function"?i:O(+i),g):r},g.endAngle=function(i){return arguments.length?(u=typeof i=="function"?i:O(+i),g):u},g.padAngle=function(i){return arguments.length?(c=typeof i=="function"?i:O(+i),g):c},g.context=function(i){return arguments.length?(o=i??null,g):o},g}function J(e,n,s){this.k=e,this.x=n,this.y=s}J.prototype={constructor:J,scale:function(e){return e===1?this:new J(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new J(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};J.prototype;function Re(e,n,s){const t=e.slice();return t[9]=n[s],t}function He(e){let n,s,t,r,u,c,o=e[9].name+"",h,g,i,v;return{c(){n=V("path"),t=V("path"),u=V("g"),c=V("text"),h=re(o),this.h()},l(a){n=K(a,"path",{fill:!0,d:!0}),$(n).forEach(p),t=K(a,"path",{fill:!0,d:!0}),$(t).forEach(p),u=K(a,"g",{"text-anchor":!0,transform:!0});var l=$(u);c=K(l,"text",{transform:!0,"font-size":!0,"alignment-baseline":!0});var m=$(c);h=ue(m,o),m.forEach(p),l.forEach(p),this.h()},h(){M(n,"fill","cornflowerblue"),M(n,"d",s=e[3](e[9])),M(t,"fill","red"),M(t,"d",r=e[4](e[9])),M(c,"transform",g="rotate("+((e[1](e[9].name)+e[1].bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?180:0)+")"),M(c,"font-size","11px"),M(c,"alignment-baseline","middle"),M(u,"text-anchor",i=(e[1](e[9].name)+e[1].bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?"end":"start"),M(u,"transform",v="rotate("+((e[1](e[9].name)+e[1].bandwidth()/2)*180/Math.PI-90)+") translate("+(e[2](e[9].outward)+10)+", 0)")},m(a,l){b(a,n,l),b(a,t,l),b(a,u,l),L(u,c),L(c,h)},p(a,l){l&1&&s!==(s=a[3](a[9]))&&M(n,"d",s),l&1&&r!==(r=a[4](a[9]))&&M(t,"d",r),l&1&&o!==(o=a[9].name+"")&&Ye(h,o),l&1&&g!==(g="rotate("+((a[1](a[9].name)+a[1].bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?180:0)+")")&&M(c,"transform",g),l&1&&i!==(i=(a[1](a[9].name)+a[1].bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?"end":"start")&&M(u,"text-anchor",i),l&1&&v!==(v="rotate("+((a[1](a[9].name)+a[1].bandwidth()/2)*180/Math.PI-90)+") translate("+(a[2](a[9].outward)+10)+", 0)")&&M(u,"transform",v)},d(a){a&&p(n),a&&p(t),a&&p(u)}}}function fa(e){let n,s=e[0].links,t=[];for(let r=0;r<s.length;r+=1)t[r]=He(Re(e,s,r));return{c(){n=V("svg");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){n=K(r,"svg",{width:!0,height:!0,viewBox:!0});var u=$(n);for(let c=0;c<t.length;c+=1)t[c].l(u);u.forEach(p),this.h()},h(){M(n,"width","100%"),M(n,"height","800"),M(n,"viewBox","-250 -250 500 500")},m(r,u){b(r,n,u);for(let c=0;c<t.length;c+=1)t[c].m(n,null)},p(r,[u]){if(u&31){s=r[0].links;let c;for(c=0;c<s.length;c+=1){const o=Re(r,s,c);t[c]?t[c].p(o,u):(t[c]=He(o),t[c].c(),t[c].m(n,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}},i:he,o:he,d(r){r&&p(n),Fe(t,r)}}}let ya=300,pa=300,X=50;function Ma(e,n,s){let{paper:t=na}=n,r=Math.min(ya,pa)/2,u=Math.max(...t.links.map(a=>a.outward)),c=Math.max(...t.links.map(a=>a.inward)),o=Xe().range([0,2*Math.PI]).align(0).domain(t.links.map(a=>a.name)),h=Me().range([X,r]).domain([0,u]),g=Me().range([X,X/3]).domain([0,c]);const i=Ce().innerRadius(X).outerRadius(a=>h(a.outward)).startAngle(a=>o(a.name)).endAngle(a=>o(a.name)+o.bandwidth()).padAngle(.1).padRadius(X),v=Ce().innerRadius(a=>g(a.inward)).outerRadius(X).startAngle(a=>o(a.name)).endAngle(a=>o(a.name)+o.bandwidth()).padAngle(.1).padRadius(X);return e.$$set=a=>{"paper"in a&&s(0,t=a.paper)},[t,o,h,i,v]}class Sa extends Ge{constructor(n){super(),Oe(this,n,Ma,fa,$e,{paper:0})}}const Te=[{title:"Biological Order, Structure And Instabilities",doi:["10.1017/s0033583500000615"],subtitle:"cited by 174, referencing 19",links:[{name:"Agricultural and Biological Sciences",inward:.75,outward:5.583333333333334},{name:"Arts and Humanities",inward:0,outward:1.75},{name:"Biochemistry",inward:2.1875,outward:12.683333333333334},{name:"Business",inward:0,outward:.1},{name:"Chemical Engineering",inward:0,outward:.9249999999999999},{name:"Chemistry",inward:.7083333333333333,outward:2.808333333333333},{name:"Computer Science",inward:0,outward:3.8416666666666663},{name:"Decision Sciences",inward:0,outward:.1},{name:"Earth and Planetary Sciences",inward:0,outward:1.0833333333333333},{name:"Engineering",inward:.25,outward:2.8833333333333333},{name:"Environmental Science",inward:0,outward:2.8666666666666667},{name:"Genetics and Molecular Biology",inward:2.1875,outward:12.683333333333334},{name:"Health Professions",inward:0,outward:.5333333333333333},{name:"Immunology and Microbiology",inward:.49999999999999994,outward:1.6166666666666667},{name:"Management and Accounting",inward:0,outward:.1},{name:"Materials Science",inward:0,outward:1.975},{name:"Mathematics",inward:.49999999999999994,outward:8.158333333333335},{name:"Medicine",inward:1.0833333333333333,outward:6.583333333333333},{name:"Multidisciplinary",inward:1,outward:3.0999999999999996},{name:"Neuroscience",inward:0,outward:1.7416666666666667},{name:"Pharmacology",inward:0,outward:.5166666666666666},{name:"Physics and Astronomy",inward:.3333333333333333,outward:11.674999999999999},{name:"Psychology",inward:0,outward:1.4916666666666667},{name:"Social Sciences",inward:0,outward:1.6833333333333331},{name:"Toxicology and Pharmaceutics",inward:0,outward:.5166666666666666}],graph:{nodes:[{name:"Biochemistry"},{name:"Agricultural and Biological Sciences"},{name:"Genetics and Molecular Biology"},{name:"Biochemistry"},{name:"Chemistry"},{name:"Engineering"},{name:"Genetics and Molecular Biology"},{name:"Immunology and Microbiology"},{name:"Mathematics"},{name:"Medicine"},{name:"Multidisciplinary"},{name:"Physics and Astronomy"},{name:"Agricultural and Biological Sciences"},{name:"Arts and Humanities"},{name:"Biochemistry"},{name:"Business"},{name:"Chemical Engineering"},{name:"Chemistry"},{name:"Computer Science"},{name:"Decision Sciences"},{name:"Earth and Planetary Sciences"},{name:"Engineering"},{name:"Environmental Science"},{name:"Genetics and Molecular Biology"},{name:"Health Professions"},{name:"Immunology and Microbiology"},{name:"Management and Accounting"},{name:"Materials Science"},{name:"Mathematics"},{name:"Medicine"},{name:"Multidisciplinary"},{name:"Neuroscience"},{name:"Pharmacology"},{name:"Physics and Astronomy"},{name:"Psychology"},{name:"Social Sciences"},{name:"Toxicology and Pharmaceutics"}],links:[{source:0,target:12,value:5.583333333333334},{source:1,target:0,value:.75},{source:2,target:12,value:5.583333333333334},{source:1,target:2,value:.75},{source:0,target:13,value:1.75},{source:2,target:13,value:1.75},{source:0,target:14,value:12.683333333333334},{source:3,target:0,value:2.1875},{source:2,target:14,value:12.683333333333334},{source:3,target:2,value:2.1875},{source:0,target:15,value:.1},{source:2,target:15,value:.1},{source:0,target:16,value:.9249999999999999},{source:2,target:16,value:.9249999999999999},{source:0,target:17,value:2.808333333333333},{source:4,target:0,value:.7083333333333333},{source:2,target:17,value:2.808333333333333},{source:4,target:2,value:.7083333333333333},{source:0,target:18,value:3.8416666666666663},{source:2,target:18,value:3.8416666666666663},{source:0,target:19,value:.1},{source:2,target:19,value:.1},{source:0,target:20,value:1.0833333333333333},{source:2,target:20,value:1.0833333333333333},{source:0,target:21,value:2.8833333333333333},{source:5,target:0,value:.25},{source:2,target:21,value:2.8833333333333333},{source:5,target:2,value:.25},{source:0,target:22,value:2.8666666666666667},{source:2,target:22,value:2.8666666666666667},{source:0,target:23,value:12.683333333333334},{source:6,target:0,value:2.1875},{source:2,target:23,value:12.683333333333334},{source:6,target:2,value:2.1875},{source:0,target:24,value:.5333333333333333},{source:2,target:24,value:.5333333333333333},{source:0,target:25,value:1.6166666666666667},{source:7,target:0,value:.49999999999999994},{source:2,target:25,value:1.6166666666666667},{source:7,target:2,value:.49999999999999994},{source:0,target:26,value:.1},{source:2,target:26,value:.1},{source:0,target:27,value:1.975},{source:2,target:27,value:1.975},{source:0,target:28,value:8.158333333333335},{source:8,target:0,value:.49999999999999994},{source:2,target:28,value:8.158333333333335},{source:8,target:2,value:.49999999999999994},{source:0,target:29,value:6.583333333333333},{source:9,target:0,value:1.0833333333333333},{source:2,target:29,value:6.583333333333333},{source:9,target:2,value:1.0833333333333333},{source:0,target:30,value:3.0999999999999996},{source:10,target:0,value:1},{source:2,target:30,value:3.0999999999999996},{source:10,target:2,value:1},{source:0,target:31,value:1.7416666666666667},{source:2,target:31,value:1.7416666666666667},{source:0,target:32,value:.5166666666666666},{source:2,target:32,value:.5166666666666666},{source:0,target:33,value:11.674999999999999},{source:11,target:0,value:.3333333333333333},{source:2,target:33,value:11.674999999999999},{source:11,target:2,value:.3333333333333333},{source:0,target:34,value:1.4916666666666667},{source:2,target:34,value:1.4916666666666667},{source:0,target:35,value:1.6833333333333331},{source:2,target:35,value:1.6833333333333331},{source:0,target:36,value:.5166666666666666},{source:2,target:36,value:.5166666666666666}]},referencing:19,cited:174},{title:"Creation And Persistence Of Ties In Cluster Knowledge Networks",doi:["10.1093/jeg/lbx039"],subtitle:"cited by 15, referencing 74",links:[{name:"Agricultural and Biological Sciences",inward:.06666666666666667,outward:0},{name:"Arts and Humanities",inward:1.1666666666666665,outward:0},{name:"Biochemistry",inward:.17777777777777773,outward:0},{name:"Business",inward:2.222222222222222,outward:.8055555555555555},{name:"Computer Science",inward:0,outward:.2222222222222222},{name:"Decision Sciences",inward:.5277777777777777,outward:0},{name:"Econometrics and Finance",inward:1.6388888888888886,outward:.47222222222222215},{name:"Economics",inward:1.6388888888888886,outward:.47222222222222215},{name:"Energy",inward:0,outward:.2222222222222222},{name:"Engineering",inward:.5277777777777777,outward:.2222222222222222},{name:"Environmental Science",inward:2.1666666666666665,outward:.38888888888888884},{name:"Genetics and Molecular Biology",inward:.17777777777777773,outward:0},{name:"Management and Accounting",inward:2.222222222222222,outward:.8055555555555555},{name:"Mathematics",inward:.16666666666666666,outward:.5},{name:"Medicine",inward:.06666666666666667,outward:0},{name:"Multidisciplinary",inward:.6777777777777777,outward:.2222222222222222},{name:"Physics and Astronomy",inward:.16666666666666666,outward:.16666666666666666},{name:"Psychology",inward:.3333333333333333,outward:.1111111111111111},{name:"Social Sciences",inward:10.722222222222223,outward:.722222222222222}],graph:{nodes:[{name:"Agricultural and Biological Sciences"},{name:"Arts and Humanities"},{name:"Biochemistry"},{name:"Econometrics and Finance"},{name:"Business"},{name:"Economics"},{name:"Social Sciences"},{name:"Decision Sciences"},{name:"Econometrics and Finance"},{name:"Economics"},{name:"Engineering"},{name:"Environmental Science"},{name:"Genetics and Molecular Biology"},{name:"Management and Accounting"},{name:"Mathematics"},{name:"Medicine"},{name:"Multidisciplinary"},{name:"Physics and Astronomy"},{name:"Psychology"},{name:"Social Sciences"},{name:"Business"},{name:"Computer Science"},{name:"Econometrics and Finance"},{name:"Economics"},{name:"Energy"},{name:"Engineering"},{name:"Environmental Science"},{name:"Management and Accounting"},{name:"Mathematics"},{name:"Multidisciplinary"},{name:"Physics and Astronomy"},{name:"Psychology"},{name:"Social Sciences"}],links:[{source:0,target:3,value:.06666666666666667},{source:0,target:5,value:.06666666666666667},{source:0,target:6,value:.06666666666666667},{source:1,target:3,value:1.1666666666666665},{source:1,target:5,value:1.1666666666666665},{source:1,target:6,value:1.1666666666666665},{source:2,target:3,value:.17777777777777776},{source:2,target:5,value:.17777777777777776},{source:2,target:6,value:.17777777777777776},{source:3,target:20,value:.8055555555555555},{source:4,target:3,value:2.222222222222222},{source:5,target:20,value:.8055555555555555},{source:4,target:5,value:2.222222222222222},{source:6,target:20,value:.8055555555555555},{source:4,target:6,value:2.222222222222222},{source:3,target:21,value:.2222222222222222},{source:5,target:21,value:.2222222222222222},{source:6,target:21,value:.2222222222222222},{source:7,target:3,value:.5277777777777777},{source:7,target:5,value:.5277777777777777},{source:7,target:6,value:.5277777777777777},{source:3,target:22,value:.47222222222222215},{source:8,target:3,value:1.6388888888888886},{source:5,target:22,value:.47222222222222215},{source:8,target:5,value:1.6388888888888886},{source:6,target:22,value:.47222222222222215},{source:8,target:6,value:1.6388888888888886},{source:3,target:23,value:.47222222222222215},{source:9,target:3,value:1.6388888888888886},{source:5,target:23,value:.47222222222222215},{source:9,target:5,value:1.6388888888888886},{source:6,target:23,value:.47222222222222215},{source:9,target:6,value:1.6388888888888886},{source:3,target:24,value:.2222222222222222},{source:5,target:24,value:.2222222222222222},{source:6,target:24,value:.2222222222222222},{source:3,target:25,value:.2222222222222222},{source:10,target:3,value:.5277777777777777},{source:5,target:25,value:.2222222222222222},{source:10,target:5,value:.5277777777777777},{source:6,target:25,value:.2222222222222222},{source:10,target:6,value:.5277777777777777},{source:3,target:26,value:.38888888888888884},{source:11,target:3,value:2.1666666666666665},{source:5,target:26,value:.38888888888888884},{source:11,target:5,value:2.1666666666666665},{source:6,target:26,value:.38888888888888884},{source:11,target:6,value:2.1666666666666665},{source:12,target:3,value:.17777777777777776},{source:12,target:5,value:.17777777777777776},{source:12,target:6,value:.17777777777777776},{source:3,target:27,value:.8055555555555555},{source:13,target:3,value:2.222222222222222},{source:5,target:27,value:.8055555555555555},{source:13,target:5,value:2.222222222222222},{source:6,target:27,value:.8055555555555555},{source:13,target:6,value:2.222222222222222},{source:3,target:28,value:.5},{source:14,target:3,value:.16666666666666666},{source:5,target:28,value:.5},{source:14,target:5,value:.16666666666666666},{source:6,target:28,value:.5},{source:14,target:6,value:.16666666666666666},{source:15,target:3,value:.06666666666666667},{source:15,target:5,value:.06666666666666667},{source:15,target:6,value:.06666666666666667},{source:3,target:29,value:.2222222222222222},{source:16,target:3,value:.6777777777777777},{source:5,target:29,value:.2222222222222222},{source:16,target:5,value:.6777777777777777},{source:6,target:29,value:.2222222222222222},{source:16,target:6,value:.6777777777777777},{source:3,target:30,value:.16666666666666666},{source:17,target:3,value:.16666666666666666},{source:5,target:30,value:.16666666666666666},{source:17,target:5,value:.16666666666666666},{source:6,target:30,value:.16666666666666666},{source:17,target:6,value:.16666666666666666},{source:3,target:31,value:.1111111111111111},{source:18,target:3,value:.3333333333333333},{source:5,target:31,value:.1111111111111111},{source:18,target:5,value:.3333333333333333},{source:6,target:31,value:.1111111111111111},{source:18,target:6,value:.3333333333333333},{source:3,target:32,value:.7222222222222221},{source:19,target:3,value:10.722222222222223},{source:5,target:32,value:.7222222222222221},{source:19,target:5,value:10.722222222222223},{source:6,target:32,value:.7222222222222221},{source:19,target:6,value:10.722222222222223}]},referencing:74,cited:15},{title:"Emergence of Scaling in Random Networks",doi:["10.1126/science.286.5439.509"],subtitle:"cited by 16057, referencing 8",links:[{name:"Agricultural and Biological Sciences",inward:0,outward:331.06666666666666},{name:"Arts and Humanities",inward:0,outward:93.14761904761905},{name:"Biochemistry",inward:1.6666666666666665,outward:497.1813492063492},{name:"Business",inward:0,outward:197.51190476190476},{name:"Chemical Engineering",inward:0,outward:48.531349206349205},{name:"Chemistry",inward:0,outward:87.68333333333334},{name:"Computer Science",inward:0,outward:2953.4956349206345},{name:"Decision Sciences",inward:0,outward:363.2928571428571},{name:"Dentistry",inward:0,outward:1},{name:"Earth and Planetary Sciences",inward:0,outward:78.43333333333332},{name:"Econometrics and Finance",inward:0,outward:148.28809523809522},{name:"Economics",inward:0,outward:148.28809523809522},{name:"Energy",inward:0,outward:71.58571428571429},{name:"Engineering",inward:0,outward:1131.8146825396825},{name:"Environmental Science",inward:0,outward:240.3928571428571},{name:"Genetics and Molecular Biology",inward:1.6666666666666665,outward:497.1813492063492},{name:"Health Professions",inward:0,outward:20.549999999999997},{name:"Immunology and Microbiology",inward:0,outward:71.55714285714285},{name:"Management and Accounting",inward:0,outward:197.51190476190476},{name:"Materials Science",inward:.5,outward:226.49801587301585},{name:"Mathematics",inward:.5,outward:2862.169047619048},{name:"Medicine",inward:0,outward:558.7623015873015},{name:"Multidisciplinary",inward:2.6666666666666665,outward:1000.3666666666667},{name:"Neuroscience",inward:0,outward:261.6333333333333},{name:"Nursing",inward:0,outward:3.158333333333333},{name:"Pharmacology",inward:0,outward:22.577777777777776},{name:"Physics and Astronomy",inward:1,outward:3066.1000000000004},{name:"Psychology",inward:0,outward:153.12142857142857},{name:"Social Sciences",inward:0,outward:693.9380952380952},{name:"Toxicology and Pharmaceutics",inward:0,outward:22.577777777777776},{name:"Veterinary",inward:0,outward:7.583333333333333}],graph:{nodes:[{name:"Unkown"},{name:"Biochemistry"},{name:"Genetics and Molecular Biology"},{name:"Materials Science"},{name:"Mathematics"},{name:"Multidisciplinary"},{name:"Physics and Astronomy"},{name:"Agricultural and Biological Sciences"},{name:"Arts and Humanities"},{name:"Biochemistry"},{name:"Business"},{name:"Chemical Engineering"},{name:"Chemistry"},{name:"Computer Science"},{name:"Decision Sciences"},{name:"Dentistry"},{name:"Earth and Planetary Sciences"},{name:"Econometrics and Finance"},{name:"Economics"},{name:"Energy"},{name:"Engineering"},{name:"Environmental Science"},{name:"Genetics and Molecular Biology"},{name:"Health Professions"},{name:"Immunology and Microbiology"},{name:"Management and Accounting"},{name:"Materials Science"},{name:"Mathematics"},{name:"Medicine"},{name:"Multidisciplinary"},{name:"Neuroscience"},{name:"Nursing"},{name:"Pharmacology"},{name:"Physics and Astronomy"},{name:"Psychology"},{name:"Social Sciences"},{name:"Toxicology and Pharmaceutics"},{name:"Veterinary"}],links:[{source:0,target:7,value:331.06666666666666},{source:0,target:8,value:93.14761904761905},{source:0,target:9,value:497.1813492063492},{source:1,target:0,value:1.6666666666666665},{source:0,target:10,value:197.51190476190476},{source:0,target:11,value:48.531349206349205},{source:0,target:12,value:87.68333333333334},{source:0,target:13,value:2953.4956349206345},{source:0,target:14,value:363.2928571428571},{source:0,target:15,value:1},{source:0,target:16,value:78.43333333333332},{source:0,target:17,value:148.28809523809522},{source:0,target:18,value:148.28809523809522},{source:0,target:19,value:71.58571428571429},{source:0,target:20,value:1131.8146825396825},{source:0,target:21,value:240.3928571428571},{source:0,target:22,value:497.1813492063492},{source:2,target:0,value:1.6666666666666665},{source:0,target:23,value:20.549999999999997},{source:0,target:24,value:71.55714285714285},{source:0,target:25,value:197.51190476190476},{source:0,target:26,value:226.49801587301585},{source:3,target:0,value:.5},{source:0,target:27,value:2862.169047619048},{source:4,target:0,value:.5},{source:0,target:28,value:558.7623015873015},{source:0,target:29,value:1000.3666666666667},{source:5,target:0,value:2.6666666666666665},{source:0,target:30,value:261.6333333333333},{source:0,target:31,value:3.158333333333333},{source:0,target:32,value:22.577777777777776},{source:0,target:33,value:3066.1000000000004},{source:6,target:0,value:1},{source:0,target:34,value:153.12142857142857},{source:0,target:35,value:693.9380952380952},{source:0,target:36,value:22.577777777777776},{source:0,target:37,value:7.583333333333333}]},referencing:8,cited:16057},{title:"The Building Blocks Of Economic Complexity",doi:["10.1073/pnas.0900943106"],subtitle:"cited by 863, referencing 6",links:[{name:"Agricultural and Biological Sciences",inward:0,outward:11.250000000000002},{name:"Arts and Humanities",inward:.5,outward:10.126190476190475},{name:"Biochemistry",inward:0,outward:11.016666666666667},{name:"Business",inward:.25,outward:50.74285714285714},{name:"Chemical Engineering",inward:0,outward:1.1333333333333333},{name:"Chemistry",inward:0,outward:3.916666666666666},{name:"Computer Science",inward:0,outward:28.283333333333335},{name:"Decision Sciences",inward:0,outward:15.683333333333332},{name:"Earth and Planetary Sciences",inward:0,outward:5.35},{name:"Econometrics and Finance",inward:1.75,outward:106.4095238095238},{name:"Economics",inward:1.75,outward:106.4095238095238},{name:"Energy",inward:0,outward:29.016666666666666},{name:"Engineering",inward:0,outward:39.39999999999999},{name:"Environmental Science",inward:0,outward:75.31666666666666},{name:"Genetics and Molecular Biology",inward:0,outward:11.016666666666667},{name:"Immunology and Microbiology",inward:0,outward:.8666666666666667},{name:"Management and Accounting",inward:.25,outward:50.74285714285714},{name:"Materials Science",inward:0,outward:3.333333333333333},{name:"Mathematics",inward:0,outward:31.9},{name:"Medicine",inward:0,outward:27.166666666666664},{name:"Multidisciplinary",inward:.5,outward:54.96666666666667},{name:"Neuroscience",inward:0,outward:4.033333333333333},{name:"Physics and Astronomy",inward:1,outward:39.45},{name:"Psychology",inward:0,outward:13.25952380952381},{name:"Social Sciences",inward:0,outward:132.2095238095238}],graph:{nodes:[{name:"Multidisciplinary"},{name:"Arts and Humanities"},{name:"Business"},{name:"Econometrics and Finance"},{name:"Economics"},{name:"Management and Accounting"},{name:"Multidisciplinary"},{name:"Physics and Astronomy"},{name:"Agricultural and Biological Sciences"},{name:"Arts and Humanities"},{name:"Biochemistry"},{name:"Business"},{name:"Chemical Engineering"},{name:"Chemistry"},{name:"Computer Science"},{name:"Decision Sciences"},{name:"Earth and Planetary Sciences"},{name:"Econometrics and Finance"},{name:"Economics"},{name:"Energy"},{name:"Engineering"},{name:"Environmental Science"},{name:"Genetics and Molecular Biology"},{name:"Immunology and Microbiology"},{name:"Management and Accounting"},{name:"Materials Science"},{name:"Mathematics"},{name:"Medicine"},{name:"Multidisciplinary"},{name:"Neuroscience"},{name:"Physics and Astronomy"},{name:"Psychology"},{name:"Social Sciences"}],links:[{source:0,target:8,value:11.250000000000002},{source:0,target:9,value:10.126190476190475},{source:1,target:0,value:.5},{source:0,target:10,value:11.016666666666667},{source:0,target:11,value:50.74285714285714},{source:2,target:0,value:.25},{source:0,target:12,value:1.1333333333333333},{source:0,target:13,value:3.916666666666666},{source:0,target:14,value:28.283333333333335},{source:0,target:15,value:15.683333333333332},{source:0,target:16,value:5.35},{source:0,target:17,value:106.4095238095238},{source:3,target:0,value:1.75},{source:0,target:18,value:106.4095238095238},{source:4,target:0,value:1.75},{source:0,target:19,value:29.016666666666666},{source:0,target:20,value:39.39999999999999},{source:0,target:21,value:75.31666666666666},{source:0,target:22,value:11.016666666666667},{source:0,target:23,value:.8666666666666667},{source:0,target:24,value:50.74285714285714},{source:5,target:0,value:.25},{source:0,target:25,value:3.333333333333333},{source:0,target:26,value:31.9},{source:0,target:27,value:27.166666666666664},{source:0,target:28,value:54.96666666666667},{source:6,target:0,value:.5},{source:0,target:29,value:4.033333333333333},{source:0,target:30,value:39.45},{source:7,target:0,value:1},{source:0,target:31,value:13.25952380952381},{source:0,target:32,value:132.2095238095238}]},referencing:6,cited:863}];function Ne(e,n,s){const t=e.slice();return t[0]=n[s],t}function De(e){let n,s=e[0].title+"",t,r,u,c;return u=new Sa({props:{paper:e[0]}}),{c(){n=ve("h2"),t=re(s),r=we(),ze(u.$$.fragment)},l(o){n=fe(o,"H2",{});var h=$(n);t=ue(h,s),h.forEach(p),r=ye(o),Ve(u.$$.fragment,o)},m(o,h){b(o,n,h),L(n,t),b(o,r,h),Ke(u,o,h),c=!0},p:he,i(o){c||(te(u.$$.fragment,o),c=!0)},o(o){pe(u.$$.fragment,o),c=!1},d(o){o&&p(n),o&&p(r),Je(u,o)}}}function Pa(e){let n,s,t,r,u,c,o,h,g=Te,i=[];for(let a=0;a<g.length;a+=1)i[a]=De(Ne(e,g,a));const v=a=>pe(i[a],1,1,()=>{i[a]=null});return{c(){n=ve("h1"),s=re("Paper Circles"),t=we(),r=ve("p"),u=re(`Outer blue part is number of times cited in categories, inner red part is papers refrenced in
	categories`),c=we();for(let a=0;a<i.length;a+=1)i[a].c();o=Ae()},l(a){n=fe(a,"H1",{});var l=$(n);s=ue(l,"Paper Circles"),l.forEach(p),t=ye(a),r=fe(a,"P",{});var m=$(r);u=ue(m,`Outer blue part is number of times cited in categories, inner red part is papers refrenced in
	categories`),m.forEach(p),c=ye(a);for(let f=0;f<i.length;f+=1)i[f].l(a);o=Ae()},m(a,l){b(a,n,l),L(n,s),b(a,t,l),b(a,r,l),L(r,u),b(a,c,l);for(let m=0;m<i.length;m+=1)i[m].m(a,l);b(a,o,l),h=!0},p(a,[l]){if(l&0){g=Te;let m;for(m=0;m<g.length;m+=1){const f=Ne(a,g,m);i[m]?(i[m].p(f,l),te(i[m],1)):(i[m]=De(f),i[m].c(),te(i[m],1),i[m].m(o.parentNode,o))}for(Le(),m=g.length;m<i.length;m+=1)v(m);je()}},i(a){if(!h){for(let l=0;l<g.length;l+=1)te(i[l]);h=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)pe(i[l]);h=!1},d(a){a&&p(n),a&&p(t),a&&p(r),a&&p(c),Fe(i,a),a&&p(o)}}}class ka extends Ge{constructor(n){super(),Oe(this,n,null,Pa,$e,{})}}export{ka as default};
