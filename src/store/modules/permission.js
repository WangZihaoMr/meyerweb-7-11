/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 18:24:03
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 14:36:43
 * @FilePath: \meyerweb\meyerweb\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getItem, setItem } from '@/utils/storage'
import MenuApi from '../../api/menu'

const MENUS_KEY = 'menus'
const AUTHORITYS_KEY = 'authoritys'

export default {
  namespaced: true,
  state: {
    menus: getItem(MENUS_KEY) || [],
    authoritys: getItem(AUTHORITYS_KEY) || []
  },
  mutations: {
    set_menus(state, menus) {
      state.menus = menus
      setItem(MENUS_KEY, menus)
    },
    set_authoritys(state, authoritys) {
      state.authoritys = authoritys
      setItem(AUTHORITYS_KEY, authoritys)
    }
  },
  actions: {
    // 获取menus、authoritys列表
    async getNavList({ commit }) {
      const { authoritys, menus } = await MenuApi.nowLoginMenu()
      commit('set_menus', menus)
      commit('set_authoritys', authoritys)
      return { menus, authoritys }
    }
  }
}
