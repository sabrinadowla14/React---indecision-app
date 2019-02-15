const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[{
      loader: 'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
    }, {
      test:/.\scss$/,
      use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "sass-loader",
        options: {
            includePaths: ["absolute/path/a", "absolute/path/b"]
        }
    }]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public') 
  }
};

