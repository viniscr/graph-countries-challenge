(this["webpackJsonpgraph-countries-challenge"]=this["webpackJsonpgraph-countries-challenge"]||[]).push([[0],{80:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(2),i=a(10),r=a(68),s=a.n(r),l=(a(80),a(24)),o=a(22),d=a(9),j=a(15),u=a(45);function b(){var e=Object(u.a)(["\n  query {\n    details\n  }\n"]);return b=function(){return e},e}function O(){var e=Object(u.a)(["\n  query {\n    list @client\n  }\n"]);return O=function(){return e},e}function h(){var e=Object(u.a)(["\n  query {\n    Country {\n      _id\n      capital\n      name\n      flag {\n        svgFile\n      }\n      area\n      population\n      topLevelDomains {\n        name\n      }\n    }\n  }\n"]);return h=function(){return e},e}var m=Object(i.gql)(h()),p=Object(i.gql)(O()),x=Object(i.gql)(b()),f=function(e){var t=e.country,a=t.name,c=t.capital,i=t.flag,r=t._id;return Object(n.jsx)("article",{className:"card","data-testid":"card",children:Object(n.jsxs)(o.b,{to:"countries/".concat(r),"data-testid":"country-details",children:[Object(n.jsx)("div",{className:"card__media",children:Object(n.jsx)("img",{className:"card__flag",src:i.svgFile,alt:"Country Flag"})}),Object(n.jsxs)("div",{className:"card__content",children:[Object(n.jsx)("h2",{className:"card__name",children:a}),Object(n.jsx)("span",{className:"card__capital",children:c})]})]})})},v=a(44),g=function(e){var t=e.handleSearch,a=e.hasSearch,i=Object(c.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1];return Object(n.jsxs)("header",{className:"header","data-testid":"header",children:[Object(n.jsx)("h1",{className:"header__title","data-testid":"header-title",children:"Country Finder"}),a&&Object(n.jsxs)("form",{action:"#",className:"search",onSubmit:function(e){e.preventDefault(),t&&t(s)},"data-testid":"header-search",children:[Object(n.jsx)("input",{type:"text",className:"search__input",placeholder:"Search Country",value:s,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)(v.b,{className:"search__icon"})]})]})};var y=function(){var e=Object(i.useLazyQuery)(p,{variables:{term:""}}),t=Object(j.a)(e,2),a=t[0],r=t[1],s=r.error,l=r.loading,d=r.data;return Object(c.useEffect)((function(){a()}),[a]),l?Object(n.jsx)("p",{children:"Loading..."}):s?Object(n.jsx)("p",{children:"Failed :("}):void 0===d?Object(n.jsx)("p",{children:"Loading..."}):0===d.list.length?Object(n.jsxs)("p",{children:["Country not found. Please try again. ",Object(n.jsx)("br",{}),Object(n.jsx)(o.b,{to:"/countries",children:"Voltar"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(g,{hasSearch:!0,handleSearch:function(e){a({variables:{term:e}})}}),Object(n.jsx)("div",{className:"countries-list-container","data-testid":"countries-list",children:d.list.map((function(e,t){return Object(n.jsx)(f,{country:e},t)}))})]})},_=function(e){var t=e.match,a=Object(i.useLazyQuery)(x,{variables:{id:t.params.id}}),r=Object(j.a)(a,2),s=r[0],l=r[1],d=l.error,u=l.loading,b=l.data;if(Object(c.useEffect)((function(){s()}),[s]),u)return Object(n.jsx)("p",{children:"Loading..."});if(d)return Object(n.jsx)("p",{children:"Failed :("});if(void 0===b)return Object(n.jsx)("p",{children:"Loading..."});if(0===b.details.length)return Object(n.jsxs)("p",{children:["Country not found. Please try again. ",Object(n.jsx)("br",{}),Object(n.jsx)(o.b,{to:"/countries",children:"Voltar"})]});var O=b.details,h=O.name,m=O.flag,p=O.capital,f=O.area,y=O.population,_=O.topLevelDomains;return Object(n.jsxs)("div",{children:[Object(n.jsx)(g,{hasSearch:!1}),Object(n.jsxs)("div",{className:"country-detail-container","data-testid":"country-detail",children:[Object(n.jsxs)(o.b,{className:"country-detail-back-button",to:"/countries",children:[Object(n.jsx)(v.a,{className:"country-detail-back-button__icon"}),"Go back"]}),Object(n.jsxs)("div",{className:"country-detail-content",children:[Object(n.jsx)("div",{className:"country-detail-content-media",children:Object(n.jsx)("img",{className:"country-detail-content-media-img",src:m.svgFile,alt:"Flag of ".concat(h)})}),Object(n.jsxs)("div",{className:"country-detail-content-info",children:[Object(n.jsx)("h2",{className:"country-detail-content-info__name",children:h}),Object(n.jsxs)("div",{className:"country-detail-content-info-details",children:[Object(n.jsx)("h3",{className:"country-detail-content-info__title",children:"Capital"}),Object(n.jsx)("p",{className:"country-detail-content-info__value",children:p}),Object(n.jsx)("h3",{className:"country-detail-content-info__title",children:"Area"}),Object(n.jsxs)("p",{className:"country-detail-content-info__value",children:[f," km\xb2"]}),Object(n.jsx)("h3",{className:"country-detail-content-info__title",children:"Population"}),Object(n.jsxs)("p",{className:"country-detail-content-info__value",children:[y," hab"]}),Object(n.jsx)("h3",{className:"country-detail-content-info__title",children:"Top level domain"}),Object(n.jsx)("p",{className:"country-detail-content-info__value",children:_[0].name})]})]})]}),Object(n.jsx)(o.b,{className:"country-detail-btn-edit",to:"/countries/edit/".concat(t.params.id),children:"Edit"})]})]})},N=a(73),C=Object(i.makeVar)([]),L=a(74),S=function(e){var t=e.label,a=e.name,c=Object(L.a)(e,["label","name"]);return Object(n.jsxs)("div",{className:"input-block",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",Object(l.a)({type:"text",id:a},c))]})},F=function(e){var t=e.country,a=e.handleEdit,i=Object(c.useState)(t.name),r=Object(j.a)(i,2),s=r[0],o=r[1],d=Object(c.useState)(t.flag.svgFile),u=Object(j.a)(d,2),b=u[0],O=u[1],h=Object(c.useState)(t.capital),m=Object(j.a)(h,2),p=m[0],x=m[1],f=Object(c.useState)(t.area),v=Object(j.a)(f,2),g=v[0],y=v[1],_=Object(c.useState)(t.population),N=Object(j.a)(_,2),C=N[0],L=N[1],F=Object(c.useState)(t.topLevelDomains[0].name),D=Object(j.a)(F,2),k=D[0],w=D[1];return Object(n.jsx)("div",{className:"country-edit-container","data-testid":"edit-container",children:Object(n.jsx)("main",{children:Object(n.jsx)("form",{className:"country-edit-form",onSubmit:function(e){e.preventDefault();var n=Object(l.a)(Object(l.a)({},t),{},{name:s,flag:Object(l.a)(Object(l.a)({},t.flag),{},{svgFile:b}),topLevelDomains:[Object(l.a)(Object(l.a)({},t.topLevelDomains[0]),{},{name:k})],capital:p,area:g,population:C});a(n)},children:Object(n.jsxs)("fieldset",{children:[Object(n.jsx)("legend",{children:"Details"}),Object(n.jsx)(S,{name:"flag",label:"Flag",value:b,onChange:function(e){O(e.target.value)},"data-testid":"edit-input-flag"}),Object(n.jsx)(S,{name:"name",label:"Name",value:s,onChange:function(e){o(e.target.value)},"data-testid":"edit-input-name"}),Object(n.jsx)(S,{name:"capital",type:"text",label:"Capital",value:p,onChange:function(e){x(e.target.value)},"data-testid":"edit-input-capital"}),Object(n.jsx)(S,{name:"area",label:"Area",value:g,type:"number",onChange:function(e){y(e.target.value)},"data-testid":"edit-input-area"}),Object(n.jsx)(S,{name:"population",type:"number",label:"Population",value:C,onChange:function(e){L(e.target.value)},"data-testid":"edit-input-population"}),Object(n.jsx)(S,{name:"topleveldomain",type:"text",label:"Top Level Domain",value:k,onChange:function(e){w(e.target.value)},"data-testid":"edit-input-topleveldomain"}),Object(n.jsx)("button",{type:"submit",children:"Save"})]})})})})},D=function(e){var t=e.match,a=e.history,r=Object(i.useLazyQuery)(x,{variables:{id:t.params.id}}),s=Object(j.a)(r,2),l=s[0],d=s[1],u=d.error,b=d.loading,O=d.data;if(Object(c.useEffect)((function(){l()}),[l]),b)return Object(n.jsx)("p",{children:"Loading..."});if(u)return Object(n.jsx)("p",{children:"Failed :("});if(void 0===O)return Object(n.jsx)("p",{children:"Loading..."});if(0===O.details.length)return Object(n.jsxs)("p",{children:["Country not found. Please try again. ",Object(n.jsx)("br",{}),Object(n.jsx)(o.b,{to:"/countries",children:"Voltar"})]});return Object(n.jsxs)("div",{"data-testid":"country-edit",children:[Object(n.jsx)(g,{hasSearch:!1}),Object(n.jsx)(F,{country:O.details,handleEdit:function(e){var t=C().map((function(t){return t._id===e._id?e:t}));C(Object(N.a)(t)),a.push("/countries")}})]})};var k=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{path:"/countries",exact:!0,component:y}),Object(n.jsx)(d.b,{path:"/countries/:id",exact:!0,render:function(e){var t=e.match;return Object(n.jsx)(_,{match:t})}}),Object(n.jsx)(d.b,{path:"/countries/edit/:id",render:function(e){return Object(n.jsx)(D,Object(l.a)({},e))}}),Object(n.jsx)(d.a,{to:"/countries"})]})})};var w=function(){var e=Object(i.useQuery)(m),t=e.loading,a=e.data;return t?Object(n.jsx)("p",{children:"Loading ..."}):(C(a.Country),Object(n.jsx)(k,{}))},E=new i.InMemoryCache({typePolicies:{Query:{fields:{list:{read:function(e,t){var a=t.variables;return C().filter((function(e){return e.name.toLowerCase().indexOf(a.term.toLowerCase())>=0}))}},details:{read:function(e,t){var a=t.variables,n=C().find((function(e){return e._id===a.id}));return n||[]}}}}}}),P=new i.ApolloClient({uri:"https://countries-274616.ew.r.appspot.com",cache:E});s.a.render(Object(n.jsx)(i.ApolloProvider,{client:P,children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.4b2dcb86.chunk.js.map