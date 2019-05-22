// 打印当前目录树

const fs = require('fs');
const path = require('path');

function getPath(pathName) {
    return path.resolve(__dirname, pathName);
}
var target = path.join(__dirname, process.argv[2] || '../');
var target = path.join(__dirname, process.argv[2] || './a');
console.log(target, path.resolve("G:\LibrayRecord.md"));
fs.writeFileSync(path.resolve("G:\LibrayRecord.md"), `# Date:${new Date()} \n`, {
    encoding: "utf-8"
});



function loaddir(target, level) {
    var dirinfo = fs.readdirSync(target);
    var dirs = [];
    // var prefix = target;
    var prefix = new Array(level + 1).join('│  ');

    var files = [];

    dirinfo.forEach(info => {
        var stat = fs.statSync(path.join(target, info));
        if (stat.isDirectory()) {
            dirs.push(info);
        } else {
            if (!/.ini|recurrence$/.test(info)) files.push(info);
        }
    });

    var next = level + 1;
    dirs.forEach(dir => {
        fs.appendFileSync(path.resolve("G:\LibrayRecord.md"), `${prefix}├─ ${dir}\n`, {
            encoding: "utf-8"
        });
        loaddir(path.join(target, dir), next);
    });

    var count = files.length - 1;
    files.forEach(file => {
        if (count--) {
            fs.appendFileSync(path.resolve("G:\LibrayRecord.md"), `${prefix}├─ ${file}\n`, {
                encoding: "utf-8"
            });
        } else {
            fs.appendFileSync(path.resolve("G:\LibrayRecord.md"), `${prefix}└─ ${file}\n`, {
                encoding: "utf-8"
            });
        }
    });
}

loaddir(target, 0);