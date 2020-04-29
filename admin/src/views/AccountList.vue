<template>
  <div>
    <h1>账号列表</h1>
    <el-form>
      <el-row>
        <el-col :span="6">
          <el-form-item label="学院">
            <el-select v-model="collegeName" placeholder="请选择">
              <el-option
                v-for="item in collegeList.data"
                :key="item.id"
                :label="item.collegeName"
                :value="item.id"
              ></el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="身份">
            <el-select v-model="status" placeholder="请选择">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="激活状态">
            <el-select v-model="isActivate" placeholder="请选择">
              <el-option
                v-for="item in active"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item>
            <el-input
              v-model="searchData"
              placeholder="请输入查询内容"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="fuzzyQuery">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-button @click="batchActive">批量激活</el-button>
        </el-col>
        <el-col :span="2">
          <el-button @click="batchDelete">批量删除</el-button>
        </el-col>
      </el-row>
    </el-form>

    <!-- 获取到数据 -->
    <el-table
      @selection-change="handleSelectionChange"
      ref="multipleTable"
      :data="items"
    >
      <!-- items._id -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="account" label="账号"></el-table-column>

      <el-table-column prop="realName" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="激活状态">
        <template slot-scope="scope">
          {{ scope.row.isActive == 0 ? "未激活" : "已激活" }}
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/accounts/create/${scope.row.uuid}`)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询数据
      searchData: "",
      // 多选数据
      tableDataAmount: [],
      // 学生身份
      status: null,
      // 学院名
      collegeName: null,
      // 是否激活,
      isActivate: 0,
      items: [],
      // 存放大学学院信息
      collegeList: {},

      value: "",
      // 身份信息下拉框数组
      identity: [
        {
          value: 0,
          label: "学生",
        },
        {
          value: 1,
          label: "教师",
        },
      ],
      active: [
        { value: 0, label: "未激活" },
        { value: 1, label: "已激活" },
      ],
      // 分页相关
      total: 0,
      currentPage: 1,
      pageSize: 0,
    };
  },
  methods: {
    // async fetchExample() {
    //   const res = await this.$http.get(`/display_examples`);
    //   // console.log(res.data.data);
    //   this.items = res.data.data;
    // },
    // 模糊查询
    async fuzzyQuery() {
      // this.items = [];
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/admin/query?pageNum=${this.currentPage}&key=${this.searchData}`
      );
      console.log(res);
      this.items = res.data.data.list;
      this.total = res.data.data.total;
      this.pageSize = res.data.data.pageSize;
    },

    async fetchCollage() {
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/user/getAcadamy`
      );
      this.collegeList = res.data;
      console.log(this.collegeList.data);
    },
    async search() {
      this.items = [];
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/admin/query_users?acadamyID=${this.collegeName}&status=${this.status}&pageNum=${this.currentPage}&isActivate =${this.isActivate}`
      );
      this.items = res.data.data.list;
      this.total = res.data.data.total;
      this.pageSize = res.data.data.pageSize;
    },
    // 选中事件 得到选中的数据
    handleSelectionChange(data) {
      console.log(data);
      this.tableDataAmount = data;
    },
    async handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/admin/query_users?acadamyID=${this.collegeName}&status=${this.status}&pageNum=${val}&isActivate =${this.isActivate}`
      );
      this.items = res.data.data.list;
    },
    // 批量激活
    async batchActive() {
      let arr = this.tableDataAmount.map((item) => item.uuid);
      console.log(arr);
      const res = await this.$http.post(
        "http://49.232.138.118:8080/yunzhi/admin/activate_users",
        arr
      );
      this.$message.success("批量激活成功");
      this.search();
    },
    // 批量删除
    async batchDelete() {
      let arr = this.tableDataAmount.map((item) => item.uuid);
      console.log(arr);
      const res = await this.$http.post(
        "http://49.232.138.118:8080/yunzhi/admin/delete_users",
        arr
      );
      this.$message.success("批量删除成功");
      this.search();
      console.log(res);
    },
  },
  created() {
    this.fetchCollage();
  },
};
</script>
