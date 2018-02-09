function Foo() { /* .. */ }
Foo.prototype = function adsf() { /* .. */ }; // 创建一个新原型对象
var a1 = new Foo();
console.log(a1.constructor.name);