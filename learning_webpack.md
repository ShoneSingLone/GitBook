# 学习webpack过程中的记录随笔

## 主要参考

- >[Home Page](https://webpack.js.org)
- >[《深入浅出webpack》](http://webpack.wuhaolin.cn/)

## 安装

```js
npm i -D webpack
npm install webpack-cli -D
```

## loaders

>[loaders](https://webpack.js.org/concepts/#loaders)
module 就是一个映射关系：test 正则表达式陪陪需要转换的文件；use 指定loader来处理这个文件。

参数可以是Object，也可以直接写 [inline形式](https://webpack.js.org/concepts/loaders/#inline): ! as seprator

```js
npm i -D style-loader css-loader
```
