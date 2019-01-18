import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD = path.resolve(__dirname, './dist');

export default {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: BUILD,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD,
    port: 3000,
    hot: true,
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
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'testing',
      template: 'public/index.html',
    }),
  ],
};
