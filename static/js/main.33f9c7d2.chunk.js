(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{27:function(e,t,n){},70:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(25),a=n.n(c),r=(n(27),n(36)),o=n(4),i=n(7),l=n(99),u=(n(70),n(53)),d=n(1);var j=function(e){var t=e.variant,n=e.heading,c=e.message,a=Object(s.useState)(!0),r=Object(o.a)(a,2),i=r[0],l=r[1],j=Object(s.useState)(null),m=Object(o.a)(j,2),b=m[0],h=m[1];return console.log(b),Object(s.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return h(e),function(){clearTimeout(b)}}),[]),Object(d.jsx)(u.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:i,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u.a.Heading,{children:n}),Object(d.jsx)("p",{className:"alert-body",children:c})]})})},m=n(54),b=n(50),h=n(65),p=n(13),O=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(p.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),g=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(d.jsx)(p.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),f=Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p.c,{to:"/",className:"nav-link",children:"Home"})}),x=Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p.c,{to:"/settings",className:"nav-link",children:"Settings"})}),v=function(e){var t=e.user;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b.a,{className:"color-nav",variant:"dark",expand:"md",children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(b.a.Brand,{children:Object(d.jsx)(p.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"metronome"})}),Object(d.jsx)(m.a,{className:"ms-auto",children:x}),Object(d.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(m.a,{className:"ms-auto",children:[t&&Object(d.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),f,t?O:g]})})]})})})},k=n(10),w=n.n(k),S=n(14),N="https://calm-scrubland-98993.herokuapp.com/",y="http://localhost:4741",C="localhost"===window.location.hostname?y:N,B=n(21),F=n.n(B),T=function(e,t,n){return F.a.post(C+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:n}})},I=function(e,t){return F.a.post(C+"/sign-in/",{credentials:{email:e,password:t}})},P=function(e){return F.a.delete(C+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},E=function(e,t,n){return F.a.patch(C+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(n.token)}})},q=n(9),A=n(34),U=function(e){var t=e.msgAlert,n=e.setUser,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],l=a[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),m=j[0],b=j[1],h=Object(s.useState)(""),p=Object(o.a)(h,2),O=p[0],g=p[1],f=Object(s.useState)(!1),x=Object(o.a)(f,2),v=x[0],k=x[1],N=function(){var e=Object(S.a)(w.a.mark((function e(s){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,T(r,m,O);case 4:return e.next=6,I(r,m);case 6:c=e.sent,n(c.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),k(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),b(""),g(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(q.a,{onSubmit:N,children:[Object(d.jsxs)(q.a.Group,{controlId:"email",children:[Object(d.jsx)(q.a.Label,{children:"Email address"}),Object(d.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"password",children:[Object(d.jsx)(q.a.Label,{children:"Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(d.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:O,type:"password",placeholder:"Confirm Password",onChange:function(e){return g(e.target.value)}})]}),Object(d.jsx)(A.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},M=function(e){var t=e.msgAlert,n=e.setUser,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],l=a[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),m=j[0],b=j[1],h=Object(s.useState)(!1),p=Object(o.a)(h,2),O=p[0],g=p[1],f=function(){var e=Object(S.a)(w.a.mark((function e(s){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,I(r,m);case 4:c=e.sent,n(c.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),g(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),b(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(q.a,{onSubmit:f,children:[Object(d.jsxs)(q.a.Group,{controlId:"email",children:[Object(d.jsx)(q.a.Label,{children:"Email address"}),Object(d.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"password",children:[Object(d.jsx)(q.a.Label,{children:"Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"password",value:m,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(A.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},L=function(e){var t=e.msgAlert,n=e.clearUser,c=e.user,a=Object(s.useState)(!1),r=Object(o.a)(a,2),l=r[0],u=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(c);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),n(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!c||l?Object(d.jsx)(i.a,{to:"/"}):""},_=function(e){var t=e.msgAlert,n=e.user,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],l=a[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),m=j[0],b=j[1],h=Object(s.useState)(!1),p=Object(o.a)(h,2),O=p[0],g=p[1],f=function(){var e=Object(S.a)(w.a.mark((function e(s){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,E(r,m,n);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),g(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),b(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!n||O?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Change Password"}),Object(d.jsxs)(q.a,{onSubmit:f,children:[Object(d.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(d.jsx)(q.a.Label,{children:"Old password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:r,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(d.jsx)(q.a.Label,{children:"New Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"newPassword",value:m,type:"password",placeholder:"New Password",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)(A.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(e){return Object(d.jsx)("span",{className:e.className,onClick:e.onClick,children:e.text})},D=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tempo-slider",children:[Object(d.jsx)(G,{className:"adjust decrease-tempo",text:"-",onClick:function(){e.decreaseTempo()}}),Object(d.jsx)("input",{type:"range",value:e.tempo,min:"20",max:"220",step:"1",className:"slider",onChange:function(){e.onChange()}}),Object(d.jsx)(G,{className:"adjust increase-tempo",text:"+",onClick:function(){e.increaseTempo()}})]})})},z=function(e){return Object(d.jsx)("span",{className:e.className,onClick:e.onClick,children:e.text})},H=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"bpm-display ",children:e.tempo}),Object(d.jsxs)("div",{className:"measures-count",children:[Object(d.jsx)(z,{className:"adjust stepper subtract-beats",text:"-",onClick:function(){e.decreaseBeats()}}),Object(d.jsxs)("span",{className:"beats-display",children:[" ",e.measures," "]}),Object(d.jsx)(z,{className:"adjust stepper add-beats",text:"+",onClick:function(){e.increaseBeats()}})]}),Object(d.jsx)("div",{className:"counter",children:Object(d.jsx)("div",{children:e.counter+1})})]})},J=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"bpm-display ",children:e.tempo})})},R=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:"start-stop",onClick:e.toggleTimer,children:e.total})})},W=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"notes-walk",children:[e.currentNote.toUpperCase()," ","-> ",e.randomNote.toUpperCase()]})})},Z=function(e){var t=Object(s.useState)(e.notesBucket[Math.floor(12*Math.random())]),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(e.notesBucket[Math.floor(12*Math.random())]),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(!0),m=Object(o.a)(j,2),b=m[0],h=m[1],p=Math.floor(Math.random()*e.notesBucket.length),O=["a","a#","b","c","c#","d","d#","e","f","f#","g","g#"];return console.log(""),Object(s.useEffect)((function(t){if(e.notesBucket.length>0)return e.counter%e.measures===0&&e.counter>0&&(b&&(h(!0),u(e.notesBucket[p]),a(l)),e.setCounter(0),console.log(e.measures),console.log(e.setNotesBucket),console.log(b),console.log(e.measures%e.setNotesBucket)),e.active&&(t=setInterval((function(){e.setTotal(e.total+1),e.setCounter(e.counter+1),console.log(e.tempo),console.log(60*e.tempo),console.log(e.setNotesBucket)}),6e4/e.tempo)),function(){clearInterval(t)}})),Object(s.useEffect)((function(){clearInterval(""),e.setCounter(0)}),[e.active]),Object(s.useEffect)((function(){console.log(undefined);var t=[];e.checkedState.map((function(e,n){return n++,e&&t.push(O[n-1]),O[n]})),console.log(t),e.setNotesBucket(t),console.log(e.notesBucket)}),[e.checkedState]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{counter:e.counter,measures:e.measures,currentNote:c,randomNote:l,setRandomNote:u}),Object(d.jsx)("div",{className:"notes",children:e.notesBucket.join(" ").toUpperCase()}),Object(d.jsx)("div",{children:Object(d.jsx)(J,{tempo:e.tempo})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{onChange:e.slideTempo,className:"tempo-settings",tempo:e.tempo,decreaseTempo:e.decreaseTempo,increaseTempo:e.increaseTempo})}),Object(d.jsx)("div",{children:Object(d.jsx)(H,{className:"measures",counter:e.counter,measures:e.measures,increaseBeats:e.increaseBeats,decreaseBeats:e.decreaseBeats})}),Object(d.jsx)("div",{children:Object(d.jsx)(R,{toggleTimer:e.toggleTimer,total:e.total,active:e.active})})]})},Y=function(){var e=Object(S.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(n),console.log(n.token),e.abrupt("return",F.a.post("".concat(C,"/presets"),{preset:{owner:n,measures:t.measures,tempo:t.tempo,name:t.name,notes:t.notes,checks:t.checks}},{headers:{Authorization:"Bearer ".concat(n.token)}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(S.a)(w.a.mark((function e(t,n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.id,F.a.patch("".concat(C,"/presets/").concat(s),{preset:{owner:n,measures:t.measures,tempo:t.tempo,name:t.name,notes:t.notes,checks:t.checks}},{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(e){console.log(e.data.notes)})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(S.a)(w.a.mark((function e(t,n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.id,F.a.delete("".concat(C,"/presets/").concat(s),{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(e){console.log(e.data.notes)})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(S.a)(w.a.mark((function e(t,n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.id,F.a.get("".concat(C,"/presets/").concat(s)).then((function(e){console.log(e.data.notes)})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(e){var t;Object(s.useEffect)((function(){n=e.presets}),[e.presets]);var n=null===(t=e.presets)||void 0===t?void 0:t.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t++,Object(d.jsxs)("option",{children:[t,". ",e[6][1],"_",e[5][1],"/",e[4][1],"_",e[1][1],"_",e[2][1]]},e._id)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("select",{id:"preset-dropdown",onChange:function(){return e.setPresetIndex(document.getElementById("preset-dropdown").selectedIndex)},children:[Object(d.jsx)("option",{hidden:!0,children:"Select A Preset"}),n]})},e.presets.length)})},$=function(e){var t=Object(s.useState)(1),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)([[["checks",[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]],["notes",["a/","a#/","b/","c/","c#/","d/","d#/","e/","f/","f#/","g/","g#/"]],["_id","622bfed04c5a29dcf7fa84a1"],["owner","622bb9e4831bd2aba0ca0d17"],["measures",4],["tempo",120],["name","default"],["createdAt","2022-03-12T02:00:48.921Z"],["updatedAt","2022-03-12T02:00:48.921Z"],["__v",0]]]),l=Object(o.a)(i,2),u=l[0],j=l[1],m=Object(s.useState)("default"),b=Object(o.a)(m,2),h=b[0],p=b[1];console.log([]),console.log(h);var O,g=["a","a#","b","c","c#","d","d#","e","f","f#","g","g#"];Object(s.useEffect)((function(){F.a.get("".concat(C,"/presets")).then((function(e){return f(e)})).catch(console.error)}),[]),console.log(O),Object(s.useEffect)((function(e){var t;return console.log("ran"),e=null===(t=u.name)||void 0===t?void 0:t.map((function(e){return Object(d.jsx)("li",{children:e},e)})),console.log(e),e})),console.log(O);var f=function(e){var t=e.data.preset;console.log(t),console.log(u),j([].concat(Object(r.a)(u),[Object.entries(t)])),console.log(u)},x=function(){var t=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.querySelector("#preset-dropdown").selectedIndex-1,e.setCheckedState(u[n][0][1]),e.setTempo(u[n][5][1]),e.setMeasures(u[n][4][1]),p(u[n][6][1]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[e.checkState];console.log("extractNotes");var s=[];return console.log(t),null===n||void 0===n||n.map((function(e,t){return t++,e&&s.push(g[t-1]+"/"),e})),s.splice(0,s.length-0)};return console.log(e.checkedState),console.log(g),Object(d.jsxs)(d.Fragment,{children:[O,Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(e.checkedState);var n={checks:e.checkedState,measures:e.measures,tempo:e.tempo,name:h,id:u[c-1][2][1],notes:v(e.checkedState),index:c};switch(e.user&&(n.owner=e.user.token),console.log(n),t.nativeEvent.submitter.name){case"post":Y(n,e.user).then((function(e){return f(e)})).catch(console.error);break;case"delete":0!==c&&Q(n,e.user).catch(console.error);break;case"load":0!==c&&x().then(V(n,e.user)).catch(console.error);break;case"edit":K(n,e.user).catch(console.error)}},children:[Object(d.jsx)("div",{children:g.map((function(t,n){t.name;return Object(d.jsxs)(d.Fragment,{children:[e.presets,Object(d.jsx)("input",{type:"checkbox",id:"custom-checkbox-".concat(n),name:g[n],value:g[n],checked:e.checkedState[n],onChange:function(){return function(t){var n=e.checkedState.map((function(e,n){return n===t?!e:e}));console.log(n),e.setCheckedState(n),console.log(n.length),console.log(e.checkedState[1])}(n,g[n])}},n),Object(d.jsxs)("label",{htmlFor:"custom-checkbox-".concat(n),children:[g[n].toUpperCase()," ",""]})]})}))}),Object(d.jsx)("b",{children:" select a preset "}),Object(d.jsx)(X,{extractNotes:v,presets:u,tempo:e.tempo,setPresetIndex:a}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{name:"load",type:"submit",children:"Load"}),Object(d.jsx)("button",{name:"edit",type:"submit",children:"Update"}),Object(d.jsx)("button",{name:"delete",type:"submit",children:"Delete"})]}),Object(d.jsx)("input",{id:"presetName",value:h,onChange:function(e){var t;e.nativeEvent.data?(t=h+e.nativeEvent.data,console.log(t)):t=h.substring(0,h.length-1),p(t)}}),Object(d.jsx)("button",{name:"post",type:"submit",children:"Save As"})]})]})},ee=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),u=Object(o.a)(a,2),m=u[0],b=u[1],h=Object(s.useState)(120),p=Object(o.a)(h,2),O=p[0],g=p[1],f=Object(s.useState)(4),x=Object(o.a)(f,2),k=x[0],w=x[1],S=Object(s.useState)(0),N=Object(o.a)(S,2),y=N[0],C=N[1],B=Object(s.useState)([!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]),F=Object(o.a)(B,2),T=F[0],I=F[1],P=Object(s.useState)(0),E=Object(o.a)(P,2),q=E[0],A=E[1],G=Object(s.useState)(["a","a#","b","c","c#","d","d#","e","f","f#","g","g#"]),D=Object(o.a)(G,2),z=D[0],H=D[1],J=Object(s.useState)(1),R=Object(o.a)(J,2),W=R[0],Y=R[1];console.log(w),console.log(g);var K=function(e){var t=e.heading,n=e.message,s=e.variant,c=Object(l.a)();b((function(e){return[].concat(Object(r.a)(e),[{heading:t,message:n,variant:s,id:c}])}))},Q=document.querySelector(".tempo");console.log(Q);var V=document.querySelector(".tempo-text");console.log(V);var X=document.querySelector(".decrease-tempo");console.log(X);var ee=document.querySelector(".increase-tempo-button");console.log(ee);var te=document.querySelector(".slider");console.log(te);var ne=document.querySelector(".start-stop-button");console.log(ne);var se=document.querySelector(".subtract-beats");console.log(se);var ce=document.querySelector(".bpm-display");console.log(ce);console.log({but:"that"});var ae=document.querySelector(".beats-display");console.log(ae);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{user:n}),m.map((function(e){return Object(d.jsx)(j,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/sign-up",element:Object(d.jsx)(U,{msgAlert:K,setUser:c})}),Object(d.jsx)(i.b,{path:"/sign-in",element:Object(d.jsx)(M,{msgAlert:K,setUser:c})}),Object(d.jsx)(i.b,{path:"/sign-out",element:Object(d.jsx)(L,{msgAlert:K,clearUser:function(){return c(null)},user:n})}),Object(d.jsx)(i.b,{path:"/change-password",element:Object(d.jsx)(_,{msgAlert:K,user:n})}),Object(d.jsx)(i.b,{className:"presets",path:"/settings",element:Object(d.jsx)($,{user:n,measures:k,setMeasures:w,notesBucket:z,tempo:O,setTempo:g,counter:W,setCheckedState:I,checkedState:T})})]})}),Object(d.jsxs)("div",{className:"parent",children:[T,Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(Z,{className:"metronome",setTempo:g,setMeasures:w,tempo:O,measures:k,decreaseTempo:function(){if(O<20)return!0;g((function(e){return e-1}))},increaseTempo:function(){if(O>240)return!0;g((function(e){return e+1}))},increaseBeats:function(){if(k>=8)return!0;w((function(e){return e+1}))},decreaseBeats:function(){if(k<=2)return!0;w((function(e){return e-1}))},slideTempo:function(){g(parseInt(te.value))},toggleTimer:function(){var e=y;switch(y){case 0:e=1;break;default:e=0}C(e),A(0)},user:n,counter:W,setCounter:Y,notesBucket:z,setNotesBucket:H,checkedState:T,setCheckedState:I,total:q,setTotal:A,active:y})})]})]})},te=Object(d.jsx)(p.a,{basename:"/metronome-client",children:Object(d.jsx)(ee,{})});a.a.render(te,document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.33f9c7d2.chunk.js.map