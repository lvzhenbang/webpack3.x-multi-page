'use strict';

const path = require('path');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.js', './src/utils/load.js'],
    aboutUs: ['./src/aboutUs.js'],
    contactUs: ['./src/contactUs.js','./src/utils/load.js'],
    vendors: ['loadsh']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },
  externals: {
    commonjs: "lodash",
    root: "_"
  },
  plugins: [
		new CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			chunks: ["index", "contactUs", "aboutUs"]
    }),
    new HtmlWebapckPlugin({
      filename: 'index.html',
      chunks: ['vendors', 'commons', 'index']
    }),
    new HtmlWebapckPlugin({
      filename: 'aboutUs.html',
      chunks: ['vendors', 'commons', 'aboutUs']
    }),
    new HtmlWebapckPlugin({
      filename: 'contactUs.html',
      chunks: ['commons', 'contactUs']
    })
  ],
  devtool: 'source-map'
} 
  
