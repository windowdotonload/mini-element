/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import Vue from "vue";
import VueRouter from "vue-router";
// import Button from "packages/Button/src/button.vue";
import { buildRoutes } from "./routes";
Vue.use(VueRouter);

const routes = buildRoutes.map(item => {
  const { dirname, name } = item;
  return {
    ...item,
    component: resolve =>
      require([`../packages/${dirname}/src/${name}.vue`], resolve),
  };
});
routes.push({ path: "/", redirect: "/button" });
// console.log("this is routes =====>", routes);

export const router = new VueRouter({
  routes,
});
