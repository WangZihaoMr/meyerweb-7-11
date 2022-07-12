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
