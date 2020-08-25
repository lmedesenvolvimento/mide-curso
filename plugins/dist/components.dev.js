"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _components = _interopRequireDefault(require("@/components"));

var _manifest = _interopRequireDefault(require("@/manifest.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Configure Manifest
_vue["default"].prototype.$manifest = _manifest["default"];

_vue["default"].use(_components["default"]);