(this["webpackJsonpvnsync-web-client"]=this["webpackJsonpvnsync-web-client"]||[]).push([[0],{40:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(34),s=n.n(a),o=(n(40),n(8)),i=n.n(o),u=n(12),b=n(7),j=n(35),l=(n(73),function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c,a,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=s.length,c=new Array(r>2?r-2:0),a=2;a<r;a++)c[a-2]=s[a];return e.abrupt("return",new Promise((function(e){t.emit.apply(t,[n].concat(c,[function(t){e(t)}]))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d=n(0),O=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(b.a)(a,2),o=s[0],O=s[1],h=Object(r.useState)(""),f=Object(b.a)(h,2),m=f[0],p=f[1],x=Object(r.useState)(""),v=Object(b.a)(x,2),g=v[0],y=v[1],w=Object(r.useState)(""),S=Object(b.a)(w,2),k=S[0],C=S[1],F=Object(r.useState)(""),R=Object(b.a)(F,2),E=R[0],J=R[1],M=Object(r.useState)([]),N=Object(b.a)(M,2),P=N[0],A=N[1],B=Object(r.useState)(null),D=Object(b.a)(B,2),I=D[0],L=D[1],T=Object(r.useState)(null),U=Object(b.a)(T,2),V=U[0],q=U[1],z=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!0),V){e.next=3;break}throw new Error("Connection is now defined.");case 3:return e.next=5,l(V,"toggleReady");case 5:if("ok"===(t=e.sent).status){e.next=10;break}return p(t.failMessage),V.disconnect(),e.abrupt("return");case 10:O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"VNSync 0.3"}),""!==m&&Object(d.jsxs)("h3",{children:["Error: ",m]}),Object(d.jsxs)("div",{children:[!n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:"}),"\xa0",Object(d.jsx)("input",{type:"text",name:"username",value:g,onChange:function(e){return y(e.target.value)},disabled:o}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"roomName",children:"Room name:"}),"\xa0",Object(d.jsx)("input",{type:"text",name:"roomName",value:k,onChange:function(e){return C(e.target.value)},disabled:o}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{disabled:o,onClick:function(){O(!0);var e=g.trim(),t=k.trim(),n=Object(j.io)("wss://vnsync-server-33vh3.ondigitalocean.app",{reconnection:!0,reconnectionDelay:500,reconnectionAttempts:120});n.on("connect",Object(u.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l(n,"joinRoom",e,t);case 2:if("ok"===(a=r.sent).status){r.next=7;break}return p(a.failMessage),n.disconnect(),r.abrupt("return");case 7:c(!0),O(!1),J(t),p("");case 11:case"end":return r.stop()}}),r)})))),n.on("disconnect",(function(e){"io server disconnect"===e&&(c(!1),O(!1),J(""),A([]),L(null),q(null))})),n.on("roomStateChange",(function(t){A(t),L(t.find((function(t){return t.username===e}))||null)})),q(n)},children:"Join Room!"})]}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{children:["Room name: ",E]}),Object(d.jsx)("ul",{children:P.map((function(e){return Object(d.jsxs)("li",{children:[e.username," - ",!e.isReady&&"not"," ready"]},e.username)}))}),Object(d.jsx)("button",{onClick:z,disabled:o,style:{width:"100%",height:"500px"},children:(null===I||void 0===I?void 0:I.isReady)?"Unready":"Ready"}),Object(d.jsx)("hr",{})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[75,1,2]]]);
//# sourceMappingURL=main.d87d6ccd.chunk.js.map