"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[518],{1518:function(n,e,r){r.r(e),r.d(e,{Dialogs:function(){return _}});var i,t,o,a,s,d,c,l,x,p,u,g,h,f,m,A,b,w=r(168),v=r(390),Z=r(8772),j=r(2795),y=r(4741),k=r(8013),C=r(9514),P=function(n){return n.dialogs.activeUserId},M=function(n){return n.dialogs.messages},B=function(n){return n.dialogs.all_dialogs},D=r(8919),E=r(2559),S=function(){console.log("messageList is render");var n=(0,k.C)(P),e=(0,k.C)(C.p),r=(0,k.C)(M);return r[n]?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(Z.LC,{shouldForwardProp:function(n){return"senderId"!==n},children:(0,E.jsx)(T,{children:r[n].map((function(n){var r=new Date(n.addedAt),i=r.getHours(),t=r.getMinutes(),o=new Date;t<10&&(t=Number("0".concat(t)));var a="".concat(i.toString(),":").concat(t.toString().padStart(2,"0"));return(0,E.jsxs)(F,{children:[(0,E.jsx)(z,{authid:e,senderid:n.senderId,children:n.body}),(0,E.jsx)(I,{children:(0,E.jsxs)(E.Fragment,{children:[o.toDateString()!==r.toDateString()?["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r.getDay()]:a,n.viewed&&(0,E.jsx)(y.Z,{rev:""})]})})]},n.id)}))})})}):(0,E.jsx)(D.a,{})},z=Z.ZP.span(i||(i=(0,w.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  width: max-content;\n  max-width: 450px;\n  height: max-content;\n  padding: 10px;\n  margin: 5px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  overflow: hidden;\n"])),(function(n){return n.authid===n.senderid?"#38438c":"#494957"}),(function(n){return n.authid===n.senderid?"7px 7px 2px 7px":"7px 7px 7px 2px"})),F=Z.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: end;\n  margin-right: 5px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.11);\n"]))),T=Z.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=Z.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  justify-items: end;\n  align-items: end;\n  height: 10px;\n  font-size: 10px;\n  margin-bottom: 10px;\n  gap: 10px;\n  color: grey;\n  margin-right: 5px;\n"]))),R=r(9439),L=r(8679),N=function(){console.log("AddMessage is render");var n=(0,v.useState)(""),e=(0,R.Z)(n,2),r=e[0],i=e[1],t=(0,k.C)(P),o=(0,k.T)(),a=function(){o((0,j.CJ)(t,r)),i("")};return(0,E.jsx)(Z.LC,{shouldForwardProp:function(n){return"condition"!==n},children:(0,E.jsxs)(U,{children:[(0,E.jsx)(Q,{placeholder:"Write a message...",onChange:function(n){i(n.currentTarget.value)},value:r,onKeyDown:function(n){"Enter"===n.key&&a()}}),(0,E.jsx)(H,{condition:!!r,onClick:a,children:(0,E.jsx)(J,{src:L})})]})})},U=Z.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  background-color: #121218;\n  border-radius: 0 0 10px 10px;\n"]))),Q=Z.ZP.input(d||(d=(0,w.Z)(["\n  all: unset;\n  background-color: #121218;\n  color: white;\n  height: 40px;\n  width: 80%;\n  margin-bottom: 1px;\n  margin-inline: 20px;\n  padding-left: 5px;\n  font-size: 15px;\n"]))),H=Z.ZP.div(c||(c=(0,w.Z)(["\n  margin-right: 5px;\n  cursor: pointer;\n  //margin-right: 2px;\n  background-color: #3D50FA;\n  width: 30px;\n  height: 30px;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 1px 19px 4px #3D50FA;\n  -moz-box-shadow: 0 1px 19px 4px #3D50FA;\n  box-shadow: 0 1px 10px 4px #3D50FA;\n  //==============================================================\n  opacity: ",";\n  visibility: ",";\n  transition: opacity 0.3s ease, visibility 0.2s ease;\n  //==============================================================\n"])),(function(n){return n.condition?"1":"0"}),(function(n){return n.condition?"visible":"hidden"})),J=Z.ZP.img(l||(l=(0,w.Z)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  z-index: 2;\n"]))),Y=r(5400),K=function(){console.log("usersDialogs is rendered ");var n=(0,k.C)(B),e=(0,k.T)(),r=null===n||void 0===n?void 0:n.map((function(n){return(0,E.jsxs)(q,{to:"/SocialStyled/dialogs/".concat(n.id,"/messages"),onClick:function(){return r=n.id,e((0,j.TN)(r)),void e((0,j.jR)(r));var r},children:[(0,E.jsx)("div",{children:n.userName}),(0,E.jsxs)("div",{children:[n.photos.small?(0,E.jsx)(G,{src:n.photos.small}):(0,E.jsx)(X,{children:n.userName.trim()[0].toUpperCase()}),n.hasNewMessages&&(0,E.jsx)(O,{children:n.newMessagesCount})]})]},n.id)}));return n?(0,E.jsx)(V,{children:r}):(0,E.jsx)(D.a,{})},O=Z.ZP.div(x||(x=(0,w.Z)(["\n  position: relative;\n  bottom: 65px;\n  left: 40px;\n  background-color: rgba(210, 30, 30, 0.83);\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n"]))),G=Z.ZP.img(p||(p=(0,w.Z)(["\n  border-radius: 50px;\n  width: 50px;\n  height: 50px;\n"]))),X=Z.ZP.div(u||(u=(0,w.Z)(["\n  border-radius: 50px;\n  width: 50px;\n  height: 50px;\n  background-color: ",";\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 24px;\n"])),(function(){return"rgb(".concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),")")})),q=(0,Z.ZP)(Y.OL)(g||(g=(0,w.Z)(["\n  cursor: pointer;\n  width: max-content;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  padding: 5px;\n  padding-inline: 10px;\n  //background-color: #39404b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  font-size: 16px;\n  border-radius: 5px;\n  text-decoration: none;\n  flex-direction: row;\n  gap: 10px;\n\n  &:hover {\n    background-color: #3e4452;\n  }\n"]))),V=Z.ZP.div(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 10px;\n"]))),W=r(5657),_=function(){console.log("dialogs is rendered ");var n=(0,k.C)(P),e=(0,k.C)(M),r=(0,k.T)();(0,v.useEffect)((function(){r((0,j.UP)())}),[]);var i=(0,v.useRef)(null);return(0,v.useEffect)((function(){i.current&&n&&e[n]&&(i.current.scrollTop=i.current.scrollHeight)}),[n,e]),(0,E.jsxs)(nn,{children:[n?(0,E.jsx)($,{id:"myButton",onClick:function(){return r((0,j.TN)(0))},children:(0,E.jsx)(W.Z,{rev:""})}):"",(0,E.jsxs)(en,{children:[(0,E.jsxs)(rn,{ref:i,children:[n?"":(0,E.jsx)(K,{}),n?(0,E.jsx)(S,{}):""]}),n?(0,E.jsx)(N,{}):""]})]})},$=Z.ZP.button(f||(f=(0,w.Z)(["\n  background-color: #2e2f3a;\n  border-radius: 10px 10px 10px 10px;\n  outline: none;\n  border: none;\n  color: white;\n  position: relative;\n  height: 40px;\n  transition: background-color 0.3s;\n  transform: scale(1);\n  \n  &:hover{\n    background-color: #494957;\n    transform: scaleY(1.1);\n    transition: transform 0.3s ease;\n  }\n\n"]))),nn=Z.ZP.div(m||(m=(0,w.Z)(["\n  color: white;\n  font-size: 24px;\n  margin: 3em auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n"]))),en=Z.ZP.div(A||(A=(0,w.Z)(["\n  border: 1px solid #464646;\n  border-radius: 10px 6px 6px 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: 740px;\n"]))),rn=Z.ZP.div(b||(b=(0,w.Z)(["\n  border-radius: 10px 6px 6px 10px;\n  background-color: #1a1a21;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  min-height: 740px;\n  max-height: 740px;\n  //position: relative;\n  overflow: auto;\n  overflow-x: hidden;\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #494957;\n    border-radius: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #2e2f3a;\n    border-radius: 5px;\n  }\n"])))},4741:function(n,e,r){r.d(e,{Z:function(){return d}});var i=r(7462),t=r(390),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=r(9929),s=function(n,e){return t.createElement(a.Z,(0,i.Z)({},n,{ref:e,icon:o}))};var d=t.forwardRef(s)},5657:function(n,e,r){r.d(e,{Z:function(){return d}});var i=r(7462),t=r(390),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"},a=r(9929),s=function(n,e){return t.createElement(a.Z,(0,i.Z)({},n,{ref:e,icon:o}))};var d=t.forwardRef(s)},8679:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAAAAAAAAAA////AAAAAAAAHRlZPwAAAAZ0Uk5TAAID/wEEpj06qgAAAN1JREFUeJzllcENwyAMRQ1lAJoJUqm5I3mBZIRW6v6rNDlENcb4p7mGKw/jB9gQXWYMD38+EEUXyMwUZyfAjZlLyF0gbgAXGt0IG/H0gTWROwC4I/MDOjICsGUkYMpUgCVTA4aMBhqZpAEt0wJKxgBqmSYHLRMtoJYxASljhxBE7kQpaSeWaTS3KuI80vCZm92KOvQ0vFVKQQOvPrCudrZYpmza7klCTXhQYB5eFrxu+GBOPDmK4pIOPPs/CweVHipeVP4q/QZALQg0sX4bPNZIvVYMmzn+DuCHcoXxBUhJgwoIlvftAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=518.cf4c03af.chunk.js.map