var webpack = require('webpack');

module.exports = {
    entry:'./js/entry.js',
    output:{
        path:__dirname,
        filename:'js/bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    },
    plugins:[
            new webpack.BannerPlugin('This file is created by liwz')
    ],
    resolve: { fallback: path.join(__dirname, "node_modules") },
    resolveLoader: { fallback: path.join(__dirname, "node_modules") }
};