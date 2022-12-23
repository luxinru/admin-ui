<template>
  <div class="rental_growth_rate_root">
    <Box title="租金增长率">
      <div class="container">
        <div class="title">
          <div class="part">
            <img src="@/assets/images/screen/more-1.png" alt="" />
            <span class="label"> 年同比 </span>
            <p><CountTo :start="0" :end="year" />%</p>
          </div>

          <div class="part">
            <div class="item">
              <span class="dot"></span>
              <div>同比</div>
            </div>
            <div class="item">
              <span class="dot"></span>
              <div>环比</div>
            </div>
          </div>
        </div>

        <div id="chart1" class="chart1"></div>
      </div>
    </Box>
  </div>
</template>

<script setup name="RentalGrowthRate">
import Box from "./box.vue";
import * as echarts from "echarts";
import { fetchRentalGrowth } from "@/api/screen";

const year = ref(0)

function initChart(data) {
  const myChart = echarts.init(document.getElementById("chart1"));

  const { BasicData, xAreaData, yearData, yearOnYear } = data

  year.value = Number(yearOnYear) || 0

  myChart.setOption({
    legend: {
      show: false,
    },
    tooltip: {
      show: true,
      trigger: "axis",
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
      boundaryGap: false,
      data: xAreaData,
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
        name: "同比增长",
        type: "line",
        data: BasicData,
        symbol: "none",
        smooth: true,
        lineStyle: {
          color: "rgba(125, 237, 155, 1)",
        },
      },

      {
        name: "同比增长",
        type: "line",
        data: BasicData.map(item => {
          return item - item * 0.2
        }),
        symbol: "none",
        smooth: true,
        lineStyle: {
          color: "RGBA(9, 29, 54, 1)",
        },
      },

      {
        name: "环比增长",
        type: "line",
        data: yearData,
        symbol: "none",
        smooth: true,
        lineStyle: {
          color: "rgba(75, 185, 244, 1)",
        },
      },

      {
        name: "环比增长",
        type: "line",
        data: yearData.map(item => {
          return item - item * 0.2
        }),
        symbol: "none",
        smooth: true,
        lineStyle: {
          color: "RGBA(9, 29, 54, 1)",
        },
      },
    ],
  });
}

async function fetchRentalGrowthFun () {
  const { data } = await fetchRentalGrowth({
    departCode: 11518,
    groupType: 0,
  })

  initChart(data);
}

onMounted(() => {
  fetchRentalGrowthFun()
});
</script>

<style scoped lang="scss">
.rental_growth_rate_root {
  width: 100%;
  flex: 1 0;
  margin-top: 11px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    box-sizing: border-box;

    .title {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .part {
        display: flex;
        align-items: center;

        img {
          height: 24px;
          margin-left: 13px;
          transform: rotate(-90deg);
        }

        .label {
          margin-left: 2px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }

        p {
          margin: 0 0 0 10px;
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(75, 185, 244, 1);
          padding-top: 3px;
          font-weight: bold;
        }

        .item {
          display: flex;
          align-items: center;
          margin-left: 21px;

          .dot {
            width: 6px;
            height: 6px;
            background: #7ded9b;
            border-radius: 50%;
          }

          div {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            margin-left: 8px;
          }

          &:last-child {
            .dot {
              width: 6px;
              height: 6px;
              background: #4bb9f4;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .chart1 {
      width: 100%;
      flex: 1 0;
    }
  }
}
</style>
