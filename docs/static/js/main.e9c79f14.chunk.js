(this["webpackJsonpyoutube-music-pro"]=this["webpackJsonpyoutube-music-pro"]||[]).push([[0],{61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),o=t.n(r),i=t(18),s=t.n(i),c=(t(61),t(62),t(63),t(23)),u=t(6),l=t(94),d=t(19),h=t(20),b=t(92);function f(){var e=Object(d.a)(["\n  color: white;\n  &:hover {\n    color: white;\n    text-decoration: none;\n  }\n"]);return f=function(){return e},e}function j(){var e=Object(d.a)(["\n  color: white;\n  font-size: 20px;\n  padding-right: 1rem;\n  // font-weight: bold;\n  text-decoration: none;\n  font-family: 'Nerko One';\n\n  &:hover {\n    color: white;\n    text-decoration: none;\n  }\n"]);return j=function(){return e},e}function p(){var e=Object(d.a)(["\n  background-color: #020001;\n  min-height: 70px;\n"]);return p=function(){return e},e}var m=Object(h.a)(b.a)(p()),v=Object(h.a)(b.a.Brand)(j()),g=Object(h.a)(l.a.Link)(f()),x=function(){var e=window.document,n=e.documentElement,t=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen||n.msRequestFullscreen,a=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?a.call(e):t.call(n)},O=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(m,{expand:"md",variant:"dark",children:[Object(a.jsx)(v,{as:c.b,to:"/",children:"Youtube Music Pro"}),Object(a.jsx)(m.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(m.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(l.a,{className:"mr-auto",children:[Object(a.jsx)(l.a.Link,{href:"https://github.com/legendof17",children:"Legendof17"}),Object(a.jsx)(l.a.Link,{href:"https://github.com/legendof17/youtube-music-pro",children:"GitHub"}),Object(a.jsx)(l.a.Link,{as:c.b,to:"/",children:"Features"})]}),Object(a.jsx)(g,{onClick:x,children:"\xa9 TOP BEAST 2021"})]})]})})},w=t(8),y=t.n(w),k=t(14),S=t(26),C=t(27),P=t(24),F=t(30),L=t(28),E=t(93),M=t(91),N=t(31),T=o.a.lazy((function(){return t.e(2).then(t.bind(null,226))})),z=function(e){var n={audioLists:[{name:e.title,singer:e.artist,cover:e.thumbnail,musicSrc:e.songurl}],defaultPlayIndex:0,theme:"dark",bounds:"body",quietUpdate:!0,clearPriorAudioLists:!1,autoPlayInitLoadPlayList:!0,preload:!0,glassBg:!1,remember:!1,remove:!0,defaultPosition:{right:50,bottom:70},defaultPlayMode:"order",mode:"full",once:!1,autoPlay:!0,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!1,seeked:!0,showMediaSession:!0,showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!1,showPlayMode:!0,showThemeSwitch:!1,showLyric:!1,showDestroy:!1,extendsContent:null,defaultVolume:1,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!0,spaceBar:!0,responsive:!0,mobileMediaQuery:"(max-width: 1024px)"};return Object(a.jsx)("div",{children:Object(a.jsx)(o.a.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(T,Object(N.a)({},n))})})},B=t(55),W=t.n(B);function q(e,n){return A.apply(this,arguments)}function A(){return(A=Object(k.a)(y.a.mark((function e(n,t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://youtube-music-pro.herokuapp.com/proapi?name=",e.next=3,W.a.get("https://youtube-music-pro.herokuapp.com/proapi?name="+n+"&dn="+t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(e){var a;return Object(S.a)(this,t),(a=n.call(this,e)).state={status:0,id:null,songname:null,artist:null,thumbnail:null,songurl:null},a.query_name=e.name,a}return Object(C.a)(t,[{key:"initrun",value:function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(this.query_name+" official song",1);case 2:n=e.sent,this.setState({songname:n.title,artist:n.artist,thumbnail:n.thumbnail,songurl:n.url,id:n.id});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.songname?Object(a.jsx)(z,Object(N.a)({},this.state)):Object(a.jsx)("h1",{children:"loading"})})}}]),t}(o.a.Component);function R(){var e=Object(d.a)(["\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    font-family: 'Nerko One';\n"]);return R=function(){return e},e}var I=h.a.div(R()),U=o.a.lazy((function(){return t.e(4).then(t.bind(null,224))})),H=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(e){var a;return Object(S.a)(this,t),(a=n.call(this,e)).state={loading:!0,value:"",song:!1,sload:!1},a.songName=a.state.song,a.handleChange=a.handleChange.bind(Object(P.a)(a)),a.onSubmit=a.onSubmit.bind(Object(P.a)(a)),a}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(5e3);case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(n){return setTimeout(n,e)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),this.songName=this.state.value,this.setState({song:!0}),this.setState({sload:!1}),e.next=6,this.sleep(1e3);case 6:this.setState({song:!1}),this.sloadfn(n);case 8:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"sloadfn",value:function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({song:!0}),this.setState({value:""}),this.setState({sload:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)(I,{className:"index-body",children:this.state.loading?Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(U,{})}):this.state.song?Object(a.jsxs)("div",{children:[this.state.sload?Object(a.jsx)(E.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(M.a,{children:[Object(a.jsx)(M.a.Prepend,{children:Object(a.jsx)(M.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(E.a.Control,{size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})}):null,Object(a.jsx)(D,{name:this.songName})]}):Object(a.jsx)(E.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(M.a,{children:[Object(a.jsx)(M.a.Prepend,{children:Object(a.jsx)(M.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(E.a.Control,{autoFocus:!0,size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})})})}}]),t}(r.Component);var J=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(c.a,{basename:"/youtube-music-pro",children:[Object(a.jsx)(O,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,component:H}),Object(a.jsx)(u.a,{path:"*",to:"/"})]})]})})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,225)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),o(e),i(e)}))};t(88);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/youtube-music-pro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/youtube-music-pro","/service-worker.js");_?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(n,e)}))}}(),Q()}},[[89,1,3]]]);
//# sourceMappingURL=main.e9c79f14.chunk.js.map