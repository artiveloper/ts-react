const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map,
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./src/index",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "app.js",
  },
  devServer: {
    contentBase: __dirname + "/public",
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000
  }
};
