export default {
  apexCharts: {
    basicLine: {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
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
        title: {
          text: 'Product Trends by Month',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#F7F8FB', 'transparent'],
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
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        colors: ['#4d53e0']
      }
    },
    basicWithLabels: {
      series: [
        {
          name: "High - 2020",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2020",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        colors: ['#FF4B23', '#00A5FF'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Average Temperature',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#F7F8FB', 'transparent'],
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: {
          title: {
            text: 'Temperature',
            style: {
              fontSize: '12px',
              fontWeight: 400,
              color: "#6B859E",
            },
          },
          labels: {
            style: {
              colors: ["#6B859E"],
            },
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    },
    lineColumn: {
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 39, 22, 17, 31, 26]
      }],
      options: {
        colors: ["#C7D0D9", "#FF5668"],
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "straight",
          width: [0, 1]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
          style: {
            fontSize: '10px',
            fontWeight: 500,
          },
          background: {
            borderWidth: 0,
          },
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        xaxis: {
          type: 'category',
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: [
          {
            title: {
              text: 'Website Blog',
              style: {
                fontSize: '12px',
                fontWeight: 400,
                color: "#6B859E",
              },
            },
            labels: {
              style: {
                colors: ["#6B859E"],
              },
            },
          }, {
            opposite: true,
            title: {
              text: 'Social Media',
              style: {
                fontSize: '12px',
                fontWeight: 400,
                color: "#6B859E",
              },
            },
            labels: {
              style: {
                colors: ["#6B859E"],
              },
            },
          }],
        fill: {
          type: "solid",
          opacity: 1,
        }
      },
    },
    lineArea: {
      series:[
        {
          name: "Website Blog Visits",
          data: [670, 720, 770, 690, 900, 970, 1030],
        },
        {
          name: "Social Media Visits",
          data: [760, 590, 910, 850, 700, 1050, 920],
        },
      ],
      options: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          type: "category",
          categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
          ],
          labels: {
            style: {
              colors: "#6B859E",
              opacity: 0.7,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#6B859E"],
              opacity: 0.7,
            },
          },
        },
        tooltip: {
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            stops: [40, 90, 100]
          }
        },
        colors: ["#4D53E0", "#41D5E2"],
        legend: {
          show: true,
          horizontalAlign: "center",
        },
      },
    },
  },
  recharts: {

  },
  echarts: {

  }
}
