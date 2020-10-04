import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
import moment from "moment"; //导入文件
import vuetify from "./plugins/vuetify";
Vue.use(vuetify);
Vue.prototype.$moment = moment; //赋值使用
moment.locale("zh-cn"); //国际化，中文
import echarts from "echarts";

Vue.use(echarts);

//引入全局css
import "./assets/scss/style.scss";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
