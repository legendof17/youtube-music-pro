(this["webpackJsonpyoutube-music-pro"]=this["webpackJsonpyoutube-music-pro"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),s=n(19),o=n.n(s),c=(n(62),n(63),n(64),n(24)),u=n(7),l=n(95),h=n(20),d=n(21),b=n(93);function f(){var e=Object(h.a)(["\n  color: white;\n  font-weight: 600;\n  &:hover {\n    color: white;\n    text-decoration: none;\n    font-weight: 1000;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(h.a)(["\n  color: white;\n  font-size: 20px;\n  padding-right: 1rem;\n  // font-weight: bold;\n  text-decoration: none;\n  font-family: 'Nerko One';\n\n  &:hover {\n    color: white;\n    text-decoration: none;\n  }\n"]);return m=function(){return e},e}function j(){var e=Object(h.a)(["\n  // background-color: #020001;\n  background: linear-gradient(rgba(0, 0, 0, 0.95),rgba(100, 100, 100, 0.0));\n  min-height: 70px;\n"]);return j=function(){return e},e}var p=Object(d.a)(b.a)(j()),g=Object(d.a)(b.a.Brand)(m()),v=Object(d.a)(l.a.Link)(f()),x=function(){var e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,a=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?a.call(e):n.call(t)},O=function(){localStorage.clear()},w=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(p,{expand:"md",variant:"dark",children:[Object(a.jsx)(g,{as:c.b,to:"/",children:"Youtube Music Pro"}),Object(a.jsx)(p.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(p.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(l.a,{className:"mr-auto",children:[Object(a.jsx)(l.a.Link,{href:"https://github.com/legendof17",children:"Legendof17"}),Object(a.jsx)(l.a.Link,{href:"https://github.com/legendof17/youtube-music-pro",children:"GitHub"}),Object(a.jsx)(l.a.Link,{onClick:O,children:"ClearMemory"}),Object(a.jsx)(l.a.Link,{as:c.b,to:"/",children:"Features"})]}),Object(a.jsx)(v,{onClick:x,children:"\xa9 TOP BEAST 2021"})]})]})})},y=n(8),k=n.n(y),S=n(13),L=n(26),C=n(27),P=n(14),N=n(30),F=n(28),E=n(94),M=n(92),T=n(56),z=r.a.lazy((function(){return n.e(2).then(n.bind(null,229))})),B=function(){var e={audioLists:JSON.parse(localStorage.getItem("song-list")),defaultPlayIndex:0,theme:"dark",bounds:"body",quietUpdate:!0,clearPriorAudioLists:!1,autoPlayInitLoadPlayList:!0,preload:!0,glassBg:!1,remember:!1,remove:!0,defaultPosition:{right:50,bottom:70},defaultPlayMode:"order",mode:"full",once:!1,autoPlay:!0,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!1,seeked:!0,showMediaSession:!0,showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!1,showPlayMode:!0,showThemeSwitch:!1,showLyric:!1,showDestroy:!1,extendsContent:null,defaultVolume:1,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!0,spaceBar:!0,responsive:!0,mobileMediaQuery:"(max-width: 1024px)"};return Object(a.jsx)("div",{children:Object(a.jsx)(r.a.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(z,Object(T.a)({},e))})})},I=n(54),q=n.n(I);function A(e,t){return W.apply(this,arguments)}function W(){return(W=Object(S.a)(k.a.mark((function e(t,n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://youtube-music-pro.herokuapp.com/proapi?name=",e.next=3,q.a.get("https://youtube-music-pro.herokuapp.com/proapi?name="+t+"&dn="+n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){Object(N.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(L.a)(this,n),(a=t.call(this,e)).state={status:0,id:null,songname:null,artist:null,thumbnail:null,songurl:null},a.audioListsx=[],a.query_name=e.name,a.generateList=a.generateList.bind(Object(P.a)(a)),a}return Object(C.a)(n,[{key:"initrun",value:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"generateList",value:function(){var e=Object(S.a)(k.a.mark((function e(t,n){var a,i,r,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={name:t.title,singer:t.artist,cover:t.thumbnail,musicSrc:t.url,timeStamp:(new Date).getTime()},localStorage.setItem(n,JSON.stringify(a)),i=0;case 3:if(!(i<localStorage.length)){e.next=12;break}if("song-list"!==(r=localStorage.key(i))){e.next=7;break}return e.abrupt("continue",9);case 7:s=localStorage.getItem(r),this.audioListsx.push(JSON.parse(s));case 9:i++,e.next=3;break;case 12:return e.abrupt("return",this.audioListsx);case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(this.query_name+" official song",1);case 2:return t=e.sent,e.next=5,this.generateList(t,this.query_name);case 5:this.audioListsx=e.sent,this.audioListsx.sort((function(e,t){return t.timeStamp-e.timeStamp})),localStorage.setItem("song-list",JSON.stringify(this.audioListsx)),this.setState({songname:t.title});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.songname?Object(a.jsx)(B,{}):Object(a.jsx)("h1",{children:"loading"})})}}]),n}(r.a.Component),J=n(55);function R(e){e.loadanim;var t=e.startanimation,n=e.stopanimation,r=Object(i.useRef)(null);return Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{ref:r,timeout:1e4,onIdle:function(){t()},onActive:function(){n()}})})}function U(){var e=Object(h.a)(["\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    font-family: 'Nerko One';\n"]);return U=function(){return e},e}var H=d.a.div(U()),_=r.a.lazy((function(){return n.e(4).then(n.bind(null,225))})),G=r.a.lazy((function(){return n.e(6).then(n.bind(null,226))})),Q=r.a.lazy((function(){return n.e(5).then(n.bind(null,227))})),V=function(e){Object(N.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(L.a)(this,n),(a=t.call(this,e)).state={loading:!0,value:"",song:!1,sload:!1,animation:!1,animswkey:-1},a.songName=a.state.song,a.x=document.getElementsByClassName("play-btn"),a.handleChange=a.handleChange.bind(Object(P.a)(a)),a.onSubmit=a.onSubmit.bind(Object(P.a)(a)),a.startanim=a.startanim.bind(Object(P.a)(a)),a.stopanim=a.stopanim.bind(Object(P.a)(a)),a.animswitch=a.animswitch.bind(Object(P.a)(a)),a}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(5e3);case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.songName=this.state.value,this.setState({song:!0}),this.setState({sload:!1}),e.next=6,this.sleep(1e3);case 6:this.setState({song:!1}),this.sloadfn(t);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sloadfn",value:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({song:!0}),this.setState({value:""}),this.setState({sload:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startanim",value:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState((function(e){return{animswkey:e.animswkey+1}}));case 2:4===this.state.animswkey&&this.setState({animswkey:1}),this.setState({animation:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stopanim",value:function(e){this.setState({animation:!1})}},{key:"animswitch",value:function(e){switch(this.state.animswkey){case 1:return Object(a.jsx)(_,{});case 2:return Object(a.jsx)(G,{});case 3:return Object(a.jsx)(Q,{});default:return Object(a.jsx)(_,{})}}},{key:"render",value:function(){return Object(a.jsxs)(H,{className:"index-body",children:[Object(a.jsx)(R,{loadanim:this.state.loading,startanimation:this.startanim,stopanimation:this.stopanim}),this.state.loading?Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(_,{})}):this.state.song?Object(a.jsxs)("div",{children:[this.state.sload?this.state.animation&&-1!==this.x[0].outerHTML.search("Click to pause")?Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:this.animswitch(this.state.animswkey)}):Object(a.jsx)(E.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(M.a,{children:[Object(a.jsx)(M.a.Prepend,{children:Object(a.jsx)(M.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(E.a.Control,{size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})}):null,Object(a.jsx)(D,{name:this.songName})]}):Object(a.jsx)(E.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(M.a,{children:[Object(a.jsx)(M.a.Prepend,{children:Object(a.jsx)(M.a.Text,{id:"basic-addon1",children:"\u266b"})}),Object(a.jsx)(E.a.Control,{autoFocus:!0,size:"lg",type:"text",placeholder:"Enter Song Name",value:this.state.value,onChange:this.handleChange})]})})]})}}]),n}(i.Component);var Y=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(c.a,{basename:"/youtube-music-pro",children:[Object(a.jsx)(w,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,component:V}),Object(a.jsx)(u.a,{path:"*",to:"/"})]})]})})},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,228)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};n(89);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/youtube-music-pro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/youtube-music-pro","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),X()}},[[90,1,3]]]);
//# sourceMappingURL=main.14704942.chunk.js.map