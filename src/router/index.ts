import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/code-life',
      name: 'codeLife',
      component: () => import('../views/code-life/CodeLife.vue')
    },
    {
      path: '/reading-book',
      name: 'readingBook',
      component: () => import('../views/reading/ReadingBook.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MyPage.vue')
    },
    {
      path: '/mypage2',
      name: 'mypage2',
      component: () => import('../views/MyPage2.vue')
    }
  ]
})

export default router
