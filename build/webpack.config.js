/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, '../src/index.tsx')
	},
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: 'eval-source-map',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.ts', '.tsx', '.js', '.scss']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html')
		}),
		new Webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		port: 3000,
		hot: true,
		contentBase: '../dist'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					{ loader: 'style-loader', options: { esModule: true, injectType: 'styleTag' } },
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]_[hash:base64:5]'
							}
						}
					},
					{ loader: 'sass-loader' }
				]
			},
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
		// When importing a module whose path matches one of the following, just
		// assume a corresponding global variable exists and use that instead.
		// This is important because it allows us to avoid bundling all of our
		// dependencies, which allows browsers to cache those libraries between builds.
		// externals: {
		//   react: 'React',
		//   'react-dom': 'ReactDOM',
		// },
	}
};
