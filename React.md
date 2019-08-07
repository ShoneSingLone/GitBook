# React 学习笔记

- [React](https://reactjs.org)
- [React](http://react.yubolun.com/)
- [react-blog](https://facebook.github.io/react/blog/all.html)
- [office tutorial](https://reactjs.org/tutorial/- tutorial.html#setup-option-1-write-code-in-the-browser)

## 基本认识

- React本身只是一个View层的lib。
- react 是 core
- react-dom是浏览器平台的render，可以换成其他的render对应相应的平台（VR、Native）
- state 数据驱动
- Flux架构redux
- [v-DOM](https://github.com/Matt-Esch/virtual-dom)

## **组件：封装、复用**

## React hooks

[React hooks都是数组，没那么神秘](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489824&idx=1&sn=3cef360e13a70bbaf839e5a83fa755b8&chksm=f951ac63ce26257597324c4cd04d51b96cf9333ce0f8a069f6ef90fa35a436007530ee1d32cd&scene=0&xtrack=1#rd)

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

## 搞事情

### 如果你不喜欢webpack全家桶

```html
    <!-- We will put our React component inside this div. -->
    <div id="like_button_container"></div>

    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- Load our React component. -->
    <script>
        'use strict';
        const e = React.createElement;

        class LikeSvg extends React.Component {
            constructor(...args) {
                super(...args);
                this.state = { liked: false };
            }

            render() {
                return e('svg', null,
                    (() => {
                        return e('rect', { x: 0, y: 0, width: 100, height: 10 });
                    })()
                );
            }
        }

        class LikeButton extends React.Component {
            constructor(...args) {
                super(...args);
                this.state = { liked: false };
            }

            render=()=>{
                if (this.state.liked) {
                    return e('h1', null, [1, 2, 3].map((_) => e(
                        'input', {
                            onClick: () => this.setState({ liked: false }),
                            type: 'text',
                            readOnly:true,
                            key: _,
                            className: 'class' + _,
                            value: _
                        })));
                }
                return e(
                    'button', { onClick: () => this.setState({ liked: true }) }, ['Like', e(LikeSvg,{key:1})]
                );
            }
        }

        const domContainer = document.querySelector('#like_button_container');
        ReactDOM.render(e(LikeButton), domContainer);

    </script>

```

全家桶
包管理器
打包
编译（转译）

1. npx create-react-app my-app

## JSX

- 根元素只有一个
- Handling Events **bind this**（所以,jsx比起createElement的优势在哪里？）
  - public filed: fn = ()=>{}
  - `<button onClick={(e) => this.handleClick(e)}> Click me </button>`
- key surround by array []children是数组的都要有key；在作用域内保持唯一性Unique
hper什么的是一个jsx的替代方案。如果不喜欢jsx，可以试一试。你会回来用jsx的。（括弧尴尬笑）
