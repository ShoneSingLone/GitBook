# 知识点汇总

实例题(根据盒模型解释边距重叠)

- BFC (边距重叠解决方案)

BFC的基本概念
BFC的原理
如何创建BFC
BFC的使用场景

- fix float所产生的塌陷/元素下坠
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
  
  作用

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

DOM事件类
基本概念:
 DOM事件的级别、0/2/3

- DOM事件模型 

捕获、冒泡 默认false 冒泡 从内到外；捕获是从外到内

- DOM事件流

描述DOM事件捕获的具体流程上
Event对象的常见应用一

- DOM事件类
  Event对象的常见应用
  event.preventDefault()event.stopPropagation()
  event.stoplmmediatePropagation()
  event.currentTarget 当前绑定的事件
  event.target
  委派代理 添加在祖先元素上，event.target获取呗单击的元素jQuery 委托实现

- 自定义事件

addEventListener
dispatchEvent
new Event(e) new CustomEvent(e,option):e.option

- HTTP协议类

HTTP协议的主要特点
HTTP报文的组成部分
HTTP方法
POST和GET的区别
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息GET参数通过URL传递，POST放在Request body中
- GET在浏览器回退时是无害的，而POST会再次提交请求GET产生的URL地址可以被收藏，而POST不可以
- GET请求会被浏览器主动缓存，而POST不会，除非手动设置
- GET请求只能进行url编码，而POST支持多种编码方式
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
- GET请求在URL中传送的参数是有长度限制的，而POST没有限制
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制

HTTP状态码
- 1xx:指示信息-表示请求已接收，继续处理，2xx:成功-表示请求已被成功接收
- 3xx:重定向-要完成请求必须进行更进一步的操作
- 4xx:客户端错误-请求有语法错误或请求无法实现
  - 429 Too many requests
  - 400 Invalid request
  - 404 Not Found 订阅过期，需要在服务端删除保存的推送订阅对象
  - 410 Gone 订阅失效，需要在服务端删除保存的推送订阅对象，并调用推送订阅对象的unsubscribe()方法
  - 413 Payload size too large
- 5xx:服务器错误-服务器未能实现合法的请求 - 
- 200 OK:  客户端请求成功
- 206 Partial Content:客户发送了一个带有Range头的GET请求，服务器完成了它 
- 301 Moved Permanently:所请求的页面已经转移至新的url
- 302 Found:所请求的页面已经临时转移新的url 
- 304 Not Modified:客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的 文档还可以继续使用

什么是持久连接

1.1版本 持久与非持久的区别
HTTP协议采用“请求-应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成之后立即断开连接(HTTP协议为无连接的协议)
当使用Keep-Alive模式(又称持久连接、连接重用)时，Keep-Alive 功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive 功能避免了建立或者重新建立连接

什么是管线化
应用在什么地方
  管线化机制通过持久连接完成，仅HTTP/1.1支持此技术
  只有GET和HEAD请求可以进行管线化，而POST则有所限制
  初次创建连接时不应启动管线机制，因为对方(服务器) 不一定支持HTTP/1.1版本的协议
  管线化不会影响响应到来的顺序，  如.上面的例子所示，响应返回的顺序并未改变
  HTTP/1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可
  由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如Chrome和Firefox默认并未开启管线
  化支持

原型链类
创建对象有几种方法

原型、构造函数、实例、原型链
instanceof的原理 ：检查右边的函数原型是否存在于操作符左边的对象的原型链上。
new运算符

通信类
- 什么是同源策略及限制
- 前后端如何通信
- 如何创建Ajax
- 跨域通信的几种方式

什么是同源策略及限制
同源策略限制从一个源加载的文档或脚本如何与来自另一一个源的资源进行交互。
这是一个用于隔离潜在恶意文件的关键的安全机制。
- Cookie、LocalStorage 和IndexDB无法读取
- DOM无法获得
- AJAX请求不能发送

什么是同源策略及限制
同源策略限制从一个源加载的文档或脚本如何与来自另一一个源的资源进行交互。
这是一个用于隔离潜在恶意文件的关键的安全机制。
- Cookie、LocalStorage 和IndexDB无法读取
- DOM无法获得
- AJAX请求不能发送

通信类
前后端如何通信

- Ajax
- WebSocket
- CORS(存疑，这是一种通信方式？)

如何创建Ajax

