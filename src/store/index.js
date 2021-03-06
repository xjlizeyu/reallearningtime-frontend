import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: JSON.parse(sessionStorage.getItem("isLogin")) || false,
    user: JSON.parse(sessionStorage.getItem("user")) || {}
  },
  mutations: {
    login: (state, user) => {
      state.user = user;
      state.isLogin = true;
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("isLogin", true);
    },
    exit: state => {
      state.user = {};
      state.isLogin = false;
      window.localStorage.setItem("user", null);
      window.localStorage.setItem("isLogin", false);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getIsLogIn: state => {
      return state.isLogin;
    },
    getUser: state => {
      return state.user;
    }
  }
});
