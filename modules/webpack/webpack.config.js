const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// __dirname returns the path of the folder where the current JS file resides.

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
	  filename: 'myprecious.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {esModule: true},
          },
           'css-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          publicPath: 'images',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin({}),
  ],
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin({
  //       test: 'style.css',
  //       // exclude: /node_modules/,
  //     }),
  //   ],
  // },
};