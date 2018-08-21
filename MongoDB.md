# note

nosql

[manual](https://docs.mongodb.com/manual/)
table=>collection
row=>document
column=>filed

use db(有就用，没有就加)=>db
db.createCollection(name, options)

db[dbname].insert(document(object))
db[dbname].find().pretty()
db[dbname].findOne()
db[dbname].update(query,option)
db[dbname].updateOne()
db[dbname].remove(query,option)
db[dbname].removeOne(query,option)

key value


db
show dbs
use [dbname]
show tables
db.runoob.drop()


字段|	类型|	描述
--|--|--
capped|	布尔|	（可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 当该值为 true 时，必须指定 size 参数。
autoIndexId|	布尔|	（可选）如为 true，自动在 _id 字段创建索引。默认为 false。
size|	数值|	（可选）为固定集合指定一个最大值（以字节计）。 如果 capped 为 true，也需要指定该字段。
max|	数值|	（可选）指定固定集合中包含文档的最大数量。

show tables
show collections

db.[collectionName].drop()

db.[collectionName].insert(documnet)

db.[collectionName].find()/(select column from table)

## Linux 部署

`/etc/init.d/`

```bash

$ touch mongod
$ chmod 777 mongod
```

```config
#!/bin/bash
#chkconfig: 2345 80 90
#description: mongodb
start() {
 /usr/local/mongodb/bin/mongod --config /usr/local/mongodb/mongo
d.conf
}
 
stop() {
      /usr/local/mongodb/bin/mongod --config /usr/local/mongodb/
mongod.conf --shutdown
}
case "$1" in
  start)
 start
 ;;
 
stop)
 stop
 ;;
 
restart)
 stop
 start
 ;;
  *)
 echo
$"Usage: $0 {start|stop|restart}"
 exit 1

```

service mongod start/stop/restart
netstat -lanp | grep "27017"
mongod -f mongod.conf

改端口 sudo vi /etc/mongod.config

## 添加用户 增加安全性

[db.createUser](https://docs.mongodb.com/manual/reference/method/db.createUser/)

mongo url 

show dbs
use admin

- 创建用户，可选则指定数据库

db.createUser({user:"username",pwd:"pwd",roles:["root"]})

- 只管相关的数据库（collection）

use myproject
db.createUser({user:"username",pwd:"pwd",roles:[{role:"dbOwner",db:"myproject"]})

- 验证

db.auth("username","pwd")

## node middle ware

[mongoose](https://mongoosejs.com/docs/guide.html)
[Mongoose基础入门](https://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral)
[model 自动加s的问题](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-model)

就是一定要写collection，并且与数据库的名字保持一致就不会有问题了

```js
exports.goods = mongoose.model('', new Schema({
    "id": {
        type: String
    },
    "image": String,
    "name": String,
    "price": Number,
    "source": String
}), "goods")//看这里，看这里

let userContext = {
    openid,
    session_key,
    userInfo: { ...params.wxUserInfo.userInfo
    },
    encryptedData: params.wxUserInfo.encryptedData,
    signature: params.wxUserInfo.signature
}
let userOption = {
    upsert: true,
    overwrite: true
}
let isUpdate = await new Promise((resolve, reject) => {
    User.update({
        openid
    }, userContext, userOption, function (error, raw) {
        if (error) return reject(error);
        console.log('The raw response from Mongo was ', raw);
        return resolve(true)
    })
})
```