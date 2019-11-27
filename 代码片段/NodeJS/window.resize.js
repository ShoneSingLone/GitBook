import debounce from "lodash.debounce";

window.addEventListener(
    "resize",
    debounce(() => {
        const width = 1920;
        let appWidth = document.getElementById("app").getBoundingClientRect().width;
        document.documentElement.style.fontSize =
            (appWidth / width) * 16 + "px";
    }, 150)
);

let trigger = () => {
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", false, false);
    window.dispatchEvent(evt);
}