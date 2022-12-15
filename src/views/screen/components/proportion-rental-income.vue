<template>
  <div class="proportion_rental_income_root">
    <Box title="租金收入占比">
      <div class="container">
        <div class="labels labels1"></div>
        <div class="chart_box">
          <div id="chart3" class="chart3"></div>
          <div class="info">
            <div class="bac"></div>

            <span class="label"> 共计 </span>
            <span class="value">
              <p>26</p>
              <span>笔</span>
            </span>
          </div>
        </div>
        <div class="labels labels2"></div>
      </div>
    </Box>
  </div>
</template>

<script setup name="ProportionRentalIncome">
import Box from "./box.vue";
import * as echarts from "echarts";

function initChart() {
  const myChart = echarts.init(document.getElementById("chart3"));

  myChart.setOption({
    color: ["#Fb4035", "#dbdce5", "#162c7a", "#53b6be"],
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 205,
            name: "直接访问",
          },
          {
            value: 310,
            name: "邮件营销",
          },
          {
            value: 234,
            name: "联盟广告",
          },
          {
            value: 135,
            name: "视频广告学习相",
          },
          {
            value: 400,
            name: "搜索引擎",
          },
        ],
        roundCap: 1, //可选项为1和2，不填则采用原有拼接方式
      },
    ],
  });
}

onMounted(() => {
  // initChart();
});
</script>

<style scoped lang="scss">
.proportion_rental_income_root {
  width: 100%;
  height: 215px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .labels {
    }

    .labels1 {
    }

    .labels2 {
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
