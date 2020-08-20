const path = require('path')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js', 
        publicPath: '/assets/'
    },
    devtool: "source-map",
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false, // eviter d'afficher le dossier build
        open: true // ouvrire automatiquement le navigateur

    }
}