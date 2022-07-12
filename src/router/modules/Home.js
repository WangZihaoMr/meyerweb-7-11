/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 18:39:18
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 19:06:18
 * @FilePath: \meyerweb\meyerweb\src\router\modules\User.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  perms: 'sys:home',
  path: '/home',
  name: 'home',
  component: Layout,
  meta: {
    icon: 's-home',
    title: '控制台'
  }
}
