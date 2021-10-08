/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import button from "../packages/Button";

const components = [button];
const install = vue => {
  components.forEach(component => {
    vue.component(component.name, component);
  });
};
console.log("this i ok");
export default {
  install,
};
