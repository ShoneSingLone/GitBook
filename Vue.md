# Vue

- 跨组件数据流，
- 自定义事件通信
- 构建工具集成

## 相关资料

[教程](https://cn.vuejs.org/v2/guide/)
[API](https://cn.vuejs.org/v2/api/)
[Vue解析](https://github.com/answershuto/learnVue)
[揭秘组件库一二事](https://zhuanlan.zhihu.com/p/34654371)
[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
[Vue技术内幕](http://hcysun.me/vue-design/)
[尤雨溪](https://weibo.com/arttechdesign?profile_ftype=1&is_all=1#_0)
[@vue/cli 3.0](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
[@vue/cli 3.0 配置参考](https://cli.vuejs.org/zh/config/#baseurl)

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

$mount()
render

### 实例API

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
实际上就是merge按顺序执行

```js
// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})
```

#### 选项合并

生命周期的钩子函数类似于.on()的作用，混合对象的钩子将在组件自身钩子之前调用 。而其他属性只会取组件的调用。

## 组件

### 插槽

内容分发。
[单个插槽](https://cn.vuejs.org/v2/guide/components.html#%E5%8D%95%E4%B8%AA%E6%8F%92%E6%A7%BD)

定义一个APP-layout有几个固定的大模块 但是现在不清楚具体有什么就留出几个插口 后面再将具体的组件接过来。
[具名插槽](https://cn.vuejs.org/v2/guide/components.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

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
    2. **children 在parent里要有`<router-view>`**

```js
// name: news.newsitem  是NewsItem在父组件News中的router-view中显隐
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

## Vuex

### What？

Vuex 是状态管理器，用来管理应用的状态。

[JavaScript与有限状态机](http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html)
[What is Vuex?](https://vuex.vuejs.org/zh-cn/intro.html)
[使用coroutine实现状态机（2）](https://zhuanlan.zhihu.com/p/31566664)

### Why

就是为了方便，谁用谁知道。
(如果不知道为什么要用就不要用了。实现类似的功能几乎都要涉及状态机订阅观察者模式啥的。最简单的就是理解成shell的bus)

### how？

[完全掌握 Vuex 图文视频教程](https://juejin.im/entry/59191b6b0ce4630069f6a3ad#5)
[Vuex 通俗版教程](https://yeaseonzhang.github.io/2017/03/16/Vuex-通俗版/)

- state
  - 就是store的data，放状态（数据）的
- getter
  - 一般的Vue对象都有computed或者filter，这里的就是对state进行统一的清洗（？可以用这个术语？数据仓库里的）集中的处理,至于各组件要干嘛，可以用各自的computed处理
- mutation
  - 唯一推荐修改state的方法，必须是同步
- action
  - 与mutation类似，可以是异步

view → action → mutation → state → view → ...

形成闭环，单向清晰、可追溯（可以看到时哪一个组件触发的状态改变，方便维护）

组件取数据的方式可以是computed里的mapState、mapGetters

```js
import { mapState, mapGetters } form 'vuex';
export default {
    // ...
    computed: {
        mapState({ ... }),
        mapGetter({ ... })
    }
}
```
action比较高级可以异步，调mutation具体做事
methods → { dispatch → { action → { commit → (mutation) 
                                    }
                        }
        }


```js
import { mapActions ,mapMutations} from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations({
    }),
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```
- module


[Vuex解析](https://zhuanlan.zhihu.com/p/30560457?utm_source=qq&utm_medium=social)




[mindmap](http://naotu.baidu.com/file/38dd73233fc037ee15d4668494c26761)


[使用Vue.js和Vuex实现购物车场景](http://xlbd.me/vue-vuex-shopping-cart/)
[使用Vue.js和Vuex实现购物车场景 demo-source](https://github.com/xiaoluoboding/vue-demo-collection/tree/master/shopping-cart)
[基于 vue-cli + iView 的 Vue js 后台管理系统，简洁易扩展](https://www.liruan.cn/docs/iview.html)

[Vue 页面切换效果之 BubbleTransition](https://juejin.im/entry/5ac877ae6fb9a028b617c33e)

## SSR

[服务器端渲染 vs 预渲染(SSR vs Prerendering)](https://ssr.vuejs.org/zh/#服务器端渲染-vs-预渲染-ssr-vs-prerendering)

## Vue router

### 自己实现锚点定位

[单页面官网-平滑过渡到指的锚点](https://segmentfault.com/a/1190000010854244)
[scrollTo](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

本来可以使用history模式，如果不用，也可以尝试下面的方法

```js
// 设置滚动行为改为平滑的滚动
window.scrollTo({ 
    top: 1000, 
    behavior: "smooth" 
});
......
methods: {
    goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop
    }
}
```
3.0出来了
npm install -g @vue/cli


https://github.com/browserslist/browserslist

- [VUE中使用lib-flexible](https://blog.csdn.net/qq_22844483/article/details/79730604)
- [移动端适配](https://www.w3cplus.com/search/node/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D)

- refs 在mounted可以访问如果子组件没有mounted则无法访问