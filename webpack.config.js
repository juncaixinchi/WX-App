const path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const BUILD_PATH = path.resolve(ROOT_PATH, 'public')
const APP_PATH = path.resolve(ROOT_PATH, 'src')
module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: path.resolve(ROOT_PATH, BUILD_PATH),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(ROOT_PATH, 'src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        include: [
          path.resolve(ROOT_PATH, 'src')
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ]
      }


    ]
  },
  resolve: {
    modules: ['node_modules', path.join(ROOT_PATH, 'src')],
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(ROOT_PATH, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    inline: true
  }
}
