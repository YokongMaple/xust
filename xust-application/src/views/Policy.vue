<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="政策流程"></left-side>
      <div class="list">
        <div v-for="item in policy" :key="item.id">
          <router-link tag="div" :to="{name:'policy-detail',params:{id:item.id}}">
            <el-divider></el-divider>
            <div class="list-item">
              <div class="list-img">
                <img src="../assets/images/badge.png" alt />
              </div>
              <div class="list-content">
                <div class="title">{{item.introduction}}</div>
                <div class="content">{{item.content}}</div>
              </div>
            </div>
          </router-link>
        </div>
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
      policy: []
    };
  },
  methods: {
    async fetchPolicy() {
      const res = await this.$http.get(
        "http://49.232.138.118:8080/yunzhi/admin/display_policys"
      );
      this.policy = res.data.data;
      // console.log(res.data.data);
    }
  },
  created() {
    this.fetchPolicy();
    // console.log(typeof this.policy);
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
  justify-content: flex-start;
}
.list {
  /* background-color: red; */
  flex: 1;
  padding: 50px;
}
.list-item {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
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
</style>
