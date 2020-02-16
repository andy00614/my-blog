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
		main: path.resolve(__dirname, '../demo/index.tsx')
	},
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	devServer: {
		port: 3000,
		hot: true,
		contentBase: '../dist'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html')
		}),
		new Webpack.HotModuleReplacementPlugin()
	],
});
