(this.webpackJsonpempdir=this.webpackJsonpempdir||[]).push([[0],{23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(20),m=t.n(r),c=(t(28),t(29),t(4)),o=t(5),s=t(7),i=t(6),u=t(8),d=t(12),p=t(10),E=t(13),g=(t(30),t(31),t(32),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(i.a)(a).call(this))).state={err_firstName:"",err_middleName:"",err_lastName:"",err_dob:""},console.log("Constructor Loaded"),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount Loaded")}},{key:"handleSubmit",value:function(e){e.preventDefault();var a={firstName:this.refs.firstName.value,middleName:this.refs.middleName.value,lastName:this.refs.lastName.value};console.log("formValues = ",a)}},{key:"dateChange",value:function(e){var a=e.currentTarget.value;console.log("value = ",a)}},{key:"onlyAlpha",value:function(e){var a=e.which||e.keyCode,t=e.currentTarget.value;return console.log("value = ",t),console.log("charCode = ",e.keyCode),a>=65&&a<=90||8===a||9===a||37===a||39===a||46===a||(e.preventDefault(),!1)}},{key:"required",value:function(e){e.preventDefault();var a=e.currentTarget.value.trim(),t=e.currentTarget.name;a.length?this.setState(Object(E.a)({},"err_"+t,"")):this.setState(Object(E.a)({},"err_"+t,"This field is required"))}},{key:"isEmail",value:function(e){var a=e.currentTarget.value,t=e.currentTarget.name,l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a);a.length?l?this.setState(Object(E.a)({},"err_"+t,"")):this.setState(Object(E.a)({},"err_"+t,"Email Format is Wrong")):this.setState(Object(E.a)({},"err_"+t,"This field is required"))}},{key:"isPhoneNumber",value:function(e){var a=e.currentTarget.value,t=(e.currentTarget.name,(""+a).replace(/\D/g,""));console.log("phone = ",t);var l=t.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);return l?[l[1]?"+1 ":"","(",l[2],") ",l[3],"-",l[4]].join(""):null}},{key:"selectChange",value:function(e){var a=e.currentTarget.value;e.currentTarget.name;console.log("value = ",a)}},{key:"render",value:function(){return console.log("render Loaded"),n.a.createElement("section",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"pageTitle col-lg-12 col-md-12 col-sm-12 col-xs-12"},"Employee form")),n.a.createElement("form",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 empform"},n.a.createElement("div",{className:"formRow col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstName"}," First Name ",n.a.createElement("span",{className:"asterik"},"*")," "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"text",className:"form-control",name:"firstName",ref:"firstName",maxLength:"20",onKeyDown:this.onlyAlpha.bind(this),onBlur:this.required.bind(this)})),this.state.err_firstName?n.a.createElement("span",{className:"errMsg"}," ",this.state.err_firstName," "):null)),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"middleName"}," Middle Name "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"text",className:"form-control",name:"middleName",ref:"middleName",onKeyDown:this.onlyAlpha.bind(this),onBlur:this.required.bind(this)})),this.state.err_middleName?n.a.createElement("span",{className:"errMsg"}," ",this.state.err_middleName," "):null)),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"}," Last Name "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"text",className:"form-control",name:"lastName",ref:"lastName",onKeyDown:this.onlyAlpha.bind(this),onBlur:this.required.bind(this)})),this.state.err_lastName?n.a.createElement("span",{className:"errMsg"}," ",this.state.err_lastName," "):null))),n.a.createElement("div",{className:"formRow col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"dob"}," DoB "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"date",className:"form-control",name:"dob",ref:"dob",onChange:this.dateChange.bind(this),onBlur:this.required.bind(this)})),this.state.err_dob?n.a.createElement("span",{className:"errMsg"}," ",this.state.err_dob," "):null)),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"}," Email "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"email",className:"form-control",name:"email",ref:"email",onBlur:this.isEmail.bind(this)})),this.state.err_email?n.a.createElement("span",{className:"errMsg"}," ",this.state.err_email," "):null)),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"phone"}," Phone "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"text",className:"form-control",name:"phone",ref:"phone",onBlur:this.isPhoneNumber.bind(this)}))))),n.a.createElement("div",{className:"formRow col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"heducation"}," Highest Education "),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("select",{className:"form-control",name:"heducation",ref:"heducation",onChange:this.selectChange.bind(this)},n.a.createElement("option",null," 10th "),n.a.createElement("option",null," 12th "),n.a.createElement("option",null," Diploma "),n.a.createElement("option",null," Bachelors Degree "),n.a.createElement("option",null," Masters Degree "),n.a.createElement("option",null," PhD "))))),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gender"}," Gender ")," ",n.a.createElement("br",null),n.a.createElement("input",{type:"radio",name:"gender",ref:"gender"})," Male  \xa0\xa0\xa0\xa0",n.a.createElement("input",{type:"radio",name:"gender",ref:"gender"})," Female")),n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gender"}," Pincode ")," ",n.a.createElement("br",null),n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-addon"}," ",n.a.createElement("i",{className:"fa fa-user"}," ")," "),n.a.createElement("input",{type:"number",className:"form-control",name:"pincode",ref:"pincode"}))))),n.a.createElement("div",{className:"formRow col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"field col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"}," Languages "),"  ",n.a.createElement("br",null),n.a.createElement("div",{className:"field col-lg-6 col-md-6 col-sm-6 col-xs-6"},n.a.createElement("input",{type:"checkbox",name:"Marathi",ref:"Marathi"})," Marathi  ",n.a.createElement("br",null),n.a.createElement("input",{type:"checkbox",name:"Hindi",ref:"Hindi"}),"     Hindi    ",n.a.createElement("br",null),n.a.createElement("input",{type:"checkbox",name:"English",ref:"English"})," English  ",n.a.createElement("br",null)),n.a.createElement("div",{className:"field col-lg-6 col-md-6 col-sm-6 col-xs-6"},n.a.createElement("input",{type:"checkbox",name:"Gujrati",ref:"Gujrati"})," Gujrati  ",n.a.createElement("br",null),n.a.createElement("input",{type:"checkbox",name:"Punjabi",ref:"Punjabi"})," Punjabi  ",n.a.createElement("br",null),n.a.createElement("input",{type:"checkbox",name:"Kannada",ref:"Kannada"})," Kannada  ",n.a.createElement("br",null)))),n.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8 col-xs-8"},n.a.createElement("button",{className:"btn btn-primary col-lg-4 subButton pull-right",onClick:this.handleSubmit.bind(this)}," Submit ")))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("getDerivedStateFromProps Loaded"),null}}]),a}(l.Component)),h=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.match.params;return console.log("params = ",e),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"pageTitle col-lg-12 col-md-12 col-sm-12 col-xs-12"},"Employee Profile"),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("h1",null," Employee Id : ",e.empid,"  ")))}}]),a}(l.Component);t(33),t(34);var f=function(e){var a="";return a="Manager"===e.empDetails.grade?"mngBg":"",n.a.createElement("div",{className:"block "+a},n.a.createElement("img",{src:"images/"+e.empDetails.image,className:"userPic",alt:e.empDetails.image}),n.a.createElement("div",{className:"leftBox"},n.a.createElement("div",{className:"empAttr"}," Name: ",e.empDetails.name," "),n.a.createElement("div",{className:"empAttr"}," Phone: ",e.empDetails.phone," "),n.a.createElement("div",{className:"empAttr"}," Email: ",e.empDetails.email," ")),n.a.createElement("div",{className:"rightBox"},n.a.createElement("div",{className:"empAttr"}," Grade:  ",e.empDetails.grade," "),n.a.createElement("div",{className:"empAttr"}," Dept:  ",e.empDetails.dept," "),n.a.createElement("div",{className:"empAttr"}," Degree:  ",e.empDetails.degree," ")))},N=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"empDetails",value:function(){return[{name:"Priya",phone:"+91-9838123823",email:"priya@gmail.com",PAN:"0920192393299",aadhar:"1234 5994 9392",degree:"BE Computer Science",grade:"Manager",dept:"IT Department",image:"priya.png"},{name:"Shankar",phone:"+1-239 123 8929",email:"shankar@gmail.com",PAN:"0920192393299",aadhar:"1234 5994 9392",degree:"BE Computer Science",grade:"A",dept:"IT Department",image:"shankar.jpeg"},{name:"Jyoti",phone:"+44-239 123 8929",email:"Jyoti@gmail.com",PAN:"0920192393299",aadhar:"1234 5994 9392",degree:"BE Computer Science",grade:"A",dept:"IT Department",image:"jyoti.jpeg"},{name:"Sunita",phone:"+21-239 123 8929",email:"Sunita@gmail.com",PAN:"0920192393299",aadhar:"1234 5994 9392",degree:"BE Computer Science",grade:"A",dept:"IT Department",image:"sunita.jpeg"},{name:"Prince",phone:"+123-239 123 8929",email:"Prince@gmail.com",PAN:"0920192393299",aadhar:"1234 5994 9392",degree:"BE Computer Science",grade:"A",dept:"IT Department",image:"prince.jpg"}]}},{key:"render",value:function(){var e=this.empDetails();return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("h1",null," Employee List "),e.length>0?e.map((function(e,a){return n.a.createElement(f,{key:a,empDetails:e})})):n.a.createElement("h1",null," Sorry... I don't see any Data ")))}}]),a}(l.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("h1",null," Home Page "),n.a.createElement("p",null,"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum")))}}]),a}(l.Component);t(35);function b(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("img",{src:"images/pagenotfound.jpg",className:"pagenotfound",alt:"pagenotfound"})))}t(36);var y=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 headerBar"})))};t(37);var x=function(){return n.a.createElement("aside",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 leftSideBar"},n.a.createElement("ul",{className:"leftmenu"},n.a.createElement("li",null," ",n.a.createElement(d.b,{to:"/"}," Home ")," "),n.a.createElement("li",null," ",n.a.createElement(d.b,{to:"/empform"}," Employee Form ")," "),n.a.createElement("li",null," ",n.a.createElement(d.b,{to:"/emplist"}," Employee List ")," ")))))};t(43);var j=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBar"})))},D=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement(y,null)),n.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2 xs-hidden"},n.a.createElement(x,null)),n.a.createElement("div",{className:"col-lg-10 col-md-10 col-sm-10 col-xs-12 mainContent"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 page"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",component:v}),n.a.createElement(p.a,{exact:!0,path:"/empform",component:g}),n.a.createElement(p.a,{exact:!0,path:"/empprofile/:empid",component:h}),n.a.createElement(p.a,{exact:!0,path:"/emplist",component:N}),n.a.createElement(p.a,{component:b})))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement(j,null))))}}]),a}(l.Component);var k=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0e2cd9c1.chunk.js.map