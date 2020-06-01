(this["webpackJsonpdiary-app"]=this["webpackJsonpdiary-app"]||[]).push([[0],{13:function(e,a,t){},43:function(e,a,t){e.exports=t(60)},48:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l),i=(t(48),t(62)),c=t(7),o=t(8),u=t(10),m=t(9),d=t(63),p=t(64),h=t(65),E=t(66),v=t(67),b=(t(13),t(12)),f=Object(b.a)();var g=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{bg:"dark",variant:"dark"},r.a.createElement(E.a.Brand,{href:" "},r.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","Online Diary APP",r.a.createElement(v.a,{className:"header-login",variant:"primary",onClick:function(){return f.push("/login")}},"LOG IN"))))};var w=Object(i.d)((function(){return r.a.createElement("div",{className:"Landing-buttons"},r.a.createElement(v.a,{className:"button",variant:"Primary",size:"lg",onClick:function(){return f.push("/login")}},"LOG IN"),r.a.createElement(v.a,{className:"button",variant:"Primary",size:"lg",onClick:function(){return f.push("/signup")}},"SIGN UP"))})),y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Landing-page"},r.a.createElement(g,null),r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null," The Online Diary App"),r.a.createElement("p",null," Preserve your memories for the future Using the Online Diary App. ")),r.a.createElement("div",null,r.a.createElement(w,null))))))}}]),t}(n.Component),O=Object(i.d)(y);var j=function(){return r.a.createElement("div",{className:"NavbarLogin"},r.a.createElement(E.a,{bg:"dark",variant:"dark"},r.a.createElement(E.a.Brand,{href:"/"},"Online Diary APP")))},C=t(26),k=t(18),N=t.n(k),S=t(27),P=t(14),I=t(21),A=t.n(I);t(54),t(57);A.a.initializeApp({apiKey:'"AIzaSyBopzdVUI0Nj5p4MBO8xUBwdWS-4BpEN-E",',authDomain:'"online-diary-app-5484e.firebaseapp.com",',databaseURL:'"https://online-diary-app-5484e.firebaseio.com",',projectId:'"online-diary-app-5484e",',storageBucket:'"online-diary-app-5484e.appspot.com",',messagingSenderId:'"664842823898",',appId:'"1:664842823898:web:611fac2c3160b2c8549de3",',measurementId:"G-ZEY7X815JM"});var U=A.a.auth(),x=(A.a.firestore(),A.a,function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=function(){var e=Object(S.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("you have logged in successfully"+n.state.username),e.prev=1,e.next=4,U.signInWithEmailAndPassword(a,n.state.email,n.state.password);case 4:t=e.sent,t.user,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),n.state={email:"",password:"",error:null},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(P.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login-form"},r.a.createElement("h2",null,"LOG IN"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,name:"email",type:"email",placeholder:"Email",value:this.state.email,required:!0}),r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",placeholder:"Password",value:this.state.password,required:!0}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null," Do not have an account? ",r.a.createElement(v.a,{className:"button-form",variant:"Primary",size:"lg",onClick:function(){return f.push("/signup")}},"SIGN UP")," "))}}]),t}(n.Component)),B=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-page"},r.a.createElement(j,null),r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(x,null))))))}}]),t}(n.Component),L=Object(i.d)(B),z={username:"",email:"",password:"",confirmpassword:"",usernameError:"",emailError:"",passwordError:"",confirmpasswordError:"",error:null},D=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).validate=function(){var e="",a="",t="",r="";return n.state.username||(e="name cannot be blank"),/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.state.email)||(a="Please enter a valid email address"),/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(n.state.password)||(t="password should contain at least one Uppercase, lowercase letter and one special character"),n.state.password!==n.state.confirmpassword&&(r="password does not match"),!(a||e||t||r)||(n.setState({emailError:a,usernameError:e,passwordError:t,confirmpasswordError:r}),!1)},n.handleSubmit=function(){var e=Object(S.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n.validate()&&(console.log(n.state),alert("Registration Successful")),e.prev=3,e.next=6,U.createUserWithEmailAndPassword(a,n.state.email,n.state.password);case 6:t=e.sent,t.user,n.setState(z),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}(),n.state=z,n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(P.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"SignUp-form"},r.a.createElement("h2",null,"SIGN UP"),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("label",null,"Username"),r.a.createElement("input",{onChange:this.handleChange,name:"username",value:this.state.username}),r.a.createElement("div",{className:"Error-message"},this.state.usernameError),r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{onChange:this.handleChange,name:"email",value:this.state.email}),r.a.createElement("div",{className:"Error-message"},this.state.emailError),r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",value:this.state.password}),r.a.createElement("div",{className:"Error-message"},this.state.passwordError),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{onChange:this.handleChange,name:"confirmpassword",type:"password",value:this.state.confirmpassword}),r.a.createElement("div",{className:"Error-message"},this.state.confirmpasswordError),r.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),t}(n.Component),G=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-page"},r.a.createElement(j,null),r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(D,null))))))}}]),t}(n.Component);n.Component;var W=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:O}),r.a.createElement(i.a,{path:"/login",component:L}),r.a.createElement(i.a,{path:"/signup",component:G}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(59);s.a.render(r.a.createElement(i.b,{history:f},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.2194613f.chunk.js.map