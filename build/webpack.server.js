/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = WebpackMerge(webpackConfig, {
	mode: 'production',
	target: 'node',
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'isomorphic-style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]_[hash:base64:5]'
							},
							importLoaders: 1,
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	entry: {
		main: path.resolve(__dirname, '../src/server/index.tsx')
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'umd',
		globalObject: 'this'
	},
	externals: [nodeExternals()]
});
