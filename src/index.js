/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import button from "../packages/Button";

export const components = [button];
const install = vue => {
  components.forEach(component => {
    vue.component(component.name, component);
  });
};

export default {
  install,
};
