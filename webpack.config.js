var webpack = require("webpack");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: "/dist/",
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}