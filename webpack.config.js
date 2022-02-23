const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: [
    path.resolve(__dirname, './src/js/index.js'),
    path.resolve(__dirname, './src/css/style.css'),
    path.resolve(__dirname, './src/html/index.html')
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            const filename = path.resolve(pathData.filename).split(path.sep);
            return 'images/' + filename[filename.length - 1];
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/index.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'kariera.html',
      template: path.resolve(__dirname, './src/html/kariera.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'kontakt.html',
      template: path.resolve(__dirname, './src/html/kontakt.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'polityka.html',
      template: path.resolve(__dirname, './src/html/polityka.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'budowa-maszyn.html',
      template: path.resolve(__dirname, './src/html/budowa-maszyn.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'realizacje.html',
      template: path.resolve(__dirname, './src/html/realizacje.html')
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'serwis.html',
      template: path.resolve(__dirname, './src/html/serwis.html')
      // minify: false
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './dist')
  }
}