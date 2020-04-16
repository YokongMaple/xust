<template>
  <div>
    <h1>账户列表</h1>
    <!-- 搜索 -->
    <el-row style="margin-bottom:20px" class="mysearch">
      <el-col :span="8">
        <el-input
          @keyup.enter.native="search"
          v-model="searchData"
          placeholder="请输入姓名、账户、专业"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="searchActive">查询激活</el-button>
      </el-col>
    </el-row>

    <!-- 获取到数据 -->
    <el-table :data="list">
      <!-- items._id -->
      <el-table-column prop="account" label="账户"></el-table-column>
      <el-table-column prop="realName" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <!-- <el-table-column label="学院">
        <template slot-scope="scope">
          {{ getCollege(scope.row.uuid) }}
        </template>
      </el-table-column> -->

      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          {{ scope.row.isActivate == 0 ? "未激活" : "已激活" }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        class="abc"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      list: [],
      searchData: "",
      // 总共数据书
      total: null,
      // 每页多少条数据
      pageSize: 5,
      // 当前在第几页
      currentPage: 1,
      collegeList: [],
      majorList: [],
      // 具体专业名称
      acadamyList: {},
    };
  },
  methods: {
    async fetchAccount() {
      const res = await this.$http.get(`/queryAll`);
      this.items = res.data.data;
      this.getList();
    },
    async remove(row) {
      console.log(row.id);
      this.$confirm(`是否确定要删除"${row.introduction}"`, "提示", {
        confirmButtonText: "ok",
        cancelButtonText: "cancel",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.get(`/delete_example?exampleId=${row.id}`);
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.fetchAccount();
      });
    },
    // 获取学院列表
    async fetchCollage() {
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/user/getAcadamy`
      );
      this.collegeList = res.data.data;
    },
    getCollege(value) {
      let college;
      for (let index = 0; index < this.collegeList.length; index++) {
        const element = this.collegeList[index];
        if (value == element.id) {
          college = element;
          return college.collegeName;
        }
      }
    },
    getMajor(value1, value2) {
      console.log(this.majorList);
      return "123";
      // console.log(major);
    },
    // 获取专业
    async fetchMajor(value) {
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/user/getMajor?acadamyId=${value}`
      );
      console.log(res.data.data);
      this.majorList = res.data.data;
    },

    // -------------------------
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
      console.log(this.list);
      console.log(`当前页: ${val}`);
    },
    search() {
      this.page = 1;
      this.getList();
      // console.log(this.list);
    },
    searchActive() {
      this.page = 1;

      // 通过filter方法过滤得到满足搜索条件的展示数据
      let list = this.items.filter((item, index) => {
        // console.log(item);
        console.log(item.isActivate);
        return item.isActivate == 1;
        // return true;
      });
      this.list = list;
      // 过滤分页
      this.list = list.filter((item, index) => {
        return (
          index < this.currentPage * this.pageSize &&
          index >= this.pageSize * (this.currentPage - 1)
        );
      });
      // 分页的总数据
      this.total = list.length;
      // console.log(this.list);
      // 过滤分页
    },
    getList() {
      // 通过filter方法过滤得到满足搜索条件的展示数据
      let list = this.items.filter((item, index) => {
        // console.log(item);
        return (
          item.account.includes(this.searchData) ||
          item.realName.includes(this.searchData)
          // item.isActive.includes(this.searchData)
        );
        // return true;
      });
      this.list = list;
      // 过滤分页
      this.list = list.filter((item, index) => {
        return (
          index < this.currentPage * this.pageSize &&
          index >= this.pageSize * (this.currentPage - 1)
        );
      });
      // 分页的总数据
      this.total = list.length;
      // console.log(this.list);
      // 过滤分页
    },
  },
  created() {
    this.fetchAccount();
    this.fetchCollage();
  },
  watch: {
    searchData(value) {
      if (value == "") {
        this.search();
      }
    },
    // collegeName: function(newVal) {
    //   this.fetchMajor(newVal);
    //   // console.log(newVal);
    // },
  },
  computed: {},
};
</script>
