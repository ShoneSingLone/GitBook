# 学习webpack过程中的记录随笔

## 参考

- >[Home Page](https://webpack.js.org)
- >[《深入浅出webpack》](http://webpack.wuhaolin.cn/)
- >[关于webpack-dev-server的几个问题](https://segmentfault.com/q/1010000007434045)
- >[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## 基本的概念

基本模型： 1-2-1
- 输入**entry**=>处理=>输出**output**

处理：
- 非js文件由**loader**转换；
- 断码片段拼接、压缩......一些列的处理由**plugins**完成

### loaders

>[loaders](https://webpack.js.org/concepts/#loaders)
module 就是一个映射关系：test 正则表达式陪陪需要转换的文件；use 指定loader来处理这个文件。

参数可以是Object，也可以直接写 [inline形式](https://webpack.js.org/concepts/loaders/#inline): ! as seprator

[]数组处理逻辑是栈，后入先出，所以这就很好理解sass=》PostCss=》css=》style

## 安装

```js
npm i -D webpack webpack-cli
```

webpack是处理核心,webpack-cli可以利用npm script在代码中调用。根据npm scrip运行机制，会在node_modules/bin目录下优先查找匹配的命令。

[webpack cli](https://webpack.js.org/api/cli/)

```bash
webpack entry -o output
touch webpack.config.js
webpack --config webpack.config.js
```

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

```bash
npm i -D style-loader css-loader postcss-loader autoprefixer sass-node sass-loader
```

```js
module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader",
            ]
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader",
                "sass-loader" // compiles Sass to CSS
            ]
        }, {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}
```

- sass
- [postcss-loader](https://github.com/postcss/postcss-loader)
  - autoprefixer

```js
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                "> 0.01%"
            ]
        })
    ]
}
```

- style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。
- css-loader会遍历 CSS 文件，找到 url() 表达式,然后处理;

```js
npm i -D html-webpack-plugin extract-text-webpack-plugin clean-webpack-plugin
```

```js
//webpack.config.js
plugins: [
    new CleanWebpackPlugin(['dist']),//清空输出文件夹
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'src/template.index.html'),
    title: "Output Management",
    inject: true
})],
```
配合模板

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
  </body>
</html>
```

>[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

>[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## 开发

[devtool](https://webpack.docschina.org/configuration/devtool)查看源码

```js
// webpack.config.js
devtool: 'inline-source-map',
```

### DevServer

在代码发生变化后自动编译代码：

1. webpack's Watch Mode
1. webpack-dev-server
1. webpack-dev-middleware



```bash
npm install --save-dev webpack-dev-server
```

```js
// webpack.config.js
    devServer: {
        contentBase: './dist'
    },
// package.json
webpack-dev-server 
```

[webpack-dev-server相关配置项](https://webpack.docschina.org/configuration/dev-server)

`webpack-dev-server ≈ webpack-dev-middleware + express`主要是配合已有服务端使用

以上只是当文件变化时，全部重新编译，不用手工刷新，但是还是很慢。
而[HMR](https://webpack.docschina.org/guides/hot-module-replacement/)是解决这个**慢**：尽量只编译改动的地方，并替换。从上到下，如果是root节点，自然就是有依赖的全走一遍，慢；但若只是leaf节点，影响小，自然就快了。所以从这个角度来认同组件化细分模块，也是有此好处的。


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
