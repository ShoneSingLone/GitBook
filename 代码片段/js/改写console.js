console.log = (function (origin) {
    return function (...args) {
        origin.apply(console, args);
    }
})(console.log);