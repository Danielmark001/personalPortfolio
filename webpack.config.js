const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this line

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/', // Ensure correct handling of routes
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Use a unique name for each file
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'pdfs/', // Ensure PDF files are output to the correct directory
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Specify the template file
      filename: 'index.html', // Specify the output file name
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/pdfs', to: 'pdfs' }, // Copy PDFs to the build folder
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
};
