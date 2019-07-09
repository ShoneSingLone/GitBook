const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


if (process.env.NODE_ENV === 'production') {
    plugins.push(new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
            // 最紧凑的输出
            beautify: true,
            // 删除所有的注释
            comments: true,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true,
                drop_debugger: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                keep_fnames: false,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }

    }));
}

module.exports = {
    configureWebpack: {
        plugins,
    }
}