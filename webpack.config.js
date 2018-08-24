const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname,"public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }]
      },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    externals: {
        'react': {commonjs: 'react'},
        'react-dom': {commonjs: 'react-dom'}
    }
};