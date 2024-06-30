const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval', // 실 서비스 시: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], // entry.app에 불러올 파일 확장자 지정
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/', // 이미지 파일이 저장될 경로
              publicPath: 'img/'   // 웹 페이지에서 접근할 경로
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // 기본 HTML 템플릿 파일
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
};
