const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: {
    dev: "./dev/dev.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dev"),
  },
  devtool: "inline-source-map",
  devServer: {
    watchContentBase: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "dev/index.html",
    }),
  ],
};
