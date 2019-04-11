var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "#source-map",
  // plugins: [
  //    	new webpack.optimize.UglifyJsPlugin({minimize: true}),
  // ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
