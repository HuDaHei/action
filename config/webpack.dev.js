const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const dev = merge(common,  {
    mode: 'development',
    devtool:'source-map',
    target: 'web',
    devServer: {
        hot:true,
        open:true
    }
});

module.exports =  dev;
