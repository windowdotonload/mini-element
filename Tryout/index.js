/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import Vue from "vue";
import App from "./App";
import { router } from "../route/index";
// const route = require("../route/routes");
// console.log(route);
new Vue({
  el: "#app",
  render: h => h(App),
  router,
});
