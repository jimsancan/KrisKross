const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [new CleanWebpackPlugin()]
})