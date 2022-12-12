<template>
  <div class="page_root">
    <section class="map"></section>
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
    background-size: 100% 100%;
    background: url('@/assets/images/screen/bj.png') no-repeat;
  }
}
</style>
