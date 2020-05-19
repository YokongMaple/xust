<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="咨询服务"></left-side>
      <div class="ask">
        <el-button v-if="status == 0" @click="ask">提问</el-button>
        <el-button v-if="status == 0" @click="myQuestion">我的问题</el-button>
        <el-button v-if="status == 1" @click="teacherQuestion"
          >老师问题</el-button
        >
        <!-- <el-button @click="answer">回复</el-button> -->
        <!-- <el-button @click="studentWatch">学生查看</el-button>
        <el-button @click="teacherWatch">教师查看</el-button> -->
        <router-view></router-view>
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
      pageSize: 0,
      model: {},
      id: {},
      status: "",
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
    teacherQuestion() {
      this.$router.push("/question/teacher-list");
    },
    answer() {
      this.$router.push("/answer");
    },
    studentWatch() {
      this.$router.push("/student_watch");
    },
    teacherWatch() {
      this.$router.push("/teacher_watch");
    },
  },
  created() {
    this.fetchPolicy();
    this.status = localStorage.status;
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
