(this["webpackJsonpaxl-countdown"]=this["webpackJsonpaxl-countdown"]||[]).push([[0],{30:function(e,a,t){e.exports=t(43)},35:function(e,a,t){},36:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),s=t.n(c),r=(t(35),t(8)),i=t(9),m=t(13),o=t(11),u=t(12),d=(t(36),t(6)),h=t(10),v=t(45),b=t(46),p=t(49),E=t(14),g=t.n(E),x=t(7),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={expireDate:"",btnDateState:""},t.handleDatesCalculation=t.handleDatesCalculation.bind(Object(h.a)(t)),t.datesButtons=[{value:"30d",label:"30 days"},{value:"7d",label:"7 days"},{value:"5m",label:"5 min"},{value:"30s",label:"30 secs"},{value:"10s",label:"10 secs"}],t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleThemeChange",value:function(e){e.preventDefault(),this.setState({theme:e.target.value})}},{key:"handleDatesCalculation",value:function(e){e.preventDefault();var a,t=Date.now(),n=e.target.value;switch(n){case"30d":a=t+2592e6;break;case"7d":a=t+6048e5;break;case"5m":a=t+3e5;break;case"30s":a=t+3e4;break;case"10s":a=t+1e4;break;default:a=t+2592e6}this.setState({expireDate:new Date(a).toString(),btnDateState:n})}},{key:"componentWillMount",value:function(){var e;e=Date.now()+7776e6,this.setState({expireDate:new Date(e).toString()})}},{key:"render",value:function(){var e=this,a=this.datesButtons.map((function(a){return l.a.createElement(v.a,{key:a.value,onClick:e.handleDatesCalculation,variant:"outline-light",value:a.value,className:a.value===e.state.btnDateState?" active":""},a.label)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"axl-section axl-section-100 bg-primary-gradient axl-home-icon-section"},l.a.createElement("div",{className:"centered-icon"},l.a.createElement(d.a,{icon:x.b,size:"lg"})),l.a.createElement("div",{className:"container-sm_x text-center"},l.a.createElement("h1",{className:"mb-5 display-3 text-white"},"Axl React CountDown Component"),l.a.createElement("p",{className:"text-white lead-1 mb-5"},"A simple and easy to use react component",l.a.createElement("br",null),"to trigger a countdown on your web app."),l.a.createElement("div",{className:"py-5"},l.a.createElement(b.a,{"aria-label":"Buttons group to choose theme",className:""},a)),l.a.createElement(g.a,{expireDate:this.state.expireDate,viewSeconds:!0,theme:"custom",isDark:!0},l.a.createElement(p.a,{variant:"success",className:"shadow"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(d.a,{icon:x.a,size:"2x",className:"alert-icon"}),l.a.createElement("div",{className:"ml-4"},"This is a custom text apperaing when time is up. Just add anything you want inside component.")))))))}}]),a}(l.a.Component),f=t(47),y=t(48),k=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={passedType:"default",expDate:"01 Jan 1970"},t.handleBehavClick=t.handleBehavClick.bind(Object(h.a)(t)),t.filterBtns=[{value:"default",label:"default behaviour"},{value:"custom",label:"Children props behaviour"}],t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleBehavClick",value:function(e){this.setState({passedType:e.target.value})}},{key:"cdGenerator",value:function(){var e=(new Date).getTime()+5e3;return"custom"==this.state.passedType?l.a.createElement(g.a,{expireDate:e,isDark:!0},l.a.createElement(p.a,{variant:"warning"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(d.a,{icon:x.e,size:"2x",className:"alert-icon"}),l.a.createElement("div",{className:"ml-4"},"This is a custom text apperaing when time is up. Just add anything you want inside component.")))):l.a.createElement(g.a,{expireDate:e})}},{key:"render",value:function(){var e=this,a=this.filterBtns.map((function(a){return l.a.createElement(v.a,{key:a.value,onClick:e.handleBehavClick,variant:"link",value:a.value,className:a.value===e.state.passedType?"active":""},a.label)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid axl-home-icon-section"},l.a.createElement("div",{className:"centered-middle-icon"},l.a.createElement(d.a,{icon:x.d,size:"lg"})),l.a.createElement(f.a,null,l.a.createElement(y.a,{lg:6,className:"axl-section axl-section-50 "},l.a.createElement("div",{className:"container-sm_xx w-100 text-center text-lg-right"},l.a.createElement("h3",{className:"display-4 mb-5 "},"And ",l.a.createElement("strong",{className:"text-secondary"},"When time is passed ?")),l.a.createElement("p",{className:"lead-1 "},"By default, the countDown will display with all values set to 0 "),l.a.createElement("p",{className:"lead-2 "},"But, if you want to have specific content when time is over, just add your content inside the component itself"))),l.a.createElement(y.a,{lg:6,className:"axl-section axl-section-50 "},l.a.createElement("div",{className:"container-sm_xx w-100 "},l.a.createElement("div",{className:"d-flex mb-5"},l.a.createElement(b.a,null,a)),this.cdGenerator())))))}}]),a}(l.a.Component),w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={theme:"highlight"},t.handleThemeChange=t.handleThemeChange.bind(Object(h.a)(t)),t.themeButtons=[{value:"custom",text:"custom css"},{value:"default",text:"default"},{value:"bordered",text:"bordered"},{value:"highlight",text:"highlighted"}],t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleThemeChange",value:function(e){e.preventDefault(),this.setState({theme:e.target.value})}},{key:"render",value:function(){var e=this,a=this.themeButtons.map((function(a){return l.a.createElement(v.a,{key:a.value,onClick:e.handleThemeChange,variant:"link",value:a.value,className:a.value===e.state.theme?"active":""},a.text)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid axl-home-icon-section"},l.a.createElement("div",{className:"centered-middle-icon"},l.a.createElement(d.a,{icon:x.c,size:"lg"})),l.a.createElement(f.a,{className:"flex-row-reverse"},l.a.createElement(y.a,{lg:6,className:"bg-gray-darken-10 is-dark axl-section axl-section-50 "},l.a.createElement("div",{className:"container-sm_xx w-100 text-center text-lg-left"},l.a.createElement("h3",{className:"display-4 mb-5 "},"Choose your ",l.a.createElement("strong",{className:"text-primary"},"theme")),l.a.createElement("p",{className:"lead-1 "},"You can choose between the themes offered by the component, OR just build your own css using component's css classes"))),l.a.createElement(y.a,{lg:6,className:"axl-section axl-section-50 text-right bg-gray-darken-10 is-dark"},l.a.createElement("div",{className:"container-sm_xx w-100"},l.a.createElement("div",{className:"mb-5"},l.a.createElement(b.a,null,a)),l.a.createElement(g.a,{expireDate:"30 Jan 2020",theme:this.state.theme,isDark:!0}))))))}}]),a}(l.a.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Axl CountDown Component"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Features")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Pricing")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))))),l.a.createElement("section",{className:"axl-sections"},l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement("article",{className:"py-5 bg-light"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",{className:"display-3 mb-5 text-primary"},"Want to use it ?"),l.a.createElement("p",{className:"lead-1"}," check the doc"),l.a.createElement("pre",null,"<p>Test</p>")))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.53552a7b.chunk.js.map