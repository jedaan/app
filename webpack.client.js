const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // tell the webpack what is the root file of our client application
    entry: './src/client/client.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);
