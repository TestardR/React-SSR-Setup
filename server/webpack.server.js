const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Bundle for nodeJS, rather than for the browser
  target: "node",
  // Root file of our server app
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // All the modules that are in node_modules won't be bundled
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
