const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
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
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
