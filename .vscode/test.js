function typeOf(obj) {
    console.log(Object.prototype.toString.call(obj));
}

typeOf(null);
typeOf(undefined);
typeOf({});
typeOf([]);