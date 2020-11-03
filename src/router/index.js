import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import signIn from "../views/signIn";
import logIn from "../views/logIn";
import welcome from "../views/welcome";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: welcome
  },
  {
    path: "/home",
    name: "home",
    meta: { requireAuth: true },
    component: Home
  },
  {
    path: "/signin",
    name: "signin",
    component: signIn
  },
  {
    path: "/login",
    name: "login",
    component: logIn
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
