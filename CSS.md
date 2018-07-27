# CSS学习笔记

## 参考资料

1. [《CSS世界》](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
1. [30个你必须记住的CSS选择符](http://yanhaijing.com/css/2014/01/04/the-30-css-selectors-you-must-memorize)

## 我所认识的CSS

如果以图灵完备作为标准，显然，HTML5 和CSS都不是一门编程语言。尽管没有如编程语言复杂，CSS学习起来也不轻松。这不轻松主要是体现在细枝末节太多且“不正交”，牵一发而动全身。在不明细节的情况下使用，随着项目的复杂度上升，会使开发和维护人员焦头烂额。所以，学习CSS我认为就是两个方面，一是平时积累，不在多而在吃透，遇到一个搞透一个；二是一定要有一套“最佳实践”，所谓条条大道通罗马，总有一条是最宽畅的：像Bootstrap这种流行的UI库，如何封装不正交的CSS属性成正交的类，这种整体思想很值得学习。

## 选择符



width auto 的作用，默认值的影响。

- 通配符
- 元素选择器
- 类选择器
- ID
- 后代选择器

- 子元素选择器(IE8)
  - Parent > Children
- 相邻兄弟元素
  - Element + Sibling
- 通用兄弟
  - Element ~ Sibling
- 群组选择器(IE6)
  - Element,Element
- 属性选择器
  - Element[attribute]
  - Element[attribute="value"]
  - Element[attribute~="value"]
  - Element[attribute^="value"]
  - Element[attribute$="value"]
  - Element[attribute*="value"]
  - Element[attribute|="value"]
- 伪类选择器
  - 动态伪类
    - 锚点伪类
      - :link
      - :visited
    - 用户行为伪类
      - :hover
      - :active
      - :focus
    - 状态伪类
      - :enabled
      - :disabled
      - :checked
- CSS3结构类
  - Element:first-child
  - Element:last-child
  - Element:nth-child(n)**从0开始的n、odd奇数、even偶数**
  - Element:nth-last-child(n)**从最后一个子元素开始计数**
  - Element:nth-of-type(n)
  - Element:nth-last-of-type(n)
  - Element:first-of-type
  - Element:last-of-type
  - Element:only-child
  - Element:only-of-type
  - Element:empty
  - :not(selector)
- 伪元素
  - Element::first-line
  - Element::first-letter
  - Element::before
  - Element::after
  - Element::selection

## CSS 权重

style id class :: *
范围越小，权重越高；
后面的覆盖前面的。

## 边框与圆角

### 圆角

[border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)
顺序、值 、`/`

### 盒阴影

[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

- inset
- offset-x、 offset-y
- blur-radius 是否模糊，只能为正值
- spread-radius 
- color

### 边界图片

[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)

## 背景与渐变

### 背景

- background-clip:padding-box|border-box|content-box
- background-origin:padding-box|border-box|content-box
- background-size:length|percentage|cover|contain
- background-image:url()
- background:color position size repeat origin clip attachment image

### 渐变

- linear-gradient(direction,color-stop1,color-stop2,...)

```css
background: linear-gradient(cyan, transparent), 
            linear-gradient(225deg, magenta, transparent), 
            linear-gradient(45deg, yellow, transparent);
```

- [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient)(direction,color-stop1,color-stop2,...)

## Transform

- rotate( angle deg):正数顺时针
- translate(x,y)：移动
  - translateX()
  - translateY()
- scale(x,y):缩放
  - scaleX()
  - scaleY()
- [skew](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew):斜拉
  - skewX()
  - skewY()
- [matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)
  - [IE矩阵滤镜Matrix旋转与缩放及结合transform的拓展](https://www.zhangxinxu.com/wordpress/2011/03/ie矩阵滤镜matrix下旋转与缩放及结合transform的拓展/)
  - [理解CSS3 transform中的Matrix(矩阵)](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵/)

## Transition

- tansition-property:none|all|property
- tansition-duration:
- tansition-timing-function:ease|linear|ease-in|ease-out|ease-in-out|step-start|step-end|cubic-bezier()
  - linear :线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
  - ease :平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
  - ease-in :由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
  - ease-out :由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
  - ease-in-out :由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- tansition-delay

## 动画（animation）

- animation-name:keyframename|none;
- animation-duration:
- animation-timing-function:ease|linear|ease-in|ease-out|ease-in-out|step-start|step-end|cubic-bezier()
  - linear :线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
  - ease :平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
  - ease-in :由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
  - ease-out :由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
  - ease-in-out :由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- animation-delay:
- animation-iteration-count:infinite|(number);
- animation-direction:normal|reverse|alternate|alternate-reverse|initial|inherit;
- animation-fill-mode:none|forwards|backwards|both|initial|inherit;
- animation-play-state:paused|running

```css
@keyframes animationname{
  keyframes-selector{
    css-styles;
  }
}
```


## 布局定位

[CSS布局](http://zh.learnlayout.com/position.html)

[position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

盒子模型最主要的定位方式
position:static relative absolute fixed transform非none

与display：flex

[flexboxfroggy](http://flexboxfroggy.com)

