/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 09:18:50
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 10:41:10
 * @FilePath: \meyerweb\meyerweb\src\store\modules\tagsview.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getItem, setItem } from '@/utils/storage'

const TAG_KEY = 'tags'
export default {
  namespaced: true,
  state: {
    tags: getItem(TAG_KEY) || []
  },
  mutations: {
    // 添加标签
    set_tag(state, routeObj) {
      // 如果第一条数据不存在，则添加控制台tag标签
      if (!state.tags[0]) {
        state.tags.push({ title: '控制台', path: '/console' })
      }
      // tag去重
      const data = state.tags.find((item) => item.title === routeObj.title)
      if (!data) {
        state.tags.push(routeObj)
        setItem(TAG_KEY, state.tags)
      }
    },
    // 删除标签
    del_tag(state, i) {
      state.tags.splice(i, 1)
      setItem(TAG_KEY, state.tags)
    }
  },
  actions: {
    // 添加标签
    addTags({ commit }, routeObj) {
      commit('set_tag', routeObj)
    },
    // 删除标签
    delTags({ commit }, i) {
      commit('del_tag', i)
    }
  }
}
