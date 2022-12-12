<template>
  <div class="app-container">
    <el-dialog :title="title" v-model="dataOpen" width="80%" append-to-body>


    </el-dialog>
    <el-dialog :title="title" v-model="conditionOpen" width="80%" append-to-body>


    </el-dialog>
  </div>
</template>
<script setup name="ChoiceAssets">
import { inject, defineProps } from 'vue'

const { proxy } = getCurrentInstance();
const { sys_normal_disable } = proxy.useDict("sys_normal_disable");


const props = defineProps({
  buttonName: {
    type: String,
    default: "按钮",
    required: true
  },
  bgColorType: {
    type: String,
    default: "white"
  }
});


</script>