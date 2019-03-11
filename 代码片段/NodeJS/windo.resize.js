import debounce from "lodash.debounce";

window.addEventListener(
    "resize",
    debounce(() => {
        document.body.getBoundingClientRect()
    }, 150)
);