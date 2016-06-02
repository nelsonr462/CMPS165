var width = 20
var height = 82


var caffeine_0 = c3.generate({
    bindto: '#caf0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF0000'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});

var caffeine_1 = c3.generate({
    bindto: '#caf1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF8300'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});

var calories_0 = c3.generate({
    bindto: '#cal0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF0000'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});

var calories_1 = c3.generate({
    bindto: '#cal1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF8300'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});

var price_0 = c3.generate({
    bindto: '#price0',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF0000'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});

var price_1 = c3.generate({
    bindto: '#price1',
    data: {
        columns: [
            ['data']
        ],
        type: 'gauge',
    },
    tooltip: {
        show: false
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return;
            },
            show: false
        },
        units: ' mg',
        width: width
    },
    color: {
        pattern: ['#FF8300'],
        threshold: {
            unit: 'none',
        }
    },
    size: {
        height: height
    }
});