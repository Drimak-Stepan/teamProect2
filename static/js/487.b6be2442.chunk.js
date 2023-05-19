"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[487],{6487:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,o,a,s,c,u,l=t(5861),f=t(9439),d=t(4687),h=t.n(d),p=t(2791),x=t(7872),m=t(9434),g=t(3916),b=t(3558).Z,Z=t(1413),v=t(4925),w=t(1951),y=t(168),j=t(6444),k=j.ZP.li(r||(r=(0,y.Z)(["\n  position: relative;\n  max-width: 336px;\n  border-radius: 20px;\n  color: ",";\n  background: ",";\n  box-shadow: ",";\n\n  scale: 1;\n  transition: scale 250ms ease;\n\n  &:hover {\n    scale: 1.03;\n    transition: scale 250ms ease;\n  }\n\n  @media "," {\n    max-width: calc((100% - 32px) / 2);\n    height: 556px;\n  }\n\n  @media "," {\n    max-width: calc((100% - 64px) / 3);\n    height: 534px;\n  }\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -20px;\n    left: 0;\n    right: 0;\n    height: 8px;\n    background: ",";\n    border-radius: 8px;\n\n    @media "," {\n      top: -22px;\n    }\n  }\n"])),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk}),(function(n){return n.theme.colors.gradient}),(function(n){return n.theme.media.tab})),P=j.ZP.img(i||(i=(0,y.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 252px;\n  border-radius: 20px;\n"]))),F=j.ZP.h2(o||(o=(0,y.Z)(["\n  padding: 16px 12px;\n  line-height: 1.375;\n  letter-spacing: -0.01em;\n\n  @media "," {\n    height: 131px;\n    overflow: auto;\n  }\n"])),(function(n){return n.theme.media.tab})),S=j.ZP.p(a||(a=(0,y.Z)(["\n  padding: 0 12px;\n\n  @media "," {\n    height: 127px;\n    overflow: auto;\n  }\n\n  @media "," {\n    height: 105px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),z=j.ZP.div(s||(s=(0,y.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 12px;\n  line-height: 1.375;\n\n  p {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey})),C=j.ZP.a(c||(c=(0,y.Z)(["\n  color: ",";\n  outline: none;\n  transition: border-bottom 250ms ease;\n\n  &:hover,\n  &:focus {\n    border-bottom: 1px solid currentColor;\n  }\n"])),(function(n){return n.theme.colors.link})),_=t(184),A=function(n){var e=n.imgUrl,t=void 0===e?"via.placeholder.com":e,r=n.title,i=n.text,o=n.date,a=n.url,s=function(n){return(0,w.default)(Date.parse(n),"dd/MM/yyyy")}(o);return(0,_.jsxs)(k,{children:[(0,_.jsx)(P,{src:t,alt:"Article theme"}),(0,_.jsx)(F,{children:r}),(0,_.jsx)(S,{children:i}),(0,_.jsxs)(z,{children:[(0,_.jsx)("p",{children:s}),(0,_.jsx)(C,{href:a,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},D=j.ZP.ul(u||(u=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 44px;\n  margin-top: 44px;\n  column-gap: 32px;\n\n  @media "," {\n    row-gap: 46px;\n    margin-top: 62px;\n  }\n\n  @media "," {\n    margin-top: 82px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),N=["_id"],W=function(n){var e=n.items.map((function(n){var e=n._id,t=(0,v.Z)(n,N);return(0,_.jsx)(A,(0,Z.Z)({},t),e)}));return(0,_.jsx)(D,{children:e})};W.defaultProps={items:[]};var B=W,I=t(2966),L=t(14),M=function(){var n=(0,l.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.ZP.get("/api/news",{params:e});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=t(1087),R=function(){var n=(0,E.lr)(),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=t.get("search"),o=(0,p.useState)([]),a=(0,f.Z)(o,2),s=a[0],c=a[1],u=(0,p.useState)((function(){var n=t.get("page");return n?Number(n):1})),d=(0,f.Z)(u,2),Z=d[0],v=d[1],w=(0,p.useState)(!1),y=(0,f.Z)(w,2),j=y[0],k=y[1],P=(0,p.useState)(null),F=(0,f.Z)(P,2),S=F[0],z=F[1];(0,p.useEffect)((function(){k(!0);var n={page:Z};i&&(n.search=i);var e=function(){var n=(0,l.Z)(h().mark((function n(e){var t,r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M(e);case 3:t=n.sent,r=t.data,console.log("data:",r),c(r.results),z(r.totalPages),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[Z,i]);var C=function(){var n=(0,l.Z)(h().mark((function n(e){var t,i,o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={page:1,search:e.search},n.prev=1,n.next=4,M(t);case 4:i=n.sent,o=i.data,c(o.results),z(o.totalPages),v(1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return n.prev=14,k(!1),n.finish(14);case 17:r(t);case 18:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)(m.Z,{children:[(0,_.jsx)(g.Z,{children:"News"}),(0,_.jsx)(b,{onFormSubmit:C,setItems:c}),j&&(0,_.jsx)(x.Z,{}),Boolean(s.length)&&(0,_.jsx)(B,{items:s}),S>1&&(0,_.jsx)(I.Z,{currentPage:Z,setCurrentPage:v,totalPages:S,setFetching:k})]})},T=R},3558:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,i,o,a,s=t(9439),c=(t(2791),t(168)),u=t(5705),l=t(6444),f=(0,l.ZP)(u.l0)(r||(r=(0,c.Z)(["\n  max-width: 608px;\n  height: 44px;\n  position: relative;\n  margin: 24px auto 0;\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),d=(0,l.ZP)(u.gN)(i||(i=(0,c.Z)(["\n  padding: 14px 71px 14px 20px;\n  border: none;\n  width: 100%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.214;\n  letter-spacing: 0.04em;\n  color: #888888;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin: 0 auto;\n  display: block;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 71px 10px 20px;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.2;\n    max-width: 608px;\n  }\n"]))),h=l.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  position: absolute;\n  width: 78px;\n  transform: translate(-100%, -50%);\n  top: 50%;\n  left: 100%;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),p=l.ZP.button(a||(a=(0,c.Z)(["\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n\n  :last-child {\n    margin-right: 13px;\n    margin-left: 10px;\n  }\n"]))),x=t(9839),m=t(6727),g=t(1087),b=t(184),Z=function(n){var e=n.onFormSubmit,t=(0,g.lr)(),r=(0,s.Z)(t,1)[0].get("title"),i=m.Ry({search:m.Z_().trim("Type something").required("Type something")}),o=function(n){var e=n.name;return(0,b.jsx)(u.Bc,{name:e,render:function(n){return(0,b.jsx)("p",{style:{color:"tomato",marginLeft:"20px"},children:n})}})};return(0,b.jsx)(u.J9,{initialValues:{search:r||""},onSubmit:e,validationSchema:i,children:function(n){return(0,b.jsxs)(f,{children:[(0,b.jsx)(d,{name:"search",type:"text",placeholder:"Search",onBlur:function(){return n.setErrors(null)}}),(0,b.jsx)(o,{name:"search"}),(0,b.jsxs)(h,{children:[(0,b.jsx)(p,{type:"submit",children:(0,b.jsx)(x.Z,{id:"search",f:"#54ADFF",s:"none"})}),n.values.search&&(0,b.jsx)(p,{type:"button",onClick:function(){n.setValues({search:""})},children:(0,b.jsx)(x.Z,{id:"cross",s:"#FFC107",style:{strokeWidth:"1.5px"}})})]})]})}})}},5891:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(1413),o=t(4925),a=(t(2791),t(168)),s=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*700*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.bold}),(function(n){return n.size||n.theme.fontSizes.l}),(function(n){return n.line||"1.375"}),(function(n){return n.color||n.theme.colors.black}),(function(n){return n.letterSpacing||0}),(function(n){return n.theme.media.tab}),(function(n){return n.tabWeight||n.theme.fontWeiths.bold}),(function(n){return n.tabSize||n.theme.fontSizes.title}),(function(n){return n.tabLine||"1.375"}),(function(n){return n.theme.media.desk}),(function(n){return n.deskWeight||n.theme.fontWeiths.bold}),(function(n){return n.deskSize||n.theme.fontSizes.title}),(function(n){return n.deskLine||"1.375"})),c=t(184),u=["children"],l=function(n){var e=n.children,t=(0,o.Z)(n,u);return(0,c.jsx)(s,(0,i.Z)((0,i.Z)({},t),{},{children:e}))}},3916:function(n,e,t){var r=t(5891);e.Z=r.Z},2966:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o,a=t(9439),s=(t(2791),t(1087)),c=t(168),u=t(6444),l=u.ZP.button(r||(r=(0,c.Z)(["\n  display: flex;\n  color: #cce4fb;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #cce4fb;\n  border-radius: 50%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 15px;\n\n  &.current_page {\n    color: #fef9f9;\n    background-color: #54adff;\n    border-color: #54adff;\n  }\n"]))),f=u.ZP.div(i||(i=(0,c.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fef9f9;\n\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 45px;\n"]))),d=u.ZP.div(o||(o=(0,c.Z)(["\n  margin: 60px auto 105px;\n  width: 100%;\n  max-width: 320px;\n"]))),h=t(9839),p=t(3293),x=t(7689),m=t(184),g=function(n){var e=n.currentPage,t=n.setCurrentPage,r=n.totalPages,i=n.setFetching,o=(0,p.G)(["(max-width: 480px)"],[!0],!1),c=(0,s.lr)(),u=(0,a.Z)(c,2),g=u[0],b=u[1],Z=g.get("title"),v=g.get("search"),w=(0,x.UO)().categoryName,y=r<=5||e<3?Array.from({length:r>5?5:r},(function(n,e){return 1+e})):Array.from({length:5},(function(n,t){return e+2>r?r-4+t:e+t-2})),j=function(n){var r,o=n.target,a=(r=o.id,Number(r)),s={page:a};["sell","lost-found","for-free"].includes(w)&&(s.category=w),"favorite"===w&&(s.favorite=!0),"own"===w&&(s.own=!0),v&&(s.search=v),Z&&(s.title=Z),b(s),e!==a&&(t(a),i(!0))};return!o&&(0,m.jsx)(d,{children:(0,m.jsxs)(f,{children:[(0,m.jsx)(l,{type:"button",id:"prev",onClick:function(){if(1!==e){i(!0);var n={page:e-1};["sell","lost-found","for-free"].includes(w)&&(n.category=w),"favorite"===w&&(n.favorite=!0),"own"===w&&(n.own=!0),v&&(n.search=v),Z&&(n.title=Z),b(n),t((function(n){return n-1}))}},children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54ADFF",f:"#54ADFF"})}),y.map((function(n){return(0,m.jsx)(l,{type:"button",className:n===e&&"current_page",id:n,onClick:j,children:n},n)})),(0,m.jsx)(l,{id:"next",onClick:function(){if(e!==r){i(!0);var n={page:e+1};["sell","lost-found","for-free"].includes(w)&&(n.category=w),"favorite"===w&&(n.favorite=!0),"own"===w&&(n.own=!0),v&&(n.search=v),Z&&(n.title=Z),b(n),t((function(n){return n+1}))}},type:"button",children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54ADFF",f:"#54ADFF",style:{transform:"rotate(180deg)"}})})]})})}}}]);
//# sourceMappingURL=487.b6be2442.chunk.js.map