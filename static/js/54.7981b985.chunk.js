"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[54],{977:function(n,e,t){t.d(e,{Z:function(){return v}});var i,r,a,o,s,l,d=t(3293),c=t(4302),p=t(168),x=t(6444),f=x.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 60px 16px;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n  }\n"]))),m=x.ZP.h2(r||(r=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 52px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 28px;\n    line-height: 38px;\n    letter-spacing: -0.01em;\n  }\n"]))),h=x.ZP.p(a||(a=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 22px;\n    text-align: center;\n    letter-spacing: -0.01em;\n\n    margin-bottom: 48px;\n  }\n"]))),u=x.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  text-align: center;\n  max-width: 393px;\n"]))),g=x.ZP.span(s||(s=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: -0.01em;\n"]))),Z=x.ZP.div(l||(l=(0,p.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n  }\n"]))),j=t(9839),w=t(184),v=function(n){var e=n.close,t=n.approve,i="mobile"===(0,d.G)(["(min-width: 1280px)","(min-width: 768px)","(min-width: 480px)"],["desktop","tablet","mobile"],"xs");return(0,w.jsxs)(f,{children:[(0,w.jsx)(m,{children:"Delete adverstiment?!"}),(0,w.jsx)(u,{children:(0,w.jsxs)(h,{children:["Are you sure you want to delete"," ",(0,w.jsx)(g,{children:"\u201cCute dog looking for a home\u201d"}),"? ",(0,w.jsx)("br",{}),"You can`t undo this action."]})}),i?(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(c.Z,{type:"button",onClick:e,w:"256",h:"40",style:{marginBottom:"8px"},children:"Cancel"}),(0,w.jsxs)(c.Z,{type:"button",onClick:t,w:"256",h:"40",shape:"solid",g:"8",children:["Yes",(0,w.jsx)(j.Z,{id:"trash",s:"#FEF9F9"})]})]})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(c.Z,{type:"button",onClick:e,w:"129",h:"40",style:{marginRight:"17px"},children:"Cancel"}),(0,w.jsxs)(c.Z,{type:"button",onClick:t,w:"129",h:"40",shape:"solid",g:"8",children:["Yes",(0,w.jsx)(j.Z,{id:"trash",s:"#FEF9F9"})]})]})})]})}},1054:function(n,e,t){t.r(e),t.d(e,{User:function(){return de},default:function(){return ce}});var i=t(9439),r=t(2791),a=t(7689),o=t(1413),s=t(5861),l=t(4687),d=t.n(l),c=t(1405),p=t(9787),x=t(14),f=function(n){var e=new Date(n),t=e.getDate(),i=e.getMonth()+1,r=e.getFullYear();return"".concat(t<10?"0"+t:t,".").concat(i<10?"0"+i:i,".").concat(r)},m=t(6877),h=t(4043),u=t(184),g={name:"",email:"",birthday:"",phone:"",city:"",avatarUrl:null},Z=function(n){var e=(0,r.useState)(g),t=(0,i.Z)(e,2),a=t[0],l=t[1],Z=(0,r.useState)(!1),j=(0,i.Z)(Z,2),w=j[0],v=j[1],y=(0,c.v9)((function(n){return n.auth.token}));(0,r.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(e){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.TE)(e);case 2:t=n.sent,l(t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(y)}),[y]);var b=function(){var n=(0,s.Z)(d().mark((function n(){return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(a.photo),n.next=3,(0,x.t9)(y,{avatar:a.avatarUrl});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(En,{children:[(0,u.jsx)(Un,{children:"My information:"}),(0,u.jsxs)(Dn,{children:[(0,u.jsxs)(Gn,{children:[(0,u.jsxs)(Nn,{children:[(0,u.jsx)("input",{type:"file",onChange:function(n){l((0,o.Z)((0,o.Z)({},a),{},{avatarUrl:n.target.files[0]}))},accept:"image/png, image/jpeg",multiple:!1}),a.avatarUrl?(0,u.jsx)(On,{src:a.avatarUrl,alt:"Selected file"}):(0,u.jsx)(p.Z,{id:"add-photo-pet",w:"48",h:"48",s:"#54ADFF"}),(0,u.jsx)("input",{})]}),(0,u.jsxs)(Ln,{onClick:b,children:[(0,u.jsx)(p.Z,{id:"camera",s:"#54ADFF"}),(0,u.jsx)(Jn,{children:"Edit photo"})]})]}),(0,u.jsxs)(Qn,{children:[(0,u.jsx)($n,{name:"name",type:"text",value:a.name||"User"}),(0,u.jsx)($n,{name:"email",type:"text",value:a.email}),(0,u.jsx)($n,{name:"birthday",type:"text",value:f(a.birthday)||""}),(0,u.jsx)($n,{name:"phone",type:"text",value:a.phone}),(0,u.jsx)($n,{name:"city",type:"text",value:a.city||""}),(0,u.jsxs)(qn,{onClick:function(){v(!0)},children:[(0,u.jsx)(p.Z,{id:"logout",s:"#54ADFF"}),(0,u.jsx)(Kn,{children:"Log Out"})]})]}),w&&(0,u.jsx)(m.Z,{close:function(){return v(!1)},children:(0,u.jsx)(h.Z,{close:function(){return v(!1)}})})]})]})})},j=t(4302),w=t(5593),v=function(n){return n.myPets.myPets},y=t(977),b=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],o=e[1],s=(0,c.v9)(v).results,l=void 0===s?[]:s;console.log(l);var d=(0,c.I0)(),x=(0,a.s0)();(0,r.useEffect)((function(){d((0,w.mj)())}),[d]);var h=function(n){return(0,u.jsxs)(An,{children:[(0,u.jsx)(Hn,{src:n.photoUrl}),(0,u.jsxs)(_n,{children:[(0,u.jsx)(Bn,{onClick:function(){return o(!0)},children:(0,u.jsx)(p.Z,{id:"trash",s:"#54ADFF"})}),(0,u.jsxs)(Tn,{children:[(0,u.jsx)(Rn,{children:"Name:"})," ",n.name]}),(0,u.jsxs)(Tn,{children:[(0,u.jsx)(Rn,{children:"Date of Birth:"})," ",f(n.birthday)]}),(0,u.jsxs)(Tn,{children:[(0,u.jsx)(Rn,{children:"Breed:"})," ",n.breed]}),(0,u.jsxs)(Tn,{children:[(0,u.jsx)(Rn,{children:"Comments:"})," ",n.comments]})]}),t&&(0,u.jsx)(m.Z,{close:function(){return o(!1)},children:(0,u.jsx)(y.Z,{approve:function(){return e=n._id,void d((0,w.fj)(e));var e},close:function(){return o(!1)}})})]},n._id)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(Sn,{children:[(0,u.jsxs)(Yn,{children:[(0,u.jsx)(Un,{children:"My pets:"}),(0,u.jsxs)(j.Z,{onClick:function(){x("/add-pet",{replace:!0})},type:"button",shape:"solid",g:"8",children:[(0,u.jsx)("p",{children:"Add pet"}),(0,u.jsx)(p.Z,{id:"plus-small",s:"#FEF9F9"})]})]}),l.length?l.map((function(n){return h(n)})):(0,u.jsx)(In,{children:"You have no own added pets yet \ud83d\ude14"})]})})},P=t(4942),k=t(3216),F=t(8527),M=t(4189),C=t(4522);var z,D,E,S,A,U,Y,_,T,R,B,N,O,G,H,I,L,q,J,K,Q,V,W,X,$,nn,en,tn=function(n){return function(n,e){var t,i;(0,C.Z)(1,arguments);var r=(0,F.default)(n);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");var a=String(null!==(t=null===e||void 0===e?void 0:e.format)&&void 0!==t?t:"extended"),o=String(null!==(i=null===e||void 0===e?void 0:e.representation)&&void 0!==i?i:"complete");if("extended"!==a&&"basic"!==a)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==o&&"time"!==o&&"complete"!==o)throw new RangeError("representation must be 'date', 'time', or 'complete'");var s="",l="",d="extended"===a?"-":"",c="extended"===a?":":"";if("time"!==o){var p=(0,M.Z)(r.getDate(),2),x=(0,M.Z)(r.getMonth()+1,2),f=(0,M.Z)(r.getFullYear(),4);s="".concat(f).concat(d).concat(x).concat(d).concat(p)}if("date"!==o){var m=r.getTimezoneOffset();if(0!==m){var h=Math.abs(m),u=(0,M.Z)(Math.floor(h/60),2),g=(0,M.Z)(h%60,2);l="".concat(m<0?"+":"-").concat(u,":").concat(g)}else l="Z";var Z=""===s?"":"T",j=[(0,M.Z)(r.getHours(),2),(0,M.Z)(r.getMinutes(),2),(0,M.Z)(r.getSeconds(),2)].join(c);s="".concat(s).concat(Z).concat(j).concat(l)}return s}((0,k.default)(n,"dd.MM.yyyy",new Date))},rn=function(n){var e=n.name,t=n.type,a=n.pattern,o=n.value,l=(0,r.useState)(o),f=(0,i.Z)(l,2),m=f[0],h=f[1],g=(0,r.useState)(!0),Z=(0,i.Z)(g,2),j=Z[0],w=Z[1],v=(0,c.v9)((function(n){return n.auth.token}));(0,r.useEffect)((function(){h(o)}),[o]);var y=function(){var n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="birthday"===e?(0,P.Z)({},e,tn(m)):(0,P.Z)({},e,m),n.next=3,(0,x.gS)(v,t);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,u.jsxs)(Xn,{children:[(0,u.jsxs)("label",{children:[e,":"]}),(0,u.jsx)(Vn,{type:t,value:m,onChange:function(n){return h(n.target.value)},pattern:a,name:e,disabled:j,autoFocus:!j}),j?(0,u.jsx)(Wn,{onClick:function(){w(!1)},children:(0,u.jsx)(p.Z,{id:"edit",s:"#54ADFF"})}):(0,u.jsx)(Wn,{onClick:y,children:(0,u.jsx)(p.Z,{id:"check",s:"#00C3AD"})})]})},an=t(168),on=t(6444),sn=on.ZP.div(z||(z=(0,an.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n    flex-direction: column;\n  }\n"]))),ln=on.ZP.div(D||(D=(0,an.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),dn=on.ZP.p(E||(E=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.04em;\n  color: #000000;\n"]))),cn=on.ZP.div(S||(S=(0,an.Z)(["\n  width: 182px;\n  height: 182px;\n  background: #54adff;\n  border-radius: 40px;\n  margin-top: 20px;\n"]))),pn=on.ZP.img(A||(A=(0,an.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),xn=on.ZP.div(U||(U=(0,an.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 71px;\n    margin-right: 76px;\n    margin-bottom: 28px;\n  }\n"]))),fn=on.ZP.button(Y||(Y=(0,an.Z)(["\n  display: flex;\n  gap: 8px;\n  border: none;\n  background-color: transparent;\n  margin-top: 15px;\n  align-items: center;\n"]))),mn=on.ZP.button(_||(_=(0,an.Z)(["\n  display: flex;\n  align-self: flex-start;\n  gap: 12px;\n  border: none;\n  background-color: transparent;\n  margin-top: 21px;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    left: 0px;\n    bottom: -60px;\n  }\n"]))),hn=on.ZP.p(T||(T=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n"]))),un=on.ZP.p(R||(R=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  color: #888888;\n"]))),gn=on.ZP.div(B||(B=(0,an.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 21px;\n  padding: 0 8px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n    gap: 8px;\n    margin-bottom: 56px;\n  }\n"]))),Zn=on.ZP.div(N||(N=(0,an.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),jn=on.ZP.input(O||(O=(0,an.Z)(["\n  width: 190px;\n  border: 1px solid ",";\n  border-radius: 20px;\n  padding: 4px 12px;\n"])),(function(n){return n.theme.colors.link})),wn=on.ZP.button(G||(G=(0,an.Z)(["\n  position: absolute;\n  right: 28px;\n  background-color: transparent;\n  border: none;\n\n  @media screen and (min-width: 768px) {\n    right: 10px;\n  }\n"]))),vn=on.ZP.div(H||(H=(0,an.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: 32px;\n  }\n"]))),yn=on.ZP.div(I||(I=(0,an.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n  }\n"]))),bn=on.ZP.img(L||(L=(0,an.Z)(["\n  align-self: center;\n  width: 240px;\n  height: 240px;\n  background: #54adff;\n  border-radius: 20px;\n  margin: 20px 0;\n\n  @media screen and (min-width: 768px) {\n    width: 128px;\n    height: 128px;\n    margin-right: 20px;\n    margin-bottom: 108px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 31px;\n  }\n"]))),Pn=on.ZP.div(q||(q=(0,an.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 46px;\n  margin-bottom: 31px;\n\n  @media screen and (min-width: 1280px) {\n    margin: 0;\n  }\n"]))),kn=on.ZP.p(J||(J=(0,an.Z)(["\n  text-align: center;\n"]))),Fn=on.ZP.div(K||(K=(0,an.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  align-items: flex-start;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 20px;\n    margin-right: 20px;\n    flex-grow: 1;\n    width: auto;\n  }\n"]))),Mn=on.ZP.p(Q||(Q=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.57;\n  letter-spacing: 0.04em;\n"]))),Cn=on.ZP.span(V||(V=(0,an.Z)(["\n  font-weight: 700;\n"]))),zn=on.ZP.button(W||(W=(0,an.Z)(["\n  padding: 0;\n  position: absolute;\n  right: 0px;\n  border: none;\n  background-color: transparent;\n"]))),Dn=sn,En=ln,Sn=yn,An=vn,Un=dn,Yn=Pn,_n=Fn,Tn=Mn,Rn=Cn,Bn=zn,Nn=cn,On=pn,Gn=xn,Hn=bn,In=kn,Ln=fn,qn=mn,Jn=hn,Kn=un,Qn=gn,Vn=jn,Wn=wn,Xn=Zn,$n=rn,ne=b,ee=Z,te=t(9434),ie=on.ZP.div(X||(X=(0,an.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 68px 16px 60px 16px;\n  @media screen and (min-width: 768px) {\n    padding: 60px 16px;\n    width: 608px;\n  }\n"]))),re=on.ZP.h2($||($=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 52px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n    letter-spacing: 0.04em;\n  }\n"]))),ae=on.ZP.p(nn||(nn=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  margin-bottom: 40px;\n  \n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 33px;\n    letter-spacing: 0.04em;\n  }\n"]))),oe=t(9839),se=function(n){var e=n.close;return(0,u.jsxs)(ie,{children:[(0,u.jsx)(re,{children:"Congrats!"}),(0,u.jsx)(ae,{children:"You're registration is success"}),(0,u.jsxs)(j.Z,{onClick:e,w:"256",h:"40",shape:"solid",g:"8",children:["Go to profile",(0,u.jsx)(oe.Z,{id:"paw",f:"white"})]})]})},le=function(){var n=(0,a.TH)();console.log(n);var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),o=t[0],s=t[1];return(0,r.useEffect)((function(){var e=n.state;if(e){console.log(e);var t=n.state.isModalOpen;s(t)}}),[n.state]),(0,u.jsxs)(te.Z,{children:[(0,u.jsxs)(de,{children:[(0,u.jsx)(ee,{}),(0,u.jsx)(ne,{})]}),o&&(0,u.jsx)(m.Z,{close:function(){return s(!1)},children:(0,u.jsx)(se,{close:function(){return s(!1)}})})]})},de=on.ZP.div(en||(en=(0,an.Z)(["\n  margin-top: 40px;\n  margin-bottom: 137px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 121px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: flex;\n  }\n"]))),ce=le}}]);
//# sourceMappingURL=54.7981b985.chunk.js.map