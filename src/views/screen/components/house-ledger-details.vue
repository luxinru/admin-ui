<template>
  <div class="house_ledger_details_root">
    <img
      class="title_img"
      src="@/assets/images/screen/window-upper.png"
      alt=""
    />

    <div class="container">
      <span class="title">
        房屋台账明细信息查询
        <img
          class="close"
          src="@/assets/images/screen/close.png"
          alt=""
          @click="onModalClose"
        />
      </span>

      <div class="table">
        <div class="charts">
          <div class="item">
            <div class="item_title">
              <img src="@/assets/images/screen/more-1.png" alt="" />
              <span> 数据统计 </span>
            </div>

            <div class="chart_box">
              <div class="bac"></div>
              <div id="chart4" class="chart4"></div>
            </div>

            <div class="info">
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_title">
              <img src="@/assets/images/screen/more-1.png" alt="" />
              <span> 数据统计 </span>
            </div>

            <div class="chart_box">
              <div class="bac"></div>
              <div id="chart5" class="chart4"></div>
            </div>

            <div class="info">
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
              <div class="info_item">
                <img src="@/assets/images/screen/mark.png" alt="" />
                <span>数据展示</span>
                <p>254</p>
              </div>
            </div>
          </div>
        </div>

        <div class="list">
          <table>
            <thead>
              <tr>
                <th>资产编码</th>
                <th>资产类型</th>
                <th>
                  资产名称
                  <div class="sort">
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                  </div>
                </th>
                <th>
                  资产类别编码

                  <div class="sort">
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                  </div>
                </th>
                <th>
                  规格型号

                  <div class="sort">
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                  </div>
                </th>
                <th>
                  所属单位

                  <div class="sort">
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                  </div>
                </th>
                <th>宗地编码</th>
                <th>权属情况</th>
                <th>
                  使用权类型

                  <div class="sort">
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                    <img src="@/assets/images/screen/triangular.png" alt="" />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="index in 20" :key="index">
                <td>101010101</td>
                <td>0010101010</td>
                <td>遂运工坊</td>
                <td>154572316</td>
                <td>混合结构</td>
                <td>物管中心/行政办</td>
                <td>1</td>
                <td>四川省遂宁市</td>
                <td>0102</td>
              </tr>
            </tbody>
          </table>

          <div class="paging">
            <div>1</div>
            <div class="active">2</div>
            <div>3</div>
            <div>…</div>
            <div>末页</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HouseLedgerDetails">
import * as echarts from "echarts";
import { onBeforeUnmount } from "vue-demi";
import bus from "vue3-eventbus";

function initChart() {
  const myChart1 = echarts.init(document.getElementById("chart4"));
  const myChart2 = echarts.init(document.getElementById("chart5"));

  const gradList = [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#03c",
      },
      {
        offset: 1,
        color: "#18f",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#46f",
      },
      {
        offset: 1,
        color: "#4cd",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#3a7",
      },
      {
        offset: 1,
        color: "#4db",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#03c",
      },
      {
        offset: 1,
        color: "#9db",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#06b",
      },
      {
        offset: 1,
        color: "#4bf",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#06b",
      },
      {
        offset: 1,
        color: "#0bb",
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: "#8ec",
      },
      {
        offset: 1,
        color: "#dea",
      },
    ]),
  ];

  const options = {
    series: [
      {
        name: "数据统计",
        type: "pie",
        center: ["50%", "50%"],
        radius: ["20%", "75%"],
        roseType: true,
        itemStyle: {
          normal: {
            color: function (params) {
              return gradList[params.dataIndex];
            },
          },
        },
        label: {
          show: false,
        },
        data: [
          { name: "数据1", value: 10 },
          { name: "数据2", value: 30 },
          { name: "数据3", value: 15 },
          { name: "数据4", value: 23 },
        ],
      },
    ],
  };

  myChart1.setOption(options);
  myChart2.setOption(options);
}

function onModalClose(params) {
  bus.emit("onModalClose");
}

onMounted(() => {
  initChart();
});

onBeforeUnmount(() => {
  echarts.dispose(document.getElementById("chart4"))
  echarts.dispose(document.getElementById("chart5"))
})
</script>

