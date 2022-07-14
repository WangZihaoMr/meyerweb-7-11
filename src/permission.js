/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 18:08:51
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-14 10:43:36
 * @FilePath: \meyerweb\meyerweb\src\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
      if (!store.getters.userInfo) {
        // 用户信息
        const response = await store.dispatch('user/getUserInfo')
        console.log('用户信息===>', response)
        const navList = await store.dispatch('permission/getNavList')
        console.log(navList)
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
