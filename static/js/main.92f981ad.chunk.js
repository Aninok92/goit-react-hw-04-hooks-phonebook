(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__2vOqJ",labelText:"Filter_labelText__3MyA-",input:"Filter_input__vf463"}},12:function(e,t,n){e.exports={item:"ContactList_item__1TlHv"}},13:function(e,t,n){e.exports={section:"Section_section__18FWb",title:"Section_title__4Oz_r"}},16:function(e,t,n){e.exports={Container:"Container_Container__1A9B8"}},17:function(e,t,n){e.exports={button:"ButtonTypeButton_button__OCuq5"}},25:function(e,t,n){},3:function(e,t,n){e.exports={button:"ContactForm_button__30QzL",label:"ContactForm_label__7BxyA",labelText:"ContactForm_labelText__2Lomr",input:"ContactForm_input__1INw5"}},35:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(15),o=n.n(r),s=(n(24),n(25),n(14)),i=n(4),l=n(6),u=n.n(l),b=n(16),m=n.n(b),j=n(1),d=function(e){var t=e.children;return Object(j.jsx)("div",{className:m.a.Container,children:t})},p=n(3),h=n.n(p);var x=function(e){var t=e.contacts,n=e.onSubmit,c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),m=b[0],d=b[1],p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}},x=function(){s(""),d("")},O=u.a.generate(),f=u.a.generate();return Object(j.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault();var a=o.toLowerCase();if(t.some((function(e){return e.name.toLowerCase()===a||e.number===m})))return alert("Contact with such ".concat(o," name or ").concat(m," number is already in Phonebook")),void x();n(o,m),x()},children:[Object(j.jsxs)("label",{className:h.a.label,htmlFor:O,children:[Object(j.jsx)("span",{className:h.a.labelText,children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:o,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:O})]}),Object(j.jsxs)("label",{className:h.a.label,htmlFor:f,children:[Object(j.jsx)("span",{className:h.a.labelText,children:"Number"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:m,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:f})]}),Object(j.jsx)("button",{type:"submit",className:h.a.button,children:"Add Contact"})]})},O=n(17),f=n.n(O),_=function(e){var t=e.children,n=e.onClick;return Object(j.jsx)("button",{type:"button",className:f.a.button,onClick:n,children:t})};_.defaultProps={onClick:function(){return null},children:null};var v=_,C=n(18),N=n(9),g=n.n(N),w=function(e){var t=e.name,n=e.number;return Object(j.jsxs)("div",{className:g.a.wrapper,children:[Object(j.jsx)(C.a,{size:"28",fill:"#87CEEB"}),Object(j.jsx)("p",{className:g.a.contact,children:t}),Object(j.jsx)("p",{className:g.a.contact,children:n})]})},S=n(19),k=n(12),y=n.n(k),A=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:y.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsxs)("li",{className:y.a.item,children:[Object(j.jsx)(w,{name:a,number:c}),Object(j.jsxs)(v,{onClick:function(){return n(a)},children:[Object(j.jsx)(S.a,{})," Delete"]})]},t)}))})},F=n(10),T=n.n(F),z=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:T.a.label,children:[Object(j.jsx)("span",{className:T.a.labelText,children:"Find contacts by name"}),Object(j.jsx)("input",{className:T.a.input,type:"text",value:t,onChange:n})]})},B=n(13),L=n.n(B),q=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:L.a.section,children:[Object(j.jsx)("h2",{className:L.a.title,children:t}),n]})};var I=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),o=Object(i.a)(r,2),l=o[0],b=o[1];Object(a.useEffect)((function(){console.log("contacts useeffect"),window.localStorage.setItem("contacts",JSON.stringify(l))}),[l]);var m=function(){var e=n.toLowerCase();return l.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(d,{children:[Object(j.jsx)(q,{title:"Phonebook",children:Object(j.jsx)(x,{onSubmit:function(e,t){var n,a={id:u.a.generate(),name:e,number:t};b([a].concat(Object(s.a)(l))),(n=console).log.apply(n,[a].concat(Object(s.a)(l)))},contacts:l})}),Object(j.jsxs)(q,{title:"Contacts",children:[Object(j.jsx)(z,{value:n,onChange:function(e){c(e.currentTarget.value)}}),Object(j.jsx)(A,{contacts:m,onDeleteContact:function(e){b(l.filter((function(t){return t.name!==e})))}})]})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={wrapper:"ContactItem_wrapper__3qMMd",contact:"ContactItem_contact__3TA3q"}}},[[35,1,2]]]);
//# sourceMappingURL=main.92f981ad.chunk.js.map