<template>
    <div class="footer-container bg-[gray] flex justify-center items-center h-[40px]">
        <div class="mr-[60px] font-bold">Copyright © Created By MasterH</div>
        <div class="font-bold a-div" @click="go2Beian">沪ICP备2023004796号-1</div>
    </div>
</template>
  
<script setup lang="ts">

const go2Beian = () => {
    window.open('https://beian.miit.gov.cn/');
}
</script>

<style scoped>
.footer-container {
    background-color:#ccc;
}
.a-div {
    cursor: pointer;
}
.a-div:hover {
    text-decoration: underline;
}
</style>