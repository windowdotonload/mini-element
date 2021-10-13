/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
const files = require.context("packages", true, /\.vue$/);
const reg = /^\.(\/.*\/.*\/(.*).vue)/;
export const routes = files.keys().map(item => {
  console.log(reg.exec(item)[2]);
  const itemPath = reg.exec(item)[2];
  return {
    name: itemPath,
    path: `/${itemPath}`,
    comonent: () => import(`packages/${reg.exec(item)[1]}`),
  };
});
// console.log("this is routes===========", routes);
