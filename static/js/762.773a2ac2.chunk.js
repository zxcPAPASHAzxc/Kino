"use strict";(self.webpackChunkkinopoisk=self.webpackChunkkinopoisk||[]).push([[762],{762:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(689),s=t(777),i=t(791),c=t(685),n=t(513),o=t(194);const l={categoryPageWrapper:"CategoryPage_categoryPageWrapper__E5+BK",categoryPageWrapperInset:"CategoryPage_categoryPageWrapperInset__YE8jz"},d=()=>function(e,r){var t,a,s=!1;return function i(){if(s)return t=arguments,void(a=this);s=!0,r.apply(this,arguments),setTimeout((()=>{t&&(i.apply(a,t),t=a=null),s=!1}),e)}};var m=t(175),p=t(184);const g=()=>{const e=(0,a.UO)(),r=s.jJ[e.category],[t,g]=(0,i.useState)([]),[u,h]=(0,i.useState)(0),[_,j]=(0,i.useState)(!0),v=d(),x=s.VZ,y=v(100,(function(){j(!1);const e=(0,c.iH)(n.F,"/Movies/Cateogries/".concat(r)),t=(0,c.IO)(e,(0,c.Kk)(x),(0,c.e0)(u),(0,c.g2)("id"));(0,c.jM)(t,(e=>{e.exists()&&(h((e=>e+x)),g((r=>r.concat(Object.values(e.val()))))),j(!0)}))})),W=function(){Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-200<=document.documentElement.scrollTop+document.documentElement.clientHeight&&_&&y()};return(0,i.useEffect)((()=>{W()}),[]),(0,i.useEffect)((()=>(window.addEventListener("scroll",W),()=>{window.removeEventListener("scroll",W)})),[u,_]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:l.categoryPageWrapper,children:(0,p.jsxs)("div",{className:l.categoryPageWrapperInset,children:[(0,p.jsx)("h2",{children:e.category}),(0,p.jsx)(o.Z,{data:t})]})}),_?null:(0,p.jsx)("div",{className:l.spinnerWrapper,children:(0,p.jsx)(m.Z,{className:l.loader})})]})}},194:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(87);const s={cardWrapper:"Card_cardWrapper__RrRk2",cardAnim:"Card_cardAnim__M+5lz",cardDescWrapper:"Card_cardDescWrapper__Nm3Gv",img:"Card_img__uYqII",imgWrapper:"Card_imgWrapper__IUoum",inSubscribe:"Card_inSubscribe__LEttH"};var i=t(184);const c=e=>{let{img:r,title:t,inSub:a,rating:c}=e;return(0,i.jsxs)("div",{className:s.cardWrapper,children:[(0,i.jsxs)("div",{className:s.imgWrapper,children:[(0,i.jsxs)("span",{children:["\u2605 ",1===c.toString().length?c+".0":c]}),(0,i.jsx)("img",{src:r,alt:"card-img",className:s.img})]}),(0,i.jsxs)("div",{className:s.cardDescWrapper,children:[(0,i.jsxs)("div",{className:s.titleWrapper,children:[(0,i.jsx)("div",{className:s.titleShadow}),(0,i.jsx)("h4",{children:t})]}),(0,i.jsx)("p",{className:s.inSubscribe,children:a?"\u0412 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435":"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})]})]})},n="RenderMovies_listMovies__WhTju",o=e=>{let{data:r}=e;return(0,i.jsx)("div",{className:n,children:r.map((e=>(0,i.jsx)(a.rU,{style:{textDecoration:"none",color:"#c7c7c7"},to:"/filmPage/".concat(e.title,"id").concat(e.id),children:(0,i.jsx)(c,{img:e.img,title:e.title,inSub:e.inSub,rating:e.rating})},e.id+e.title)))})}},777:(e,r,t)=>{t.d(r,{Ut:()=>s,VZ:()=>i,jJ:()=>a});const a={"\u0421\u0435\u0440\u0438\u0430\u043b\u044b":"Serials","\u0411\u043e\u0435\u0432\u0438\u043a\u0438":"Fighters","\u041a\u043e\u043c\u0435\u0434\u0438\u0438":"Comedies","\u0414\u0435\u0442\u044f\u043c":"ForChildren","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e":"Free","\u0422\u0435\u0441\u0442":"Test","\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435":"Family","\u041c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u044b":"Melodrams","\u0423\u0436\u0430\u0441\u044b":"Horrors","\u0424\u044d\u043d\u0442\u0435\u0437\u0438":"Fantazy","\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430":"Fantastic","\u0414\u0440\u0430\u043c\u044b":"Dramas"},s={Fantazy:"\u0424\u044d\u043d\u0442\u0435\u0437\u0438",Serials:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",Fighters:"\u0411\u043e\u0435\u0432\u0438\u043a\u0438",Comedies:"\u041a\u043e\u043c\u0435\u0434\u0438\u0438",ForChildren:"\u0414\u0435\u0442\u044f\u043c",Free:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",Test:"\u0422\u0435\u0441\u0442",Family:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435",Melodrams:"\u041c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u044b",Horrors:"\u0423\u0436\u0430\u0441\u044b",Fantastic:"\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430",Dramas:"\u0414\u0440\u0430\u043c\u044b"},i=30}}]);
//# sourceMappingURL=762.773a2ac2.chunk.js.map