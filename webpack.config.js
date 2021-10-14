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
  mode: "development",
  // entry: {
  //   app: ["./src/index.js"],
  // },
  entry: path.join(__dirname, "./Tryout/index.js"),

  output: {
    path: path.resolve(process.cwd(), "./lib"),
    // publicPath: "",
    filename: "tryElm.[name].js",
    chunkFilename: "[id].js",
    // libraryExport: "default",
    // library: "ELEMENT",
    // libraryTarget: "esm",
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      packages: path.resolve(__dirname, "./packages/"),
    },
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
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
