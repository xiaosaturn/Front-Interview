<template>
  <div class="flex w-[100vw] h-[100vh]">
    <AsideCom />
    <div class="flex-1 flex flex-col justify-between">
        <HeaderCom />
        <RouterView class="flex-1" />
        <FooterCom />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderCom from '@/components/common/HeaderCom.vue';
import FooterCom from '@/components/common/FooterCom.vue';
import AsideCom from '@/components/common/AsideCom.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>
