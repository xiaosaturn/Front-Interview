<template>
  <div class="overflow-y-scroll p-[20px]" style="z-index:1">
    <div class="flex justify-between">
      <div class="text-[22px] text-[#333] font-bold flex-[1]">
        <span style="opacity: 0">你好</span>欢迎光临黄师傅的杂货铺，这里有很多杂货，比如程序猿的代码人生、精品阅读、音乐赏析、常用工具等，包罗万象，应有尽有。🤠🤠🤠
        <br />
        <span style="opacity: 0">你好</span>做这个网站的初衷就是将自己平时遇到的一些问题、解决方案、心得体会、实用工具等搜罗到一起，免得后面还得一个一个去找，Chrome的收藏夹已经有很多了。🥴🥴🥴
        <br />
        <span style="opacity: 0">你好</span>网站会不定期更新，争取每天都更新。各位小伙伴们如果有什么需求或对网站有什么建议，欢迎留言或发邮件给我，待评估合格之后，会将其上线。😺😺😺
        <br />
        <span style="opacity: 0">你好</span>最后祝每一个访问者身体健康，天天开心，事事顺心，谢谢大家。😃😃😃
      </div>
      <div class="w-[20px]"></div>
      <el-card class="tr-card-cls" shadow="hover">
        <div class="flex items-center mb-[10px]">
          <el-image class="w-[160px] h-[160px] mr-6" :src="state.randomAvatar" :previewSrcList="[state.randomAvatar]"></el-image>
          <div class="flex-[1]">
            <div class="text-[#ff11ffe2] font-bold text-[28px]">小伙伴们，开启今天的能量</div>
            <div class="text-[gray]">今天是{{ state.dateTimeStr }}</div>
          </div>
        </div>
        <div class="font-bold text-[22px] text-left">
          用一只眼睛看世界，用另一只眼睛看世界的究竟用一只眼睛看世界，用另一只眼睛看世界的究竟
          <div class="text-right font-bold text-[22px]">—— 戴尔卡耐基《人性的弱点》</div>
        </div>
      </el-card>
    </div>
    
    <div>
      <el-descriptions title="最新上线">
        <el-descriptions-item v-for="(item,index) of 6" :key="index">
          <el-card class="cursor-pointer" shadow="hover">
            <FunctionItem />
          </el-card>
        </el-descriptions-item>
      </el-descriptions>
      <el-divider />
      <el-descriptions title="最多访问">
        <el-descriptions-item v-for="(item,index) of 6" :key="index">
          <el-card class="cursor-pointer" shadow="hover">我啊</el-card>
        </el-descriptions-item>
      </el-descriptions>
      <el-divider />
      <el-descriptions title="常用工具" style="z-index:1">
        <el-descriptions-item v-for="(item,index) of 6" :key="index">
          <el-card class="cursor-pointer" shadow="hover">我啊</el-card>
        </el-descriptions-item>
      </el-descriptions>
      <el-divider />
    </div>

  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { randomString } from '@/utils/randomString.ts'
import { displayDateTime } from '@/utils/general.ts'
import { onMounted, reactive } from 'vue'
import FunctionItem from '@/components/FunctionItem.vue'

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

<style scoped>
.tr-card-cls {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  max-width: 600px;
  border-radius: 20px;
  text-align: center;
}
</style>
