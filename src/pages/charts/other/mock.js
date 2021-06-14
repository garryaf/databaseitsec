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
    composedChart: {
      data: [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ],
    },
    treemapChart: {
      data: [
        {
          name: 'axis',
          children: [
            { name: 'Axes', size: 1302 },
            { name: 'Axis', size: 24593 },
            { name: 'AxisGridLine', size: 652 },
            { name: 'AxisLabel', size: 636 },
            { name: 'CartesianAxes', size: 6703 },
          ],
        },
        {
          name: 'controls',
          children: [
            { name: 'AnchorControl', size: 2138 },
            { name: 'ClickControl', size: 3824 },
            { name: 'Control', size: 1353 },
            { name: 'ControlList', size: 4665 },
            { name: 'DragControl', size: 2649 },
            { name: 'ExpandControl', size: 2832 },
            { name: 'HoverControl', size: 4896 },
            { name: 'IControl', size: 763 },
            { name: 'PanZoomControl', size: 5222 },
            { name: 'SelectionControl', size: 7862 },
            { name: 'TooltipControl', size: 8435 },
          ],
        },
        {
          name: 'data',
          children: [
            { name: 'Data', size: 20544 },
            { name: 'DataList', size: 19788 },
            { name: 'DataSprite', size: 10349 },
            { name: 'EdgeSprite', size: 3301 },
            { name: 'NodeSprite', size: 19382 },
            {
              name: 'render',
              children: [
                { name: 'ArrowType', size: 698 },
                { name: 'EdgeRenderer', size: 5569 },
                { name: 'IRenderer', size: 353 },
                { name: 'ShapeRenderer', size: 2247 },
              ],
            },
            { name: 'ScaleBinding', size: 11275 },
            { name: 'Tree', size: 7147 },
            { name: 'TreeBuilder', size: 9930 },
          ],
        },
        {
          name: 'events',
          children: [
            { name: 'DataEvent', size: 7313 },
            { name: 'SelectionEvent', size: 6880 },
            { name: 'TooltipEvent', size: 3701 },
            { name: 'VisualizationEvent', size: 2117 },
          ],
        },
        {
          name: 'legend',
          children: [
            { name: 'Legend', size: 20859 },
            { name: 'LegendItem', size: 4614 },
            { name: 'LegendRange', size: 10530 },
          ],
        },
        {
          name: 'operator',
          children: [
            {
              name: 'distortion',
              children: [
                { name: 'BifocalDistortion', size: 4461 },
                { name: 'Distortion', size: 6314 },
                { name: 'FisheyeDistortion', size: 3444 },
              ],
            },
            {
              name: 'encoder',
              children: [
                { name: 'ColorEncoder', size: 3179 },
                { name: 'Encoder', size: 4060 },
                { name: 'PropertyEncoder', size: 4138 },
                { name: 'ShapeEncoder', size: 1690 },
                { name: 'SizeEncoder', size: 1830 },
              ],
            },
            {
              name: 'filter',
              children: [
                { name: 'FisheyeTreeFilter', size: 5219 },
                { name: 'GraphDistanceFilter', size: 3165 },
                { name: 'VisibilityFilter', size: 3509 },
              ],
            },
            { name: 'IOperator', size: 1286 },
            {
              name: 'label',
              children: [
                { name: 'Labeler', size: 9956 },
                { name: 'RadialLabeler', size: 3899 },
                { name: 'StackedAreaLabeler', size: 3202 },
              ],
            },
            {
              name: 'layout',
              children: [
                { name: 'AxisLayout', size: 6725 },
                { name: 'BundledEdgeRouter', size: 3727 },
                { name: 'CircleLayout', size: 9317 },
                { name: 'CirclePackingLayout', size: 12003 },
                { name: 'DendrogramLayout', size: 4853 },
                { name: 'ForceDirectedLayout', size: 8411 },
                { name: 'IcicleTreeLayout', size: 4864 },
                { name: 'IndentedTreeLayout', size: 3174 },
                { name: 'Layout', size: 7881 },
                { name: 'NodeLinkTreeLayout', size: 12870 },
                { name: 'PieLayout', size: 2728 },
                { name: 'RadialTreeLayout', size: 12348 },
                { name: 'RandomLayout', size: 870 },
                { name: 'StackedAreaLayout', size: 9121 },
                { name: 'TreeMapLayout', size: 9191 },
              ],
            },
            { name: 'Operator', size: 2490 },
            { name: 'OperatorList', size: 5248 },
            { name: 'OperatorSequence', size: 4190 },
            { name: 'OperatorSwitch', size: 2581 },
            { name: 'SortOperator', size: 2023 },
          ],
        },
      ],
    },
    radarChart: {
      data: [
        {
          subject: 'Math',
          A: 140,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 130,
          B: 80,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 96,
          B: 120,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 70,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 120,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 115,
          fullMark: 150,
        },
      ],
    },
    scatterChart: {
      data1: [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
      ],
      data2: [
        { x: 300, y: 300, z: 200 },
        { x: 400, y: 500, z: 260 },
        { x: 200, y: 700, z: 400 },
        { x: 340, y: 350, z: 280 },
        { x: 560, y: 500, z: 500 },
        { x: 230, y: 780, z: 200 },
        { x: 500, y: 400, z: 200 },
        { x: 300, y: 500, z: 260 },
        { x: 240, y: 300, z: 400 },
        { x: 320, y: 550, z: 280 },
        { x: 500, y: 400, z: 500 },
        { x: 420, y: 280, z: 200 },
      ],
    },
  },
  echarts: {

  },
}
