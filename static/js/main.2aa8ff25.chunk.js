(this["webpackJsonpcrypto-tracker-app"]=this["webpackJsonpcrypto-tracker-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(7),o=n.n(a),i=n(5),s=n(4),d=(n(38),n(12)),l=n(3),u="FETCH_CRYPTO_LOADING",b="FETCH_CRYPTO_SUCCESS",j="FETCH_CRYPTO_FAIL",p="REMOVE_CRYPTO_TOKEN",O="ADD_CRYPTO_TOKEN",h="ADD_CRYPTO_FAIL",y={activeCount:0,error:null,loading:null,tokenList:[]},v=Object(s.combineReducers)({crypto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,r=[];switch(n){case u:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case b:return r=c.map((function(e){return{symbol:e.symbol,id:e.id,selected:!1}})),Object(l.a)(Object(l.a)({},e),{},{error:null,activeCount:0,loading:!1,tokenList:r});case j:return{tokenList:[],error:"Crypto data could not be fetched",activeCount:0,loading:!1};case O:var a=e.tokenList.findIndex((function(e){return e.symbol===c.symbol}));return(r=Object(d.a)(e.tokenList))[a]=Object(l.a)(Object(l.a)({},c),{},{selected:!0}),Object(l.a)(Object(l.a)({},e),{},{loading:!1,tokenList:r,activeCount:e.activeCount+1});case h:return Object(l.a)(Object(l.a)({},e),{},{error:"Crypto token data could not be added",loading:!1});case p:var o=e.tokenList.findIndex((function(e){return e.symbol===c}));return(r=Object(d.a)(e.tokenList))[o].selected=!1,Object(l.a)(Object(l.a)({},e),{},{loading:!1,tokenList:r,activeCount:e.activeCount-1});default:return e}}}),m=[n(23).a],x=Object(s.createStore)(v,{},s.applyMiddleware.apply(void 0,m)),f=(n(39),n(40),n(6)),k=n.n(f),C=n(11),g=n(24),L=n.n(g).a.create({baseURL:"https://www.stackadapt.com/coinmarketcap"}),_=function(e){return function(){var t=Object(C.a)(k.a.mark((function t(n){var c,r,a,o,i,s,d,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.get("/quotes?symbol=".concat(e));case 3:c=t.sent,r=c.data,a=r.data[e],o=a.id,i=a.cmc_rank,s=a.name,d=a.quote,l=null,d&&d.USD&&d.USD.price&&(l=d.USD.price),n({type:O,payload:{id:o,cmc_rank:i,name:s,symbol:e,price:l}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:h});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=Object(i.c)((function(e){return e.crypto})),t=Object(i.b)();Object(r.useEffect)((function(){t(function(){var e=Object(C.a)(k.a.mark((function e(t){var n,c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u}),e.prev=1,e.next=4,L.get("/map");case 4:for(n=e.sent,c=n.data,t({type:b,payload:c.data}),r=0;r<5;r++)t(_(c.data[r].symbol));e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:j});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var n=function(n,c){e.activeCount>1&&t({type:p,payload:c})},a=function(n){e.activeCount<10&&t(_(n.target.value))};return e.loading?Object(c.jsx)("div",{children:"Loading..."}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"select-container",children:[Object(c.jsx)("label",{htmlFor:"add-crypto",children:"Add Crypto Token"}),Object(c.jsxs)("select",{id:"add-crypto",value:"",onChange:a,children:[Object(c.jsx)("option",{value:"",children:"--add token--"}),e.tokenList.map((function(e){return!e.selected&&Object(c.jsx)("option",{value:e.symbol,children:e.symbol},e.id)}))]})]}),Object(c.jsx)("div",{className:"table-container",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Symbol"}),Object(c.jsx)("th",{children:"CMC Rank"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:e&&e.tokenList.map((function(t){return t.selected&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.symbol}),Object(c.jsx)("td",{children:t.cmc_rank}),Object(c.jsx)("td",{children:t.price}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(e){return n(0,t.symbol)},disabled:1===e.activeCount,children:"remove"})})]},t.id)}))})]})})]})};var w=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Crypto Price Tracker"}),Object(c.jsx)(T,{})]})};o.a.render(Object(c.jsx)(i.a,{store:x,children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.2aa8ff25.chunk.js.map