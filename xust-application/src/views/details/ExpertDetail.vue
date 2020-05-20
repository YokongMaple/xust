<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../../assets/images/index2.jpg" style="width:100%" alt />
    <div class="expert-content">
      <left-side title="专家智库"></left-side>

      <message
        class="ql-editor"
        :title="content.name"
        :content="content.content"
      ></message>
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

.ql-editor {
  min-height: 200px;
  font-size: 16px;
}
.ql-snow .ql-stroke.ql-thin,
.ql-snow .ql-thin {
  stroke-width: 1px !important;
}
.quillWrapper .ql-snow.ql-toolbar {
  padding-top: 8px;
  padding-bottom: 4px;
}
.quillWrapper .ql-snow.ql-toolbar .ql-formats {
  margin-bottom: 10px;
}
.ql-snow .ql-toolbar button svg,
.quillWrapper .ql-snow.ql-toolbar button svg {
  width: 22px;
  height: 22px;
}
.quillWrapper .ql-editor ul[data-checked="false"] > li::before,
.quillWrapper .ql-editor ul[data-checked="true"] > li::before {
  font-size: 1.35em;
  vertical-align: baseline;
  bottom: -0.065em;
  font-weight: 900;
  color: #222;
}
.quillWrapper .ql-snow .ql-stroke {
  stroke: rgba(63, 63, 63, 0.95);
  stroke-linecap: square;
  stroke-linejoin: initial;
  stroke-width: 1.7px;
}
.quillWrapper .ql-picker-label {
  font-size: 15px;
}
.quillWrapper .ql-snow .ql-active .ql-stroke {
  stroke-width: 2.25px;
}
.quillWrapper .ql-toolbar.ql-snow .ql-formats {
  vertical-align: top;
}
.ql-picker:not(.ql-background) {
  position: relative;
  top: 2px;
}
.ql-picker.ql-color-picker svg {
  width: 22px !important;
  height: 22px !important;
}
.quillWrapper .imageResizeActive img {
  display: block;
  cursor: pointer;
}
.quillWrapper .imageResizeActive ~ div svg {
  cursor: pointer;
}
</style>
