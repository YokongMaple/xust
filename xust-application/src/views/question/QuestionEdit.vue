<template>
  <div>
    <h2>提问</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="选择提问人">
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="问题内容">
        <el-input type="textarea" v-model="model.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">提问</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">老师回复</el-divider>
    <div v-for="(item, index) in 4" :key="index">
      <div class="teacher-info">
        <el-image style="width: 50px; height: 50px" :src="avatar"></el-image>
        <span>老师姓名</span>
      </div>
      <div class="answer-content">
        1231231213
      </div>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      id: "",
      avatar: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
    };
  },
  methods: {
    save() {},
  },
};
</script>

<style>
.teacher-info span {
  vertical-align: top;
  font-size: 12px;
  margin-left: 5px;
}
.answer-content {
  margin-top: 15px;
  background: #ddff44;
  margin-left: 50px;
  font-size: 12px;
}
</style>
