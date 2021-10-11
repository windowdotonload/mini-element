/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const config = require("./config.js");

module.exports = {
  mode: "production",
  // entry: {
  //   app: ["./src/index.js"],
  // },
  entry: path.join(__dirname, "./src/index.js"),

  output: {
    path: path.resolve(process.cwd(), "./lib"),
    // publicPath: "",
    filename: "element-ui.common.js",
    // chunkFilename: "[id].js",
    // libraryExport: "default",
    // library: "ELEMENT",
    // libraryTarget: "esm",
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: path.posix.join("static", "[name].[hash:7].[ext]"),
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      favicon: "./favicon.ico",
    }),
    new VueLoaderPlugin(),
  ],
};
