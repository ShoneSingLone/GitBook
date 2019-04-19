/* addComponents */
(function ($) {
    /* addComponents */
    window.Vue.componentList = window.Vue.componentList || {};

    /**
     * @param {any} component 必须有name
     */
    window.Vue.addC = function (component) {
        if (!component.name) console.error(component, "conponent no name");
        window.Vue.componentList[component.name] = component;
    };

    /**
     * 
     * 
     * @param {any} componentNameArray 组件名字组成的数组
     * @param {any} baseUrl 这一组组件的路径前缀
     * @returns Promise
     */
    window.Vue.loadComponent = function (componentNameArray, baseUrl) {
        var componentsPromiseArray = componentNameArray.map(function (
            componentName
        ) {
            return new Promise(function (resolve, reject) {
                if (window.Vue.componentList[componentName]) {
                    /* 已被添加，不需要重复添加 */
                    resolve(window.Vue.componentList[componentName]);
                } else {
                    if (!baseUrl) {
                        return alert("未设置 loadComponent baseUrl");
                    }
                    var scriptID = "script" + componentName;
                    var $script = $("#" + scriptID);

                    if ($script.length === 0) {
                        var script = document.createElement("script");
                        script.id = scriptID;
                        script.src = [baseUrl, componentName, componentName].join("/") + ".js";
                        script.onload = function (event) {
                            $.ajax({
                                url: [baseUrl, componentName, componentName].join("/") + ".html ",
                                type: "GET",
                                dataType: "html",
                                success: function success(templateString) {
                                    window.Vue.componentList[
                                        componentName
                                    ].template = templateString;
                                    resolve(window.Vue.componentList[componentName]);
                                }
                            }).fail(function (error) {
                                console.warn(error);
                                reject(error);
                            });
                            script.onload = script.onerror = null;
                        };

                        script.onerror = function (event) {
                            console.warn(event);
                            script.onload = script.onerror = null;
                            reject(event);
                        };
                        document.getElementsByTagName("head")[0].appendChild(script);
                    }
                }
            });
        });
        return Promise.all(componentsPromiseArray);
    };
    /* addComponents */
    /* mixinList */
    window.Vue.mixinList = window.Vue.mixinList || {};
    window.Vue.mixinList.methodsGoTo = {
        methods: {
            goTo: function goTo(item) {
                if (item && item.gotoURL) {
                    var target = item.target || "_blank";
                    window.open(item.gotoURL, target);
                } else {
                    alert("正在开发中,敬请期待!");
                }
            }
        }
    };
    window.Vue.mixinList.filterDate = {
        filters: {
            dateFilter: function dateFilter(value) {
                if (!value) {
                    console.log("date missing");
                    return "";
                }

                var res = "";

                try {
                    res = dayjs(value).format("YYYY-MM-DD");
                } catch (error) {
                    console.log("news date error");
                }

                return res;
            }
            /* mixinList */
        }
    };
})(window.jQuery);

(function () {
    var vm = new Vue();
    window.$$loading = vm.$loading;
    window.oldAlert = window.alert;
    window.oldConfirm = window.confirm;
    window.confirm = vm.$confirm;
    window.alert = function (content, title) {
        if (title === void 0) {
            title = "";
        }

        vm.$alert(content, title, {
            showClose: false,
            confirmButtonText: "已知悉",
            callback: function callback(action) {}
        });
    };
})();
/* common */

(function () {
    if (window.isBrowserOutdated) {
        window.confirm("此浏览器已过时,请更换现代浏览器！", "提示", {
            confirmButtonText: "立即下载火狐浏览器",
            cancelButtonText: "取消",
            type: "warning",
            center: true
        }).then(function () {
            window.open('http://www.firefox.com.cn/download/', "_self");
        }).catch(function () {});
        throw new Error("浏览器过时");
    }
})()