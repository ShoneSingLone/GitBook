charts render after finished
chartObj[eleId] = echarts.init(ele); // 指定图表的配置项和数据
chartObj[eleId].on('finished', function () {
    debugger;
    console.log('dfa');
});