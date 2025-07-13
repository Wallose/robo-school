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
<<<<<<< HEAD
=======
                    type: 'asset/resource',
>>>>>>> 74004d66775f68a224b561508a8042765fd10ecb
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
<<<<<<< HEAD
                                name:'[name].[ext]',
                                 outputPath: 'images'
                            },
                        },
=======
                                name:'[name][hash].[ext]',
                                 outputPath: 'images'
                            },
                        },
                        
>>>>>>> 74004d66775f68a224b561508a8042765fd10ecb
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
<<<<<<< HEAD
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name:'[name].[ext]',
                                 outputPath: 'fonts'
                            },
                        },
                    ],
=======
                    type: 'asset/resource',
>>>>>>> 74004d66775f68a224b561508a8042765fd10ecb

                },
            ],
        },

        devServer: {
            port: 9001,
            open: true
        }
}