- XML HttpRequest对象的工作流程 （兼容性处理）
- 事件的触发条件
- 事件的触发顺序

跨域通信的几种方式

- JSONP
- Hash
- postMessage
- WebSocket
- CORS

源，什么是源？
限制是什么？
存储
DOM
Ajax


渲染机制类
重排Reflow
定义
DOM结构中的各个元素都有自己的盒子(模型)，这些都需要浏览器根据各种样式来计算并根据计算结果将元素
放到它该出现的位置，这个过程称之为reflow
触发Reflow
当你增加、删除、修改DOM结点时，会导致Reflow或Repaint
当你移动DOM的位置，或是搞个动画的时候
当你修改CSS样式的时候
当你Resize窗口的时候(移动端没有这个问题)，或是滚动的时候
当你修改网页的默认字体时

渲染机制类
重绘Repaint
定义
当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来后，浏览器于是便把这些元素都按照
各自的特性绘制了一遍，于是页面的内容出现了，这个过程称之为repaint
触发Repaint
DOM改幼
CSS改动

  渲染机制类什么是DOCTYPE及作用
  什么是DOCTYPE及作用
  DTD (document type definition，文档类型定义)是一系列的语法规则，用来定义XML或(X)HTML的文件类型。浏览器会使用它来判断文档类型，决定使 用何种协议来解析，以及切换浏览器模式
  DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证。如果文件代码不合法，那么浏览器解析时便会出一-些差错


渲染机制类什么是DOCTYPE及作用
HTML 5
  <!DOCT YPE html>
HTML 4.01 Strict  该DTD包含所有HTML元素和属性，但不包括展示性的和弃用的元素(比如font)
  < <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN""[图片]http://www.w3.org/TR/html4/strict.dtd">
HTML 4.01 Transitional该DTD包含所有HTML元素和属性，包括展示性的和弃用的元素(比如font)
  <!DOCTYPE HTML PUBL .IC "-//W3C//DTD HTML 4.01 Transitional//EN""[图片]http://www.w3.org/TR/html4/loose.dtd">

重绘Repaint
定义
当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来后，浏览器于是便把这些元素都按照
各自的特性绘制了- -遍，于是页面的内容出现了，这个过程称之为repaint
触发Repaint
DOM改动
CSS改动

JS运行机制

  理解JS的单线程的概念
  理解任务队列
  理解Event Loop
  理解哪些语句会放入异步任务队列
  理解语句放入异步任务队列的时机

提升页面性能的方法有哪些?
1、资源压缩合并，减少HTTP请求
2、非核心代码异步加载. 一异步 加载的方式一异步 加载的区别
3、利用浏览器缓存一缓存的分类  缓存的原理
4、使用CDN 
5、预解析DNS

前端工程师有很多性能优化的手段，包括 CDN、CSS Sprite、文件的合并压缩、异步加载、资源缓存等等。其实我们绝大部分情况是在干一件事情，那就是尽量降低一个页面的网络请求成本从而缩短页面加载资源的时间并降低用户可感知的延时。当然减少用户可感知的延时也不仅仅是在网络请求成本层面，还有浏览器渲染效率，代码质量等等。

```js
  <meta http-equiv= ="x-dns-prefetch-control" content: ="on">
  <link rel="dns-prefetch" href="//host_ name_ to_ [图片]prefetch.com">
```

页面性能类
异步加载
1、异步加载的方式
1)动态脚本加载
2) defer
3) async
2、异步加载的区别
1) defer是在HTML 解析完之后才会执行，如果是多个，按照加载的顺序依次执行
2) async是 在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关

1、缓存的分类
1)强缓存
Expires Expires:Thu, 21 Jan 2017 23:39:02 GMT
Cache-Control Cache-Control:max-age: =3600
2)协商缓存
L ast-Modified lf-Modified-Since
Last-Modified: Wed, 26 Jan 2017 00:35:11 GMT
Etag
lf-None-Match

1.HTML

