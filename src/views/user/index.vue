<template>
  <div class="user-wrapper">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    <div class="user-content">
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
            <el-button
              type="success"
              icon="el-icon-search"
              @click="handleUserFormQuery"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 新增 -->
        <el-button
          type="primary"
          icon="el-icon-edit"
          @click="handleOpenDialogForm('add')"
          >新增</el-button
        >
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
              :value="scope.row.status == 1 ? true : false"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="260">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              type="success"
              @click="handleOpenDialogForm('edit', scope.row.id)"
              >编辑</el-button
            >
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

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current"
        :page-sizes="[20, 30, 50, 70]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>

      <!-- <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">click 激活</el-button>
      </el-popover> -->

      <!-- 弹出框 -->
      <el-dialog
        :title="dialog_Title"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleResetForm"
        center
      >
        <el-form
          :model="dialogForm"
          :rules="rules"
          ref="dialogFormRef"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="头像" prop="avatar">
            <el-avatar :size="70" :src="dialogForm.avatar"></el-avatar>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="dialogForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="dialogForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="dialogForm.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-radio-group v-model="dialogForm.status">
              <el-radio :value="1">启用</el-radio>
              <el-radio :value="0">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleResetForm">取消</el-button>
            <el-button type="success" @click="handleSureDialogForm"
              >确定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import breadCrumb from '../../components/Breadcrumb'
import UserApi from '../../api/user'
import rules from './rules'

export default {
  name: '',
  components: { breadCrumb },
  data() {
    return {
      userForm: { username: '' },
      size: 20,
      current: 1,
      total: 0,
      userList: [],
      dialogVisible: false,
      dialogForm: {
        avatar:
          'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-5a307996-…944b0d18/94d8e009-b183-4d54-a389-724181af5362.jpg',
        username: '',
        password: '',
        email: '',
        status: 0
      },
      rules,
      dialog_Title: '新增用户'
    }
  },
  created() {
    this.loadUserList()
  },
  methods: {
    // 获取用户列表
    async loadUserList() {
      try {
        const { records, current, size, total } = await UserApi.getUserList({
          size: this.size,
          current: this.current,
          username: this.userForm.username
        })
        this.pageSize = size
        this.pageNum = current
        this.total = total
        this.userList = records
      } catch (error) {
        console.log(error)
      }
    },
    // 查询用户
    async handleUserFormQuery() {
      try {
        this.loadUserList()
      } catch (error) {
        console.log(error)
      }
    },
    // 删除用户
    handleDelUser(id) {},
    // 关闭模态框
    handleResetForm() {
      this.dialogVisible = false
      this.$refs.dialogFormRef.resetFields()
    },
    // 打开对话框
    handleOpenDialogForm(action, id) {
      this.dialogVisible = true
      this.dialog_Title = action === 'add' ? '新增用户' : '编辑用户'
      if (action === 'edit') return this.handleBackfill(id)
    },
    // 添加用户
    async handleAddDialogForm() {
      try {
        const response = await UserApi.addUser(this.dialogForm)
        this.loadUserList()
        this.dialogVisible = false
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    // 数据回填
    async handleBackfill(id) {
      try {
        const row = await UserApi.findUser(id)
        this.dialogForm = row
      } catch (error) {
        console.log(error)
      }
    },
    // 编辑用户
    async handleEditDialogForm() {
      try {
        const res = await UserApi.updateUser(this.dialogForm)
        this.loadUserList()
        this.dialogVisible = false
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    // 确定按钮
    handleSureDialogForm() {
      this.dialog_Title === '新增用户'
        ? this.handleAddDialogForm()
        : this.handleEditDialogForm()
    },
    // 分页
    handleSizeChange(val) {
      this.size = val
      this.loadUserList()
    },
    handleCurrentChange(val) {
      this.current = val
      this.loadUserList()
    }
  }
}
</script>
<style scoped lang="scss">
.user-wrapper {
  width: 100%;
  height: 100%;
  .user-content {
    padding: 20px;
    width: 100%;
    // height: calc(100vh - 152px);
    background-color: #ffffff;
    box-sizing: border-box;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
