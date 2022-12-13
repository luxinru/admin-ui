<template>
  <div class="page_root">
    <section class="map"></section>

    <section class="mask">
      <img class="top" src="@/assets/images/screen/on.png" alt="" />
      <img class="right" src="@/assets/images/screen/right.png" alt="" />
      <img class="bottom" src="@/assets/images/screen/Under.png" alt="" />
      <img class="left" src="@/assets/images/screen/left.png" alt="" />
    </section>
  </div>
</template>

<script setup name="ScreenIndex">
const version = ref("3.6.0");

function goTarget(url) {
  window.open(url, "__blank");
}
</script>

<style scoped lang="scss">
.page_root {
  position: relative;
  width: 100%;
  height: 100%;

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background: url("@/assets/images/screen/bj.png") no-repeat;
  }

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

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
  }
}
</style>
