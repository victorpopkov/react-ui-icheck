const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');
const paths = require('./paths');

module.exports = merge(common, {
  devtool: 'hidden-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
              modules: 'global',
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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
              modules: 'global',
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
            warnings: false,
          },
          mangle: {
            reserved: [
              'Checkbox',
              'CheckboxGroup',
              'Radio',
              'RadioGroup',
            ],
          },
        },
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({
        canPrint: false,
        cssProcessor: require('cssnano'), // eslint-disable-line global-require
        cssProcessorOptions: {
          discardComments: {
            removeAll: true,
          },
        },
      }),
    ],
  },
  output: {
    filename: '[name]-[hash].js',
  },
  plugins: [
    new webpack.IgnorePlugin(/\/config$/, /\.\/dev/),
    new CleanPlugin([paths.websiteDist], {
      root: paths.root,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[chunkhash].css',
      chunkFilename: 'assets/css/[id].css',
    }),
  ],
});
