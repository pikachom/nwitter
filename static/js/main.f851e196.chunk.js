(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(27),i=n.n(a),s=n(6),u=n(17),o=n(5),j=n(7),b=n.n(j),l=n(11),d=n(19);n(35),n(47),n(48);d.a.initializeApp({apiKey:"AIzaSyClAPQFPr-lEymuARNqZEIV6caLFRSHFrU",authDomain:"nwitter-1781e.firebaseapp.com",projectId:"nwitter-1781e",storageBucket:"nwitter-1781e.appspot.com",messagingSenderId:"40186929426",appId:"1:40186929426:web:8c419f1503bd9d8cc6d3cb"});var O=d.a,p=d.a.auth(),h=d.a.firestore(),f=d.a.storage(),x=n(1),m=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),O=d[0],h=d[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),v=m[0],w=m[1],g=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},y=function(){var e=Object(l.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,p.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,p.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:g}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:g}),Object(x.jsx)("input",{type:"submit",value:O?"Create Account":"Log In"}),v]}),Object(x.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:O?"Log In":"Sign In"})]})},v=function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new O.auth.GoogleAuthProvider:"github"===n&&(r=new O.auth.GithubAuthProvider),e.next=4,p.signInWithPopup(r);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(x.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},w=n(22),g=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],O=j[1],p=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,f.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:i?Object(x.jsx)(x.Fragment,{children:n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:d,required:!0,onChange:function(e){var t=e.target.value;O(t)}}),Object(x.jsx)("input",{type:"submit",value:"Update Tweet"})]}),Object(x.jsx)("button",{onClick:m,children:"Cancel"})]})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:p,children:"Delete Tweet"}),Object(x.jsx)("button",{onClick:m,children:"Edit Tweet"})]})]})})},y=n(49),k=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],d=o[1],O=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,c,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return c=f.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=6,c.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:if(""===(u={text:a,createAt:Date.now(),creatorId:t.uid,attachmentUrl:r}).text){e.next=16;break}return e.next=14,h.collection("nweets").add(u);case 14:e.next=17;break;case 16:window.alert("\ube48 \ud2b8\uc717\uc740 \ubabb \uc62c\ub824\uc694");case 17:i(""),d("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:O,children:[Object(x.jsx)("input",{value:a,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(x.jsx)("input",{type:"submit",value:"Tweet"}),j&&Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:j,width:"50px",height:"50px"}),Object(x.jsx)("button",{onClick:function(){return d(null)},children:"Clear"})]})]})},S=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));t.sort((function(e,t){return t.createAt-e.createAt})),i(t)}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{userObj:t}),Object(x.jsx)("div",{children:a.map((function(e){return Object(x.jsx)(g,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=n.p+"static/media/smilecheese.5a49c4df.jpeg",I=function(e){var t=e.userObj;e.cheeseObj;return Object(x.jsxs)("nav",{children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(u.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsxs)(u.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})}),Object(x.jsx)("li",{children:Object(x.jsx)(u.b,{to:"/myTweets",children:"My Tweets"})})]}),Object(x.jsx)("img",{src:C,width:"190px",height:"340px"})]})},U=function(e){var t=e.refreshUser,n=e.userObj,c=Object(o.f)(),a=Object(r.useState)(n.displayName),i=Object(s.a)(a,2),u=i[0],j=i[1],d=function(){var e=Object(l.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:d,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:u}),Object(x.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(x.jsx)("button",{onClick:function(){p.signOut(),c.push("/")},children:"Log Out"})]})},A=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1],u=function(){var e=Object(l.a)(b.a.mark((function e(){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createAt","desc").get();case 2:n=e.sent,r=n.docs.map((function(e){return Object(w.a)({id:e.id},e.data())})),i(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(x.jsx)("div",{children:a.map((function(e){return Object(x.jsx)(g,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})},P=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(x.jsxs)(u.a,{children:[n&&Object(x.jsx)(I,{userObj:r}),Object(x.jsx)(o.c,{children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(S,{userObj:r})}),Object(x.jsx)(o.a,{exact:!0,path:"/profile",children:Object(x.jsx)(U,{userObj:r,refreshUser:t})}),Object(x.jsx)(o.a,{exact:!0,path:"/mytweets",children:Object(x.jsx)(A,{userObj:r,refreshUser:t})})]}):Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(v,{})})})]})};var F=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(s.a)(a,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){p.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(P,{refreshUser:function(){var e=p.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f851e196.chunk.js.map