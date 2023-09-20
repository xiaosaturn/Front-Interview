<template>
  <div class="overflow-y-scroll p-[20px]">
    <div class="flex flex-col items-center">
      <el-image class="w-[160px] h-[160px]" :src="state.randomAvatar" :previewSrcList="[state.randomAvatar]"></el-image>
      <div>今天是{{ state.dateTimeStr }}</div>
      <div>开启今天的能量吧</div>
      <div class="font-bold text-[22px]">
        每日一句：用一只眼睛看世界，用另一只眼睛看世界的究竟
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { randomString } from '@/utils/randomString.ts'
import { displayDateTime } from '@/utils/general.ts'
import { onMounted, reactive } from 'vue'

const state = reactive({
  randomAvatar: 'https://image.xiaosaturn.com/Photo/2023920/170044/jvgv529yyadefault-avatar.png',
  dateTimeStr: ''
})

const getCurrentDateTime = () => {
  state.dateTimeStr = displayDateTime();
  setInterval(() => {
    state.dateTimeStr = displayDateTime();
  }, 1000);
}

onMounted(async () => {
  getCurrentDateTime();
  const res = await axios.get('https://apio.yshxk.com/utils/random-avatar')
  if (res) {
    state.randomAvatar = res.data
  }
})
</script>

<style></style>
