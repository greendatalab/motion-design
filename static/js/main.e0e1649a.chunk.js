(this["webpackJsonpframer-motion"]=this["webpackJsonpframer-motion"]||[]).push([[0],{157:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(137),r=a.n(c),o=a(55),s=a(291),u=a(290),d=a(292),j=(a(157),a(286)),l=a(287),b=a(288),p=a(108),m=a.n(p),O=a(138),f=a(150),x=a(4),v=function(e){var t=e.chartData;return Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{data:t,options:{plugins:{title:{display:!0,text:"Cryptocurrency prices"},legend:{display:!0,position:"bottom"}}}})})};function h(){Object(i.useEffect)((function(){(function(){var e=Object(O.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coincap.io/v2/assets/?limit=5");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n({labels:a.data.map((function(e){return e.name})),datasets:[{label:"Price in USD",data:a.data.map((function(e){return e.priceUsd})),backgroundColor:["#ffbb11","#ecf0f1","#50AF95","#f3ba2f","#2a71d0"]}]});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var e=Object(i.useState)({}),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(v,{chartData:a})})}var y=[{id:0,title:"Item 1",description:"Descri\xe7ao bolada sobre o item, que vai ser um pouco maior que o usual",icon:Object(x.jsx)(j.a,{})},{id:1,title:"Item 2",description:"Descri\xe7ao bolada sobre o item, que vai ser um pouco maior que o usual",icon:Object(x.jsx)(l.a,{})},{id:2,title:"Item 3",description:"Descri\xe7ao bolada sobre o item, que vai ser um pouco maior que o usual",icon:Object(x.jsx)(b.a,{}),chart:Object(x.jsx)(h,{})}],g=a(289);function q(){return Object(x.jsx)(s.a,{children:Object(x.jsx)(u.a.ul,{layout:!0,initial:{borderRadius:25},children:y.map((function(e){return Object(x.jsx)(D,{event:e},e.id)}))})})}function D(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1];return Object(x.jsxs)(u.a.li,{layout:!0,onClick:function(){return c(!n)},initial:{borderRadius:10},whileHover:{scale:1.02,transition:{duration:.3}},children:[Object(x.jsxs)(u.a.div,{className:"itemHeader",children:[Object(x.jsx)(u.a.div,{layout:!0,children:e.event.icon}),Object(x.jsx)(u.a.div,{className:"itemTitle",layout:!0,children:e.event.title})]}),Object(x.jsx)(d.a,{children:n&&Object(x.jsx)(k,{description:e.event.description,chart:e.event.chart})})]})}function k(e){return Object(x.jsxs)(u.a.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(x.jsx)(g.a,{variant:"body1",children:e.description}),e.chart]})}var w,I=a(145),N=a(146),S=Object(N.a)(w||(w=Object(I.a)(["\n* {\n    font-family: 'Helvetica Neue';\n    margin: 0;\n    padding: 0;\n}\n"])));var C=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)(q,{})]})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.e0e1649a.chunk.js.map