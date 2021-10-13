/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import Vue from "vue";
import App from "./App";
import { router } from "../route/index";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
});
