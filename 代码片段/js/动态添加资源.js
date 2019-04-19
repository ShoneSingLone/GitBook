    window.Vue.loadComponent = function (componentNameArray) {
        return componentNameArray.map(function (componentName) {
            return new Promise(function (resolve, reject) {
                if (window.Vue.componentList[componentName]) {
                    /* 已被添加，不需要重复添加 */
                    resolve(window.Vue.componentList[componentName]);
                } else {
                    var baseUrl = window.Vue;
                    $.ajax({
                        url: baseURL + "modules/mark/" + componentName + ".html",
                        type: "GET",
                        success: function success(templateString) {
                            // templateString = JSON.stringify(templateString);
                            window.Vue.componentList[componentName] = component;
                            component.template = templateString;
                            /* css link */

                            var linkid = "style" + componentName;
                            var $link = $("#" + linkid);

                            if ($link.length === 0) {
                                var link = document.createElement("link");
                                link.rel = "stylesheet";
                                link.id = linkid;
                                link.href = baseUrl + "css/vue/" + componentName + ".css";

                                link.onload = function (event) {
                                    console.log("link loaded");
                                    link.onload = link.onerror = null;
                                };

                                link.onerror = function (event) {
                                    console.warn(event);
                                    link.onload = link.onerror = null;
                                };

                                document.getElementsByTagName("head")[0].appendChild(link);
                            }
                            /* add */

                            Vue.component(componentName, component);
                            resolve();
                        },
                        dataType: "html"
                    }).fail(function (error) {
                        debugger;
                        console.log(error);
                        reject(error);
                    });
                }
            });
        });
        return [];
    };