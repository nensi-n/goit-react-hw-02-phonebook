(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=(n(17),n(2)),o=n(10),u=n(12),l=n(4),b=n(5),d=n(7),h=n(6),m=(n(18),n(19),n(0)),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.handleSubmite=function(t){t.preventDefault(),e.props.onSubmite(e.state),e.setState({name:"",number:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{id:"contact",onSubmit:this.handleSubmite,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Name:"}),Object(m.jsx)("input",{className:"input-field",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Number:"}),Object(m.jsx)("input",{className:"input-field",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",className:"submit-button",children:"Add contact"})]})}}]),n}(c.a.Component),f=j;n(21);var p=function(e){var t=e.contacts,n=e.onDelete;return Object(m.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:["Name: ",e.name]}),Object(m.jsxs)("p",{children:["Number: ",e.number]}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},O=(n(22),function(e){var t=e.children;return Object(m.jsx)("div",{className:"container",children:t})}),v=n(11),x=n.n(v);n(31);var C=function(e){var t=e.value,n=e.onChange;return Object(m.jsx)("input",{type:"text",name:"filter",onChange:n,value:t})};var g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleSubmiteForme=function(t){e.state.contacts.some((function(e){return e.name===t.name}))?alert("Contact alredy exists"):e.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[Object(o.a)({id:x.a.generate()},t)])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleChangeFilter=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(O,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{onSubmite:this.handleSubmiteForme}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:this.state.filter,onChange:this.handleChangeFilter}),Object(m.jsx)(p,{onDelete:this.removeContact,contacts:(e=this.state.contacts,t=this.state.filter,e.filter((function(e){return e.name.toLowerCase().includes(t.trim().toLowerCase())})))})]});var e,t}}]),n}(c.a.Component),S=g;i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.51c59aee.chunk.js.map