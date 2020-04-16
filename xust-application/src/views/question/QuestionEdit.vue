<template>
  <div>
    <h2>提问</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="问题名称">
        <el-input v-model="model.introduction"></el-input>
      </el-form-item>
      <el-form-item label="问题内容">
        <el-input type="textarea" v-model="model.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">提问</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">老师回复</el-divider>
    <div>暂无</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      id: "",
    };
  },
  methods: {
    save() {},
  },
};
</script>

<style></style>
