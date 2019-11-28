import dayjs from "dayjs";

const WEEKDAYS = "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_");

let thisVue;

function getCurrentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    thisVue.timeH = h;
    thisVue.timeM = m;
    try {
        thisVue.week = WEEKDAYS[dayjs().day()];
        thisVue.day = dayjs().format("YYYY年MM月DD日");
    } catch (error) {
        // console.log(error);
    }

    setTimeout(getCurrentTime, 1000);
}
getCurrentTime();

{
    timeH: "00",
    timeM: "00",
    week: "",
    day: ""
}