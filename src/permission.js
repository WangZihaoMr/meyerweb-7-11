import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
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
        const response = await store.dispatch('user/userInfo')
        console.log(response)
        if (response) {
          const { menus } = await store.dispatch('permission/getNavList')
          console.log(menus)
          // 调用vuex里面的filterRoutes方法，过滤出当前用户所拥有的的私有路由表
          // 获取当前登录用户的私有路由表
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            menus
          )
          // 将过滤出的   添加到路由表
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          console.log('vuex返回的数据', filterRoutes)
        }
      } else {
        next()
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
