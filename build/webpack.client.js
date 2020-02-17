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
				test: /\.css?$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
						}
					}
				]
			}
		]
	}
});
