const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src/');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const publicPath = env.public_path;
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body',
  });

  return {
    context: sourcePath,

    entry: [
      sourcePath,
    ],

    output: {
      path: distPath,
      chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      publicPath,
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: 'all',
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },

    plugins: isProduction ? [
      htmlWebpackPlugin,
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      htmlWebpackPlugin,
    ],

    module: {
      rules: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }],
    },

    devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',

    devServer: {
      host: 'localhost',
      contentBase: sourcePath,
      compress: true,
      port: 8080,
    },
  };
};
