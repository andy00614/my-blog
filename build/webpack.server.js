/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path')
const nodeExternals = require("webpack-node-externals");


module.exports = WebpackMerge(webpackConfig, {
	mode: 'development',
	target: "node",
	module: {
		rules: [
			{
				test: /\.css?$/i,
				use: [
					'isomorphic-style-loader',
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
	},
	entry: {
		main: path.resolve(__dirname, '../src/server/index.tsx')
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, '../dist'),
	},
	externals:[nodeExternals()]
})