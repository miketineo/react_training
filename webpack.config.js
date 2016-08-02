var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/assets/javascripts/frontend/main.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
};

module.exports = config;
