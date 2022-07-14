<!--
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 13:53:28
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-15 00:03:17
 * @FilePath: \meyerweb\meyerweb\src\components\Breadcrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/sys' }">系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  watch: {
    $route: {
      handler(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped lang="scss">
.breadcrumb-wrapper {
  padding: 18px 20px;
  display: flex;
  align-items: center;
  height: 52px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  background-color: #ffffff;
}
</style>
