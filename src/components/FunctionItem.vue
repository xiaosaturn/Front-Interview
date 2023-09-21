<template>
    <div class="div-container flex">
        <div>
            <el-image class="w-[100px] h-[100px] rounded-[10px]"
                :src="state.randomIcon"></el-image>
        </div>
        <div class="flex flex-col">
            <div>标题</div>
            <div>分类</div>
            <div>日期</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, reactive } from 'vue'

const state = reactive({
  randomIcon: 'https://image.xiaosaturn.com/Photo/2023920/170044/jvgv529yyadefault-avatar.png',
});

onMounted(async () => {
    const res = await axios.get('https://apio.yshxk.com/utils/random-avatar')
    if (res) {
        state.randomIcon = res.data
    }
})
</script>

<style scoped>
.div-container {}
</style>