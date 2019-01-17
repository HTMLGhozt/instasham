const path = require('path');

const ROOT_DIR = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: path.resolve(ROOT_DIR, './src/index.js'),
  devServer: {
    port: 3000,
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: false,
        },
      }],
    }],
  },
};
