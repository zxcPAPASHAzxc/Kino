"use strict";(self.webpackChunkkinopoisk=self.webpackChunkkinopoisk||[]).push([[440],{440:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(791),r=n(273);const s="FavoritePage_favoritePageWrapper__o+CpU",a="FavoritePage_favoritePageWrapperInset__WDLyL",o="FavoritePage_listMovies__IpMpO";var c=n(609),l=n(385),d=n(777),u=n(290),p=n(655),m=n(184);const h=()=>{const[e,t]=(0,i.useState)([]),[n,h]=(0,i.useState)(d.VZ),[g,v]=(0,i.useState)(!0),f=(0,p.Z)(),x=f(100,(()=>{v(!1);const e=(0,c.iH)(r.F,"Users/".concat(r.I.currentUser.uid,"/Favorite"));(0,c.U2)(e).then((e=>{e.exists()&&(h((e=>e+d.VZ)),t(Object.entries(e.val())),v(!0))}))})),b=function(){if(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-200<=document.documentElement.scrollTop+document.documentElement.clientHeight&&g){if(e.length+d.VZ<n)return;x()}};return(0,i.useEffect)((()=>{x(),window.scrollTo(0,0)}),[]),(0,i.useEffect)((()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)})),[n,g]),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:s,children:(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("h2",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),(0,m.jsxs)("div",{className:o,children:[e.map((e=>{let[t,n]=e;return(0,m.jsx)(l.Z,{uid:t,img:null===n||void 0===n?void 0:n.img,title:null===n||void 0===n?void 0:n.title,inSub:null===n||void 0===n?void 0:n.inSub,rating:null===n||void 0===n?void 0:n.rating},t)})),g?null:function(){const e=[];for(let t=0;t<30;t++)e.push((0,m.jsx)(u.y,{baseColor:"#202020",highlightColor:"#444",children:(0,m.jsxs)("p",{children:[(0,m.jsx)(u.Z,{count:1,width:"158px",height:"228px",borderRadius:"10px"}),(0,m.jsxs)("div",{style:{marginTop:"10px"},children:[(0,m.jsx)(u.Z,{count:1,width:"158px",height:"20px",borderRadius:"10px"}),(0,m.jsx)("div",{style:{marginTop:"3px"},children:(0,m.jsx)(u.Z,{count:1,width:"108px",height:"17px",borderRadius:"10px"})})]})]})},t));return e}()]})]})})})}},385:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(87);const r={cardWrapper:"Card_cardWrapper__RrRk2",cardAnim:"Card_cardAnim__M+5lz",cardDescWrapper:"Card_cardDescWrapper__Nm3Gv",img:"Card_img__uYqII",imgWrapper:"Card_imgWrapper__IUoum",inSubscribe:"Card_inSubscribe__LEttH"};var s=n(184);const a=e=>{let{img:t,title:n,inSub:a,rating:o,uid:c}=e;return(0,s.jsxs)("div",{className:r.cardWrapper,children:[(0,s.jsxs)("div",{className:r.imgWrapper,children:[o?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("span",{children:["\u2605 ",1===o.toString().length?o+".0":o]})}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(i.rU,{to:"/FilmPage/".concat(c),children:(0,s.jsx)("img",{src:t,alt:"card-img",className:r.img})})]}),(0,s.jsxs)("div",{className:r.cardDescWrapper,children:[(0,s.jsxs)("div",{className:r.titleWrapper,children:[(0,s.jsx)("div",{className:r.titleShadow}),(0,s.jsx)("h4",{children:n})]}),(0,s.jsx)("p",{className:r.inSubscribe,children:a?"\u0412 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435":"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})]})]})}},777:(e,t,n)=>{n.d(t,{VZ:()=>i});const i=18},655:(e,t,n)=>{n.d(t,{Z:()=>i});const i=()=>function(e,t){var n,i,r=!1;return function s(){if(r)return n=arguments,void(i=this);r=!0,t.apply(this,arguments),setTimeout((()=>{n&&(s.apply(i,n),n=i=null),r=!1}),e)}}},290:(e,t,n)=>{n.d(t,{Z:()=>o,y:()=>c});var i=n(791);const r=i.createContext({}),s=!0;function a(e){let{baseColor:t,highlightColor:n,width:i,height:r,borderRadius:a,circle:o,direction:c,duration:l,enableAnimation:d=s}=e;const u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]="".concat(l,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(u.width=i),"string"!==typeof r&&"number"!==typeof r||(u.height=r),"string"!==typeof a&&"number"!==typeof a||(u.borderRadius=a),o&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof n&&(u["--highlight-color"]=n),u}function o(e){let{count:t=1,wrapper:n,className:o,containerClassName:c,containerTestId:l,circle:d=!1,style:u,...p}=e;var m,h,g;const v=i.useContext(r),f={...p};for(const[i,r]of Object.entries(p))"undefined"===typeof r&&delete f[i];const x={...v,...f,circle:d},b={...u,...a(x)};let y="react-loading-skeleton";o&&(y+=" ".concat(o));const j=null!==(m=x.inline)&&void 0!==m&&m,_=[],w=Math.ceil(t);for(let r=0;r<w;r++){let e=b;if(w>t&&r===w-1){const n=null!==(h=e.width)&&void 0!==h?h:"100%",i=t%1,r="number"===typeof n?n*i:"calc(".concat(n," * ").concat(i,")");e={...e,width:r}}const n=i.createElement("span",{className:y,style:e,key:r},"\u200c");j?_.push(n):_.push(i.createElement(i.Fragment,{key:r},n,i.createElement("br",null)))}return i.createElement("span",{className:c,"data-testid":l,"aria-live":"polite","aria-busy":null!==(g=x.enableAnimation)&&void 0!==g?g:s},n?_.map(((e,t)=>i.createElement(n,{key:t},e))):_)}function c(e){let{children:t,...n}=e;return i.createElement(r.Provider,{value:n},t)}}}]);
//# sourceMappingURL=440.e3a610be.chunk.js.map