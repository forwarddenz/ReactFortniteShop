(this.webpackJsonpreact_train=this.webpackJsonpreact_train||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(7),r=n.n(a),s=(n(13),n(14),n(0));function o(){return Object(s.jsx)("nav",{children:Object(s.jsxs)("div",{className:"nav-wrapper header blue",children:[Object(s.jsx)("a",{href:"#",className:"brand-logo",children:"React Shop"}),Object(s.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"sass.html",children:"React"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"badges.html",children:"JSX"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"collapsible.html",children:"CSS"})})]})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer footer blue",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var d=n(8),j=n(1),u=n(3);function b(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,n=e.name,c=e.price,i=e.icon,a=e.addToBasket,r=void 0===a?Function.prototype:a;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{alt:n,src:i})}),Object(s.jsx)("div",{className:"card-content",children:Object(s.jsx)("p",{children:n})}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return r({id:t,name:n,price:c})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",children:[c," \u0440\u0443\u0431."]})]})]})}function O(e){var t=e.goods,n=void 0===t?[]:t,c=e.addToBasket,i=void 0===c?Function.prototype:c;return n.length?Object(s.jsx)("div",{className:"goods",children:n.map((function(e){return Object(s.jsx)(h,Object(j.a)(Object(j.a)({},e),{},{addToBasket:i}),e.id)}))}):Object(s.jsx)("h3",{children:"Not Found"})}function m(e){var t=e.quantity,n=void 0===t?0:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:i,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(s.jsx)("span",{className:"cart-quantity",children:n}):null]})}function f(e){var t=e.id,n=e.name,c=e.price,i=e.quantity,a=e.removeFromBasket,r=void 0===a?Function.prototype:a,o=e.decQuantity,l=void 0===o?Function.prototype:o,d=e.incQuantity,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[n," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"remove"})," ",i," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return j(t)},children:"add"})," = ",c*i,Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)("i",{className:"material-icons basket-delite",onClick:function(){return r(t)},children:"close"})})]})}function x(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c,a=e.removeFromBasket,r=void 0===a?Function.prototype:a,o=e.decQuantity,l=void 0===o?Function.prototype:o,d=e.incQuantity,u=void 0===d?Function.prototype:d,b=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(s.jsx)(f,Object(j.a)(Object(j.a)({},e),{},{removeFromBasket:r,incQuantity:u,decQuantity:l}),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b," \u0440\u0443\u0431"]}),Object(s.jsx)("button",{className:"secondary-content btn btn-small basketList-btn",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})}function v(e){var t=e.name,n=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(c.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[n," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function p(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!0),r=Object(u.a)(a,2),o=r[0],l=r[1],h=Object(c.useState)([]),f=Object(u.a)(h,2),p=f[0],y=f[1],N=Object(c.useState)(!1),k=Object(u.a)(N,2),g=k[0],F=k[1],q=Object(c.useState)(""),S=Object(u.a)(q,2),B=S[0],w=S[1],C=function(){F(!g)};return Object(c.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"e6504d3b-f86b8cb4-dd1f225d-6905db92"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(m,{quantity:p.length,handleBasketShow:C}),o?Object(s.jsx)(b,{}):Object(s.jsx)(O,{goods:n,addToBasket:function(e){var t=p.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(p),[n]))}else{var c=p.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));y(c)}w(e.name)}}),g&&Object(s.jsx)(x,{order:p,handleBasketShow:C,removeFromBasket:function(e){var t=p.filter((function(t){return t.id!==e}));y(t)},incQuantity:function(e){var t=p.map((function(t){if(t.id===e){var n=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n})}return t}));y(t)},decQuantity:function(e){var t=p.map((function(t){if(t.id===e){var n=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n>=0?n:0})}return t}));y(t)}}),B&&Object(s.jsx)(v,{name:B,closeAlert:function(){w("")}})]})}var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(p,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.93c63aff.chunk.js.map