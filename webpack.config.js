var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'script.js'
    },
    devServer: {
        contentBase: "./public",
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
        ]
    },
};
