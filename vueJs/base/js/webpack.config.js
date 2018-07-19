/**
 * Created by liwenzhi on 2017/11/5.
 */

var webpack = require('webpack')
module.exports = {
    // ...
    plugins: [
        // ...
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
}
