module.exports = {
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
