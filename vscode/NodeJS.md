[代理](https://github.com/chimurai/http-proxy-middleware)
[学习路线图](http://blog.fens.me/nodejs-roadmap/)
[pm2](https://pm2.io/doc/en/runtime/overview/)

启动 node 执行listener代码

Nginx 带有异步I/O的时间轮询

Apache 电邮阻塞I/O的多线程

data-intensive real-time DIRT 数据密集型实时

# 常用代码片段

```js
const fs = require('fs');


const
  print = function (...args) {
    console.dir(args)
    try {
      throw new Error(args);
    } catch (e) {
      var eStackArray = e.stack.split("\n");
      if (eStackArray.length > 2) console.error(eStackArray[2]);
      if (arguments.length > 0) console.warn(arguments[0]);
    }
  },
  readFile = function (file, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.readFile(file, encoding, function (err, data) {
        if (err) reject(err);
        else resolve(data);
      })
    })
  },
  writeFile = function (file, data, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, encoding, function (err) {
        if (err) reject(err);
        else resolve(file + ' write sucess.');
      })
    })
  },
  copyFile = function (source, destination, isDelete = false) {
    if (isDelete) {
      return (function () {
          return new Promise((resolve, reject) => {
            fs.copyFile(source, destination, (err) => {
              if (err) reject(err);
              else resolve(source + ' was copied to' + destination);
            });
          });
        })()
        .then((data) => {
          return unlink(source);
        })
    } else {
      return new Promise((resolve, reject) => {
        fs.copyFile(source, destination, (err) => {
          if (err) reject(err);
          else resolve(source + ' was copied to' + destination);
        });
      });
    }
  },
  unlink = function (path) {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => {
        if (err) reject(err);
        else resolve(path + ' was removed');
      });
    });
  },
  mkdir = function (path) {
    return new Promise((resolve, reject) => {
      fs.exists(path, (exists) => {
        exists ? resolve(path + 'exist') : fs.mkdir(path, (err) => {
          if (err) reject(err);
          else resolve(path + 'exist');
        })
      });
    });
  },
  //删除非空文件目录，如果path是文件而非文件目录会报错
  rmdir = function (path) {
    return new Promise((resolve, reject) => {
      fs.rmdir(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path + ' was removed');
        }
      });
    });
  },
  exists = function (path) {
    return new Promise((resolve, reject) => {
      fs.exists(path, (exists) => {
        exists ? resolve(path) :
          reject(false);
      })
    });
  },
  getResObj = function (str) {
    let list = str.split('&')
    let listObj = {}
    for (var i = 0; i < list.length; i++) {
      item = list[i].split('=')
      listObj[item[0]] = item[1]
    }
    return listObj;
  }

module.exports = {
  print,
  readFile,
  copyFile,
  unlink,
  mkdir,
  rmdir,
  writeFile,
  exists,
  getResObj
}
```