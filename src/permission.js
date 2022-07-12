import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  const userInfo = store.getters.userInfo
  console.log(token)
  console.log(userInfo)
  if (token) {
    // 登录状态
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!userInfo) {
        // 用户信息
        const response = store.dispatch('user/userInfo')
        console.log(response)
        if (response) {
          const navList = store.dispatch('permission/getNavList')
          console.log(navList)
        }
      }
      next()
    }
  } else {
    // 未登录状态
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
