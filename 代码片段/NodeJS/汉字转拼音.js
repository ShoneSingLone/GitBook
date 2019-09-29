const simplePinyin = require("simple-pinyin").default;
const Tools = require("D:/GitHub/Puppeteer4Fun/utils/file.js");


let nameArray = ["身份证", "姓名", "性别", "出生日期", "民族", "户籍类型", "户籍所在地", "常住地", "最终学历", "头像"];

let getArray1 = (nameArray) => {
    return nameArray.map(name => {
        let res = simplePinyin(name, {
            pinyinOnly: false
        });
        let target = (res.reduce((n1, n2, i) => {
            return n1.substr(0, i) + n2.substr(0, 1);
        }));
        return target;
    });
};
let getArray2 = (nameArray) => {
    return nameArray.map(name => {
        let res = simplePinyin(name, {
            pinyinOnly: false
        });
        console.log(res);

        let target = (res.reduce((n1, n2, i) => {
            return n1.substr(0, i) + n2.substr(0, 1);
        }));
        return JSON.stringify({
            [target]: {
                label: name
            }
        });
    }).join(",");
};

Tools.writeFile(`./${Date.now()}.js`, getArray2(nameArray));