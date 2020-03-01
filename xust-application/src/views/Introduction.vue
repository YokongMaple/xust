<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="introduction">驿站简介</div>
    <div class="introduction-content">
      <div class="content-inner" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Top from "../components/Home/Top";

import Banner from "../components/Banner";
import Nav from "../components/Nav";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    async fetchContent() {
      const res = await this.$http.get("/tourist/query_introduction");
      console.log(res.data);
      this.content = res.data.data.content;
    }
  },
  created() {
    this.fetchContent();
  }
};
</script>

<style scoped>
body {
  /* background: url(); */
}
.introduction {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #2268b3;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.content-inner {
  width: 660px;
  margin: 50px auto;
  padding: 0 50px;
  line-height: 50px;
  font-size: 18px;
  text-indent: 2em;
  border-left: 2px solid lightblue;
  border-right: 2px solid lightblue;
}
</style>