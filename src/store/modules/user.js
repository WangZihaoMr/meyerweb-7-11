/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:25:52
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 11:56:35
 * @FilePath: \meyerweb\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Login from '../../api/login'
import { getItem, setItem } from '../../utils/storage'

const TOKEN_KEY = 'token'

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || ''
  },
  mutations: {
    // 存储token
    set_token(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    }
  },
  actions: {
    // 登录
    async login({ commit }, loginForm) {
      const token = await Login.login(loginForm)
      commit('set_token', token)
      return token
    },
    // 退出登录
    async loginOut({ commit }) {
      await Login.loginOut()
      commit('set_token', '')
    }
  }
}
