<template>
  <div class="house_table_root">
    <section class="title">
      <img class="bac" src="@/assets/images/screen/title-2.png" alt="" />
      <span class="name">房屋取得情况</span>

      <div class="more" @click="onMoreClick">
        <span>More</span>
        <img src="@/assets/images/screen/more-1.png" alt="" />
      </div>
    </section>

    <section class="table">
      <div class="tabs">
        <div class="part">
          <span :class="{ active: type === 1 }" @click="type = 1"
            >基础信息</span
          >
          <span :class="{ active: type === 2 }" @click="type = 2"
            >资产信息</span
          >
          <span :class="{ active: type === 3 }" @click="type = 3"
            >房屋档案</span
          >
          <span :class="{ active: type === 4 }" @click="type = 4"
            >出租信息</span
          >
          <span :class="{ active: type === 5 }" @click="type = 5"
            >改造信息</span
          >
        </div>

        <div class="paging">
          <div>1</div>
          <div class="active">2</div>
          <div>3</div>
          <div>…</div>
          <div>末页</div>
        </div>
      </div>

      <table border="1">
        <tr class="th">
          <td rowspan="2"></td>
          <td rowspan="2">房屋名称</td>
          <td rowspan="2">使用单位</td>
          <td colspan="3">价值信息</td>
          <td colspan="3">用途信息</td>
        </tr>
        <tr class="th">
          <td>原值</td>
          <td>净值</td>
          <td>折旧</td>
          <td>使用性质</td>
          <td>实际用途</td>
          <td>使用状态</td>
        </tr>

        <tr class="td" v-for="index in 4" :key="index">
          <td>
            <div class="check" @click="onCheck(index)"></div>
          </td>
          <td>101</td>
          <td>川中油气矿射洪作业区</td>
          <td>5200</td>
          <td>0.36</td>
          <td>13.36</td>
          <td>办公用房</td>
          <td>办公用房</td>
          <td>使用中</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script setup name="HouseTable">
const type = ref(1);

function onCheck(index) {
  console.log('index :>> ', index);
}
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
    flex: 1 0;
    display: flex;
    flex-direction: column;
    margin-top: 62px;
    padding: 16px 13px 24px 29px;
    box-sizing: border-box;
    overflow: hidden;

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
      overflow-y: scroll;
      tr {
        td {
          height: 34px;
          text-align: center;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #91ccff;
        }
      }

      .th {
        background-color: rgba(51, 133, 238, 0.2);
      }

      .td {
        td {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }

        &:nth-child(2n) {
          background-color: rgba(51, 133, 238, 0.1);
        }

        .check {
          width: 10px;
          height: 10px;
          border: 1px solid rgba(33, 119, 207, 0.5);
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
