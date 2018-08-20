const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry:  __dirname + '/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    mode:"development",
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    devtool: "#eval-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
            },
            // {
            //     test: /\.(png|svg|otf|jpg|gif)$/,
            //     use: 'file-loader'
            // },
            {
                test: /\.(png|woff|woff2|eot|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
               test: /\.scss$/,
               loader: 'style-loader!css-loader!sass-loader'
           },
           {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "fonts/[name].[ext]",
                  },
                },
            }
           // {
           //     test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
           //     use: [{
           //         loader: 'file-loader',
           //         options: {
           //             name: "fonts/[name].[ext]",
           //             outputPath: 'fonts/'
           //         }
           //     }]
           // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new LiveReloadPlugin()
    ]
};

module.exports = config;
