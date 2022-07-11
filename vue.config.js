/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 11:50:27
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 21:04:03
 * @FilePath: \meyerweb\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 9999,
    host: 'localhost',
    https: false,
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_CROSS_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/stylesheet/common.scss";'
      }
    }
  }
})
