<template>
  <router-view />
</template>

<script setup>
import useSettingsStore from "@/store/modules/settings";
import { handleThemeStyle } from "@/utils/theme";

onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme);
  });
});
</script>
<style>
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}

@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("@/assets/images/font/YouSheBiaoTiHei-2.ttf");
}

::-webkit-scrollbar {
  width: 7px;
  background: rgba(57, 158, 233, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-track-piece {
  background: rgba(57, 158, 233, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(57, 158, 233, 1);
  border-radius: 4px;
}
</style>
