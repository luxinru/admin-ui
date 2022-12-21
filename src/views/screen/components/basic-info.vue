<template>
  <div class="basic_info_root">
    <ProductionValueInfo />

    <HousingInfo />

    <RentalInfo />
  </div>
</template>

<script setup name="ScreenIndex">
import bus from "vue3-eventbus";

import ProductionValueInfo from "./production-value-info.vue";
import HousingInfo from "./housing-info.vue";
import RentalInfo from "./rental-info.vue";

import { fetchBasicStats } from "@/api/screen";

const original = ref(0)
const now = ref(0)
const acc = ref(0)

async function fetchBasicStatsFun() {
  const { data } = await fetchBasicStats({
    departCode: 11518,
  });
  bus.emit("fetchBasicStatsFun", data);
}

onMounted(() => {
  fetchBasicStatsFun();
});
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
