(this["webpackJsonpdog-info"]=this["webpackJsonpdog-info"]||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(22),s=n.n(i),a=n(16),o=(n(87),n(88),n(89),n(90),n(13)),j=n(19),d=n(9),l=n(2),u=function(){return Object(l.jsx)("div",{style:{textAlign:"center",position:"relative",top:"40vh"},children:Object(l.jsx)("h2",{children:"Welcome to ECOM - for all things online!"})})},b=n(121),h=n(122),x=n(67),O=n(65),p=n(52),f=function(t){var e=t.cart,n=t.updateCart,c=t.clearCart;return Object(l.jsxs)("div",{style:{margin:"2em"},children:[Object(l.jsx)(p.a,{}),Object(l.jsx)("h2",{style:{textAlign:"center"},children:"SHOPPING CART"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm",style:{maxWidth:"90%",margin:"0 auto"},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"SKU"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:"Quantity"}),Object(l.jsx)("th",{children:"Unit Price"}),Object(l.jsx)("th",{children:"Price"})]})}),Object(l.jsxs)("tbody",{children:[e.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.id}),Object(l.jsx)("td",{children:t.product_sku}),Object(l.jsx)("td",{children:t.title}),Object(l.jsx)("td",{children:Object(l.jsx)(h.a,{size:"sm",title:t.quantity,onSelect:function(e,c){return n(parseInt(c.target.innerText),t)},children:Object(o.a)(Array(11).keys()).map((function(t){return Object(l.jsx)(x.a.Item,{children:t},t)}))})}),Object(l.jsxs)("td",{children:["$",t.price]}),Object(l.jsxs)("td",{children:["$",t.quantity*t.price]})]},t.id)})),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"GRAND TOTAL"})}),Object(l.jsx)("td",{children:Object(l.jsxs)("strong",{children:["$",e.reduce((function(t,e){return t+e.quantity*e.price}),0)]})})]})]})]}),Object(l.jsxs)("div",{id:"cart-action-container",children:[Object(l.jsx)(O.a,{className:"cart-action",children:Object(l.jsx)(a.b,{to:"/products",children:"Continue Shopping"})}),Object(l.jsx)(O.a,{className:"cart-action",onClick:c,children:"Clear Cart"}),Object(l.jsx)(O.a,{className:"cart-action",onClick:function(){c(),p.b.success("Thank you, your order has been successfully processed!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Checkout"})]})]})},g=n(124),m=n(128),v=n(25),y=n(129),C={container:{width:300,margin:"0 auto"},card:{backgroundColor:"#B7E0F2",borderRadius:55,padding:"3rem"}},T=function(t){var e=t.maxHeight,n=t.children,c=r.a.useRef(),i=r.a.useState(!1),s=Object(j.a)(i,2),a=s[0],o=s[1],d=r.a.useState(!0),u=Object(j.a)(d,2),b=u[0],h=u[1];return r.a.useEffect((function(){c.current.scrollHeight>e&&(o(!0),h(!1))}),[e]),Object(l.jsxs)(y.a.Text,{style:C.cardText,ref:c,children:[Object(l.jsx)("div",{className:"inner",style:{maxHeight:b?500:e},children:n}),a&&Object(l.jsx)("button",{onClick:function(){return h(!b)},children:b?"Less...":"More..."})]})},S=function(t){var e=t.product,n=t.addToCart,c=t.cart;return Object(l.jsxs)(y.a,{children:[Object(l.jsx)(a.b,{to:"/products/".concat(e.id),children:Object(l.jsx)(y.a.Img,{variant:"top",src:e.image,alt:e.title,className:"card-img"})}),Object(l.jsxs)(y.a.Body,{children:[Object(l.jsx)(a.b,{to:"/products/".concat(e.id),children:Object(l.jsx)(y.a.Title,{children:e.title})}),Object(l.jsx)(T,{maxHeight:95,children:e.description}),Object(l.jsxs)(y.a.Text,{children:["AUD ",e.price]})]}),Object(l.jsx)(y.a.Footer,{children:Object(l.jsx)(O.a,{disabled:c.find((function(t){return t.product_sku===e.id})),onClick:function(){return n({product_sku:e.id,title:e.title,quantity:1,price:e.price})},children:"Add to cart"})})]})},k=Object(v.a)({"@global":{".MuiPagination-ul":{justifyContent:"center",marginTop:"20px"}}})((function(){return null})),A=function(t){var e=t.products,n=t.cart,c=t.addToCart,i=r.a.useState(1),s=Object(j.a)(i,2),a=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(k,{}),Object(l.jsx)(m.a,{count:e.length/4,shape:"rounded",onChange:function(t,e){return o(e)}}),Object(l.jsx)(g.a,{children:e.slice(4*(a-1),4*a).map((function(t){return Object(l.jsx)(S,{product:t,addToCart:c,cart:n},t.id)}))})]})},E=function(t){var e=t.product;return Object(l.jsxs)(y.a,{style:{textAlign:"center"},children:[Object(l.jsx)(y.a.Img,{variant:"top",src:e.image,alt:e.title,className:"card-img-full"}),Object(l.jsxs)(y.a.Body,{children:[Object(l.jsx)(y.a.Title,{children:e.title}),Object(l.jsx)(y.a.Text,{children:e.description}),Object(l.jsxs)(y.a.Text,{children:["AUD ",e.price]})]})]})},P=n(127),I=n(126),N=n(125),B=Object(N.a)((function(t){return{root:{"& > *":{margin:t.spacing(2)}},font1:{fontSize:"1rem"},font2:{fontSize:"0.5rem",marginBottom:"5px"},font3:{fontSize:"1.5rem"}}})),H=function(t){var e=t.noOfItems;return Object(l.jsx)("div",{style:{marginBottom:"10px"},children:Object(l.jsx)(I.a,{badgeContent:e,color:"primary",classes:{badge:B().font2},children:Object(l.jsx)(P.a,{name:"shopping cart",size:"big"})})})},L=function(){var t=r.a.useState([]),e=Object(j.a)(t,2),n=e[0],i=e[1],s=r.a.useState([]),b=Object(j.a)(s,2),h=b[0],x=b[1];Object(c.useEffect)((function(){O().then((function(t){return x(t)})),p().then((function(t){return i(t)}))}),[]);var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;return fetch("".concat("http://localhost:3000","/cart/").concat(n||""),{method:t,body:e?JSON.stringify(e):null,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return fetch("".concat("https://fakestoreapi.com","/products"),{method:t,body:e?JSON.stringify(e):null,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()}))},g=function(t){O("POST",t).then((function(t){return x(h.concat(t))}))},m=function(t,e){var n=Object(o.a)(h),c=n.findIndex((function(t){return t.id===e.id}));0!==t?(n[c].quantity=t,O("PATCH",{quantity:t},e.id).then((function(){return x(n)}))):(n.splice(c,1),O("DELETE",null,e.id).then((function(){return x(n)})))},v=function(){Promise.all(h.map((function(t){return O("DELETE",null,t.id)}))).then((function(){return x([])}))};return n?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"ui visible left demo vertical inverted sidebar labeled icon menu",children:[Object(l.jsxs)(a.b,{class:"item",as:a.b,to:"/",children:[Object(l.jsx)("i",{class:"home icon"}),"Home"]}),Object(l.jsxs)(a.b,{class:"item",as:a.b,to:"/products",children:[Object(l.jsx)("i",{class:"block layout icon"}),"Products"]}),Object(l.jsxs)(a.b,{class:"item",as:a.b,to:"/cart",children:[Object(l.jsx)(H,{noOfItems:h.length}),"Cart"]})]}),Object(l.jsx)("div",{style:{marginLeft:"90px"},children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(l.jsx)(u,{})}}),Object(l.jsx)(d.a,{path:"/products",exact:!0,render:function(){return Object(l.jsx)(A,{products:n,cart:h,addToCart:g})}}),Object(l.jsx)(d.a,{path:"/products/:id",render:function(t){var e=t.match;return Object(l.jsx)(E,{product:n.find((function(t){return t.id===parseInt(e.params.id)}))})}}),Object(l.jsx)(d.a,{path:"/cart",render:function(){return Object(l.jsx)(f,{cart:h,updateCart:m,clearCart:v})}})]})})]}):null},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(a.a,{children:Object(l.jsx)(L,{})})}),document.getElementById("root")),q()},90:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.003c20fb.chunk.js.map