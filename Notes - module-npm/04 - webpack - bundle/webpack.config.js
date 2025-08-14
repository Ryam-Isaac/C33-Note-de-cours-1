const path = require("path");

module.exports = {
    entry : {
        bundle : "./src/index.js"
    },
    mode : 'development',
	cache: false,
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist')
    }
}