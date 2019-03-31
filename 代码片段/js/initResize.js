initResize() {
    /* resize处理 */
    window.addEventListener(
        "resize",
        debounce(() => {
            const width = 1920;
            this.appWidth = document
                .getElementById("app")
                .getBoundingClientRect().width;
            document.documentElement.style.fontSize =
                (this.appWidth / width) * 16 + "px";
        }, 150)
    );
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", false, false);
    window.dispatchEvent(evt);
}