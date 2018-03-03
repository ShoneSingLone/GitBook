[第一本](https://www.tuicool.com/articles/fYb6fan?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com)

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

[JavaScript 标准库](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

# 2.4 混合对象“类”
- 数据结构：封装 数据和相应的行为。
- 类是一种设计模式，也是一种封装。
- parent 类和 children 类，是类关系。实例是类的具体实现。
- JavaScript并不是真正的面向对象语言（没有按类设计模式的类概念设计原生语法的“类”），但是可以模拟类设计模式，ES6的- 语法是这些模拟方法的语法糖。
- ~~多态是指可以~~

# 2.5 原型

- 涉及到【【get】】操作
```js
let aObj = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val * 2;
    },
    b: "a"
}

aObj.a = 1;nn
console.log(aObj.a);
console.log(aObj.b);
```
- 顺着原型链查找属性，有就直接用，没有就继续往上找，直到Object.prototype

- 错觉：构造函数
    - JavaScript不是真正的面向对象语言，所以构造器无从谈起，但是可以用`new`关键字造成构造器的假象。并不是复制，而是关联，但是执行上下文不一样，所以看起来是复制的效果。


# 2.6 行为委托
有点儿意思，看到委托才有点眉目。幸好Java还有点基础，见多识广才好。（我的意思是要多学，没有对比就没有...）


>在软件架构中你可以选择是否使用类和继承设计模式。大多数开发者理所当然地认为类是 唯一（合适）的代码组织方式，但是本章中我们看到了另一种更少见但是更强大的设计模式：行为委托。 行为委托认为对象之间是兄弟关系，互相委托，而不是父类和子类的关系。JavaScript 的  **[[Prototype]]**  机制本质上就是行为委托机制。也就是说，我们可以选择在JavaScript 中努 力实现类机制（参见第4 和第5 章），也可以拥抱更自然的 **[[Prototype]]**  委托机制。 当你只用对象来设计代码时，不仅可以让语法更加简洁，而且可以让代码结构更加清晰。 对象关联（对象之前互相关联）是一种编码风格，它倡导的是直接创建和关联对象，不把 它们抽象成类。对象关联可以用基于 **[[Prototype]]**  的行为委托非常自然地实现。


>委托行为意味着某些对象（XYZ）在找不到属性或者方法引用时会把这个请求委托给另一个对象（Task）。
因为面向对象是复制，所以用重写也没有关系，甚至体现了多态，但是JavaScript不是面向对象语言，没有所谓的复制，所以重写没有太大的意义，不如用另外的名字。而且，委托负责数据，委托目标（原型）负责行为，（伸出手，交出虎符，想给谁就给谁，弓、骑、步，谁拿着就带什么兵）。所以脑海里不应该是像Java那样有一个树状结构。


委托和混入的概念能不能混为一谈？
这里的委托并没有继承关系，从设计上并不受限于parent-Childen这样的关系。

doncise method declaration

init、insert、setup、build都是几个好词。
```js
var Widget = {
    init: function (width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};
var Button = Object.create(Widget);
Button.setup = function (width, height, label) {
    // 委托调用
    this.init(width, height);
    this.label = label || "Default";
    this.$elem = $("<button>").text(this.label);
};
Button.build = function ($where) {
    // 委托调用
    this.insert($where);
    this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function (evt) {
    console.log("Button '" + this.label + "' clicked!");
};
$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    btn1.setup(125, 30, "Hello");
    var btn2 = Object.create(Button);
    btn2.setup(150, 40, "World");
    btn1.build($body);
    btn2.build($body);
});
```
是否使用类和继承设计模式。类并不是 唯一（合适）的代码组织方式，

```js
var LoginController = {
    errors: [],
    getUser: function () {
        return document.getElementById(
            "login_username"
        ).value;
    },
    getPassword: function () {
        return document.getElementById(
            "login_password"
        ).value;
    },
    validateEntry: function (user, pw) {
        user = user || this.getUser();
        pw = pw || this.getPassword();
        if (!(user && pw)) {
            return this.failure(
                "Please enter a username & password!"
            );
        } else if (user.length < 5) {
            return this.failure(
                "Password must be 5+ characters!"
            );
        }
        // 如果执行到这里说明通过验证
        return true;
    },
    showDialog: function (title, msg) {
        // 给用户显示标题和消息
    },
    failure: function (err) {
        this.errors.push(err);
        this.showDialog("Error", "Login invalid: " + err);
    }
};
// 让AuthController 委托LoginController
var AuthController = Object.create(LoginController);
AuthController.errors = [];
AuthController.checkAuth = function () {
    var user = this.getUser();
    var pw = this.getPassword();
    if (this.validateEntry(user, pw)) {
        this.server("/check-auth", {
                user: user,
                pw: pw
            })
            .then(this.accepted.bind(this))
            .fail(this.rejected.bind(this));
    }
};
AuthController.server = function (url, data) {
    return $.ajax({
        url: url,
        data: data
    });
};
AuthController.accepted = function () {
    this.showDialog("Success", "Authenticated!")
};
AuthController.rejected = function (err) {
    this.failure("Auth Failed: " + err);
};
```

# 3.1 类型

- JavaScript 有七种内置类型（ES6）：还有对象的子集 参考[JavaScript 标准库](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
- 可以使用typeof 运算符来查看。（ 通过typeof 的安全防范机制（阻止报错）来检查undeclared 变量，有时是个不错的 办法。）
![](./YDK_JavaScript/UNdeclare.png)
- 类型定义了值的行为特征。 很多开发人员将undefined 和undeclared 混为一谈， 但在JavaScript 中它们是两码事。 undefined 是值的一种。undeclared 则表示变量还没有被声明过。 遗憾的是，JavaScript 却将它们混为一谈，在我们试图访问"undeclared" 变量时这样报 错：ReferenceError: a is not defined， 并且typeof 对undefined 和undeclared 变量都返回 "undefined"。 
- 变量没有类型，但它们持有的值有类型。（这里要明白所谓的弱类型语言就是语言引擎不要求变量总是持有与其初始值同类型的值。）

# 3.2 值

数组、字符、数字

- JavaScript 中的数组是通过数字索引的一组任意类型的值。
    - 想用`var arr = Array.prototype.slice.call( arguments );`将对象转换成数组需要保证arguments必须是类数字下表属性名，并且有length。
- 字符串和数组类似，但是它们的 行为特征不同，在将字符作为数组来处理时需要特别小心。
    - indexOf、concat|charAt、charCode
    - `Array.prototype.`字符借用Array方法（join、map),但是String 是read-only 所以reverse是不能用借用的方法，只能将String先split成Array再join回来。（适用于简单字符串）
- JavaScript 中的数字包括“整数”和“浮点型”。
    - toExponential、toFixed、toPrecision
    - 浮点不精准，需要Math.abs()
    - 安全的整数是指JavaScript语言本身能够存储的数值 2^53-1
- 基本类型中定义了几个特殊的值。
    - NaN、Infinity 
    ```js
    var a = 1 / 0; // Infinity
    var b = -1 / 0; // -Infinity
    ```
  - 由值类型决定传值或传址（除了object以外的基本类型都是传值）
  - null 类型只有一个值null，undefined 类型也只有一个值undefined。 所有变量在赋值之前默认值都是undefined。
  - void 运算符返回undefined。

# 3.3 原生函数

- toString()
- [[Class]]
- JavaScript 为基本数据类型值提供了封装对象，称为原生函数（如String、Number、Boolean等）。它们为基本数据类型值提供了该子类型所特有的方法和属性（如：String#trim() 和Array#concat(..)）。
- 对于简单标量基本类型值，比如"abc"，如果要访问它的length 属性或String.prototype 方法，JavaScript 引擎会自动对该值进行封装（即用相应类型的封装对象来包装它）来实现对这些属性和方法的访问。
- valueOf() toString()返回的都应该是基本类型

# 3.4 强制类型转换
- 类型转换：发生在静态类型语言的编译阶段
- 强制类型转换：发生在动态类型语言的运行时（runtime）
    (这里的显示与隐式并非严格意义上的，只是取决于自己的认知水平，明不明显而已)
    - 显示强制类型转换
    - 隐式强制类型转换

- “抽象操作”（即“仅供内部使用的操作”）和转换规则。
    - ToString、ToNumber、ToBoolean、ToPrimitive。
    [隐式装箱-ToPrimitive](https://sinaad.github.io/xfe/2016/04/15/ToPrimitive/)
    - ToString(): toString()的调用，有默认的，一般对象也可以有自己的；同时说一下`JSON.stringify(object[，replacer[，space]])`，toJSON()方法是将对象转换成“安全JSON对象”，（不安全的有几个：undefined、function、symbol，数组中为了占位会替换为null）然后再返回字符串，相当于一般对象的toString(),修改就可以修改这个。既然要转换成JSON字符串，自己可以设计数据结构就不要整那些乱七八槽的玩意儿进去，有循环引用就是自己作死。
    - ToNumber():
    - ToBoolean():假值比较少，当然是记住假值；然后new 的是对象，当然就是真值，这是一个陷阱：(还有注意短路运算，守护运算符，之前也记过笔记)
    ```js
    var a = new Boolean(false);
    var b = new Number(0);
    var c = new String("");
    var d = Boolean(a && b && c);
    d; // true
    ```
    - 一元运算+隐式转换为数字
    - ~与indexOf 真假值优雅的写法

    - ，a + "" 会对a 调用valueOf() 方法，然后通过ToString 抽象 操作将返回值转换为字符串。而String(a) 则是直接调用ToString()。
    - 宽松相等：
        - 字符串和数字 ToNumber
        - 是布尔类型 ToNumber
        - 在== 中null 和undefined 是一回事，可以相互进行隐式强制类型转换
        - 对象和非对象 对象 ToPrimitive

```js
false == []; // true -- []是对象，转成''，跟false Boolean值又要转成数字，就是0==0
2 == [2]; // true
"" == [null]; // true
```
（实际中，这些代码都没什么意义，绝对不要写这种垃圾代码；只是了解这种机制）

- 抽象关系比较
    - 因为根据规范`a <= b` 被处理为`b < a`，然后将结果反转。因为`b < a `的结果是false，所以`a <= b `的结果是`true`。 这可能与我们设想的大相径庭，即<= 应该是“小于或者等于”。实际上JavaScript 中<= 是 “不大于”的意思（即!(a > b)，处理为!(b < a)）。同理a >= b 处理为b <= a。

# 3.5 语法

- 语句和表达式在英语中都能找到类比——语句就像英语中的句子，而表达式就像短语。
- 表达式可以是简单独立的，否则可能会产生副作用。JavaScript 语法规则之上是语义规则（也称作上下文）。
    - 例如，{ } 在不同情况下的意思不尽相同，可以是语句块、对象常量、解构赋值（ES6）或者命名函数参数（ES6）。
- JavaScript 详细定义了运算符的优先级（运算符执行的先后顺序）和关联（多个运算符的组合方式）。只要熟练掌握了这些规则，就能对如何合理地运用它们作出自己的判断。
- ASI（自动分号插入）是JavaScript 引擎的代码解析纠错机制，它会在需要的地方自动插入分号来纠正解析错误。问题在于这是否意味着大多数的分号都不是必要的（可以省略），或者由于分号缺失导致的错误是否都可以交给JavaScript 引擎来处理。
- JavaScript 中有很多错误类型，分为两大类：
    - 早期错误（编译时错误，无法被捕获）和
    - 运行时错误（可以通过try..catch 来捕获）。
    - 所有语法错误都是早期错误，程序有语法错误则无法运行。
- 函数参数和命名参数之间的关系非常微妙。
    - 尤其是arguments 数组，它的抽象泄漏给我们挖了不少坑。因此，尽量不要使用arguments，如果非用不可，也切勿同时使用arguments和其对应的命名参数。finally 中代码的处理顺序需要特别注意。它们有时能派上很大用场，但也容易引起困惑，特别是在和带标签的代码块混用时。总之，使用finally 旨在让代码更加简洁易读，切忌弄巧成拙。
- switch 相对于if..else if.. 来说更为简洁。需要注意的一点是，如果对其理解得不够透彻，稍不注意就很容易出错。