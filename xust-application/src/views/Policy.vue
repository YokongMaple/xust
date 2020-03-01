<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="政策流程"></left-side>
      <div class="list">
        <el-table :data="policy" style="width: 100%" @row-click="goDetails">
          <el-table-column prop="introduction" label="政策名称" width="480"></el-table-column>

          <el-table-column prop="time" label="日期" width="180"></el-table-column>
        </el-table>
        <!-- :page-sizes="pageSizes" -->
        <!-- <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="PageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount"
          ></el-pagination>
        </div>-->

        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/Home/Top";

import Banner from "../components/Banner";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";

export default {
  data() {
    return {
      policy: [],
      // 总条目数
      total: 0,
      // 当前页面
      currentPage: 1,
      // 一页显示几条
      pageSize: 0
    };
  },
  methods: {
    async fetchPolicy() {
      const res = await this.$http.get(
        `tourist/display_policys?pageNum=${this.currentPage}`
      );
      console.log(res.data.data);
      this.policy = res.data.data.list;
      // 总条目数
      this.total = res.data.data.total;
      console.log("总条目数", this.total);
      // 一页显示几条
      this.pageSize = res.data.data.pageSize;
      console.log(this.pageSize);
    },
    async handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      const res = await this.$http.get(
        `tourist/display_policys?pageNum=${val}`
      );
      this.policy = res.data.data.list;
    },
    goDetails(row) {
      this.$router.push({ name: "policy-detail", params: { id: row.id } });
    }
  },
  created() {
    this.fetchPolicy();
  },
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar
  }
};
</script>

<style scoped>
body {
  /* background: url(); */
}
.policy-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  /* flex-direction:  */
  justify-content: flex-start;
}
.list {
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
