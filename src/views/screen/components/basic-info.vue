<template>
  <div class="basic_info_root">
    <ProductionValueInfo />

    <HousingInfo />

    <RentalInfo />
  </div>
</template>

<script setup name="ScreenIndex">
import ProductionValueInfo from "./production-value-info.vue";
import HousingInfo from "./housing-info.vue";
import RentalInfo from "./rental-info.vue";

const version = ref("3.6.0");

function goTarget(url) {
  window.open(url, "__blank");
}
</script>

<style scoped lang="scss">
.basic_info_root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
