const path = require('path');

module.exports = {

    // tell the webpack what is the root file of our client application
    entry: './src/client/client.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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
