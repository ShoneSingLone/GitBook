# 渐进式网络应用Progressive Web App

## 参考

[lavas](https://lavas.baidu.com/)
基于 Vue.js 的 PWA 解决方案
帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题

[service-worker](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction)

## HTTPS

## Service Worker

### WHAT

>一个 HTML5 API ，主要用来做持久的离线缓存。

### WHY

 >javaScript 都是运行在一个单一主线程上的，在同一时间内只能做一件事情。随着 Web 业务不断复杂，我们逐渐在 js 中加了很多耗资源、耗时间的复杂运算过程，这些过程导致的性能问题在 WebApp 的复杂化过程中更加凸显出来。 Web Worker不给力，因为还是没有永久缓存。
 
 H5提出的**AppCache**没解决痛点。 故，提出了更优解决方案——Service Worker。
- 一个独立的 worker 线程，独立于当前网页进程，有自己独立的 worker context。
- 一旦被 install，就永远存在，除非被手动 unregister
- 用到的时候可以直接唤醒，不用的时候自动睡眠
- 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
- 离线内容开发者可控
- 能向客户端推送消息
- 不能直接操作 DOM
- 必须在 HTTPS 环境下才能工作
- 异步实现，内部大都是通过 Promise 实现

### HOW

- 判断能不能用，一般的兼容性还是必要；
- 如果能用就在window load之后注册；

```js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js', {scope: '/'})
            .then(function (registration) {

                // 注册成功
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function (err) {

                // 注册失败:(
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
```
Service Worker 是独立的，称为worker context，不过当然也无法操作DOM。[Cache API](https://developer.mozilla.org/zh-CN/docs/Web/API/Cache)注意一下。

```js
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  // Active worker won't be treated as activated until promise resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    
    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES['font']).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log(' Found response in cache:', response);

          return response;
        } 
      }).catch(function(error) {
        
        // Handles exceptions that arise from match() or fetch().
        console.error('  Error in fetch handler:', error);

        throw error;
      });
    })
  );
});
```

service worker install事件event有waitUntil事件
caches open db_name 返回 cache cache有add
```js
// 监听 service worker 的 install 事件
this.addEventListener('install', function (event) {
    // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
    event.waitUntil(
        // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
        caches.open('my-test-cache-v1').then(function (cache) {
            // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
            return cache.addAll([
                '/',
                '/index.html',
                '/main.css',
                '/main.js',
                '/image.jpg'
            ]);
        })
    );
});
```

[Application Cache is a Douchebag](https://alistapart.com/article/application-cache-is-a-douchebag)


## Lavas

### 安装

```js
npm install lavas -g
```