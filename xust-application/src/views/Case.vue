<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="case-content">
      <left-side title="学生案例"></left-side>
      <div class="content">
        <el-table :data="caseArray" style="width: 100%" @row-click="goDetails">
          <el-table-column prop="introduction" label="案例名称" width="480"></el-table-column>

          <el-table-column prop="time" label="日期" width="180"></el-table-column>
        </el-table>
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
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar
  },
  data() {
    return {
      caseArray: [],
      total: 0,
      currentPage: 1,
      pageSize: 0
    };
  },
  methods: {
    async fetchCase() {
      const res = await this.$http.get(
        `/tourist/display_examples?pageNum=${this.currentPage}`
      );
      console.log(res.data.data);
      this.caseArray = res.data.data.list;
      this.total = res.data.data.total;
      this.pageSize = res.data.data.pageSize;
    },
    async handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      const res = await this.$http.get(
        `tourist/display_examples?pageNum=${val}`
      );
      this.caseArray = res.data.data.list;
    },
    goDetails(row) {
      console.log(row.id);
      this.$router.push({ name: "case-detail", params: { id: row.id } });
    }
  },
  created() {
    this.fetchCase();
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.case-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center */
}
.content {
  /* background-color: red; */
  width: 100%;
  padding: 0 50px 50px 50px;
  /* border-top: 2px solid grey; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>