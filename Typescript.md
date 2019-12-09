# [TypeScript](https://www.typescriptlang.org/)

[打造TypeScript的Visual Studio Code开发环境](https://zhuanlan.zhihu.com/p/21611724)
[tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[ts-node](https://github.com/TypeStrong/ts-node)

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "args": [
                "${workspaceFolder}\\src\\server.ts"
            ]
        }
    ]
}
```

## 类型定义文件

- [DefinitelyTyped](http://definitelytyped.org/)
- [typings](https://github.com/typings/typings)

## ES6

1. TypeScript-字符串新特性
    - 多行字符创
    - 字符串模板
    - 自动拆分字符串
1. TypeScript-参数类型
    - 可以使用的类型 string number boolean

1. TypeScript-参数默认值
    - 一般 let myname:string = "name";
    - 函数 function test(name:string="jojo");
    带默认值的参数一定要放在最后面
1. 可选参数
    - 函数 function test(name:string="jojo"，gender?:string);
    可选参数一定要在必选参数后面
1. TypeScript-Rest and Spread操作符

function func(...args){}

1. 解构
    - 深层匹配

## 面向对象特性

### Class

定义 class
构造函数 constructor
继承 extends super

### 泛型

### 接口

### 模块

export
import
可重用单元

### 装饰器
