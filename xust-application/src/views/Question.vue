<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <div class="container">
      <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <vue-editor v-model="model.body"></vue-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Top from "../components/Home/Top";

import Banner from "../components/Banner";
import Nav from "../components/Nav";
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

<style>
.container {
  width: 1080px;
  margin: 0 auto;
  padding: 10px 0;
}
</style>
