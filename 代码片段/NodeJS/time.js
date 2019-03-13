function getCurrentTiem() {
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
    setTimeout(getCurrentTiem, 1000);
}