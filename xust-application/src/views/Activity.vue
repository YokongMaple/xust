<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="线下活动">
        <div class="option">
          <div>
            <i class="el-icon-collection-tag"></i>
            <span>预告</span>
          </div>
          <div>
            <i class="el-icon-collection-tag"></i>进行中
          </div>
          <div>
            <i class="el-icon-collection-tag"></i>已完成
          </div>
        </div>
      </left-side>
      <div class="list">
        <div v-for="i in 6" :key="i">
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