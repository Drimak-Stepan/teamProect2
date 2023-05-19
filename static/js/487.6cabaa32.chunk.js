"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[487],{6487:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,o,a,s,u,c,l=t(5861),f=t(9439),d=t(4687),h=t.n(d),p=t(2791),x=t(7872),m=t(9434),g=t(3916),b=t(3558).Z,Z=t(1413),v=t(4925),w=t(6386),y=t(168),j=t(6444),k=j.ZP.li(r||(r=(0,y.Z)(["\n  position: relative;\n  max-width: 336px;\n  border-radius: 20px;\n  color: ",";\n  background: ",";\n  box-shadow: ",";\n\n  scale: 1;\n  transition: scale 250ms ease;\n\n  &:hover {\n    scale: 1.03;\n    transition: scale 250ms ease;\n  }\n\n  @media "," {\n    max-width: calc((100% - 32px) / 2);\n    height: 556px;\n  }\n\n  @media "," {\n    max-width: calc((100% - 64px) / 3);\n    height: 534px;\n  }\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -20px;\n    left: 0;\n    right: 0;\n    height: 8px;\n    background: ",";\n    border-radius: 8px;\n\n    @media "," {\n      top: -22px;\n    }\n  }\n"])),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk}),(function(n){return n.theme.colors.gradient}),(function(n){return n.theme.media.tab})),P=j.ZP.img(i||(i=(0,y.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 252px;\n  border-radius: 20px;\n"]))),S=j.ZP.h2(o||(o=(0,y.Z)(["\n  padding: 16px 12px;\n  line-height: 1.375;\n  letter-spacing: -0.01em;\n\n  @media "," {\n    height: 131px;\n    overflow: auto;\n  }\n"])),(function(n){return n.theme.media.tab})),z=j.ZP.p(a||(a=(0,y.Z)(["\n  padding: 0 12px;\n\n  @media "," {\n    height: 127px;\n    overflow: auto;\n  }\n\n  @media "," {\n    height: 105px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),C=j.ZP.div(s||(s=(0,y.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 12px;\n  line-height: 1.375;\n\n  p {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey})),_=j.ZP.a(u||(u=(0,y.Z)(["\n  color: ",";\n  outline: none;\n  transition: border-bottom 250ms ease;\n\n  &:hover,\n  &:focus {\n    border-bottom: 1px solid currentColor;\n  }\n"])),(function(n){return n.theme.colors.link})),W=t(184),F=function(n){var e=n.imgUrl,t=void 0===e?"via.placeholder.com":e,r=n.title,i=n.text,o=n.date,a=n.url,s=function(n){return(0,w.default)(Date.parse(n),"dd/MM/yyyy")}(o);return(0,W.jsxs)(k,{children:[(0,W.jsx)(P,{src:t,alt:"Article theme"}),(0,W.jsx)(S,{children:r}),(0,W.jsx)(z,{children:i}),(0,W.jsxs)(C,{children:[(0,W.jsx)("p",{children:s}),(0,W.jsx)(_,{href:a,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},A=j.ZP.ul(c||(c=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 44px;\n  margin-top: 44px;\n  column-gap: 32px;\n\n  @media "," {\n    row-gap: 46px;\n    margin-top: 62px;\n  }\n\n  @media "," {\n    margin-top: 82px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),N=["_id"],T=function(n){var e=n.items.map((function(n){var e=n._id,t=(0,v.Z)(n,N);return(0,W.jsx)(F,(0,Z.Z)({},t),e)}));return(0,W.jsx)(A,{children:e})};T.defaultProps={items:[]};var B=T,I=t(2966),L=t(14),M=function(){var n=(0,l.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.ZP.get("/api/news",{params:e});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),D=t(1087),E=function(){var n=(0,D.lr)(),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=t.get("search"),o=(0,p.useState)((function(){return i||null})),a=(0,f.Z)(o,2),s=a[0],u=a[1],c=t.get("page"),d=(0,p.useState)([]),Z=(0,f.Z)(d,2),v=Z[0],w=Z[1],y=(0,p.useState)((function(){return c?Number(c):1})),j=(0,f.Z)(y,2),k=j[0],P=j[1],S=(0,p.useState)(!0),z=(0,f.Z)(S,2),C=z[0],_=z[1],F=(0,p.useState)(null),A=(0,f.Z)(F,2),N=A[0],T=A[1],L=(0,p.useState)(!1),E=(0,f.Z)(L,2),Q=E[0],R=E[1];(0,p.useEffect)((function(){var n={};c&&(n.page=k),s&&(n.search=s);var e=function(){var n=(0,l.Z)(h().mark((function n(e){var t,r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,R(!1),_(!0),n.next=5,M(e);case 5:t=n.sent,r=t.data,w(r.results),T(r.totalPages),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),R(n.t0),console.log(n.t0);case 15:return n.prev=15,_(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[k,s,c]);return(0,W.jsxs)(m.Z,{children:[(0,W.jsx)(g.Z,{children:"News"}),(0,W.jsx)(b,{onFormSubmit:function(n){var e={page:1,search:n.search};P(1),r(e)},setCurrentPage:P,setQuery:u}),Q&&(0,W.jsx)("p",{children:Q.message}),C&&(0,W.jsx)("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%, -65%)",zIndex:1e3},children:(0,W.jsx)(x.Z,{})}),Boolean(v.length)?(0,W.jsx)(B,{items:v}):!C&&(0,W.jsx)("div",{children:"There is no result"}),N>1&&(0,W.jsx)(I.Z,{currentPage:k,setCurrentPage:P,totalPages:N,setFetching:_})]})},Q=E},3558:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,i,o,a,s=t(9439),u=(t(2791),t(168)),c=t(5705),l=t(6444),f=(0,l.ZP)(c.l0)(r||(r=(0,u.Z)(["\n  max-width: 608px;\n  height: 44px;\n  position: relative;\n  margin: 24px auto 0;\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),d=(0,l.ZP)(c.gN)(i||(i=(0,u.Z)(["\n  padding: 14px 71px 14px 20px;\n  border: none;\n  width: 100%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.214;\n  letter-spacing: 0.04em;\n  color: #888888;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin: 0 auto;\n  display: block;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 71px 10px 20px;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.2;\n    max-width: 608px;\n  }\n"]))),h=l.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  position: absolute;\n  width: 78px;\n  transform: translate(-100%, -50%);\n  top: 50%;\n  left: 100%;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),p=l.ZP.button(a||(a=(0,u.Z)(["\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n\n  :last-child {\n    margin-right: 13px;\n    margin-left: 10px;\n  }\n"]))),x=t(9839),m=t(6727),g=t(1087),b=t(184),Z=function(n){var e=n.onFormSubmit,t=n.setCurrentPage,r=n.setQuery,i=(0,g.lr)(),o=(0,s.Z)(i,2),a=o[0],u=o[1],l=a.get("title"),Z=a.get("search"),v=m.Ry({search:m.Z_().trim("Type something").required("Type something")}),w=function(n){var e=n.name;return(0,b.jsx)(c.Bc,{name:e,render:function(n){return(0,b.jsx)("p",{style:{color:"tomato",marginLeft:"20px"},children:n})}})};return(0,b.jsx)(c.J9,{initialValues:{search:l||Z||""},onSubmit:e,validationSchema:v,children:function(n){return(0,b.jsxs)(f,{children:[(0,b.jsx)(d,{name:"search",type:"text",placeholder:"Search",onBlur:function(){return n.setErrors(null)}}),(0,b.jsx)(w,{name:"search"}),(0,b.jsxs)(h,{children:[(0,b.jsx)(p,{type:"submit",children:(0,b.jsx)(x.Z,{id:"search",f:"#54ADFF",s:"none"})}),n.values.search&&(0,b.jsx)(p,{type:"button",onClick:function(){n.setValues({search:""}),r(null),a.delete("title"),a.delete("page"),a.delete("search"),u(a),t(1)},children:(0,b.jsx)(x.Z,{id:"cross",s:"#FFC107",style:{strokeWidth:"1.5px"}})})]})]})}})}},5891:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(1413),o=t(4925),a=(t(2791),t(168)),s=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*700*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.bold}),(function(n){return n.size||n.theme.fontSizes.l}),(function(n){return n.line||"1.375"}),(function(n){return n.color||n.theme.colors.black}),(function(n){return n.letterSpacing||0}),(function(n){return n.theme.media.tab}),(function(n){return n.tabWeight||n.theme.fontWeiths.bold}),(function(n){return n.tabSize||n.theme.fontSizes.title}),(function(n){return n.tabLine||"1.375"}),(function(n){return n.theme.media.desk}),(function(n){return n.deskWeight||n.theme.fontWeiths.bold}),(function(n){return n.deskSize||n.theme.fontSizes.title}),(function(n){return n.deskLine||"1.375"})),u=t(184),c=["children"],l=function(n){var e=n.children,t=(0,o.Z)(n,c);return(0,u.jsx)(s,(0,i.Z)((0,i.Z)({},t),{},{children:e}))}},3916:function(n,e,t){var r=t(5891);e.Z=r.Z},2966:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,o,a=t(9439),s=(t(2791),t(1087)),u=t(168),c=t(6444),l=c.ZP.button(r||(r=(0,u.Z)(["\n  display: flex;\n  color: #54adff;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #54adff;\n  border-radius: 50%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 15px;\n\n  &.current_page {\n    color: #fef9f9;\n    background-color: #54adff;\n    border-color: #54adff;\n  }\n"]))),f=c.ZP.div(i||(i=(0,u.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fef9f9;\n\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 45px;\n"]))),d=c.ZP.div(o||(o=(0,u.Z)(["\n  margin: 60px auto 105px;\n  width: 100%;\n  max-width: 320px;\n"]))),h=t(9839),p=t(7689),x=t(184),m=function(n){var e=n.currentPage,t=n.setCurrentPage,r=n.totalPages,i=n.setFetching,o=(0,s.lr)(),u=(0,a.Z)(o,2),c=u[0],m=u[1],g=c.get("title"),b=c.get("search"),Z=(0,p.UO)().categoryName,v=r<=5||e<3?Array.from({length:r>5?5:r},(function(n,e){return 1+e})):Array.from({length:5},(function(n,t){return e+2>r?r-4+t:e+t-2})),w=r<=3||e<2?Array.from({length:r>3?3:r},(function(n,e){return 1+e})):Array.from({length:3},(function(n,t){return e+2>r?r-2+t:e+t-1})),y=window.innerWidth>480?v:w,j=function(){window.scrollTo({top:0,behavior:"smooth"})},k=function(){var n={};return["sell","lost-found","for-free"].includes(Z)&&(n.category=Z),"favorite"===Z&&(n.favorite=!0),"own"===Z&&(n.own=!0),b&&(n.search=b),g&&(n.title=g),n},P=function(n){var r,o=n.target,a=(r=o.id,Number(r));if(e!==a){i(!0);var s=k();s.page=a,m(s),t(a),j()}};return(0,x.jsx)(d,{children:(0,x.jsxs)(f,{children:[(0,x.jsx)(l,{type:"button",id:"prev",onClick:function(){if(1!==e){i(!0);var n=k();n.page=e-1,m(n),t((function(n){return n-1})),j()}},children:(0,x.jsx)(h.Z,{id:"arrow-left",s:"#54adff",f:"#54adff",style:{strokeWidth:2}})}),y.map((function(n){return(0,x.jsx)(l,{type:"button",className:n===e&&"current_page",id:n,onClick:P,children:n},n)})),(0,x.jsx)(l,{id:"next",onClick:function(){if(e!==r){i(!0);var n=k();n.page=e+1,m(n),t((function(n){return n+1})),j()}},type:"button",children:(0,x.jsx)(h.Z,{id:"arrow-left",s:"#54adff",f:"#54adff",style:{transform:"rotate(180deg)",strokeWidth:2}})})]})})}}}]);
//# sourceMappingURL=487.6cabaa32.chunk.js.map