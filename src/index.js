/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import button from "../packages/Button";

const components = [button];
const install = (vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};
