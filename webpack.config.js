const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map,

  entry: {
    app: "./src/index",
  },

  resolve: {
    modules: ["node_modules"],
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },

  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "[name].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      hash: true,
    })
  ],

  devServer: {
    contentBase: __dirname + "/public",
    open: true,
    hot: true,
    host: "localhost",
    port: 3000,
  },
};
