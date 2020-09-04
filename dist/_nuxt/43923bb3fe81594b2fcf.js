/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{416:function(e,t,o){var content=o(433);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("0ace817b",content,!0,{sourceMap:!1})},431:function(e,t,o){var n,r;!function(c){if(void 0===(r="function"==typeof(n=c)?n.call(t,o,t,e):n)||(e.exports=r),!0,e.exports=c(),!!0){var d=window.Cookies,l=window.Cookies=c();l.noConflict=function(){return window.Cookies=d,l}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var o in t)e[o]=t[o]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function o(n){function r(){}function c(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},r.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var d=JSON.stringify(o);/^[\{\[]/.test(d)&&(o=d)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var l="";for(var m in c)c[m]&&(l+="; "+m,!0!==c[m]&&(l+="="+c[m].split(";")[0]));return document.cookie=t+"="+o+l}}function d(e,o){if("undefined"!=typeof document){for(var r={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var d=c[i].split("="),l=d.slice(1).join("=");o||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var m=t(d[0]);if(l=(n.read||n)(l,m)||t(l),o)try{l=JSON.parse(l)}catch(e){}if(r[m]=l,e===m)break}catch(e){}}return e?r[e]:r}}return r.set=c,r.get=function(e){return d(e,!1)},r.getJSON=function(e){return d(e,!0)},r.remove=function(t,o){c(t,"",e(o,{expires:-1}))},r.defaults={},r.withConverter=o,r}((function(){}))}))},432:function(e,t,o){"use strict";var n=o(416);o.n(n).a},433:function(e,t,o){(t=o(3)(!1)).push([e.i,"@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.content-index{margin-bottom:100px}.content-index h3{font:18px avenir-next-lt-pro-bold;letter-spacing:1.2px;color:#c0315f;text-transform:uppercase;margin-top:40px}.content-index button{border:none;background:none}",""]),e.exports=t},454:function(e,t,o){"use strict";o.r(t);var n=o(49),r=o(431),c=o.n(r),d=[{avatar:o(170),text:"Olá meu nome é <strong>Carla</strong>. Sou professora de Matemática."},{right:!0,avatar:o(171),text:"Oi meu nome é <strong>Marcos</strong>. Sou professor de Português."},{avatar:o(170),text:'É com satisfação que recebemos você no curso "Uso de recursos educativos digitais!"'},{right:!0,avatar:o(171),text:"Neste curso vamos entender como a <strong>cultura digital</strong> pode mudar algumas práticas de sala de aula. Vamos <strong>conhecer</strong> alguns  Recursos Educacionais Digitais ou, simplesmente, <strong>RED</strong>."},{avatar:o(170),text:"Sim! Vamos ver como esses recursos podem ser instrumentos de ensino e aprendizagem na Língua Portuguesa e na Matemática nos anos iniciais do Ensino Fundamental."},{right:!0,avatar:o(171),text:"Ao final do curso vamos conhecer alguns <strong>planejamentos</strong> e também <strong>planejar</strong> aulas com suporte de Recursos Educacionais Digitais."},{avatar:o(170),text:"Os objetivos do curso são esses:"},{type:"text",text:"\n        <ol>\n          <li>Desenvolver conhecimento sobre o ensino e aprendizagem na cultura digital</li>\n          <li>Conhecer Recursos Educacionais Digitais (RED) como instrumentos de ensino e aprendizagem.</li>\n          <li>Planejar aulas com suporte dos RED.</li>\n        </ol>\n      "},{right:!0,avatar:o(171),text:" Vamos entender um pouco da estrutura do curso. Você deseja ver a <strong>ementa</strong> agora?"},{type:"bool",yes:[{right:!0,avatar:o(171),text:"Tudo bem! Esta é a ementa do curso:"},{type:"text",text:"A cultura digital e o mundo contemporâneo. Recursos Educacionais Digitais como instrumentos de ensino e aprendizagem. Possibilidades do uso de RED de Língua Portuguesa e Matemática nos anos iniciais do Ensino Fundamental.  Planejamento de aulas com suporte de Recursos Educacionais Digitais"},{avatar:o(170),text:"Agora veja a estrutura abaixo para entender a estrutura do curso:"},{type:"text",text:'<img src="'.concat(o(176),'"/>')},{type:"end"}],no:[{right:!0,avatar:o(171),text:"Tudo bem! Lembre-se que você pode acessar a ementa sempre que desejar durante o curso."},{avatar:o(170),text:"Agora veja a imagem abaixo para entender a estrutura do curso:"},{type:"text",text:'\n            <img src="'.concat(o(176),'" />\n          ')},{type:"end"}]}],l={data:function(){return{dialogs:Object(n.a)(d),isWelcomeActive:!1}},mounted:function(){var e=this;this.$nextTick((function(){!!c.a.get("WELCOME_DIALOG")||(e.isWelcomeActive=!0)}))},methods:{openWelcomeDialog:function(){this.isWelcomeActive=!0},onDialogsChange:function(e){this.dialogs=e},onDialogsClose:function(){c.a.set("WELCOME_DIALOG",!0,{expires:7})}}},m=(o(432),o(2)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("center",[n("div",{staticClass:"content-index"},[n("img",{attrs:{src:o(177)}}),e._v(" "),n("h3",[e._v("Curso de Formação")]),e._v(" "),n("h1",{staticClass:"title is-1"},[e._v("Uso de Recursos Educacionais Digitais")]),e._v(" "),n("p",[e._v("\n      O curso irá lhe ajudar a entender como a cultura digital pode mudar\n      algumas práticas de sala de aula e conhecer Recursos Educacionais\n      Digitais (RED) de Língua Portuguesa e Matemática.\n    ")]),e._v(" "),n("br"),e._v(" "),n("button",[n("nuxt-link",{attrs:{to:"/home"}},[n("img",{attrs:{src:o(180),width:"200"}})])],1),e._v(" "),n("mide-modal-chat-dialog",{attrs:{dialogs:e.dialogs},on:{dialogs:e.onDialogsChange,close:e.onDialogsClose},model:{value:e.isWelcomeActive,callback:function(t){e.isWelcomeActive=t},expression:"isWelcomeActive"}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);