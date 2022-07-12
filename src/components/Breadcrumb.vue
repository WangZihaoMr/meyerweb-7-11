<template>
  <div class="breadcrumb-wrapper">
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/user' }"
          >系统管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb></el-card
    >
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
  methods: {}
}
</script>
<style scoped lang="scss">
.breadcrumb-wrapper {
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
</style>
