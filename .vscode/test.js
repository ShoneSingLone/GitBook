function foo(params) {
    console.log(a);
}

function bar() {
    var a = 'bar';
    foo();
}
// var a = 'window';
bar(); //'window'
