const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  },
  {
    test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
    use: [MiniCssExtractPlugin.loader,  "css-loader", "sass-loader"]
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: true }
      }
    ],
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 10000, // 8*1024
        },
      },
    ],
  },
  {
    test: /\.(png|jpg|gif|jpeg)$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192, // 8*1024
        },
      },
    ],
  },
];
