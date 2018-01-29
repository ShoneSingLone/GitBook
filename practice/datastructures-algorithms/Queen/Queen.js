    //这里是属性和方法
    function Queue() {
        let items = [];
        //向队列尾部添加一个（或多个）新的项。
        this.enqueue = function (element) {
            items.push(element);
        }
        //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
        this.dequeue = function () {
            return items.shift();
        };

        //返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不 做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
        this.front = function () {
            return items[0];
        };

        //如果队列中不包含任何元素，返回true，否则返回false。
        this.isEmpty = function () {
            return 0 === items.length;
        };

        //返回队列包含的元素个数，与数组的length属性类似。
        this.size = function () {
            return items.length;
        };
        this.print = function () {
            return items.toString();
        };
    }

    let app = new Vue({
        el: '#app',
        data() {
            return {
                prints: []
            }
        },
        methods: {
            init: function () {

                function hotPotato(nameList, num) {
                    let queue = new Queue(); // {1}
                    for (let i = 0; i < nameList.length; i++) {
                        queue.enqueue(nameList[i]); // {2}
                    }
                    let eliminated = '';
                    while (queue.size() > 1) {
                        for (let i = 0; i < num; i++) {
                            queue.enqueue(queue.dequeue()); // {3}
                        }
                        eliminated = queue.dequeue(); // {4}
                        this.prints.push(eliminated + '在击鼓传花游戏中被淘汰。');
                    }
                    return queue.dequeue(); // {5}
                }


                let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
                let winner =
                    hotPotato(names, 7);
                this.prints.push('The winner is: ' + winner);
            }
        }
    });