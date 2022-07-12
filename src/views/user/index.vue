<template>
  <div class="user-wrapper">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    <div class="user-content">用户管理</div>
  </div>
</template>

<script>
import breadCrumb from '../../components/Breadcrumb'

export default {
  name: '',
  components: { breadCrumb },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.user-wrapper {
  width: 100%;
  height: 100%;
  .user-content {
    width: 100%;
    height: calc(100vh - 152px);
    background-color: #ffffff;
  }
}
</style>
