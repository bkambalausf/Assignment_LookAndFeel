
function updateChart() {
    var sb = document.getElementById('chem');
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

    var data = [];
    for (let i = 0; i < 7; i++) {
        var ran = Math.floor(Math.random() * 100) + 1;
        data[i] = (min + ((max-min) * (ran/100.0)))
    }

    Chart.defaults.global.defaultFontColor = 'white';
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
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
                data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6]],
                label: "Demo Values",
                borderColor: "#3cba9f",
                fill: false
            }
            ]
        },
        options: {
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
        }
    });    
}

window.onload = function () {
    document.getElementById("chembtn").click();
};