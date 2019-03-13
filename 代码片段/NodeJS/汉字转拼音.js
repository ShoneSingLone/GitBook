const simplePinyin = require("simple-pinyin").default;
const Tools = require("D:/GitHub/Puppeteer4Fun/utils/file.js");


let nameArray = [
    "汉字",
];
let getArray = (nameArray) => {
    return nameArray.map(name => {
        let res = simplePinyin(name, {
            pinyinOnly: false
        });
        let target = (res.reduce((n1, n2, i) => {
            return n1.substr(0, i) + n2.substr(0, 1);
        }));
        return target;
    });
}



Tools.writeFile(`D:/GitHub/Puppeteer4Fun/projects/getPages/files/${Date.now()}.js`, getArray(nameArray));