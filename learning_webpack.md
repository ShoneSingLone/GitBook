# 学习webpack过程中的记录随笔

## 参考

- >[Home Page](https://webpack.js.org)
- >[《深入浅出webpack》](http://webpack.wuhaolin.cn/)
- >[关于webpack-dev-server的几个问题](https://segmentfault.com/q/1010000007434045)
- >[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

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

- css-loader会遍历 CSS 文件，然后找到 url() 表达式然后处理他们;
- style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。

处理顺序是从后到前，所以这就很好理解sass=》PostCss=》css=》style

PostCSS不用想得太复杂，能加一个

## Plugins

```js
npm i -D extract-text-webpack-plugin
```

>[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## DevServer

```js
npm install --save-dev webpack-dev-server
```

>[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
