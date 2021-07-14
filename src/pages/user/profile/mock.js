export default {
  apexLineChart: {
    series: [
      {
        name: "Products",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 100]
      },
      {
        name: "Services",
        data: [64, 53, 47, 39, 24, 36, 42, 55, 67]
      }
    ],
    options: {
      chart: {
        toolbar: false,
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        show: false,
        row: {
          colors: ['transparent'],
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      colors: ['#4d53e0', '#41D5E2']
    }
  }
}
