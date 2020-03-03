const webpackMerge = require('webpack-merge');
const common = require('./config/webpack.common');

/* eslint-disable global-require,import/no-dynamic-require */
const envConfig = require(`./config/webpack.${process.env.NODE_ENV}.js`);
module.exports = webpackMerge(common, envConfig);
