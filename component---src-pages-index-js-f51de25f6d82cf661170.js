(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(152),i=t(153),c=t(168),s=t(159),l=t(157),u=t(187),d=t.n(u),m=t(169),p=t.n(m),f=a.c.div.withConfig({displayName:"pages__SplashContainer",componentId:"sc-16cyr0y-0"})(["width:100vw;height:100vh;display:block;position:absolute;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;"],d.a),h=Object(a.c)(c.OutboundLink).withConfig({displayName:"pages__SplashText",componentId:"sc-16cyr0y-1"})(["background-image:url(",");position:absolute;top:0;right:0;bottom:0;left:0;min-width:30vw;max-width:600px;max-height:200px;z-index:100;margin:auto;background-repeat:no-repeat;background-position:center;background-size:contain;&:hover{opacity:0.7;}"],p.a),g=Object(a.c)(i.a).withConfig({displayName:"pages__EnterSite",componentId:"sc-16cyr0y-2"})(["position:absolute;bottom:0;right:0;left:0;width:100%;height:10rem;text-align:center;font-size:4rem;font-weight:600;animation-name:colorPulse;animation-duration:4s;animation-iteration-count:infinite;color:",";@keyframes colorPulse{0%{font-weight:600;color:",";}50%{font-weight:700;color:",";}100%{font-weight:600;color:",";}}@media (max-width:600px){font-size:3rem;height:5rem;}"],function(e){return e.theme.colors.RAISIN_BLACK},function(e){return e.theme.colors.RAISIN_BLACK},function(e){return e.theme.colors.FELDGRAU},function(e){return e.theme.colors.RAISIN_BLACK});n.default=function(){return o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Lone Control",keywords:["phoenix","punk","music","chris","gerrit","desert drip","new music","unnecessary voice","lone control","loan control","arizona","rock","indie","band"]}),o.a.createElement("body",null,o.a.createElement(f,null,o.a.createElement(h,{alt:"Visit Bandcamp to hear the debut EP",href:"https://desertdriprecords.bandcamp.com/album/lone-control","aria-description":"Lone Control",target:"_blank"}),o.a.createElement(g,{to:"/home/"},"Enter Site"))))}},153:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(33),s=t.n(c);t.d(n,"a",function(){return s.a});t(154);var l=o.a.createContext({}),u=function(e){return o.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,n,t){var r;e.exports=(r=t(155))&&r.default||r},155:function(e,n,t){"use strict";t.r(n);t(34);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(55),s=t(2),l=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return t?o.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(e,n,t){"use strict";var r=t(158),o=t(0),a=t.n(o),i=t(4),c=t.n(i),s=t(166),l=t.n(s);function u(e){var n=e.description,t=e.lang,o=e.meta,i=e.keywords,c=e.title,s=r.data.site,u=n||s.siteMetadata.description;return a.a.createElement(l.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},n.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Lone Control’s debut is a flash in the pan, arresting, burning bright while waning focus may last. Four hints at a larger question, too large to answer now. That moment will come in time. For now, there is only this. Here. There. Gone."}}}}},159:function(e,n,t){"use strict";var r=t(152),o=t(156),a=t(0),i=t.n(a),c=t(4),s=t.n(c),l=t(153),u=t(163),d=t.n(u);t(164),t(165);function m(){var e=d()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return m=function(){return e},e}var p=Object(r.b)(m(),function(e){return e.theme.colors.EERIE_BLACK},function(e){return e.theme.colors.PLATINUM},function(e){var n=e.theme;return n.font.family.primary+", "+n.font.family.backup+", sans-serif"},function(e){return e.theme.font.size.m}),f={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},h=function(e){var n=e.children;return i.a.createElement(l.b,{query:"2994927498",render:function(){return i.a.createElement(r.a,{theme:f},i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),n))},data:o})};h.propTypes={children:s.a.node.isRequired};n.a=h},168:function(e,n,t){"use strict";var r=t(8);n.__esModule=!0,n.OutboundLink=c;var o=r(t(74)),a=r(t(0)),i=r(t(4));function c(e){return a.default.createElement("a",(0,o.default)({},e,{onClick:function(n){"function"==typeof e.onClick&&e.onClick(n);var t=!0;return(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)&&(t=!1),e.target&&"_self"!==e.target.toLowerCase()&&(t=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:t?"beacon":"",hitCallback:function(){t&&(document.location=e.href)}}):t&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},169:function(e,n,t){e.exports=t.p+"static/lc_ep_text-3f2f370d1c82898c8d07d733aa859355.png"},187:function(e,n,t){e.exports=t.p+"static/lc_house_bw-53f091f5a82babb30a5739159a138441.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f51de25f6d82cf661170.js.map