const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader?url=false',
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: path.resolve('./dist'),
                },
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './index.html', filename: './index.html'})]
}