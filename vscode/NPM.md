# NPM

[fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

```bash
npm config get prefix
# 查询当前镜像地址：
npm get registry
# 设置淘宝镜像：
npm config set registry http://registry.npm.taobao.org/
# 设置官方npm镜像:
npm config set registry https://registry.npmjs.org/
# update
npm install npm -g

npm login
npm logout


```

- [scoped-packages](https://docs.npmjs.com/getting-started/scoped-packages)

```bash
npm publish
#scopename 可以是username或者自己添加Organizations
npm init --scope=scopename
#scope包默认是私有，收费如果是public就免费
npm publish --access public

# 24小时之内撤回发布的包
npm unpublish --force
```

[package 字段说明](https://www.cnblogs.com/bydzhangxiaowei/p/8729210.html)