/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path');

module.exports = WebpackMerge(webpackConfig, {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/client/index.tsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../public')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]_[hash:base64:5]',
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
	}
});
