(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(152),r=n(160),l=n(157),c=n(167),s=o.c.div.withConfig({displayName:"watch__VideoContainer",componentId:"sc-17u0tm9-0"})(["width:100%;& > iframe{padding-top:2rem;height:auto;min-height:55rem;}@media (max-width:600px){& > iframe{max-height:25rem;}}"]);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(l.a,{title:"Watch",keywords:["phoenix","punk","music","chris","gerrit","desert drip","new music","unnecessary voice","lone control","loan control","arizona","rock","indie","band"]}),a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,"Watch"),a.a.createElement(s,null,a.a.createElement("h3",null,"Video #1"),a.a.createElement("p",null,"Description"),a.a.createElement("p",null,"Month, Year"),a.a.createElement("p",null,"Credits"),a.a.createElement("iframe",{src:"https://www.youtube.com/embed/kzVnd3AHx1I",width:"100%",scrolling:"no",frameborder:"no",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))}},153:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var i=n(0),a=n.n(i),o=n(4),r=n.n(o),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(154);var s=a.a.createContext({}),m=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},154:function(e,t,n){var i;e.exports=(i=n(155))&&i.default||i},155:function(e,t,n){"use strict";n.r(t);n(34);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(e,t,n){"use strict";var i=n(158),a=n(0),o=n.n(a),r=n(4),l=n.n(r),c=n(166),s=n.n(c);function m(e){var t=e.description,n=e.lang,a=e.meta,r=e.keywords,l=e.title,c=i.data.site,m=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Lone Control’s debut is a flash in the pan, arresting, burning bright while waning focus may last. Four hints at a larger question, too large to answer now. That moment will come in time. For now, there is only this. Here. There. Gone."}}}}},159:function(e,t,n){"use strict";var i=n(152),a=n(156),o=n(0),r=n.n(o),l=n(4),c=n.n(l),s=n(153),m=n(163),d=n.n(m);n(164),n(165);function u(){var e=d()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return u=function(){return e},e}var h=Object(i.b)(u(),function(e){return e.theme.colors.EERIE_BLACK},function(e){return e.theme.colors.PLATINUM},function(e){var t=e.theme;return t.font.family.primary+", "+t.font.family.backup+", sans-serif"},function(e){return e.theme.font.size.m}),p={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},f=function(e){var t=e.children;return r.a.createElement(s.b,{query:"2994927498",render:function(){return r.a.createElement(i.a,{theme:p},r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),t))},data:a})};f.propTypes={children:c.a.node.isRequired};t.a=f},160:function(e,t,n){"use strict";var i=n(152),a=n(0),o=n.n(a),r=n(4),l=n.n(r),c=n(159),s=n(153),m=i.c.nav.withConfig({displayName:"navigation__NavigationContainer",componentId:"vnb782-0"})(["height:100vh;display:flex;flex-direction:column;align-items:flex-start;padding:2rem 2rem 0 3rem;position:fixed;@media (max-width:600px){flex-direction:row;flex-wrap:wrap;padding:0 3rem;position:inherit;height:",";}"],function(e){return e.showForMobile?"100%":"5rem"});m.propTypes={showForMobile:l.a.bool};var d=i.c.div.withConfig({displayName:"navigation__LinksContainer",componentId:"vnb782-1"})(["@media (max-width:600px){width:100vw;display:flex;visibility:",";opacity:",";flex-direction:column;align-items:flex-end;text-align:right;height:",";transition:visibility 1s linear 300ms,opacity 300ms;}"],function(e){return e.showForMobile?"visible":"hidden"},function(e){return e.showForMobile?1:0},function(e){return e.showForMobile?"100vh":"0"});d.propTypes={showForMobile:l.a.bool};var u=i.c.div.withConfig({displayName:"navigation__SiteNavigation",componentId:"vnb782-2"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0;font-size:1.8rem;"]),h=i.c.div.withConfig({displayName:"navigation__SocialNavigation",componentId:"vnb782-3"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0;margin-top:2rem;font-size:1.4rem;"]),p=i.c.div.withConfig({displayName:"navigation__HeaderContainer",componentId:"vnb782-4"})(["display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;width:100%;height:6rem;padding-bottom:2rem;@media (min-width:600px){display:none;}"]),f=i.c.button.withConfig({displayName:"navigation__NavMenuButton",componentId:"vnb782-5"})(["margin-top:1rem;position:relative;width:4rem;height:4rem;border-top:0.2em solid ",";border-bottom:0.2em solid ",';&:before{content:"";position:absolute;top:1.5rem;left:0px;width:100%;border-top:0.2em solid ',";}@media (min-width:600px){display:none;}"],function(e){return e.theme.colors.MUMMYS_TOMB},function(e){return e.theme.colors.MUMMYS_TOMB},function(e){return e.theme.colors.MUMMYS_TOMB}),g=Object(i.c)(s.a).withConfig({displayName:"navigation__StyledLink",componentId:"vnb782-6"})(["color:",";width:100%;line-height:1.4;padding:0.1rem 0;&:hover{text-decoration:line-through;}&.active{color:",';font-weight:600;&:hover{text-decoration:none;cursor:default;}&:after{content:"--";}}'],function(e){return e.theme.colors.RAISIN_BLACK},function(e){return e.theme.colors.FELDGRAU}),v=i.c.a.withConfig({displayName:"navigation__StyledLinkOutside",componentId:"vnb782-7"})(["color:",";width:100%;line-height:1.4;padding:0.1rem 0;&:hover{text-decoration:line-through;}&.active{color:",';font-weight:600;&:hover{text-decoration:none;cursor:default;}&:after{content:"--";}}'],function(e){return e.theme.colors.RAISIN_BLACK},function(e){return e.theme.colors.FELDGRAU}),w=function(e){var t=e.showNav,n=e.onClickToggleNav;return o.a.createElement(m,{showForMobile:t},o.a.createElement(p,null,o.a.createElement(f,{onClick:function(){return n(!t)}})),o.a.createElement(d,{showForMobile:t},o.a.createElement(u,null,o.a.createElement(g,{activeClassName:"active",to:"/home/"},"Home"),o.a.createElement(g,{activeClassName:"active",to:"/about/"},"About"),o.a.createElement(g,{activeClassName:"active",to:"/listen/"},"Listen"),o.a.createElement(g,{activeClassName:"active",to:"/shows/"},"Shows"),o.a.createElement(g,{activeClassName:"active",to:"/releases/"},"Releases"),o.a.createElement(g,{activeClassName:"active",to:"/lyrics/"},"Lyrics")),o.a.createElement(h,null,o.a.createElement(v,{href:"https://desertdriprecords.bandcamp.com/",target:"_blank"},"BandCamp"),o.a.createElement(v,{href:"https://soundcloud.com/lonecontrol",target:"_blank"},"Soundcloud"),o.a.createElement(v,{href:"https://www.instagram.com/lonecontrol/",target:"_blank"},"Instagram"))))};w.propTypes={showNav:l.a.bool.isRequired,onClickToggleNav:l.a.func.isRequired};var y=w,b=i.c.div.withConfig({displayName:"layout__Body",componentId:"sc-12tk2uc-0"})(['display:grid;grid-template-columns:25% 75%;grid-template-areas:"navigation main" "footer footer";height:100vh;@media (max-width:600px){grid-template-columns:100%;grid-template-areas:"navigation" "main" "footer";overflow:',";height:100vh;}"],function(e){return e.hideWhileNavExposed?"hidden":"scroll"}),x=Object(i.c)(y).withConfig({displayName:"layout__StyledNavigation",componentId:"sc-12tk2uc-1"})(["grid-area:navigation;height:100vh;"]),E=i.c.main.withConfig({displayName:"layout__Main",componentId:"sc-12tk2uc-2"})(["margin:0;grid-area:main;height:100vh;max-height:100vh;overflow-y:scroll;padding:2rem 3rem 0 3rem;display:flex;flex-direction:column;align-content:center;width:100%;max-width:1100px;@media (max-width:600px){padding:0 3rem;margin-top:0;display:",";}"],function(e){return e.hideWhileNavExposed?"none":"block"}),C=i.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-12tk2uc-3"})(["grid-area:footer;text-align:left;position:absolute;height:5rem;width:100%;position:fixed;bottom:1rem;left:3rem;& > p{font-size:0.8rem;}@media (max-width:600px){display:none;}"]),N=new Date,_=function(e){var t=e.children,n=Object(a.useState)(!1),i=n[0],r=n[1];return o.a.createElement(c.a,null,o.a.createElement(b,{hideWhileNavExposed:i},o.a.createElement(x,{showNav:i,onClickToggleNav:r}),o.a.createElement(E,{hideWhileNavExposed:i},t),o.a.createElement(C,{hideWhileNavExposed:i},o.a.createElement("p",null,"copyright and content belong to Lone Control, ",N.getFullYear(),"."),o.a.createElement("p",null,"site maintained from the surface of Mars."))))};_.propTypes={children:l.a.node.isRequired};t.a=_},161:function(e,t,n){var i=n(11),a=n(18),o=n(19),r=/"/g,l=function(e,t,n,i){var a=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),i(i.P+i.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},162:function(e,t,n){"use strict";n(161)("bold",function(e){return function(){return e(this,"b","","")}})},167:function(e,t,n){"use strict";n(162);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),l=n(152).c.h2.withConfig({displayName:"page-heading__Heading",componentId:"u618g2-0"})(["font-size:3.5rem;font-family:",";padding-bottom:2rem;color:",";"],function(e){return e.theme.font.family.bold},function(e){return e.theme.colors.RAISIN_BLACK}),c=function(e){var t=e.children;return a.a.createElement(l,null,t)};c.propTypes={children:r.a.node.isRequired},t.a=c}}]);
//# sourceMappingURL=component---src-pages-watch-js-bba1d5b721030d0ba88c.js.map