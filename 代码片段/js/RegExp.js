const html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
// const results = html.match(/<(\/?)(\w+)([^>]*?)>/);
let regex = new RegExp(`<div(.*)</div>`, "igm");
console.log(regex)
const results = regex.exec(html);

console.log("results", results);
console.log(results[0] === "<div class='test'>", "The entire match.");
console.log(results[1] === "", "The (missing) slash.");
console.log(results[2] === "div", "The tag name.");
console.log(results[3] === " class='test'", "The attributes.");
const all = html.match(/<(\/?)(\w+)([^>]*?)>/g);
console.log(all[0] === "<div class='test'>", "Opening div tag.");
console.log(all[1] === "<b>", "Opening b tag.");
console.log(all[2] === "</b>", "Closing b tag.");
console.log(all[3] === "<i>", "Opening i tag.");
console.log(all[4] === "</i>", "Closing i tag.");
console.log(all[5] === "</div>", "Closing div tag.");