# note

- [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
- [HTTP中GET与POST的区别](https://zhuanlan.zhihu.com/p/22536382)
  - GET在浏览器回退时是无害的，而POST会再次提交请求。
  - GET产生的URL地址可以被Bookmark，而POST不可以。
  - GET请求会被浏览器主动cache，而POST不会，除非手动设置。
  - GET请求只能进行url编码，而POST支持多种编码方式。
  - GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
  - GET请求在URL中传送的参数是有长度限制的，而POST么有。
  - 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
  - GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
  - GET参数通过URL传递，POST放在Request body中。
  对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
  而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
- [GET和POST有什么区别？及为什么网上的多数答案都是错的。](http://www.cnblogs.com/nankezhishi/archive/2012/06/09/getandpost.html)

curl -v www.baidu.com

跨域
[curl](https://curl.haxx.se/)
[fetch](https://fetch.spec.whatwg.org/)

允许方法GET HEAD POST

预请求

Content-Type
text/plain 原文本
multipart/form-data
application/x-www.form-urlencoded

Access-Control-Allow-Origin
Access-Control-Allow-Headers