const path = require('path');
module.exports = {
    entry: {
        bandle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extention: ['.js', '.ts']
    },
    devserver: {
        contentBase: path.join(__dirname, 'dist'),
        open: ture
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}