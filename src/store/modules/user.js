/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:25:52
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 16:20:00
 * @FilePath: \meyerweb\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import LoginApi from '../../api/login'
import UserApi from '../../api/user'
import { getItem, setItem } from '../../utils/storage'

const TOKEN_KEY = 'token'
const USER_INFO_KEY = 'userInfo'

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || '',
    userInfo: getItem(USER_INFO_KEY) || {}
  },
  mutations: {
    // 存储token
    set_token(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    // 存储用户信息
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem(USER_INFO_KEY, userInfo)
    }
  },
  actions: {
    // 登录
    async login({ commit }, loginForm) {
      const token = await LoginApi.login(loginForm)
      commit('set_token', token)
      return token
    },
    // 退出登录
    async loginOut({ commit }) {
      await LoginApi.loginOut()
      commit('set_token', '')
    },
    // 用户信息
    async userInfo({ commit }) {
      const userInfo = await UserApi.getUserInfo()
      commit('set_userInfo', userInfo)
      return userInfo
    }
  }
}
