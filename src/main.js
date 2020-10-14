import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
import moment from "moment"; //导入文件
Vue.prototype.$moment = moment; //赋值使用
moment.locale("zh-cn"); //国际化，中文
import echarts from "echarts";

Vue.use(echarts);

//引入全局css
import "./assets/scss/style.scss";

import vuetify from "./plugins/vuetify";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

// 检验是否在未登陆的情况下访问需要验证的页面
// 需要在router里添加 meta: { requireAuth: true }
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {
    // 对路由进行验证
    if (store.state.isLogin) {
      // 已经登陆
      next(); // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
