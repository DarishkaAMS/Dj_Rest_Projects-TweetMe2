(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(6),o=n.n(r),i=(n(15),n.p+"static/media/logo.6ce24c58.svg");n(16);function l(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);s.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),o&&(s.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",o)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},s.send(a)}function u(e){var t=e.tweet,n=e.action,a=e.didPerformAction,s=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},u="like"===n.type?"".concat(s," ").concat(o):o;return Object(c.jsxs)("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)},children:[" ",u," "]})}var d=n(8),j=n(2);function b(e){var t=e.tweet;return t.parent?Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-11 mx-auto p-3 border rounded",children:[Object(c.jsx)("p",{className:"mb-0 text-muted small",children:"Retweet"}),Object(c.jsx)(m,{hideActions:!0,className:" ",tweet:t.parent})]})}):null}function m(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,o=Object(a.useState)(e.tweet?e.tweet:null),i=Object(j.a)(o,2),l=i[0],m=i[1],f=e.className?e.className:"col-10 mx-auto col-md-6",p=window.location.pathname.match(Object(d.a)(/([0-9]+)/,{tweetid:1})),O=p?p.groups.tweetid:-1,w="".concat(t.id)==="".concat(O),h=function(e,t){200===t?m(e):201===t&&n&&n(e)};return Object(c.jsxs)("div",{className:f,children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[t.id," - ",t.content]}),Object(c.jsx)(b,{tweet:t})]}),Object(c.jsxs)("div",{className:"btn btn-group",children:[l&&!0!==r&&Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(u,{tweet:l,didPerformAction:h,action:{type:"like",display:"Likes"}}),Object(c.jsx)(u,{tweet:l,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),Object(c.jsx)(u,{tweet:l,didPerformAction:h,action:{type:"retweet",display:"Retweet"}})]}),!0===w?null:Object(c.jsx)("button",{className:"btn btn-outline-primary btn-small",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:" View "})]})]})}function f(e){var t=s.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occurred, please try again"))};return Object(c.jsx)("div",{className:e.className,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;l("POST","/tweets/create/",a,{content:n}),t.current.value=""},children:[Object(c.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:" Tweet "})]})})}var p=n(9),O=n(3);function w(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),s=n[0],r=n[1],o=Object(a.useState)([]),i=Object(j.a)(o,2),u=i[0],d=i[1],b=Object(a.useState)(!1),f=Object(j.a)(b,2),p=f[0],w=f[1];Object(a.useEffect)((function(){var t=Object(O.a)(e.newTweets).concat(s);t.length!==u.length&&d(t)}),[e.newTweets,u,s]),Object(a.useEffect)((function(){if(!1===p){!function(e,t){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),l("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),w(!0)):alert("There was an error")}))}}),[s,p,w,e.username]);var h=function(e){var t=Object(O.a)(s);t.unshift(e),r(t);var n=Object(O.a)(u);n.unshift(u),d(n)};return u.map((function(e,t){return Object(c.jsx)(m,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))}))}function h(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),s=n[0],r=n[1],o="false"!==e.canTweet;return Object(c.jsxs)("div",{className:e.className,children:[!0===o&&Object(c.jsx)(f,{didTweet:function(e){var t=Object(O.a)(s);t.unshift(e),r(t)},className:"col-12 mb-3"}),Object(c.jsx)(w,Object(p.a)({newTweets:s},e))]})}function v(e){var t=e.tweetId,n=Object(a.useState)(!1),s=Object(j.a)(n,2),r=s[0],o=s[1],i=Object(a.useState)(null),u=Object(j.a)(i,2),d=u[0],b=u[1],f=function(e,t){200===t?b(e):alert("There was an error finding your tweet :(")};return Object(a.useEffect)((function(){!1===r&&(!function(e,t){l("GET","/tweets/".concat(e,"/"),t)}(t,f),o(!0))}),[t,r,o]),null===d?null:Object(c.jsx)(m,{tweet:d,className:e.className})}var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},N=document.getElementById("root");N&&o.a.render(Object(c.jsx)(x,{}),N);var y=s.a.createElement,T=document.getElementById("tweetme-2");T&&o.a.render(y(h,T.dataset),T),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){o.a.render(y(v,e.dataset),e)})),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.ef9091ee.chunk.js.map