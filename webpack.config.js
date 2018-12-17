'use strict';

const path = require('path');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const HtmlWebapckPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
		new CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			chunks: ["index", "contactUs", "aboutUs"]
    }),
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'index.html',
      chunks: ['vendors', 'commons', 'index'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是首页',
        'keywords': 'webpack, multi-page, 首页',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'aboutUs.html',
      chunks: ['vendors', 'commons', 'aboutUs'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是 about-us 页面',
        'keywords': 'webpack, multi-page, about-us',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'contactUs.html',
      chunks: ['commons', 'contactUs'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是 contact-us 页面',
        'keywords': 'webpack, multi-page, contact-us',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: false,
      ignoreOrder: false
    })
  ],
  devtool: 'source-map'
} 
  
