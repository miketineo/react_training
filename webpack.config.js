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
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

};

module.exports = config;
