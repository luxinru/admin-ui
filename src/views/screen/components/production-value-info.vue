<template>
  <div class="production_value_info_root">
    <Box title="产值信息">
      <div class="container">
        <div class="imgs">
          <img class="img1" src="@/assets/images/screen/oildrum.png" alt="" />
          <img class="img2" src="@/assets/images/screen/building.png" alt="" />
        </div>

        <div class="list">
          <div class="item">
            <span class="label"> 原值 </span>
            <img src="@/assets/images/screen/more-1.png" alt="" />
            <div class="value">
              <span>6967</span>
              <p>万元</p>
            </div>
          </div>

          <div class="item">
            <span class="label"> 净值 </span>
            <img src="@/assets/images/screen/more-1.png" alt="" />
            <div class="value">
              <span>5036</span>
              <p>万元</p>
            </div>
          </div>

          <div class="item">
            <span class="label"> 折旧 </span>
            <img src="@/assets/images/screen/more-1.png" alt="" />
            <div class="value">
              <span>5621</span>
              <p>万元</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script setup name="ProductionValueInfo">
import Box from "./box.vue";

const version = ref("3.6.0");

function goTarget(url) {
  window.open(url, "__blank");
}
</script>

<style scoped lang="scss">
.production_value_info_root {
  width: 100%;
  flex: 290;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .imgs {
      position: relative;
      width: 117px;
      height: 177px;
      display: flex;
      align-items: center;
      justify-content: center;

      .img1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .img2 {
        position: absolute;
        width: 60px;
        animation: move 2s linear infinite;
      }

      @keyframes move {
        0% {
          margin-bottom: 0;
        }

        50% {
          margin-bottom: 16px;
        }

        100% {
          margin-bottom: 0;
        }
      }
    }

    .list {
      display: flex;
      flex-direction: column;

      .item {
        width: 264px;
        height: 55px;
        display: flex;
        align-items: center;
        background: url("../../../assets/images/screen/title-3.png") no-repeat;
        background-size: 100% 100%;
        margin-top: 4px;
        padding-bottom: 10px;

        .label {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(252, 253, 255, 1);
          margin-left: 40px;
        }

        img {
          height: 16px;
          margin-left: 36px;
          transform: rotate(-90deg);
        }

        .value {
          display: flex;
          align-items: center;
          margin-left: 9px;

          span {
            font-size: 22px;
            font-family: YouSheBiaoTiHei;
            font-weight: 400;
            color: #2993ff;
          }

          p {
            font-size: 14px;
            font-family: YouSheBiaoTiHei;
            font-weight: 400;
            color: rgba(252, 253, 255, 1);
            margin: 2px 0 0 3px;
          }
        }
      }
    }
  }
}
</style>
