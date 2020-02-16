/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path')

module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',
	entry: {
		main: path.resolve(__dirname, '../src/server/index.js')
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, '../dist'),
	},
})