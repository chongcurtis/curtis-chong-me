(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{9174:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dreams",function(){return r(5691)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,a=r(2648).Z,n=r(1598).Z,l=r(7273).Z,s=n(r(7294)),o=a(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);var h=a(r(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,a,n,l,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&l(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}function x(e){let[t,r]=s.version.split("."),i=parseInt(t,10),a=parseInt(r,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let w=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:n,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:h,fetchPriority:f,fill:m,placeholder:p,loading:w,srcString:v,config:y,unoptimized:j,loader:b,onLoadRef:C,onLoadingCompleteRef:_,setBlurComplete:k,setShowAltText:N,onLoad:E,onError:S}=e,P=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return w=h?"lazy":w,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},P,x(f),{loading:w,width:n,height:a,decoding:"async","data-nimg":m?"fill":"1",className:c,style:i({},d,u)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,v,p,C,_,k,j))},[v,p,C,_,k,S,j,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,C,_,k,j)},onError:e=>{N(!0),"blur"===p&&k(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let r,a;var n,{src:g,sizes:v,unoptimized:y=!1,priority:j=!1,loading:b,className:C,quality:_,width:k,height:N,fill:E,style:S,onLoad:P,onLoadingComplete:M,placeholder:z="empty",blurDataURL:D,fetchPriority:O,layout:R,objectFit:I,objectPosition:A,lazyBoundary:T,lazyRoot:F}=e,B=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=s.useContext(u.ImageConfigContext),U=s.useMemo(()=>{let e=f||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[L]),W=B,G=W.loader||h.default;delete W.loader;let q="__next_img_default"in G;if(q){if("custom"===U.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,i=l(t,["config"]);return e(i)}}if(R){"fill"===R&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(S=i({},S,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let V="",Y=p(k),Z=p(N);if("object"==typeof(n=g)&&(m(n)||void 0!==n.src)){let e=m(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,D=D||e.blurDataURL,V=e.src,!E){if(Y||Z){if(Y&&!Z){let t=Y/e.width;Z=Math.round(e.height*t)}else if(!Y&&Z){let t=Z/e.height;Y=Math.round(e.width*t)}}else Y=e.width,Z=e.height}}let J=!j&&("lazy"===b||void 0===b);(!(g="string"==typeof g?g:V)||g.startsWith("data:")||g.startsWith("blob:"))&&(y=!0,J=!1),U.unoptimized&&(y=!0),q&&g.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(y=!0),j&&(O="high");let[X,H]=s.useState(!1),[K,Q]=s.useState(!1),$=p(_),ee=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},K?{}:{color:"transparent"},S),et="blur"===z&&D&&!X?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Y,heightInt:Z,blurWidth:r,blurHeight:a,blurDataURL:D,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:n,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,l),d=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((e,i)=>"".concat(s({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:r,quality:n,width:o[d]})}}({config:U,src:g,unoptimized:y,width:Y,quality:$,sizes:v,loader:G}),ei=g,ea=s.useRef(P);s.useEffect(()=>{ea.current=P},[P]);let en=s.useRef(M);s.useEffect(()=>{en.current=M},[M]);let el=i({isLazy:J,imgAttributes:er,heightInt:Z,widthInt:Y,qualityInt:$,className:C,imgStyle:ee,blurStyle:et,loading:b,config:U,fetchPriority:O,fill:E,unoptimized:y,placeholder:z,loader:G,srcString:ei,onLoadRef:ea,onLoadingCompleteRef:en,setBlurComplete:H,setShowAltText:Q},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},el,{ref:t})),j?s.default.createElement(o.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},x(O)))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:n,objectFit:l}=e,s=i||t,o=a||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5691:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var i=r(5893),a=r(7294),n=r(5792),l=r(1664),s=r.n(l);let o=()=>(0,i.jsxs)("div",{className:"flex flex-row items-end",children:[(0,i.jsxs)("svg",{width:"20vw",height:"auto",viewBox:"0 0 203 208",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"draw-stroke-on-scroll md:0 top-[200px] h-32 w-[20vw] md:w-40",children:[(0,i.jsx)("g",{clipPath:"url(#clip0_3_13)",children:(0,i.jsx)("path",{d:"M 97.7294,52.7694 C 134.0,29.9232 93.9326,3.21614 79.931,29.2308 C 68.0557,51.295 72.2437,135.378 71.8236,153.884 C 71.3031,176.813 54.8385,203.0 30.1443,203.0 C 24.5012,203.0 9.39975,198.846 6.26947,189.341 C 2.38443,177.544 7.47525,165.022 20.7359,165.022 C 37.8125,165.022 58.0323,170.511 73.1951,178.791 C 94.913,190.651 114.879,199.35 139.712,199.35 C 176.591,199.35 198.0,159.681 198.0,126.727 C 198.0,100.56 193.22,75.361 179.485,52.7694 C 161.044,22.4365 134.274,5.0 97.7294,5.0 C 86.6398,5.0 66.8104,8.41 56.204,12.0717 C 7.01995,29.052 -12.1353,101.231 60.5695,101.231",stroke:"#3AA6C8",strokeWidth:"9",strokeLinecap:"round"})}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_3_13",children:(0,i.jsx)("rect",{width:"203",height:"208",fill:"white"})})})]}),(0,i.jsxs)("svg",{height:"auto",viewBox:"0 0 467 58",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"draw-stroke-on-scroll animation-delay-700 xs:translate-y-0 -ml-4 w-[70vw] -translate-y-[6vw] md:w-80 md:translate-y-0",children:[(0,i.jsx)("g",{clipPath:"url(#clip0_3_14)",children:(0,i.jsx)("path",{d:"M2 55.6916C25.7282 55.6916 33.1647 44.0179 47.7755 26.2763C54.7755 23.7329 79.7755 -26.2238 48.2729 25.0053C46.3675 29.2925 58.0169 21.6686 59.5367 21.1087C70.8765 16.9308 74.9213 17.9968 73.175 31.0939C72.4042 36.8747 59.7143 51.3078 71.044 51.3078C77.5168 51.3078 82.9493 51.0586 89.0661 49.3595C95.3956 47.6013 101.792 43.9596 107.275 40.4702C108.97 39.3921 126.458 28.2856 119.265 27.2581C110.889 26.0615 87.7094 39.2577 101.73 46.6805C114.805 53.6023 131.644 39.2846 144.6 31.2762C153.608 25.7083 159.1 22.7762 166.1 26.2762C164.353 23.0319 154.632 24.8449 147.1 30.9957C139.542 37.1677 135.708 47.3445 143.275 48.7762C161.775 52.2762 163.728 37.5003 167.1 31.5988C170.631 25.4197 166.553 33.0579 165.554 36.2762C164.197 40.6518 164.215 41.6786 164.215 46.217C164.215 61.1341 182.062 38.3142 183.6 36.7762C188.358 32.0185 191.1 36.2762 191.1 39.2762C191.1 39.9707 189.039 50.721 189.1 48.7762C189.203 45.4813 192.633 32.4863 194.6 30.0824C207.119 14.7808 208.052 39.0612 208.052 50.0528C208.052 56.5932 207.962 42.8633 208.113 41.3462C209.132 31.1634 219.31 17.9434 223.335 32.0307C223.995 34.3425 226.76 45.9671 228.275 47.8609C233.297 54.1372 253.739 43.4421 262.775 33.2762C270.775 24.2762 272.299 18.4186 275.775 32.0307C278.775 43.7762 275.851 47.372 270.775 49.7762C263.28 53.3267 246.775 53.9698 244.775 48.4698C244.14 46.7217 245.045 44.9698 248.275 48.4698C254.275 54.9698 262.753 51.9506 275.275 47.7763C354.775 21.2763 358.775 64.2763 464.775 25.7763",stroke:"url(#paint0_linear_3_14)",strokeWidth:"3",strokeLinecap:"round"})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_3_14",x1:"465.276",y1:"-56.2237",x2:"-59.2244",y2:"100.777",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{offset:"0.0441139",stopColor:"#00F0FF",stopOpacity:"0.11"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#1471B5"})]}),(0,i.jsx)("clipPath",{id:"clip0_3_14",children:(0,i.jsx)("rect",{width:"467",height:"58",fill:"white"})})]})]})]});var c=r(9301),d=r(4184),u=r.n(d);function h(e){let{animateImmediately:t}=e,r=(0,a.useRef)(null);(0,a.useEffect)(()=>{t&&r.current&&(0,n.pv)(r.current,c.Y.expandVerticallyAnimation)},[r.current]);let l=u()("border-0 bg-gradient-to-t from-transparent via-black to-transparent my-auto mx-5",{"expand-vertically-on-scroll":!t,"h-1 transition-height duration-2000 ease-in":t}),s=(0,i.jsx)("hr",{ref:r,className:l,style:{width:1}});return s}var f=r(5675),m=r.n(f);let p=e=>{let{dreams:t}=e,[r,n]=(0,a.useState)(null);(0,a.useEffect)(()=>{t.length>0&&n(t[0])},[t]);let l=e=>{n(e)};return(0,i.jsxs)("div",{className:"fade-in-on-scroll flex flex-col md:flex-row",children:[(0,i.jsx)("div",{className:"w-64 flex-none overflow-auto",children:(0,i.jsx)("ul",{className:"divide-y divide-gray-200",children:t.map((e,t)=>(0,i.jsx)("li",{className:"cursor-pointer px-2 py-6",onClick:()=>l(e),children:e.description},t))})}),(0,i.jsx)("div",{className:"align-center my-auto hidden h-[400px] md:block",children:(0,i.jsx)(h,{animateImmediately:!0})}),(0,i.jsxs)("div",{className:"max-h-[500px] p-4",children:[" ",r&&r.imgUrls.map((e,t)=>(0,i.jsx)("div",{className:"max-h-[500px] max-w-[500px]",children:(0,i.jsx)(m(),{width:500,height:500,src:e.url,alt:e.alt,className:"w-full object-contain"})},t))]})]})};function g(){a.useEffect(()=>(0,n.Dy)(n.JQ),[]);let e=[{description:(0,i.jsx)("p",{children:"Making a Lego Death Star with my own pieces (cause the real set was too pricy)"}),imgUrls:[{url:"/dreams/deathstar.gif",alt:"My Death Star!"}]},{description:(0,i.jsxs)("p",{children:["Building a redstone calculator to honour Minecraft YouTubers I looked up to (",(0,i.jsx)(s(),{href:"https://www.youtube.com/@Properinglish19",target:"_blank",className:"text-left underline decoration-sleepover-secondary underline-offset-2 hover:decoration-wavy",children:"Properinglish19"})," ","and"," ",(0,i.jsx)(s(),{href:"https://www.youtube.com/@bennyscube",target:"_blank",className:"text-left underline decoration-sleepover-secondary underline-offset-2 hover:decoration-wavy",children:"bennyscube"}),")"]}),imgUrls:[{url:"/dreams/calculation.gif",alt:"My Death Star!"}]},{description:(0,i.jsx)("p",{children:"Exploring far-flung college campuses with my hackathon team"}),imgUrls:[{url:"/dreams/lowkey.jpg",alt:"My hackathon team!"}]},{description:(0,i.jsx)("p",{children:"landing my first job!"}),imgUrls:[{url:"/dreams/last-day-at-flipp.jpg",alt:"My last day at Flipp"}]},{description:(0,i.jsx)("p",{children:"And getting into my dream school"}),imgUrls:[{url:"/dreams/waterloo-se-2023.jpg",alt:"My Death Star!"}]}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(o,{}),(0,i.jsx)("p",{className:"fade-in-on-scroll mb-2 mt-5 text-4xl",children:"Dreams in Progress"}),(0,i.jsx)("ul",{className:"mx-10 list-disc marker:text-center marker:font-extrabold marker:text-slate-800",children:(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"To figure out how to build digital worlds that have as much emergent behaviour as the internet."})}),(0,i.jsx)("p",{className:"fade-in-on-scroll mx-10 mb-2 mt-10 text-4xl",children:"Dreams that Died"}),(0,i.jsxs)("ul",{className:"mx-10 list-disc marker:text-center marker:font-extrabold marker:text-slate-800",children:[(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"Starting a startup with my hackathon team"}),(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"Being an educational speaker on TED"}),(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"Reaching Grandmaster rank on Kaggle"})]}),(0,i.jsx)("p",{className:"fade-in-on-scroll mx-10 mb-2 mt-10 text-4xl",children:"Dreams That Came True"}),(0,i.jsx)("div",{className:"mx-10",children:(0,i.jsx)(p,{dreams:e})}),(0,i.jsx)("p",{className:"fade-in-on-scroll m-10 mb-2 mt-10 text-4xl",children:"Dreams for the Future"}),(0,i.jsxs)("ul",{className:"mx-10 list-disc marker:text-center marker:font-extrabold marker:text-slate-800",children:[(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"Attend a Taylor Swift dance party"}),(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"To own two dishwashers: One for clean dishes and one for dirty"}),(0,i.jsx)("li",{className:"fade-in-on-scroll",children:"To experience the other side of the fence and mentor an intern \uD83D\uDE42"})]}),(0,i.jsx)("div",{className:"h-80"})]})}},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9174)}),_N_E=e.O()}]);