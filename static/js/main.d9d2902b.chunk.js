(this["webpackJsonpqueen-workout"]=this["webpackJsonpqueen-workout"]||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var s,a,c,i,r,o,d,j,b,u,l,p,x,m,h,g=n(0),O=n.n(g),w=n(19),f=n.n(w),v=n(2),y=(n(27),n(3)),k=n(9),B=n(4),L=n(1),A=y.a.svg(s||(s=Object(v.a)(["\n    height: 64px;\n    position: absolute;\n    margin: 1px 0 0 -32px;\n\n    > * {\n        transition: all 0.8s;\n    }\n    > *:hover {\n        fill: white;\n        transition: all 0.1s;\n    }\n"]))),N=y.a.polygon(a||(a=Object(v.a)(["\n    fill: #0392D9;\n"]))),D=y.a.path(c||(c=Object(v.a)(["\n    fill: #1DBCD6;\n"]))),C=y.a.path(i||(i=Object(v.a)(["\n    fill: #035CD9;\n"]))),I=function(){return Object(L.jsxs)(A,{className:"logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[Object(L.jsx)(N,{className:"topbody",points:"127.5,256.5 431.5,128.5 191.5,128.5 "}),Object(L.jsx)(N,{className:"bottombody",points:"431.5,383.5 191.5,383.5 127.5,256.5 "}),Object(L.jsx)(D,{className:"mainbody",d:"M493.3,252l-61.8-123.5l-304,128l304,127L493.2,261C494.7,258.2,494.7,254.8,493.3,252z"}),Object(L.jsx)(C,{className:"topfin",d:"M191.5,20.2v108.3h240l-235.7-111C193.8,16.6,191.5,18,191.5,20.2z"}),Object(L.jsx)(C,{className:"bottomfin",d:"M191.5,383.5v107.3c0,2.2,2.3,3.6,4.3,2.7l235.7-110H191.5z"}),Object(L.jsx)(D,{className:"tailfin",d:"M127,257L21.3,134.1c-1.8-2.1-5.3-0.8-5.3,2V376c0,2.8,3.4,4.1,5.3,2l106.2-121.5"})]})},W=y.a.header(r||(r=Object(v.a)(["\n  background: rgb(239,121,138);\n  background: linear-gradient(90deg, rgba(239,121,138,1) 0%, rgba(247,169,168,1) 50%, rgba(229,195,209,1) 100%);\n  min-height: 64px;\n\n  //border-bottom-left-radius: 50%;\n  //border-bottom-right-radius: 50%;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n"]))),q=y.a.div(o||(o=Object(v.a)(["\n  color: white;\n"]))),z=function(){return Object(L.jsx)(W,{children:Object(L.jsx)(q,{children:Object(L.jsx)(k.b,{to:"/",children:Object(L.jsx)(I,{})})})})},M={name:"Hip Thrust",video:"/videos/hip-thrusts.mp4"},S=[{exercise:M,sets:[30,30,30]},{exercise:{name:"Frog Pumps",video:"https://www.instagram.com/p/BW6EN7WAbqI/"},sets:[30,30,30]},{exercise:{name:"Squat with Calf Raise",video:"https://www.instagram.com/p/BW6IB6OgUAb/"},sets:[16,16,16]},{exercise:{name:"Knee Up Step Back Lunges",video:"https://www.instagram.com/p/BW6XhA-guKR/"},sets:[12,12,12]},{exercise:{name:"Static Glute Bridge Activation",video:"https://www.instagram.com/p/BiIsLtuA7_t/"},sets:[20,20,20]},{exercise:{name:"Db Around the World Lunges ",video:"https://www.instagram.com/p/BW3qPxMAV1E/"},sets:[10,10,10]},{exercise:{name:"Banded Hip Abductors",video:"https://www.instagram.com/p/BVgVCeFny7x/"},sets:[30,30,30]},{exercise:{name:"Calf Raises ",video:"https://www.instagram.com/p/BW6VHkgAprB/"},sets:[60]}],V=[{name:"Booty Day 1",roundList:S,image:"/images/booty-day-1.jpg"},{name:"Booty Day 2",roundList:[{exercise:M,sets:[30,30,30]}],image:"/images/wireframe.jpg"},{name:"Booty Day 2",roundList:S,image:"/images/wireframe.jpg"},{name:"Booty Day 2",roundList:S,image:"/images/wireframe.jpg"}],E=y.a.h1(d||(d=Object(v.a)(["\n  font-family: 'Bebas Neue';\n  font-size: 64px;\n  letter-spacing: 3px;\n  color: #000000\n"]))),H=Object(y.a)(E)(j||(j=Object(v.a)(["\n  font-size: 32px;\n  color: #2b2b2b;\n"]))),R=function(e){var t=e.children;return Object(L.jsx)(E,{children:t})},T=function(e){var t=e.children;return Object(L.jsx)(H,{children:t})},F=y.a.div(b||(b=Object(v.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),P=y.a.img(u||(u=Object(v.a)(["\n  width: 580px;\n  height: 257px;\n  object-fit: cover;\n"]))),J=V.map((function(e,t){return Object(L.jsx)(k.b,{to:"/workout/".concat(t),children:Object(L.jsx)(P,{alt:e.name,src:"/queen-workout"+e.image},e.name)})})),K=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R,{children:"Workouts"}),Object(L.jsx)(F,{children:J})]})},U=y.a.div(l||(l=Object(v.a)(["\n  margin: 20px 0 0 0;\n"]))),X=function(e){return e.roundList.map((function(e){return Object(L.jsxs)(U,{children:[Object(L.jsx)(T,{children:e.exercise.name}),"".concat(e.sets.length," x ").concat(e.sets[0])]})}))},G=function(){var e=Object(B.f)().workoutid,t=V[e];return Object(L.jsxs)("div",{children:[Object(L.jsx)(R,{children:t.name}),X(t),Object(L.jsx)(k.b,{to:"/workout/".concat(e,"/round/0/set/0"),children:"START"})]})},_=y.a.div(p||(p=Object(v.a)(["\n  margin: 10px;\n"]))),Q=y.a.video(x||(x=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Y=function(){var e=Object(B.f)(),t=e.workoutid,n=e.roundid,s=e.setid;t=parseInt(t,10),n=parseInt(n,10),s=parseInt(s,10);var a=V[t],c=a.roundList[n],i="/reward";return a.roundList.length-1===n&&a.roundList[n].sets.length-1===s||(i=a.roundList[n].sets.length-1===s?"/workout/".concat(t,"/round/").concat(n+1,"/set/0"):"/workout/".concat(t,"/round/").concat(n,"/set/").concat(s+1)),Object(L.jsxs)(_,{children:[Object(L.jsx)(R,{children:c.exercise.name}),Object(L.jsx)(Q,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:Object(L.jsx)("source",{src:"/queen-workout"+c.exercise.video,type:"video/mp4"})}),Object(L.jsx)(k.b,{to:i,children:"NEXT"})]})},Z=function(){return Object(L.jsx)("div",{children:"Congratz"})},$=y.a.div(m||(m=Object(v.a)(["\n  margin: 50px 10px 10px 0;\n  display: flex;\n  justify-content: space-around;\n"]))),ee=y.a.div(h||(h=Object(v.a)(["\n  max-width: 1200px;\n"]))),te=function(){return Object(L.jsxs)(k.a,{children:[Object(L.jsx)(z,{}),Object(L.jsx)($,{children:Object(L.jsx)(ee,{children:Object(L.jsxs)(B.c,{children:[Object(L.jsx)(B.a,{path:"/",exact:!0,component:K}),Object(L.jsx)(B.a,{path:"/workout/:workoutid/round/:roundid/set/:setid",component:Y}),Object(L.jsx)(B.a,{path:"/workout/:workoutid",component:G}),Object(L.jsx)(B.a,{path:"/reward",component:Z}),Object(L.jsx)(B.a,{render:function(){return Object(L.jsx)("h1",{children:"404: page not found"})}})]})})})]})};f.a.render(Object(L.jsx)(O.a.StrictMode,{children:Object(L.jsx)(te,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d9d2902b.chunk.js.map