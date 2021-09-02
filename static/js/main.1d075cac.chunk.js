(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{48:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c,n,r,o,i=a(0),s=a.n(i),u=a(19),l=a.n(u),d=a(17),j=a(7),f=a(21),b=a(74),m=a(70),h=a(71),p=a(75),O=(a(48),a(1)),v=function(e){var t=e.handleThemeChange,a=e.theme,c=e.iconStyle,n=e.setIconStyle,r=function(e){if("dark"===a){var t="onMouseEnter"===e._reactName?{color:"lightgray"}:{color:"darkgray"};n(t)}else{var c="onMouseEnter"===e._reactName?{color:"#000000",opacity:.7}:{color:"lightgray"};n(c)}},o="dark"===a?"#212529":"#f8f9fa";return Object(O.jsx)(b.a,{className:"navbar",bg:a,variant:a,children:Object(O.jsxs)(m.a,{className:"navbar-container",children:[Object(O.jsx)(b.a.Brand,{children:"Herolo Weather Task"}),Object(O.jsx)(h.a,{variant:"outline-secondary",style:{border:"0px",color:"darkgray",backgroundColor:o},onClick:t,onMouseEnter:function(e){return r(e)},onMouseLeave:function(e){return r(e)},children:"dark"===a?Object(O.jsx)("i",{className:"fas fa-sun",style:c}):Object(O.jsx)("i",{className:"fas fa-moon",style:c})}),Object(O.jsxs)(p.a,{className:"me-auto d-flex",children:[Object(O.jsx)(f.b,{to:"/Elad-Ayaso-30-8-2021-",children:"Home"}),Object(O.jsx)(f.b,{to:"/Elad-Ayaso-30-8-2021-/favorites",style:{marginLeft:"12px"},children:"Favorites"})]})]})})},g=a(11),y=a.n(g),x=a(16),N=a(10),S=a(8),w=a(9),F=Object(w.b)("location/getLocationAutocomplete",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/locations/v1/cities/autocomplete",query:"?apikey=".concat("U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b","&q=").concat(t)},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(w.c)({name:"locationAutocomplete",initialState:{data:[],status:null},extraReducers:(c={},Object(S.a)(c,F.pending,(function(e,t){e.status="loading"})),Object(S.a)(c,F.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(S.a)(c,F.rejected,(function(e,t){e.status="failed"})),c)}).reducer,k=a(31),I=Object(w.b)("location/getCurrentCondition",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/currentconditions/v1/".concat(t),query:"?apikey=".concat("U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b")},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),D=Object(w.c)({name:"currentCondition",initialState:{data:{},favoritesConditions:[],status:null},extraReducers:(n={},Object(S.a)(n,I.pending,(function(e,t){e.status="Get location conditions loading"})),Object(S.a)(n,I.fulfilled,(function(e,t){var a=t.payload;e.data=a[0],e.status="Get location conditions success"})),Object(S.a)(n,I.rejected,(function(e,t){e.status="Get location conditions failed"})),Object(S.a)(n,"removeFromFavoritesConditions",(function(e,t){var a=Object(k.a)(e.favoritesConditions);e.favoritesConditions=a.filter((function(e){return e.id===t.payload.id}))})),n)}).reducer,T=Object(w.b)("location/getForecast",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t),query:"?apikey=".concat("U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b")},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),K=Object(w.c)({name:"currentCondition",initialState:{data:[],status:null},extraReducers:(r={},Object(S.a)(r,T.pending,(function(e,t){e.status="loading"})),Object(S.a)(r,T.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(S.a)(r,T.rejected,(function(e,t){e.status="failed"})),r)}).reducer,L=Object(w.b)("location/getGeolocation",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",query:"?apikey=".concat("U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b","&q=").concat(t)},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(w.c)({name:"geolocation",initialState:{data:{},status:null},extraReducers:(o={},Object(S.a)(o,L.pending,(function(e,t){e.status="loading"})),Object(S.a)(o,L.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(S.a)(o,L.rejected,(function(e,t){e.status="failed"})),o)}).reducer,E=(a(61),function(e){var t=e.daily,a=e.getDegreesStr;return Object(O.jsxs)("div",{className:"weather-forecast-item",style:{},children:[Object(O.jsx)("div",{className:"day",children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t.Date).getDay()]}),Object(O.jsx)("img",{src:"https://www.accuweather.com/images/weathericons/".concat(t.Day.Icon,".svg"),className:"w-icon",alt:""}),Object(O.jsxs)("div",{className:"temp",children:[a(t.Temperature.Minimum.Value)," - ",a(t.Temperature.Maximum.Value)]})]})}),W=a(27),M=Object(w.c)({name:"favorites",initialState:{data:[],status:null},reducers:{addToFavorites:function(e,t){e.data.push(t.payload)},removeFromFavorites:function(e,t){var a=Object(k.a)(e.data);e.data=a.filter((function(e){return e.id!==t.payload.id}))}}}),q=M.actions,V=q.addToFavorites,H=q.removeFromFavorites,P=M.reducer,U=(a(62),function(e){var t=e.celcius,a=e.setCelcius,c=e.city,n=e.getDegreesStr,r=Object(N.b)(),o=Object(N.c)((function(e){return e.geolocation})).data,i=Object(N.c)((function(e){return e.currentCondition})).data,s=Object(N.c)((function(e){return e.favorites})).data,u=function(){return 0!==s.length&&s.some((function(e){return localStorage.getItem("locationKey")===e.id}))};return Object(O.jsx)("div",{className:"current-location",children:Object(O.jsxs)("div",{className:"location-weather-container",children:[Object(O.jsxs)("div",{className:"location-info",children:[""===c?o.LocalizedName:c,Object(O.jsx)("div",{className:"favorites-icon",onClick:function(){console.log(u()),u()?r(H({id:null!==localStorage.getItem("locationKey")?localStorage.getItem("locationKey"):o.Key})):r(V({id:null!==localStorage.getItem("locationKey")?localStorage.getItem("locationKey"):o.Key,name:""!==c?c:o.LocalizedName,currentWeather:Object(W.a)({},i)}))},children:u()?Object(O.jsx)("i",{className:"fas fa-heart"}):Object(O.jsx)("i",{className:"far fa-heart"})})]}),Object(O.jsxs)("div",{className:"weather-info",children:[Object(O.jsxs)("div",{className:"degrees-info",children:[n(i.Temperature.Imperial.Value),Object(O.jsxs)("div",{className:"degree-change-btn",onClick:function(){return a(!t)},children:["|",t?i.Temperature.Imperial.Unit:i.Temperature.Metric.Unit]})]}),Object(O.jsx)("div",{className:"weather-description",children:i.WeatherText})]})]})})}),z=a(72),Y=a(76),G=a(73),Q=(a(63),function(e){var t=e.match,a=Object(i.useState)(""),c=Object(d.a)(a,2),n=c[0],r=c[1],o=Object(i.useState)(!1),s=Object(d.a)(o,2),u=s[0],l=s[1],j=Object(i.useState)(""),f=Object(d.a)(j,2),b=f[0],m=f[1],h=Object(i.useState)(!1),p=Object(d.a)(h,2),v=p[0],g=p[1],S=Object(N.b)(),w=Object(N.c)((function(e){return e.currentCondition})).data,C=Object(N.c)((function(e){return e.forecast})).data,k=Object(N.c)((function(e){return e.locationAutocomplete})).data,D=Object(N.c)((function(e){return e.geolocation})).data,K=Object(N.c)((function(e){return e.favorites})).data;Object(i.useEffect)((function(){void 0!==t.params.id?(S(L("32.045, 34.77")),S(I(t.params.id)),S(T(t.params.id)),localStorage.setItem("locationKey",t.params.id),console.log(localStorage.getItem("locationKey")),m(K.find((function(e){return e.id===t.params.id})).name)):(S(L("32.045, 34.77")),S(I("215854")),S(T("215854")),localStorage.setItem("locationKey","215854"),m(""))}),[]);var A=function(){var e=Object(x.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(F(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){return v?"".concat(((e-32)/1.8).toFixed(1),"\xb0C"):"".concat(e.toFixed(1),"\xb0F")};return Object(O.jsxs)("div",{className:"homescreen",onClick:function(){u&&l(!1)},children:[Object(O.jsx)(z.a,{className:"input-group",style:{width:"350px"},children:Object(O.jsx)(Y.a,{className:"input-textfield",placeholder:"Enter city here",value:n,onClick:function(){return l(!0)},onChange:function(e){A(e.target.value),r(e.target.value)},autoComplete:"off"})}),u&&k.length>0?Object(O.jsx)("div",{className:"autocomplete-container",children:k.map((function(e,t){return Object(O.jsx)("div",{className:"option",onClick:function(){return function(e){r(e.LocalizedName),S(I(e.Key)),S(T(e.Key)),m(e.LocalizedName),localStorage.setItem("locationKey",e.Key)}(e)},tabIndex:"0",children:Object(O.jsxs)("span",{children:[e.LocalizedName,", ",e.Country.LocalizedName]})},t)}))}):Object(O.jsx)("div",{}),void 0===w.WeatherText||void 0===C.DailyForecasts||void 0===D.Key?Object(O.jsx)(G.a,{animation:"border",style:{marginTop:"50px"}}):"failed"===w.status||"failed"===w.status||"failed"===D.status?alert("Server Failed To Fetch From API!!!"):Object(O.jsxs)("div",{className:"weather-container",children:[Object(O.jsx)(U,{city:b,celcius:v,setCelcius:g,getDegreesStr:W}),Object(O.jsx)("div",{className:"forecast-info",children:C.DailyForecasts.map((function(e,t){return Object(O.jsx)(E,{daily:e,getDegreesStr:W},t)}))})]})]})}),R=(a(64),function(e){var t=e.fav;return Object(O.jsxs)("div",{className:"favorite-location",children:[Object(O.jsx)("div",{className:"location-name",children:Object(O.jsx)(f.b,{to:"/Elad-Ayaso-30-8-2021-/".concat(t.id),children:t.name})}),Object(O.jsxs)("div",{className:"location-degree",children:[t.currentWeather.Temperature.Metric.Value,"\xb0",t.currentWeather.Temperature.Metric.Unit]}),Object(O.jsx)("img",{src:"https://www.accuweather.com/images/weathericons/".concat(t.currentWeather.WeatherIcon,".svg"),className:"w-icon",width:"80px",height:"80px",alt:""})]})}),B=(a(65),function(){var e=Object(N.c)((function(e){return e.favorites})).data;return Object(O.jsxs)("div",{className:"favoritesscreen",children:[Object(O.jsx)("h2",{className:"favorites-headline",children:"My Favorites"}),0===e.length?Object(O.jsx)("h5",{children:"You Don't Have Any Favorites Yet!"}):Object(O.jsx)("div",{className:"favorites-grid",children:e.map((function(e,t){return Object(O.jsx)(R,{fav:e},t)}))})]})}),J=a.p+"static/media/light-mode.46247aaa.jpg",_=a.p+"static/media/night-mode.94f5695e.jpg";a(66);var X=function(){var e=Object(i.useState)("dark"),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(_),r=Object(d.a)(n,2),o=r[0],s=r[1],u=Object(i.useState)("#FFF"),l=Object(d.a)(u,2),f=l[0],b=l[1],m=Object(i.useState)({}),h=Object(d.a)(m,2),p=h[0],g=h[1];return Object(O.jsxs)("div",{className:"App",style:{color:f,backgroundImage:"url(".concat(o,")")},children:[Object(O.jsx)(v,{handleThemeChange:function(){"dark"===a?(c("light"),s(J),b("#000"),g({color:"#000000",opacity:.7})):(c("dark"),s(_),b("#FFF"),g({color:"lightgray"}))},theme:a,iconStyle:p,setIconStyle:g}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:projectname/favorites",component:B}),Object(O.jsx)(j.a,{path:"/:projectname/:id",component:Q}),Object(O.jsx)(j.a,{path:"/:projectname",component:Q})]})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},$=(a(67),Object(w.a)({reducer:{currentCondition:D,locationAutocomplete:C,forecast:K,geolocation:A,favorites:P}}));l.a.render(Object(O.jsxs)(s.a.StrictMode,{children:[Object(O.jsx)(N.a,{store:$,children:Object(O.jsx)(f.a,{children:Object(O.jsx)(X,{})})}),","]}),document.getElementById("root")),Z()}},[[68,1,2]]]);
//# sourceMappingURL=main.1d075cac.chunk.js.map