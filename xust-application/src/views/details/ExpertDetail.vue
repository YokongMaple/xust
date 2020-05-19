<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../../assets/images/index2.jpg" style="width:100%" alt />
    <div class="expert-content">
      <left-side title="专家智库"></left-side>

      <message :title="content.name" :content="content.content"></message>
    </div>
  </div>
</template>

<script>
import Top from "../../components/Home/Top";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import Message from "../../components/Message";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar,
    Message,
  },
  data() {
    return {
      content: {},
    };
  },
  methods: {
    async fetchTeacher() {
      const res = await this.$http.get(
        `/tourist/query_teacher?id=${this.$route.params.id}`
      );
      // console.log(res.data.data);
      console.log(res.data.data);
      this.content = res.data.data;
      console.log(this.content);
    },
  },
  created() {
    this.fetchTeacher();
  },
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
</style>
