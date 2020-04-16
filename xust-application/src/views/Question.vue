<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="咨询服务"></left-side>
      <div class="ask">
        <el-button @click="ask">提问</el-button>
        <el-button @click="myQuestion">我的问题</el-button>
        <el-button @click="answer">回复</el-button>
        <router-view></router-view>
        <!-- <h2>提问</h2>
        <el-form label-width="120px" @submit.native.prevent="save">
          <el-form-item label="问题名称">
            <el-input v-model="model.introduction"></el-input>
          </el-form-item>
          <el-form-item label="问题内容">
            <el-input type="textarea" v-model="model.content"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" native-type="submit">提问</el-button>
          </el-form-item>
        </el-form>
        <el-divider content-position="left">老师回复</el-divider>
        <div>暂无</div> -->
      </div>
      <!-- <div class="list">
        <el-table :data="policy" style="width: 100%" @row-click="goDetails">
          <el-table-column
            prop="introduction"
            label="政策名称"
            width="480"
          ></el-table-column>

          <el-table-column
            prop="time"
            label="日期"
            width="180"
          ></el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
        ></el-pagination>
      </div> -->
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
      pageSize: 0,
      model: {},
      id: {},
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
    },
    ask() {
      this.$router.push("/question/create");
    },
    myQuestion() {
      this.$router.push("/question/list");
    },
    answer() {
      this.$router.push("/answer");
    },
  },
  created() {
    this.fetchPolicy();
  },
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar,
  },
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
.ask {
  flex: 1;
  padding: 50px;
  /* background: red; */
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
