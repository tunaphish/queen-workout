(this["webpackJsonpqueen-workout"]=this["webpackJsonpqueen-workout"]||[]).push([[0],{27:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var s,i,c,o,a,r,d,j,u,b,l,x,p,m,h,O=t(0),g=t.n(O),f=t(19),v=t.n(f),w=t(2),y=(t(27),t(3)),k=t(9),L=t(4),B=t(1),D=y.a.svg(s||(s=Object(w.a)(["\n    height: 64px;\n    position: absolute;\n    margin: 1px 0 0 -32px;\n\n    > * {\n        transition: all 0.8s;\n    }\n    > *:hover {\n        fill: white;\n        transition: all 0.1s;\n    }\n"]))),N=y.a.polygon(i||(i=Object(w.a)(["\n    fill: #0392D9;\n"]))),C=y.a.path(c||(c=Object(w.a)(["\n    fill: #1DBCD6;\n"]))),q=y.a.path(o||(o=Object(w.a)(["\n    fill: #035CD9;\n"]))),z=function(){return Object(B.jsxs)(D,{className:"logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[Object(B.jsx)(N,{className:"topbody",points:"127.5,256.5 431.5,128.5 191.5,128.5 "}),Object(B.jsx)(N,{className:"bottombody",points:"431.5,383.5 191.5,383.5 127.5,256.5 "}),Object(B.jsx)(C,{className:"mainbody",d:"M493.3,252l-61.8-123.5l-304,128l304,127L493.2,261C494.7,258.2,494.7,254.8,493.3,252z"}),Object(B.jsx)(q,{className:"topfin",d:"M191.5,20.2v108.3h240l-235.7-111C193.8,16.6,191.5,18,191.5,20.2z"}),Object(B.jsx)(q,{className:"bottomfin",d:"M191.5,383.5v107.3c0,2.2,2.3,3.6,4.3,2.7l235.7-110H191.5z"}),Object(B.jsx)(C,{className:"tailfin",d:"M127,257L21.3,134.1c-1.8-2.1-5.3-0.8-5.3,2V376c0,2.8,3.4,4.1,5.3,2l106.2-121.5"})]})},I=y.a.header(a||(a=Object(w.a)(["\n  background: rgb(239,121,138);\n  background: linear-gradient(90deg, rgba(239,121,138,1) 0%, rgba(247,169,168,1) 50%, rgba(229,195,209,1) 100%);\n  min-height: 64px;\n\n  //border-bottom-left-radius: 50%;\n  //border-bottom-right-radius: 50%;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n"]))),M=y.a.div(r||(r=Object(w.a)(["\n  color: white;\n"]))),S=function(){return Object(B.jsx)(I,{children:Object(B.jsx)(M,{children:Object(B.jsx)(k.b,{to:"/",children:Object(B.jsx)(z,{})})})})},A={name:"Hip Thrust",video:"/videos/hip-thrusts.mp4"},R=[{exercise:A,sets:[30,30,30]},{exercise:{name:"Frog Pumps",video:"/videos/frog-pumps.mp4"},sets:[30,30,30]},{exercise:{name:"Squat with Calf Raise",video:"/videos/squat-with-calf-raise.mp4"},sets:[16,16,16]},{exercise:{name:"Knee Up Step Back Lunges",video:"/videos/knee-up-step-back-lunges.mp4"},sets:[12,12,12]},{exercise:{name:"Static Glute Bridge Activation (wrong video)",video:"/videos/banded-hip-abductors.mp4"},sets:[20,20,20]},{exercise:{name:"Db Around the World Lunges ",video:"/videos/db-around-the-world-lunges.mp4"},sets:[10,10,10]},{exercise:{name:"Banded Hip Abductors",video:"/videos/banded-hip-abductors.mp4"},sets:[30,30,30]},{exercise:{name:"Calf Raises",video:"/videos/calf-raises.mp4"},sets:[60]}],T=[{name:"Booty Day 1",roundList:R,image:"/images/booty-day-1.jpg"},{name:"Booty Day 2",roundList:[{exercise:A,sets:[30,30,30]}],image:"/images/wireframe.jpg"},{name:"Booty Day 2",roundList:R,image:"/images/wireframe.jpg"},{name:"Booty Day 2",roundList:R,image:"/images/wireframe.jpg"}],H=y.a.h1(d||(d=Object(w.a)(["\n  font-family: 'Bebas Neue';\n  font-size: 64px;\n  letter-spacing: 3px;\n  color: #000000\n"]))),E=Object(y.a)(H)(j||(j=Object(w.a)(["\n  font-size: 32px;\n  color: #2b2b2b;\n"]))),F=function(e){var n=e.children;return Object(B.jsx)(H,{children:n})},J=function(e){var n=e.children;return Object(B.jsx)(E,{children:n})},P=y.a.div(u||(u=Object(w.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),W=y.a.img(b||(b=Object(w.a)(["\n  width: 580px;\n  height: 257px;\n  object-fit: cover;\n"]))),G=T.map((function(e,n){return Object(B.jsx)(k.b,{to:"/workout/".concat(n),children:Object(B.jsx)(W,{alt:e.name,src:"/queen-workout"+e.image},e.name)},e.name)})),K=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,{children:"Workouts"}),Object(B.jsx)(P,{children:G})]})},U=y.a.div(l||(l=Object(w.a)(["\n  margin: 20px 0 0 0;\n"]))),V=function(e){return e.roundList.map((function(e){return Object(B.jsxs)(U,{children:[Object(B.jsx)(J,{children:e.exercise.name}),"".concat(e.sets.length," x ").concat(e.sets[0])]},e.exercise.name)}))},X=function(){var e=Object(L.f)().workoutid,n=T[e];return Object(B.jsxs)("div",{children:[Object(B.jsx)(F,{children:n.name}),V(n),Object(B.jsx)(k.b,{to:"/workout/".concat(e,"/round/0/set/0"),children:"START"})]})},Q=y.a.div(x||(x=Object(w.a)(["\n  margin: 10px;\n"]))),Y=y.a.video(p||(p=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Z=function(){var e=Object(L.f)(),n=e.workoutid,t=e.roundid,s=e.setid;n=parseInt(n,10),t=parseInt(t,10),s=parseInt(s,10);var i=T[n],c=i.roundList[t],o="/reward";return i.roundList.length-1===t&&i.roundList[t].sets.length-1===s||(o=i.roundList[t].sets.length-1===s?"/workout/".concat(n,"/round/").concat(t+1,"/set/0"):"/workout/".concat(n,"/round/").concat(t,"/set/").concat(s+1)),Object(B.jsxs)(Q,{children:[Object(B.jsx)(F,{children:c.exercise.name}),Object(B.jsx)(Y,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:Object(B.jsx)("source",{src:"/queen-workout"+c.exercise.video,type:"video/mp4"})},c.exercise.name),Object(B.jsx)(J,{children:"Reps: ".concat(c.sets[s])}),Object(B.jsx)(k.b,{to:o,children:"NEXT"})]})},$=function(){return Object(B.jsx)("div",{children:"Congratz"})},_=y.a.div(m||(m=Object(w.a)(["\n  margin: 50px 10px 10px 0;\n  display: flex;\n  justify-content: space-around;\n"]))),ee=y.a.div(h||(h=Object(w.a)(["\n  max-width: 1200px;\n"]))),ne=function(){return Object(B.jsxs)(k.a,{children:[Object(B.jsx)(S,{}),Object(B.jsx)(_,{children:Object(B.jsx)(ee,{children:Object(B.jsxs)(L.c,{children:[Object(B.jsx)(L.a,{path:"/",exact:!0,component:K}),Object(B.jsx)(L.a,{path:"/workout/:workoutid/round/:roundid/set/:setid",component:Z}),Object(B.jsx)(L.a,{path:"/workout/:workoutid",component:X}),Object(B.jsx)(L.a,{path:"/reward",component:$}),Object(B.jsx)(L.a,{render:function(){return Object(B.jsx)("h1",{children:"404: page not found"})}})]})})})]})};v.a.render(Object(B.jsx)(g.a.StrictMode,{children:Object(B.jsx)(ne,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1d0d0e6f.chunk.js.map