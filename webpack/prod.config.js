const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname,'../src','index.js') },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all', },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack template',
      template: path.resolve(__dirname, '../static', 'index.html'),
      favicon: path.resolve(__dirname, '../static', 'favicon.ico')
    })
  ]
}