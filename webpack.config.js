const path = require("path");

path.join(__dirname,"public")


module.exports = {
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname,"public"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
};