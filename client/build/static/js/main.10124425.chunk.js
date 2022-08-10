(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a,r,o,c,s,i=n(0),l=n.n(i),d=n(45),u=n.n(d),j=(n(108),n(109),n(35)),b=n(100),h=n(137),O=n(138),m=n(133),p=n(98),x=n(62),g=n(10),v=n(50),k=n(22),f=n(38),w=n(12),S=n(126),y=n(127),I=n(136),C=n(96),B=n(128),F=n(129),T=n(142),L=n(23),_=n(24),D=n(84),N=n.n(D),$=new(function(){function e(){Object(L.a)(this,e)}return Object(_.a)(e,[{key:"getProfile",value:function(){return N()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){try{return N()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},E=n(125),P=n(51),G=n(135),U=Object(G.a)(a||(a=Object(P.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n           _id'\n           username\n      }\n    }\n  }\n"]))),V=Object(G.a)(r||(r=Object(P.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n        username\n      }\n    }\n  }\n"]))),Y=Object(G.a)(o||(o=Object(P.a)(["\n  mutation saveBook($bookData: BookInput!) {\n  saveBook(bookData: $bookData){\n        _id\n        username\n        email\n        bookCount\n        SavedBooks{\n            bookId\n            authors\n            image\n            link\n            description\n            title\n        }\n    }\n\n}\n    "]))),J=Object(G.a)(c||(c=Object(P.a)(["\n    mutation removeBooks($bookId: ID!) {\n    removeBook(bookId: $bookID){\n        _id\n        username\n        email\n        bookCount\n        SavedBooks{\n            bookId\n            authors\n            image\n            link\n            description\n            title\n    }\n  }\n  \n  }\n"]))),K=n(3),z=function(){var e=Object(i.useState)([]),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=Object(w.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),d=Object(w.a)(l,2),u=d[0],j=d[1],b=Object(E.a)(Y),h=Object(w.a)(b,1)[0];Object(i.useEffect)((function(){return function(){var e;(e=u).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var O=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var n,r,o,i;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(i),s(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var a;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.bookId===t})),$.loggedIn()?$.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,h({variables:{bookData:a}});case 7:j([].concat(Object(v.a)(u),[a.bookId])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h1",{children:"Search for Books!"}),Object(K.jsx)(I.a,{onSubmit:O,children:Object(K.jsxs)(I.a.Row,{children:[Object(K.jsx)(C.a,{xs:12,md:8,children:Object(K.jsx)(I.a.Control,{name:"searchInput",value:c,onChange:function(e){return s(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(K.jsx)(C.a,{xs:12,md:4,children:Object(K.jsx)(B.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(K.jsx)(F.a,{children:n.map((function(e){return Object(K.jsxs)(T.a,{border:"dark",children:[e.image?Object(K.jsx)(T.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(K.jsxs)(T.a.Body,{children:[Object(K.jsx)(T.a.Title,{children:e.title}),Object(K.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(K.jsx)(T.a.Text,{children:e.description}),$.loggedIn()&&Object(K.jsx)(B.a,{disabled:null===u||void 0===u?void 0:u.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return m(e.bookId)},children:null!==u&&void 0!==u&&u.some((function(t){return t===e.bookId}))?"This book has already been saved!":"Save this Book!"})]})]},e.bookId)}))})]})]})},A=n(144),M=Object(G.a)(s||(s=Object(P.a)(["\n {\n     me {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n            bookId\n            authors\n            description\n            title\n            image\n            link\n            \n        }\n    }\n}\n"]))),H=function(){var e=Object(A.a)(M),t=e.loading,n=e.data,a=Object(E.a)(J),r=Object(w.a)(a,1)[0],o=(null===n||void 0===n?void 0:n.me)||{},c=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($.loggedIn()?$.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r({variables:{bookId:t}});case 6:q(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(K.jsx)("h2",{children:"LOADING..."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(K.jsx)(y.a,{children:Object(K.jsx)("h1",{children:"Viewing saved books!"})})}),Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h2",{children:o.savedBooks.length?"Viewing ".concat(o.savedBooks.length," saved ").concat(1===o.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(K.jsx)(F.a,{children:o.savedBooks.map((function(e){return Object(K.jsxs)(T.a,{border:"dark",children:[e.image?Object(K.jsx)(T.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(K.jsxs)(T.a.Body,{children:[Object(K.jsx)(T.a.Title,{children:e.title}),Object(K.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(K.jsx)(T.a.Text,{children:e.description}),Object(K.jsx)(B.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]})},R=n(140),W=n(139),Q=n(134),X=n(141),Z=n(56),ee=n(131),te=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(w.a)(c,2),l=s[0],d=s[1],u=Object(E.a)(V),b=Object(w.a)(u,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(j.a)(Object(j.a)({},n),{},Object(Z.a)({},r,o)))},O=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var r,o;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(j.a)({},n)});case 6:r=e.sent,o=r.data,$.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(K.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"username",children:"Username"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(B.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ne=function(){var e=Object(i.useState)({email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(w.a)(c,2),l=s[0],d=s[1],u=Object(E.a)(U),b=Object(w.a)(u,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(j.a)(Object(j.a)({},n),{},Object(Z.a)({},r,o)))},O=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var r,o;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:{userFormData:n}});case 6:r=e.sent,o=r.data,$.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(K.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:n.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(B.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ae=function(){var e=Object(i.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(R.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(K.jsxs)(y.a,{fluid:!0,children:[Object(K.jsx)(R.a.Brand,{as:x.b,to:"/",children:"Google Books Search"}),Object(K.jsx)(R.a.Toggle,{"aria-controls":"navbar"}),Object(K.jsx)(R.a.Collapse,{id:"navbar",children:Object(K.jsxs)(W.a,{className:"ml-auto",children:[Object(K.jsx)(W.a.Link,{as:x.b,to:"/",children:"Search For Books"}),$.loggedIn()?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(W.a.Link,{as:x.b,to:"/saved",children:"See Your Books"}),Object(K.jsx)(W.a.Link,{onClick:$.logout,children:"Logout"})]}):Object(K.jsx)(W.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(K.jsx)(Q.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(K.jsxs)(X.a.Container,{defaultActiveKey:"login",children:[Object(K.jsx)(Q.a.Header,{closeButton:!0,children:Object(K.jsx)(Q.a.Title,{id:"signup-modal",children:Object(K.jsxs)(W.a,{variant:"pills",children:[Object(K.jsx)(W.a.Item,{children:Object(K.jsx)(W.a.Link,{eventKey:"login",children:"Login"})}),Object(K.jsx)(W.a.Item,{children:Object(K.jsx)(W.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(K.jsx)(Q.a.Body,{children:Object(K.jsxs)(X.a.Content,{children:[Object(K.jsx)(X.a.Pane,{eventKey:"login",children:Object(K.jsx)(ne,{handleModalClose:function(){return a(!1)}})}),Object(K.jsx)(X.a.Pane,{eventKey:"signup",children:Object(K.jsx)(te,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},re=Object(b.a)({uri:"/graphql"}),oe=Object(p.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(j.a)(Object(j.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ce=new h.a({link:oe.concat(re),cache:new O.a});var se=function(){return Object(K.jsx)(m.a,{client:ce,children:Object(K.jsx)(x.a,{children:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ae,{}),Object(K.jsxs)(g.c,{children:[Object(K.jsx)(g.a,{exact:!0,path:"/",component:z}),Object(K.jsx)(g.a,{exact:!0,path:"/saved",component:H}),Object(K.jsx)(g.a,{render:function(){return Object(K.jsx)("h1",{className:"display-2",children:"Wrong page!"})}})]})]})})})};u.a.render(Object(K.jsx)(l.a.StrictMode,{children:Object(K.jsx)(se,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.10124425.chunk.js.map