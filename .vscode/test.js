var a = "foo!";
var b = Array.prototype.join.call(a, "hehe");
console.log(a);
var c = (b % 'a');
console.log(c === c);
console.log(Object.prototype.toString.call(c));