const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin')
const CONFIG_PATH = {
    "COMMON": require('./config/modules/common.js')
};

let currentConfig = 'COMMON';

let {
    pages,
    baseUrl,
    devServer
} = CONFIG_PATH[currentConfig];

let args = process.argv.splice(2)
console.log(args);

devServer = {
    ...devServer,
    hot: true
};

let plugins = [];

function resolve(dir) {
    return path.join(__dirname, dir)
}

function addStyleResource(rule) {
    rule
        /* set rule name  */
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/components/styles/variables.scss'),
            ],
        })
}

if (process.env.NODE_ENV === 'production') {
    // build之后复制到服务器部署目录，需要配置相应脚本
    let a = new WebpackShellPlugin({
        onBuildExit: [`node ./config/build/copydir`]
    });
    plugins.push(a);

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

} else {
    baseUrl = "";
}
module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    pages: {
        ...pages,
    },
    devServer,
    publicPath: baseUrl,
    lintOnSave: false,
    configureWebpack: {
        plugins,
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@c': resolve('./src/components'),
                '@': resolve('./src'),
            }
        },
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));

        config
            .devtool('source-map');
        config
            .module
            .rule('js')
            .include
            .add(resolve("/node_modules/idb-keyval/**"))
            .add(resolve("/src/**"));
    },
}