(this["webpackJsonpyoutube-music-pro"]=this["webpackJsonpyoutube-music-pro"]||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},214:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),s=n.n(r),i=n(12),o=n.n(i),c=(n(128),n(129),n(121)),l=n(7),u=n(223),d=n(34),h=n(35),b=n(221);function f(){var e=Object(d.a)(["\n  font-family: 'Nerko One';\n"]);return f=function(){return e},e}function j(){var e=Object(d.a)(["\n  background-color: #020001;\n  min-height: 70px;\n"]);return j=function(){return e},e}var p=Object(h.a)(b.a)(j()),m=Object(h.a)(b.a.Brand)(f()),v=function(){var e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,a=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?a.call(e):n.call(t)},x=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(p,{expand:"md",variant:"dark",children:[Object(a.jsx)(m,{href:"/",children:"Youtube Music Pro"}),Object(a.jsx)(p.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(p.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(u.a,{className:"mr-auto",children:[Object(a.jsx)(u.a.Link,{href:"/",children:"Home"}),Object(a.jsx)(u.a.Link,{href:"link",children:"Link"}),Object(a.jsx)(u.a.Link,{href:"github",children:"GitHub"}),Object(a.jsx)(u.a.Link,{onClick:v,children:"F"})]})})]})})},g=n(9),O=n.n(g),w=n(15),k=n(44),y=n(45),S=n(37),C=n(48),N=n(46),P=n(222),F=n(220),L=n(49),M=n(122),E=function(e){var t={audioLists:[{name:e.title,singer:e.artist,cover:e.thumbnail,musicSrc:e.songurl}],defaultPlayIndex:0,theme:"dark",bounds:"body",quietUpdate:!0,clearPriorAudioLists:!1,autoPlayInitLoadPlayList:!0,preload:!0,glassBg:!1,remember:!1,remove:!0,defaultPosition:{right:50,bottom:70},defaultPlayMode:"order",mode:"full",once:!1,autoPlay:!0,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!1,seeked:!0,showMediaSession:!0,showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!1,showPlayMode:!0,showThemeSwitch:!1,showLyric:!1,showDestroy:!1,extendsContent:null,defaultVolume:1,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!0,spaceBar:!0,responsive:!0,mobileMediaQuery:"(max-width: 1024px)"};return Object(a.jsx)("div",{children:Object(a.jsx)(M.a,Object(L.a)({},t))})},T=n(120),B=n.n(T);function W(e,t){return q.apply(this,arguments)}function q(){return(q=Object(w.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://youtube-music-pro.herokuapp.com/proapi?name=",e.next=3,B.a.get("https://youtube-music-pro.herokuapp.com/proapi?name="+t+"&dn="+n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).state={status:0,id:null,songname:null,artist:null,thumbnail:null,songurl:null},a.query_name=e.name,a}return Object(y.a)(n,[{key:"initrun",value:function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(this.query_name+" official song",1);case 2:t=e.sent,this.setState({songname:t.title,artist:t.artist,thumbnail:t.thumbnail,songurl:t.url,id:t.id});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.songname?Object(a.jsx)(E,Object(L.a)({},this.state)):Object(a.jsx)("h1",{children:"loading"})})}}]),n}(s.a.Component),A=(n(214),function(){return Object(a.jsxs)("div",{className:"sign",children:[Object(a.jsx)("span",{className:"fast-flicker",children:"Y"}),"o",Object(a.jsx)("span",{className:"fast-flicker",children:"ut"}),"ub",Object(a.jsx)("span",{className:"fast-flicker",children:"e"}),Object(a.jsxs)("span",{className:"flicker",children:[Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"fast-flicker",children:"M"}),"us",Object(a.jsx)("span",{className:"fast-flicker",children:"ic"})]}),"P",Object(a.jsx)("span",{className:"fast-flicker",children:"ro"})]})});function D(){var e=Object(d.a)(["\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    font-family: 'Nerko One';\n"]);return D=function(){return e},e}var R=h.a.div(D()),I=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).state={loading:!0,value:"",song:!1,sload:!1},a.songName=a.state.song,a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.onSubmit=a.onSubmit.bind(Object(S.a)(a)),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(5e3);case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({song:!0}),this.songName=this.state.value,this.setState({sload:!1}),e.next=6,this.sleep(5e3);case 6:this.sloadfn(t);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sloadfn",value:function(){var e=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({value:""}),this.setState({sload:!0});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)(R,{className:"index-body",children:this.state.loading?Object(a.jsx)(A,{}):this.state.song?Object(a.jsxs)("div",{children:[this.state.sload?Object(a.jsx)(P.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Prepend,{children:Object(a.jsx)(F.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(P.a.Control,{size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})}):null,Object(a.jsx)(z,{name:this.songName})]}):Object(a.jsx)(P.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Prepend,{children:Object(a.jsx)(F.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(P.a.Control,{autoFocus:!0,size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})})})}}]),n}(r.Component);var U=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(c.a,{basename:"/youtube-music-pro",children:[Object(a.jsx)(x,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",exact:!0,component:I}),Object(a.jsx)(l.a,{path:"*",to:"/"})]})]})})},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};n(217);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/youtube-music-pro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/youtube-music-pro","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),Y()}},[[218,1,2]]]);
//# sourceMappingURL=main.6bfab529.chunk.js.map