"use strict";

let path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
};
