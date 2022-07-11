/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:25:52
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 18:38:54
 * @FilePath: \meyerweb\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UserApi from '../../api/user'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {},
  actions: {
    async login({ commit }, loginForm) {
      const response = await UserApi.login(loginForm)
      console.log(response)
      return response
    }
  }
}
