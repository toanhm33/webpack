<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg" alt="Project logo" /></a>
</p>

<h3 align="center">Webpack</h3>

---

<p align="center"> Hướng dẫn sử dụng Webpack
    <br> 
</p>

## 📝 Table of Contents

- [Webpack là gì?](#about)
- [Giới thiệu babel](#babel)
- [Một số khái niệm trong webpack?](#constant)
- [Cài đặt và cấu hình webpack](#install)
- [Tổng kết](#Tổng_Kết)
- [Tài liệu tham khảo](#refer)


## Webpack là gì? <a name = "about"></a>
* Webpack giúp chúng ta giải quyết các vấn đề:

    - Hỗ trợ chuyển đổi cú pháp es6 hay es2018 để các trình duyệt cũ có thể hiểu được.
    - Chuyển đổi Sass, Less sang css.
    - Nén code.
    - Hỗ trợ live reload trên môi trường dev.
    
* Webpack là một công cụ chạy trên môi trường NodeJs giúp chúng ta đóng gói (bundle) các tài nguyên như js, css, images, fonts... thành một file hoặc nhiều file một cách dễ dàng.
<p align="center">
  <a href="" rel="noopener">
 <img src="https://images.viblo.asia/a8dcfe82-0c02-4c98-a305-0f9110e65f50.png" alt="Project logo" /></a>
</p>

## Giới thiệu babel <a name ="babel"></a>

* Babel là trình biên dịch javascript thành các version cấp thấp hơn để phù hợp cho các trình duyệt khác nhau.

* Cài đặt: 

```
    npm i @babel/core @babel/preset-env babel-loader @babel/preset-react @babel/plugin-transform-runtime --save-dev
```
    - @babel/core là phần lõi của babel
    - @babel/preset-env là một bộ cài đặt giúp bạn biên dịch code Javascript về cú pháp cũ hơn
    - @babel/plugin-transform-runtime: Giúp async await tránh bị lỗi regeneratorRuntime is not defined.
    - @babel/preset-react : Giúp chuyển đổi JSX sang mã Javascript.
    - babel-loader giúp bạn tích hợp babel vào trong webpack
## Một số khái niệm trong webpack <a name = "constant"></a>
* Entry: file nguồn chúng ta code React.

```
module.exports = {
    entry: './index.js'
}
```

* Output: trả về file đích, với tên và thư mục có thể tùy chỉnh được
```
const path = require('path')
module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
* Loader: Bình thường webpack chỉ hiểu được javascript và json file. Loader nó sẽ cho phép webpack xử lí file có định dạng khác và chuyển đổi chúng để sử dụng.

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            }
        ]
}
```

* Plugin: Dùng để tối ưu hóa, quản lý asset, vv

```
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ]
```

## Cài đặt và cấu hình project react sử dụng webpack <a name = "install"></a>
* Trước khi bắt đầu, bạn hãy tạo một folder chứa dự án và khởi tạo NPM.
``` 
    mkdir react-app
    cd react-app
    npm init -y
```
* Sau đó cài React
```
 npm install react --save
``` 
* Cài React Dom
```
npm install react-dom --save
```
* Cài đặt 2 thư viện: ```webpack``` và ```webpack-cli```:
```
    npm install webpack webpack-cli --save-dev
```

* Tạo file ```webpack.config.js``` tại thư mục root của dự án

```
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Cấu hình babel: 

* Chúng ta tạo file .babelrc ở file root của dự án:
    ```
    {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
        ]
    }
    ```

* Tiếp theo cài đặt một số module dùng để chỉnh cấu hình webpack

```
npm install css-loader sass-loader style-loader clean-webpack-plugin html-webpack-plugin html-webpack-template webpack-dev-server webpack-merge mini-css-extract-plugin file-loader --save-dev
```
Các module bao gồm:
1. css-loader: nó sẽ phân tích cú pháp vào Javascript
2. sass-loader: nó biến đổi Sass thành Css
3. style-loader: chèn CSS vào bên trong thẻ
4. clean-webpack-pluin: module này nó sẽ dọn dẹp lại thư mục chứa folder build webpack, xóa bỏ các file không cần thiết.
5. html-webpack-plugin: nó sẽ tự động tạo một file html (nó sẽ tạo file index.html vào folder build webpack)
6. html-webpack-template: đây là một template tiện lợi cho thằng html-webpack-plugin
7. webpack-dev-server: cung cấp cho chúng ta một web server đơn giản với tính năng live reload
8. webpack-merge: dùng để ghép các file js với nhau.
9. mini-css-extract-plugin: nó sẽ thu gọn file css.
10. file-loader: dùng để đọc và optimize dung lượng image với kích thước nhỏ thành dạng string bên trong javascript luôn.
11. clean-webpack-plugin: module này nó sẽ clear hết các tệp trong folder build của webpack

file ```webpack.config.js``` :

```
"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var loaders = require('./webpack.loaders');
module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    publicPath: '/',
    path: path.join(__dirname, "/public"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: loaders
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  // Chứa plugins sẽ cài đặt trong tương lai
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
```
* Mode trong Webpack: Webpack cung cấp cho ta 2 chế độ: development và production

Ta thiết lập file ```package.json```
```
  "scripts": {
    "dev": "webpack --mode development",
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
```
    * Với chế độ development: webpack nhận tất cả các mã javascript chúng ta viết và load chúng trong browser.

    * Với chế độ production: Webpack tự động áp dụng minification và tối ưu hóa mã code



## Tài liệu tham khảo <a name = "refer"></a>
* https://webpack.js.org/concepts/
* https://www.valentinog.com/blog/webpack




