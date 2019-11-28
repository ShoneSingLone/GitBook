vue init simulatedgreg/electron-vue my-project

- [Electron-Menus---Tutorial](https://coursetro.com/posts/code/119/Working-with-Electron-Menus---Tutorial)


```js
    open(link) {
      this.$electron.shell.openExternal(link);
    }
```