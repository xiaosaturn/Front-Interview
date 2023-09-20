<template>
  <div class="aside-container flex flex-col items-center pt-4 w-[200px] bg-[#3b82f6]">
    <el-image class="w-[80px] h-[80px] rounded-[40px]"
      src="https://image.xiaosaturn.com/Photo/2023918/175100/ymf4n2j0tq1695030660832.png"></el-image>
    <div class="text-[white] font-[bold] text-[28px]">MasterH</div>
    <div class="flex w-[180px] justify-between items-center flex-col pt-[20px]">
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 1 ? 'active' : ''" @click="onClick(1)">首页</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 2 ? 'active' : ''" @click="onClick(2)">代码人生</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 3 ? 'active' : ''" @click="onClick(3)">精品阅读</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 4 ? 'active' : ''" @click="onClick(4)">数学鬼才</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 5 ? 'active' : ''" @click="onClick(5)">文学探索</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 6 ? 'active' : ''" @click="onClick(6)">影视剧赏析</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 6 ? 'active' : ''" @click="onClick(6)">娱乐占星</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 7 ? 'active' : ''" @click="onClick(7)">常用工具</div>
      <div class="item-cls text-[white] w-[90%] h-[40px] text-[22px] leading-[40px] text-center cursor-pointer"
        :class="state.activeIndex == 7 ? 'active' : ''" @click="onClick(8)">其他</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';

const state = reactive({
  activeIndex: 1,
})
const onClick = (index: number) => {
  if (state.activeIndex == index) {
    return;
  }
  state.activeIndex = index;
  switch(index) {
    case 1: router.push({ path: '/' }); return;
    case 2: router.push({ path: '/code-life' }); return;
    case 3: router.push({ path: '/reading-book' }); return;
  }
}
</script>

<style lang="scss" scoped>
.aside-container {

}

.item-cls {
  margin-bottom: 4px;
}

.active {
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 6px;
  background-color: rgba(51, 51, 51, 0.3);
}

.item-cls:hover {
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 6px;
  background-color: rgba(51, 51, 51, 0.3);
}
</style>
