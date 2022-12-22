<template>
  <div class="housing_info_root">
    <Box title="房屋信息">
      <div class="container">
        <div class="item">
          <div class="imgs">
            <img class="img1" src="@/assets/images/screen/icon-bj.png" alt="" />
            <img
              class="img2"
              src="@/assets/images/screen/Housing-quantity.png"
              alt=""
            />
          </div>
          <div class="info">
            <span>房屋总量</span>
            <span>
              <p><CountTo :start="0" :end="totalHouseNum" /></p>
              <p>幢</p>
            </span>
          </div>
        </div>

        <div class="item">
          <div class="imgs">
            <img class="img1" src="@/assets/images/screen/icon-bj.png" alt="" />
            <img class="img2" src="@/assets/images/screen/area.png" alt="" />
          </div>
          <div class="info">
            <span>房屋面积</span>
            <span>
              <p><CountTo :start="0" :end="totalHouseArea" /></p>
              <p>万元</p>
            </span>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script setup name="HousingInfo">
import bus from "vue3-eventbus";

import Box from "./box.vue";

const totalHouseNum = ref(0);
const totalHouseArea = ref(0);

onMounted(() => {
  bus.on("fetchBasicStatsFun", (data) => {
    const { totalHouseNum: value1, totalHouseArea: value2 } = data;

    totalHouseNum.value = Number(value1) || 0;
    totalHouseArea.value = Number(value2) || 0;
  });
});
</script>

<style scoped lang="scss">
.housing_info_root {
  width: 100%;
  flex: 209;
  margin-top: 11px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      display: flex;
      align-items: center;
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }

      .imgs {
        position: relative;
        width: 90px;
        height: 88px;
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
          position: relative;
          width: 34px;
          margin-bottom: 22px;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        margin: 0 0 14px 5px;

        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;

          &:last-child {
            display: flex;
            align-items: center;

            p {
              &:first-child {
                width: 40px;
                font-size: 24px;
                font-family: YouSheBiaoTiHei;
                font-weight: 400;
                color: #2177cf;
                -webkit-text-stroke: 1px #ffffff;
                text-stroke: 1px #ffffff;

                background: linear-gradient(
                  0deg,
                  rgba(137, 162, 172, 0.94) 0%,
                  rgba(229, 245, 255, 0.94) 20.2880859375%,
                  rgba(255, 255, 255, 0.94) 79.4189453125%,
                  rgba(255, 255, 255, 0.94) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin: 16px 0 0 0;
              }

              &:last-child {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                margin: 20px 0 0 3px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
