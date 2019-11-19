function isIDBOk() {
    return "indexedDB" in window
}

if (isIDBOk()) {
    console.log();
    let db = false;

    var openRequest = indexedDB.open("ora_idb1", 1);
    openRequest.onupgradeneeded = function (e) {
        /* 版本变化 */
        console.log("running onupgradeneeded");
        var thisDB = e.target.result;
        if (!thisDB.objectStoreNames.contains("firstOS")) {
            console.log("makng a new object store");
            thisDB.createObjectStore("firstOS");
        }
        if (!thisDB.objectStoreNames.contains("people")) {
            thisDB.createObjectStore("people", {
                keyPath: "email"
            });
        }
        if (!thisDB.objectStoreNames.contains("notes")) {
            /* 不指定主键自增 */
            thisDB.createObjectStore("notes", {
                autoIncrement: true
            });
        }
        /* 指定主键自增 */
        if (!thisDB.objectStoreNames.contains("logs")) {
            thisDB.createObjectStore("logs", {
                keyPath: "id",
                autoIncrement: true
            });
        }
    }
    openRequest.onsuccess = function (e) {
        console.log("running onsuccess");
        db = e.target.result;
        console.dir(db.objectStoreNames);
    }
    openRequest.onerror = function (e) {
        console.log("onerror!");
        console.dir(e);
    }
} else {
    //不支持？偷偷撇撇嘴
    alert("不支持indexedDB");
}