# 1.1 作用域
编译器 作用域 引擎

事实上编译器会进行如下处理。
1. 遇到`var a`，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为`a`。
2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理`a = 2 `这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作`a `的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量。如果引擎最终找到了`a `变量，就会将`2 `赋值给它。否则引擎就会举手示意并抛出一个异常！

> 总结：变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。


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

---

# 2.1 关于this
>学习`this `的第一步是明白`this `既不指向函数自身也不指向函数的词法作用域。`this `实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

this的指向是执行上下文，即动态的表现。（是否跟多态有关？）

# 2.2 this全面解析

>如果要判断一个运行中函数的this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断this 的绑定对象。
1. 由new 调用？绑定到新创建的对象。
1. 由call 或者apply（或者bind）调用？绑定到指定的对象。
1. 由上下文对象调用？绑定到那个上下文对象。
1. 默认：在严格模式下绑定到undefined，否则绑定到全局对象。

---

- `this` 默认绑定
- 隐式绑定
- 显示绑定
    - 包裹函数（硬绑定）
- new 
    1. 创建（或者说构造）一个全新的对象。
    1. 这个新对象会被执行 **[[原型]]** 连接。
    1. 这个新对象会绑定到函数调用的this。
    1. 如果函数没有返回其他对象，那么new 表达式中的函数调用会自动返回这个新对象。

bind()
```js
function foo(a, b) {
    console.log("this.a", this.a);
    console.log(a, b);
}
foo();
var baz = foo.bind({a:"foo.bind"}, 2);
foo();
baz(3);
```

例外：
- apply没有绑定具体的对象（上下文）则默认模式
- demilitarized zone
- 非委托的对象


---
不明白这个软绑定是个什么意思

# 2.3 对象（需要再领悟）
文字语法 构造形式

属性名与属性值

数组的下标即为属性名，通过属性名指向属性值。

for in 

对象是JavaScript几个基础类型之一（string number boolean object null undefined symbol)。
有子类型(自有对象：String Number Boolean Function Array Date RegExp Erro)。会自动转换：字面量就是字面量，带属性的一定是经过了自动转换。

# 2.4 混合对象“类”
数据结构：封装 数据和相应的行为。
类是一种设计模式，也是一种封装。
parent 类和 children 类，是类关系。实例是类的具体实现。
JavaScript并不是真正的面向对象语言，但是可以模拟类设计模式，ES6的语法是这些模拟方法的语法糖。