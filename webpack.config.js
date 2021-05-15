/* eslint-disable functional/no-let */
let mode = 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {

  mode,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],

  devServer: {
    contentBase: './dist',
  },
};
