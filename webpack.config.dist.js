var webpack = require("webpack");

module.exports = {
  entry: {
    form: ['babel-polyfill', './src/demo/demo.jsx']
  },
  // node: {
  //     setImmediate: true
  // },
  cache: true,
  output: {
    path: __dirname + "/dist/",
    publicPath: "/dist/",
    filename: "[name].js",
    library: "AntdJSONSchemaForm",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  devtool: "source-map",
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    }
  },
  module: {
    rules: [{
      test: /\.(jsx)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
      }]
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.less/,
      loader: ["style-loader", "css-loader", "less-loader"]
    },
    {
      test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      loader: "file-loader"
    },
    {
      test: /\.(png|jpg)/,
      loader: [{ loader: "url-loader", options: { limit: 8192, name: "images/[hash:8].[ext]" } }]
    },
    {
      test: /\.(gif)/,
      loader: [{ loader: "url-loader", options: { limit: 1, name: "images/[hash:8].[ext]" } }]
    },
    {
      test: /\.xml$/,
      loader: 'raw-loader'
    },
    {
      test: /\.html$/,
      loader: 'html-withimg-loader'
    }]
  }
}