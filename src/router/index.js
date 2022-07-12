/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 11:50:27
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 20:07:18
 * @FilePath: \meyerweb\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './modules/Users'
import Menus from './modules/Menus'
import Roles from './modules/Roles'
import Home from './modules/Home'

Vue.use(VueRouter)

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

export const privateRoutes = [Users, Menus, Roles, Home]

const router = new VueRouter({
  routes: [...publicRoutes]
})

export default router

// {
//   path: '/',
//   name: 'layout',
//   redirect: '/console',
//   component: Layout,
//   children: [
//     {
//       path: '/console',
//       name: 'console',
//       component: () => import('../views/console'),
//       meta: {
//         title: '控制台',
//         icon: ''
//       }
//     }
//   ]
// },
// {
//   path: '/sys',
//   name: 'sys',
//   redirect: '/sys/user',
//   component: Layout,
//   children: [
//     {
//       path: '/user',
//       name: 'user',
//       component: () => import('../views/user'),
//       meta: {
//         title: '用户管理',
//         icon: ''
//       }
//     },
//     {
//       path: '/role',
//       name: 'role',
//       component: () => import('../views/role'),
//       meta: {
//         title: '角色管理',
//         icon: ''
//       }
//     },
//     {
//       path: '/menu',
//       name: 'menu',
//       component: () => import('../views/menu'),
//       meta: {
//         title: '菜单管理',
//         icon: ''
//       }
//     }
//   ]
// },
