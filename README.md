<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg" alt="Project logo" /></a>
</p>

<h3 align="center">Webpack</h3>

---

<p align="center"> Hướng dẫn sử dụng Webpack
    <br> 
</p>

## 📝 Table of Contents

- [Webpack là gì?](#about)
- [Một số khái niệm trong webpack?](#constant)
- [Cài đặt và cấu hình webpack](#install)
- [Tổng kết](#Tổng_Kết)
- [Tài liệu tham khảo](#refer)


## Webpack là gì? <a name = "about"></a>
Webpack là một công cụ giúp chúng ta đóng gói (bundle) các tài nguyên như js, css, images, fonts... thành một file hoặc nhiều file theo cách có tổ chức.
<p align="center">
  <a href="" rel="noopener">
 <img src="https://images.viblo.asia/a8dcfe82-0c02-4c98-a305-0f9110e65f50.png" alt="Project logo" /></a>
</p>

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

Cấu hình file ```package.json```

Cài đặt file và cấu hình babel: 

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```
* Chúng ta tạo file .babelrc ở file root của dự án:
    ```
    {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
        ]
    }
    ```
  @babel/preset-env : Giúp babel chuyển đổi code ES6, ES7 và ES8 thành ES5.
  
  @babel/preset-react : Giúp chuyển đổi JSX sang mã Javascript.
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
11. clean-webpack-plugin: module này nó sẽ dọn dẹp lại thư mục chứa folder build webpack

* Chế độ (mode) trong Webpack:
    - development
    - production

## Tổng kết <a name = "Tổng_Kết"></a>


## Tài liệu tham khảo <a name = "refer"></a>
* https://webpack.js.org/concepts/




