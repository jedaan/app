const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack that we're building a bundle
    // for nodeJs , rather than for the browser
    target: 'node',

    // tell the webpack what is the root file of our server application
    entry: './src/index.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
