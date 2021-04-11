(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"ContactsListItem_button__3vTC2",item:"ContactsListItem_item__2rbH7"}},12:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__hirRZ"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(13),s=n(2),l=n(5),u=n(6),h=n(8),b=n(7),d=n(23),m=n(4),j=n(3),f=n.n(j),p=n(0),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onCheckUnique(t.state.name)||t.props.onSubmit(t.state),t.reset()},t.validateFrom=function(){},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:f.a.label,htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(p.jsxs)("label",{className:f.a.label,htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter phone number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(p.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),v=n(10),C=n.n(v),g=function(t){var e=t.id,n=t.name,a=t.number,c=t.onRemove;return Object(p.jsxs)("li",{className:C.a.item,children:[n," : ",a,Object(p.jsx)("button",{className:C.a.button,onClick:function(){return c(e)},children:"Remove"})]})},x=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)(g,Object(s.a)(Object(s.a)({},t),{},{onRemove:n}),t.id)}))})]})},S=n(12),_=n.n(S),y=function(t){var e=t.filter,n=t.onChange;return Object(p.jsxs)("label",{className:_.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},I=(n(20),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=Object(s.a)({id:Object(d.a)()},e);t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[n])}}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleCheckUniqueContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e}));if(n)return alert("Contact is already exist"),n},t.handleFilterChange=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact}),this.state.contacts.length>0&&Object(p.jsx)(y,{filter:e,onChange:this.handleFilterChange}),Object(p.jsx)(x,{contacts:t,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component));n(21);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"Form_form__1zSLL",button:"Form_button__LTyiV",label:"Form_label__3US3o"}}},[[22,1,2]]]);
//# sourceMappingURL=main.d881f5fb.chunk.js.map