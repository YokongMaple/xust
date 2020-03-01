<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="expert-content">
      <left-side title="专家智库"></left-side>

      <el-row class="container">
        <div class="teacher">
          <router-link
            :to="{ name: 'expert-detail', params: {id: item.id }}"
            v-for="item in teacher"
            :key="item.id"
            class="pic"
          >
            <!-- <span>{{item.image}}</span> -->
            <el-card :body-style="{ padding: '0px' }">
              <img style="height:188px;width:100%" :src="item.image" class="image" />
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
              </div>
            </el-card>
          </router-link>
        </div>

        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
        ></el-pagination>
      </el-row>
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
      teacher: [],
      // 总条目数
      total: 0,
      // 当前页面
      currentPage: 1,
      // 一页显示几条
      pageSize: 0
    };
  },
  methods: {
    async fetchTeacher() {
      const res = await this.$http.get("/tourist/display_teachers");
      this.teacher = res.data.data.list;

      // console.log(this.teacher);
      // 总条目数
      this.total = res.data.data.total;
      // console.log("总条目数", this.total);
      // 一页显示几条
      this.pageSize = res.data.data.pageSize;
      // console.log(this.pageSize);
    },
    async handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      const res = await this.$http.get(
        `tourist/display_teachers?pageNum=${val}`
      );
      this.teacher = res.data.data.list;
    }
  },
  created() {
    this.fetchTeacher();
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.expert-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.teacher {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
}
.pic {
  width: 33%;

  padding: 25px;
  text-align: center;
  /* margin: 10px; */
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>