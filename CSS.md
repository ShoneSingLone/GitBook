# CSS学习笔记

## 参考资料

[《CSS世界》]()

## 我所认识的CSS

如果以图灵完备作为标准，显然，HTML5 和CSS都不是一门编程语言。尽管没有如编程语言复杂，CSS学习起来也不轻松。这不轻松主要是体现在细枝末节太多且“不正交”，牵一发而动全身。在不明细节的情况下使用，随着项目的复杂度上升，会使开发和维护人员焦头烂额。所以，学习CSS我认为就是两个方面，一是平时积累，不在多而在吃透，遇到一个搞透一个；二是一定要有一套“最佳实践”，所谓条条大道通罗马，总有一条是最宽畅的：像Bootstrap这种流行的UI库，如何封装不正交的CSS属性成正交的类，这种整体思想很值得学习。

## 选择符

[30个你必须记住的CSS选择符](http://yanhaijing.com/css/2014/01/04/the-30-css-selectors-you-must-memorize)

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

border-radius

### 盒影音

## 布局定位

[CSS布局](http://zh.learnlayout.com/position.html)

[position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

盒子模型最主要的定位方式
position:static relative absolute fixed transform非none

与display：flex

[flexboxfroggy](http://flexboxfroggy.com)

