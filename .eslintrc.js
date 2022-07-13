/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 11:50:27
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 18:40:21
 * @FilePath: \meyerweb\meyerweb\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off',
    'import/first': 'off',
    'no-unused-expressions': 'off',
    'array-callback-return': 'off'
  }
}
