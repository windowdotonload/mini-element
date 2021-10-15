/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

const files = require.context("packages", true, /\.vue$/);
console.log("this is files", files.keys());

const reg = /^\.(\/(.*)\/.*\/(.*).vue)/;
export const buildRoutes = files
  .keys()
  .filter(item => !item.includes("index"))
  .map(item => {
    console.log("this is exec", reg.exec(item));

    const itemPath = reg.exec(item)[3];
    return {
      dirname: reg.exec(item)[2],
      name: itemPath,
      path: `/${itemPath}`,
    };
  });
