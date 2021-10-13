/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Button from "packages/Button/src/button.vue";

Vue.use(VueRouter);
export const routes = [{ path: "/button", name: "button", component: Button }];

export const router = new VueRouter({
  routes,
});

// Vue.use(VueRouter);
