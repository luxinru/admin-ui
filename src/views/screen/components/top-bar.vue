<template>
  <div class="top_bar_root">
    <section class="left">
      <div class="item">
        <img src="@/assets/images/screen/system.png" alt="" />
        <span> 系统平台 </span>
      </div>

      <div class="item">
        <img src="@/assets/images/screen/unit.png" alt="" />
        <span> 川中油气矿 </span>
      </div>
    </section>

    <section class="right">
      <div class="item" :class="{ active: type === 1 }" @click="onItemClick(1)">
        <img
          v-show="type === 1"
          src="@/assets/images/screen/assets-1.png"
          alt=""
        />
        <img
          v-show="type !== 1"
          src="@/assets/images/screen/assets.png"
          alt=""
        />
        <span> 资产可视化 </span>
      </div>
      <div class="item" :class="{ active: type === 2 }" @click="onItemClick(2)">
        <img
          v-show="type === 2"
          src="@/assets/images/screen/house-1.png"
          alt=""
        />
        <img
          v-show="type !== 2"
          src="@/assets/images/screen/house.png"
          alt=""
        />
        <span> 房屋可视化 </span>
      </div>
      <div class="item" :class="{ active: type === 3 }" @click="onItemClick(3)">
        <img
          v-show="type === 3"
          src="@/assets/images/screen/pipe-1.png"
          alt=""
        />
        <img v-show="type !== 3" src="@/assets/images/screen/pipe.png" alt="" />
        <span> 工艺管网可视化 </span>
      </div>
    </section>
  </div>
</template>

<script setup name="ScreenIndex">
import bus from "vue3-eventbus";
const type = ref(1);

function onItemClick(value) {
  type.value = value
  bus.emit("onTopbarClick", value);
}
</script>

<style scoped lang="scss">
.top_bar_root {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 13px 5px;

  .left {
    flex: 1 0;
    display: flex;
    align-items: center;

    .item {
      display: flex;
      align-items: center;
      margin-left: 37px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      img {
        height: 24px;
      }

      span {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #bdd7e7;
        margin-left: 10px;
      }
    }
  }

  .right {
    flex: 1 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      cursor: pointer;
      height: 42px;
      padding: 0 13px;

      &:first-child {
        margin-left: 0;
      }

      img {
        height: 24px;
      }

      span {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #bdd7e7;
        margin-left: 10px;
      }
    }

    .active {
      background: url("../../../assets/images/screen/select.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
