import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 记录左侧导航位置，浏览器刷新的时候，可以定位到原来的位置
 */
export const useNavIndexStore = defineStore('navIndex', () => {
  const navIndex = ref(1)
//   const doubleCount = computed(() => count.value * 2)
  function updateNavIndex(index: number) {
    navIndex.value = index;
  }

  return { navIndex, updateNavIndex }
});