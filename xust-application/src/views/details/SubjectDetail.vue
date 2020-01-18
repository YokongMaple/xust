<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <div class="my-body">
      <div class="left">
        <h3 class="title">帖子标题</h3>
        <div class="message">
          <img class="portrait" src="../../assets/images/tx.jpeg" alt />
          <span class="name">压缩</span>
          <span class="time">2017-5-1发布</span>
        </div>
        <div class="content"></div>
        <div class="replay">
          <ul>
            <li v-for="i in 3" :key="i">
              <div class="replay-message">
                <img
                  class="replay-portrait"
                  src="../../assets/images/tx.jpeg"
                  alt
                />
                <span class="replay-name">压缩</span>
              </div>
              <p class="replay-content">123123</p>
              <div class="tools">
                <i class="el-icon-thumb"></i>
                <el-button type="danger" size="mini">删除</el-button>
              </div>
            </li>
          </ul>
        </div>
        <div class="my-replay">
          <vue-editor v-model="model.body"></vue-editor>
          <el-button style="margin:10px 0" type="success">提交回答</el-button>
        </div>
      </div>
      <div class="right">
        <div class="new"></div>
        <div class="hot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../../components/Home/Top";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import { VueEditor, Quill } from "vue2-editor";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav,
    VueEditor
  },
  data() {
    return {
      model: {}
    };
  }
};
</script>

<style scoped>
.my-body {
  width: 1080px;
  /* height: 100vh; */
  margin: 0 auto;
  /* background-color: pink; */
  display: flex;
}
.left {
  width: 70%;
  height: 100vh;
  /* background-color: red; */
  padding: 10px;
}
.right {
  width: 30%;
  height: 100vh;
  /* background-color: green; */
}
.message {
  width: 100%;
  height: 60px;
  background-color: rgb(231, 227, 227);
  padding: 10px;
}
.portrait {
  height: 100%;
}
.name {
  margin: 0 10px;
  color: rgb(136, 150, 197);
}
.time {
  color: rgb(187, 184, 184);
}
.content {
  min-height: 500px;
  /* background: orange; */
}
.replay ul,
li {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid grey;
}
.replay-message {
  width: 100%;
  height: 60px;
  padding: 10px;
}
.replay-portrait {
  height: 100%;
}
.replay-name {
  padding: 10px;
  color: rgb(136, 150, 197);
}
.replay-content {
  padding: 0 10px;
}
.tools {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.tools i {
  font-size: 20px;
}
.my-replay {
  margin-top: 10px;
}
</style>
