"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRadialProgress = _interopRequireDefault(require("vue-radial-progress"));

var _Card = _interopRequireDefault(require("./unidades/Card.vue"));

var _Container = _interopRequireDefault(require("./aulas/Container.vue"));

var _Navigation = _interopRequireDefault(require("./aulas/Navigation.vue"));

var _Footer = _interopRequireDefault(require("./Footer.vue"));

var _Navbar = _interopRequireDefault(require("./Navbar.vue"));

var _Trophies = _interopRequireDefault(require("./Trophies.vue"));

var _Quotes = _interopRequireDefault(require("./Quotes.vue"));

var _Question = _interopRequireDefault(require("./Question.vue"));

var _Challenge = _interopRequireDefault(require("./Challenge.vue"));

var _ChatDialog = _interopRequireDefault(require("./ChatDialog"));

var _ModalChatDialog = _interopRequireDefault(require("./ModalChatDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Plugins
// Unidades
// Aulas
// Artigos
// Chat
var Components = {
  install: function install(Vue) {
    Vue.component('mide-footer', _Footer["default"]);
    Vue.component('mide-navbar', _Navbar["default"]);
    Vue.component('mide-trophies', _Trophies["default"]);
    Vue.component('quotes', _Quotes["default"]);
    Vue.component('question', _Question["default"]);
    Vue.component('challenge', _Challenge["default"]);
    Vue.component('mide-unidade-card', _Card["default"]);
    Vue.component('mide-aulas-container', _Container["default"]);
    Vue.component('mide-aulas-navigation', _Navigation["default"]);
    Vue.component('mide-chat-dialog', _ChatDialog["default"]);
    Vue.component('mide-modal-chat-dialog', _ModalChatDialog["default"]); // plugins

    Vue.component('mide-radial-progress', _vueRadialProgress["default"]);
  }
};
var _default = Components;
exports["default"] = _default;