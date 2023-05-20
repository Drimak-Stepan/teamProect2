"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[487],{6487:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,o,i,a,u,s,c,l=t(5861),f=t(9439),d=t(4687),h=t.n(d),p=t(2791),m=t(9230),x=t(7872),g=t(9434),b=t(3916),Z=t(3558).Z,v=t(1413),y=t(4925),w=t(6386),j=t(168),k=t(6444),P=k.ZP.li(r||(r=(0,j.Z)(["\n  position: relative;\n  max-width: 336px;\n  border-radius: 20px;\n  color: ",";\n  background: ",";\n  box-shadow: ",";\n\n  scale: 1;\n  transition: scale 250ms ease;\n\n  &:hover {\n    scale: 1.03;\n    transition: scale 250ms ease;\n  }\n\n  @media "," {\n    max-width: calc((100% - 32px) / 2);\n    height: 556px;\n  }\n\n  @media "," {\n    max-width: calc((100% - 64px) / 3);\n    height: 534px;\n  }\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -20px;\n    left: 0;\n    right: 0;\n    height: 8px;\n    background: ",";\n    border-radius: 8px;\n\n    @media "," {\n      top: -22px;\n    }\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk}),(function(n){return n.theme.colors.gradient}),(function(n){return n.theme.media.tab})),S=k.ZP.img(o||(o=(0,j.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 252px;\n  border-radius: 20px;\n"]))),z=k.ZP.h2(i||(i=(0,j.Z)(["\n  padding: 16px 12px;\n  line-height: 1.375;\n  letter-spacing: -0.01em;\n\n  @media "," {\n    height: 131px;\n    overflow: auto;\n  }\n"])),(function(n){return n.theme.media.tab})),C=k.ZP.p(a||(a=(0,j.Z)(["\n  padding: 0 12px;\n\n  @media "," {\n    height: 127px;\n    overflow: auto;\n  }\n\n  @media "," {\n    height: 105px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),_=k.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 12px;\n  line-height: 1.375;\n\n  p {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey})),W=k.ZP.a(s||(s=(0,j.Z)(["\n  color: ",";\n  outline: none;\n  transition: border-bottom 250ms ease;\n\n  &:hover,\n  &:focus {\n    border-bottom: 1px solid currentColor;\n  }\n"])),(function(n){return n.theme.colors.link})),F=t(184),N=function(n){var e=n.imgUrl,t=void 0===e?"via.placeholder.com":e,r=n.title,o=n.text,i=n.date,a=n.url,u=function(n){return(0,w.default)(Date.parse(n),"dd/MM/yyyy")}(i),s=(0,m.$G)().t;return(0,F.jsxs)(P,{children:[(0,F.jsx)(S,{src:t,onError:function(n){n.currentTarget.src="https://st.depositphotos.com/1032463/1373/i/950/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg"},alt:"Article theme"}),(0,F.jsx)(z,{children:r}),(0,F.jsx)(C,{children:o}),(0,F.jsxs)(_,{children:[(0,F.jsx)("p",{children:u}),(0,F.jsx)(W,{href:a,target:"_blank",rel:"noreferrer",children:s("Read_more")})]})]})},A=k.ZP.ul(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 44px;\n  margin-top: 44px;\n  column-gap: 32px;\n\n  @media "," {\n    row-gap: 46px;\n    margin-top: 62px;\n  }\n\n  @media "," {\n    margin-top: 82px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),T=["_id"],B=function(n){var e=n.items.map((function(n){var e=n._id,t=(0,y.Z)(n,T);return(0,F.jsx)(N,(0,v.Z)({},t),e)}));return(0,F.jsx)(A,{children:e})};B.defaultProps={items:[]};var E=B,L=t(2966),M=t(14),O=function(){var n=(0,l.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.ZP.get("/api/news",{params:e});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),D=t(1087),G=function(){var n=(0,D.lr)(),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=t.get("search"),i=(0,p.useState)((function(){return o||null})),a=(0,f.Z)(i,2),u=a[0],s=a[1],c=t.get("page"),d=(0,p.useState)([]),v=(0,f.Z)(d,2),y=v[0],w=v[1],j=(0,p.useState)((function(){return c?Number(c):1})),k=(0,f.Z)(j,2),P=k[0],S=k[1],z=(0,p.useState)(!1),C=(0,f.Z)(z,2),_=C[0],W=C[1],N=(0,p.useState)(null),A=(0,f.Z)(N,2),T=A[0],B=A[1],M=(0,p.useState)(!1),G=(0,f.Z)(M,2),Q=G[0],R=G[1],U=(0,m.$G)().t;(0,p.useEffect)((function(){var n={};c&&(n.page=P),u&&(n.search=u);var e=function(){var n=(0,l.Z)(h().mark((function n(e){var t,r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,R(!1),W(!0),n.next=5,O(e);case 5:t=n.sent,r=t.data,w(r.results),B(r.totalPages),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),R(n.t0),console.log(n.t0);case 15:return n.prev=15,W(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[P,u,c]);return(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(b.Z,{children:U("News")}),(0,F.jsx)(Z,{onFormSubmit:function(n){var e={page:1,search:n.search};S(1),r(e)},setCurrentPage:S,setQuery:s}),Q&&(0,F.jsx)("p",{children:Q.message}),_&&(0,F.jsx)("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%, -65%)",zIndex:1e3},children:(0,F.jsx)(x.Z,{})}),Boolean(y.length)?(0,F.jsx)(E,{items:y}):!_&&(0,F.jsx)("div",{children:U("No_result")}),T>1&&(0,F.jsx)(L.Z,{currentPage:P,setCurrentPage:S,totalPages:T,setFetching:W})]})},Q=G},3558:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,o,i,a,u=t(9439),s=(t(2791),t(168)),c=t(5705),l=t(6444),f=(0,l.ZP)(c.l0)(r||(r=(0,s.Z)(["\n  max-width: 608px;\n  height: 44px;\n  position: relative;\n  margin: 24px auto 0;\n  @media "," {\n    margin-top: 40px;\n  }\n"])),(function(n){return n.theme.media.tab})),d=(0,l.ZP)(c.gN)(o||(o=(0,s.Z)(["\n  padding: 14px 71px 14px 20px;\n  border: none;\n  width: 100%;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.214;\n  letter-spacing: 0.04em;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: 20px;\n  margin: 0 auto;\n  display: block;\n  outline: ",";\n\n  @media "," {\n    padding: 10px 71px 10px 20px;\n    font-size: ",";\n    ",";\n    line-height: 1.2;\n    max-width: 608px;\n  }\n"])),(function(n){return n.theme.fonts.placeholders}),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.search}),(function(n){return n.theme.colors.inputText}),(function(n){return n.theme.colors.inputBackground}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.colors.inputOutline}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeiths.semi})),h=l.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  position: absolute;\n  width: 78px;\n  transform: translate(-100%, -50%);\n  top: 50%;\n  left: 100%;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),p=l.ZP.button(a||(a=(0,s.Z)(["\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n\n  :last-child {\n    margin-right: 13px;\n    margin-left: 10px;\n  }\n"]))),m=t(9839),x=t(6727),g=t(1087),b=t(184),Z=function(n){var e=n.onFormSubmit,t=n.setCurrentPage,r=n.setQuery,o=(0,g.lr)(),i=(0,u.Z)(o,2),a=i[0],s=i[1],l=a.get("title"),Z=a.get("search"),v=x.Ry({search:x.Z_().trim("Type something").required("Type something")}),y=function(n){var e=n.name;return(0,b.jsx)(c.Bc,{name:e,render:function(n){return(0,b.jsx)("p",{style:{color:"tomato",marginLeft:"20px"},children:n})}})};return(0,b.jsx)(c.J9,{initialValues:{search:l||Z||""},onSubmit:e,validationSchema:v,children:function(n){return(0,b.jsxs)(f,{autoComplete:"off",children:[(0,b.jsx)(d,{name:"search",type:"text",placeholder:"Search",onBlur:function(){return n.setErrors(null)}}),(0,b.jsx)(y,{name:"search"}),(0,b.jsxs)(h,{children:[(0,b.jsx)(p,{type:"submit",children:(0,b.jsx)(m.Z,{id:"search",f:"#54ADFF",s:"none"})}),n.values.search&&(0,b.jsx)(p,{type:"button",onClick:function(){n.setValues({search:""}),r(null),a.delete("title"),a.delete("page"),a.delete("search"),s(a),t(1)},children:(0,b.jsx)(m.Z,{id:"cross",s:"#FFC107",style:{strokeWidth:"1.5px"}})})]})]})}})}},5891:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(1413),i=t(4925),a=(t(2791),t(168)),u=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*700*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.bold}),(function(n){return n.size||n.theme.fontSizes.l}),(function(n){return n.line||"1.375"}),(function(n){return n.color||n.theme.colors.titleColor}),(function(n){return n.letterSpacing||0}),(function(n){return n.theme.media.tab}),(function(n){return n.tabWeight||n.theme.fontWeiths.bold}),(function(n){return n.tabSize||n.theme.fontSizes.title}),(function(n){return n.tabLine||"1.375"}),(function(n){return n.theme.media.desk}),(function(n){return n.deskWeight||n.theme.fontWeiths.bold}),(function(n){return n.deskSize||n.theme.fontSizes.title}),(function(n){return n.deskLine||"1.375"})),s=t(184),c=["children"],l=function(n){var e=n.children,t=(0,i.Z)(n,c);return(0,s.jsx)(u,(0,o.Z)((0,o.Z)({},t),{},{children:e}))}},3916:function(n,e,t){var r=t(5891);e.Z=r.Z},2966:function(n,e,t){t.d(e,{Z:function(){return x}});var r,o,i,a=t(9439),u=(t(2791),t(1087)),s=t(168),c=t(6444),l=c.ZP.button(r||(r=(0,s.Z)(["\n  display: flex;\n  color: ",";\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #54adff;\n  border-radius: 50%;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 0.94;\n  background-color: transparent;\n\n  &.current_page {\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.link}),(function(n){return n.theme.fonts.placeholders}),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.link}),(function(n){return n.theme.colors.link})),f=c.ZP.div(o||(o=(0,s.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background-color: transparent;\n  outline: ",";\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 45px;\n"])),(function(n){return n.theme.colors.pagginationOutline})),d=c.ZP.div(i||(i=(0,s.Z)(["\n  margin: 60px auto 105px;\n  width: 100%;\n  max-width: 320px;\n  display: flex;\n  justify-content: center;\n"]))),h=t(9839),p=t(7689),m=t(184),x=function(n){var e=n.currentPage,t=n.setCurrentPage,r=n.totalPages,o=n.setFetching,i=(0,u.lr)(),s=(0,a.Z)(i,2),c=s[0],x=s[1],g=c.get("title"),b=c.get("search"),Z=(0,p.UO)().categoryName,v=r<=5||e<3?Array.from({length:r>5?5:r},(function(n,e){return 1+e})):Array.from({length:5},(function(n,t){return e+2>r?r-4+t:e+t-2})),y=r<=3||e<2?Array.from({length:r>3?3:r},(function(n,e){return 1+e})):Array.from({length:3},(function(n,t){return e+2>r?r-2+t:e+t-1})),w=window.innerWidth>480?v:y,j=function(){window.scrollTo({top:0,behavior:"smooth"})},k=function(){var n={};return["sell","lost-found","for-free"].includes(Z)&&(n.category=Z),"favorite"===Z&&(n.favorite=!0),"own"===Z&&(n.own=!0),b&&(n.search=b),g&&(n.title=g),n},P=function(n){var r,i=n.target,a=(r=i.id,Number(r));if(e!==a){o(!0);var u=k();u.page=a,x(u),t(a),j()}};return(0,m.jsx)(d,{children:(0,m.jsxs)(f,{children:[(0,m.jsx)(l,{type:"button",id:"prev",onClick:function(){if(1!==e){o(!0);var n=k();n.page=e-1,x(n),t((function(n){return n-1})),j()}},children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54adff",f:"#54adff",style:{strokeWidth:2}})}),w.map((function(n){return(0,m.jsx)(l,{type:"button",className:n===e&&"current_page",id:n,onClick:P,children:n},n)})),(0,m.jsx)(l,{id:"next",onClick:function(){if(e!==r){o(!0);var n=k();n.page=e+1,x(n),t((function(n){return n+1})),j()}},type:"button",children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54adff",f:"#54adff",style:{transform:"rotate(180deg)",strokeWidth:2}})})]})})}}}]);
//# sourceMappingURL=487.d86e7b6a.chunk.js.map