const path = require('path');

module.exports = {
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

    // tell webpack to run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: [
                        'react',
                        'stage-0',//handle async code
                        ['env', {target: {browsers: ['last 2 versions ']}}]
                    ]
                }
            }
        ]
    }
};
