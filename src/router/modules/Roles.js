/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 18:39:18
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 19:01:47
 * @FilePath: \meyerweb\meyerweb\src\router\modules\User.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  perms: 'sys:manage',
  path: '/sys',
  component: Layout,
  meta: {
    icon: 's-grid',
    title: '系统管理'
  },
  children: [
    {
      perms: 'sys:role:list',
      path: '/sys/roles',
      name: 'users',
      component: () => import('../../views/user'),
      meta: {
        title: '角色管理',
        icon: 'user-solid'
      }
    }
  ]
}