- [面试题之HTML5新特性，语义化](https://www.cnblogs.com/sunshine21/p/7747407.html)

- 浏览器的标准模式和怪异模式
- xhtml和html的区别
- 使用data-的好处
- meta标签
- canvas
- HTML废弃的标签
- IE6 bug，和一些定位写法
- css js放置位置和原因
- 什么是渐进式渲染
- html模板语言
- meta viewport原理

2. CSS

2. 盒模型： 基本概念：标准+IE 区别 如何转换 （CSS如何设置）box-sizing JS 如何获取对应的宽和高

```js
  dom.style.width||height//获取的是内联样式
  dom.currentStyle.width||height//兼容性只有IE可以
  window.getComputedStyle(dom).width||height
  dom.getBoundingClientRect().width||heigh// 图片懒加载的时候可以用
  offsetWidth、height是什么呢？
```

《Ninja》P321 offsetHeight、offsetWidth包含元素的padding 同时可以有效确定一个元素的可见性；
  - 基本概念:标准模型+IE模型 content padding border 标准模型和IE模型区别 CSS如何设置这两种模型 JS如何设置获取盒模型对应的宽和高
  - 边距重叠原理
  - 什么是bfc，如何创建bfc？解决什么问题？
- CSS3新特性，伪类，伪元素，锚伪类
- CSS实现隐藏页面的方式
- 如何实现水平居中和垂直居中。
- 说说position，display
- 请解释*{box-sizing:border-box;}的作用，并说明使用它的好处
- 浮动元素引起的问题和解决办法？绝对定位和相对定位，元素浮动后的display值
- link和@import引入css的区别
- 解释一下css3的flexbox，以及适用场景
- inline和inline-block的区别
- 哪些是块级元素那些是行级元素，各有什么特点
- grid布局
- table布局的作用
- 实现两栏布局有哪些方法？
- css dpi
- 你知道attribute和property的区别么？
自定义的比如说设定data-url，这个data-url就是attribute，无法通过ele.dataUrl获取，但是getAttribute("data-url")就可以；按照HTML5标准，ele.dataset.url也行。而在CSS3中attr可获取attribute data-*的部分
[CSS/attr](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)
- css布局问题？css实现三列布局怎么做？如果中间是自适应又怎么做？
- 流式布局如何实现，响应式布局如何实现
- 移动端布局方案
- 实现三栏布局（圣杯布局，双飞翼布局，flex布局）
- 清除浮动的原理
- overflow:hidden有什么缺点？
- padding百分比是相对于父级宽度还是自身的宽度
- css3动画，transition和animation的区别，animation的属性，加速度，重力的模拟实现
- CSS 3 如何实现旋转图片（transform: rotate）
- sass less stylus
- 对移动端开发了解多少？（响应式设计、Zepto；@media、viewport、JavaScript 正则表达式判断平台。）
- CSS中的长度单位（px,pt,rem,em,ex,vw,vh,vh,vmin,vmax）
- CSS 选择器的优先级是怎样的？
- 雪碧图
- svg
- 媒体查询的原理是什么？
- CSS 的加载是异步的吗？表现在什么地方？
- 常遇到的浏览器兼容性问题有哪些？常用的hack的技巧
- 外边距合并 BFC
- 解释一下“::before”和“:after”中的双冒号和单冒号的区别-

3.JS
- js的基本类型有哪些？引用类型有哪些？null和undefined的区别。
- 如何判断一个变量是Array类型？如何判断一个变量是Number类型？（都不止一种）
- Object是引用类型嘛？引用类型和基本类型有什么区别？哪个是存在堆哪一个是存在栈上面的？
- JS常见的dom操作api 增删查改
- 解释一下事件冒泡和事件捕获
- 事件委托（手写例子），事件冒泡和捕获，如何阻止冒泡？如何组织默认事件？
- 对闭包的理解？什么时候构成闭包？闭包的实现方法？闭包的优缺点？
- this有哪些使用场景？跟C,Java中的this有什么区别？如何改变this的值？
- call，apply，bind
- 显示原型和隐式原型，手绘原型链，原型链是什么？为什么要有原型链
- 创建对象的多种方式
- 实现继承的多种方式和优缺点
- new 一个对象具体做了什么 
- 手写Ajax，XMLHttpRequest
- 变量提升 
- 举例说明一个匿名函数的典型用例
- 指出JS的宿主对象和原生对象的区别，为什么扩展JS内置对象不是好的做法？有哪些内置对象和内置函数？
- attribute和property的区别
- document load和document DOMContentLoaded两个事件的区别
- === 和 == , [] === [], undefined === undefined,[] == [], undefined == undefined
- typeof能够得到哪些值
- 什么是“use strict”,好处和坏处
- 函数的作用域是什么？js 的作用域有几种？
- JS如何实现重载和多态
- 常用的数组api，字符串api 哪些是返回原数组，哪些是返回修改后不改动原数组？
- 原生事件绑定（跨浏览器），dom0和dom2的区别？
- 给定一个元素获取它相对于视图窗口的坐标
- 如何实现图片滚动懒加载
[在vue中使用图片懒加载详细指南](https://segmentfault.com/a/1190000011672452)
[原生JS实现最简单的图片懒加载](https://segmentfault.com/a/1190000010744417)
- js 的字符串类型有哪些方法？ 正则表达式的函数怎么使用？
- 深拷贝
- 编写一个通用的事件监听函数
- web端cookie的设置和获取
- setTimeout和promise的执行顺序
- JavaScript 的事件流模型都有什么？
- navigator对象，location和history
- js的垃圾回收机制
- 内存泄漏的原因和场景
- DOM事件的绑定的几种方式
- DOM事件中target和currentTarget的区别
- typeof 和 instanceof 区别，instanceof原理
- js动画和css3动画比较
- JavaScript 倒计时（setTimeout）
- js处理异常
- js的设计模式知道那些
- 轮播图的实现，以及轮播图组件开发，轮播10000张图片过程
- websocket的工作原理和机制。
- 手指点击可以触控的屏幕时，是什么事件？ 什么是函数柯里化？以及说一下JS的API有哪些应用到了函数柯里化的实现？(函数柯里化一些了解，以及在函数式编程的应用，- 最后说了一下JS中bind函数和数组的reduce方法用到了函数柯里化。)
- JS代码调试-

4.ES6

- 谈一谈 promise
- 所有的 ES6 特性你都知道吗？如果遇到一个东西不知道是 ES6 还是 ES5, 你该怎么区分它
- es6的继承和es5的继承有什么区别
- promise封装ajax
- let const的优点
- es6 generator 是什么，async/await 实现原理
- ES6和node的commonjs模块化规范区别
- 箭头函数，以及它的this-

5.计算机网络

- HTTP协议头含有哪些重要的部分，HTTP状态码
- 网络url输入到输出怎么做？
- 性能优化为什么要减少 HTTP 访问次数？
- Http请求的过程与原理
- https（对是https）有几次握手和挥手？https的原理。
- http有几次挥手和握手？TLS的中文名？TLS在哪一网络层？
- TCP连接的特点，TCP连接如何保证安全可靠的？
- 为什么TCP连接需要三次握手，两次不可以吗，为什么
- 为什么tcp要三次握手四次挥手？
- tcp的三次握手和四次挥手画图（当场画写ack 和 seq的值）？
- tcp与udp的区别
- get和post的区别？什么情况下用到？
- http2 与http1 的区别？
- websocket
- 什么是tcp流，什么是http流
- http2的持久连接和管线化
- 域名解析时是tcp还是udp
- 域名发散和域名收敛
- Post一个file的时候file放在哪的？
- HTTP Response的Header里面都有些啥？-

6.浏览器相关

- 跨域，为什么JS会对跨域做出限制
- 前端安全：xss （cross site script），csrf…（Cross site request forgery）
CSRF防御措施
。Token验证
。Referer验证
。隐藏令牌
- 浏览器怎么加载页面的？script脚本阻塞有什么解决方法？defer和async的区别？
- 浏览器强缓存和协商缓存
- 浏览器的全局变量有哪些
- 浏览器同一时间能够从一个域名下载多少资源
- 按需加载，不同页面的元素判断标准
- web存储、cookies、localstroge等的使用和区别
- 浏览器的内核
- 如何实现缓存机制？（从200缓存，到cache到etag再到）
- 说一下200和304的理解和区别
- 什么是预加载、懒加载
- 一个 XMLHttpRequest 实例有多少种状态？
- dns解析原理，输入网址后如何查找服务器
- 服务器如何知道你？
- 浏览器渲染过程
- ie的某些兼容性问题
- session
- 拖拽实现
- 拆解url的各部分-

7.工程化

- 对webpack,gulp，grunt等有没有了解?对比。
- webpack的入口文件怎么配置，多个入口怎么分割。
- webpack的loader和plugins的区别
- gulp的具体使用。
- 前端工程化的理解、如何自己实现一个文件打包，比如一个JS文件里同时又ES5 和ES6写的代码，如何编译兼容他们-

8.模块化

- 对AMD,CMD,CommonJS有没有了解?
- 为什么要模块化？不用的时候和用RequireJs的时候代码大概怎么写？`
- 说说有哪些模块化的库，有了解过模块化的发展的历史吗？
- 分别说说同步和异步模块化的应用场景，说下AMD异步模块化实现的原理？
- 如何将项目里面的所有的require的模块语法换成import的ES6的语法？
- 使用模块化加载时，模块加载的顺序是怎样的，如果不知道，根据已有的知识，你觉得顺序应该是怎么样的？-

9.框架

- 使用过哪些框架？
- zepto 和 jquery 是什么关系，有什么联系么？
- jquery源码如何实现选择器的，为什么$取得的对象要设计成数组的形式，这样设计的目的是什么
- jquery如何绑定事件，有几种类型和区别
- 什么是MVVM，MVC，MVP
- Vue和Angular的双向数据绑定原理
- Vue，Angular组件间通信以及路由原理
- react和vue的生命周期
- react和vue的虚拟dom以及diff算法
- vue的observer，watcher，compile
- react和angular分别用在什么样的业务吗？性能方面和MVC层面上的区别
- jQuery对象和JS的Element有什么区别
- jQuery对象是怎么实现的
- jQuery除了它封装了一些方法外，还有什么值得我们去学习和使用的？
- jQuery的$(‘xxx’)做了什么事情
- 介绍一下bootstrap的栅格系统是如何实现的-

10.Nodejs
- 对nodejs有没有了解
- Express 和 koa 有什么关系，有什么区别？
- nodejs适合做什么样的业务？
- nodejs与php，java有什么区别
- Nodejs中的Stream和Buffer有什么区别？
- node的异步问题是如何解决的？
- node是如何实现高并发的？
- 说一下 Nodejs 的 event loop 的原理-

11.数据结构
- 基本数据结构：（数组、队列、链表、堆、二叉树、哈希表等等）
- 8种排序算法，原理，以及适用场景和复杂度
- 说出越多越好的费波拉切数列的实现方法？-

12.性能优化
- cdn的用法是什么？什么时候用到？
- 浏览器的页面优化？
- 如何优化 DOM 操作的性能
- 单页面应用有什么SEO方案？
- 单页面应用首屏显示比较慢，原因是什么？有什么解决方案？-

13.其他
- 正则表达式
- 前端渲染和后端渲染的优缺点
- 数据库的四大特性，什么是原子性，表的关系
- 你觉得前端体系应该是怎样的？
- 一个静态资源要上线，里面有各种资源依赖，你如何平稳上线
- 如果要你去实现一个前端模板引擎，你会怎么做
- 知道流媒体查询吗？
- SEO
- mysql 和 mongoDB 有什么区别？
- restful的method解释
- 数据库知识、操作系统知识
- click在ios上有300ms延迟，原因及如何解决
- 移动端的适配，rem+媒体查询/meta头设置
- 移动端的手势和事件；
- unicode，utf8，gbk编码的了解，乱码的解决-

14.开放性问题

- 你都看过什么书？最近在看什么书？
- 用过什么框架？有没有看过什么框架的代码？
- 有没有学过设计模式？
- 说一说观察者模式吧！能不能写出来？
- 你最大的优点是什么？那你最大的缺点呢？
- 你除了写博客还有什么输出？
- 现在你的领导给你了一份工作，要求你一个星期完成，但你看了需求以后估计需要3周才能完成，你该怎么办？
- 平时关注的前端技术
- 如何规划自己的职业生涯
- 项目过程中，有遇到什么问题吗？怎么解决的？
- 最近在研究哪方面的东西？
- 请介绍一项你最热爱、最擅长的专业领域，并且介绍的学习规划。
- 请介绍你参与的印象最深刻的一个项目，为什么？并且介绍你在项目中的角色和发挥的作用。-

15.HR面

- 你为什么要学习前端？
- 你平时的是怎么学习前端的？有什么输出？
- 你觉得自己最好的项目是什么？
- 身边比较佩服的人有什么值得你学习的？你为什么没有跟他们一样？
- 同事的什么问题会让你接受不了
- 压力最大的事情是什么？
- 身边的朋友通常对你的评价是什么
- 喜欢什么样的工作氛围
- 如何看待加班
- 有没有对象
- 意向城市
- 其他的offer
- 为什么要录取你？
- 周末都会干什么？
- 未来职业规划

END

vuex,vue登录校验
es6数组去重，
let const var区别，
vue页面传值的两种方式
vue设置代理，
本地启项目把localhost改成IP