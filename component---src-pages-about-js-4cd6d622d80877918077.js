(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,n,t){"use strict";t.r(n);var a=t(154),i=t.n(a),o=t(0),r=t.n(o),l=t(151),c=t(160),s=t(157),m=t(166),d=t(168),u=t(182),h=t.n(u);function p(){var e=i()(["\n  width: 60rem;\n  max-width: 60vw;\n  margin-bottom: 2rem;\n  p {\n    margin-bottom: 0.8rem;\n  }\n  @media (max-width: 600px) {\n    max-width: 90vw;\n  }\n"]);return p=function(){return e},e}function f(){var e=i()(["\n  object-fit: contain;\n  align-self: flex-start;\n  margin-bottom: 2rem;\n  max-width: 60rem;\n  @media (max-width: 600px) {\n    max-width: 90vw;\n  }\n"]);return f=function(){return e},e}function g(){var e=i()(["\n  &::last-of-type {\n    color: red;\n  }\n"]);return g=function(){return e},e}var v=l.c.h3(g()),w=l.c.img(f()),y=l.c.div(p());n.default=function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"About"}),r.a.createElement(m.a,null,"About"),r.a.createElement(w,{src:h.a,alt:"Chris Trian and Gerrit Feenstra, the two members of Lone Control standing somewhere."}),r.a.createElement(y,null,r.a.createElement(v,null,"Ethereal version"),r.a.createElement("p",null,"Lone Control is a blip. Shrill. Loud. And now."),r.a.createElement("p",null,"You can live your life without so many things, so many experiences, purchased or otherwise."),r.a.createElement("p",null,"You can live your life without hearing Lone Control or the Rolling Stones."),r.a.createElement("p",null,"Or, you can live inclusively. Inclusive of joy, of pain, and of the noise between, wherein Lone Control may be your guide."),r.a.createElement("p",null,"Lone Control occupy the space of the now, a disposable place of anxiety and aggregation. The future holds only the next moment, or a thousand miles of blank space. Dealer’s choice, curated for convenience."),r.a.createElement("p",null,"Lone Control question the means of the why. The push pull incentive of aging and irrelevance. One inconsequential notion in a long array of impotence. And yet, we exist. We breathe. We sweat. We bleed and fight and fuck and beg for meaning. The silence is an invitation."),r.a.createElement("p",null,"Lone Control’s debut is a flash in the pan, arresting, burning bright while waning focus may last. Four hints at a larger question, too large to answer now. That moment will come in time. For now, there is only this. Here. There. Gone.")),r.a.createElement(d.a,null),r.a.createElement(y,null,r.a.createElement(v,null,"Tangible version"),r.a.createElement("p",null,"Lone Control is a blip. Shrill. Loud. And now."),r.a.createElement("p",null,"Lone Control is born from common desire. Desire to break free of the predetermination of the daily millstone grind. This is not a hardened desire, but one that continues to bubble and burst with time. What Chris and Gerrit each bring to the creative circle rarely overlaps. These are unfitting pieces, made to lay together awkwardly, unrefined and unhinged."),r.a.createElement("p",null,"Chris and Gerrit met at a downtown Phoenix bar over the discussion of an At The Drive-In t-shirt. The former, from an El Paso punk background, fresh to the city. The latter, a return resident, after years apart making electronic music in Seattle. The two hit it off immediately, finding common ground in Nine Inch Nails, Brainiac, and the early works of Steve Albini."),r.a.createElement("p",null,"Older than they once were but not yet beyond the pale, Lone Control represents a knowing outburst – a cry, not for help or attention, but to rally any who might find need. Their creations are crude and abrasive by design. Rarely in this age of immediacy do they find meaningful value in the overwrought."," "),r.a.createElement("p",null,"Lone Control’s debut is a flash in the pan, arresting, burning bright while waning focus may last. Four hints at a larger question, too large to answer now. That moment will come in time. For now, there is only this. Here. There. Gone."," ")))}},152:function(e,n,t){"use strict";t.d(n,"b",function(){return m});var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(33),c=t.n(l);t.d(n,"a",function(){return c.a});t(153);var s=i.a.createContext({}),m=function(e){return i.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e,n,t){var a;e.exports=(a=t(155))&&a.default||a},155:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(55),c=t(2),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return t?i.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=s},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(e,n,t){"use strict";var a=t(158),i=t(0),o=t.n(i),r=t(4),l=t.n(r),c=t(165),s=t.n(c);function m(e){var n=e.description,t=e.lang,i=e.meta,r=e.keywords,l=e.title,c=a.data.site,m=n||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},n.a=m},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Phoenix based punks",author:"@brittanyIRL"}}}}},159:function(e,n,t){"use strict";var a=t(151),i=t(156),o=t(0),r=t.n(o),l=t(4),c=t.n(l),s=t(152),m=t(154),d=t.n(m);t(163),t(164);function u(){var e=d()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return u=function(){return e},e}var h=Object(a.b)(u(),function(e){return e.theme.colors.EERIE_BLACK},function(e){return e.theme.colors.PLATINUM},function(e){var n=e.theme;return n.font.family.primary+", "+n.font.family.backup+", sans-serif"},function(e){return e.theme.font.size.m}),p={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},f=function(e){var n=e.children;return r.a.createElement(s.b,{query:"2994927498",render:function(){return r.a.createElement(a.a,{theme:p},r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),n))},data:i})};f.propTypes={children:c.a.node.isRequired};n.a=f},160:function(e,n,t){"use strict";var a=t(151),i=t(0),o=t.n(i),r=t(4),l=t.n(r),c=t(159),s=t(152),m=a.c.nav.withConfig({displayName:"navigation__NavigationContainer",componentId:"vnb782-0"})(["height:100vh;display:flex;flex-direction:column;align-items:flex-start;padding:2rem 2rem 0 3rem;position:fixed;@media (max-width:600px){flex-direction:row;flex-wrap:wrap;padding:0 3rem;position:inherit;height:",";}"],function(e){return e.showForMobile?"100%":"5rem"});m.propTypes={showForMobile:l.a.bool};var d=a.c.div.withConfig({displayName:"navigation__LinksContainer",componentId:"vnb782-1"})(["@media (max-width:600px){width:100vw;display:flex;visibility:",";opacity:",";flex-direction:column;align-items:flex-end;text-align:right;height:",";transition:visibility 1s linear 300ms,opacity 300ms;}"],function(e){return e.showForMobile?"visible":"hidden"},function(e){return e.showForMobile?1:0},function(e){return e.showForMobile?"100vh":"0"});d.propTypes={showForMobile:l.a.bool};var u=a.c.div.withConfig({displayName:"navigation__SiteNavigation",componentId:"vnb782-2"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0;font-size:1.8rem;"]),h=a.c.div.withConfig({displayName:"navigation__SocialNavigation",componentId:"vnb782-3"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0;margin-top:2rem;font-size:1.4rem;"]),p=a.c.div.withConfig({displayName:"navigation__HeaderContainer",componentId:"vnb782-4"})(["display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;width:100%;height:6rem;padding-bottom:2rem;@media (min-width:600px){display:none;}"]),f=a.c.button.withConfig({displayName:"navigation__NavMenuButton",componentId:"vnb782-5"})(["margin-top:1rem;position:relative;width:4rem;height:4rem;border-top:0.2em solid ",";border-bottom:0.2em solid ",';&:before{content:"";position:absolute;top:1.5rem;left:0px;width:100%;border-top:0.2em solid ',";}@media (min-width:600px){display:none;}"],function(e){return e.theme.colors.MUMMYS_TOMB},function(e){return e.theme.colors.MUMMYS_TOMB},function(e){return e.theme.colors.MUMMYS_TOMB}),g=Object(a.c)(s.a).withConfig({displayName:"navigation__StyledLink",componentId:"vnb782-6"})(["color:",";width:100%;line-height:1.4;padding:0.1rem 0;&:hover{text-decoration:line-through;}&.active{color:",';font-weight:600;&:hover{text-decoration:none;cursor:default;}&:after{content:"--";}}'],function(e){return e.theme.colors.RAISIN_BLACK},function(e){return e.theme.colors.FELDGRAU}),v=function(e){var n=e.showNav,t=e.onClickToggleNav;return o.a.createElement(m,{showForMobile:n},o.a.createElement(p,null,o.a.createElement(f,{onClick:function(){return t(!n)}})),o.a.createElement(d,{showForMobile:n},o.a.createElement(u,null,o.a.createElement(g,{activeClassName:"active",to:"/home/"},"Home"),o.a.createElement(g,{activeClassName:"active",to:"/about/"},"About"),o.a.createElement(g,{activeClassName:"active",to:"/listen/"},"Listen"),o.a.createElement(g,{activeClassName:"active",to:"/shows/"},"Shows"),o.a.createElement(g,{activeClassName:"active",to:"/releases/"},"Releases"),o.a.createElement(g,{activeClassName:"active",to:"/lyrics/"},"Lyrics")),o.a.createElement(h,null,o.a.createElement(g,{to:"https://www.bandcamp.com/lonecontrol/",target:"_blank"},"BandCamp"),o.a.createElement(g,{to:"https://www.soundcloud.com/lonecontrol/",target:"_blank"},"Soundcloud"),o.a.createElement(g,{to:"https://www.instagram.com/lonecontrol",target:"_blank"},"Instagram"),o.a.createElement(g,{to:"https://www.twitter.com/lonecontrol",target:"_blank"},"Twitter"))))};v.propTypes={showNav:l.a.bool.isRequired,onClickToggleNav:l.a.func.isRequired};var w=v,y=a.c.div.withConfig({displayName:"layout__Body",componentId:"sc-12tk2uc-0"})(['display:grid;grid-template-columns:25% 75%;grid-template-areas:"navigation main" "footer footer";height:100vh;@media (max-width:600px){grid-template-columns:100%;grid-template-areas:"navigation" "main" "footer";overflow:',";height:100vh;}"],function(e){return e.hideWhileNavExposed?"hidden":"scroll"}),b=Object(a.c)(w).withConfig({displayName:"layout__StyledNavigation",componentId:"sc-12tk2uc-1"})(["grid-area:navigation;height:100vh;"]),x=a.c.main.withConfig({displayName:"layout__Main",componentId:"sc-12tk2uc-2"})(["margin:0;grid-area:main;height:100vh;max-height:100vh;overflow-y:scroll;padding:2rem 3rem 0 3rem;display:flex;flex-direction:column;align-content:center;width:100%;max-width:1100px;@media (max-width:600px){padding:0 3rem;margin-top:0;display:",";}"],function(e){return e.hideWhileNavExposed?"none":"block"}),E=a.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-12tk2uc-3"})(["grid-area:footer;text-align:left;position:absolute;height:5rem;width:100%;position:fixed;bottom:1rem;left:3rem;& > p{font-size:0.8rem;}@media (max-width:600px){display:none;}"]),C=new Date,N=function(e){var n=e.children,t=Object(i.useState)(!1),a=t[0],r=t[1];return o.a.createElement(c.a,null,o.a.createElement(y,{hideWhileNavExposed:a},o.a.createElement(b,{showNav:a,onClickToggleNav:r}),o.a.createElement(x,{hideWhileNavExposed:a},n),o.a.createElement(E,{hideWhileNavExposed:a},o.a.createElement("p",null,"copyright and content belong to Lone Control, ",C.getFullYear(),"."),o.a.createElement("p",null,"site maintained from the surface of Mars."))))};N.propTypes={children:l.a.node.isRequired};n.a=N},161:function(e,n,t){var a=t(11),i=t(18),o=t(19),r=/"/g,l=function(e,n,t,a){var i=String(o(e)),l="<"+n;return""!==t&&(l+=" "+t+'="'+String(a).replace(r,"&quot;")+'"'),l+">"+i+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(l),a(a.P+a.F*i(function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",t)}},162:function(e,n,t){"use strict";t(161)("bold",function(e){return function(){return e(this,"b","","")}})},166:function(e,n,t){"use strict";t(162);var a=t(154),i=t.n(a),o=t(0),r=t.n(o),l=t(4),c=t.n(l);function s(){var e=i()(["\n  font-size: 3.5rem;\n  font-family: ",";\n  padding-bottom: 2rem;\n  color: ",";\n"]);return s=function(){return e},e}var m=t(151).c.h2(s(),function(e){return e.theme.font.family.bold},function(e){return e.theme.colors.RAISIN_BLACK}),d=function(e){var n=e.children;return r.a.createElement(m,null,n)};d.propTypes={children:c.a.node.isRequired},n.a=d},168:function(e,n,t){"use strict";var a=t(154),i=t.n(a),o=t(0),r=t.n(o);function l(){var e=i()(["\n  width: 100%;\n  height: 0.2rem;\n  color: ",";\n  margin-bottom: 3rem;\n"]);return l=function(){return e},e}var c=t(151).c.hr(l(),function(e){return e.theme.colors.RAISIN_BLACK});n.a=function(){return r.a.createElement(c,null)}},182:function(e,n,t){e.exports=t.p+"static/pressshot2019-2f1d07e0857814f0ed8340932f3fdd70.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-4cd6d622d80877918077.js.map