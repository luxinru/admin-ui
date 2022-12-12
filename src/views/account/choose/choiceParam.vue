<template>
    <div class="app-container">
        <el-dialog :title="title" v-model="open" width="80%" append-to-body>
         

        </el-dialog>

    </div>
</template>
<script setup name="ChoiceParam">
import { inject } from 'vue'

const { proxy } = getCurrentInstance();
const { sys_normal_disable } = proxy.useDict("sys_normal_disable");
// const open = ref(false);

const props = defineProps({
    buttonName: {
        type: String,
        default: "按钮",
        required: true
    },
    open: {
        
        type: Boolean,
        default: false
    }
});


</script>