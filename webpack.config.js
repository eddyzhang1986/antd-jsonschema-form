var webpack = require("webpack");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: "./dist",
        publicPath: "/dist/",
        filename: "bundle.js"
    }
}