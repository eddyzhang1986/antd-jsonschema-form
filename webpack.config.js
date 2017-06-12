var webpack = require("webpack");

module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    // node: {
    //     setImmediate: true
    // },
    output: {
        path: "./dist/",
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}