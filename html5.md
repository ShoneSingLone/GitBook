# HTML5

## 基础

enmmmm...
基础很重要，重要到无从说起，就就一个链接[HTML](https://developer.mozilla.org/zh-CN/docs/learn/HTML)
不清楚了就回头再看看呗...
HTML5新增了离线存储、更丰富的表单、js线程、socket、 标准扩展embed、css......
流媒体与多媒体引擎
Audio、Video、 Canvas、 webgl等等.....
搜索引擎和无障碍领域

## 语义标签



```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

```js
/* 结构 */
<article>//标记定义一篇文章
<header>//标记定义一个页面或一一个区域的头部
<nav>//标记定义导航链接
<section>//标记定义一个区域
<aside>//标记定义页面内容部分的侧边栏
<hgroup>//标记定义文件中一一个区的块相关信息
<figure>//标记定义一组媒体内容以及它们的标题
<figcaption>//标记定义figure元素的标题。
<footer>//标记定义一一个页面或一个区域的底部
<dialog>//标记定义一个对话框(会话框)类似微信
```

```js
/* 多媒体 */
<video>//标记定义一个视频
<audio>//标记定义音频内容
<source>// 标记定义媒体资源
<canvas>//标记定义图片
<embed>//标记定义外部的可交互的内容或插件,比如flash
```

audio/video : can't use `<audio/>` **must** have pair start and end
- src 
- **controls**:是否显示原生的控制界面
- reload
  - auto default 后台下载（实际跟浏览器有关）
  - metadata
  - none
- autoplay
- loop
- muted静音

```html
<video controls width="700" height="400">
<source src="beach.mp4" type="video/mp4">
<source src="beach.webm" type="video/webm">
<object id="flowplayer" width="700" height="400"
data="http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf"
type="application/x-shockwave-flash">
<param name="movie" value="beach.mp4">
<img src="beach_thumbnail.jpg" alt="A lazy day at the beach">
<p>Your browser does not support HTML5 video or Flash.</p>
<p>You can download the video in <a href="beach.mp4">MP4 H.264</a>
or <a href="beach.webm">WebM</a> format.</p>
</object>
</video>
```

以上代码介绍了`video`、 `source`、 `object`三个标签相互之间的嵌套关系。

```js
let audio = document.createElement('audio');
audio.src = "src.mp3";
// or
audio = new Audio("src.mp3");

audio.pause();
audio.currentTime = 0;
audio.play();

```

```js
let vedio = document.createElement('vedio');
vedio.src = "src.mp4";
// or
vedio = new Vedio("src.mp4");

vedio.pause();
vedio.currentTime = 0;
vedio.play();
//ontimeupdate 事件在视频/音频（audio/video）当前的播放位置发送改变时触发。
vedio.ontimeupdate = function progressUpdate(e){...}

```

```js
/* 状态标签 */
<meter>//状态标签(实时状态显示:气压、气温)
<progress>//状态标签(任务过程:安装、加载)

/* 列表标签 */
<datalist>//为input标记定义-个下拉列表,配合option 
<details>//标记定义一个元素的详细内容, 配合summary
<menu>//命令列表(目前所有主流浏览器都不支持)
<menuitem>//menu命令列表标签(只有FireFox8.0+支持)
<command>//menu标记定义一个命令按钮(只有IE9支持)


<ruby>// 标记定义注释或音标
<rp>// 告诉那些不支持ruby元素的浏览器如何去显示
<rtt>// 标记定义对ruby的注释内容文本

<mark>// 标记定义有标记的文本(黄色选中状态)
<output>//标记定义一-些输出类型,计算表单结果配合oninput事件
<keygen>//标记定义表单里一个生成的键值(加密信息传送)
<time >// 标记定义一个日期/时间,目前所有主流浏览器都不支持
```

### 删除的标签

```js
/* 纯表现的元素 */
- basefont
- big
- center
- font
- s
- strike
- tt
- u

/* 对可用性产生负面影响的元素 */
- frame
- frameset
- noframes

/* 产生混淆的元素 */
- acronym
- applet
- isindex
- dir
```

### 重定义标签

显示不变,只是表达的含义进行了重新定义的标签

```js
<b>//代表内联文本,通常是斜体,没有传递表示重要的意思
<dd>//可以同details与figure- -同使用,汇总细节，dialog也可用
<hr>//重新定义用户界面的菜单,配合commond或者menuitem使用
<small>//表示重要性而不是强调符号
<hr>//主题结束
<menu>//
<strong>//强调
```

# HTML
[MDN-Web/HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

[MDN-Web/API](https://developer.mozilla.org/en-US/docs/web/api)

[MDN-Web/API-zh-CN](https://developer.mozilla.org/zh-CN/docs/Web/API)

[300毫秒延迟](https://thx.github.io/mobile/300ms-click-delay#%E5%BD%93%E5%89%8D%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E5%BB%B6%E8%BF%9F)

[移动端Web页面适配方案](https://funteas.com/topic/5a4d80ec1f635ce136730e10)

[理解HTML5的语义](https://www.adobe.com/devnet/archive/dreamweaver/articles/understanding-html5-semantics.html)

[mobie-first](https://abookapart.com/products/mobile-first)

[Making a Case for Mobile First Designs](https://www.sitepoint.com/making-case-mobile-first-designs/)

## Request
### referrerPolicy

## Web_Components

[Web_Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [自定义元素](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Custom_Elements)
- [HTML模板](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)
- [影子DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Shadow_DOM)
    - 
    >[Shadow-DOM](https://aotu.io/notes/2016/06/24/Shadow-DOM/index.html)
- [HTML导入](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/HTML_Imports)

[从HTML Components的衰落看Web Components的危机](https://github.com/xufei/blog/issues/3)

## canvas

[将图片转换base64格式，data:image/png;base64是什么？](http://blog.csdn.net/webxiaoma/article/details/70053444)

[Css中路径data:image/png;base64的用法详解](http://www.aimks.com/css-path-data-image-png-usage-base64.html)

[瞎折腾：把JS,CSS任意文本文件加密成一张图片](https://juejin.im/entry/5a41b3d66fb9a045154421cb?utm_medium=fe&utm_source=weixinqun)



## SVG
[SVG](https://aotu.io/notes/2015/11/20/svg-I-know/)