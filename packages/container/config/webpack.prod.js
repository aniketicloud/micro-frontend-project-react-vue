const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  // production mode is slow, but it optimizes code/packages and minifies js.
  mode: 'production',

  // instead of devServer, here it will be output file that has to be deployed
  output: {
    // changing the name of output everytime, to avoid caching issue
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      // no need to provide name for Host module, still it's here for I don't know
      name: 'container',
      remotes: {
        // location of child app remoteEntry.js file must be known at BUILD TIME
        // Hence, using domain
        // !important: WE ARE ASSUMING THAT remoteEntry.js file will be inside *marketing* folder
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
