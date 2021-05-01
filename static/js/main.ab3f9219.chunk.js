(this["webpackJsonphealthy-chicago"]=this["webpackJsonphealthy-chicago"]||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(181),s=n(191),l=n(29),d=n(11),u=n(177),j=n(182),h=n(183),p=n(79),b=n.n(p),g=n(184),f=n(193),x=n(2),m=Object(u.a)((function(e){return{root:{flexGrow:1},icon:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function v(e,t){return Object(x.jsx)(d.a,{render:function(n){var a=n.history;return Object(x.jsx)(f.a,{color:"inherit",onClick:function(){a.push(t)},children:e})}})}function O(){var e=m();return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(j.a,{position:"relative",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(b.a,{className:e.icon}),Object(x.jsx)(g.a,{variant:"h6",color:"inherit",className:e.title,children:"Healthy Chicago"}),v("Home","/"),v("Search","/search"),v("Data View","/view-data"),v("Map View","/map-view")]})})]})}var y=n(185),w=n(186),k=Object(u.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}}));function S(){var e=k();return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:e.heroContent,children:Object(x.jsxs)(y.a,{maxWidth:"sm",children:[Object(x.jsx)(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Eat Clean, Fresh, Well Prepared Food"}),Object(x.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Search and view food inspection data from Chicago. This app provides you data to keep you safe. According to the CDC, there are many people that get sick from food poisoning leading to hospitalization or possibly death."}),Object(x.jsx)("div",{className:e.heroButtons,children:Object(x.jsx)(w.a,{container:!0,spacing:2,justify:"center",children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(d.a,{render:function(e){var t=e.history;return Object(x.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){t.push("/search")},children:"Start Exploring"})}})})})})]})})]})}var C=n(23),N=n.n(C),z=n(40),W=n(83),I=n(80),B=n.n(I),A=n(81),T=n.n(A),P=n(187),_=n(192),E=n(64),D=n.n(E),F=n(34),G=n.n(F);G.a.config();var J=Object(u.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function U(){var e=J(),t=r.a.useState(!1),n=Object(W.a)(t,2),a=n[0],o=n[1],c=function(){var e=Object(z.a)(N.a.mark((function e(t,n,a){var r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n?(r=document.getElementById("outlined-number").value,r=parseInt(r)):r=a,e.next=3,D.a.get("https://data.cityofchicago.org/resource/4ijn-s7e5.json?zip=".concat(r));case 3:o=e.sent,t.push({pathname:"/view-data",state:{data:o.data}});case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),i=function(e){var t=-1;return e.results.forEach((function(e){e.address_components.forEach((function(e){if(e.types.includes("postal_code"))return console.log("zip code is ".concat(e.short_name)),t=e.short_name,parseInt(t)}))})),parseInt(t)},s=function(){var e=Object(z.a)(N.a.mark((function e(t,n){var a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t.coords.latitude,",").concat(t.coords.longitude,"&key=").concat("AIzaSyC3ZIcb3X69uQAhzT_KRAUVx6Kgvz5U9g4"));case 2:return a=e.sent,o(!1),e.next=6,i(a.data);case 6:r=e.sent,c(n,!1,r),console.log("zip  ".concat(typeof r));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(z.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation?(o(!0),navigator.geolocation.getCurrentPosition((function(e){s(e,t)}))):alert("No location data found. Please allow permission to view your current location");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:e.heroContent,children:Object(x.jsxs)(y.a,{maxWidth:"sm",children:[Object(x.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Search by zip code to view food inspection data"}),Object(x.jsxs)("div",{className:e.heroButtons,children:[Object(x.jsx)(w.a,{container:!0,spacing:2,justify:"center",children:Object(x.jsxs)(w.a,{item:!0,children:[Object(x.jsx)(_.a,{id:"outlined-number",label:"Enter Zipcode",type:"number",InputLabelProps:{shrink:!0},variant:"outlined",placeholder:"i.e. 60607"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}),Object(x.jsx)(w.a,{container:!0,spacing:2,justify:"center",children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(d.a,{render:function(e){var t=e.history;return Object(x.jsx)(f.a,{variant:"contained",color:"primary",endIcon:Object(x.jsx)(B.a,{}),onClick:Object(z.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(t,!0,null));case 1:case"end":return e.stop()}}),e)}))),children:"Search"})}})})}),Object(x.jsx)(w.a,{container:!0,spacing:2,justify:"center",children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(d.a,{render:function(e){var t=e.history;return Object(x.jsx)(f.a,{variant:"contained",color:"primary",endIcon:Object(x.jsx)(T.a,{}),onClick:function(){return l(t)},children:"Search by current location"})}})})}),Object(x.jsx)(w.a,{container:!0,spacing:2,justify:"center",children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)("div",{className:e.root,children:a&&Object(x.jsx)(P.a,{})})})})]})]})})]})}var V=n(188),L=n(190),R=n(189),K=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function M(e){var t=K();return Object(x.jsxs)(V.a,{className:t.root,children:[Object(x.jsxs)(R.a,{children:[Object(x.jsx)(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:e.risk}),Object(x.jsxs)(g.a,{variant:"h5",component:"h2",children:["Business Name: ",e.businessName]}),Object(x.jsxs)(g.a,{className:t.pos,color:"textSecondary",children:["Test Results: ",e.results]}),Object(x.jsxs)(g.a,{variant:"body2",component:"p",children:["Full Address: ",e.address," ",e.city," ",e.state," ",e.zip]})]}),Object(x.jsx)(L.a,{children:Object(x.jsx)(d.a,{render:function(t){var n=t.history;return Object(x.jsx)(f.a,{size:"small",variant:"contained",color:"primary",onClick:function(){!function(e,t){console.log(JSON.stringify(e)),t.push({pathname:"/map-view",state:{data:e}})}(e.location,n)},children:"View in map"})}})})]})}var Z=Object(u.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function q(e){return void 0!=e}function H(e){sessionStorage.setItem("inspection_id",e[0].inspection_id),sessionStorage.setItem("cacheData",JSON.stringify(e))}function Q(e){var t,n=Z();return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:n.heroContent,children:Object(x.jsxs)(y.a,{maxWidth:"sm",children:[Object(x.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"View Data"}),q(e.location.state)?(t=e.location.state.data,t.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(M,{businessName:e.aka_name,risk:e.risk,results:e.results,address:e.address,city:e.city,state:e.state,zip:e.zip,location:e.location}),Object(x.jsx)("br",{})]})}))):function(){var e=JSON.parse(sessionStorage.getItem("cacheData"));return console.log(e),alert("You are about to view cached data. Please search again for new data"),e.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(M,{businessName:e.aka_name,risk:e.risk,results:e.results,address:e.address,city:e.city,state:e.state,zip:e.zip,location:e.location}),Object(x.jsx)("br",{})]})}))}(),q(e.location.state)?H(e.location.state.data):console.log("no data to cache")]})})]})}var X=n(52);G.a.config();var Y={width:"100%",height:"100%"};var $=Object(X.GoogleApiWrapper)({apiKey:"AIzaSyDez9hG2WCNQWn3jF0r4GXa-xOrsqZ8ptc"})((function(e){return console.log(e),Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)(X.Map,{google:e.google,zoom:14,style:Y,initialCenter:{lat:e.location.state.data.longitude,lng:e.location.state.data.latitude},children:Object(x.jsx)(X.Marker,{position:{lat:e.location.state.data.longitude,lng:e.location.state.data.latitude}})})]})}));function ee(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(x.jsx)(d.a,{path:"/search",component:U}),Object(x.jsx)(d.a,{path:"/view-data",component:Q}),Object(x.jsx)(d.a,{path:"/map-view",component:$})]})})}var te=n(51),ne=n(82),ae=Object(ne.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:te.a.A400},background:{default:"#fff"}}}),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}G.a.config(),c.a.render(Object(x.jsxs)(s.a,{theme:ae,children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(ee,{})]}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/IT202-Spring2021-BigProject",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/IT202-Spring2021-BigProject","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.ab3f9219.chunk.js.map