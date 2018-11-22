module.exports = {
    entry: './src/main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    }
};