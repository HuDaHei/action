const path = require('path');
const HtmlWepack = require('html-webpack-plugin');
const base = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude:['/node_modules/', path.resolve(__dirname, './../config')], 
                include: path.resolve(__dirname, './../src'),
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                  },
                  {
                      loader: 'eslint-loader',
                      options: {
                          fix:true,
                          cache: true,
                          emitError: true,
                          failOnError: true
                      }
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWepack({
            template: path.resolve(__dirname, './../src/html/index.html')
        })
    ]
};
module.exports = base;