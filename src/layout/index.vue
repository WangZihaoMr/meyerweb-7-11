<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header> <app-header></app-header></el-header>
      <el-main>
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
