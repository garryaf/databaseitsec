export default {
  apexCharts: {
    simplePie: {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 280,
          type: 'pie',
        },
        dataLabels: {
          style: {
            colors: ['#fff']
          },
          dropShadow: {
            enabled: false,
          }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    },
    simpleDonut: {
      series: [44, 55, 41, 67, 61, 49, 58],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668', '#6b859e', '#2F33A7'],
        dataLabels: {
          style: {
            colors: ['#fff']
          },
          dropShadow: {
            enabled: false,
          }
        },
      },
    },
    monochromePie: {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ],
        theme: {
          monochrome: {
            enabled: true,
            color: '#4d53e0',
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          },
          dropShadow: {
            enabled: false,
          },
        },
        legend: {
          show: false
        }
      },
    },
    gradientDonut: {
      series: [20, 30, 40, 50, 60],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.35,
            // gradientToColors: undefined,
            inverseColors: false,
            // opacityFrom: 1,
            // opacityTo: 1,
            // stops: [0, 50, 100],
            // colorStops: []
          },
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668'],
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  recharts: {

  },
  echarts: {

  },
}
