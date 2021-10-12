"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');

var loaders = require('./webpack.loaders');
module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    publicPath: '/',
    path: path.join(__dirname, "/public"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: loaders
  },
  // Chứa plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
