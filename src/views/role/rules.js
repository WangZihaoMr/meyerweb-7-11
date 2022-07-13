/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-14 01:44:40
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-14 01:49:04
 * @FilePath: \meyerweb\meyerweb\src\views\role\rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  name: [{ required: true, message: '请输入角色', trigger: 'blur' }],
  code: [{ required: true, message: '请输入编码', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入描述', trigger: 'blur' }],
  status: [{ required: true, message: '请选择状态', trigger: 'change' }]
}
