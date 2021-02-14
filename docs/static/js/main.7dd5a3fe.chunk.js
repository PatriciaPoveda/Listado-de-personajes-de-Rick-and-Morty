(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),n=c.n(r),s=c(19),i=c.n(s),o=(c(26),c(15)),l=(c(27),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,image:e.image,species:e.species,status:e.status,origin:e.origin.name,episode:e.episode,id:e.id}}))}))}),j=(c(28),c(7)),h=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.b,{to:"/person/".concat(e.id),children:Object(a.jsxs)("article",{className:"characterCard",children:[Object(a.jsx)("img",{className:"characterCard__img",src:e.img,alt:"Character: ".concat(e.name)}),Object(a.jsxs)("div",{className:"characterCard__info",children:[Object(a.jsx)("h2",{className:"characterCard__info--name",children:e.name}),Object(a.jsx)("p",{className:"characterCard__info--type",children:e.species})]})]})})})},d=(c(17),c.p+"static/media/Dont-panic.05182951.jpg"),m=function(){return Object(a.jsxs)("article",{className:"filterError",children:[Object(a.jsx)("img",{src:d,alt:"",className:"filterError__img"}),Object(a.jsx)("h3",{className:"filterError__text",children:"Te has equivocado de personaje"})]})},u=function(e){e.characters.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));var t=e.characters.map((function(e){return Object(a.jsx)("li",{id:e.id,children:Object(a.jsx)(h,{name:e.name,img:e.image,species:e.species,id:e.id})},e.id)}));return Object(a.jsx)(a.Fragment,{children:0===t.length?Object(a.jsx)(m,{}):Object(a.jsx)("ul",{className:"characterList",children:t})})},b=c.p+"static/media/Rick_and_Morty.de13d484.png",f=(c(34),function(){return Object(a.jsx)("img",{src:b,alt:"Logo Rick and Morty",className:"headerLogo__img headerLogo"})}),O=(c(35),function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"nameCharacter"}),Object(a.jsx)("input",{type:"text",id:"nameCharacter",className:"filterCharacter__input",placeholder:"Ej: Morty",onChange:function(t){var c=t.target.value;e.handleFilter(c)},value:e.filterCharacters})]})}),x=function(e){e.preventDefault()},p=function(e){return Object(a.jsx)("form",{action:"",className:"filterCharacter",onSubmit:x,children:Object(a.jsx)(O,{handleFilter:e.handleFilter,filterCharacters:e.filterCharacters})})},g=(c(36),function(){return Object(a.jsx)("main",{className:"landing",children:Object(a.jsx)(j.b,{to:"/character",className:"landing__btn",children:"ENTRAR"})})}),_=c(11),C=(c(18),c.p+"static/media/homero-simpson-400x360.073c84eb.jpg"),N=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.Link,{to:"/character",className:"characterDetailButton",children:"Volver"}),Object(a.jsxs)("article",{className:"characterDetail",children:[Object(a.jsx)("img",{className:"characterDetail__img",src:C,alt:"Imagen de Homer Simpson"}),Object(a.jsx)("p",{className:"characterDetail__text",children:"Te has equivocado de personaje"})]})]})},v=function(e){return void 0===e.foundCharacter?Object(a.jsx)(N,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.Link,{to:"/character",className:"characterDetailButton",children:"Volver"}),Object(a.jsxs)("article",{className:"characterDetail",children:[Object(a.jsx)("img",{className:"characterDetail__img",src:e.foundCharacter.image,alt:"Imagen: ".concat(e.foundCharacter.name)}),Object(a.jsxs)("section",{className:"characterDetail__info",children:[Object(a.jsx)("h3",{className:"characterDetail__info--name",children:e.foundCharacter.name}),Object(a.jsxs)("ul",{className:"characterDetail__info--list",children:[Object(a.jsxs)("li",{children:["Status: ",e.foundCharacter.status]}),Object(a.jsxs)("li",{children:["Species: ",e.foundCharacter.species]}),Object(a.jsxs)("li",{children:["Origin: ",e.foundCharacter.origin]}),Object(a.jsxs)("li",{children:["Episodes: ",e.foundCharacter.episode.length]})]})]})]})]})},y=c(2),D=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),j=i[0],h=i[1];Object(r.useEffect)((function(){l().then((function(e){n(e)}))}),[]);var d=c.filter((function(e){return e.name.toUpperCase().includes(j.toUpperCase())}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("main",{className:"container",children:Object(a.jsxs)(y.Switch,{children:[Object(a.jsx)(y.Route,{exact:!0,path:"/",component:g}),Object(a.jsxs)(y.Route,{path:"/character",component:u,children:[Object(a.jsx)(f,{}),Object(a.jsx)(p,{handleFilter:function(e){h(e)},filterCharacters:j}),Object(a.jsx)(u,{characters:d})]}),Object(a.jsx)(y.Route,{path:"/person/:id",render:function(e){var t=parseInt(e.match.params.id),r=c.find((function(e){return e.id===t}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(v,{foundCharacter:r})]})}})]})})})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(D,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7dd5a3fe.chunk.js.map