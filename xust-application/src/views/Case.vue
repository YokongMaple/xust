<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="case-content">
      <left-side title="学生案例"></left-side>
      <div class="content">
        <div style="height:4px;background:grey"></div>
        <router-link tag="div" to="/case/detail" class="list-item" v-for="i in 6" :key="i">
          <div>
            <i class="el-icon-arrow-right"></i>
            <span class="title">寻找灵魂深处的自己---同学</span>
          </div>
          <span class="date">2019/11/11</span>
        </router-link>
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
    return {};
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
}
.content {
  /* background-color: red; */
  width: 100%;
  padding: 0 50px 50px 50px;
  /* border-top: 2px solid grey; */
  margin-top: 50px;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
  padding: 20px 0;
}
.list-item:hover {
  background-color: rgb(231, 225, 225);
}
</style>