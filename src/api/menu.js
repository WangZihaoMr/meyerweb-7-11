/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 14:31:28
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 18:31:09
 * @FilePath: \meyerweb\meyerweb\src\api\menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/request'

/**
 * 新增菜单
 * @param {*} data
 * @returns
 */
const addMenu = (data = {}) => {
  return request({ url: '/sys/menu/add', method: 'POST', data })
}

/**
 * 删除菜单
 * @param {*} id
 * @returns
 */
const delMenu = (id) => {
  return request({ url: `/sys/menu/del/${id}`, method: 'DELETE' })
}

/**
 * 单个菜单信息
 * @param {*} id
 * @returns
 */
const menuSingle = (id) => {
  return request({ url: `/sys/menu/info/${id}`, method: 'GET' })
}

/**
 * 菜单列表
 * @returns
 */
const menuList = () => {
  return request({ url: '/sys/menu/list', method: 'GET' })
}

/**
 * 当前登录用户的菜单接口
 * @returns
 */
const nowLoginMenu = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}

/**
 * 更新菜单
 * @returns
 */
const updateMenu = () => {
  return request({ url: '/sys/menu/update', method: 'PUT' })
}

// 导出方法
export default {
  addMenu,
  delMenu,
  menuSingle,
  menuList,
  nowLoginMenu,
  updateMenu
}
