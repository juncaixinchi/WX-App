/**
 * @description webpack 开发环境配置
 *
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  target: 'electron-renderer',
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/poll?1000',
    './src/app.jsx'
  ],
  stats: { colors: true, minimal: true },
  resolve: { extensions: ['.js', '.jsx', '.css', '.json'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ]
}
