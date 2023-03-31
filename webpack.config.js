const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new EslingPlugin({ extensions: 'ts' }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, 'src/images'),
                  to:   path.resolve(__dirname, 'dist/images')
                }
              ]
            })
    ]
}