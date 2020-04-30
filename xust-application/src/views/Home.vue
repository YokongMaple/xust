// 主界面
<template>
  <div class="home">
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <!-- 轮播图 -->
    <div class="swiper">
      <el-carousel type="card" height="380px">
        <el-carousel-item v-for="item in imgArr" :key="item.title">
          <img :src="item.url" class="carousel_image_type" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="notice">
      <div class="notice-title">
        <a style="color:white">公告</a>
        <span class="more">更多</span>
      </div>
      <div class="notice-content">
        <!-- 小轮播图 -->
        <div class="left-swiper">
          <swiper class="swiper-container">
            <swiper-slide v-for="i in 6" :key="i">
              <img src="../assets/images/bgc6.jpg" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div id="notice-list">
          <div class="text-notice">
            <ul>
              <li class="row" v-for="i in 5" :key="i">
                <a href="#" class="notice-item" target="_blank"
                  >2019级新生心理健康教育</a
                >
                <span class="date">09-01</span>
              </li>
            </ul>
          </div>
        </div>
        <div @click="fn" class="notice-intro">
          <el-card shadow="never" class="intro-box-card">
            <div slot="header" class="clearfix">
              <span>关于我们</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >更多</el-button
              >
            </div>
            <div class="text item msg">
              基于当前网络信息技术发展、人际交往空间变化，当代大学生从入校到毕业，在校期间面临的学校认同、专业认知、角色定位，学业规划、课程选择、学习方法、学习目标，人际交往、父母沟通、异性相处、师生关系处理，四六级等考证，参加科技竞赛、社团、文体活动、社会实践、创新创业比赛等，培养兴趣、涵养性格、自我完善、发挥特长，择业就业、考研，考公务员职业确定等各种各样问题...
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- <div class="hot">
      <div class="hot-title">
        <a>最热专题讨论</a>
        <span class="more">更多</span>
      </div>
      <div class="hot-content">
        <el-card class="hot-box-card" v-for="i in 6" :key="i">
          <div slot="header" class="clearfix">
            <span>专题1</span>
          </div>
          <div class="text item">33333</div>
        </el-card>
      </div>
    </div> -->
    <foot></foot>
  </div>
</template>

<script>
// import HeaderBar from "../components/Home/HeaderBar";
import Top from "../components/Home/Top";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Foot from "../components/Home/Foot";
export default {
  name: "headerbar",
  data() {
    return {
      imgArr: [
        {
          url: require("../assets/images/bgc6.jpg"),
          title: "1",
        },
        {
          url: require("../assets/images/bg-login.jpg"),
          title: 2,
        },
        {
          url: require("../assets/images/bg_login2.jpg"),
          title: 3,
        },
      ],
    };
  },
  components: {
    // HeaderBar,
    Top,
    Banner,
    MyNav: Nav,
    Foot,
  },
  methods: {
    fn() {
      // console.log("home");
      // console.log(this.$store.state.loginMessage);
      // localStorage.getItem("loginStatus");
    },
  },
  mounted() {
    this.fn();
  },
};
</script>

<style scoped>
a {
  list-style: none;
  /* color: white; */
}
.notice {
}
.notice-title {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2268b3;
  color: #fff;
  font-size: 27px;
  position: relative;
}
.notice-content {
  width: 1080px;
  height: 360px;
  margin: 0 auto;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.notice-list {
  width: 25%;
}
.notice-list a {
  color: black !important;
}
.text-notice {
  line-height: 40px;
}
.row {
  border-bottom: 1px dashed #a5a5a5;
  line-height: 44px;
  width: 400px;
  font-size: 15px;
  background: url("../assets/images/flibg.png") no-repeat 0 center;
  padding-left: 18px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.msg {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
.notice-intro {
  width: 300px;
  height: 290px;

  background-color: #fff;
  /*#BFE0F9*/
  color: white;
}
.intro-box-card {
  border: none;
}
.hot-title {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2268b3;
  color: #fff;
  font-size: 27px;
  position: relative;
}
.hot-content {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  width: 1080px;
}
.more {
  position: absolute;
  right: 20px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.hot-box-card {
  width: 25%;
  margin: 20px;
  text-align: center;
}

/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.carousel_image_type {
  width: 100%;
  height: 100%;
  background-position: 100% 100%;
  background-size: cover;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.left-swiper {
  width: 370px;
  height: 100%;
  /* border: 1px solid black; */
  padding: 50px 0;
  /* background-color: pink; */
}
.swiper-container {
  /* padding: 4px; */
  margin: 4px;
  border: 2px solid grey;
  overflow: hidden;
}
.left-swiper img {
  width: 100%;
}
</style>
