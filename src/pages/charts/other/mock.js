const generateData = (hours = 8, min = 0, max = 90) => {
  const result = []
  for (let i = 0; i < hours; i ++) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    result.push(num)
  }
  return result;
}

export default {
  apexCharts: {
    treemapChart: {
      series: [
        {
          data: [
            {
              x: 'New York',
              y: 218
            },
            {
              x: 'London',
              y: 149
            },
            {
              x: 'Minsk',
              y: 184
            },
            {
              x: 'Tel-Aviv',
              y: 55
            },
            {
              x: 'Paris',
              y: 84
            },
            {
              x: 'Beijing',
              y: 31
            },
            {
              x: 'Moscow',
              y: 70
            },
            {
              x: 'Bombay',
              y: 30
            },
            {
              x: 'Melbourne',
              y: 44
            },
            {
              x: 'Rome',
              y: 68
            },
            {
              x: 'Cairo',
              y: 28
            },
            {
              x: 'Budapest',
              y: 19
            },
            {
              x: 'Warsaw',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: 'treemap',
          toolbar: {
            show: false
          },
        },
        colors: ['#2F33A7'],
      },
    },
    scatterChart: {
      series: [{
        name: "React",
        data: [
          [16, 5], [21, 2], [24, 3], [19, 2], [10, 1], [13, 3], [10, 7], [10, 15], [10, 8], [16, 18]]
      },{
        name: "Angular",
        data: [
          [36, 13], [1, 11], [5, 8], [9, 17], [12, 4], [3, 12], [15, 14], [17, 9], [1, 13], [2, 12]]
      },{
        name: "Vue",
        data: [
          [21, 3], [23, 3], [24, 3], [29, 3], [21, 20], [23, 2], [10, 3], [28, 4], [27, 16], [16, 4], [13, 0]]
      }],
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true,
            type: 'xy'
          },
        },
        colors: ['#4d53e0', '#FF5668', '#43BC13'],
        markers: {
          size: 14,
        },
        xaxis: {
          tickAmount: 7,
        },
        yaxis: {
          tickAmount: 6,
        }
      },
    },
    heatmapChart: {
      series: [{
        name: 'Monday',
        data: generateData(),
      },
        {
          name: 'Tuesday',
          data: generateData(),
        },
        {
          name: 'Wednesday',
          data: generateData(),
        },
        {
          name: 'Thursday',
          data: generateData(),
        },
        {
          name: 'Friday',
          data: generateData(),
        },
        {
          name: 'Saturday',
          data: generateData(),
        },
        {
          name: 'Sunday',
          data: generateData(),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: undefined,
          align: 'center'
        },
        colors: ['#FFA100'],
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      },
    },
    radarChart: {
      series: [{
        name: 'Tasks',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          toolbar: {
            show: false
          },
        },
        colors: ["#FF4B23"],
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      },
    },
  },
  recharts: {

  },
  echarts: {

  },
}