<style scoped lang="scss">
* {
  flex-shrink: 0;
}
.house_ledger_details_root {
  width: 1573px;
  height: 804px;
  display: flex;
  flex-direction: column;

  .title_img {
    width: 1573px;
    height: 48px;
  }

  .container {
    width: 100%;
    flex: 1 0;
    margin-top: 8px;
    border: 1px solid;
    border-image: linear-gradient(
        0deg,
        rgba(7, 70, 142, 0.93),
        rgba(57, 125, 202, 0.93),
        rgba(189, 225, 255, 0.93),
        rgba(57, 125, 202, 0.93),
        rgba(7, 70, 142, 0.93)
      )
      1 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("../../../assets/images/screen/window-under.png") no-repeat;
    background-size: 100% 100%;

    .title {
      position: relative;
      width: 100%;
      height: 81px;
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 0px 1px 1px rgba(0, 11, 10, 0.43);
      display: flex;
      align-items: center;
      justify-content: center;

      .close {
        position: absolute;
        top: 0;
        right: 0;
        width: 34px;
        height: 34px;
        cursor: pointer;
      }
    }

    .table {
      width: 100%;
      flex: 1 0;
      overflow: hidden;
      display: flex;
      padding: 0 17px;
      box-sizing: border-box;

      .charts {
        width: 311px;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 8px 63px;
        box-sizing: border-box;

        .item {
          width: 100%;
          flex: 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 24px;

          &:first-child {
            margin-top: 0;
          }

          .item_title {
            width: 100%;
            display: flex;
            align-items: center;

            img {
              height: 24px;
              transform: rotate(-90deg);
              margin-right: 9px;
            }

            span {
              font-size: 20px;
              font-family: YouSheBiaoTiHei;
              font-weight: 400;
              color: #ffffff;
            }
          }

          .chart_box {
            position: relative;
            width: 178px;
            height: 178px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            box-sizing: border-box;
            margin: 10px 0 18px;

            .bac {
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 1px dashed rgba(0, 246, 255, 0.2);
            }

            .chart4 {
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }

          .info {
            width: 100%;
            flex: 1 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0 10px;

            .info_item {
              display: flex;
              align-items: center;

              img {
                width: 23px;
                margin-right: 6px;
              }

              span {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
              }

              p {
                font-size: 18px;
                font-family: YouSheBiaoTiHei;
                font-weight: bold;
                color: rgba(0, 162, 255, 1);
                margin: 0 0 0 10px;
              }
            }
          }
        }
      }

      .list {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;

        table {
          width: 100%;
          height: 602px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(57, 158, 233, 0.2);
          border-collapse: collapse;
          thead {
            width: 100%;
            height: 33px;

            tr {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              background-color: rgba(51, 133, 238, 0.3);

              th {
                flex: 1 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #91ccff;
                border: 1px solid rgba(57, 158, 233, 0.2);

                .sort {
                  display: flex;
                  flex-direction: column;
                  margin-left: 18px;

                  img {
                    width: 8px;

                    &:last-child {
                      transform: rotate(180deg);
                    }
                  }
                }
              }
            }
          }

          tbody {
            width: 100%;
            flex: 1 0;
            display: flex;
            flex-direction: column;
            overflow-y: scroll;

            tr {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;

              &:nth-child(2n) {
                background-color: rgba(51, 133, 238, 0.1);
              }

              td {
                flex: 1 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                border: 1px solid rgba(57, 158, 233, 0.2);
              }
            }
          }
        }

        .paging {
          width: 100%;
          flex: 1 0;
          display: flex;
          align-items: center;
          justify-content: center;

          div {
            height: 25px;
            background: rgba(51, 133, 238, 0.3);
            border: 1px solid rgba(51, 133, 238, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #399ee9;
            margin-left: 3px;
            padding: 0 6px;
            box-sizing: border-box;
            cursor: pointer;

            &:first-child {
              margin-left: 0;
            }
          }

          .active {
            background: rgba(51, 133, 238, 0.5);
            border: 1px solid rgba(51, 133, 238, 0.8);
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
