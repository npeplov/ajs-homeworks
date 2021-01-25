const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	]
}