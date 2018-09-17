const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/js/app.js",
    output : {
        path : path.resolve(__dirname,"build"),
        filename : "app.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                use: "url-loader",
            },
            {
                test: /\.otf$/,
                use: "url-loader",
            },

        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        })
    ]
}