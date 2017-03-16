var debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: __dirname + '/webapp/index.js',

    output: {
        path: __dirname + '/webapp/dist/',
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    }
}