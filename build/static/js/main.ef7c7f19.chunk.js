(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(41)},18:function(e,n,t){},20:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),u=t.n(r),l=(t(18),t(2)),c=(t(20),t(3)),i=t.n(c),m="/api/people",s=function(){return i.a.get(m).then(function(e){return e.data})},f=function(e){return i.a.post(m,e).then(function(e){return e.data})},d=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},v=function(e){return i.a.delete("".concat(m,"/").concat(e)).then("Successfully deleted")},E=function(e){return null===e.id?o.a.createElement("div",null):o.a.createElement("div",null,o.a.createElement("li",null,e.name," ",e.number," ",o.a.createElement("button",{onClick:function(){return e.removePerson(e.id)}},"poista")))},h=function(e){return o.a.createElement("form",null,o.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4",o.a.createElement("input",{value:e.newShowCriteria,onChange:e.showListener})))},w=function(e){return o.a.createElement("div",null,o.a.createElement("h3",null,"lis\xe4\xe4 uusi"),o.a.createElement("form",{onSubmit:e.addPerson},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:e.newName,onChange:e.nameListener})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:e.newNumber,onChange:e.numberListener})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))))},b=function(e){var n=e.personsToShow,t=e.removePerson;return o.a.createElement("div",null,o.a.createElement("h2",null,"Numerot"),o.a.createElement("ul",null,n.map(function(e){return o.a.createElement(E,{key:e.id,name:e.name,number:e.number,removePerson:t,id:e.id})})))},g=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error-notification"},n)},p=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"notification"},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),c=Object(l.a)(u,2),i=c[0],m=c[1],E=Object(a.useState)(""),j=Object(l.a)(E,2),O=j[0],S=j[1],k=Object(a.useState)(""),L=Object(l.a)(k,2),P=L[0],C=L[1],N=Object(a.useState)(!0),y=Object(l.a)(N,2),T=y[0],B=y[1],H=Object(a.useState)(null),J=Object(l.a)(H,2),W=J[0],x=J[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),$=I[0],q=I[1];Object(a.useEffect)(function(){s().then(function(e){r(e)})},[]);var z=T?t:t.filter(function(e){return e.name.toLowerCase().includes(P.toLowerCase())});return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(p,{message:W}),o.a.createElement(g,{message:$}),o.a.createElement(h,{newShowCriteria:P,showListener:function(e){console.log(e.target.value),C(e.target.value),""===e.target.value?B(!0):B(!1)}}),o.a.createElement(w,{addPerson:function(e){e.preventDefault();var n={name:i,number:O};if(t.map(function(e){return e.name}).includes(i)){var a=t.filter(function(e){return e.name===i})[0];window.confirm("".concat(i," on jo luettelossa, korvataanko vanha numero uudella?"))&&(console.log(a,a.id,n),function(e,n){d(e,n).then(function(a){r(t.map(function(n){return n.id!==e?n:a})),m(""),S(""),x("P\xe4ivitettiin henkil\xf6n ".concat(n.name," tiedot.")),setTimeout(function(){x(null)},5e3)}).catch(function(a){r(t.filter(function(n){return n.id!==e})),q("Henkil\xf6 ".concat(n.name," oli poistettu")),x(null),setTimeout(function(){q(null)},5e3)})}(a.id,n))}else f(n).then(function(e){console.log(e),r(t.concat(e)),m(""),S("")}),x("Lis\xe4ttiin ".concat(n.name))},newName:i,nameListener:function(e){console.log(e.target.value),m(e.target.value)},newNumber:O,numberListener:function(e){console.log(e.target.value),S(e.target.value)}}),o.a.createElement(b,{personsToShow:z,removePerson:function(e){console.log(e);var n=t.find(function(n){return n.id===e});console.log(n),window.confirm("Poistetaanko ".concat(n.name,"?"))&&(v(e).then(r(t.filter(function(n){return n.id!==e}))),x("Henkil\xf6 ".concat(n.name," poistettu")))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.ef7c7f19.chunk.js.map