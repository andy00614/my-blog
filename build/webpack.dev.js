/* eslint-disable @typescript-eslint/no-require-imports */
const Webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = WebpackMerge(webpackConfig, {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, '../src/client/index.tsx')
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../public'),
		libraryTarget: 'umd',
		libraryExport: 'default',
		// publicPath: '/'
	},
	devServer: {
		port: 8090,
		hot: true,
		contentBase: '../dist',
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html')
		}),
		new Webpack.HotModuleReplacementPlugin()
	],
});
