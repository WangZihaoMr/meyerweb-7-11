import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  console.log('token', token)
  if (token) {
    // 登录状态
    if (to.path === '/login') {
      next(from.path)
    } else {
      console.log(store.getters.userInfo)
      // if (!store.getters.userInfo) {
      // 用户信息
      const response = await store.dispatch('user/getUserInfo')
      console.log('用户信息===>', response)
      const navList = await store.dispatch('permission/getNavList')
      console.log(navList)
      // } else {
      // next()
      // }
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
