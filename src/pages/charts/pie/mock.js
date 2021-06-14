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
            inverseColors: false,
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
    simplePie: {
      data1: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ],
    },
    twoLevelPie: {
      data1: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ],
      data2: [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ],
    },
    halfCircle: {
      data: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ],
    },
    radialBar: {
      data: [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#2F33A7',
        },
        {
          name: '25-29',
          uv: 18.69,
          pv: 4567,
          fill: '#4d53e0',
        },
        {
          name: '30-34',
          uv: 20.69,
          pv: 1398,
          fill: '#00A5FF',
        },
        {
          name: '35-39',
          uv: 22.22,
          pv: 9800,
          fill: '#43BC13',
        },
        {
          name: '40-49',
          uv: 24.63,
          pv: 3908,
          fill: '#FF5668',
        },
        {
          name: '50+',
          uv: 26.63,
          pv: 4800,
          fill: '#FFA100',
        },
        {
          name: 'unknown',
          uv: 28.67,
          pv: 4800,
          fill: '#FFC405',
        },
      ],
    }
  },
  echarts: {

  },
}
