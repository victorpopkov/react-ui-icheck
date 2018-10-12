const StyleLintPlugin = require('stylelint-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');
const config = require('../config');
const paths = require('./paths');

module.exports = merge(common, {
  devServer: {
    contentBase: paths.websiteDist,
    host: config.appHost,
    hot: true,
    hotOnly: true,
    inline: true,
    noInfo: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    port: config.appPort,
    publicPath: common.output.publicPath,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [],
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(paths.websiteSrc, 'app/sass-resources.scss'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new StyleLintPlugin(),
  ],
});
