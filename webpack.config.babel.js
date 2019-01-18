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
    host: '0.0.0.0',
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/react'],
        },
      },
      {
        test: /\.less$/,
        resolve: {
          extensions: ['.less'],
        },
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
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
