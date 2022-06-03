
function updateChart(val) {
    var sb = document.getElementById('chem'); var nIndex = sb.selectedIndex + val;
    if (nIndex < 0 || nIndex >= sb.length) {
        nIndex = 0;
    }
    sb.selectedIndex = nIndex;
    var min, max, units, title;
    switch (sb.selectedIndex) {
        case 0:
            min = 1.023
            max = 1.025
            units = "Specific Gravity"
            title = "Specific Gravity"
            break;
        case 1:
            min = 72
            max = 78
            units = "Temperature (F)"
            title = "Temperature"
            break;
        case 2:
            min = 8.1
            max = 8.4
            units = "pH"
            title = "pH"
            break;
        case 3:
            min = 8
            max = 12
            units = "Alkalinity (dKH)"
            title = "Alkalinity"
            break;
        case 4:
            min = 0.0
            max = 1.0
            units = "Nitrite (ppm)"
            title = "Nitrite"
            break;
        case 5:
            min = 0.0
            max = 0.2
            units = "Phosphate (ppm)"
            title = "Phosphate"
            break;
        case 6:
            min = 350
            max = 450
            units = "Calcium (ppm)"
            title = "Calcium"
            break;
        case 7:
            min = 1250
            max = 1350
            units = "Magnesium (ppm)"
            title = "Magnesium"
            break;
        case 8:
            min = 0.06
            max = 0.10
            units = "Iodine (ppm)"
            title = "Iodine"
            break;
        case 9:
            min = 4
            max = 14
            units = "Strontium (ppm)"
            title = "Strontium"
            break;
    }

    var d = [];
    for (let i = 0; i < 7; i++) {
        var ran = Math.floor(Math.random() * 100) + 1;
        d[i] = (min + ((max-min) * (ran/100.0)))
    }

    chart.data = {
        labels: ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM", "12AM"],
            datasets: [{
                data: [min, min, min, min, min, min, min],
                label: "Lower Limit",
                borderColor: "#3e95cd",
                fill: false,
            }, {
                data: [max, max, max, max, max, max, max],
                label: "Upper Limit",
                borderColor: "#c45850",
                fill: false
            }, {
                data: [d[0], d[1], d[2], d[3], d[4], d[5], d[6]],
                label: "Demo Values",
                borderColor: "#3cba9f",
                fill: false
            }
            ]
    };

    chart.options = {
        title: {
            display: true,
            text: title
        },
        responsive: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: units
                },
                ticks: {
                    Min: min,
                    Max: max
                }
            }]
        }
    };
    chart.update();

}

Chart.defaults.global.defaultFontColor = 'white';
var chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM", "12AM"],
        datasets: [{
            data: [1.023, 1.023, 1.023, 1.023, 1.023, 1.023, 1.023],
            label: "Lower Limit",
            borderColor: "#3e95cd",
            fill: false,
        }, {
            data: [1.025, 1.025, 1.025, 1.025, 1.025, 1.025, 1.025],
            label: "Upper Limit",
            borderColor: "#c45850",
            fill: false
        }, {
            data: [0, 0, 0, 0, 0, 0, 0],
            label: "Demo Values",
            borderColor: "#3cba9f",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Specific Gravity'
        },
        responsive: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Specific Gravity'
                },
                ticks: {
                    Min: 1.023,
                    Max: 1.025
                }
            }]
        }
    }
});

window.onload = function () {
    document.getElementById("chembtn").click();
};