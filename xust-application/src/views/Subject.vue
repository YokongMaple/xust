<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <div class="subject-content">
      <div class="menu">
        <el-input
          style="width:300px"
          prefix-icon="el-icon-search"
          placeholder="搜索"
        ></el-input>
        <router-link to="/question"
          ><el-button type="success">发布问题</el-button></router-link
        >
      </div>
      <ul style="padding:0px">
        <router-link
          tag="li"
          to="/subject/detail"
          style="padding:10px 0;border-bottom:1px solid grey;"
          v-for="i in 6"
          :key="i"
        >
          <div class="list-item">
            <div class="left">
              <img
                style="width:48px;margin-right:10px;"
                src="../assets/images/tx.jpeg"
                alt
              />
              <div class="tool">
                <div class="top">
                  <span class="title" style=";margin-right:10px;"
                    >xxx社区页面模板</span
                  >
                </div>
                <div class="user-item">
                  <span class="user" style="width:48px;margin-right:10px;"
                    >飞机</span
                  >
                  <span class="time">30minutes ago</span>
                </div>
              </div>
            </div>
            <div class="right">
              <i class="el-icon-chat-dot-square"></i>
              <span style="margin-left:5px">541</span>
            </div>
          </div>
        </router-link>
      </ul>
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
    MyNav: Nav
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.subject-content {
  width: 1080px;
  /* background-color: pink; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border-top: 1px solid rgb(201, 200, 200);
  padding: 10px 0;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  align-items: center;
}
.tool {
  display: flex;
  flex-direction: column;
}
.user-item {
  font-size: 13px;
  color: grey;
}
</style>
