const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js',
            clean: true
        },

        plugins: [
            new HtmlWebpackPlugin( {template: path.resolve(__dirname, 'src', 'index.html') }),
            new MiniCssExtractPlugin( {
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].css'
            })
        ],

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },

                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name:'[name].[ext]',
                                 outputPath: 'images'
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name:'[name].[ext]',
                                 outputPath: 'fonts'
                            },
                        },
                    ],

                },
            ],
        },

        devServer: {
            port: 9001,
            open: true
        }
}