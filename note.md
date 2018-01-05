# Tips

1.	PhoneGap / Cordova、AppCan、DCloud / APICloud，都是基于 WebKit 扩展的；
Weex 在 WebKit 与原生上实现了一个抽象层；
2.	NativeScript、React Native 基于原生实现了自己的统一 API；
3.	推荐前端入门跨平台 App 开发先学 Cordova，最简单、正规，社区最大

---
> [HTML+CSS基础课程](https://www.imooc.com/learn/9)

# HTML
[MDN-Web/HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[300毫秒延迟](https://thx.github.io/mobile/300ms-click-delay#%E5%BD%93%E5%89%8D%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E5%BB%B6%E8%BF%9F)

## Web_Components
[Web_Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [自定义元素](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Custom_Elements)
- [HTML模板](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)
- [影子DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Shadow_DOM)
    - 
    >[Shadow-DOM](https://aotu.io/notes/2016/06/24/Shadow-DOM/index.html)
- [HTML导入](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/HTML_Imports)

[从HTML Components的衰落看Web Components的危机](https://github.com/xufei/blog/issues/3)

## canvs
[将图片转换base64格式，data:image/png;base64是什么？](http://blog.csdn.net/webxiaoma/article/details/70053444)

[Css中路径data:image/png;base64的用法详解](http://www.aimks.com/css-path-data-image-png-usage-base64.html)

[瞎折腾：把JS,CSS任意文本文件加密成一张图片](https://juejin.im/entry/5a41b3d66fb9a045154421cb?utm_medium=fe&utm_source=weixinqun)

## SVG
[SVG](https://aotu.io/notes/2015/11/20/svg-I-know/)

# CSS
[divcss学习网站](http://www.divcss5.com/)


[MDN-Web/CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

[MDN-Web/CSS/Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

border的样式很重要
if `border：none;` 浏览器不会渲染border; 只有宽度，没有样式，也不会渲染, 所以一定要有样式才有效。 
##继承
颜色，文字，字体间距行高对齐方式，和列表的样式

- 所有元素可继承：visibility和cursor。
- 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
- 终端块状元素可继承：text-indent和text-align。
- 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。

## 层叠
- 特殊性、权重：ID选择器>Class选择器=伪类>标签名称选择器
- 顺序
- 重要性：！important

## 单位
[vm rem em](https://zhuanlan.zhihu.com/p/30413803?group_id=906220704115974144)

```html
<html style="height: 100%;">
  <body style="height: 100%;">
    <div style="height: 100%;">
```
这在MaterialDesign的Demo当中，使用的是两个div使窗口划分为两个部分，各自按一定比例占满整个窗口。



## 文字排版
“文字”有什么？
- font-family:"微软雅黑";
- font-size:20px;
- color:green;//前景色
- font-weight:blod;
- font-style:italic;
- text-decrotion:none;||text-decoration:line-through;//装饰文本《HTML5于CSS3基础教程》一般用作锚去除下划线或者价格删除线。
- block:text-indent:2em;//行缩进
- block:line-height:2em;//行高
- letter-spacing:50px;||word-spacing//字母间距||单词间距
- text-align:center;||
- vertical-align:center;



## 盒子模型（box）

HTML每个元素都是大大小小的盒子。


我的理解——主要是分为两种：inline和block。
在两者的基础特性上，又有其他的组合效果如——inline-block

## 行内元素（inline）和块级元素（block）

> [说说行内元素和块级元素](http://www.jianshu.com/p/d69878549d92)

### inline
1. 和其他元素都在一行上；
1. 元素的高度、宽度及顶部和底部边距不可设置；
1. **包裹**里面的文字或图片，尽量收缩：元素的宽度就是它包含的文字或图片的宽度，不可改变。

### block
1. 一个块级元素独占一行；
1. 元素的高度、宽度、行高以及顶和底边距都可设置；
1. **撑**：元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。

#### 宽度和高度
css内定义的宽（width）和高（height），指的是填充以里的内容范围。 因此一个元素实际宽度（盒子的宽度）=左边界+左边框+左填充+内容宽度+右填充+右边框+右边界。
> ![iebox和w3cbox.png](./media/iebox和w3cbox.png)
- 标准盒子模型 ＝ margin + border + padding + content （content =  width | height）
- IE盒子模型 ＝ margin + content （content = border + padding + width | height）



![boxwidthandheight](./media/boxwidthandheight.jpg)

[深入理解父元素与子元素的width关系](http://www.cnblogs.com/zhuzhenwei918/p/6389567.html)

### inline-block

`absolute`和`float`可是元素隐性变为 `inline-block`
1. 和其他元素都在一行上；
1. 元素的高度、宽度、行高以及顶和底边距都可设置。



值	|描述
---|---
content-box	|这是由 CSS2.1 规定的宽度高度行为。 宽度和高度分别应用到元素的内容框。 在宽度和高度之外绘制元素的内边距和边框。
border-box	| 为元素设定的宽度和高度决定了元素的边框盒。 就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
inherit|规定应从父元素继承 box-sizing 属性的值。


[如何让 height:100%; 起作用](http://www.webhek.com/post/css-100-percent-height.html)
[如何让 height:100%; 起作用](http://www.divcss5.com/rumen/r613.shtml)
高度跟父元素有关，所以如果要使height起作用，需要

行内元素（伪） | 语义| |块级元素| 语义
---|---|---|---|---
a        | 锚                                 | | address    | 地址
abbr     | 缩写                               | | blockquote | 块引用
acronym  | 首字                               | | center     | 居中对齐块
b        | 粗体（不推荐）                     | | dir        | 目录列表
bdo      | bidi override                      | | **div**    | （无语义的块级元素）
big      | 大字体                             | | dl         | 定义列表
br       | 换行                               | | fieldset   | form表单控制组（group）
cite     | 引用                               | | form       | 交互表单
code     | 计算机代码（在引用源码的时候需要） | | h1         | 大标题
dfn      | 定义字段                           | | h2         | 副标题
em       | 强调                               | | h3         | 3级标题
font     | 字体设定（不推荐）                 | | h4         | 4级标题
i        | 斜体                               | | h5         | 5级标题
~~img~~      | 图片                               | | h6         | 6级标题
~~input~~    | 输入框                             | | hr         | 水平分隔线
kbd      | 定义键盘文本                       | | isindex    | input prompt
label    | 表格标签                           | | menu       | 菜单列表
q        | 短引用                             | | noframes   | frames可选内容（对于不支持frame的浏览器显示此区块内容）
s        | 中划线（不推荐）                   | | noscript   | 可选脚本内容（对于不支持script的浏览器显示此内容）
samp     | 定义范例计算机代码                 | | ol         | 排序列表
select   | 项目选择                           | | p          | 段落
small    | 小字体文本                         | | pre        | 格式化文本
**span** | 常用内联容器，定义文本内区块       | | table      | 表格
strike   | 中划线                             | | ul         | 非排序列表
strong   | 粗体强调                           |
sub      | 下标                               |
sup      | 上标                               |
textarea | 多行文本输入框                     |
tt       | 电传文本                           |
u        | 下划线                             |
var      | 定义变                             |

- 转换：float\display\position

### 居中
1. 水平居中
    1. 行内元素：通过给父元素设置 text-align:center
    1. 块状元素：
        1. 定宽：满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。
        1. 不定宽：
            1. 加入 table 标签：table标签的长度自适应性---即不定义其长度也不默认父元素body的长度（table其长度根据其内文本长度决定），因此可以看做一个定宽度块元素，然后再利用定宽度块状居中的margin的方法，使其水平居中。
            1. 设置 `display: inline` 方法：使block元素变为inline，类似行内元素的方法
            1. 设置 position:relative 和 left:50%：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的。
            ```html
            <!DOCTYPE HTML>
            <html>
            <head>
            <meta charset="utf-8">
            <title>不定宽块状元素水平居中</title>
            <style>
            .container{
                float:left;
                position:relative;
                left:50%
            }
            .container ul{
                list-style:none; 
                margin:0;
                padding:0;
                position:relative;
                left:-50%;
            }
            .container li{float:left;display:inline;margin-right:8px;}
            .wrap-center{
                background:#ccc;
            }
            </style>
            </head>

            <body>
            <div class="container">
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </div>

            <!--下面是代码任务区-->
            <div class="wrap">
                <div class="wrap-center">我们来学习一下这种方法。</div>
            </div>
            </body>
            </html>
            ```
            ![](./media/FreshPaint-1-2017.11.29-05.21.39.png)
1. 垂直居中
    1. 父元素高度确定
        1. 单行文本:通过设置height 和 line-height 高度一致来实现的。
        <script src='http://runjs.cn/gist/11yepad9/all'></script>
            - ```
            <style>
            .container{
                height:100px;
                line-height:100px;
                background:#999;
            }
            </style>
            ```
        1. 多行文本或图片：
            1. 使用插入 table  (包括tbody、tr、td)标签，同时设置 vertical-align：middle。
            1. 在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性，但注意 IE6、7 并不支持这个样式, 兼容性比较差。相当于内置了方法1.


### 布局模型
 
元素有三种布局模型：
1. 流动模型（Flow）/ 标准文档流
1. 浮动模型 (Float)
1. 层模型（Layer）

#### 流动模型（Flow）/ 标准文档流

1. 块状元素都会在所处的包含块内自上而下按顺序垂直延伸分布
1. 内联元素都会在所处的包含元素内从左到右水平分布显示。

#### 浮动模型 (Float)
浮动使之脱离标准文档流。效果类似inline-block且无元素间间距。
浮动用来设置文字环绕，也可以用来布局，**bootstrap栅栏系统**是利用浮动设计的。

- [清除浮动](http://nicolasgallagher.com/micro-clearfix-hack/)
- fix float所产生的塌陷
    - [利用:after伪类元素清除](http://www.html-js.com/article/2203)
    - [Why does overflow hidden stop floating elements escaping their container?](https://stackoverflow.com/questions/9193214/why-does-overflow-hidden-stop-floating-elements-escaping-their-container)
    - [BFC 块级格式化上下文](http://web.jobbole.com/83149/)+ [CSS之BFC详解](http://www.html-js.com/article/1866)+[](http://www.10tiao.com/html/59/201712/2651553261/1.html)
    **BFC特性**
		1. 内部的Box会在垂直方向，从顶部开始一个接一个地放置。
		1. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生叠加
		1. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
		1. BFC的区域不会与float box叠加。
		1. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
		1. 计算BFC的高度时，浮动元素也参与计算。
		---
		**作用**

		1. 说的
		1. 解决margin叠加问题 
		1. 布局[CSS之BFC详解](http://www.html-js.com/article/1866)
		1. 用于清除浮动，计算BFC高度.
		---

		`overflow: hidden;`只是创建BFC的方式之一，比较常用。

		- `display: table` 可能引发响应性问题
		- `overflow: scroll` 可能产生多余的滚动条
		- `float: left` 将把元素移至左侧，并被其他元素环绕
		- `overflow: hidden` 将裁切溢出元素


Inline-block和浮动布局的区别？

#### 层模型

1. 绝对定位(position: absolute)
    - 将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
1. 相对定位(position: relative)
    - 通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。
1. 固定定位(position: fixed)：位置效果使用`background-attachment:fixed`
    - position:fixed;并不只是相对于窗口定位：CSS3的transform会影响定位；
     [相对于父元素的FIXED定位的实现](http://www.cnblogs.com/biyesheng/p/6386176.html)
     [相对于父元素的FIXED定位的实现:transform](https://code.w3ctech.com/detail/1305)
    - ```css
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }

                html {
                    height: 100%;
                }

                body {
                    background: #ccc;
                    height: 100%;
                    transform: translateZ(0);
                }

                .absolute {
                    /* transform: translateZ(0); */
                    height: 600px;
                    width: 650px;
                    background: #d36d6d;
                    overflow: auto;
                    position: relative;
                    left: 200px;
                    top: 100px;
                }

                .fixed {
                    background-color: rgba(248, 1, 1, 0.856);
                    width: 100%;
                    position: fixed;
                    /*不要设置top,left,bottom,right*/
                }

                .content {
                    /*为了撑起absolute的高度*/
                    background-color: aqua;
                    /* float: left; */
                    height: 1800px;
                    width: 300px;
                }

                .content>p {
                    background-color: rgba(16, 49, 233, 0.198);
                    height: 100px;
                }

                img {
                    width: 40%;
                    /* height: 15px; */
                }
            </style>



        </head>

        <body> body
            <div class="absolute"> absolute
                <div class="content">
                    <p>content :height 100px;</p>
                    <div class="fixed">fixed</div>
                </div>
            </div>

        </body>

        </html>
         ```

## 布局模板

布局的策略：从左到右，从上到下；
vertical-align：top
line-height



### flex布局
[深入理解 flex 布局以及计算](https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html)
[Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[Flex 布局教程 实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
[Flex 布局教程 demo](http://static.vgee.cn/static/index.html)
[FLEX-LAYOUT](https://github.com/Coffcer/flex-layout)

 flex分为两个部分：一个是container 用作包裹；另一个是item，被包裹的元素。container可以指定排列的方向（flex-direction）和换行的方式（flex-wrap）。
 
 **flex-direction**属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。意思就是当`flex-directin:column;`时，justify axis变成了Y轴。
 
 注意到这里的baseline和content的around就可以理解到这两者的区别：content是main和cross上的分部，而align-items就是item内部的布局基准。align又有stretch属性，在cross轴上特有。
 尽量是不要自动换行，设计为row和column的方式：指定column。


[mindmap](http://naotu.baidu.com/file/c629a9abd17ecd60f59bc98dcfe5a4fe)


### 瀑布流
[瀑布流布局的实现步步升级（原生JS）](http://www.dengzhr.com/js/405)
[Web前端实现瀑布流的几种方法](http://www.jianshu.com/p/d4ca937c6f96?from=jiantop.com)
[Web前端实现瀑布流的几js实现瀑布流的三种方式比较，js瀑布三种方式种方法](http://www.jianshu.com/p/d4ca937c6f96?from=jiantop.com)
[纯js实现瀑布流布局及ajax动态新增数据  ](https://www.teakki.com/p/5901f3cab819c55a2789c289)

## 
[使用 CSS overscroll-behavior 控制滚动行为：自定义下拉刷新和溢出效果](https://github.com/dev-reading/fe/blob/master/articles/2017-11-15-overscroll-behavior.md)
## @font-face
glyphicons 矢量图

## 动画

# JavaScript

>**参考书目** 《JavaScript权威指南》
>[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)
>[es2015](https://babeljs.io/learn-es2015/)


## 数据类型

### ECMAScript 6定义了7种数据类型
>[JavaScript数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

1.	原始类型（值本身无法被改变）（primitive value）
    - Boolean：0、NaN、undefined、null、””表示false，否则是true
    - Null：未初始化的Object
    - Undefined：未初始化的原始类型
    - Number：0八位、0x十六位
    - String：
    - Symbol（ECMAScript 6）

类型 | true|false
---|---|---
Boolean | true | false
Null | \ | null
Undefined | \ | undefined
Number | \ | 0、NaN
String |  \| ""

```js
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call("String"));//[object String]
console.log(Object.prototype.toString.call(0x0098098));//[object Number]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]

```


2.	Object

### 变量

#### 解构赋值

>[概念：XOR_swap](https://en.wikipedia.org/wiki/XOR_swap)

- 表明原变量的类型，属性名字、顺序要一致
- 取数赋值跟交换是两种用途：`[a,b] = [b,a]`此为交换

#### 变量作用域
[变量用var和不用var的区别](https://segmentfault.com/a/1190000000638445)
[ES6 变量作用域与提升：变量的生命周期详解](https://segmentfault.com/a/1190000010640225)
---


1. 不用var是全局变量的属性；可以用delete删除【属性】；不能变量提升
1. 用var是变量；不可以用delete删除；会变量提升；是局部变量。
1. `‘use strict’`模式下不使用var会报错。

一个变量的作用域是程序源代码中定义这个变量的区域。全局变量和局部变量
关于变量提升还有函数提升：使用定义式则是赋值也提升了，如果使用表达式就如同使用var的变量一样，只是声明提升了而没有赋值，是undefined。
```js
    console.log(a);//[Function: a]
    a();//函数提升
    var a = "变量已赋值";
    console.log(a);//变量已赋值
    function a(){
        console.log("函数提升");
    }
    a = 3;
    console.log(a);//3
    a();//报错：a is not a function
```
### let的[用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

 新增的块级作用域。
 
```js
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // 不同的变量
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
```

## 表达式和运算符
>[表达式和运算符](https://juejin.im/post/58116ca467f3560057d58bee)

### $$ and ||
```js
$("#btshow").click(function (e) {
    /*
    《JavaScript权威指南》p80：
        &&短路运算符 和||返回的是变量本身，但是因为JavaScript可以自动转换Boolean值，所以常用来判断真假值。
        A && B 
        - if A=false => A, =>C
        - if A=true => B,{
                        - if B = true => B
                        - if B = false => C 
                        }
    */
    var isA = !!($._data);
    var isB = !!($._data($(document)[0], "events"));
    var isC = !!($.data($(document)[0], "events"));

    var _arr_events = $._data && $._data($(document)[0], "events.data($(document)[0], "events")';
    for (key in _arr_events) {
        show(key + "事件数量：" + _arr_events[key].length);
    }
})
```

### 语句
for in针对的是普通对象，有一下弊端：
- key是字符串而不是数字
- 会遍历自有属性，顺着原型链
- 可能是随机的而不是按照所谓Array的方式
for of针对这些做了极大的优化 
- 更适合遍历数组

## 对象

## 属性
[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### 对象的创建
- 字面量:不会调用Object构造函数
- new
- Object.create()：涉及原型

Delete 属性
原型对象、类和继承
原型是一个实例对象。
对象
JavaScript秘密花园

hasOwnProperty判断自有属性

猴子补丁：
这个叫法起源于Zope框架，大家在修正Zope的Bug的时候经常在程序后面追加更新部分，这些被称作是“杂牌军补丁(guerilla patch)”，后来guerilla就渐渐的写成了gorllia((猩猩)，再后来就写了monkey(猴子)，所以猴子补丁的叫法是这么莫名其妙的得来的。
猴子补丁主要有以下几个用处：

1.	在运行时替换方法、属性等
2.	在不修改第三方代码的情况下增加原来不支持的功能
3.	在运行时为内存中的对象增加patch而不是在磁盘的源代码中增加

原型和原型的好处：

### 数组(Array)
#### 数组方法
（有一个术语，描述方法是否改变自身的，忘了是什么了......)

[array 方法](http://louiszhai.github.io/2017/04/28/array/#some)
- 改变自身
- 不改变自身
- 遍历


判断是否是数组的方法是看类属性（是对象的三个属性之一：原型、类、可扩展）

```js
//对象&&对象类型
function isArray(obj) {
    return Array.isArray(function (obj) {
        return typeof obj === "object" && Array.prototype.toString.call(obj) === "[object Array]";
    };
}
```

### set
唯一性

NaN等于自身，而精确相等运算符认为NaN不等于自身

### 函数(function)

#### 箭头函数Arrow_functions

[Arrow_functions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

可以被定义，可以被调用，是一种语法，也是一种值，可以被程序操作，可以作为函数的参数。
Arrow_functions no this or arguments、super、new.target。call apply 因为没有this ，所以无法绑定。

```js
(function() {
	console.log(this);
  return [
    (() => {
    	console.log(this.x);
    }).bind({ x: 'inner' })()
  ];
}).call({ x: 'outer' });
// { x: 'outer' }
// 因为Arrow——function没有this所以bind是无效的，=》无法改变Arrow里面的this指向
// outer
```

#### 自执行匿名函数（Self-executing anonymous function）/立即调用的函数表达式（Immediately-Invoked Function Expression）
IFE

[JavaScript匿名函数与自执行] (http://www.jcodecraeer.com/a/jquery_js_ajaxjishu/2012/0628/290.html)
- 匿名函数的作用创建闭包和减少全局变量（防止污染命名空间）

[深入理解JavaScript系列（4）：立即调用的函数表达式。](http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)
- 表达式和function声明，表达式是一个引用，没有立即执行。

- 让一个函数声明语句变成了一个表达式。
- 任何消除函数声明和函数表达式间歧义的方法，都可以被解析器正确识别
- 一元运算都是有效的

[运算符性能测试](https://jsperf.com/js-funcion-expression-speed)

```js
	(function(){/*code*/})();//****推荐，因为性能
	!function(){/*code*/}();
	+function(){/*code*/}();
```

#### prototype 和__proto__的区别是什么？
> Mozilla’s implementation of JavaScript has (since the early days of Netscape) exposed the prototype attribute through the specially named __proto__ property, and you can use this property to directly query or set the prototype of any object. Using __proto__ Core JavaScript is not portable: it has not been (and probably never will be) implemented by IE or Opera, although it is currently supported by Safari and Chrome. Versions of Firefox that implement ECMAScript 5 still support __proto__, but restrict its ability to change the prototype of nonextensible objects.

constructor function有prototype，使用new 关键字返回的实例对象有__proto__：
```js
//(错误Code表示)
object[__proto__] = new Constructor[prototype]
```
指向的是同一个对象，**但是**不建议直接使用object的__proto__来修改constructor function的prototype。

```js
        // 有一堆原材料就是自有变量
        var Calculator = function (decimalDigits, tax) {
            this.decimalDigits = decimalDigits;
            this.tax = tax;
        };
        // 交给谁来处理是可以切换的
        var one = {
            describe: function () {
                return console.log("original describe");
            },
            add: function (x, y) {
                return console.log(x + y);
            },
            subtract: function (x, y) {
                return console.log(x - y);
            }
        };
        var two = {
            describe: function () {
                return console.log("original describe");
            }, multiply: function (x, y) {
                return console.log(x * y);
            },
            divide: function (x, y) {
                return console.log(x / y);
            }
        };
        Calculator.prototype = one;
        var oneCalculator = new Calculator();
        oneCalculator.add(1, 2);
        oneCalculator.subtract(1, 2);
        // or
        Calculator.prototype = two;
        var twoCalculator = new Calculator();
        twoCalculator.multiply(1, 2);
        twoCalculator.divide(1, 2);

        twoCalculator.__proto__.describe = function () {
            return console.log("describe has changed");
        }
        // 实例对象有__proto__属性；
        console.log(Calculator.prototype===twoCalculator.__proto__);
        one.describe();
        two.describe();
        //改变的是原型所以two和three都被改变
        var three = new Calculator();
        three.describe();
        //改变的只是three的describe
        three.describe = function () {
            return console.log("three describe has changed");
        };
        //所以four不变
        var four = new Calculator();
        three.describe();
        four.describe();
        //使用new不会重新生成原型上的实例
```

### this
使用准则： 
1. 作为函数调用this指代全局对象（^strict）或者undefined（strict）；
这个特性倒是可以用来区别当前是否是strict模式： `var isStrict = (function(){return !this})();`

1. 作为方法调用指代调用的对象本身；
1. 作为构造函数this指代构造对象本身，跟2的方式不同。即`new object.constructor()`中的`this`（调用上下文）并不是object而是constructor()返回的对象；
1. 作为间接调用call()、apply()，显示指定this。另外也可以理解成上面的三种是第四种的语法糖，因为都可以用第四种表示出来而且没有异议。

>还有更详细的《你不知道的JavaScript（上卷）》待阅读。（挖坑）

```
    function f(argument) {
        console.log(this);
    }

    var ar = [f,f];
    ar[0]();
    ar[0].call(ar);
    var obj = {a:"obj"};
    obj.f = f;
    obj.f();
    obj.f.call(obj);
```
### 可变参数和默认值
JavaScript目前没有对参数类型进行检查，实参与形参可能不相符，TypeScript用于解决这样的问题。
> 现在,JavaScript已经不仅仅是当年只用来验证表单的玩具，而成为一门真正的适用性广泛的语言来完成复杂度较高的应用。静态语言编译时校验的价值就在工程实践中凸显出来，TypeScript适时而起。--woshuode

### 可变参数**arguments**
[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 是类数组对象，以数字作为key。通过以下方法转换为真·数组：
主要是使用
```js
let args = Array.prototype.slice.call(arguments); 
or
let args = Array.from(arguments);
let args = [...arguments];
```
ES6的新方法
```js
            function containsAll(haystack, ...needles) {
                for (var needle of needles) {
                    if (haystack.indexOf(needle) === -1) {
                        return false;
                    }
                } return true;
            }
```

以下是不推荐使用的arguments方法：
>[callee()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
- `arguments.callee()`：当前执行的函数。匿名函数指代自身：递归**factorial**
- `arguments.caller()`：调用当前函数的函数（栈）**This feature is obsolete**。 

### 默认值
防止undefined或者null（未初始化）：

```js
a = b| "";
```

ES6的新方法：
```js
function animalSentence(animals2 = "tigers", animals3 = "bears") {
                return `Lions and ${animals2} and ${animals3}! Oh my!`;
            }
```
### 将对象作为实参
好处是不用记得顺序，坏处是要记得形参的名字

### 闭包Closure

>[闭包和私有变量](https://www.404forest.com/2015/03/21/JS%E8%87%AA%E6%88%91%E6%A2%B3%E7%90%86%EF%BC%9A%E9%97%AD%E5%8C%85%E3%80%81%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F/)
闭包？
继承？
原型？
**Lexical scoping 词法作用域**
函数定义时就决定了变量作用域，而不是在函数调用时。
参数和局部变量，嵌套的，全局变量
```js
var scope = "global scope";//全局变量
function checkscope() {
    var scope = "local scope";//局部变量
    function f() { return scope; }//在作用域中返回这个值
    return f;
}
checkscope()()//返回值是什么?
```

常常出现的错误在于，for循环中保存通过var声明的counter值，因为共享的是同一个counter，所以保存的是循环的最后一个值。
而使用块级作用域声明let或者使用闭包可以保存每一个counter值：
```js
function constfunc(v) {return function () {return v; } }
```

这里有两个`function`，两个`return`，ES 6 中的`let`尝试的块级作用域用具解决闭包的繁琐。

变量作用域
>作用域链《JavaScript权威指南》3.10.3
 JavaScript是基于词法作用域的语言：通过阅读包含变量定义在内的数行源码就能知道变量的作用域。全局变量在程序中始终都是有定义的。局部变量在声明它的函数体内以及其所嵌套的函数内始终是有定义的。
 如果将一个局部变量看做是自定义实现的对象的属性的话，那么可以换个角度来解读变量作用域。每一段JavaScript代码（全局代码或函数）都有一个与之关联的作用域链（scope chain）。这个作用域链是一个对象列表或者链表，这组对象定义了这段代码“作用域中”的变量。当JavaScript需要查找变量x的值的时候（这个过程称做“变量解析”（variable resolution）），它会从链中的第一个对象开始查找，如果这个对象有一个名为x的属性，则会直接使用这个属性的值，如果第一个对象中不存在名为x的属性，JavaScript会继续查找链上的下一个对象。如果第二个对象依然没有名为x的属性，则会继续查找下一个对象，以此类推。如果作用域链上没有任何一个对象含有属性x，那么就认为这段代码的作用域链上不存在x，并最终抛出一个引用错误（ReferenceError）异常。
 在JavaScript的最顶层代码中（也就是不包含在任何函数定义内的代码），作用域链由一个全局对象组成。在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象。在一个嵌套的函数体内，作用域链上至少有三个对象。理解对象链的创建规则是非常重要的。当定义一个函数时，它实际上保存一个作用域链。当调用这个函数时，它创建一个新的对象来存储它的局部变量，并将这个对象添加至保存的那个作用域链上，同时创建一个新的更长的表示函数调用作用域的“链”。对于嵌套函数来讲，事情变得更加有趣，每次调用外部函数时，内部函数又会重新定义一遍。因为每次调用外部函数的时候，作用域链都是不同的。内部函数在每次定义的时候都有微妙的差别——在每次调用外部函数时，内部函数的代码都是相同的，而且关联这段代码的作用域链也不相同。

## 泛函数

>这里借用数学的概念，简单来说，泛函就是定义域是一个函数，而值域是一个函数，推广开来， 泛函就是从任意的向量空间到标量的映射。 泛函也是一种“函数”，它的独立变量一般不是通常函数的“自变量”，而是通常函数本身。泛函是函数的函数。 泛函的英文是 Functional， 所以也可以把函数式编程(Functional Programming)称为泛函编程（对应在函数式编程中也把泛函称为高阶函数(higher-order function) (HOF)的）。

### 可调用对象
>《JavaScript权威指南》8.7.7

函数都可以被调用，但是被调用的不都是函数，也有可能是可调用对象。例如客户端方法：`Window.alert() `和 `Document.getElementById();`是为可调用的宿主对象。但是快被废弃了，所以没什么强调的必要。

### Function()构造函数
注意new Function(arg[,arg[,…]],body)构造函数的函数体代码的编译总是会在顶层函数执行，也就是全局作用域。

### call() 、apply() 和bind() 

[call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)和apply是用来**动态改变this。**（函数运行时的context，也就是上下文即this的指向）而[bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)是利用apply/call来返回一个函数，用来**永久实现**以上功能。（apply/call的使用是一次性调用的，而bind是返回一个新函数）
>The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
if (!Function.prototype.bind) {
    Function.prototype.bind = function (obj,/*,args*/) {
        var self = this, boundArgs = arguments;
        return function () {
            var args = [], i;
            for (i = 1; i < boundArgs.length; i++)args.push(boundArgs[i]);
            for (i = 0; i < arguments.length; i++)args.push(arguments[i]);
            return self.apply(o, args);
        }
    }
}

this.x = 9;
var module = {
    x: 81,
    getX: function () { return this.x; }
};

module.getX(); // 返回 81

var retrieveX = module.getX;
retrieveX(); // 返回 9, 在这种情况下，"this"指向全局作用域
// 创建一个新函数，将"this"绑定到module对象
// 新手可能会被全局的x变量和module里的属性x所迷惑
var boundGetX = retrieveX.bind({ x: 33 });
console.log(boundGetX()); // 返回 33

```

strict模式中 call() 和 apply()的第一个值是this，其他的情况null和undefined是全局对象，或者包装对象（wrapper object）。
	
[创建绑定函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，希望方法中的 this 是原来的对象。（比如在回调中传入这个方法。）如果不做特殊处理的话，一般会丢失原来的对象。从原来的函数和原来的对象创建一个绑定函数，则能很漂亮地解决这个问题：
                       
# Promise
[MDN Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)
[前端基础进阶（十三）：透彻掌握Promise的使用，读这篇就够了](http://www.jianshu.com/p/fe5f173276bd)
[在Node.js中使用promise摆脱回调金字塔](http://nya.io/Node-js/promise-in-nodejs-get-rid-of-callback-hell/)
[q](http://documentup.com/kriskowal/q/)
jQuery 主要是用 Deferred对象，与Promise A+标准不同。

```js
    var Q = require('q');
    //1.写一个读取文件的方法，将它封装成promise
    function fs_readFile(file, encoding) {
        var deferred = Q.defer();
        fs.readFile(file, encoding, function (err, data) {
            if (err) deferred.reject(err);
            else deferred.resolve(data);
        })
        return deferred.promise;
    }
    //2.写一个写入文件方法，将它封装成promise
    function fs_writeFile(data, file, encoding) {
        var deferred = Q.defer();
        fs.writeFile(file, data, encoding, function (err) {
            if (err) deferred.reject(err);
            else deferred.resolve('ok');
        })
        return deferred.promise;
    }
    //3.实现逻辑
    fs_readFile('./1.txt', 'utf-8')
        .then(function (data) {return fs_writeFile(data + 'test', './1.txt', 'utf-8')})
        .then(function(){return fs_readFile('./1.txt', 'utf-8')})
        .then(console.log,console.error);
```

1.	Promise是什么？有什么作用？适用于哪些场景？如何使用？原理是什么？


## 客户端存储技术
cookie和session的区别
提醒用户打开cookies的方式
[前端本地存储讲解](https://juejin.im/entry/5a41b7f4f265da43152427b6?utm_medium=fe&utm_source=weixinqun)

### cookies

### Web Storage
- sessionStorage
- localStorage 

getItem、setItem、removeItem、clear


### indexedDB
1. 检测浏览器是否支持
1. 创建DB
    1. 创建objectStore理解为=>table
    1. 创建objectStore 主键和索引
1. 事务
1. 游标
    1. 游标范围
---
- isOK(){return ("indexedDB" in window);}
- open (name,version)
    - upgradeneeded\onsuccess\onerro
- e.target.result
    - thisDB.objectStoreNames.contains()
    - thisDB.createObjectStore()
        - {"keyPath": ..., "autoIncrement": ...}
        - objectStore.createIndex(name,field,option{"unique":true})
- transcation = db.transcation([name],"readwrite\readonly")
    - objectStroe = transcation.objectStore(name)
    - objectStroe add get put delete openCursor index
        - cursor
        ```js
        cursor.onsuccess = function(e) {
        var res = e.target.result;
        if(res) {
        res.continue();
        }
        transaction.oncomplete = function() {
            ...
        }
        ```
        - range = [IDBKeyRange](https://www.w3.org/TR/IndexedDB/#range-construct) bound upperBound lowerBound ...
        - index
        ```
        range = IDBkeyRange.upperBound("7");
        cursor = objectStroe.index("age").cursor(range);
        ```
- index
- cursor
- range

### WebSQL

## Web浏览器中的JavaScript

同一个页面的JavaScript代码引用同一个windows对象，所以是共享的。
JavaScript的执行顺序分为两个阶段：

1.	载入文档内容
2.	事件驱动的异步

可能涉及到浏览器的渲染过程：[深入理解浏览器渲染原理](http://note.youdao.com/noteshare?id=96f2ec5cc1ca98721f5041d3849084ac&sub=0E95A3E2019C47F4976FA9F44E12850C)

HTML解析器遇到`<script>`时就会先解析script。
`<script>`有两个属性 [defer 和async](http://ued.ctrip.com/blog/script-defer-and-async.html)
相同点：

- 加载文件时不阻塞页面渲染
- 对于inline的script无效
- 使用这两个属性的脚本中不能调用`document.write`方法
- 有脚本的onload的事件回调

区别点：

- html的版本html4.0中定义了defer；html5.0中定义了async
- 执行时刻： 
    - 每一个async属性的脚本都在它下载结束之后立刻执行，同时会在window的load事件之前执行。所以就有可能出现脚本执行顺序被打乱的情况；
    - 每一个defer属性的脚本都是在页面解析完毕之后，按照原本的顺序执行，同时会在document的DOMContentLoaded之前执行。

```js
/**
 * 异步加载脚本
 * @param {String} url 
 */
function loadasyni(url){
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);//将script元素插入head标签中
}
```


## 事件
[preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)
如果事件可取消，则取消该事件，而不停止事件的进一步传播。
[stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
这个取消是传播，不取消事件

一般是插件需要



## BookmarkLet
[BookmarkLet](https://gitee.com/Tech_Query/iBookmarkLet) 有空可以来研究一下

## iframe
[js如何判断是否在iframe中及防止网页被别站用 iframe嵌套 (Load denied by X-Frame-Options)](http://justcoding.iteye.com/blog/2049127)
```js
      if (self != top) {
        alert('在iframe中');
      }
```
[JQuery操作iframe父页面与子页面的元素与方法](http://www.cnblogs.com/imteach/p/3798375.html)
# 跨域的问题
XHR的使用
B和C如何及解决跨域的问题
jQuery给出的快鱼解决方案
jsonp是什么？
show me the code 

## CORS跨域资源共享
[Access_control_CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

## Window
Location和Navigation
window对象和document的location对象引用的都是Location对象
document.URL是文档首次载入后保存的静态字符串不会随着hash变短改变；而Location会改变。=》URL是一个字符串，而location是一个对象，包含其他的属性。例如： `location.toString()===location.href //=>true`
按照普通的资源定位符protocol/host/hostname/port/pathname/search/hash

**未成标准的URLArguments获取函数**[URLSearchParams()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/URLSearchParams)


## DOM

#### 整体的思路：
- 选择
    - 选择方式
        - 几个get和querySelectorAll()、querySelector();
    - ParentNode\childNodes\firstChild\lastChild\nextSibling\previousSibling
- 上
- 中
- 下
- 改变
- Create
- Update
- Delete

- 理解树形结构
    1. Node对象
    1. NodeType
    1. var type = node.nodeType;

- 对应的数字编号
    - 1.Element
    - 2.Attribute
    - 3.Text

属性
有些特殊的，比如在JavaScript中是保留字`for——htmlFor`；`class——className`

# jQuery
[jquery.com](http://jquery.com/download/)

## 
[jQuery 源码系列（九）回溯机制](https://segmentfault.com/a/1190000008468456)

## 字符实体转码的方法
[Javascript：字符的编码转换和实体转换](https://segmentfault.com/q/1010000000146420)
[html 实体](http://www.w3school.com.cn/html/html_entities.asp)


```js
    //Html编码获取Html转义实体  
    function htmlEncode(value) {
        return $('<pre/>').text(value).html();
    }
    //Html解码获取Html实体  
    function htmlDecode(value) {
        return $('<pre/>').html(value).text();
    } 
```

## [插件](#jquery-plugin)

[ How to write jQuery plugin](http://i5ting.github.io/i5ting_ztree_toc/build/jquery.plugin.html)


## Events

### .on()

`jQuery().on( events [, selector ] [, data ], handler )`
> 事件命名空间 An event name can be qualified by event namespaces that simplify removing or triggering the event. 

```js
    .on("click.simple");
    .off("click.simple");
```

委托代理的原理是：事件注册在jQuery()对象上，当触发事件时，再通过selector处理。
涉及**享元模式**：只注册到一个对象上，提高了效率和页面性能，解决的动态添加元素导致不能触发的bug。

### .trigger()

submit\click

### .closest()
>Description: For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.

### .detach()
>Description: Remove the set of matched elements from the DOM.The .detach() method is the same as .remove(), except that .detach() keeps all jQuery data associated with the removed elements. This method is useful when removed elements are to be reinserted into the DOM at a later time.


### 自定义事件
发布-订阅者/观察者模式


在事件类型后添加一个感叹号`!`就可以触发没有命名空间的事件处理程序:
```JS
$("button").trigger("click!");
```


# 正则表达式
>[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
>[正则表达式30分钟入门教程](http://deerchao.net/tutorials/regex/regex.htm)
>[正则表达式的简单应用](http://www.yjs001.cn/web/regex/66051207346118647191.html)

***
如何匹配{abc：（a*c）=》c }？
***

## WHAT
Regular Expression，是用来查找特定字符串的规则的表达式。（这个表达式描述的是这个查找规则）
正则表达式是匹配模式，匹配字符||位置。（注意这个关系）

## WHY
与通配符相比，能灵活准确地查找出特定的字符串。
## HOW
>"我要找一个 **这样并这样** 的东西，吧啦吧啦..."

从三个方面描述匹配规则（**这样并这样**）：
- 位置
- 字符
- 数量

 ![如何描述](http://upload-images.jianshu.io/upload_images/2333173-3310351ef6934fb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[原图](http://naotu.baidu.com/file/1aecbf1ac0a61154a6ec8a5a9f62d1c7?token=0771c8b6cc1fc0c4)

**“在什么位置查找多少数量的什么字符。”**
使用正则表达式的语法来表达如是的语句，成矣。

## 1.正则表达式基本语法

#### 位置 
代码/语法|说明
---|---
\b|word start or end
^|string start
$|string end

### 零宽断言：

||零宽度正预测|零宽度负回顾|
|---|---|--
|先行断言|(?=exp)someword|(?!=exp)someword
||**(?=exp)someword**：查找exp，且后面是someword|**(?！=exp)someword**：查找exp，且后面**不**是someword
|后发断言|(?<=exp)someword|(?!<=exp)someword
||**(?<=exp)someword**：查找exp，且前面是someword|**(?！<=exp)someword**：查找exp，且前面**不**是someword
**怎么理解(?<=\s)\d+(?=\s)最后的(?=\s)?**

#### 字符
代码/语法| 说明
---|---
.|any character
\w|word num underline
\s|blank ：space
\d|digit ：any of the numbers from 0 to 9 
[]|collection
**注意：大写字母与此相反，如\D表示不是数字。**


#### 数量
代码/语法| 说明
---|---
* | 0 or more
+ | 1 or more
? | 0 or at most 1
{n}|n 
{n,m}|between n and m include
{n,}|n or more

### 其他

#### mate character元字符
元字符代表一类:\d=[0-9]；非元字符代表本身:\(\)=>()。
#### 分支条件 |

#### 分组节（）
(){1,3}：()里的部分重复1或3次。
#### 向后引用
使用()可以指定一个子表达式，按从左至右的顺序会自动编号，0号是整个Sting。
- 组号分配过程。
- ？这里的分组是否与JavaScript中的match方法有联系
>我们已经讨论了前两种语法。第三个(?:exp)不会改变正则表达式的处理方式，只是这样的组匹配的内容不会像前两种那样被捕获到某个组里面，也不会拥有组号。“我为什么会想要这样做？”——好问题，你觉得为什么呢？

误：两个文本的替换可以匹配具体的内容FP_&1_&2 ，其中&1和&2即可指定具体的替换位置

#### 反义
大写和^。

#### 贪婪与懒惰
尽可能匹配最长的String与竟可能匹配少String：
?的使用法。

在大量使用嵌套的字符中需要思量。（常见的便是HTML文件中的<>嵌套，常用的规则利用)
```
(?<=<(\w)>).*(?=<\/\1)
```

#### 转义
反斜杠\就是转义




# Network 网络
>《图解HTTP》

## HTTP
[超文本转移协议](http://www.cnblogs.com/gudi/p/6959715.html) /超文本传输协议

历史：1990-1993=>1994=>1995=>1996=>1997

### TCP/IP协议族
#### 分层
分层模式(Layered Architecture)、关注分离（separation of concerns）

- 应用层：HTTP、FTP、DNS=>HTTP请求是一份协议，是一份描述
- 传输层：TCP、UDP（用户数据报协议 user data protocol）=>根据描述对数据进行分割打上标记序号和端口号
- 网络层：IP=>主机到主机的通信服务：选路径（forwarding and routing）
- 数据链路、物理层：MAC地址=>

HTTP报文→|应用层|→TCP首部→|传输层|→IP数据包→|网络层|→网络架构...

#### 与HTTP关系密切的协议
- IP：各种数据包传送到对方
    - IP地址
    - MAC地址
- UDP：确保可靠性（HTTP无状态是什么意思？）（挖坑）
    - three-way handshaking保证传输
- DNS


## 状态码
- 403：客户端没有访问权限
- 404：客户端请求出现错误，请求的资源是不存在的
- 304：重定向，资源在某处有缓存，可以直接取用，不需要向原始地址发起请求。
- 500：服务器问题

## WebSocket
[使用 WebSocket 构建实时性应用](https://juejin.im/post/5a3cb04951882525822793f5?utm_medium=fe&utm_source=weixinqun)

# 数据结构和算法
### 数组

其他|---
---|---
Unshift=》|《=Push
《=Shift|Pop=》

后进先出Stack

Stack
Queen
Link


# Git
Git工作流是很重要的多人协作方式。主要是应用场景。

## 基本操作
[Git-Commands](https://aotu.io/notes/2015/11/17/Git-Commands/)
## GitHub

## Webhook
[github-webhook](https://developer.github.com/webhooks/)

[gitlab-webhook](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)

[使用Github的webhooks进行网站自动化部署](https://aotu.io/notes/2016/01/07/auto-deploy-website-by-webhooks-of-github/index.html)
(挖坑)
[leancloud/node-js-getting-started自动部署](https://github.com/leancloud/node-js-getting-started)

当使用Git工具完成Push操作后会触发一个事件，这个事件会传播到目标服务器，目标服务器会运行脚本完成部署相关的一些列操作（git pull）

## licence

>[需要知道的开源许可证](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
[各种开源协议介绍](http://www.open-open.com/solution/view/1319816219625)

![free_software_licenses.png](./media/free_software_licenses.png)

# OOP
MixIn混入[多重继承](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014318680104044a55f4a9dbf8452caf71e8dc68b75a18000)

使用组合的形式更加灵活，解耦。类似图书馆的分类方式，如果用标签来查找更容易。

# Design Patterns设计模式

[《JavaScript设计模式与开发实践》](https://www.amazon.cn/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5-%E6%9B%BE%E6%8E%A2/dp/B01F7IELCW/ref=sr_1_3?s=digital-text&ie=UTF8&qid=1507800630&sr=1-3&keywords=JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)

## 集合模式
[集合模式](http://www.cnblogs.com/huangpeng/archive/2011/06/28/2092591.html)

## 享元模式
享元模式用于**减少**应用程序所需要的对象数量。(jQuery中的`on()委托delegate`就是这个模式。)
一个对象，会变化的属性和不会变化的属性分开。享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。享元模式的目标是尽量减少共享对象的数量，关于如何划分内部状态和外部状态，下面的几条经验提供了一些指引。
尽量少创建对象，如果只是改动少量的属性就能够完成。例如地图上的ToolTip，在搜索的时候只需要改动坐标和显示信息。
对象池和时间委托。(挖坑)

## 发布-订阅者/观察者模式

发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。在JavaScript开发中，我们一般用事件模型来替代传统的发布—订阅模式。（挖坑）

鸭子模式，组合方式的继承，让Object有发布-订阅的职责

# MVC分型
# 结构的设计方式

- 职责单一
- 高内聚低耦合
- Shell作为唯一的入口。
- 调用其他模块的接口。

# TaskRunner
- 开发阶段
    - 刷新 BrowserSync
    - 预处理 Sass
    - 代码分析 ESLint
    - 持续测试

- 构建阶段
    - 预处理
    - 文件串联
    - 混缩 minification
    - 持续集成 Continuous Integration Jenkins



# NodeJS
## 模块
模块=》包=》包管理
- what
    jar听说过没有呀？高内聚低耦合，实现相关功能
- how
    - 单个文件(.js)
    - exports 和 require 


## npm
[npm 中文文档](https://www.npmjs.com.cn/)
[npm English](https://docs.npmjs.com/getting-started/what-is-npm)

```cmd
> npm install npm@latest -g
> npm install -g <package_name> --save-dev
> npm update <package_name>
> npm uninstall -g <package_name> --save-dev

```

[tree-cli:生成目录树](https://www.npmjs.com/package/tree-cli)
在windows下与CMD:tree冲突，就将tree.cmd rename=>ntree.cmd
所以命令就是`ntree`

```
tree -l 2 --ignore 'node_modules/, .git/, .gitignore' -o tree.txt
//-d: list directories only.
//-l: level max display depth of the directory tree.
//--ignore: ignores directory or file you specify - accepts arrays as comma-delimited strings: 'node_modules/, .git/, .gitignore'
```

### 服务器
[Node.js静态文件服务器实战](http://www.infoq.com/cn/news/2011/11/tyq-nodejs-static-file-server)
[node.js 一个简单的页面输出](http://www.cnblogs.com/rubylouvre/archive/2011/11/20/2255083.html)


### Express
- [Express上手](https://mp.weixin.qq.com/s/Q2AF4t-GMzwErxXp_WDtLw)
- 安装
```
npm install express --save
```
- 路由
```js
// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});
// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
## Yarn[官网](https://yarnpkg.com/zh-Hans/)
## cli对比 [migrating-from-npm](https://yarnpkg.com/zh-Hans/docs/migrating-from-npm)


### npm  scripts

简单来说，npm script学习了Gulp的优点。

>[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html) package.json文件中的`script`:
[how-to-use-npm-as-a-build-tool](http://bubkoo.com/2016/03/18/how-to-use-npm-as-a-build-tool/)
[⚓用npm执行脚本](http://leungwensen.github.io/blog/2016/running-scripts-with-npm.html)
[Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
[npm scripts 用法详解](https://segmentfault.com/a/1190000007684156)
[npm scripts](https://www.zybuluo.com/yangfch3/note/249328)
[使用Node.js创建命令行脚本工具](https://aotu.io/notes/2015/12/23/building-command-line-tools-with-node-js/)
`npm run <自定义命令>`

### Gulp
[使用npm scripts替代gulp](https://aotu.io/notes/2016/02/26/use-npm-script-instead-of-gulp/index.html)
[Gulp get start](http://www.gulpjs.com.cn/docs/getting-started/)
[Gulp入门教程](http://www.jianshu.com/p/fbf9871dc47a)
[Gulp v4编译Bootstrap-sass v3.3.7](http://www.jianshu.com/p/ac93605e4cf2)
[gulp-and-babel](http://macr.ae/article/gulp-and-babel.html)

### Webpack
#### What？
[官网](https://doc.webpack-china.org/concepts/)
[Webpack from First Principles](https://www.youtube.com/watch?v=WQue1AN93YU)

>webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。

#### Why？
总的来说就是为了工程化。
我对npm script、Gulp和webpack的理解：JavaScript jQuery 和framework。npm script是最基本的，后两者的工作都能做，但是没有后两者方便。但是正如JavaScript版本的不断演进，特性不断丰富，Gulp优秀的地方不断被原生内化，没有以前那么大的优势。而webpack给出的是一套针对现代前端应用完整的解决方案，体现的是约定优于配置：你不用这套方式当然是可以的，但是既然大家都用这个，就可以有效降低沟通成本，提高生产效率。

#### How？
四个核心概念
- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)

#### install
```
npm install webpack –g
```
[Loading-CSS](https://fakefish.github.io/react-webpack-cookbook/Loading-CSS.html)
#### Webpack Hot Module Replacement
[Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007?group_id=911546876953591808)

## I/O 的同步与异步
[fs.readFile](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_readfile_path_options_callback)
[node.js之fs模块](http://www.jianshu.com/p/5683c8a93511)
[node-watch](https://www.npmjs.com/package/node-watch)

## 作为后端服务的性能比较
并不是跟比Java或者C++比性能。主要的优势是“异步”：后端的主要资源不是耗费在Node上而是类似数据库操作之类的，Node负责接收和返回数据。




# zh-cmn-Hans

前端的路由
-   **uriAnchor** [HomePage](https://github.com/mmikowski/urianchor)

用来操作锚，作为页面状态的。同时还有缓存技术就是指indexDB，是Brower端的数据库。可以做类似Photoshop历史记录的功能。（暂时还没有实现redo和undo）。

## HTML5 history属性（挖坑）

## 使用HTTP和HTTPS的区别

## AMD和CMD
优劣或者各自的适用场景
当我们来说加载的时候来说一下浏览器的渲染机制，当我们输入网址之后到底发生了什么。
### RequireJS
[RequireJS](http://requirejs.org/)

[使用requirejs进行模块化开发](http://w3cboy.com/post/2014/09/%E4%BD%BF%E7%94%A8requirejs%E8%BF%9B%E8%A1%8C%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91/)

[RequireJS和AMD规范](http://javascript.ruanyifeng.com/tool/requirejs.html)

- 引入RequireJS
- data-main
    - require.config
    - 没有按照AMD规范的第三方库如何引入？
        - path:实际路径
        - shim:具体的依赖
    - 非JavaScript文件如何引入？

## HTML中value innerText innerHTML的区别
- innerHTML:浏览器会将inneHTML后面的内容作为html来解析。
- innerText:浏览器会将innerText后面的内容作为纯文本来解析。
- value:value是元素的属性值，而innerText和innerHTML是元素开始和结束标签之间的值

## Fetch API
使用[Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch):
---
## 函数节流和函数去抖Debouncer

## 使用原生方法实现拖拽


# Axios
[Axios](https://www.kancloud.cn/yunye/axios/234845)
[Axios实践](http://www.jianshu.com/p/df464b26ae58)

# Vue

- 跨组件数据流，
- 自定义事件通信
- 构建工具集成

## 相关资料
[教程](https://cn.vuejs.org/v2/guide/)
[API](https://cn.vuejs.org/v2/api/)
[Vue解析](https://github.com/answershuto/learnVue)

## 术语和概念
- [Model–view–viewmodel](https://en.wikipedia.org/wiki/Model–view–viewmodel)
- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application)

## 实例
- 所有的 Vue 组件都是 Vue 实例
- 只有当实例被创建时 data 中存在的属性是响应式的
    - 数据占位的方式：
    ```js
    data: {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
    }
    ```
- 除了 data 属性，Vue 实例暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来

#### 实例API
- el
- data
    - 可以使用【集合模式】例如message可能不止一个
- template
- watch
- methods
- computed


### 生命周期lifecycle
![lifecycle.png](./media/lifecycle.png)

[Vue源码浅析（二）-生命周期](https://www.cnblogs.com/libin-1/p/6845669.html)

### 模板语法
- Vue 不是基于字符串的模板引擎

### 计算属性和观察者
- 计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
- 同样的理由，如果只是针对值的计算，首选计算属性；但是如果某值发生变化引起其他的处理程序，比如drawer（举一个例子），还是考虑watch observer 观察者

### 条件渲染
- template作为wrap不会被渲染
- v-if、v-else v-else-if
- key确保单独渲染而不是复用
    - 有一个疑问（挖坑）如果在表单中使用，最终是会出现的DOM中？这里的显隐跟hidden或者visible
- 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。    

### 表单输入绑定
#### 值绑定
- v-bind:value
- v-bind:true-value
- v-bind:false-value

#### 修饰符
.lazy:input→change
.number
.trim


### 混合
mixin 这个概念在SASS中是提到过的，但是Python中应该也有。

```
// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

```
#### 选项合并
生命周期的钩子函数类似于.on()的作用，混合对象的钩子将在组件自身钩子之前调用 。而其他属性只会取组件的调用。


### 自定义指令
#### 注册
和components的策略是一样的。
注意钩子函数：
- bind
- inserted
- update
- componentUpdated
- unbind

#### other
[自定义 input 类型](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E7%9A%84%E8%A1%A8%E5%8D%95%E8%BE%93%E5%85%A5%E7%BB%84%E4%BB%B6)

#### 踩过的坑
组件需在使用前声明，并没有类似变量提升的机制。
- router
    1. children 使用的是数组 []
    2. children 在parent里要有`<router-view>`
```js
const router = new VueRouter({
    routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          path: ':id',
          name: 'newsitem',
          component: Newsitem,
        }
      ]
    }
  ]
});
```

### Vuex
[What is Vuex?](https://vuex.vuejs.org/zh-cn/intro.html)

[mindmap](http://naotu.baidu.com/file/38dd73233fc037ee15d4668494c26761)

[Vuex解析](https://zhuanlan.zhihu.com/p/30560457?utm_source=qq&utm_medium=social)

### 服务器
- static.js
[Node.js静态文件服务器实战](http://www.infoq.com/cn/news/2011/11/tyq-nodejs-static-file-server)
[node.js 一个简单的页面输出](http://www.cnblogs.com/rubylouvre/archive/2011/11/20/2255083.html)


# LeanCloud
[错误码详解](https://tab.leancloud.cn/docs/error_code.html#)


# Data visualization
[Data visualization](https://en.wikipedia.org/wiki/Data_visualization)
[ WebGL：打开网页看大片](https://segmentfault.com/a/1190000011633728)
[D3.js, Three.js and CSS 3D Transforms](http://www.delimited.io/blog/2014/3/14/d3js-threejs-and-css-3d-transforms)
[30-amazing-examples-webgl](http://www.creativebloq.com/3d/30-amazing-examples-webgl-action-6142954)

# MicroSite
## MicroSite是什么？
	是我的个人小站。准备做一些可以当作时间胶囊的东西。同时也算是可以记录自己这一些成长的过程吧。
    
[前端js保存页面为图片下载到本地的坑](http://caibaojian.com/h5-download.html#t11)整体的结构

## 路由
[History_API](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)
[Why History_API not Hash](https://segmentfault.com/q/1010000010340823)
[History_API](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

## 状态机
[使用coroutine实现状态机（2）](https://zhuanlan.zhihu.com/p/31566664)

# 开发工具
## VS Code
[Visual Studio Code 设置同步到github的插件介绍及使用方法(Settings Sync)](http://www.whidy.net/visual-studio-code-settings-sync-introduction.html)

## 软件工程

### 前端开发
### SPA
- 模块（组件）
- 视图（布局和渲染MVW）
- 导航（路由VueRouter）
- 模块组件通信(Vuex 发布订阅模式)
- 与服务端通信(ajax、axios)

### SASS
#### SASS

[Sass 基础教程](http://www.sasschina.com/guide/)

[SassScript](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

---
#### SASS的使用
安装
- gem install sass
使用
- sass test.scss test.css
- sass --style compressed test.sass test.css
    - nested：嵌套缩进的css代码，它是默认值。
    - expanded：没有缩进的、扩展的css代码。
    - compact：简洁格式的css代码。
    - compressed：压缩后的css代码。
- sass --watch test.scss:test.css

---
##### 0. Sass 文件后缀名

- sass 类似Python的风格 程序员亲近
- scss 类似CSS的风格亲 设计师亲近（产生less的源力）

##### 1. 使用变量
- `$`用于声明
- 计算
```css
    margin: (14px/2);
    top: 50px + 100px;
    right: $var * 10%;
```

##### 2. 嵌套CSS 规则
- 没什么好说的，sass目的就是要像写程序一样复用代码
- 父选择器的标识符`&`
    
    接伪类
    ```css
    article a {
        color: blue;
        &:hover { color: red }
    }
    /*编译后*/
    article a { color: blue }
    article a:hover { color: red }
    ```
    同时父选择器标识符还有另外一种用法，你可以在父选择器之前添加选择器。举例来说，当用户在使用IE浏览器时，你会通过JavaScript在<body>标签上添加一个ie的类名，为这种情况编写特殊的样式如下：
    ```css
    /*&位置*/
    #content aside {
                color: red;
                body.ie & { color: green }
    }

    /*编译后*/
    #content aside {color: red};
    body.ie #content aside { color: green }
    ```
- 群组选择器的嵌套
    - `,`
    
- 子组合选择器和同层组合选择器：>、+和~  [Selector](./jQuery.html)
    - " "是`ancestor descendant`中间的空格符号，同理 `>`、`+` 、`~`一样有效
    ```css
    article {
        ~ article { border-top: 1px dashed #ccc }
        > section { background: #eee }
        dl > {
            dt { color: #333 }
            dd { color: #555 }
        }
        nav + & { margin-top: 0 }
    }
    /*编译后*/
    article ~ article { border-top: 1px dashed #ccc }
    article > footer { background: #eee }
    article dl > dt { color: #333 }
    article dl > dd { color: #555 }
    nav + article { margin-top: 0 }
    ```
- 嵌套属性
    - `:`把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中
    ```css
    nav {
        border: {
        style: solid;
        width: 1px;
        color: #ccc;
        }
    }
    /*编译后*/
    nav {
        border-style: solid;
        border-width: 1px;
        border-color: #ccc;
    }
    ```
- 其他
    - @debugger @warn @error
    - @if @else
    - @for @each @while
    - @function @return 

    

##### 3. 导入SASS文件
- 使用SASS部分文件
    - `_`前缀
    - sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky";。
- 默认变量值
    - `!default`:反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值;
- 嵌套导入
    - `@import`

##### 4. 静默注释
- `/*comment*/`
- `//comment`

##### 5. 混合器Mixin
- `@mixin`
    - 如同JavaScript的`function`，[多重继承](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014318680104044a55f4a9dbf8452caf71e8dc68b75a18000)
    [组合模式](https://en.wikipedia.org/wiki/Composite_pattern)
    - `@include`
    ```css
    @mixin rounded-corners {
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    .notice {
        background-color: green;
        border: 2px solid #00aa00;
        @include rounded-corners;
    }

    //sass最终生成：
    .notice {
        background-color: green;
        border: 2px solid #00aa00;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    ```
    传参（在@include中使用`$hover:#color`的形式，同时保证参数数量匹配，而不用记住顺序）、默认参数(在@mixin中定义)
    ```css
    @mixin link-colors($normal, $hover:#color, $visited) {
        color: $normal;
        &:hover { color: $hover; }
        &:visited { color: $visited; }
    }

    a {
        @include link-colors(
            $normal: blue,
            $visited: green,
            $hover: red
        );
    }    
    ```

##### 6.使用选择器继承来精简CSS
- `@extend`继承选择器所选的全部样式



### stylus
[stylus 中文](http://www.zhangxinxu.com/jq/stylus/)



### JS程序流程可视化
[js2flowchart 一个根据JavaScript代码生成漂亮SVG流程图的工具](https://www.ctolib.com/topics-126117.html)
[demo](https://bogdan-lyashenko.github.io/js-code-to-svg-flowchart/docs/live-editor/index.html)


# Test测试
[如何对vue.js单文件（.vue）进行单元测试](https://www.zhihu.com/question/50566681/answer/267276949)

[聊一聊前端自动化测试（上）](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226799&idx=1&sn=7b0b7cdf36c768a49e5010a9afa1f14b&chksm=bd495b2b8a3ed23d8f9dd95dc2ef021ae4093e35b2a7b4434eac2cf5e3c8354c284eaff0c236&scene=21#wechat_redirect)

[聊一聊前端自动化测试（下）](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226799&idx=2&sn=53c4bc978fabb5cde0a5c83069de7220&chksm=bd495b2b8a3ed23de7a5b1e07fb80c83f9d5df07a260ea1ae1621531dc96ed1e2fda7b3b6599&scene=21#wechat_redirect)

# 待处理的部分

[待处理](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

[待处理](http://www.zhangxinxu.com/wordpress/2010/11/%E6%8B%9C%E6%8B%9C%E4%BA%86%E6%B5%AE%E5%8A%A8%E5%B8%83%E5%B1%80-%E5%9F%BA%E4%BA%8Edisplayinline-block%E7%9A%84%E5%88%97%E8%A1%A8%E5%B8%83%E5%B1%80/)

[待处理](http://blog.csdn.net/wmaoshu/article/details/52995912)

[待处理](http://blog.csdn.net/wmaoshu/article/details/53024145?locationNum=2&fps=1)

[待处理](http://www.html5jscss.com/10-ways-cross-domain.html)

[待处理](http://www.html5jscss.com/css-inline-block.html)
[前端本地文件操作与上传](http://www.10tiao.com/html/59/201712/2651553261/2.html)
[前端开发中，使用base64图片的弊端是什么](https://www.zhihu.com/question/31155574)
[自动精灵图工具](https://github.com/cupools/img-sprite)
[图片优化－ base64 vs 雪碧图](http://www.jianshu.com/p/8d41aab5fba1)