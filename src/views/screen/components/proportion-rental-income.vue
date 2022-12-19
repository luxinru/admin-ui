<template>
  <div class="proportion_rental_income_root">
    <Box title="租金收入占比">
      <div class="container">
        <div class="labels labels1">
          <div class="item">
            <span><CountTo :start="0" :end="25" />%</span>
            <p>成都</p>
          </div>
          <div class="item">
            <span><CountTo :start="0" :end="10" />%</span>
            <p>重庆</p>
          </div>
          <div class="item">
            <span><CountTo :start="0" :end="20" />%</span>
            <p>南充</p>
          </div>
        </div>

        <div class="chart_box">
          <div id="chart3" class="chart3"></div>
          <div class="info">
            <div class="bac"></div>

            <span class="label"> 共计 </span>
            <span class="value">
              <p><CountTo :start="0" :end="26" /></p>
              <span>笔</span>
            </span>
          </div>
        </div>

        <div class="labels labels2">
          <div class="item">
            <p>广元</p>
            <span><CountTo :start="0" :end="10" />%</span>
          </div>
          <div class="item">
            <p>遂宁</p>
            <span><CountTo :start="0" :end="10" />%</span>
          </div>
          <div class="item">
            <p>内江</p>
            <span><CountTo :start="0" :end="10" />%</span>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script setup name="ProportionRentalIncome">
import Box from "./box.vue";
import * as echarts from "echarts";
import "echarts-gl";

function initChart() {
  const myChart = echarts.init(document.getElementById("chart3"));

  let colorList = [
    "#00A3F0",
    "#00FED2",
    "#FFD37A",
    "#F08200",
    "#F04900",
    "#F00000",
    "#F000A9",
    "#8200F0",
    "#ea7ccc",
  ];
  let result = {
    data: [
      { value: "成都", count: 25 },
      { value: "广元", count: 10 },
      { value: "重庆", count: 10 },
      { value: "遂宁", count: 10 },
      { value: "南充", count: 20 },
      { value: "内江", count: 10 },
    ],
    total: 11393722,
  };
  let baseData = [];
  for (var i = 0; i < result.data.length; i++) {
    baseData.push({
      value: result.data[i].count,
      name: result.data[i].value,
    });
  }

  myChart.setOption({
    title: {
      show: false,
    },
    color: colorList,
    tooltip: {
      show: true,
      trigger: "item",
      padding: [8, 15],
      backgroundColor: "rgba(12, 51, 115,0.8)",
      borderColor: "rgba(3, 11, 44, 0.5)",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      top: 0,
      left: 10,
      right: 0,
      bottom: 10,
    },
    series: [
      {
        startAngle: -90,
        name: "分布",
        type: "pie",
        radius: ["75%", "85%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        data: baseData,
        itemStyle: {
          normal: {
            borderRadius: 80,
            borderCap: "round",
          },
        },
      },
    ],
  });
}

onMounted(() => {
  initChart();
});
</script>

<style scoped lang="scss">
.proportion_rental_income_root {
  width: 100%;
  flex: 1 0;
  margin-top: 11px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .labels {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;

        span {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #4bb9f4;
        }
      }
    }

    .labels1 {
      align-items: flex-end;

      .item {
        span {
          margin-right: 5px;
        }

        &:nth-child(2) {
          margin-right: 20px;
        }
      }
    }

    .labels2 {
      .item {
        span {
          margin-left: 5px;
        }

        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }

    .chart_box {
      position: relative;
      width: 122px;
      height: 122px;
      display: flex;
      align-items: center;
      justify-content: center;

      .chart3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .info {
        position: relative;
        width: 79px;
        height: 79px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .bac {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 5px solid RGBA(18, 51, 90, 1);
          border-radius: 50%;
        }

        .label {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }

        .value {
          display: flex;
          align-items: center;

          p {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #4bb9f4;
            font-weight: bold;
            margin: 3px 3px 0 0;
          }

          span {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            margin: 5px 0 0 0;
          }
        }
      }
    }
  }
}
</style>
