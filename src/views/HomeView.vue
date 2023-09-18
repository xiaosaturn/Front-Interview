<template>
  <div class="overflow-y-scroll p-[20px]">
    <div class="flex flex-col items-center">
      <el-image class="w-[160px] h-[160px]" :src="state.randomAvatar"></el-image>
      <div>今天是2023年9月19日 星期五 21:20:28</div>
      <div>开启今天的能量吧</div>
      <div class="font-bold text-[22px]">每日一句：用一只眼睛看世界，用另一只眼睛看世界的究竟</div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { randomString } from '@/utils/randomString.ts'
import { onMounted, reactive } from 'vue';

const state = reactive({
  randomAvatar: ''
})

onMounted(() => {
  state.randomAvatar = 'https://api.multiavatar.com/' + randomString() + '.png';
  console.log('state.randomAvatar:', state.randomAvatar);
});

</script>

<style>

</style>
