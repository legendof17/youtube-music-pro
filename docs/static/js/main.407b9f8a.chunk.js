(this["webpackJsonpyoutube-music-pro"]=this["webpackJsonpyoutube-music-pro"]||[]).push([[0],{118:function(e,n,t){},119:function(e,n,t){},191:function(e,n,t){"use strict";t.r(n);var o=t(6),i=t(0),a=t.n(i),r=t(11),c=t.n(r),s=(t(118),t(119),t(107)),l=t(7),u=t(197),d=t(33),h=t(34),b=t(195);function j(){var e=Object(d.a)(["\n  font-family: 'Nerko One';\n"]);return j=function(){return e},e}function m(){var e=Object(d.a)(["\n  background-color: #020001;\n  min-height: 70px;\n"]);return m=function(){return e},e}var f=Object(h.a)(b.a)(m()),p=Object(h.a)(b.a.Brand)(j()),v=function(){var e=window.document,n=e.documentElement,t=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen||n.msRequestFullscreen,o=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?o.call(e):t.call(n)},g=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(f,{expand:"md",variant:"dark",children:[Object(o.jsx)(p,{href:"/",children:"Youtube Music Pro"}),Object(o.jsx)(f.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(f.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(u.a,{className:"mr-auto",children:[Object(o.jsx)(u.a.Link,{href:"/",children:"Home"}),Object(o.jsx)(u.a.Link,{href:"link",children:"Link"}),Object(o.jsx)(u.a.Link,{href:"github",children:"GitHub"}),Object(o.jsx)(u.a.Link,{onClick:v,children:"F"})]})})]})})},w=t(8),x=t.n(w),O=t(23),k=t(103),y=t(104),S=t(36),P=t(111),C=t(110),F=t(196),L=t(194),M=t(109),N=t(193),E=function(){return Object(o.jsx)(N.a,{pill:!0,variant:"warning",children:Object(o.jsx)("h1",{children:Object(o.jsx)(M.a,{loop:1/0,wrapper:"p",steps:["Youtube Music Pro..! \u266b",600,"\u266b Install this App..! \u2b07",1e3,"To unlock more ->",1e3,"-> exciting features..\u2661",1e3]})})})},T=t(112),W=t(108),B={audioLists:[{name:"Khalouni N3ich",singer:"Najwa Farouk (\u0646\u062c\u0648\u0629 \u0641\u0627\u0631\u0648\u0642)",cover:"https://i.ytimg.com/vi_webp/Srt8QReWCLM/maxresdefault.webp",musicSrc:"https://youtube-music-pro.herokuapp.com/assets/Srt8QReWCLM.webm"}],defaultPlayIndex:0,theme:"dark",bounds:"body",quietUpdate:!0,clearPriorAudioLists:!1,autoPlayInitLoadPlayList:!0,preload:!0,glassBg:!1,remember:!1,remove:!0,defaultPosition:{right:50,bottom:70},defaultPlayMode:"order",mode:"mini",once:!1,autoPlay:!0,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!1,seeked:!0,showMediaSession:!0,showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!1,showPlayMode:!0,showThemeSwitch:!1,showLyric:!1,showDestroy:!1,extendsContent:null,defaultVolume:1,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!0,spaceBar:!0,responsive:!0,mobileMediaQuery:"(max-width: 1024px)"},A=function(e){return alert("Your Song Name : "+e),Object(o.jsx)("div",{children:Object(o.jsx)(W.a,Object(T.a)({},B))})};function R(){var e=Object(d.a)(["\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    font-family: 'Nerko One';\n"]);return R=function(){return e},e}var q=h.a.div(R()),z=function(e){Object(P.a)(t,e);var n=Object(C.a)(t);function t(e){var o;return Object(k.a)(this,t),(o=n.call(this,e)).state={loading:!0,value:"",song:!1},o.songName=o.state.song,o.handleChange=o.handleChange.bind(Object(S.a)(o)),o.onSubmit=o.onSubmit.bind(Object(S.a)(o)),o}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(13e3);case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(n){return setTimeout(n,e)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({song:!0}),this.songName=this.state.value}},{key:"render",value:function(){return Object(o.jsx)(q,{className:"index-body",children:this.state.loading?Object(o.jsx)(E,{}):this.state.song?A(this.songName):Object(o.jsx)(F.a,{onSubmit:this.onSubmit,children:Object(o.jsxs)(L.a,{children:[Object(o.jsx)(L.a.Prepend,{children:Object(o.jsx)(L.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(o.jsx)(F.a.Control,{autoFocus:!0,size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})})})}}]),t}(i.Component);var D=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.a,{basename:"/youtube-music-pro",children:[Object(o.jsx)(g,{}),Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/",exact:!0,component:z}),Object(o.jsx)(l.a,{path:"*",to:"/"})]})]})})},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,198)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),a(e),r(e)}))};t(190);c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/youtube-music-pro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/youtube-music-pro","/service-worker.js");I?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):U(n,e)}))}}(),H()}},[[191,1,2]]]);
//# sourceMappingURL=main.407b9f8a.chunk.js.map