<template>
  <div>
    <h2>提问</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="选择提问人">
        <el-select v-model="model.answerIDS" multiple placeholder="请选择">
          <el-option
            v-for="item in teacherArr"
            :key="item.uuid"
            :label="item.realName"
            :value="item.uuid"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="问题内容">
        <el-input type="textarea" :rows="6" v-model="model.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">提问</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-divider content-position="left">老师回复</el-divider>
    <div v-for="(item, index) in 4" :key="index">
      <div class="teacher-info">
        <el-image style="width: 50px; height: 50px" :src="avatar"></el-image>
        <span>老师姓名</span>
      </div>
      <div class="answer-content">
        1231231213
      </div>
      <el-divider></el-divider>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        answerIDS: [],
      },
      id: "",
      avatar: "",
      teacherArr: [],

      chooseTeacher: [],
    };
  },
  methods: {
    async save() {
      this.model.time = this.$moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      const res = await this.$http.post(
        `http://server.versewow.cn/yunzhi/user/question`,
        this.model
      );
      console.log(res.data);
      if (res.data.status == 1) {
        this.$message.success("提交成功");
        this.model = {};
      }
    },
    async fetchTeacher() {
      const res = await this.$http.get(
        `http://server.versewow.cn/yunzhi/user/getTeachers?majorID=${localStorage.major}`
        // {
        //   // 单独配置
        //   withCredentials: true,
        // }
      );
      this.teacherArr = res.data.data;
    },
  },
  created() {
    this.model.uuid = Number(localStorage.uuid);
    this.fetchTeacher();
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
