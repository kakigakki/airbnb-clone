import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  console.log('全局路由前置守卫：to,from\n', to, from)
  // 设置页面标题
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  console.log('全局路由后置守卫：to,from\n', to, from)
  NProgress.done()
})

export default router
