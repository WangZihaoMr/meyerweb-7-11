/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 20:35:18
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 20:40:59
 * @FilePath: \meyerweb\src\utils\storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 存储数据
 * @param {*} key
 * @param {*} value
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

/**
 * 获取数据
 * @param {*} key
 * @returns
 */
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return data
  } catch (err) {
    return JSON.parse(data)
  }
}

/**
 * 删除单个数据
 * @param {*} key
 */
export const remoteItem = (key) => {
  localStorage.remoteItem(key)
}

/**
 * 删除所有数据
 */
export const clearAll = () => {
  localStorage.clear()
}
