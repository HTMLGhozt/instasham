import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'testing',
      template: 'public/index.html',
    }),
  ],
};
