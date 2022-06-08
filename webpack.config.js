const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
    mode: mode,
    target: this.target,

    output: {
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    },
};