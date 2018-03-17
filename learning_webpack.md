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
>[html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)

## DevServer

```js
npm install --save-dev webpack-dev-server
```

>[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## 优化

优化思路：

- 缩小范围：查找文件`resolve` `alias` 指明引用的文件（同时考虑是否可以用Tree Hacking所以不一定都有效）；匹配文件`['ts','js','css']`
- 只编译改动的，**DLLPlugin**
- 多进程同时做事，针对大量文件的转换（loader的工作）**HappyPack**
- 多进程同时做事，针对压缩转化**ParallelUglifyPlugin**
- 针对不同的环境选用不同的打包策略
- CDN
- 提取公共代码common 往CDN推base
- 压缩和Scope Hoisting有 ```把 x = 'Hello'; y = 'Hello' 转换成 var a = 'Hello'; x = a; y = b```
