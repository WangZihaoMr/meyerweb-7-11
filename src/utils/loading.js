/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 08:33:44
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 08:43:57
 * @FilePath: \meyerweb\meyerweb\src\utils\loading.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入loading加载组件
import { Loading } from 'element-ui'

// 创建loading
const loading = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        target: 'body',
        text: '加载中...',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default loading
