<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>管理
          </template>
          <el-menu-item-group>
            <template slot="title">专家管理</template>
            <el-menu-item index="/expert/create">专家编辑</el-menu-item>
            <el-menu-item index="/expert/list">专家列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">政策管理</template>
            <el-menu-item index="/policy/create">政策编辑</el-menu-item>
            <el-menu-item index="/policy/list">政策列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">活动管理</template>
            <el-menu-item index="/activity/create">活动编辑</el-menu-item>
            <el-menu-item index="/activity/list">活动列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">案例管理</template>
            <el-menu-item index="/case/create">案例编辑</el-menu-item>
            <el-menu-item index="/case/list">案例列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">简介管理</template>
            <el-menu-item index="/introduction/create">简介编辑</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">意见管理</template>
            <!-- <el-menu-item index="/option/create">查看意见</el-menu-item> -->
            <el-menu-item index="/option/list">意见列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">论坛管理</template>
            <el-menu-item index="1-1">论坛编辑</el-menu-item>
            <el-menu-item index="1-2">论坛列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">账户管理</template>
            <el-menu-item index="/accounts/create">账号编辑</el-menu-item>
            <el-menu-item index="/accounts/list">账户列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员管理</template>
            <el-menu-item index="/admins/create">管理员编辑</el-menu-item>
            <el-menu-item index="/admins/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>欢迎{{ $store.state.isLogin }}</span>
      </el-header>

      <el-main>
        <router-view></router-view>
        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  methods: {
    handleCommand(command) {
      localStorage.removeItem("isLogin");
      this.$router.push("/login");
    },
  },
};
</script>
