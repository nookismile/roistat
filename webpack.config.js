const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true,
        filename: '[name].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/src/scripts/data.php',
                    to: __dirname + '/build'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        },
                      },
                    },
                    'sass-loader']
            },
            {
               test: /\.woff2?$/i,
                type: 'asset/resource',
                generator:{
                   filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
};
