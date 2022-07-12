/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 11:50:27
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 09:29:21
 * @FilePath: \meyerweb\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './modules/user'
import tagsview from './modules/tagsview'
import getters from './getters'
export default new Vuex.Store({
  getters,
  modules: {
    user,
    tagsview
  }
})
