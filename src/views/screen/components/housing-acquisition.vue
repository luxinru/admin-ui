<template>
  <div class="housing_acquisition_root">
    <Box title="房屋取得情况">
      <div class="container">
        <div id="chart6" class="chart6"></div>
      </div>
    </Box>
  </div>
</template>

<script setup name="HousingAcquisition">
import Box from "./box.vue";

import * as echarts from "echarts";

function initChart() {
  const myChart = echarts.init(document.getElementById("chart6"));

  myChart.setOption({
    legend: {
      show: false,
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "3%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: ["已处理", "无法办理", "正在办理", "办理遗失", "其他"],
      axisLine: {
        lineStyle: {
          color: "rgba(87, 107, 139, 0.66)",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(196, 225, 255, 1)",
      },
    },
    yAxis: {
      type: "value",
      max: 60,
      axisLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(87, 107, 139, 0.66)",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(87, 107, 139, 0.66)",
        },
      },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.6)",
      },
    },
    series: [
      {
        name: "数据",
        type: "bar",
        data: [
          {
            value: 30,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0.5, 0, 0.5, 1, [
                { offset: 0, color: "rgba(78, 137, 255, 1)" },
                { offset: 0.2, color: "rgba(78, 137, 255, 1)" },
                { offset: 0.5, color: "rgba(78, 137, 255, 0.8)" },
                { offset: 0.9, color: "rgba(78, 137, 255, 0)" },
              ]),
            },
          },
          {
            value: 20,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0.5, 0, 0.5, 1, [
                { offset: 0, color: "rgba(97, 252, 156, 1)" },
                { offset: 0.2, color: "rgba(97, 252, 156, 1)" },
                { offset: 0.5, color: "rgba(97, 252, 156, 0.8)" },
                { offset: 0.9, color: "rgba(78, 137, 255, 0)" },
              ]),
            },
          },
          {
            value: 30,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0.5, 0, 0.5, 1, [
                { offset: 0, color: "rgba(254, 222, 113, 1)" },
                { offset: 0.2, color: "rgba(254, 222, 113, 1)" },
                { offset: 0.5, color: "rgba(254, 222, 113, 0.8)" },
                { offset: 0.9, color: "rgba(254, 222, 113, 0)" },
              ]),
            },
          },
          {
            value: 20,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0.5, 0, 0.5, 1, [
                { offset: 0, color: "rgba(43, 173, 248, 1)" },
                { offset: 0.2, color: "rgba(43, 173, 248, 1)" },
                { offset: 0.5, color: "rgba(43, 173, 248, 0.8)" },
                { offset: 0.9, color: "rgba(43, 173, 248, 0)" },
              ]),
            },
          },
          {
            value: 20,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0.5, 0, 0.5, 1, [
                { offset: 0, color: "rgba(159, 125, 255, 1)" },
                { offset: 0.2, color: "rgba(159, 125, 255, 1)" },
                { offset: 0.5, color: "rgba(159, 125, 255, 0.8)" },
                { offset: 0.9, color: "rgba(159, 125, 255, 0)" },
              ]),
            },
          },
        ],
        barWidth: "16",
      },
      {
        z: 1,
        type: "pictorialBar",
        symbolPosition: "end",
        symbolRotate: "-90",
        symbolSize: [16, 15],
        color: "rgb(4,128,224)",
        data: [
          {
            value: 30,
            itemStyle: {
              color: "rgba(78, 137, 255, 1)",
            },
          },
          {
            value: 20,
            itemStyle: {
              color: "rgba(97, 252, 156, 1)",
            },
          },
          {
            value: 30,
            itemStyle: {
              color: "rgba(254, 222, 113, 1)",
            },
          },
          {
            value: 20,
            itemStyle: {
              color: "rgba(43, 173, 248, 1)",
            },
          },
          {
            value: 20,
            itemStyle: {
              color: "rgba(159, 125, 255, 1",
            },
          },
        ],
        symbol: "triangle",
        symbolOffset: [-0.5, -8],
      },
    ],
  });
}

onMounted(() => {
  initChart();
});
</script>

<style scoped lang="scss">
.housing_acquisition_root {
  width: 100%;
  height: 215px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .chart6 {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
