# jQuery

[jquery.com](http://jquery.com/download/)

## [jQuery 源码系列（九）回溯机制](https://segmentfault.com/a/1190000008468456)

## 字符实体转码的方法
[Javascript：字符的编码转换和实体转换](https://segmentfault.com/q/1010000000146420)
[html 实体](http://www.w3school.com.cn/html/html_entities.asp)

```js
  let msg = $('<textarea />').html(`<%= url %>`).text();
```


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

[How to write jQuery plugin](http://i5ting.github.io/i5ting_ztree_toc/build/jquery.plugin.html)

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


