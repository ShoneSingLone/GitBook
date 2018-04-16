# Web Fundamentals

## 参考

- [关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
- [重排重绘，看这一篇就够了](https://juejin.im/entry/582f16fca22b9d006b7afd89)
- [offsetParent](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent)
- [Js中 关于top、clientTop、scrollTop、offsetTop](http://www.cnblogs.com/seven_cheng/archive/2009/11/16/1603787.html)
---
- [阻塞渲染的 CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)

## What

Easy to say，就是需要知道浏览器拿着HTML、CSS、JavaScript干了啥，怎么干的，然后优化

## Why

用户只关心看到的部分 → 这一部分需要人为提高处理的优先级 → 就要知道浏览器处理HTML、CSS、JavaScript的流程节点——**关键渲染路径**

## How

### 基本
- 学会使用 Chrome 的performance（原为Timeline）做性能分析；基本原则先衡量在谈优化；
- DOM：
characters→Tokens→Nodes→DOM
特点是可以一行一行的加载，期间遇到link CSS script JavaScript 就发送request，拿到response进行CSSOM 和执行Script（可能因为defer 或者 async而不同）。所以理论上DOM完成之后，CSSOM应该已经完成。
- CSSOM
characters→Tokens→Nodes→CSSOM

DOM + CSSOM ==可见部分==> render Tree（display:none就是不可见，也就不需要render Tree )
 这时候涉及重排和重绘（layout paint）：一旦需要大小的变换，是肯定需要重排的；既然都重排了，没道理不重绘； 但是像改变背景颜色这种事不需要重排，只需要重绘的。（我似乎在“表述重排后一定重绘，重绘不一定因为重排”）

### 优化optimizing

- HTML size 尽量小
  - 压缩、除去注释、