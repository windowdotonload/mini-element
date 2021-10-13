/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import Button from "packages/Button/src/button.vue";
// import { routes } from "./routes";
Vue.use(VueRouter);

export const routes = [
  {
    path: "/button",
    name: "button",
    component: () => import("packages/Button/src/button.vue"),
  },
];

export const router = new VueRouter({
  routes,
});
