const path = require("path");

module.exports = {
    entry : {
        main : './src/main.js'
    },
    mode : 'development',
	cache: false,
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist')
    }
}