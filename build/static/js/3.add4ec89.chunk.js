(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{45:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){o=!0,c=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},48:function(t,e,n){t.exports={comments:"Comments_comments__3wpO0"}},49:function(t,e,n){t.exports={form:"NewCommentForm_form__31H3l",loading:"NewCommentForm_loading__3dHUs",control:"NewCommentForm_control__3tper",actions:"NewCommentForm_actions__1cpnj"}},50:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__3IQL_"}},52:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(3),c=n(45),i=n(48),a=n.n(i),s=n(49),u=n.n(s),m=n(1),l=function(t){var e=Object(r.useRef)(),n=function(t){t.preventDefault()};return Object(m.jsxs)("form",{className:u.a.form,onSubmit:n,children:[Object(m.jsxs)("div",{className:u.a.control,onSubmit:n,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(m.jsx)("div",{className:u.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},j=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),n=e[0],o=e[1];return Object(m.jsxs)("section",{className:a.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!n&&Object(m.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),n&&Object(m.jsx)(l,{}),Object(m.jsx)("p",{children:"Comments..."})]})},d=n(50),b=n.n(d),f=function(t){return Object(m.jsxs)("figure",{className:b.a.quote,children:[Object(m.jsx)("p",{children:t.text}),Object(m.jsx)("figcaption",{children:t.author})]})},h=[{id:"p1",author:"shabanm",text:"learning router"},{id:"p2",author:"riya",text:"learning javascript"}];e.default=function(){var t=Object(o.j)(),e=Object(o.k)(),n=h.find((function(e){return e.id===t.quotesId}));return n?Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(f,{text:n.text,author:n.author}),Object(m.jsx)(o.c,{path:"".concat(e.path,"/comments"),children:Object(m.jsx)(j,{})})]}):Object(m.jsx)("p",{children:"no quote found"})}}}]);
//# sourceMappingURL=3.add4ec89.chunk.js.map