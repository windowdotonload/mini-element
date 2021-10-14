/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
const files = require.context("packages", true, /\.vue$/);
const reg = /^\.(\/(.*)\/.*\/(.*).vue)/;
export const buildRoutes = files.keys().map(item => {
  // console.log("this is exec", reg.exec(item));

  const itemPath = reg.exec(item)[3];
  return {
    dirname: reg.exec(item)[2],
    name: itemPath,
    path: `/${itemPath}`,
  };
});
