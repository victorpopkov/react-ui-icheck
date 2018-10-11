const merge = require('lodash/merge');
const config = require('./config.common');
const dev = require('./config.dev');
const prod = require('./config.prod');

if (process.env.NODE_ENV === 'production') {
  merge(config, prod);
} else {
  merge(config, dev);
}

module.exports = config;
