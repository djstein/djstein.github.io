(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,n){var a={"./checklists.md":225,"./new-website.md":226};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=224},225:function(e,t,n){e.exports=n.p+"static/media/checklists.71123552.md"},226:function(e,t,n){e.exports=n.p+"static/media/new-website.870670a1.md"},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(2),l=n(229),m=n(231),u=n(21),s=n(8),d=n(26),p=n(3),f=n(230);function b(){var e=Object(p.a)(["\n  color: ",";\n  text-decoration: none;\n  padding: 0;\n  margin-top: 0;\n  font-size: ",";\n  font-weight: ",";\n"]);return b=function(){return e},e}function h(){var e=Object(p.a)(["\n  color: ",";\n  text-decoration: none;\n  padding: 0;\n  margin-top: 0;\n  font-size: ",";\n  font-weight: ",";\n"]);return h=function(){return e},e}var g=c.c.a(h(),function(e){return e.color?e.color:e.theme.link},function(e){return e.fontSize},function(e){return e.fontWeight||"initial"}),w=Object(c.c)(f.a)(b(),function(e){return e.color||e.theme.link},function(e){return e.fontSize},function(e){return e.fontWeight||"initial"}),v=function(e){var t=e.to,n=e.children,a=Object(d.a)(e,["to","children"]);return t.startsWith("https://")||t.startsWith("mailto:")?r.a.createElement(g,Object.assign({href:t},a,{target:"_blank",rel:"noopener noreferrer"}),n):r.a.createElement(w,Object.assign({to:t},a,{exact:!0,activeClassName:"active"}),n)};g.defaultProps={fontSize:"1.125rem"},w.defaultProps={fontSize:"1.125rem"};var y=function(e){var t=e.match,n=(e.history,t.path.split("/")[1]);return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"2rem",paddingBottom:"2rem"}},r.a.createElement(v,{to:"/",fontSize:"1.5rem",color:"black",fontWeight:"500"},"Dylan Stein"),"/"!==t.path&&r.a.createElement(v,{to:"/".concat(n,"/"),fontSize:"1.5rem",fontWeight:"500"},n[0].toUpperCase()+n.slice(1)))};function E(){var e=Object(p.a)(["\n  color: ",";\n  padding: 0;\n  margin: 0;\n  font-size: 1.125rem;\n  display: block;\n"]);return E=function(){return e},e}var k=c.c.p(E(),function(e){return e.text});function j(){var e=Object(p.a)(["\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  display: flex;\n  flex-wrap: wrap;\n  @media (min-width: 415px) {\n    justify-content: space-between;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n    @media (max-width: 415px) {\n      margin-right: 2rem;\n    }\n\n    a {\n      font-size: 1.5rem;\n      font-weight: bold;\n      margin-top: 1rem;\n    }\n  }\n"]);return j=function(){return e},e}var O=c.c.div(j()),x=function(){return r.a.createElement(O,null,r.a.createElement("div",null,r.a.createElement(v,{to:"/"},"Home"),r.a.createElement(v,{to:"/blog/"},"Blog"),r.a.createElement(v,{to:"/events/"},"Events")),r.a.createElement("div",null,r.a.createElement(v,{to:"https://www.twitter.com/d_j_stein"},"Twitter"),r.a.createElement(v,{to:"https://www.instagram.com/d_j_stein"},"Instagram")),r.a.createElement("div",null,r.a.createElement(v,{to:"/work/"},"Work"),r.a.createElement(v,{to:"https://github.com/djstein"},"GitHub"),r.a.createElement(v,{to:"https://www.linkedin.com/in/dylanstein/"},"LinkedIn")))};function S(){var e=Object(p.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  @media (min-width: 415px) {\n    max-width: 42rem;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return S=function(){return e},e}var C=c.c.div(S()),z=function(e){var t=e.children;return r.a.createElement(C,null,r.a.createElement("div",{style:{minHeight:"15rem"}},t),r.a.createElement(x,null))},D=[{path:"/",Component:function(e){var t=e.match;e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{match:t}),r.a.createElement(k,{style:{paddingTop:"1rem"}},"Software engineer @ Apple, Inc."))},Layout:z}],W=n(7);function F(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  a {\n    padding-bottom: 3rem;\n  }\n"]);return F=function(){return e},e}var I=c.c.section(F());function T(){var e=Object(p.a)(["\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  a {\n    font-size: 3rem;\n    font-weight: bold;\n  }\n  p {\n    font-size: 1.25rem;\n    font-weight: 100;\n  }\n"]);return T=function(){return e},e}var q=c.c.div(T()),L={checklists:{title:"Checklists",subtitle:"Thoughts on a checklist app",publishDate:"4/20/2019",featured:!0},"new-website":{title:"New Website",subtitle:"The new website",publishDate:"2/15/2019",featured:!0}},N=n(16),_=n.n(N),M=n(23),A=n.n(M),B=function(e){var t=Object(a.useState)(null),r=Object(W.a)(t,2),o=r[0],i=r[1],c=Object(a.useState)(null),l=Object(W.a)(c,2),m=l[0],u=l[1];return Object(a.useEffect)(function(){try{var t=n(224)("./".concat(e,".md"));fetch(t).then(function(e){return e.text()}).then(function(e){return function(e){u(e),i(!0)}(e)})}catch(a){i(!1)}},[m]),[m,o]};function R(){var e=Object(p.a)(["\n  font-weight: bold;\n  padding: 0;\n  color: ",";\n"]);return R=function(){return e},e}var H=c.c.h1(R(),function(e){return e.theme.title});function P(){var e=Object(p.a)(["\n  color: ",";\n  padding-top: 0.5rem;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n  p {\n    font-size: 1.125rem;\n  }\n  ul {\n    padding-left: 1rem;\n    li {\n      padding-bottom: 0.5rem;\n    }\n  }\n"]);return P=function(){return e},e}var J=c.c.div(P(),function(e){return e.theme.text}),U=(new Date).getFullYear(),G=function(){return r.a.createElement("div",{style:{paddingTop:"2rem"}},r.a.createElement(k,null,"Dylan Stein"),r.a.createElement(k,null,"\xa9 ",U," "))},Y=_.a.setOptions({renderer:new _.a.Renderer,highlight:function(e){return A.a.highlightAuto(e).value},pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1}),$=[{path:"/blog/",Component:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{match:t}),r.a.createElement(I,null,Object.entries(L).map(function(e){var t=Object(W.a)(e,2),n=t[0],a=t[1];return r.a.createElement(q,{key:n},r.a.createElement(v,{to:"/blog/".concat(n)},a.title,r.a.createElement(k,null,a.publishDate)))})))},Layout:z},{path:"/blog/:fileName",Component:function(e){e.location;var t=e.match,n=t.params.fileName,a=B(n),o=Object(W.a)(a,2),i=o[0],c=o[1],l=L[n]?L[n]:{},m=l.subtitle,u=l.title,s=l.publishDate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{match:t}),m&&u&&s?r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{style:{paddingTop:"2rem"}},r.a.createElement(v,{to:"/blog/".concat(n)},u)),i?r.a.createElement(J,{dangerouslySetInnerHTML:{__html:Y(i)}}):r.a.createElement("div",{style:{height:"100vh"}}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",paddingTop:"2rem"}},r.a.createElement(v,{style:{paddingRight:"1rem",fontWeight:"bold"},to:"https://github.com/djstein/djstein.github.io/blob/src/src/blog/posts/".concat(n,".md")},"Edit on GitHub"),r.a.createElement(v,{fontWeight:"500",style:{paddingRight:"1rem",fontWeight:"bold"},to:"https://mobile.twitter.com/search?q=".concat(encodeURIComponent("https://djstein.github.io/blog/".concat(n)))},"Discuss on Twitter"))):!1===c?r.a.createElement(H,null,"Post not found"):r.a.createElement("div",{style:{height:"100vh"}}),null!==c&&r.a.createElement(G,null))},Layout:z}],K=[{path:"/events/",Component:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{match:t}),r.a.createElement(k,{style:{paddingTop:"1rem"}},"Currently scheduling events for the end of March! Check back for updates."))},Layout:z}],Q=n(11),V=n(24);function X(){var e=Object(p.a)(["\n  font-size: 0.75rem;\n"]);return X=function(){return e},e}var Z=c.c.label(X());function ee(){var e=Object(p.a)(["\n  font-size: 1rem;\n  display: block;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n\n  border-radius: 0;\n  border: none;\n  border-bottom-color: black;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n"]);return ee=function(){return e},e}var te=c.c.input(ee());function ne(){var e=Object(p.a)(["\n  border: none;\n  margin-left: 0;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 1rem;\n  width: 100%;\n"]);return ne=function(){return e},e}var ae=c.c.fieldset(ne());function re(){var e=Object(p.a)(["\n  font-size: 1rem;\n  display: block;\n\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-left: 0;\n  margin-right: 0;\n\n  border-radius: 0;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n\n  background-color: black;\n  color: white;\n\n  :hover {\n    border-color: #666;\n    background-color: #666;\n  }\n\n  :active {\n    border-color: #666;\n    background-color: white;\n    color: black;\n  }\n"]);return re=function(){return e},e}var oe=c.c.button(re()),ie=function(){var e=[{name:"name",label:"Name",type:"text",required:!0},{name:"email",label:"Email",type:"email",required:!0},{name:"description",label:"Description",type:"text",required:!0},{name:"company",label:"Company",type:"text"}],t=Object(a.useState)({}),n=Object(W.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{style:{paddingBottom:"2rem"}},r.a.createElement(H,null,"Inquiries"),r.a.createElement(k,null,"Please fill out this form to begin the process for inquires towards full time positions, open source contributions, or contract work. It will create a templated email for you!"),r.a.createElement("form",{id:"inquiryForm",onSubmit:function(){return function(){var t="\nInquiry Form - dylanstein.dev%0D%0A".concat(e.map(function(e){return o[e.name]&&"".concat(e.label,": ").concat(o[e.name])}).join("%0D%0A"));window.open("mailto:djstein@ncsu.edu?subject=Inquiry Request - ".concat(o.company||o.name,"&body=").concat(t))}()}},e.map(function(e){return r.a.createElement(ae,{key:e.name},r.a.createElement(Z,{key:"".concat(e.name,"_label"),htmlFor:e.name},e.label),r.a.createElement(te,{type:e.type,name:e.name,placeholder:e.label,onChange:function(t){return function(e,t){i(Object(V.a)({},o,Object(Q.a)({},t,e.target.value)))}(t,e.name)},required:e.required}))}),r.a.createElement(oe,{type:"submit"},"Submit"),r.a.createElement(k,{style:{fontSize:"1rem"}},"* Rates and licensing will be provided on a case by case basis, determined by project specifications.")))},ce=[{company:"Apple",start:"Nov 2018",end:"Present",website:"https://www.apple.com",summary:"Fullstack Web Developer"},{company:"BentoBox",start:"Mar 2017",end:"Nov 2018",website:"https://www.getbento.com",summary:"Fullstack Engineer"},{company:"NCSU - OSCAR Labs",start:"Aug 2014",end:"Dec 2016",website:"https://www.ncsu.edu",summary:"Software Developer"},{company:"BoostOurTeam",start:"Oct 2015",end:"Jan 2017",website:"#",summary:"CTO"},{company:"Sears Holdings",start:"May 2016",end:"Jul 2016",website:"https://searsholdings.com",summary:"Software Development Intern"},{company:"Principal Financial Group",start:"May 2013",end:"Aug 2015",website:"https://www.principal.com/",summary:"RIS Java Development Intern"}],le=[{path:"/work/",Component:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{match:t}),r.a.createElement(ie,null),r.a.createElement(I,null,r.a.createElement(H,null,"Experience"),Object.entries(ce).map(function(e){var t=Object(W.a)(e,2),n=t[0],a=t[1],o=a.website,i=a.company,c=a.summary,l=a.start,m=a.end;return r.a.createElement(v,{to:o,key:n},r.a.createElement(k,{style:{fontSize:"1.25rem",fontWeight:"600"}},i),r.a.createElement(k,null,c),r.a.createElement(k,null,l," - ",m))})))},Layout:z}],me=[].concat(Object(s.a)(D),Object(s.a)($),Object(s.a)(K),Object(s.a)(le));function ue(){var e=Object(p.a)(['\nbody {\n  margin: 0;\n  padding: 0;\n  font-family:  sans-serif;\n  font-smooth: auto;\n  letter-spacing: .125rem;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  \ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n']);return ue=function(){return e},e}var se=Object(c.b)(ue()),de={title:"white",subtitle:"white",text:"white",link:"white",background:"black"},pe={title:"black",subtitle:"black",text:"black",link:"black",background:"white"};window.matchMedia("(prefers-color-scheme: dark)").addListener(function(){pe=de});var fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}),r.a.createElement(se,null),r.a.createElement(c.a,{theme:pe},r.a.createElement(l.a,null,r.a.createElement(m.a,null,me.map(function(e){var t=e.Layout,n=e.Component,a=e.path;return r.a.createElement(u.a,{key:a,path:a,exact:!0,render:function(e){return r.a.createElement(t,e,r.a.createElement(n,e))}})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,n){e.exports=n(227)}},[[28,1,2]]]);
//# sourceMappingURL=main.aeefc13c.chunk.js.map