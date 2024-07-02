import _ from 'lodash'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

// 处理vue2子应用来回切换报错
// router.beforeEach((to, from, next) => {
//   if (_.isEmpty(history.state.current)) {
//     _.assign(history.state, { current: from.fullPath })
//   }
//   next()
// })

export default router
