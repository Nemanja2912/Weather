(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{13:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),n=t(7),r=t.n(n),o=t(2),l=t(3),d=t(5),j=t(4),b=(t(13),function(e){Object(d.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).state={},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"title-line",children:[Object(c.jsx)("p",{className:"title",children:"Details"}),Object(c.jsx)("p",{className:"line"})]}),Object(c.jsxs)("div",{className:"info-area",children:[Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fas fa-tint"}),Object(c.jsx)("p",{className:"opacity",children:"Humidity"}),Object(c.jsxs)("p",{children:[this.props.humidity,"%"]})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fab fa-hotjar"}),Object(c.jsx)("p",{className:"opacity",children:"UV Index"}),Object(c.jsx)("p",{children:this.props.uvi})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fas fa-wind"}),Object(c.jsx)("p",{className:"opacity",children:"Wind speed"}),Object(c.jsxs)("p",{children:[" ",this.props.wind," kmh"]})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fas fa-eye-slash"}),Object(c.jsx)("p",{className:"opacity",children:"Visibility"}),Object(c.jsxs)("p",{children:[" ",this.props.visibility]})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fas fa-cloud"}),Object(c.jsx)("p",{className:"opacity",children:"Clouds"}),Object(c.jsxs)("p",{children:[this.props.clouds,"%"]})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{class:"fas fa-tachometer-alt"}),Object(c.jsx)("p",{className:"opacity",children:"Pressure"}),Object(c.jsxs)("p",{children:[this.props.pressure," Pa"]})]})]})]})}}]),t}(a.Component)),h=function(e){Object(d.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).state={},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"screen",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("p",{className:"big-text",children:"Right now"}),Object(c.jsxs)("div",{className:"temp",children:[this.props.temp,"\xb0"]}),Object(c.jsx)("p",{className:"current",children:this.props.desc}),Object(c.jsxs)("p",{className:"location",children:[Object(c.jsx)("i",{class:"fas fa-location-arrow"})," ",this.props.location]})]}),Object(c.jsx)("div",{className:"right",children:this.props.icon})]})}}]),t}(a.Component),m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=function(e){Object(d.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).state={},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;if(void 0===this.props.days)return"";var s=this.props.days[1],t=new Date(1e3*this.props.days[1].dt);return Object(c.jsxs)("div",{style:{display:this.props.week?"block":"none",backgroundImage:this.props.color},className:"details",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("p",{children:Object(c.jsx)("i",{class:"fas fa-plus"})}),Object(c.jsx)("p",{children:"Weather Forecast"}),Object(c.jsx)("p",{className:"right",onClick:this.props.openForecast,children:Object(c.jsx)("i",{class:"fas fa-times"})})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"title-line",children:[Object(c.jsx)("p",{className:"title",children:"Next hours"}),Object(c.jsx)("p",{className:"line"})]}),Object(c.jsx)("div",{className:"hours",children:Object(c.jsx)("div",{className:"box",children:this.props.hours.map((function(s,t){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"time",children:[0===t?"Now":new Date(1e3*s.dt).getHours()<10?"0"+new Date(1e3*s.dt).getHours():new Date(1e3*s.dt).getHours(),0===t?null:":00"]}),e.props.icon.filter((function(e){return e.id===s.weather[0].icon}))[0].icon,Object(c.jsxs)("p",{className:"temp-hours",children:[s.temp.toFixed(),"\xb0"]})]},s.dt)}))})}),Object(c.jsxs)("div",{className:"tommorow",children:[Object(c.jsxs)("div",{className:"title-line",children:[Object(c.jsx)("p",{className:"title",children:"Tommorow"}),Object(c.jsx)("p",{className:"line"})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsxs)("div",{className:"left",children:[this.props.icon.filter((function(e){return e.id===s.weather[0].icon}))[0].icon,Object(c.jsx)("p",{children:"".concat(m[t.getDay()],", ").concat(t.getDate()," ").concat(p[t.getMonth()])})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsxs)("div",{className:"min",children:[s.temp.min.toFixed(),"\xb0"]}),Object(c.jsxs)("div",{className:"max",children:[s.temp.max.toFixed(),"\xb0"]})]})]}),Object(c.jsxs)("div",{className:"next-day-data",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"bold",children:"Clouds"}),Object(c.jsxs)("p",{children:[s.clouds,"%"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"bold",children:"Humidity"}),Object(c.jsxs)("p",{children:[s.humidity,"%"]})]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"bold",children:"Wind"}),Object(c.jsxs)("p",{children:[s.wind_speed," km/h"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"bold",children:"Pressure"}),Object(c.jsxs)("p",{children:[s.pressure," hPa"]})]})]})]})]}),Object(c.jsxs)("div",{className:"next-days",children:[Object(c.jsxs)("div",{className:"title-line",children:[Object(c.jsx)("p",{className:"title",children:"Next days"}),Object(c.jsx)("p",{className:"line"})]}),this.props.days.slice(0).map((function(s,t){return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsxs)("div",{className:"left",children:[e.props.icon.filter((function(e){return e.id===s.weather[0].icon}))[0].icon,Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"bold",children:"".concat(m[new Date(1e3*s.dt).getDay()])})})]}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("p",{className:"bold",children:s.weather[0].main})}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{class:"opacity",children:[s.temp.min.toFixed(),"\xb0"]})," ",Object(c.jsxs)("p",{children:[s.temp.max.toFixed(),"\xb0"]})]}),Object(c.jsx)("div",{})]})]},t)}))]})]})]})}}]),t}(a.Component),O=[{id:"01d",icon:Object(c.jsx)("i",{className:"fas fa-sun"}),color:"linear-gradient(to bottom, #54a6dc, #71b8e0)"},{id:"01n",icon:Object(c.jsx)("i",{className:"fas fa-moon"}),color:"linear-gradient(to bottom, #17255d, #905ea1)"},{id:"02d",icon:Object(c.jsx)("i",{className:"fas fa-cloud-sun"}),color:"linear-gradient(to bottom, #5594b3, #7d99b2)"},{id:"02n",icon:Object(c.jsx)("i",{className:"fas fa-cloud-moon"}),color:"linear-gradient(to bottom, #17255d, #7d99b2)"},{id:"03d",icon:Object(c.jsx)("i",{className:"fas fa-cloud"}),color:"linear-gradient(to bottom, #5a7386, #0a0d10)"},{id:"03n",icon:Object(c.jsx)("i",{className:"fas fa-cloud"}),color:"linear-gradient(to bottom, #5a7386, #0a0d10)"},{id:"04d",icon:Object(c.jsx)("i",{className:"fab fa-cloudversify"}),color:"linear-gradient(to bottom, #5a80b9, #4268a9)"},{id:"04n",icon:Object(c.jsx)("i",{className:"fab fa-cloudversify"}),color:"linear-gradient(to bottom, #56626d, #1c3a54)"},{id:"09d",icon:Object(c.jsx)("i",{className:"fas fa-cloud-showers-heavy"}),color:"linear-gradient(to bottom, #94b2ac, #001414)"},{id:"09n",icon:Object(c.jsx)("i",{className:"fas fa-cloud-showers-heavy"}),color:"linear-gradient(to bottom, #00515a, #001e1a)"},{id:"10d",icon:Object(c.jsx)("i",{className:"fas fa-cloud-sun-rain"}),color:"linear-gradient(to bottom, #a8cfe2, #586f73)"},{id:"10n",icon:Object(c.jsx)("i",{className:"fas fa-cloud-moon-rain"}),color:"linear-gradient(to bottom, #2f0920, #0b050d)"},{id:"11d",icon:Object(c.jsx)("i",{className:"fas fa-bolt"}),color:"linear-gradient(to bottom, #7382cd, #121425)"},{id:"11n",icon:Object(c.jsx)("i",{className:"fas fa-bolt"}),color:"linear-gradient(to bottom, #414757, #0e101a)"},{id:"13d",icon:Object(c.jsx)("i",{className:"far fa-snowflake"}),color:"linear-gradient(to bottom, #cdc1c5, #2a2b2c)"},{id:"13n",icon:Object(c.jsx)("i",{className:"far fa-snowflake"}),color:"linear-gradient(to bottom, #283537, #73777a)"},{id:"50d",icon:Object(c.jsx)("i",{className:"fas fa-smog"}),color:"linear-gradient(to bottom, #b19f9f, #332e34)"},{id:"50n",icon:Object(c.jsx)("i",{className:"fas fa-smog"}),color:"linear-gradient(to bottom, #717578, #283233)"}],u=function(e){Object(d.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).state={hourly:[],days:void 0,week:!1,forecast:!0,height:window.innerHeight},e.openWeek=function(){e.setState({week:!0,forecast:!1})},e.openForecast=function(){e.setState({week:!1,forecast:!0})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/onecall?lat=44.804&lon=20.4651&appid=f1f477110eac415ab17fb02931098b30&units=metric").then((function(e){return e.json()})).then((function(s){e.setState({data:s,temp:s.current.temp.toFixed(),location:s.timezone,desc:s.current.weather[0].main,icon:O.filter((function(e){return e.id===s.current.weather[0].icon}))[0].icon,clouds:s.current.clouds,humidity:s.current.humidity,uvi:s.current.uvi,wind:s.current.wind_speed,visibility:s.current.visibility,pressure:s.current.pressure,hourly:s.hourly,days:s.daily,color:O.filter((function(e){return e.id===s.current.weather[0].icon}))[0].color,image:"c"+s.current.weather[0].icon}),console.log(e.state.height)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{style:{height:this.state.height+"px"},className:this.state.image+" App",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("p",{children:Object(c.jsx)("i",{class:"fas fa-plus"})}),Object(c.jsx)("p",{children:"Weather Forecast"}),Object(c.jsx)("p",{className:"right",onClick:this.openWeek,children:Object(c.jsx)("i",{class:"fas fa-bars"})})]}),Object(c.jsx)(h,{temp:this.state.temp,location:this.state.location,desc:this.state.desc,icon:this.state.icon}),Object(c.jsx)(b,{humidity:this.state.humidity,uvi:this.state.uvi,wind:this.state.wind,visibility:this.state.visibility,clouds:this.state.clouds,pressure:this.state.pressure}),Object(c.jsx)(x,{hours:this.state.hourly,week:this.state.week,icon:O,days:this.state.days,openForecast:this.openForecast,color:this.state.color})]})}}]),t}(a.Component);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.34e5178f.chunk.js.map