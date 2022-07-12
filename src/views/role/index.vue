<template>
  <div class="role-wrapper">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    <div class="role-content">
      <!-- 头部 -->
      <div class="header">
        <el-form :inline="true" :model="userForm" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input
              v-model="userForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" icon="el-icon-search">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 新增 -->
        <el-button type="primary" icon="el-icon-edit">新增</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="userList" border stripe style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column
          align="center"
          prop="username"
          label="用户名"
          width="150"
        >
        </el-table-column>
        <el-table-column align="center" prop="avatar" label="头像" width="150">
          <template slot-scope="scope">
            <div class="block">
              <el-avatar :size="70" :src="scope.row.avatar"></el-avatar>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="roles" label="角色" width="240">
          <template slot-scope="scope">
            <el-tag v-for="(item, index) in scope.row.roles" :key="index">{{
              item.name
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="email" label="邮箱" width="150">
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="注册时间"
          width="200"
        >
        </el-table-column>
        <el-table-column align="center" prop="status" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="260">
          <template slot-scope="scope">
            <el-button size="mini" plain type="success">编辑</el-button>
            <el-button size="mini" plain type="warning">分配角色</el-button>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelUser(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import breadCrumb from '../../components/Breadcrumb'
import RoleApi from '../../api/roles'

export default {
  name: '',
  components: { breadCrumb },
  data() {
    return {
      current: 1,
      size: 20,
      roleList: []
    }
  },
  created() {
    this.loadRoleList()
  },
  methods: {
    async loadRoleList() {
      const response = await RoleApi.getRoleList({
        current: this.current,
        size: this.size
      })
      console.log(response)
    }
  }
}
</script>
<style scoped lang="scss">
.role-wrapper {
  width: 100%;
  height: 100%;
  .role-content {
    width: 100%;
    height: calc(100vh - 152px);
    background-color: #ffffff;
  }
}
::v-deep(.el-table .cell) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-left: 10px;
  padding-right: 10px;
}
.el-tag {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
