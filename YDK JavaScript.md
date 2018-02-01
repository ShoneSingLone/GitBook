# 1.1 作用域
编译器 作用域 引擎


# 1.2 词法作用域
**关键**：编译，执行两个阶段；变量提升；

```js
function foo(params) {
    console.log(a);
}

function bar() {
    var a = 'bar';
    foo();
}

bar(); //'undefined'
//如果没有声明a则会报：ReferenceError
var a = 'window';
bar(); //'window'
```
# 1.3 函数作用域和块作用域

# 1.4 提升
- 函数表达式提升、且包含函数的实际隐藏值
- var 提升分为编译时的声明和命名（报undefined）和执行时的赋值（TypeError）
- let、const不提升

# 1.5 作用域和闭包

```js
for (var index = 0; index < 5; index++) {
```
因为`var`有变量提升,所以 等同于
```js
 var index;
 for (index = 0; index < 5; index++) {
```
`let`没有变量提升，词法作用域在`for(){...此处...}`所以不需要使用函数作用域。立即执行匿名函数表达式IIFE和`{let...}`都是创建作用域的方法

<iframe height='265' scrolling='no' title='Closure' src='//codepen.io/singlone/embed/zRvroG/?height=265&theme-id=dark&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/singlone/pen/zRvroG/'>Closure</a> by ShoneSingLone (<a href='https://codepen.io/singlone'>@singlone</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# 1.A 动态作用域
- 词法作用域是在写代码或者说定义时确定的，关注函数在何处声明；
- 而动态作用域是在运行时确定的，关注函数从何处调用。（this 也是！）

>JavaScript词法作用域语言，而this是动态作用域。

# 1.B 块作用域的替代方案
let赋予了JavaScript创建**单纯**的块作用域的能力。（try/catch和with并不好使）

# 1.C this词法

```js
var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};
var id = "not awesome"
obj.cool(); // 酷
setTimeout(obj.cool, 100); // 不酷
```
` var self = this;`
```js
var obj = {
    count: 0,
    cool: function coolFn() {
        var self = this;
        if (self.count < 1) {
            setTimeout(function timer() {
                self.count++;
                console.log("awesome?");
            }, 100);
        }
    }
};
obj.cool(); // 酷吧？
```
箭头函数
```js
var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(() => { // 箭头函数是什么鬼东西？
                this.count++;
                console.log("awesome?");
            }, 100);
        }
    }
};
obj.cool(); // 很酷吧?
```
`bind()`正确使用this机制
```js
var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(function timer() {
                this.count++; // this 是安全的
                // 因为bind(..)
                console.log("more awesome");
            }.bind(this), 100); // look, bind()!
        }
    }
};
obj.cool(); // 更酷了。
```

ES6的箭头函数使用的是词法作用域，所以看定义时的this是谁，就是谁。这是可预测的。