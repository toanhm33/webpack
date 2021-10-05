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
- [Tại sao nên sử dụng webpack?](#why)
- [Cài đặt và cấu hình webpack](#install)
- [Cấu trúc thư mục](#structure)
- [Giới thiệu một số tính năng với webpack](#feature)
- [Tổng kết](#Tổng_Kết)
- [Tài liệu tham khảo](#refer)


## Webpack là gì? <a name = "about"></a>
Webpack là một công cụ giúp chúng ta đóng gói (bundle) các tài nguyên như js, css, images, fonts... thành một file hoặc nhiều file theo cách có tổ chức.

## Tại sao nên sử dụng webpack? <a name = "why"></a>
* Đóng gói nhiều file js, css thành một file có tổ chức rõ ràng, hợp lí.
* Minify js và css giúp giảm dung lượng file code
* Thực thi các file scss tự động
* Tối ưu hóa Image, svg, nén các file với dung lượng nhỏ nhất or chuyển đổi file thành url và chèn url này vào bundle
* Tự động loading (build) khi save

## Cài đặt và cấu hình <a name = "install"></a>
* Cài đặt 2 thư viện: ```webpack``` và ```webpack-cli```:
```npm install webpack webpack-cli --save-dev```

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
Đầu vào (entry) là file ```index.js```
Đầu ra (output) gồm 

```filename```: Tên file được build ra

```path```: Thư mục chứa file được build ra

Cấu hình file ```package.json```



## Tổng kết <a name = "Tổng_Kết"></a>


## Tài liệu tham khảo <a name = "refer"></a>
* https://webpack.js.org/concepts/




