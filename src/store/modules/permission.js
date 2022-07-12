/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 18:24:03
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 20:01:19
 * @FilePath: \meyerweb\meyerweb\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { publicRoutes, privateRoutes } from '@/router'
import { getItem, setItem } from '@/utils/storage'
import MenuApi from '../../api/menu'

const MENUS_KEY = 'menus'

export default {
  namespaced: true,
  state: {
    menus: getItem(MENUS_KEY) || [],
    routes: publicRoutes
  },
  mutations: {
    set_menu(state, payload) {
      state.menus = payload.menus
      setItem(MENUS_KEY, payload.menus)
    },
    set_routes(state, menus) {
      state.routes = [...publicRoutes, ...menus]
    }
  },
  actions: {
    // 获取menus、authoritys列表
    async getNavList({ commit }) {
      const response = await MenuApi.nowLoginMenu()
      commit('set_menu', response)
      return response
    },
    // 过滤出一级菜单
    filterRoutes({ commit }, menus) {
      console.log('menus===>', menus)
      const routes = []
      menus.forEach((perms) => {
        const data = privateRoutes.filter((item) => item.perms === perms)
        routes.push(...data)
      })
      // 添加 重定向 404 路由
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('set_routes', routes)
      console.log('modlues====>', routes)
      return routes
    }
  }
}
