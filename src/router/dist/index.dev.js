"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("../views/home.vue"));

var _signIn = _interopRequireDefault(require("../views/signIn"));

var _logIn = _interopRequireDefault(require("../views/logIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  meta: {
    requireAuth: true
  },
  component: _home["default"]
}, {
  path: "/signin",
  name: "signin",
  component: _signIn["default"]
}, {
  path: "/login",
  name: "login",
  component: _logIn["default"]
}];
var router = new _vueRouter["default"]({
  mode: "hash",
  routes: routes
});
var _default = router;
exports["default"] = _default;