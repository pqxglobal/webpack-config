const mode = process.env.NODE_ENV || "development";

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
};