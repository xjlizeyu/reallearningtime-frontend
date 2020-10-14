"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _moment = _interopRequireDefault(require("moment"));

var _echarts = _interopRequireDefault(require("echarts"));

require("./assets/scss/style.scss");

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].config.productionTip = false;
//导入文件
_vue["default"].prototype.$moment = _moment["default"]; //赋值使用

_moment["default"].locale("zh-cn"); //国际化，中文


_vue["default"].use(_echarts["default"]); //引入全局css


new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app"); // 检验是否在未登陆的情况下访问需要验证的页面
// 需要在router里添加 meta: { requireAuth: true }

_router["default"].beforeEach(function (to, from, next) {
  if (to.matched.some(function (m) {
    return m.meta.requireAuth;
  })) {
    // 对路由进行验证
    if (_store["default"].state.isLogin) {
      // 已经登陆
      next(); // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});