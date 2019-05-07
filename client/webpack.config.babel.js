import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD = path.resolve(__dirname, './dist');

export default {
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(__dirname, './src/index.js'),
    ],
  },
  output: {
    path: BUILD,
  },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'warning',
    contentBase: BUILD,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        use: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'babel-loader?presets[]=react',
            query: {
              cacheDirectory: true,
              presets: ['@babel/react'],
            },
          },
        ],
        exclude: /node_modules/,
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
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'testing',
      template: 'public/index.html',
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   unused: true,
    //   dead_code: true, // big one--strip code that will never execute
    //   warnings: false, // good for prod apps so users can't peek behind curtain
    //   drop_debugger: true,
    //   conditionals: true,
    //   evaluate: true,
    //   drop_console: true, // strips console statements
    //   sequences: true,
    //   booleans: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //       // this assumes your vendor imports exist in the node_modules directory
    //   // and will move all modules from there to separate bundle
    //       return module.context && module.context.indexOf('node_modules') !== -1;
    //   }
    // }),
  ],
};
