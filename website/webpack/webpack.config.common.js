const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('../config');
const paths = require('./paths');

const useImages = [
  {
    loader: 'url-loader',
    options: {
      limit: 512,
      name: 'assets/images/[name].[ext]',
      publicPath: config.appPublicPath,
    },
  },
];

module.exports = {
  context: paths.root,
  entry: {
    app: [
      path.join(paths.websiteSrc, 'app.js'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules\/icheck/,
        use: [
          ...useImages,
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { cleanupIDs: false },
                { removeAttrs: { attrs: '(data-name)' } },
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules\/icheck/,
        use: useImages,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        include: /node_modules\/icheck/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'assets/images/icheck/[1]/[name].[ext]',
              publicPath: config.appPublicPath,
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+(@2x)?\.png$/,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: paths.websiteDist,
    publicPath: config.appPublicPath,
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    alias: {
      'react-icheck': path.resolve(paths.root, 'src/'),
      '@WebsiteConfig': paths.websiteConfig,
      '@WebsiteRoot': paths.websiteRoot,
    },
    extensions: ['.json', '.js', '.jsx'],
  },
  plugins: [
    new DotenvPlugin({
      path: path.resolve(paths.root, '.env'),
      safe: path.resolve(paths.root, '.env.dist'),
      silent: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.websiteSrc, 'index.html'),
    }),
  ],
};
