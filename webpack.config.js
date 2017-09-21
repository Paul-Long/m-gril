const webpack = require('webpack');
const path = require('path');
const os = require('os');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const WebpackMd5Hash = require('webpack-md5-hash');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  // devtool: 'eval-source-map',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', path.join(__dirname, 'src/client/app.js')],
    vendor: ['preact']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].[id].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src/client'),
        use: 'happypack/loader?id=js'
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: path.resolve(__dirname, './src/client'),
        use: 'url-loader?limit=100&name=img/[name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin('[name].[contenthash:8].css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }),
    new HtmlWebpackPlugin({
      title: 'm-gril',
      favicon: './src/server/static/images/favicon.ico',
      template: path.join(__dirname, 'src/server/template/index.html'),
      chunks: ['manifest', 'vendor', 'common', 'main'],
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {warnings: false},
      output: {comments: false}
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['main', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[hash:8].[id].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    new WebpackMd5Hash()
  ]
};