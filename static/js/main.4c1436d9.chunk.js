(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{48:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c,n,r,o,i=a(0),s=a.n(i),u=a(19),l=a.n(u),d=a(17),j=a(7),f=a(22),b=a(74),h=a(70),m=a(71),p=a(75),O=(a(48),a(1)),v=function(e){var t=e.handleThemeChange,a=e.theme,c=e.iconStyle,n=e.setIconStyle,r=function(e){if("dark"===a){var t="onMouseEnter"===e._reactName?{color:"lightgray"}:{color:"darkgray"};n(t)}else{var c="onMouseEnter"===e._reactName?{color:"#000000",opacity:.7}:{color:"lightgray"};n(c)}},o="dark"===a?"#212529":"#f8f9fa";return Object(O.jsx)(b.a,{className:"navbar",bg:a,variant:a,children:Object(O.jsxs)(h.a,{className:"navbar-container",children:[Object(O.jsx)(b.a.Brand,{children:"Herolo Weather Task"}),Object(O.jsx)(m.a,{variant:"outline-secondary",style:{border:"0px",color:"darkgray",backgroundColor:o},onClick:t,onMouseEnter:function(e){return r(e)},onMouseLeave:function(e){return r(e)},children:"dark"===a?Object(O.jsx)("i",{className:"fas fa-sun",style:c}):Object(O.jsx)("i",{className:"fas fa-moon",style:c})}),Object(O.jsxs)(p.a,{className:"me-auto d-flex",children:[Object(O.jsx)(f.b,{to:"/",children:"Home"}),Object(O.jsx)(f.b,{to:"/favorites",style:{marginLeft:"12px"},children:"Favorites"})]})]})})},g=a(11),y=a.n(g),x=a(16),w=a(10),N=a(8),S=a(9),C=Object(S.b)("location/getLocationAutocomplete",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/locations/v1/cities/autocomplete",query:"?apikey=".concat("ogvP21oTdyCaLDEHKv9L0OYbZfM0wBtl","&q=").concat(t)},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(S.c)({name:"locationAutocomplete",initialState:{data:[],status:null},extraReducers:(c={},Object(N.a)(c,C.pending,(function(e,t){e.status="loading"})),Object(N.a)(c,C.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(N.a)(c,C.rejected,(function(e,t){e.status="failed"})),c)}).reducer,F=a(31),T=Object(S.b)("location/getCurrentCondition",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/currentconditions/v1/".concat(t),query:"?apikey=".concat("ogvP21oTdyCaLDEHKv9L0OYbZfM0wBtl")},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(S.c)({name:"currentCondition",initialState:{data:{},favoritesConditions:[],status:null},extraReducers:(n={},Object(N.a)(n,T.pending,(function(e,t){e.status="Get location conditions loading"})),Object(N.a)(n,T.fulfilled,(function(e,t){var a=t.payload;e.data=a[0],e.status="Get location conditions success"})),Object(N.a)(n,T.rejected,(function(e,t){e.status="Get location conditions failed"})),Object(N.a)(n,"removeFromFavoritesConditions",(function(e,t){var a=Object(F.a)(e.favoritesConditions);e.favoritesConditions=a.filter((function(e){return e.id===t.payload.id}))})),n)}).reducer,I=Object(S.b)("location/getForecast",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t),query:"?apikey=".concat("ogvP21oTdyCaLDEHKv9L0OYbZfM0wBtl")},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),K=Object(S.c)({name:"currentCondition",initialState:{data:[],status:null},extraReducers:(r={},Object(N.a)(r,I.pending,(function(e,t){e.status="loading"})),Object(N.a)(r,I.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(N.a)(r,I.rejected,(function(e,t){e.status="failed"})),r)}).reducer,D=Object(S.b)("location/getGeolocation",function(){var e=Object(x.a)(y.a.mark((function e(t,a){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,c={base:"https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",query:"?apikey=".concat("ogvP21oTdyCaLDEHKv9L0OYbZfM0wBtl","&q=").concat(t)},e.abrupt("return",fetch(c.base+c.query).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(S.c)({name:"geolocation",initialState:{data:{},status:null},extraReducers:(o={},Object(N.a)(o,D.pending,(function(e,t){e.status="loading"})),Object(N.a)(o,D.fulfilled,(function(e,t){var a=t.payload;e.data=a,e.status="success"})),Object(N.a)(o,D.rejected,(function(e,t){e.status="failed"})),o)}).reducer,q=(a(61),function(e){var t=e.daily,a=e.getDegreesStr;return Object(O.jsxs)("div",{className:"weather-forecast-item",style:{},children:[Object(O.jsx)("div",{className:"day",children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t.Date).getDay()]}),Object(O.jsx)("img",{src:"https://www.accuweather.com/images/weathericons/".concat(t.Day.Icon,".svg"),className:"w-icon",alt:""}),Object(O.jsxs)("div",{className:"temp",children:[a(t.Temperature.Minimum.Value)," - ",a(t.Temperature.Maximum.Value)]})]})}),E=a(27),W=Object(S.c)({name:"favorites",initialState:{data:[],status:null},reducers:{addToFavorites:function(e,t){e.data.push(t.payload)},removeFromFavorites:function(e,t){var a=Object(F.a)(e.data);e.data=a.filter((function(e){return e.id!==t.payload.id}))}}}),B=W.actions,H=B.addToFavorites,z=B.removeFromFavorites,A=W.reducer,P=(a(62),function(e){var t=e.celcius,a=e.setCelcius,c=e.city,n=e.getDegreesStr,r=Object(w.b)(),o=Object(w.c)((function(e){return e.geolocation})).data,i=Object(w.c)((function(e){return e.currentCondition})).data,s=Object(w.c)((function(e){return e.favorites})).data,u=function(){return 0!==s.length&&s.some((function(e){return localStorage.getItem("locationKey")===e.id}))};return Object(O.jsx)("div",{className:"current-location",children:Object(O.jsxs)("div",{className:"location-weather-container",children:[Object(O.jsxs)("div",{className:"location-info",children:[""===c?o.LocalizedName:c,Object(O.jsx)("div",{className:"favorites-icon",onClick:function(){u()?r(z({id:null!==localStorage.getItem("locationKey")?localStorage.getItem("locationKey"):o.Key})):r(H({id:null!==localStorage.getItem("locationKey")?localStorage.getItem("locationKey"):o.Key,name:""!==c?c:o.LocalizedName,currentWeather:Object(E.a)({},i)}))},children:u()?Object(O.jsx)("i",{className:"fas fa-heart"}):Object(O.jsx)("i",{className:"far fa-heart"})})]}),Object(O.jsxs)("div",{className:"weather-info",children:[Object(O.jsxs)("div",{className:"degrees-info",children:[n(i.Temperature.Imperial.Value),Object(O.jsxs)("div",{className:"degree-change-btn",onClick:function(){return a(!t)},children:["|",t?i.Temperature.Imperial.Unit:i.Temperature.Metric.Unit]})]}),Object(O.jsx)("div",{className:"weather-description",children:i.WeatherText})]})]})})}),Y=a(72),G=a(76),R=a(73),V=(a(63),function(e){var t=e.match,a=Object(i.useState)(""),c=Object(d.a)(a,2),n=c[0],r=c[1],o=Object(i.useState)(!1),s=Object(d.a)(o,2),u=s[0],l=s[1],j=Object(i.useState)(""),f=Object(d.a)(j,2),b=f[0],h=f[1],m=Object(i.useState)(!1),p=Object(d.a)(m,2),v=p[0],g=p[1],N=Object(w.b)(),S=Object(w.c)((function(e){return e.currentCondition})).data,k=Object(w.c)((function(e){return e.forecast})).data,F=Object(w.c)((function(e){return e.locationAutocomplete})).data,L=Object(w.c)((function(e){return e.geolocation})).data,K=Object(w.c)((function(e){return e.favorites})).data;Object(i.useEffect)((function(){void 0!==t.params.id?(console.log(t.params.id),N(D("32.045, 34.77")),N(T(t.params.id)),N(I(t.params.id)),h(K.find((function(e){return e.id===t.params.id})).name)):(N(D("32.045, 34.77")),N(T("215854")),N(I("215854")),localStorage.setItem("locationKey","215854"),h(""))}),[]);var M=function(){var e=Object(x.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(C(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return v?"".concat(((e-32)/1.8).toFixed(1),"\xb0C"):"".concat(e.toFixed(1),"\xb0F")};return Object(O.jsxs)("div",{className:"homescreen",onClick:function(){u&&l(!1)},children:[Object(O.jsx)(Y.a,{className:"input-group",style:{width:"350px"},children:Object(O.jsx)(G.a,{className:"input-textfield",placeholder:"Enter city here",value:n,onClick:function(){return l(!0)},onChange:function(e){M(e.target.value),r(e.target.value)},autoComplete:"off"})}),u&&F.length>0?Object(O.jsx)("div",{className:"autocomplete-container",children:F.map((function(e,t){return Object(O.jsx)("div",{className:"option",onClick:function(){return function(e){r(e.LocalizedName),N(T(e.Key)),N(I(e.Key)),h(e.LocalizedName),localStorage.setItem("locationKey",e.Key)}(e)},tabIndex:"0",children:Object(O.jsxs)("span",{children:[e.LocalizedName,", ",e.Country.LocalizedName]})},t)}))}):Object(O.jsx)("div",{}),void 0===S.WeatherText||void 0===k.DailyForecasts||void 0===L.Key?Object(O.jsx)(R.a,{animation:"border",style:{marginTop:"50px"}}):Object(O.jsxs)("div",{className:"weather-container",children:[Object(O.jsx)(P,{city:b,celcius:v,setCelcius:g,getDegreesStr:E}),Object(O.jsx)("div",{className:"forecast-info",children:k.DailyForecasts.map((function(e,t){return Object(O.jsx)(q,{daily:e,getDegreesStr:E},t)}))})]})]})}),Z=(a(64),function(e){var t=e.fav,a=e.history;return Object(O.jsxs)("div",{className:"favorite-location",children:[Object(O.jsx)("div",{className:"location-name",children:Object(O.jsx)(m.a,{onClick:function(){localStorage.setItem("locationKey",t.id),a.push("/".concat(t.id))},children:t.name})}),Object(O.jsxs)("div",{className:"location-degree",children:[t.currentWeather.Temperature.Metric.Value,"\xb0",t.currentWeather.Temperature.Metric.Unit]}),Object(O.jsx)("img",{src:"https://www.accuweather.com/images/weathericons/".concat(t.currentWeather.WeatherIcon,".svg"),className:"w-icon",width:"80px",height:"80px",alt:""})]})}),U=(a(65),function(){var e=Object(w.c)((function(e){return e.favorites})).data;return Object(O.jsxs)("div",{className:"favoritesscreen",children:[Object(O.jsx)("h2",{className:"favorites-headline",children:"My Favorites"}),0===e.length?Object(O.jsx)("h5",{children:"You Don't Have Any Favorites Yet!"}):Object(O.jsx)("div",{className:"favorites-grid",children:e.map((function(e,t){return Object(O.jsx)(Z,{fav:e},t)}))})]})}),J=a.p+"static/media/light-mode.46247aaa.jpg",_=a.p+"static/media/night-mode.94f5695e.jpg";a(66);var Q=function(){var e=Object(i.useState)("dark"),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(_),r=Object(d.a)(n,2),o=r[0],s=r[1],u=Object(i.useState)("#FFF"),l=Object(d.a)(u,2),f=l[0],b=l[1],h=Object(i.useState)({}),m=Object(d.a)(h,2),p=m[0],g=m[1];return Object(O.jsxs)("div",{className:"App",style:{color:f,backgroundImage:"url(".concat(o,")")},children:[Object(O.jsx)(v,{handleThemeChange:function(){"dark"===a?(c("light"),s(J),b("#000"),g({color:"#000000",opacity:.7})):(c("dark"),s(_),b("#FFF"),g({color:"lightgray"}))},theme:a,iconStyle:p,setIconStyle:g}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/favorites",component:U}),Object(O.jsx)(j.a,{exact:!0,path:"/:id",component:V}),Object(O.jsx)(j.a,{exact:!0,path:"/",component:V})]})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},$=(a(67),Object(S.a)({reducer:{currentCondition:L,locationAutocomplete:k,forecast:K,geolocation:M,favorites:A}}));l.a.render(Object(O.jsxs)(s.a.StrictMode,{children:[Object(O.jsx)(w.a,{store:$,children:Object(O.jsx)(f.a,{children:Object(O.jsx)(Q,{})})}),","]}),document.getElementById("root")),X()}},[[68,1,2]]]);
//# sourceMappingURL=main.4c1436d9.chunk.js.map