(this.webpackJsonpfood_stories=this.webpackJsonpfood_stories||[]).push([[0],{203:function(e,n,t){},380:function(e,n,t){"use strict";t.r(n);var r,i,o=t(1),a=t.n(o),c=t(45),l=t.n(c),s=t(5),d=t(7),u=t(6),f=u.default.div(r||(r=Object(d.a)(["\n \n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n"]))),h={colors:{white:"#FFFFFF",mainBGC:"#F7F8FA",mainDark:"#737C8E",mainColor:"#B5EAEA",inputBorder:"#DFE2E8",mainColorLight:"#353766",inputBorderLight:"#f2f2f2",active:"#17D1E0",black:"#111111",success:"#8FCB81",error:"#CB8581",warning:"#E1D888"},fontSize:{headers:"40px",xl:"30px",l:"25px",m:"22px",s:"18px",xs:"16px"},boxShadow:{mainShadow:"0 4px 5px 0 rgba(0,0,0,0.25)",inputShadow:"-2px 4px 10px rgba(115, 124, 142, 0.09)"},media:{phone:"@media (max-width: 600px)",tablet:"@media (min-width: 601px)",desktop:"@media (min-width: 992px)"}},p=t(194),b=(t(203),Object(u.createGlobalStyle)(i||(i=Object(d.a)(["\n  ","\n  html {\n    box-sizing: border-box;\n  }\n  *, *::after, *::before {\n    box-sizing: inherit;\n  }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    padding: 0;\n    margin: 0;\n    color: ",";\n  }\n  a, button {\n    font-family: 'Montserrat', sans-serif;\n    text-decoration: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  h1 {\n    font-size: 30px;\n    font-weight: 300;\n    margin: 0;\n  }\n.Toastify__toast--error {\n  background: #dd7777;\n}\n.Toastify__toast--success {\n  background: #77dd77;\n}\n"])),p.normalize,(function(e){return e.theme.colors.mainDark}))),C=t(22),j=t(10),m=t(16),x=t(47),v=t(195),O="SIGNIN_SUCCESS",g="SIGNIN_ERROR",w="SIGNUP_SUCCESS",y="SIGNUP_ERROR",E="LOGOUT_SUCCESS",k="LOGOUT_ERROR",S={payload:null};var R,z,Z,M,V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case w:case y:case O:case g:case E:case k:return Object(s.a)(Object(s.a)({},e),{},{payload:r});default:return e}},L=t(30),P="BEGIN_API_CALL",H="API_CALL_ERROR",_=function(e){return/(.*)_(SUCCESS)/.test(e.type)},B={apiCallProgress:0},I=Object(x.combineReducers)({auth:V,apiCallsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0,t=n.type;return t===P?Object(s.a)(Object(s.a)({},e),{},{apiCallProgress:1}):t===H||_?Object(s.a)(Object(s.a)({},e),{},{apiCallProgress:0}):e},firebase:L.firebaseReducer}),F=t(196),A=t(59),U=function(){return function(e){return function(n){var t=/(.*)_(SUCCESS)/.test(n.type),r=/(.*)_(ERROR)/.test(n.type);t?A.b.success(n.payload):r&&A.b.error(n.payload),e(n)}}},G=function(e){var n=[F.a,U],t=[x.applyMiddleware.apply(void 0,n)],r=v.composeWithDevTools.apply(void 0,t);return Object(x.createStore)(I,e,r)},D=t(197),N=(t(371),t(373),D.a.initializeApp({apiKey:"AIzaSyDNv6K4R8NSyCs_ToXOe7UaatBEaFw5wL4",authDomain:"food-stories-89472.firebaseapp.com",databaseURL:"https://food-stories-89472-default-rtdb.europe-west1.firebasedatabase.app",projectId:"food-stories-89472",storageBucket:"food-stories-89472.appspot.com",messagingSenderId:"80869341786",appId:"1:80869341786:web:7fc0f54755a20687223663"})),T=N.auth(),W=(N.database(),N),q=(t(376),Object(u.keyframes)(R||(R=Object(d.a)(["\n  0% { transform: rotate(0); }\n  100% { transform: rotate(360deg); }\n"])))),J=u.default.div(z||(z=Object(d.a)(["\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  overflow: hidden;\n  background: none;\n"]))),K=u.default.div(Z||(Z=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(0.61);\n  backface-visibility: hidden;\n  transform-origin: 0 0;\n  & > div {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    animation: "," 1.408450704225352s cubic-bezier(0.5, 0, 0.5, 1)\n      infinite;\n    transform-origin: 50px 50px;\n  }\n  & > div > div {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n  }\n  & > div:nth-child(0) {\n    animation-delay: 0s;\n  }\n  & > div:nth-child(0) > div {\n    background: #6f66ed;\n    transform: translate(74.3540735907757px, 67.52417287332267px);\n  }\n  & > div:nth-child(1) {\n    animation-delay: -0.062s;\n  }\n  & > div:nth-child(1) > div {\n    background: #8366ed;\n    transform: translate(67.52417287332267px, 74.3540735907757px);\n  }\n  & > div:nth-child(2) {\n    animation-delay: -0.125s;\n  }\n  & > div:nth-child(2) > div {\n    background: #a466ed;\n    transform: translate(59.15928699750833px, 79.1835427029176px);\n  }\n  & > div:nth-child(3) {\n    animation-delay: -0.187s;\n  }\n  & > div:nth-child(3) > div {\n    background: #a48fff;\n    transform: translate(49.829469112141915px, 81.68345987083099px);\n  }\n  & > div:nth-child(4) {\n    animation-delay: -0.25s;\n  }\n  & > div:nth-child(4) > div {\n    background: #ac7df7;\n    transform: translate(40.17053088785809px, 81.68345987083099px);\n  }\n  & > div:nth-child(5) {\n    animation-delay: -0.312s;\n  }\n  & > div:nth-child(5) > div {\n    background: #6f66ed;\n    transform: translate(30.84071300249169px, 79.1835427029176px);\n  }\n  & > div:nth-child(6) {\n    animation-delay: -0.375s;\n  }\n  & > div:nth-child(6) > div {\n    background: #8366ed;\n    transform: translate(22.475827126677334px, 74.3540735907757px);\n  }\n  & > div:nth-child(7) {\n    animation-delay: -0.437s;\n  }\n  & > div:nth-child(7) > div {\n    background: #a466ed;\n    transform: translate(15.645926409224302px, 67.52417287332267px);\n  }\n"])),q),X=t(2),Y=function(e){return Object(X.jsx)(J,{children:Object(X.jsxs)(K,{children:[Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})}),Object(X.jsx)("div",{children:Object(X.jsx)("div",{})})]})})},$=(t(83),"/food_stories/signup"),Q="/food_stories/signin";var ee,ne,te,re,ie,oe,ae,ce=u.default.div(M||(M=Object(d.a)(["\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.mainBGC})),le=function(e){var n=e.children;return Object(X.jsx)(ce,{children:n})},se=u.default.div(ee||(ee=Object(d.a)(["\n  width: 200px;\n  margin: 100px 0 40px;\n  svg {\n    width: 100%;\n    height: 90px;\n  }\n  "," {\n    margin: 65px 0 40px;\n  }\n"])),(function(e){return e.theme.media.desktop})),de=u.default.form(ne||(ne=Object(d.a)(["\n  width: 75%;\n  height: 40vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 70px;\n  "," {\n    width: 35%;\n    max-width: 350px;\n  }\n"])),(function(e){return e.theme.media.desktop})),ue=u.default.button(te||(te=Object(d.a)(["\n  width: 100%;\n  margin-top: 20px;\n  font-size: ",";\n  box-shadow: ",";\n  border: none;\n  border-radius: 30px;\n  background: ",";\n  padding: 12px 0;\n  color: ",";\n  outline: none;\n  cursor: pointer;\n  font-weight: 600;\n  &:disabled {\n    opacity: 0.5;\n  }\n  "," {\n    transition: opacity 0.3s ease;\n    &:hover {\n      opacity: 0.9;\n    }\n  }\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.boxShadow.mainShadow}),(function(e){return e.theme.colors.mainColor}),(function(e){return e.theme.colors.mainBGC}),(function(e){return e.theme.media.desktop})),fe=u.default.span(re||(re=Object(d.a)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: ",";\n"])),(function(e){return e.theme.fontSize.m}),(function(e){var n=e.isColor,t=e.theme;return n&&t.colors.mainColor}),(function(e){return e.isColor&&"underline"})),he=u.default.span(ie||(ie=Object(d.a)(["\n  text-align: center;\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.error})),pe=u.default.input(oe||(oe=Object(d.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  background-color: transparent;\n  box-shadow: ",";\n  border-radius: 30px;\n  font-size: ",";\n  padding: 12px 0 10px 20px;\n  outline: none;\n  color: ",";\n"])),(function(e){return e.theme.colors.inputBorderLight}),(function(e){return e.theme.boxShadow.inputShadow}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.mainDark})),be=Object(o.forwardRef)((function(e,n){return Object(X.jsx)(pe,Object(s.a)(Object(s.a)({},e),{},{ref:n}))})),Ce=["title","titleId"];function je(){return(je=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function me(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function xe(e,n){var t=e.title,r=e.titleId,i=me(e,Ce);return o.createElement("svg",je({width:68,height:31,viewBox:"0 0 68 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,ae||(ae=o.createElement("g",{id:"Vector"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1377 13.02V0H14.3889V13.02H13.1377Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1523 1.24H14.3889V0H28.1523V1.24Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1377 31V17.98H14.3889V31H13.1377Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2706 16.12H13.1377V14.88H21.2706V16.12Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.25606 14.88H13.1377V16.12H6.25606V14.88Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.57486 13.4944C3.4581 14.3024 4.82328 14.88 6.72526 14.88V16.12C4.5608 16.12 2.87616 15.4576 1.72618 14.4056C0.578755 13.3559 1.49156e-07 11.9496 0 10.54C-1.49156e-07 9.13039 0.578755 7.7241 1.72618 6.67442C2.87616 5.62242 4.5608 4.96 6.72526 4.96V6.2C4.82328 6.2 3.4581 6.77758 2.57486 7.58558C1.68907 8.3959 1.25121 9.46961 1.25121 10.54C1.25121 11.6104 1.68907 12.6841 2.57486 13.4944Z",fill:"#737C8E"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.4255 17.4884C23.6179 16.6881 22.3761 16.12 20.645 16.12V14.88C22.6675 14.88 24.2409 15.5519 25.3102 16.6116C26.3736 17.6655 26.9011 19.0666 26.9011 20.46C26.9011 21.8534 26.3736 23.2545 25.3102 24.3084C24.2409 25.3681 22.6675 26.04 20.645 26.04V24.8C22.3761 24.8 23.6179 24.2319 24.4255 23.4316C25.2389 22.6255 25.6499 21.5466 25.6499 20.46C25.6499 19.3734 25.2389 18.2945 24.4255 17.4884Z",fill:"#737C8E"}),o.createElement("path",{d:"M24.1084 12.4744C23.3476 12.4744 22.662 12.3058 22.0514 11.9685C21.4408 11.6213 20.9603 11.1451 20.61 10.54C20.2596 9.93488 20.0845 9.2504 20.0845 8.48656C20.0845 7.72272 20.2596 7.03824 20.61 6.43312C20.9603 5.828 21.4408 5.3568 22.0514 5.01952C22.662 4.68224 23.3476 4.5136 24.1084 4.5136C24.8691 4.5136 25.5548 4.68224 26.1654 5.01952C26.776 5.3568 27.2514 5.828 27.5917 6.43312C27.9421 7.03824 28.1173 7.72272 28.1173 8.48656C28.1173 9.2504 27.9421 9.93488 27.5917 10.54C27.2514 11.1451 26.776 11.6213 26.1654 11.9685C25.5548 12.3058 24.8691 12.4744 24.1084 12.4744ZM24.1084 11.537C24.6689 11.537 25.1694 11.413 25.6098 11.165C26.0603 10.907 26.4106 10.545 26.6608 10.0787C26.9111 9.61248 27.0362 9.08176 27.0362 8.48656C27.0362 7.89136 26.9111 7.36064 26.6608 6.8944C26.4106 6.42816 26.0603 6.07104 25.6098 5.82304C25.1694 5.56512 24.6689 5.43616 24.1084 5.43616C23.5478 5.43616 23.0423 5.56512 22.5919 5.82304C22.1515 6.07104 21.8011 6.42816 21.5409 6.8944C21.2906 7.36064 21.1655 7.89136 21.1655 8.48656C21.1655 9.08176 21.2906 9.61248 21.5409 10.0787C21.8011 10.545 22.1515 10.907 22.5919 11.165C23.0423 11.413 23.5478 11.537 24.1084 11.537Z",fill:"#737C8E"}),o.createElement("path",{d:"M33.5218 12.4744C32.761 12.4744 32.0754 12.3058 31.4648 11.9685C30.8542 11.6213 30.3737 11.1451 30.0234 10.54C29.6731 9.93488 29.4979 9.2504 29.4979 8.48656C29.4979 7.72272 29.6731 7.03824 30.0234 6.43312C30.3737 5.828 30.8542 5.3568 31.4648 5.01952C32.0754 4.68224 32.761 4.5136 33.5218 4.5136C34.2825 4.5136 34.9682 4.68224 35.5788 5.01952C36.1894 5.3568 36.6648 5.828 37.0052 6.43312C37.3555 7.03824 37.5307 7.72272 37.5307 8.48656C37.5307 9.2504 37.3555 9.93488 37.0052 10.54C36.6648 11.1451 36.1894 11.6213 35.5788 11.9685C34.9682 12.3058 34.2825 12.4744 33.5218 12.4744ZM33.5218 11.537C34.0823 11.537 34.5828 11.413 35.0232 11.165C35.4737 10.907 35.824 10.545 36.0743 10.0787C36.3245 9.61248 36.4496 9.08176 36.4496 8.48656C36.4496 7.89136 36.3245 7.36064 36.0743 6.8944C35.824 6.42816 35.4737 6.07104 35.0232 5.82304C34.5828 5.56512 34.0823 5.43616 33.5218 5.43616C32.9612 5.43616 32.4558 5.56512 32.0053 5.82304C31.5649 6.07104 31.2146 6.42816 30.9543 6.8944C30.7041 7.36064 30.5789 7.89136 30.5789 8.48656C30.5789 9.08176 30.7041 9.61248 30.9543 10.0787C31.2146 10.545 31.5649 10.907 32.0053 11.165C32.4558 11.413 32.9612 11.537 33.5218 11.537Z",fill:"#737C8E"}),o.createElement("path",{d:"M46.9141 1.35904V12.4H45.8931V10.8525C45.5728 11.3782 45.1473 11.78 44.6168 12.0578C44.0963 12.3355 43.5058 12.4744 42.8451 12.4744C42.1044 12.4744 41.4338 12.3058 40.8332 11.9685C40.2326 11.6312 39.7621 11.16 39.4218 10.5549C39.0815 9.94976 38.9113 9.26032 38.9113 8.48656C38.9113 7.7128 39.0815 7.02336 39.4218 6.41824C39.7621 5.81312 40.2326 5.34688 40.8332 5.01952C41.4338 4.68224 42.1044 4.5136 42.8451 4.5136C43.4857 4.5136 44.0613 4.64752 44.5718 4.91536C45.0923 5.17328 45.5177 5.5552 45.848 6.06112V1.35904H46.9141ZM42.9352 11.537C43.4857 11.537 43.9812 11.413 44.4216 11.165C44.8721 10.907 45.2224 10.545 45.4727 10.0787C45.7329 9.61248 45.863 9.08176 45.863 8.48656C45.863 7.89136 45.7329 7.36064 45.4727 6.8944C45.2224 6.42816 44.8721 6.07104 44.4216 5.82304C43.9812 5.56512 43.4857 5.43616 42.9352 5.43616C42.3747 5.43616 41.8692 5.56512 41.4187 5.82304C40.9783 6.07104 40.628 6.42816 40.3677 6.8944C40.1175 7.36064 39.9924 7.89136 39.9924 8.48656C39.9924 9.08176 40.1175 9.61248 40.3677 10.0787C40.628 10.545 40.9783 10.907 41.4187 11.165C41.8692 11.413 42.3747 11.537 42.9352 11.537Z",fill:"#737C8E"}),o.createElement("path",{d:"M32.5465 25.5638C32.3463 25.7424 32.0961 25.8813 31.7958 25.9805C31.5055 26.0698 31.2002 26.1144 30.8799 26.1144C30.1392 26.1144 29.5686 25.916 29.1683 25.5192C28.7679 25.1224 28.5677 24.5619 28.5677 23.8378V19.1059H27.1563V18.2131H28.5677V16.5019H29.6337V18.2131H32.036V19.1059H29.6337V23.7782C29.6337 24.2445 29.7488 24.6016 29.979 24.8496C30.2193 25.0877 30.5596 25.2067 31 25.2067C31.2203 25.2067 31.4305 25.172 31.6306 25.1026C31.8409 25.0331 32.021 24.9339 32.1712 24.805L32.5465 25.5638Z",fill:"#737C8E"}),o.createElement("path",{d:"M37.4367 26.1144C36.676 26.1144 35.9903 25.9458 35.3797 25.6085C34.7691 25.2613 34.2887 24.7851 33.9383 24.18C33.588 23.5749 33.4128 22.8904 33.4128 22.1266C33.4128 21.3627 33.588 20.6782 33.9383 20.0731C34.2887 19.468 34.7691 18.9968 35.3797 18.6595C35.9903 18.3222 36.676 18.1536 37.4367 18.1536C38.1974 18.1536 38.8831 18.3222 39.4937 18.6595C40.1043 18.9968 40.5798 19.468 40.9201 20.0731C41.2704 20.6782 41.4456 21.3627 41.4456 22.1266C41.4456 22.8904 41.2704 23.5749 40.9201 24.18C40.5798 24.7851 40.1043 25.2613 39.4937 25.6085C38.8831 25.9458 38.1974 26.1144 37.4367 26.1144ZM37.4367 25.177C37.9972 25.177 38.4977 25.053 38.9382 24.805C39.3886 24.547 39.7389 24.185 39.9892 23.7187C40.2394 23.2525 40.3645 22.7218 40.3645 22.1266C40.3645 21.5314 40.2394 21.0006 39.9892 20.5344C39.7389 20.0682 39.3886 19.711 38.9382 19.463C38.4977 19.2051 37.9972 19.0762 37.4367 19.0762C36.8762 19.0762 36.3707 19.2051 35.9202 19.463C35.4798 19.711 35.1295 20.0682 34.8692 20.5344C34.619 21.0006 34.4939 21.5314 34.4939 22.1266C34.4939 22.7218 34.619 23.2525 34.8692 23.7187C35.1295 24.185 35.4798 24.547 35.9202 24.805C36.3707 25.053 36.8762 25.177 37.4367 25.177Z",fill:"#737C8E"}),o.createElement("path",{d:"M44.643 19.7458C44.8932 19.22 45.2636 18.8232 45.7541 18.5554C46.2545 18.2875 46.8701 18.1536 47.6009 18.1536V19.1803L47.3456 19.1654C46.5148 19.1654 45.8642 19.4184 45.3937 19.9243C44.9233 20.4302 44.688 21.1395 44.688 22.0522V26.04H43.622V18.2131H44.643V19.7458Z",fill:"#737C8E"}),o.createElement("path",{d:"M49.531 18.2131H50.5971V26.04H49.531V18.2131ZM50.0716 16.5019C49.8514 16.5019 49.6662 16.4275 49.516 16.2787C49.3659 16.1299 49.2908 15.9514 49.2908 15.743C49.2908 15.5446 49.3659 15.371 49.516 15.2222C49.6662 15.0734 49.8514 14.999 50.0716 14.999C50.2918 14.999 50.477 15.0734 50.6271 15.2222C50.7773 15.3611 50.8523 15.5298 50.8523 15.7282C50.8523 15.9464 50.7773 16.1299 50.6271 16.2787C50.477 16.4275 50.2918 16.5019 50.0716 16.5019Z",fill:"#737C8E"}),o.createElement("path",{d:"M60.4399 22.4539H53.8335C53.8936 23.2674 54.2089 23.927 54.7795 24.433C55.35 24.929 56.0707 25.177 56.9415 25.177C57.432 25.177 57.8825 25.0926 58.2929 24.924C58.7033 24.7454 59.0586 24.4875 59.3589 24.1502L59.9595 24.8347C59.6091 25.2514 59.1687 25.5688 58.6382 25.787C58.1177 26.0053 57.5421 26.1144 56.9115 26.1144C56.1007 26.1144 55.38 25.9458 54.7494 25.6085C54.1288 25.2613 53.6433 24.7851 53.293 24.18C52.9427 23.5749 52.7675 22.8904 52.7675 22.1266C52.7675 21.3627 52.9327 20.6782 53.263 20.0731C53.6033 19.468 54.0638 18.9968 54.6443 18.6595C55.2349 18.3222 55.8955 18.1536 56.6262 18.1536C57.3569 18.1536 58.0126 18.3222 58.5931 18.6595C59.1737 18.9968 59.6292 19.468 59.9595 20.0731C60.2898 20.6683 60.455 21.3528 60.455 22.1266L60.4399 22.4539ZM56.6262 19.0613C55.8655 19.0613 55.2249 19.3043 54.7044 19.7904C54.1939 20.2666 53.9036 20.8915 53.8335 21.6653H59.434C59.3639 20.8915 59.0686 20.2666 58.5481 19.7904C58.0376 19.3043 57.397 19.0613 56.6262 19.0613Z",fill:"#737C8E"}),o.createElement("path",{d:"M64.7418 26.1144C64.1012 26.1144 63.4856 26.0251 62.895 25.8466C62.3145 25.6581 61.859 25.425 61.5287 25.1472L62.0092 24.3139C62.3395 24.5718 62.7549 24.7851 63.2554 24.9538C63.7559 25.1125 64.2764 25.1918 64.8169 25.1918C65.5376 25.1918 66.0681 25.0827 66.4085 24.8645C66.7588 24.6363 66.934 24.3189 66.934 23.9122C66.934 23.6245 66.8389 23.4013 66.6487 23.2426C66.4585 23.0739 66.2183 22.9499 65.928 22.8706C65.6377 22.7813 65.2523 22.697 64.7719 22.6176C64.1312 22.4986 63.6157 22.3795 63.2254 22.2605C62.835 22.1315 62.4997 21.9182 62.2194 21.6206C61.9491 21.323 61.814 20.9114 61.814 20.3856C61.814 19.7309 62.0893 19.1952 62.6398 18.7786C63.1903 18.3619 63.9561 18.1536 64.937 18.1536C65.4475 18.1536 65.958 18.223 66.4685 18.3619C66.979 18.4909 67.3994 18.6645 67.7297 18.8827L67.2643 19.7309C66.6137 19.2845 65.8379 19.0613 64.937 19.0613C64.2564 19.0613 63.7409 19.1803 63.3905 19.4184C63.0502 19.6565 62.88 19.969 62.88 20.3558C62.88 20.6534 62.9751 20.8915 63.1653 21.0701C63.3655 21.2486 63.6107 21.3826 63.901 21.4718C64.1913 21.5512 64.5917 21.6355 65.1022 21.7248C65.7328 21.8438 66.2383 21.9629 66.6187 22.0819C66.999 22.201 67.3243 22.4043 67.5946 22.692C67.8649 22.9797 68 23.3765 68 23.8824C68 24.5669 67.7097 25.1125 67.1292 25.5192C66.5586 25.916 65.7628 26.1144 64.7418 26.1144Z",fill:"#737C8E"}))))}var ve,Oe,ge,we,ye,Ee,ke,Se=o.forwardRef(xe),Re=(t.p,t(82)),ze=t(8),Ze=t.n(ze),Me=t(13),Ve=function(){return{type:P}},Le=function(){return{type:H}},Pe="Co\u015b posz\u0142o nie tak, spr\xf3buj jeszcze raz!",He=function(e){var n=Object(j.g)(),t=Object(Re.a)(),r=t.register,i=t.handleSubmit,o=t.formState.errors,a=Object(m.b)(),c=Object(m.c)((function(e){return e.apiCallsReducer})).apiCallProgress,l=function(){return n.push("/food_stories")};return Object(X.jsxs)(le,{children:[Object(X.jsx)(se,{children:Object(X.jsx)(Se,{})}),Object(X.jsxs)(de,{onSubmit:i((function(e){var n,t,r;a((n=e.email,t=e.password,r=l,function(){var e=Object(Me.a)(Ze.a.mark((function e(i){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i(Ve()),T.signInWithEmailAndPassword(n,t).then((function(e){e.user?(i({type:O,payload:"Zalogowano pomy\u015blnie!"}),r()):i({type:g,payload:Pe})})).catch((function(e){i(Le()),i({type:g,payload:Pe})}))}catch(o){i(Le()),i({type:g,payload:Pe})}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))})),children:[Object(X.jsx)(be,Object(s.a)({placeholder:"Email",type:"email"},r("email",{required:!0}))),o.email&&Object(X.jsx)(he,{role:"alert",children:"Podaj adres email!"}),Object(X.jsx)(be,Object(s.a)({placeholder:"Has\u0142o",type:"password"},r("password",{required:!0}))),o.password&&Object(X.jsx)(he,{role:"alert",children:"Podaj has\u0142o!"}),Object(X.jsx)(ue,{disabled:1===c,type:"submit",children:"Zaloguj si\u0119"})]}),Object(X.jsx)(fe,{children:"Nie masz jeszcze konta?"}),Object(X.jsx)(C.b,{to:$,children:Object(X.jsx)(fe,{isColor:!0,children:"Zarejestruj si\u0119!"})}),1===c?Object(X.jsx)(Y,{}):null]})},_e=function(e){var n=Object(j.g)(),t=Object(Re.a)(),r=t.register,i=t.handleSubmit,o=t.formState.errors,a=Object(m.b)(),c=Object(m.c)((function(e){return e.apiCallsReducer})).apiCallProgress,l=function(){return n.push("/")};return Object(X.jsxs)(le,{children:[Object(X.jsx)(se,{children:Object(X.jsx)(Se,{})}),Object(X.jsxs)(de,{onSubmit:i((function(e){var n,t,r;a((n=e.email,t=e.password,r=l,function(){var e=Object(Me.a)(Ze.a.mark((function e(i){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i(Ve()),T.createUserWithEmailAndPassword(n,t).then((function(e){T.onAuthStateChanged((function(e){e?(i({type:w,payload:"Rejestracja przebieg\u0142a pomy\u015blnie!"}),r()):i({type:y,payload:Pe})}))})).catch((function(e){i(Le()),i({type:y,payload:Pe})}))}catch(o){i(Le()),i({type:y,payload:Pe})}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))})),children:[Object(X.jsx)(be,Object(s.a)({placeholder:"Email",type:"email"},r("email",{required:{value:!0,message:"Podaj adres email!"},pattern:{value:/\S+@\S+\.\S+/,message:"Podana warto\u015b\u0107 nie wygl\u0105da jak adres email!"}}))),o.email&&Object(X.jsx)(he,{role:"alert",children:o.email.message}),Object(X.jsx)(be,Object(s.a)({placeholder:"Has\u0142o",type:"password"},r("password",{required:{value:!0,message:"Podaj has\u0142o!"},minLength:{value:6,message:"has\u0142o musi posiada\u0107 minimalnie 6 znak\xf3w!"}}))),o.password&&Object(X.jsx)(he,{role:"alert",children:o.password.message}),Object(X.jsx)(ue,{disabled:1===c,type:"submit",children:"Zarejestruj si\u0119"})]}),Object(X.jsx)(fe,{children:"Masz ju\u017c konto?"}),Object(X.jsx)(C.b,{to:Q,children:Object(X.jsx)(fe,{isColor:!0,children:"Zaloguj si\u0119!"})}),1===c?Object(X.jsx)(Y,{}):null]})},Be=(u.default.div(ve||(ve=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),u.default.label(Oe||(Oe=Object(d.a)(["\n  font-size: ",";\n"])),(function(e){return e.theme.fontSize.s})),u.default.div(ge||(ge=Object(d.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n  position: relative;\n  "," {\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    grid-template-columns: 150px 1fr 0.4fr;\n  }\n"])),(function(e){return e.theme.colors.mainBGC}),(function(e){return e.theme.media.desktop}))),Ie=u.default.nav(we||(we=Object(d.a)(["\n  width: 95%;\n  background-color: ",";\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: space-evenly;\n  padding: 15px 0;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  "," {\n  }\n"])),(function(e){return e.theme.colors.mainColor}),(function(e){return e.theme.media.desktop})),Fe=Object(u.default)(C.c)(ye||(ye=Object(d.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  color: ",";\n  position: relative;\n  font-size: ",";\n  font-weight: 400;\n  margin: 0;\n  "," {\n  }\n"])),(function(e){return e.theme.colors.mainBGC}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.media.desktop})),Ae=function(e){var n=[{route:"/food_stories/",name:"D",isExact:!0},{route:"/food_stories/trainings",name:"L",isExact:!1},{route:"/food_stories/settings",name:"P",isExact:!1}].map((function(e){return Object(X.jsx)(Fe,{exact:e.isExact,to:e.route,children:e.name},e.name)}));return Object(X.jsx)(Ie,{children:n})},Ue=u.default.aside(Ee||(Ee=Object(d.a)(["\n  display: none;\n  "," {\n    display: block;\n    grid-row: 1 / 3;\n    grid-column: 3;\n    border-left: 1px solid ",";\n  }\n"])),(function(e){return e.theme.media.desktop}),(function(e){return e.theme.colors.inputBorder})),Ge=function(e){return Object(X.jsx)(Ue,{children:"Aside"})},De=t(25),Ne=["title","titleId"];function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function We(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function qe(e,n){var t=e.title,r=e.titleId,i=We(e,Ne);return o.createElement("svg",Te({width:26,height:25,viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,ke||(ke=o.createElement("path",{d:"M18.5448 15.7963C17.942 15.2281 16.9926 15.2561 16.4244 15.8589C15.8561 16.4617 15.8842 17.4111 16.487 17.9793L18.5448 15.7963ZM22.9711 24.0915C23.5739 24.6597 24.5233 24.6317 25.0915 24.0289C25.6597 23.4261 25.6317 22.4767 25.0289 21.9085L22.9711 24.0915ZM17.7399 10.7575C17.7399 14.7883 14.5299 18.0151 10.6199 18.0151V21.0151C16.2313 21.0151 20.7399 16.4001 20.7399 10.7575H17.7399ZM10.6199 18.0151C6.71001 18.0151 3.5 14.7883 3.5 10.7575H0.5C0.5 16.4001 5.00854 21.0151 10.6199 21.0151V18.0151ZM3.5 10.7575C3.5 6.72683 6.71001 3.5 10.6199 3.5V0.5C5.00854 0.5 0.5 5.11494 0.5 10.7575H3.5ZM10.6199 3.5C14.5299 3.5 17.7399 6.72683 17.7399 10.7575H20.7399C20.7399 5.11494 16.2313 0.5 10.6199 0.5V3.5ZM16.487 17.9793L22.9711 24.0915L25.0289 21.9085L18.5448 15.7963L16.487 17.9793Z",fill:"#737C8E"})))}var Je,Ke,Xe,Ye,$e,Qe=o.forwardRef(qe),en=(t.p,u.default.div(Je||(Je=Object(d.a)(["\n  width: 55px;\n  position: absolute;\n  top: 40px;\n  left: 30px;\n  svg {\n    width: 100%;\n    height: 28px;\n  }\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.media.desktop}))),nn=u.default.div(Ke||(Ke=Object(d.a)(["\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n  transform-origin: top;\n  background-color: ",";\n  transition: transform 0.3s ease-in-out;\n  transform: translateY(",");\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  "," {\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    transform: translateY(0);\n    height: auto;\n    border-bottom: 1px solid ",";\n    background-color: transparent;\n    overflow-y: hidden;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n"])),(function(e){return e.theme.colors.inputBorder}),(function(e){return e.isOpen?"0":"-100%"}),(function(e){return e.theme.media.desktop}),(function(e){return e.theme.colors.inputBorder})),tn=u.default.input(Xe||(Xe=Object(d.a)(["\n  margin: 100px 0;\n  width: 70%;\n  max-width: 420px;\n  border: none;\n  border-radius: 20px;\n  background-color: ",";\n  font-size: ",";\n  outline: none;\n  color: ",";\n  padding: 10px 0 10px 20px;\n  box-shadow: ",";\n  &::placeholder {\n    color: ",";\n    font-weight: 300;\n  }\n  "," {\n    margin: 0;\n    width: 50%;\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.mainDark}),(function(e){return e.theme.boxShadow.inputShadow}),(function(e){return e.theme.colors.inputBorder}),(function(e){return e.theme.media.desktop}),(function(e){return e.theme.fontSize.s})),rn=u.default.div(Ye||(Ye=Object(d.a)(["\n  display: none;\n  "," {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(e){return e.theme.media.desktop})),on=u.default.span($e||($e=Object(d.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.isBold?"600":"400"})),an=function(e){var n=Object(o.useState)(!1),t=Object(De.a)(n,2),r=t[0],i=t[1],a=Object(m.c)((function(e){return e.firebase.auth}));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(nn,{isOpen:r,children:[Object(X.jsxs)(rn,{children:[Object(X.jsx)(on,{children:"Zalogowany jako:"}),Object(X.jsx)(on,{isBold:!0,children:a.email})]}),Object(X.jsx)(tn,{type:"text",placeholder:"czego szukasz?"})]}),Object(X.jsx)(en,{onClick:function(){return i((function(e){return!e}))},children:Object(X.jsx)(Qe,{})})]})},cn=function(e){var n=e.children;return Object(X.jsxs)(Be,{children:[Object(X.jsx)(Ae,{}),Object(X.jsx)(an,{}),n,Object(X.jsx)(Ge,{})]})},ln=function(e){return Object(X.jsx)(cn,{})};var sn=function(){var e=G();function n(e){var n=e.children,t=Object(m.c)((function(e){return e.firebase.auth}));return Object(L.isLoaded)(t)?n:Object(X.jsx)(Y,{})}var t={firebase:W,config:{userProfile:"users"},dispatch:e.dispatch};return Object(X.jsx)(m.a,{store:e,children:Object(X.jsx)(L.ReactReduxFirebaseProvider,Object(s.a)(Object(s.a)({},t),{},{children:Object(X.jsx)(n,{children:Object(X.jsxs)(u.ThemeProvider,{theme:h,children:[Object(X.jsx)(b,{}),Object(X.jsx)(C.a,{children:Object(X.jsxs)(f,{children:[Object(X.jsx)(A.a,{}),Object(X.jsxs)(j.d,{children:[Object(X.jsx)(j.b,{path:$,component:_e}),Object(X.jsx)(j.b,{path:Q,component:He}),Object(X.jsx)(j.b,{path:"*",component:ln})]})]})})]})})}))})},dn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function un(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,381)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};l.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(sn,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/food_stories",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/food_stories","/service-worker.js");dn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):un(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):un(n,e)}))}}(),fn()}},[[380,1,2]]]);
//# sourceMappingURL=main.403dd063.chunk.js.map