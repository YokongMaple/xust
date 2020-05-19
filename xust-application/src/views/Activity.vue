<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="线下活动">
        <div class="option">
          <div @click="t1">
            <i class="el-icon-collection-tag"></i>
            <span style="margin-right:0.5em">预告</span>
          </div>
          <div @click="t2">
            <i class="el-icon-collection-tag"></i>
            <span style="margin-right:0.5em">进行中</span>
          </div>
          <div @click="t3">
            <i class="el-icon-collection-tag"></i>
            <span style="margin-right:0.5em">已完成</span>
          </div>
        </div>
      </left-side>
      <div class="list">
        <!-- <div v-for="i in 6" :key="i">
          <el-divider></el-divider>
          <div class="list-item">
            <div class="list-img">
              <img src="../assets/images/badge.png" alt />
            </div>
            <div class="list-content">
              <div class="title">2016年荣获先进心理服务单位</div>
              <div
                class="content"
              >正式注册成立正规专业心理服务单位，由多名心理学专家组成专业心理服务机构，2011年-2016年连续六年荣获陕西先进心理服务单位与优秀心理咨询师。心理专家郑敏老师..</div>
            </div>
          </div>
        </div>-->
        <h4>{{ typeName }}</h4>
        <el-table :data="events" style="width: 100%" @row-click="goDetails">
          <el-table-column
            prop="introduction"
            label="活动名称"
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
    LeftSide: SideBar,
  },
  data() {
    return {
      events: [],
      // 总条目数
      total: 0,
      // 当前页面
      currentPage: 1,
      // 一页显示几条
      pageSize: 0,
      type: 1,
      typeName: "预告活动",
    };
  },
  methods: {
    t1() {
      this.type = 1;
      this.typeName = "预告活动";
      this.fetchActivity();
    },
    t2() {
      this.type = 2;
      this.typeName = "进行中活动";
      this.fetchActivity();
    },
    t3() {
      this.type = 3;
      this.typeName = "已完成活动";
      this.fetchActivity();
    },
    async fetchActivity() {
      const res = await this.$http.get(
        `tourist/display_events?type=${this.type}`
      );
      console.log(res.data.data);
      this.events = res.data.data.list;
      // 总条目数
      this.total = res.data.data.list.length;
      console.log("总条目数", this.total);
      // 一页显示几条
      this.pageSize = res.data.data.pageSize;
      console.log(this.pageSize);
    },
    async handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      const res = await this.$http.get(
        `tourist/display_events?type=${this.type}`
      );
      this.policy = res.data.data.list;
    },
    goDetails(row) {
      this.$router.push({ name: "activity-detail", params: { id: row.id } });
    },
  },
  created() {
    this.fetchActivity();
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
  justify-content: flex-start;
}
.list {
  /* background-color: red; */
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list-item {
  /* justify-content: space-between; */
  /* border: 2px solid yellow; */
  margin: 20px 0;
}
.list-content {
  padding-left: 25px;
  display: flex;
  flex-direction: column;
}
.list-content .title {
  font-weight: bold;
  font-size: 1.2em;
  padding-bottom: 10px;
}
.list-img img {
  width: 100px;
  height: 100px;
}

.option {
  margin-top: 200px;
  /* background-color: blue; */
  color: white;
  text-align: right;
}
.option div {
  /* margin-top: 40px; */
  background: #2268b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  height: 50px;
  margin-left: 60px;
}
.option div:hover i {
  color: yellow;
}
</style>
