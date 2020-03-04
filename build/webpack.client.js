/* eslint-disable @typescript-eslint/no-require-imports */
const webpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = WebpackMerge(webpackConfig, {
	mode: 'production',
	devtool: 'none',
	entry: path.resolve(__dirname, '../src/client/index.tsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../public'),
		libraryTarget: "umd"
	},
	externals: {
		moment: 'moment',
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	},
	plugins: [
		new BundleAnalyzerPlugin()
		// new MiniCssExtractPlugin({
		// 	filename: 'style.css',
		// 	chunkFilename: '[name].css'
		// })
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					// MiniCssExtractPlugin.loader,
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
	optimization: {
		minimizer: [new TerserPlugin()]
	}
});
