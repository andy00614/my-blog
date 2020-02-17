/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path')
const nodeExternals = require("webpack-node-externals");


module.exports = WebpackMerge(webpackConfig, {
	mode: 'development',
	target: "node",
	entry: {
		main: path.resolve(__dirname, '../src/server/index.tsx')
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, '../dist'),
	},
	externals:[nodeExternals()]
})