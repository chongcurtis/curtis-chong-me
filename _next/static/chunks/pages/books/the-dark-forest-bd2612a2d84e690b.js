(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{1558:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/the-dark-forest",function(){return n(3783)}])},1019:function(e,t,n){"use strict";var l,i;n.d(t,{GM:function(){return r},SR:function(){return l},Eb:function(){return a},JQ:function(){return o},Dy:function(){return m}});let s={fadeInAnimation:{initialClass:"fade-in-on-scroll",finalClass:"faded-in"},fadeInSlowAnimation:{initialClass:"fade-in-on-scroll-slow",finalClass:"faded-in-slow"},expandAnimation:{initialClass:"expand-on-scroll",finalClass:"expanded"},underlineAnimation:{initialClass:"underline-on-scroll",finalClass:"underlined"},dummyAnimation:{initialClass:"dummy-animation",finalClass:"dummy-animation-fin"}},r="animation-state-event",a=.7,o=.9;(i=l||(l={})).BEFORE_START="BEFORE START",i.RUNNING="RUNNING",i.PAUSED="PAUSED";let c=e=>new CustomEvent(r,{detail:e,bubbles:!0,cancelable:!0,composed:!1}),u=()=>{let e=Array.from(Object.values(s)),t=[];for(let n of e){let e=document.querySelectorAll(".".concat(n.initialClass));for(let l=0;l<e.length;l++){let i=e[l];t.push({text:i.innerText,element:i,elementTop:()=>i.getBoundingClientRect().top+document.documentElement.scrollTop,animationDefinition:n,animationDelay:x(i),isPersistentAnimation:d(i)})}}return t.sort((e,t)=>{let n=e.elementTop(),l=t.elementTop();if(n!==l)return n-l;let i=e.element.getBoundingClientRect().left,s=t.element.getBoundingClientRect().left;return i-s}),t},d=e=>{for(let t of e.classList)if("is-persistent-animation"===t)return!0;return!1},f=0,m=e=>{let t=u(),n=[],l=new Set,i=()=>{let e=Date.now();e-f<400||(f=e,s())},s=()=>{p(t,n,l,e),y(l),0===t.length&&0===l.size&&window.removeEventListener("scroll",i)};return setTimeout(()=>{i()},100),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},h="animation-delay-",x=e=>{for(let t of e.classList)if(t.startsWith(h))return parseInt(t.substring(h.length));return 100},p=(e,t,n,l)=>{let i=0===t.length;for(;e.length>0&&v(e,l);){let l=w(e,n);l.elementTop()<=window.scrollY?N(l):t.push(l)}for(;t.length>0&&t[0].elementTop()<=window.scrollY;)N(w(t,n));i&&g(t)},w=(e,t)=>{let n=e.shift();return n.isPersistentAnimation&&t.add(n),n},v=(e,t)=>{let n=document.getElementById("mover");return n&&(n.style.top=e[0].elementTop().toString()+"px"),e[0].elementTop()<=window.scrollY+window.innerHeight*t},g=e=>{e.length>0&&setTimeout(()=>{e.length>0&&(N(e.shift()),g(e))},e[0].animationDelay)},N=e=>{let t=e.element;t.classList.add(e.animationDefinition.finalClass),t.dispatchEvent(c("RUNNING"))},y=e=>{for(let t of e){let e=window.scrollY-10<=t.elementTop()+t.element.offsetHeight&&t.elementTop()<=window.scrollY+window.innerHeight+10?"RUNNING":"PAUSED";t.element.dispatchEvent(c(e))}}},6740:function(e,t,n){"use strict";n.d(t,{u:function(){return l}});class l{constructor(e,t,n,l,i,s,r,a=0){this.ax=0,this.ay=0,this.m=e,this.x=t,this.y=n,this.vx=l,this.vy=i,this.r=s,this.color=r,this.group=a}}},2266:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(5893),i=n(7294),s=n(1019),r=n(3465),a=n.n(r);function o(e){let{bodies:t,canvasWidth:n,canvasHeight:r}=e,o=i.useRef(a()(t)),c=i.useRef(null),u=i.useRef(0),d=i.useRef(s.SR.BEFORE_START);return i.useEffect(()=>{if(!c.current)return;let e=c.current;e.width=n,e.height=r;let l=function(e){let t=window.devicePixelRatio||1;e.width=e.width*t,e.height=e.height*t;let n=e.getContext("2d");return n.scale(t,t),n}(e);l.font="30px Arial";let i=n=>{if(d.current===n.detail)return;if(d.current=n.detail,d.current===s.SR.BEFORE_START&&n.detail===s.SR.RUNNING&&(o.current=a()(t)),n.detail===s.SR.PAUSED){cancelAnimationFrame(u.current);return}let i=()=>{(function(e,t){var n,l;let i=e.width,s=e.height,r=o.current.length,a=new Map;for(let e=0;e<r;e++){let t=o.current[e];t.ax=0,t.ay=0;let l=null!==(n=a.get(t.group))&&void 0!==n?n:[];l.push(t),a.set(t.group,l)}for(let[e,t]of a.entries())for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let l=t[e],i=t[n],s=(i.x-l.x)**2+(i.y-l.y)**2,r=Math.sqrt(s),a=Math.min(100*l.m*i.m/s,.1),o=a*(i.x-l.x)/r,c=a*(i.y-l.y)/r;l.ax+=o/l.m,i.ax-=o/i.m,l.ay+=c/l.m,i.ay-=c/i.m}for(let e=0;e<r;e++){let t=o.current[e];t.vx+=10*t.ax,t.vy+=10*t.ay,t.x+=t.vx,t.y+=t.vy}t.clearRect(0,0,i,s),l=t,o.current.forEach(e=>{l.beginPath(),l.arc(e.x,e.y,e.r,0,2*Math.PI,!1),l.fillStyle=e.color,l.fill(),l.lineWidth=5,l.strokeStyle=e.color,l.stroke()})})(e,l),u.current=requestAnimationFrame(i)};u.current=requestAnimationFrame(i)};return e.addEventListener(s.GM,i),()=>{e.removeEventListener(s.GM,i)}},[r,n,t]),(0,l.jsx)("canvas",{id:"canvas",ref:c,className:"fade-in-on-scroll is-persistent-animation h-full w-full bg-background-color"})}},3783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(5893),i=n(7294),s=n(1019),r=n(2266),a=n(6740);let o="#ff8c7d";new a.u(1e5,250,250,0,0,15,o),new a.u(100,280,250,0,0,2,"#78faff"),new a.u(100,400,250,0,0,6,"#fa438c");let c=[new a.u(1e3,300,200,.4,-.04,5,o),new a.u(1e3,250,270,-.1,-.04,5,o),new a.u(1e3,100,220,0,-.04,5,o),new a.u(1e3,350,200,-.3,.12,5,o),new a.u(100,250,250,0,-.1,2,"#f25eff"),new a.u(300,150,120,0,0,2,"#322bff"),new a.u(100,250,100,0,1,2,"#20d49b")],u=[new a.u(10,220,220,-2,2,5,o),new a.u(10,280,280,2,-2,5,o),new a.u(1,250,250,0,0,2,"#78faff")];function d(){return i.useEffect(()=>(0,s.Dy)(s.Eb),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"px-5 pt-[500px] text-center"}),(0,l.jsxs)("div",{className:"px-5 text-center",children:[(0,l.jsx)("p",{className:"fade-in-on-scroll relative mt-60 text-4xl",children:"Spoiler Alert!"}),(0,l.jsx)("p",{className:"fade-in-on-scroll relative mt-4 text-center text-xl",children:"I spoil the second book in the Three Body Problem series"}),(0,l.jsx)("p",{className:"text-md fade-in-on-scroll relative mt-4 text-center text-lg",children:"Note: You can read The Dark Forest without reading the previous book because it's a standalone story"})]}),(0,l.jsx)("div",{className:"relative mt-60"}),(0,l.jsx)("div",{className:"text-4xl",children:(0,l.jsx)("p",{className:"fade-in-on-scroll",children:"The Dark Forest"})}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-4",children:"The war is lost."}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-4",children:"It has been for 50 years."}),(0,l.jsx)("div",{className:"h-[350px] w-[350px] md:h-[500px] md:w-[500px]",children:(0,l.jsx)(r.Z,{bodies:c,canvasWidth:500,canvasHeight:500})}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-4 px-5 text-center",children:"What can you do if there's an enemy that can"}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-20 w-full px-5 ",children:"Hear your every conversation"}),(0,l.jsx)("div",{className:"h-[350px] w-[350px] md:h-[500px] md:w-[500px]",children:(0,l.jsx)(r.Z,{bodies:u,canvasWidth:500,canvasHeight:500})}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-4",children:"And stop your technological progress"}),(0,l.jsx)("p",{className:"fade-in-on-scroll mt-4",children:"Entrusted with the future of humanity"}),(0,l.jsxs)("p",{className:"fade-in-on-scroll mt-4",children:["Is ",(0,l.jsx)("span",{className:"underline-on-scroll"})]}),(0,l.jsx)("div",{className:"mb-[5000px]"})]})}}},function(e){e.O(0,[465,774,888,179],function(){return e(e.s=1558)}),_N_E=e.O()}]);