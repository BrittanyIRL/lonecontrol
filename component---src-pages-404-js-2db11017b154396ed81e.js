(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(152),i=t(153),c=t(159),l=t(157),s=t(169),u=t.n(s),m=o.c.div.withConfig({displayName:"sc-404__Container",componentId:"bqdh5x-0"})(["background-image:url(",");width:100vw;height:100vh;background-size:contain;display:flex;flex-direction:column;align-items:center;justify-content:center;"],u.a),d=Object(o.c)(i.a).withConfig({displayName:"sc-404__StyledLink",componentId:"bqdh5x-1"})(["max-width:60rem;margin-top:2rem;font-size:2rem;background-color:",";color:",";font-weight:600;padding:1rem;&:hover{font-style:italic;}animation-name:colorPulse;animation-duration:4s;animation-iteration-count:infinite;@keyframes colorPulse{0%{font-weight:600;background-color:",";}50%{font-weight:700;background-color:",";}100%{font-weight:600;background-color:",";}}"],function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.PLATINUM},function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.FELDGRAU},function(n){return n.theme.colors.RAISIN_BLACK});e.default=function(){return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"404: Not found!!"}),a.a.createElement(m,null,a.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zdzY49xlvdY?start=10",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),a.a.createElement(d,{to:"/home/"},"Woah! How'd you get here? ",a.a.createElement("br",null)," Click here to return to site.")))}},153:function(n,e,t){"use strict";t.d(e,"b",function(){return u});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(33),l=t.n(c);t.d(e,"a",function(){return l.a});t(154);var s=a.a.createContext({}),u=function(n){return a.a.createElement(s.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(55),l=t(2),s=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(n,e,t){"use strict";var r=t(158),a=t(0),o=t.n(a),i=t(4),c=t.n(i),l=t(166),s=t.n(l);function u(n){var e=n.description,t=n.lang,a=n.meta,i=n.keywords,c=n.title,l=r.data.site,u=e||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},158:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Lone Control’s debut is a flash in the pan, arresting, burning bright while waning focus may last. Four hints at a larger question, too large to answer now. That moment will come in time. For now, there is only this. Here. There. Gone."}}}}},159:function(n,e,t){"use strict";var r=t(152),a=t(156),o=t(0),i=t.n(o),c=t(4),l=t.n(c),s=t(153),u=t(163),m=t.n(u);t(164),t(165);function d(){var n=m()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return d=function(){return n},n}var f=Object(r.b)(d(),function(n){return n.theme.colors.EERIE_BLACK},function(n){return n.theme.colors.PLATINUM},function(n){var e=n.theme;return e.font.family.primary+", "+e.font.family.backup+", sans-serif"},function(n){return n.theme.font.size.m}),h={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},p=function(n){var e=n.children;return i.a.createElement(s.b,{query:"2994927498",render:function(){return i.a.createElement(r.a,{theme:h},i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),e))},data:a})};p.propTypes={children:l.a.node.isRequired};e.a=p},169:function(n,e,t){n.exports=t.p+"static/lc_ep_text-3f2f370d1c82898c8d07d733aa859355.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-2db11017b154396ed81e.js.map