(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(n,e,t){"use strict";t.r(e);var r=t(154),o=t.n(r),a=t(0),i=t.n(a),c=t(151),u=t(152),s=t(159),l=t(157),m=t(167),d=t.n(m);function f(){var n=o()(["\n  max-width: 60rem;\n  margin-top: 2rem;\n  font-size: 2rem;\n  background-color: ",";\n  color: ",";\n  font-weight: 600;\n  padding: 1rem;\n  &:hover {\n    font-style: italic;\n  }\n\n  animation-name: colorPulse;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n\n  @keyframes colorPulse {\n    0% {\n      font-weight: 600;\n      background-color: ",";\n    }\n    50% {\n      font-weight: 700;\n\n      background-color: ",";\n    }\n    100% {\n      font-weight: 600;\n      background-color: ",";\n    }\n  }\n"]);return f=function(){return n},n}function p(){var n=o()(["\n  background-image: url(",");\n  width: 100vw;\n  height: 100vh;\n  background-size: contain;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return n},n}var h=c.c.div(p(),d.a),g=Object(c.c)(u.a)(f(),function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.PLATINUM},function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.FELDGRAU},function(n){return n.theme.colors.RAISIN_BLACK});e.default=function(){return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"404: Not found!!"}),i.a.createElement(h,null,i.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zdzY49xlvdY?start=10",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),i.a.createElement(g,{to:"/home/"},"You're so clever. Here's Thurston Moore interviewing Beck or you can go back to Lone Control's home page by clicking here.")))}},152:function(n,e,t){"use strict";t.d(e,"b",function(){return l});var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(33),u=t.n(c);t.d(e,"a",function(){return u.a});t(153);var s=o.a.createContext({}),l=function(n){return o.a.createElement(s.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(55),u=t(2),s=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return t?o.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(n,e,t){"use strict";var r=t(158),o=t(0),a=t.n(o),i=t(4),c=t.n(i),u=t(165),s=t.n(u);function l(n){var e=n.description,t=n.lang,o=n.meta,i=n.keywords,c=n.title,u=r.data.site,l=e||u.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},158:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Phoenix based punks",author:"@brittanyIRL"}}}}},159:function(n,e,t){"use strict";var r=t(151),o=t(156),a=t(0),i=t.n(a),c=t(4),u=t.n(c),s=t(152),l=t(154),m=t.n(l);t(163),t(164);function d(){var n=m()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return d=function(){return n},n}var f=Object(r.b)(d(),function(n){return n.theme.colors.EERIE_BLACK},function(n){return n.theme.colors.PLATINUM},function(n){var e=n.theme;return e.font.family.primary+", "+e.font.family.backup+", sans-serif"},function(n){return n.theme.font.size.m}),p={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},h=function(n){var e=n.children;return i.a.createElement(s.b,{query:"2994927498",render:function(){return i.a.createElement(r.a,{theme:p},i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),e))},data:o})};h.propTypes={children:u.a.node.isRequired};e.a=h},167:function(n,e,t){n.exports=t.p+"static/lc_ep_text-580f9588738fcb6bdcd7a5319164940e.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-a18585d5cf4e952adcf9.js.map