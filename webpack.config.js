var webpack = require("webpack");

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  // node: {
  //     setImmediate: true
  // },
  output: {
    path: "./dist/",
    publicPath: "/dist/",
    filename: "bundle.js",
    library: "AntdJSONSchemaForm",
    libraryTarget: "umd"
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       NODE_ENV: JSON.stringify("production")
  //     }
  //   })
  // ],
  devtool: "source-map",
  // externals: {
  //   react: {
  //     root: "React",
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react"
  //   }
  // },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}