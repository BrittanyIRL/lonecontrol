(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(159),i=e(157),c=e(154),u=e.n(c),s=e(151),l=e(152),d=e(4),m=e.n(d),f=e(185),p=e.n(f),h=e(167),g=e.n(h);function b(){var n=u()(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 10rem;\n  text-align: center;\n  font-size: 4rem;\n  font-weight: 600;\n  animation-name: colorPulse;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n  color: ",";\n\n  @keyframes colorPulse {\n    0% {\n      font-weight: 600;\n      color: ",";\n    }\n    50% {\n      font-weight: 700;\n\n      color: ",";\n    }\n    100% {\n      font-weight: 600;\n      color: ",";\n    }\n  }\n\n  @media (max-width: 600px) {\n    font-size: 3rem;\n    height: 5rem;\n  }\n"]);return b=function(){return n},n}function y(){var n=u()(["\n  background-image: url(",");\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  min-width: 30vw;\n  max-width: 600px;\n  max-height: 200px;\n  z-index: 100;\n  margin: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return y=function(){return n},n}function w(){var n=u()(["\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: block;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return w=function(){return n},n}var x=s.c.div(w(),p.a),v=s.c.a(y(),g.a),E=Object(s.c)(l.a)(b(),function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.RAISIN_BLACK},function(n){return n.theme.colors.FELDGRAU},function(n){return n.theme.colors.RAISIN_BLACK}),k=function(){return a.a.createElement(x,null,a.a.createElement(v,{alt:"Visit Bandcamp to hear the debut EP",href:"www.bandcamp.com/lonecontrol","aria-description":"Lone Control"}),a.a.createElement(E,{to:"/home/"},"Enter Site"))};k.propTypes={onEnterSite:m.a.func};var z=k;t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),a.a.createElement(z,null))}},152:function(n,t,e){"use strict";e.d(t,"b",function(){return l});var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=e(33),u=e.n(c);e.d(t,"a",function(){return u.a});e(153);var s=a.a.createContext({}),l=function(n){return a.a.createElement(s.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(n,t,e){var r;n.exports=(r=e(155))&&r.default||r},155:function(n,t,e){"use strict";e.r(t);e(34);var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=e(55),u=e(2),s=function(n){var t=n.location,e=u.default.getResourcesForPathnameSync(t.pathname);return e?a.a.createElement(c.a,Object.assign({location:t,pageResources:e},e.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},156:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control"}}}}},157:function(n,t,e){"use strict";var r=e(158),a=e(0),o=e.n(a),i=e(4),c=e.n(i),u=e(165),s=e.n(u);function l(n){var t=n.description,e=n.lang,a=n.meta,i=n.keywords,c=n.title,u=r.data.site,l=t||u.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:e},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},158:function(n){n.exports={data:{site:{siteMetadata:{title:"Lone Control",description:"Phoenix based punks",author:"@brittanyIRL"}}}}},159:function(n,t,e){"use strict";var r=e(151),a=e(156),o=e(0),i=e.n(o),c=e(4),u=e.n(c),s=e(152),l=e(154),d=e.n(l);e(163),e(164);function m(){var n=d()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return m=function(){return n},n}var f=Object(r.b)(m(),function(n){return n.theme.colors.EERIE_BLACK},function(n){return n.theme.colors.PLATINUM},function(n){var t=n.theme;return t.font.family.primary+", "+t.font.family.backup+", sans-serif"},function(n){return n.theme.font.size.m}),p={colors:{EERIE_BLACK:"#1B1A18",RAISIN_BLACK:"#252812",FELDGRAU:"#495253",MUMMYS_TOMB:"#8C8F84",PLATINUM:"#E8E8E8"},font:{family:{primary:"HKGrotesk",bold:"HKGrotesk-Bold",italic:"HKGrotesk-Italic",backup:"Helvetica"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},h=function(n){var t=n.children;return i.a.createElement(s.b,{query:"2994927498",render:function(){return i.a.createElement(r.a,{theme:p},i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),t))},data:a})};h.propTypes={children:u.a.node.isRequired};t.a=h},167:function(n,t,e){n.exports=e.p+"static/lc_ep_text-3f2f370d1c82898c8d07d733aa859355.png"},185:function(n,t,e){n.exports=e.p+"static/lc_house_bw-516d0f1d9e86764403f0df9c706a5df4.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-da2589d7d9571513d969.js.map