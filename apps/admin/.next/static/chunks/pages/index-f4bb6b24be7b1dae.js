(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9183:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4359)}])},8424:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8742).Z,i=r(9298).Z,o=r(7446).Z,a=r(4970).Z,s=o(r(1987)),l=i(r(4354)),c=r(5557),d=r(4651),u=r(4937);r(7947);var f=i(r(6550));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,a=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>a,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:m,loading:g,srcString:_,config:x,unoptimized:b,loader:v,onLoadRef:j,onLoadingCompleteRef:w,onLoad:y,onError:E}=e,N=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return g=f?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},N,r,{width:o,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:g,style:n({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,_,j,w,b))},[_,j,w,E,b,t]),onLoad(e){let t=e.currentTarget;p(t,_,j,w,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===m&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),E&&E(e)}})))}),x=s.forwardRef((e,t)=>{let r,i;var o,{src:p,sizes:x,unoptimized:b=!1,priority:v=!1,loading:j,className:w,quality:y,width:E,height:N,fill:C,style:S,onLoad:k,onLoadingComplete:z,placeholder:P="empty",blurDataURL:R,layout:O,objectFit:I,objectPosition:L,lazyBoundary:A,lazyRoot:D}=e,H=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=s.useContext(u.ImageConfigContext),T=s.useMemo(()=>{let e=h||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[M]),G=H,W=G.loader||f.default;if(delete G.loader,"__next_img_default"in W){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=W;W=e=>{let{config:t}=e,r=a(e,["config"]);return B(r)}}if(O){"fill"===O&&(C=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];F&&(S=n({},S,F));let q={responsive:"100vw",fill:"100vw"}[O];q&&!x&&(x=q)}let V="",U=g(E),Z=g(N);if("object"==typeof(o=p)&&(m(o)||void 0!==o.src)){let J=m(p)?p.default:p;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,i=J.blurHeight,R=R||J.blurDataURL,V=J.src,!C){if(U||Z){if(U&&!Z){let Q=U/J.width;Z=Math.round(J.height*Q)}else if(!U&&Z){let X=Z/J.height;U=Math.round(J.width*X)}}else U=J.width,Z=J.height}}let K=!v&&("lazy"===j||void 0===j);((p="string"==typeof p?p:V).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,K=!1),T.unoptimized&&(b=!0);let Y=g(y),$=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},{color:"transparent"},S),ee="blur"===P&&R?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:r,blurHeight:i,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let s;s=o.exec(r);s)a.push(parseInt(s[2]));if(a.length){let l=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:T,src:p,unoptimized:b,width:U,quality:Y,sizes:x,loader:W}),er=p,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:G.crossOrigin},ei=s.useRef(k);s.useEffect(()=>{ei.current=k},[k]);let eo=s.useRef(z);s.useEffect(()=>{eo.current=z},[z]);let ea=n({isLazy:K,imgAttributes:et,heightInt:Z,widthInt:U,qualityInt:Y,className:w,imgStyle:$,blurStyle:ee,loading:j,config:T,fill:C,unoptimized:b,placeholder:P,loader:W,srcString:er,onLoadRef:ei,onLoadingCompleteRef:eo},G);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ea,{ref:t})),v?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5557:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o}=e,a=n||t,s=i||r,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},6550:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4359:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(1261);let i=()=>(console.log("hello from lib"),"hello from lib"),o=e=>{let{children:t,onClick:r,...i}=e;return(0,n.jsx)("button",{type:"button",onClick:r,...i,children:t})};var a=r(7262),s=r.n(a),l=r(3573),c=r.n(l),d=r(9748),u=r.n(d);function f(){return(0,n.jsxs)("div",{className:u().container,children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:u().main,children:[(0,n.jsxs)("h1",{className:u().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"this is admin111"})]}),(0,n.jsx)("h2",{children:i()}),(0,n.jsx)(o,{variant:"contained",children:"hello"}),(0,n.jsxs)("p",{className:u().description,children:["Get started by editing ",(0,n.jsx)("code",{className:u().code,children:"pages/index.tsx"})]}),(0,n.jsxs)("div",{className:u().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:u().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:u().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:u().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:u().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:u().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:u().logo,children:(0,n.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},9748:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},7262:function(e,t,r){e.exports=r(4354)},3573:function(e,t,r){e.exports=r(8424)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9183)}),_N_E=e.O()}]);