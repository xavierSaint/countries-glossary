(this["webpackJsonpcountries-glossary"]=this["webpackJsonpcountries-glossary"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(8),i=a.n(c),l=(a(14),a(2)),o=a(3),u=a(5),j=a(4),b=(a(15),a(16)),d=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getCurrentTimeAtGivenTimezone=function(e,t,a){return b.tz(e).format(a)},s.getCurrentTimeInCountry=function(e){b.tz.setDefault("Asia/Kolkata");var t=b.tz.zonesForCountry(e);if(t)return s.getCurrentTimeAtGivenTimezone(t[0],e,"MMMM Do YYYY, h:mm:ss a")},s.state={countryName:s.props.name,nativeName:s.props.nativeName,capital:s.props.capital,area:s.props.area,region:s.props.region,currency:s.props.currencies[0].name,currencySymbol:s.props.currencies[0].symbol,borders:s.props.borders.map((function(e,t){return Object(n.jsx)("li",{className:"border-value",children:e},t)})),alpha2Code:s.props.alpha2Code,flag:s.props.flag},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"country",children:[Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Country: "}),this.state.countryName,"(",this.state.nativeName,")"]}),Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Capital: "}),this.state.capital]}),Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Area: "}),this.state.area," sq.km"]}),Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Region: "}),this.state.region]}),Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Currency: "}),this.state.currency," (",this.state.currencySymbol,")"]}),Object(n.jsx)("div",{className:"border-container",children:Object(n.jsxs)("p",{className:"field",id:"border",children:[Object(n.jsx)("span",{className:"label",children:"Shares borders with: "}),this.state.borders]})}),Object(n.jsx)("div",{className:"flag-container",children:Object(n.jsx)("img",{className:"flag-image",src:this.state.flag,alt:this.state.countryName})}),Object(n.jsxs)("p",{className:"field",children:[Object(n.jsx)("span",{className:"label",children:"Current Time: "}),this.getCurrentTimeInCountry(this.state.alpha2Code)]})]})}}]),a}(s.Component),h=(a(20),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"heading",children:"COUNTRIES-GLOSSARY"}),Object(n.jsx)("p",{className:"message",children:"Scroll down to your favourite country"})]})}}]),a}(s.Component)),p=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={countryDetails:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.setState({countryDetails:t})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),this.state.countryDetails.map((function(e,t){return Object(n.jsx)(d,{name:e.name,nativeName:e.nativeName,capital:e.capital,area:e.area,region:e.region,flag:e.flag,currencies:e.currencies,borders:e.borders,alpha2Code:e.alpha2Code},t)}))]})}}]),a}(s.Component);a(21);var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),f()}},[[22,1,2]]]);
//# sourceMappingURL=main.6fed1214.chunk.js.map