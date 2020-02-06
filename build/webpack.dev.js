/* eslint-disable @typescript-eslint/no-require-imports */
const Webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(webpackConfig, {
	devServer: {
		port: 3000,
		hot: true,
		contentBase: '../dist'
	},
	plugins: [new Webpack.HotModuleReplacementPlugin()]
});