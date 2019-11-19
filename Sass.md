### SASS
#### SASS

[Sass 基础教程](http://www.sasschina.com/guide/)

[SassScript](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

[Sass基础——颜色函数](https://www.w3cplus.com/preprocessor/sass-color-function.html)
主要是darken函数对hover设计帮助很大。

---
#### SASS的使用
安装
- gem install sass
使用
- sass test.scss test.css
- sass --style compressed test.sass test.css
    - nested：嵌套缩进的css代码，它是默认值。
    - expanded：没有缩进的、扩展的css代码。
    - compact：简洁格式的css代码。
    - compressed：压缩后的css代码。
- sass --watch test.scss:test.css

---
##### 0. Sass 文件后缀名

- sass 类似Python的风格 程序员亲近
- scss 类似CSS的风格亲 设计师亲近（产生less的源力）

##### 1. 使用变量
- `$`用于声明
- 计算
```css
    margin: (14px/2);
    top: 50px + 100px;
    right: $var * 10%;
```

##### 2. 嵌套CSS 规则
- 没什么好说的，sass目的就是要像写程序一样复用代码
- 父选择器的标识符`&`
    
    接伪类
    ```css
    article a {
        color: blue;
        &:hover { color: red }
    }
    /*编译后*/
    article a { color: blue }
    article a:hover { color: red }
    ```
    同时父选择器标识符还有另外一种用法，你可以在父选择器之前添加选择器。举例来说，当用户在使用IE浏览器时，你会通过JavaScript在<body>标签上添加一个ie的类名，为这种情况编写特殊的样式如下：
    ```css
    /*&位置*/
    #content aside {
                color: red;
                body.ie & { color: green }
    }

    /*编译后*/
    #content aside {color: red};
    body.ie #content aside { color: green }
    ```
- 群组选择器的嵌套
    - `,`
    
- 子组合选择器和同层组合选择器：>、+和~  [Selector](./jQuery.html)
    - " "是`ancestor descendant`中间的空格符号，同理 `>`、`+` 、`~`一样有效
    ```css
    article {
        ~ article { border-top: 1px dashed #ccc }
        > section { background: #eee }
        dl > {
            dt { color: #333 }
            dd { color: #555 }
        }
        nav + & { margin-top: 0 }
    }
    /*编译后*/
    article ~ article { border-top: 1px dashed #ccc }
    article > footer { background: #eee }
    article dl > dt { color: #333 }
    article dl > dd { color: #555 }
    nav + article { margin-top: 0 }
    ```
- 嵌套属性
    - `:`把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中
    ```css
    nav {
        border: {
        style: solid;
        width: 1px;
        color: #ccc;
        }
    }
    /*编译后*/
    nav {
        border-style: solid;
        border-width: 1px;
        border-color: #ccc;
    }
    ```
- 其他
    - @debugger @warn @error
    - @if @else
    - @for @each @while
    - @function @return 

    

##### 3. 导入SASS文件
- 使用SASS部分文件
    - `_`前缀
    - sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky";。
- 默认变量值
    - `!default`:反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值;
- 嵌套导入
    - `@import`

##### 4. 静默注释
- `/*comment*/`
- `//comment`

##### 5. 混合器Mixin
- `@mixin`
    - 如同JavaScript的`function`，[多重继承](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014318680104044a55f4a9dbf8452caf71e8dc68b75a18000)
    [组合模式](https://en.wikipedia.org/wiki/Composite_pattern)
    - `@include`
    ```css
    @mixin rounded-corners {
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    .notice {
        background-color: green;
        border: 2px solid #00aa00;
        @include rounded-corners;
    }

    //sass最终生成：
    .notice {
        background-color: green;
        border: 2px solid #00aa00;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    ```
    传参（在@include中使用`$hover:#color`的形式，同时保证参数数量匹配，而不用记住顺序）、默认参数(在@mixin中定义)
    ```css
    @mixin link-colors($normal, $hover:#color, $visited) {
        color: $normal;
        &:hover { color: $hover; }
        &:visited { color: $visited; }
    }

    a {
        @include link-colors(
            $normal: blue,
            $visited: green,
            $hover: red
        );
    }    
    ```

##### 6.使用选择器继承来精简CSS
- `@extend`继承选择器所选的全部样式


