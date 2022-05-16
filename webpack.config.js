const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/',
    },
    mode:'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts'],
        alias:{
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@style': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@logos': path.resolve(__dirname, 'src/assets/logos')
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "css-loader",
                ]
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
    ],
    devServer:{
        historyApiFallback: true
    }
}