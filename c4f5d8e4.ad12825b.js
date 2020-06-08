(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(189),o=a(176),s=a(1),c=a(175),l=a.n(c),d=a(127),u=a.n(d),m=a(11),g=a.n(m),p=function(e){var t=e.id,a=e.title,i=e.description,r=e.uri,o=e.handleClick;return n.a.createElement("div",{className:l()("col col--3 me-need-help-container-3d cta-nhc bg-nhc",u.a.category),onClick:function(e){return o(e,r)}},n.a.createElement("h2",null,t,". ",a),n.a.createElement("p",null,i))};p.defaultProps={id:1,title:"Default Title",description:"Default Description",uri:"/default/uri",handleClick:function(){}},p.propTypes={id:g.a.number.isRequired,title:g.a.string.isRequired,description:g.a.string.isRequired,uri:g.a.string.isRequired,handleClick:g.a.func.isRequired};var h=p,f=a(183),b=(a(236),a(201)),v=a.n(b),y=function(e){var t,a=e.homepageCategories,r=Object(i.useState)(8),o=r[0],c=(r[1],Object(i.useState)(!1)),d=(c[0],c[1],Object(f.b)());Object(i.useEffect)((function(){return function(){clearTimeout(t)}}),[]);var m=function(e,t){e.preventDefault(),d.push(t)};return a&&a.length?n.a.createElement("section",{className:u.a.categories},n.a.createElement("div",{className:l()("container")},n.a.createElement("div",{className:"row"},a.filter((function(e,t){return t>=0&&t<=o})).map((function(e,t){return n.a.createElement(h,Object(s.a)({key:t,handleClick:m},e))}))))):n.a.createElement("div",{className:u.a.postCategoryAction},n.a.createElement("h3",null,"No categories to load"))};y.defaultProps={homepageCategories:v.a},y.propTypes={homepageCategories:g.a.array.isRequired};var k=y,E=(a(180),a(179),a(163)),T=a.n(E),w=function(e){var t=e.siteConfig;e.btnText,e.uri;return n.a.createElement("header",{className:l()("hero hero--primary",T.a.heroBanner)},n.a.createElement("div",{className:T.a.hero},n.a.createElement("div",{className:T.a.heroInner},n.a.createElement("h1",{className:T.a.heroProjectTagline},t&&t.title),n.a.createElement("p",{className:T.a.heroProjectSubtitle},t&&t.tagline))))};w.defaultProps={siteConfig:{},btnText:"Get Started",uri:"/"},w.propTypes={siteConfig:g.a.object.isRequired,btnText:g.a.string.isRequired,uri:g.a.string.isRequired};var C=w,N=a(164),R=a.n(N),x=a(286),q=function(e){var t=e.text,a=e.image,i=e.url;return n.a.createElement("div",{className:l()(R.a.heroTabContainer),style:{backgroundImage:"url("+a+")"},onClick:function(e){e.preventDefault(),window.location.href=i}},n.a.createElement("span",null,t),n.a.createElement(x.a,{size:40,className:l()(R.a.iconArrow)}))};q.propTypes={text:g.a.string.isRequired,image:g.a.string,url:g.a.string.isRequired};var H=q,O=a(165),j=a.n(O),P=function(e){var t=e.items;return n.a.createElement("div",{className:l()(j.a.splitViewContainer)},t&&t.length&&t.map((function(e,t){return n.a.createElement(H,Object(s.a)({key:t},e))})))};P.defaultProps={items:[]},P.propTypes={items:g.a.array.isRequired};var S=P,M=a(166),D=a.n(M),G=function(e){var t=e.text;return n.a.createElement("div",{className:l()(D.a.bannerContainer,D.a.dark)},n.a.createElement("div",null,t))};G.defaultProps={text:"Banner Text"},G.propTypes={text:g.a.string.isRequired};var I=G;t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(r.a,{title:t.title,description:"Official documentation site for TryHackMe"},n.a.createElement(C,{siteConfig:t,btnText:"Get Started",uri:"/docs/introduction/welcome"}),n.a.createElement(S,{items:[{text:"Latest blog posts",image:"https://blog.tryhackme.com/content/images/size/w1000/2020/02/TryHackMe_Red_Blue_borderless.png",url:"https://blog.tryhackme.com"},{text:"See Hackback 2",image:"https://blog.tryhackme.com/content/images/size/w1000/2019/12/IMG_20191026_101233.jpg",url:"https://tryhackme.com/hackback2"}]}),n.a.createElement(I,{text:"Select a documentation category from the listings below."}),n.a.createElement("main",null,n.a.createElement(k,{homepageCategories:v.a})))}},201:function(e,t){e.exports=[{id:1,title:"General",description:"Just getting started with TryHackMe? Start here for a detailed introduction to our platform.",uri:"/docs/general/welcome"},{id:2,title:"OpenVPN",description:"Guides on setting up, connecting and troubleshooting OpenVPN connections.",uri:"/docs/openvpn/why-openvpn"},{id:3,title:"Completing Rooms",description:"Guides on how to use and complete TryHackMe rooms.",uri:"/docs/rooms/what-are-rooms"},{id:4,title:"Room Creation",description:"How to create your own TryHackMe rooms for training, workshops and assessments.",uri:"/docs/room-creation/room-creation-getting-started"},{id:5,title:"Sales and Billing",description:"Information on sales and billing.",uri:"/docs/sales-billing/sales-billing-student"},{id:6,title:"TryHackMe for Teaching",description:"Guides on managing students, virtual labs and teaching content for Cybersecurity training.",uri:"/docs/teaching/teaching-getting-started"},{id:7,title:"Discord",description:"FAQs related to the TryHackMe Discord Server.",uri:"/docs/discord/discord-getting-started"},{id:8,title:'The "King Of The Hill" Gamemode',description:'Everything you need to know regarding the "King Of The Hill" gamemode.',uri:"/docs/koth/king-of-the-hill"},{id:9,title:"API Docs",description:"TryHackMe API docs and service endpoints.",uri:"/docs/api-docs/introduction"}]}}]);