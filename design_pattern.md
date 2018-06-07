
# Design Patterns设计模式

## 参考资料

[Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[《JavaScript设计模式与开发实践》](https://www.amazon.cn/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5-%E6%9B%BE%E6%8E%A2/dp/B01F7IELCW/ref=sr_1_3?s=digital-text&ie=UTF8&qid=1507800630&sr=1-3&keywords=JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)

[JavaScript 中常见设计模式整理](https://juejin.im/post/5afe6430518825428630bc4d)

[jQuery 中的设计模式](http://wiki.jikexueyuan.com/project/javascript-design-patterns/builder-pattern.html)

## 常用模式

### 单例模式

### 策略模式

### 代理模式

[ES6中的代理模式-----Proxy](https://juejin.im/post/5a5227ce6fb9a01c927e85c4)

### 迭代器模式

## 发布-订阅者/观察者模式

[观察者模式 vs 发布-订阅模式](https://juejin.im/post/5a14e9edf265da4312808d86)
发布—订阅模式和观察者模式这两者是有区别的。（挖坑）

[Observer](https://en.wikipedia.org/wiki/Observer_pattern)
>The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

> It is mainly used to implement distributed event handling systems, in "event driven" software. Most modern languages such as C# have built in "event" constructs which implement the observer pattern components, for easy programming and short code.

subject是一个对象，它自有一个ObserverList（依赖它）属性，当subject的任一状态改变，就调用observerList里observer的某一个方法。
通常就是就是变成语言里面的“事件系统”

```js
//观察者列表
function ObserverList(){
  this.observerList = [];
}
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
  return -1;
};
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};

//目标Subject
function Subject(){
  this.observers = new ObserverList();
}
Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

//观察者
function Observer(){
  this.update = function(){
    // ...
  };
}
```

**发布/订阅**
JavaScript开发中，一般用事件模型来替代传统的发布—订阅模式。jQuery中自定义事件就是很好的应用（on、off、trigger）。下面例子用组合方式的继承，让pubsub有发布、订阅的职责，但是具体给谁，怎么做并不明确，所以两个对象之间是解耦的。
命名空间，pull push （挖坑）

```js

var pubsub = {};
(function(myObject) {
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
    // An topic identifier
    var subUid = -1;
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function( topic, args ) {
        if ( !topics[topic] ) {
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func( topic, args );
        }
        return this;
    };
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));
```

### 命令模式

### 组合模式

### 模板方法模式

### 享元模式

享元模式用于**减少**应用程序所需要的对象数量。(jQuery中的`on()委托delegate`就是这个模式。)
一个对象，会变化的属性和不会变化的属性分开。享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。享元模式的目标是尽量减少共享对象的数量，关于如何划分内部状态和外部状态，下面的几条经验提供了一些指引。
尽量少创建对象，如果只是改动少量的属性就能够完成。例如地图上的ToolTip，在搜索的时候只需要改动坐标和显示信息。
对象池和时间委托。(挖坑)

### 职责链模式

### 中介者模式

### 装饰者模式

### 状态模式

### 适配者模式

### 集合模式
[集合模式](http://www.cnblogs.com/huangpeng/archive/2011/06/28/2092591.html)