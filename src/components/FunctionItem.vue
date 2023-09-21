<template>
    <div class="div-container flex">
        <div class="mr-[10px]">
            <el-image class="w-[100px] h-[100px] rounded-[10px]"
                :src="state.randomIcon"></el-image>
        </div>
        <div class="flex flex-col justify-between">
            <div class="text-[24px] font-bold line-clamp-2 leading-[30px]">随机字符串生成题本</div>
            <!-- <div class="text-[24px] font-bold line-clamp-2 leading-[30px]">标题本帖主要服务社区互助问答第</div> -->
            <div class="text-[#41A5E0] font-bold text-[18px]">分类-常用工具</div>
            <div>最后更新时间：2023-09-21</div>
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
.div-container {
    
}
</style>