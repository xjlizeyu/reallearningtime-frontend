"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    isLogin: JSON.parse(sessionStorage.getItem("isLogin")) || false,
    user: JSON.parse(sessionStorage.getItem("user")) || {}
  },
  mutations: {
    login: function login(state, user) {
      state.user = user;
      state.isLogin = true;
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("isLogin", true);
    },
    exit: function exit(state) {
      state.user = {};
      state.isLogin = false;
      window.localStorage.setItem("user", null);
      window.localStorage.setItem("isLogin", false);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getIsLogIn: function getIsLogIn(state) {
      return state.isLogin;
    },
    getUser: function getUser(state) {
      return state.user;
    }
  }
});

exports["default"] = _default;
