/* const pattern = /(^(\w))|(-(\w))/g;
let result, match, replaceMatch;
let str = "n12345-ninjb-sword ninja2-ninjb-sword ninja3-ninjb-sword";
console.log(str.replace(pattern, function (...args) {
    console.log(args);
    // if (full && first) return "-" + String.prototype.toUpperCase.call(first);
    
}));
// console.log("match", match);
// for (let index = 0; index < match.length; index++) {
//     const element = match[index];
//     let pattern = /ninj(\w*)-/g;
//     result = pattern.exec(element.toString());
//     console.log("element[", element, "]\tresutl[", result, "]");
// }
 */
let pattern = /(?:ninja)-(trick)?-\1/;

console.log(pattern.exec('ninja--'));