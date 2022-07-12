<template>
  <div class="header-wrapper">
    <!-- 侧边栏的伸缩按钮 -->
    <div class="openBtn">
      <i class="el-icon-s-fold aside_icon"></i>
      <!-- <i class="el-icon-s-unfold aside_icon"></i> -->
    </div>
    <!-- tags标签 -->
    <tags-view></tags-view>
    <!--  -->
  </div>
</template>

<script>
// 引入tags组件
import TagsView from '../../components/TagsView'
export default {
  name: '',
  components: {
    TagsView
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.header-wrapper,
.aside_icon {
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 25px;
  color: #ffffff;
}

.openBtn {
}
</style>
