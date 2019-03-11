// Convert function source code to a string in NodeJS/JavaScript
var foo = function (doc, meta) {
    console.log("convert success");
};
console.log(foo.toString());
var stringFunctionGetFoo = "return " + foo.toString();
var getFunctionFoo = new Function(stringFunctionGetFoo);
var bar = getFunctionFoo();
bar();