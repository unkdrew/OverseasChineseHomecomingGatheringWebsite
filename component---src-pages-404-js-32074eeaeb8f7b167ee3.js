(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(171);a.default=function(){return r.a.createElement(l.a,{fullMenu:!0},r.a.createElement("article",{id:"main"},r.a.createElement("header",null,r.a.createElement("h2",null,"Not Found"),r.a.createElement("p",null,"Not a Valid URL"))))}},167:function(e,a,t){var n;e.exports=(n=t(170))&&n.default||n},168:function(e,a){e.exports={siteTitle:"Overseas Chinese Homecoming Gathering",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0abab5",manifestThemeColor:"#0abab5",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/OverseasChineseHomecomingGatheringWebsite",heading:"Overseas Chinese Homecoming Gathering",subHeading:"It’s the fullness of time, overseas Chinese come home!",socialLinks:[{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/"}]}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Overseas Chinese Homecoming Gathering"}}}}},170:function(e,a,t){"use strict";t.r(a);t(42);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(65),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},171:function(e,a,t){"use strict";var n=t(8),r=t.n(n),l=t(169),i=t(0),c=t.n(i),o=t(5),s=t.n(o),u=t(172),m=t.n(u),d=t(41),f=t.n(d),h=(t(167),c.a.createContext({}));function E(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,l=t?t.data:a[n]&&a[n].data;return c.a.createElement(c.a.Fragment,null,l&&r(l),!l&&c.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return c.a.createElement(h.Consumer,null,function(e){return c.a.createElement(E,{data:a,query:t,render:n||r,staticQueryData:e})})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};t(173),t(174);var g=t(168),v=t.n(g);function b(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("ul",{className:"icons"},v.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return c.a.createElement("li",{key:n},c.a.createElement("a",{href:n,className:"icon brands "+a},c.a.createElement("span",{className:"label"},t)))})),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© North American Chinese Homecoming Gathering Servant Team (NACC)"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function w(e){var a=e.onMenuToggle,t=void 0===a?function(){}:a;return c.a.createElement("nav",{id:"nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"special"},c.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),t()},className:"menuToggle"},c.a.createElement("span",null,"Menu")),c.a.createElement("div",{id:"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/news"},"News")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/events"},"Events")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/sharings"},"Sharings")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/giving"},"Giving")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/about"},"About Us")),c.a.createElement("li",null,c.a.createElement("a",{href:"https:/www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live"},"Live Stream"))),c.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),t()},href:"#menu"},"")))))}function y(e){var a=e.fullMenu,t=Object(i.useState)(!1),n=t[0],r=t[1];return c.a.createElement("header",{id:"header",className:a?"":"alt"},c.a.createElement("h1",null,c.a.createElement(f.a,{to:"/"},"OCHG")),c.a.createElement("div",{className:n?"is-menu-visible":" "},c.a.createElement(w,{onMenuToggle:function(){return r(!n)}})))}var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props,a=e.children,t=e.fullMenu,n=this.state.isPreloaded;return c.a.createElement(p,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},c.a.createElement("div",{id:"page-wrapper"},c.a.createElement(y,{fullMenu:t}),a,c.a.createElement(b,null))))},data:l})},a}(i.Component);N.propTypes={children:s.a.node.isRequired};a.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-32074eeaeb8f7b167ee3.js.map