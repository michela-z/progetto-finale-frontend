const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/template.html',
            favicon: './public/fav-icon.ico',
        }),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        hot: true,
    }
};