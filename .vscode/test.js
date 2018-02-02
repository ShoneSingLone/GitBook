function foo(a, b) {
    console.log("this.a", this.a);
    console.log(a, b);
}
foo();
var baz = foo.bind({a:"foo.bind"}, 2);
foo();
baz(3);