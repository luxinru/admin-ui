<template>
  <div class="rental_info_root">
    <Box title="出租信息">
      <div class="container">
        <div class="top">
          <div class="imgs">
            <img
              class="img1"
              src="@/assets/images/screen/icon-bj2.png"
              alt=""
            />

            <img class="img2" src="@/assets/images/screen/income.png" alt="" />
          </div>

          <div class="info">
            <span> 出租总收入 </span>

            <p><CountTo :start="0" :end="rentalIncome" /></p>

            <span> 万元 </span>
          </div>
        </div>

        <div class="chart_box">
          <div id="chart" class="chart"></div>
          <div class="legend">
            <div class="item">
              <img src="@/assets/images/screen/icon-1.png" alt="" />
              <span>同比增长</span>
            </div>
            <div class="item">
              <img src="@/assets/images/screen/icon-2.png" alt="" />
              <span>环比增长</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script setup name="ScreenIndex">
import bus from "vue3-eventbus";
import * as echarts from "echarts";

import Box from "./box.vue";

const rentalIncome = ref(0);

function initChart() {
  const myChart = echarts.init(document.getElementById("chart"));

  myChart.setOption({
    visualMap: [
      {
        show: false,
        type: "continuous",
        seriesIndex: 0,
        min: 0,
        max: 50,
        color: [
          "rgba(165, 182, 217, 1)",
          "rgba(59, 154, 255, 1)",
          "rgba(143, 193, 249, 1)",
        ],
      },

      {
        show: false,
        type: "continuous",
        seriesIndex: 1,
        min: 0,
        max: 50,
        color: [
          "rgba(255, 255, 255, 0.64)",
          "rgba(94, 158, 225, 0.64)",
          "rgba(26, 38, 50, 0.02)",
        ],
      },
    ],
    legend: {
      show: false,
    },
    tooltip: {
      show: true,
      trigger: "axis",
    },
    grid: {
      top: "22%",
      left: "3%",
      right: "3%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisLine: {
        lineStyle: {
          color: "rgba(87, 107, 139, 0.66)",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(87, 107, 139, 0.66)",
        },
      },
      axisLabel: {
        color: "rgba(196, 225, 255, 1)",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
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
        name: "同比增长",
        type: "line",
        data: [30, 20, 30, 20, 45, 20, 30],
        symbol: "none",
        // lineStyle: {
        //   color: 'rgba(59, 154, 255, 1)'
        // }
      },
      {
        name: "环比增长",
        type: "line",
        data: [20, 10, 20, 10, 40, 10, 20],
        symbol: "none",
        // lineStyle: {
        //   color: 'rgba(79, 133, 247, 0.27)'
        // }
      },
    ],
  });
}

onMounted(() => {
  initChart();

  bus.on("fetchBasicStatsFun", (data) => {
    const { rentalIncome: value } = data;
    rentalIncome.value = value || 0;
  });
});
</script>

<style scoped lang="scss">
.rental_info_root {
  width: 100%;
  height: 40.17857%;
  margin-top: 11px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    box-sizing: border-box;

    .top {
      width: 100%;
      height: 98px;
      border-bottom: 1px solid rgba(23, 154, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;

      .imgs {
        position: relative;
        width: 106px;
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: center;

        .img1 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .img2 {
          position: absolute;
          width: 35px;
          top: -16px;
          margin-left: 5px;
          animation: move2 2s linear infinite;
        }

        @keyframes move2 {
          0% {
            top: -16px;
          }

          50% {
            top: -24px;
          }

          100% {
            top: -16px;
          }
        }
      }

      .info {
        display: flex;
        align-items: center;
        margin-left: 11px;

        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }

        p {
          width: 80px;
          font-size: 36px;
          font-family: YouSheBiaoTiHei;
          font-weight: 400;
          font-style: italic;
          color: rgba(222, 237, 255, 0);

          background: linear-gradient(
            180deg,
            #eafff5 50%,
            rgba(153, 227, 127, 0.76) 80%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 8px 3px 5px;
        }
      }
    }

    .chart_box {
      position: relative;
      flex: 1 0;
      width: 100%;

      .chart {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      .legend {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;

        .item {
          display: flex;
          align-items: center;
          margin-left: 18px;

          img {
            width: 10px;
            height: 10px;
          }

          span {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
