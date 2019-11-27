/* vue.config.js */
const WebpackShellPlugin = require("webpack-shell-plugin");


if (process.env.NODE_ENV === "production") {
    // build之后复制到服务器部署目录，需要配置相应脚本
    plugins.push(new WebpackShellPlugin({
        onBuildExit: ["node ./config/build/copydir"]
    }));
} else {
    baseUrl = "";
}

module.exports = {
    publicPath: baseUrl,
    lintOnSave: false,
    configureWebpack: {
        plugins,
    },
};

/* copydir.js */
const fsextra = require("fs-extra");
const path = require("path");

let sourceDir = path.resolve(__dirname, "./../../dist/");
let basePath = "G:\\workspaceO\\workspaceO\\scha-parent";
let deployStaticsDir = path.resolve(basePath, "scha-web\\src\\main\\webapp\\static");
// Sync:
if (process.env.NODE_ENV === "production" || !process.env.NODE_ENV) {
    console.log("__dirname:", __dirname, "\nfrom:", sourceDir, "\nto:", deployStaticsDir);
    fsextra.copy(sourceDir, deployStaticsDir)
        .then(() => {
            console.log("copied! 1", deployStaticsDir);
        })
        .catch(err => {
            console.error(err);
        });
}