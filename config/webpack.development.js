const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const commonPaths = require('./paths');

const developmentEnvs = dotenv.parse(fs.readFileSync('./envs/.env.development'));

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    port: 3000,
    compress: true,
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT_ID: JSON.stringify(developmentEnvs.CLIENT_ID),
        REDIRECT_URI: JSON.stringify(developmentEnvs.REDIRECT_URI),
        API_URL: JSON.stringify(developmentEnvs.API_URL),
      },
    }),
  ],
};
