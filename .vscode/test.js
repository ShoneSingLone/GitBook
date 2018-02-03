function foo(a, b) {
    console.log("a:" + this.a + ", b:" + this.b);
}
// 把数组“展开”成参数
var a = "a",
    b = "b";
foo.apply(null, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3