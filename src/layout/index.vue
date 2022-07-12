<!--
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 16:45:55
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 15:11:41
 * @FilePath: \meyerweb\meyerweb\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container>
    <el-aside width="200px">
      <!-- 侧边栏 -->
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 头部 -->
        <app-header></app-header>
      </el-header>
      <el-main>
        <!-- 主体 -->
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from './Header'
import AppAside from './Aside'
import AppMain from './Main'
export default {
  name: '',
  components: {
    AppHeader,
    AppAside,
    AppMain
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: $header-bg-color;
  color: #333;
}

.el-aside {
  background-color: $aside-bg-color;
  color: #333;
}

.el-main {
  background-color: $main-bg-color;
  color: #333;
}
</style>
