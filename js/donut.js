
var caffeine_0 = c3.generate({
    bindto: '#caf0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
        //onclick: function (d, i) { console.log("onclick", d, i); },
        //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

var caffeine_1 = c3.generate({
    bindto: '#caf1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
//        onclick: function (d, i) { console.log("onclick", d, i); },
//        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF8300'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

var calories_0 = c3.generate({
    bindto: '#cal0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
//        onclick: function (d, i) { console.log("onclick", d, i); },
//        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

var calories_1 = c3.generate({
    bindto: '#cal1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
//        onclick: function (d, i) { console.log("onclick", d, i); },
//        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF8300'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

var price_0 = c3.generate({
    bindto: '#price0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
//        onclick: function (d, i) { console.log("onclick", d, i); },
//        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

var price_1 = c3.generate({
    bindto: '#price1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
//        onclick: function (d, i) { console.log("onclick", d, i); },
//        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
    units: ' mg',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF8300'], // the three color levels for the percentage values.
        threshold: {
            unit: 'none', // percentage is default
//            max: 200, // 100 is default
//            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});


//    chart.load({
//        columns: [['data', 70]]
//    });



