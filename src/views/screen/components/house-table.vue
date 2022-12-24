<template>
  <div class="house_table_root">
    <section class="title">
      <img class="bac" src="@/assets/images/screen/title-2.png" alt="" />
      <span class="name">房屋取得情况</span>

      <!-- <div class="more" @click="onMoreClick">
        <span>More</span>
        <img src="@/assets/images/screen/more-1.png" alt="" />
      </div> -->
    </section>

    <section class="table">
      <div class="tabs">
        <div class="part">
          <span :class="{ active: type === 1 }" @click="onTypeClick(1)">
            基础信息
          </span>
          <span :class="{ active: type === 2 }" @click="onTypeClick(2)">
            资产信息
          </span>
          <span :class="{ active: type === 3 }" @click="onTypeClick(3)">
            房屋档案
          </span>
          <span :class="{ active: type === 4 }" @click="onTypeClick(4)">
            出租信息
          </span>
          <span :class="{ active: type === 5 }" @click="onTypeClick(5)">
            改造信息
          </span>
        </div>

        <div class="paging">
          <div class="active">1</div>
          <div>2</div>
          <div>3</div>
          <div>…</div>
          <div>末页</div>
        </div>
      </div>

      <template v-if="type === 1 || type === 2 || type === 3">
        <table border="1" style="z-index: 3">
          <thead>
            <tr>
              <th>房屋名称</th>
              <th>使用单位</th>
              <th>原值</th>
              <th>净值</th>
              <th>折旧</th>
              <th>使用性质</th>
              <th>实际用途</th>
              <th>使用状态</th>
            </tr>
          </thead>

          <tbody>
            <tr class="td" v-for="(item, index) in list" :key="index">
              <td>{{ item.assetsName || "-" }}</td>
              <td>{{ item.usedDepartThreeName || "-" }}</td>
              <td>{{ item.originalValue || "-" }}</td>
              <td>{{ item.nowValue || "-" }}</td>
              <td>{{ item.addDepreciate || "-" }}</td>
              <td>{{ item.usedNatureName || "-" }}</td>
              <td>{{ item.actualUsedName || "-" }}</td>
              <td>{{ item.usedStateName || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-if="type === 4">
        <table border="1" style="z-index: 3">
          <thead>
            <tr>
              <th>合同编号</th>
              <th>合同名称</th>
              <th>资产编码</th>
              <th>资产名称</th>
              <th>履行开始日期</th>
              <th>履行结束日期</th>
              <th>承租方单位名称</th>
              <th>租赁金额（不含税）</th>
            </tr>
          </thead>

          <tbody>
            <tr class="td" v-for="(item, index) in list" :key="index">
              <td>{{ item.contractCode || "-" }}</td>
              <td>{{ item.contracName || "-" }}</td>
              <td>{{ item.assetsCode || "-" }}</td>
              <td>{{ item.assetsName || "-" }}</td>
              <td>{{ item.performStartDate || "-" }}</td>
              <td>{{ item.performEndDate || "-" }}</td>
              <td>{{ item.rentDepartName || "-" }}</td>
              <td>{{ item.rentMoney || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-if="type === 5">
        <table border="1" style="z-index: 3">
          <thead>
            <tr>
              <th>合同编号</th>
              <th>合同名称</th>
              <th>资产编码</th>
              <th>资产名称</th>
              <th>开工时间</th>
              <th>完工时间</th>
              <th>合同金额</th>
              <th>工程进度</th>
              <th>结算金额</th>
            </tr>
          </thead>

          <tbody>
            <tr class="td" v-for="(item, index) in list" :key="index">
              <td>{{ item.contractCode || "-" }}</td>
              <td>{{ item.contracName || "-" }}</td>
              <td>{{ item.assetsCode || "-" }}</td>
              <td>{{ item.assetsName || "-" }}</td>
              <td>{{ item.startDate || "-" }}</td>
              <td>{{ item.endDate || "-" }}</td>
              <td>{{ item.contracMoney || "-" }}</td>
              <td>{{ item.projectProgress || "-" }}</td>
              <td>{{ item.settleMoney || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </section>
  </div>
</template>

<script setup name="HouseTable">
import bus from "vue3-eventbus";
import {
  fetchVisualList,
  fetchVisualRentHouse,
  fetchVisualReformHouse,
} from "@/api/screen";

const type = ref(1);

// function onCheck(index) {
//   console.log("index :>> ", index);
// }

const list = ref([]);

async function onTypeClick(value) {
  type.value = value;

  list.value = [];
  const depart = JSON.parse(localStorage.getItem("currentDepart"));
  const house = JSON.parse(localStorage.getItem("currentHouse"));
  switch (type.value) {
    case 1:
    case 2:
    case 3:
      const { rows: rows1 } = await fetchVisualList({
        houseName: "",
        houseCode: house.id,
        departCode: depart.departCode,
        assetsCode: "",
      });
      list.value = rows1 || [];
      break;
    case 4:
      const { rows: rows2 } = await fetchVisualRentHouse({
        houseCode: house.id,
      });
      list.value = rows2 || [];
      break;
    case 5:
      const { rows: rows3 } = await fetchVisualReformHouse({
        houseCode: house.id,
      });
      list.value = rows3 || [];
      break;
  }
}

onMounted(() => {
  onTypeClick(1);

  bus.on("onMapItemClick", async (data) => {
    onTypeClick(1);
  });
});
</script>

<style scoped lang="scss">
* {
  flex-shrink: 0;
}
.house_table_root {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(1, 18, 40, 0.9), rgba(1, 18, 40, 0.9));
  border: 1px solid;
  border-image: linear-gradient(
      0deg,
      rgba(58, 98, 157, 0.86),
      rgba(34, 50, 70, 0.86)
    )
    1 1;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 62px;
    display: flex;

    .bac {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .name {
      position: relative;
      flex: 1 0;
      font-size: 22px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      line-height: 55px;
      background: linear-gradient(0deg, #82c1ff 10%, #ffffff 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 66px;
    }

    .more {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 5px;
      line-height: 55px;
      cursor: pointer;

      span {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(220, 237, 255, 0.7);
        line-height: 55px;
      }

      img {
        height: 15px;
        margin-left: 2px;
      }
    }
  }

  .table {
    width: 100%;
    height: calc(100% - 62px);
    display: flex;
    flex-direction: column;
    margin-top: 62px;
    padding: 16px 13px 24px 29px;
    box-sizing: border-box;

    .tabs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .part {
        display: flex;
        align-items: center;

        span {
          width: 80px;
          height: 30px;
          background: rgba(51, 133, 238, 0.2);
          border: 1px solid #113c73;
          border-radius: 5px 5px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #91ccff;
          margin-left: 3px;
          cursor: pointer;

          &:first-child {
            margin-left: 0;
          }
        }

        .active {
          background: rgba(51, 133, 238, 0.6);
          border: 1px solid #2177cf;
          border-radius: 5px 5px 0px 0px;
          color: rgba(255, 255, 255, 1);
        }
      }

      .paging {
        display: flex;
        align-items: center;
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

    table {
      width: 100%;
      flex: 1 0;
      border: 1px solid rgba(57, 158, 233, 0.2);
      border-collapse: collapse;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      tr {
        width: 100%;
        height: 34px;
        display: flex;
        align-items: center;
        th {
          flex: 1 0;
          height: 34px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #91ccff;
          text-align: center;
          line-height: 34px;
          border: 1px solid rgba(57, 158, 233, 0.2);
        }
        td {
          flex: 1 0;
          height: 34px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          line-height: 34px;
          border: 1px solid rgba(57, 158, 233, 0.2);
        }
      }

      thead {
        width: calc(100% - 7px);
        background-color: #153456;
      }

      tbody {
        width: 100%;
        flex: 1 0;
        overflow-y: scroll;
        tr {
          &:nth-child(2n) {
            background-color: rgba(51, 133, 238, 0.1);
          }
        }
      }
    }
  }
}
</style>
