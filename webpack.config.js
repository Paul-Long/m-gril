const webpack = require('webpack');
const path = require('path');
const cpus = require('os').cpus().length;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const WebpackMd5Hash = require('webpack-md5-hash');
const happyThreadPool = HappyPack.ThreadPool({size: cpus});
const UglifyParallel = require('webpack-uglify-parallel');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const ENV = process.env.NODE_ENV;
const client = 'src/client';
const config = {
  entry: {
    main: path.join(__dirname, 'src/client/app.js'),
    vendor: ['preact']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].[id].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'components': path.resolve(__dirname, client, 'components'),
      'util': path.resolve(__dirname, client, 'util'),
      'theme': path.resolve(__dirname, client, 'theme'),
      'containers': path.resolve(__dirname, client, 'containers')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src/client'),
        use: 'happypack/loader?id=js'
      }, {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      }, {
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
      chunksSortMode: function (chunk1, chunk2) {
        const order = ['manifest', 'common', 'vendor', 'main'];
        const order1 = order.indexOf(chunk1.names[0]);
        const order2 = order.indexOf(chunk2.names[0]);
        return order1 - order2;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['main', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[hash:8].[id].js',
      minChunks: Infinity
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    })
  ]
};
if (ENV === 'develpoment') {
  config.devtool = 'eval-source-map';
  config.entry.main = ['webpack-hot-middleware/client?reload=true', path.join(__dirname, 'src/client/app.js')];
  config.output.path = path.resolve(__dirname, 'build');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (ENV === 'production') {
  const UglifyJs = new UglifyParallel({
    workers: cpus,
    mangle: true,
    compressor: {
      warnings: false,
      drop_console: true,
      drop_debugger: true
    }
  });
  config.plugins.push(UglifyJs);

  const isTest = true;
  if (isTest) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(new BundleAnalyzerPlugin());
  }
}
module.exports = config;
