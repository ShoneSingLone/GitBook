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

#### 基本功能manifest

配置应用的图标、名称等信息

```html
<link rel="manifest" href="path-to-manifest/manifest.json">
```

```js
{
    "short_name": "短名称",//short_name: {string} 应用短名称，用于主屏幕显示
    "name": "这是一个完整名称",//name: {string} 应用名称，用于安装横幅、启动画面显示
    "icon": [
        {
            "src": "icon.png",
            "type": "image/png",
            "sizes": "48x48"
        }
    ],
    "start_url": "index.html",
    "orientation ":"landscape-primary",
    "theme_color": "blue",
    "display": "standalone"
}
```
`scope`暂时不做细究

#### 改善应用体验

- [添加启动画面](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/improved-webapp-experience#添加启动画面)
- [设置显示类型](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/improved-webapp-experience#设置启动显示类型)
- [指定显示方向](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/improved-webapp-experience#指定页面显示方向)
 landscape风景、横向 portrait肖像、纵向
 横屏与竖屏涉及各个设备自身的判断逻辑。角度问题，需要单独考虑。
- [设置主题色](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/improved-webapp-experience#设置主题颜色)

#### [应用添加横幅](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/app-install-banners)

##### [引导用户添加应用至主屏幕](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/app-install-banners#引导用户添加应用至主屏幕)

判断用户是否已经安装，分支处理逻辑。
主动调动安装横幅。（将之前的事件保存，适时调用）

```js
userChoice
window.addEventListener('beforeinstallprompt', function (e) {
    // beforeinstallprompt event fired
    e.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === 'dismissed') {
            console.log('用户取消安装应用');
        }
        else {
            console.log('用户安装了应用');
        }
    });
});
```

##### [引导用户安装原生应用](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/app-install-banners#引导用户安装原生应用)

#### [消息推送介绍](https://lavas.baidu.com/pwa/engage-retain-users/how-push-works)

- 服务器
- 浏览器
- 推送服务

[JSON Web Tokens](https://jwt.io)

 弹出框外观，行为（点击）处理

#### [自动登录](https://lavas.baidu.com/pwa/automatic-login/introduction)

>浏览器会获取 type="password" 的输入框，以及这个输入框之上最近的一个 type="text" 的输入框内容，分别作为登录信息中的密码和账号进行存储，

```html
<form>
    <p>用户名1：<input type="text" name="username1"></p>
    <p>用户名2：<input type="text" name="username2"></p>
    <p>密码：<input type="password" name="password"></p>
    <p><input type="submit" value="提交"></p>
</form>
<!-- 浏览器记住密码之后，只会自动填充 username2 和 password 这两个字段。因此在开发的时候，需要注意这一点。 -->
```

[autofill](https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/)

由于传统 form 表单在数据提交时，会发生页面跳转，因此如果采用传统 form 表单的写法，需要监听表单提交事件并且阻止默认的提交行为，再改用 AJAX 进行表单提交：
[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)

```js
var form = document.getElementById('login-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 改用 AJAX 进行表单提交
    (挖坑)
    var formData = new FormData(form);

    // fetch
    fetch('/login/site/api', {
        method: 'POST',
        body: formData
    })
    .then(res => {
        if (res.status === 200) {
            return Promise.resolve(res.data);
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        // 后续操作
    })
    .catch(err => {
        // 错误处理
    })


    // jQuery

    $.ajax({
        url: '/login/site/api',
        data: {
            usr: formData.get('usr'),
            pwd: formData.get('pwd')
        },
        success: function (res) {
            // 后续操作
        },
        error: function (err) {
            // 错误操作
        }
    })
    });
```

#### [搜索优化](https://lavas.baidu.com/pwa/discovery/search-optimization)

- 确定网页的网址结构。
- 自适应设计是最受推崇的设计方法。
- 为独立的桌面版本/移动版本网站使用 rel='canonical' + rel='alternate'。
- 为动态提供独立桌面版本/移动版本 HTML 的单个网址使用 Vary HTTP 标头。
- 为您想仅限知晓网址的人访问的页面使用 noindex。
- 为您想保持私有状态的页面使用相关身份验证机制。

noindex robot.txt都是SEO方面的东西，可以了解一下

## Lavas

自动根据文件目录生成对应的路由

### 安装

```bash
npm install lavas -g
lavas init
npm install
lavas dev
```

### 目录结构

lavas-project
├── assets/
├── components/
├── core/
├── middlewares/
├── node_modules/
├── pages/
├── static/
├── store/
├── lavas.config.js
├── server.dev.js, server.prod.js
├── .babelrc, .editorconfig, .fecsignore, .fecsrc, .gitignore
└── LINCENSE, package.json, README.md

- /assets 里的内容会被 webpack 构建到生成目录的文件中，不再会单独以文件形式存在。因此 iconfont 放置在 /assets 中
- /static 里的内容会被原样复制到生成目录中，会以独立的文件形式存在。因此 PWA 用到的 manifest.json 和一系列图标等都放置在 /static 中。

都是静态文件，但是assets是如iconfont可以内联在HTML中，manifest.json是单独存在

