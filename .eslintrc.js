/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    amd: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: 2,
    semi: 0,
  },
};
