const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/example.js",
    output : {
        path : path.resolve(__dirname,"build"),
        filename : "app.js"
    },
    module : {
        rules : [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },{
                test : /\.js$/,
                use : "babel-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        })
    ]
}