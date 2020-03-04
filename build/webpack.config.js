/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.ts', '.tsx', '.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(js|jsx|tsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src'),
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
};
