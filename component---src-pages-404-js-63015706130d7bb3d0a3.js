(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(173);a.default=function(){return r.a.createElement(l.a,{fullMenu:!0},r.a.createElement("article",{id:"main"},r.a.createElement("header",null,r.a.createElement("h2",null,"Not Found"),r.a.createElement("p",null,"Not a Valid URL"))))}},168:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(41),o=t.n(c);t.d(a,"a",function(){return o.a});t(169);var s=r.a.createContext({});function u(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,i=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:a,query:t,render:n||l,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,a,t){var n;e.exports=(n=t(172))&&n.default||n},170:function(e,a){e.exports={siteTitle:"Overseas Chinese Homecoming Gathering",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0abab5",manifestThemeColor:"#0abab5",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/overseas-chinese-homecoming-gathering-website",heading:"Overseas Chinese Homecoming Gathering",subHeading:"It’s the fullness of time, overseas Chinese come home!",socialLinks:[{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/"}]}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Overseas Chinese Homecoming Gathering"}}}}},172:function(e,a,t){"use strict";t.r(a);t(42);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(65),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},173:function(e,a,t){"use strict";var n=t(8),r=t.n(n),l=t(171),i=t(0),c=t.n(i),o=t(5),s=t.n(o),u=t(174),m=t.n(u),d=t(168),f=(t(175),t(176),t(170)),h=t.n(f);function p(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("ul",{className:"icons"},h.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return c.a.createElement("li",{key:n},c.a.createElement("a",{href:n,className:"icon brands "+a},c.a.createElement("span",{className:"label"},t)))})),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"&copy North American Chinese Homecoming Gathering Servant Team (NACC)"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function E(e){var a=e.onMenuToggle,t=void 0===a?function(){}:a;return c.a.createElement("nav",{id:"nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"special"},c.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),t()},className:"menuToggle"},c.a.createElement("span",null,"Menu")),c.a.createElement("div",{id:"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/news"},"News")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/gatherings"},"Gatherings")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/sharings"},"Sharings")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/giving"},"Giving")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/about"},"About Us")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.flickr.com/photos/182245855@N04/albums",target:"_blank",rel:"noopener noreferrer"},"Gallery")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live",target:"_blank",rel:"noopener noreferrer"},"Live Stream"))),c.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),t()},href:"#menu"},"")))))}function g(e){var a=e.fullMenu,t=Object(i.useState)(!1),n=t[0],r=t[1];return c.a.createElement("header",{id:"header",className:a?"":"alt"},c.a.createElement("h1",null,c.a.createElement(d.a,{to:"/"},"OCHG")),c.a.createElement("div",{className:n?"is-menu-visible":" "},c.a.createElement(E,{onMenuToggle:function(){return r(!n)}})))}var v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props,a=e.children,t=e.fullMenu,n=this.state.isPreloaded;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},c.a.createElement("div",{id:"page-wrapper"},c.a.createElement(g,{fullMenu:t}),a,c.a.createElement(p,null))))},data:l})},a}(i.Component);v.propTypes={children:s.a.node.isRequired};a.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-63015706130d7bb3d0a3.js.map