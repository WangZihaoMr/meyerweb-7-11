/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:37:10
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 18:11:31
 * @FilePath: \meyerweb\src\store\getters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.userInfo,
  tags: (state) => state.tagsview.tags
}

export default getters
