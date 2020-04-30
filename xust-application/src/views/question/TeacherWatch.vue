<template>
  <div>
    <el-card header="问题" style="margin-top:2em">
      <el-row class="info">
        <el-col :span="6" class="avatar">
          <el-avatar :size="100" :src="model.question.avatarUrl"></el-avatar>
        </el-col>
        <el-col :span="12" class="user-info">
          <span>{{ this.model.question.realName }}</span>
          <span>{{ this.model.question.content }}</span>
        </el-col>
      </el-row>
      <div v-if="!model.answer">
        <el-divider></el-divider>

        <div>暂无回复</div>
      </div>

      <el-row v-else class="answer">
        <el-divider></el-divider>

        <div class="teacher-header">
          <el-avatar :size="40" :src="avatar"></el-avatar>
          <span class="teacher-name">老师姓名</span>
          <span class="teacher-time"> 时间</span>
        </div>
        <div class="teacher-answer">
          老师回复的内容 老师回复的内容 老师回复的内容 老师回复的内容
          老师回复的内容 老师回复的内容 老师回复的内容

          <el-collapse v-model="activeNames">
            <el-collapse-item
              style="margin-top:0.5em;border:none"
              title="子评论"
              name="1"
            >
              <div
                v-for="(item, index) in 2"
                :key="index"
                class="child-comments"
              >
                <el-divider></el-divider>
                <div class="student-header">
                  <el-avatar :size="40" :src="avatar"></el-avatar>
                  <span class="student-name">学生姓名</span>
                  <span class="student-time"> 时间</span>
                </div>
                <div class="student-replay">
                  content
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-row>
      <el-row class="answer-question">
        <el-divider content-position="left">回复</el-divider>
        <el-form @submit.native.prevent="save">
          <el-form-item>
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="" @click="save">提交</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      avatar: "",

      model: {
        question: {
          avatarUrl: "",
        },
      },
      form: {
        time: "",
        questionID: null,
      },
      activeNames: "",
    };
  },
  methods: {
    async fetchData() {
      const res = await this.$http.get(
        `http://server.versewow.cn/yunzhi/user/teacher_detail?questionID=${this.id}&uuid=${localStorage.uuid}`
      );
      console.log(res.data);
      this.model = res.data.data;
    },
    async save() {
      this.form.time = this.$moment(new Date()).format("YYYY-MM-DD");

      const res = await this.$http.post(
        `http://server.versewow.cn/yunzhi/user/teacher_comment`,
        this.form
      );
      console.log(res);
    },
  },
  created() {
    this.fetchData();
    this.form.questionID = Number(this.id);
    this.form.uuid = Number(localStorage.uuid);
    if (!this.model.answer) {
      this.form.answerID = Number(-1);
    } else {
      console.log(123);
    }
  },
};
</script>

<style>
.info {
  height: 200px;
}
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
}
.teacher-header {
  display: flex;
  align-items: center;
}
.teacher-answer {
  margin-top: 0.5em;
}
.student-header {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.teacher-name,
.student-name,
.teacher-time,
.student-time {
  margin-left: 1em;
  font-size: 14px;
  color: gray;
}
.student-name,
.student-time {
  font-size: 12px;
}
.child-comments {
  margin-left: 60px;
}
.student-replay {
  margin-top: 0.5em;
  font-size: 12px;
}
</style>
