const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          miniCss.loader,
          'css-loader?url=false',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new minify({})
    ],
  },
  plugins: [
    new miniCss({
      filename: './css/style.css',
    }),
  ]
};
