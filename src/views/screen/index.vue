<template>
  <div class="page_root">
    <section class="map">
      <Map />
    </section>

    <img class="top" src="@/assets/images/screen/on.png" alt="" />
    <img
      v-if="type === 1"
      class="right"
      src="@/assets/images/screen/right.png"
      alt=""
    />
    <img class="bottom" src="@/assets/images/screen/Under.png" alt="" />
    <img class="left" src="@/assets/images/screen/left.png" alt="" />

    <div class="top_img">
      <img src="@/assets/images/screen/top.png" alt="" />
      <span> 西南石油房屋可视化 </span>
    </div>
    <img class="bottom_img" src="@/assets/images/screen/bottom.png" alt="" />
    <img class="left_img" src="@/assets/images/screen/edge-2.png" alt="" />
    <img class="right_img" src="@/assets/images/screen/edge-2.png" alt="" />

    <img
      class="border_left_top"
      src="@/assets/images/screen/edge-1.png"
      alt=""
    />
    <img
      class="border_right_top"
      src="@/assets/images/screen/edge-1.png"
      alt=""
    />
    <img
      class="border_left_bottom"
      src="@/assets/images/screen/edge-1.png"
      alt=""
    />
    <img
      class="border_right_bottom"
      src="@/assets/images/screen/edge-1.png"
      alt=""
    />

    <section class="search_box">
      <SearchInput />
    </section>

    <section class="topbar">
      <TopBar />
    </section>

    <section class="left_part">
      <BasicInfo />
    </section>

    <section class="right_part" v-if="type === 1">
      <AdvancedInfo />
    </section>

    <section v-if="type === 2" class="house_imgs">
      <HouseImgs />
    </section>

    <section v-if="type === 2" class="house_info">
      <HouseInfo />
    </section>

    <section v-if="type === 2" class="house_table">
      <HouseTable />
    </section>

    <section class="modal" v-if="isShowModal">
      <HouseLedgerDetails />
    </section>
  </div>
</template>

<script setup name="ScreenIndex">
import bus from "vue3-eventbus";

import SearchInput from "./components/search-input.vue";
import TopBar from "./components/top-bar.vue";
import BasicInfo from "./components/basic-info.vue";
import AdvancedInfo from "./components/advanced-info.vue";
import HouseLedgerDetails from "./components/house-ledger-details.vue";
import HouseImgs from "./components/house-imgs.vue";
import HouseInfo from "./components/house-info.vue";
import HouseTable from "./components/house-table.vue";
import Map from "./components/map.vue";
import { onMounted } from "vue-demi";

const isShowModal = ref(false);
const type = ref(1);

bus.on("onModalClose", () => {
  isShowModal.value = false;
});

bus.on("onModalShow", () => {
  isShowModal.value = true;
});

bus.on("onTopbarClick", (value) => {
  type.value = value;
});

onMounted(() => {
  window.onresize = () => {
    location.reload();
  };
});
</script>

<style scoped lang="scss">
.page_root {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .top {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .right {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
  }

  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .left {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }

  .top_img {
    position: absolute;
    width: 1825px;
    height: 106px;
    top: 0;
    display: flex;
    justify-content: center;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    span {
      position: relative;
      font-size: 45px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;

      background: linear-gradient(0deg, #82c1ff 40%, #ffffff 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 7px;
    }
  }

  .bottom_img {
    position: absolute;
    width: 1816px;
    height: 63px;
    bottom: 0;
  }

  .left_img {
    position: absolute;
    width: 64px;
    height: 811px;
    left: 0;
  }

  .right_img {
    position: absolute;
    width: 64px;
    height: 811px;
    right: 0;
    transform: rotate(180deg);
  }

  .border_left_top {
    position: absolute;
    width: 154px;
    height: 127px;
    top: 21px;
    left: 16px;
  }

  .border_right_top {
    position: absolute;
    width: 154px;
    height: 127px;
    top: 21px;
    right: 14px;
    transform: rotateY(180deg);
  }

  .border_left_bottom {
    position: absolute;
    width: 154px;
    height: 127px;
    bottom: 18px;
    left: 16px;
    transform: rotateX(180deg);
  }

  .border_right_bottom {
    position: absolute;
    width: 154px;
    height: 127px;
    bottom: 18px;
    right: 14px;
    transform: rotate(180deg);
  }

  .search_box {
    position: absolute;
    width: 443px;
    height: 52px;
    top: 120px;
  }

  .topbar {
    position: absolute;
    top: 0;
    width: 1825px;
    height: 106px;
  }

  .left_part {
    position: absolute;
    width: 390px;
    top: 121px;
    left: 47px;
    bottom: 63px;
  }

  .right_part {
    position: absolute;
    width: 390px;
    top: 121px;
    right: 50px;
    bottom: 65px;
  }

  .house_imgs {
    position: absolute;
    width: 435px;
    height: 461px;
    top: 189px;
    left: 507px;
  }

  .house_info {
    position: absolute;
    width: 435px;
    height: 461px;
    top: 189px;
    right: 51px;
  }

  .house_table {
    position: absolute;
    width: 1402px;
    height: 361px;
    bottom: 65px;
    right: 51px;
  }

  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
