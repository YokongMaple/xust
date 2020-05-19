<template>
  <div>
    <el-card style="margin-top:2em">
      <el-row class="info">
        <el-col :span="6" class="avatar">
          <el-avatar :size="100" :src="model.question.avatarUrl"></el-avatar>
        </el-col>
        <el-col :span="12" class="user-info">
          <span>{{ model.question.realName }}</span>
          <span>{{ model.question.content }}</span>
        </el-col>
      </el-row>
      <div v-if="!model.answers.length">
        <el-divider></el-divider>

        <div>暂无回复</div>
      </div>

      <el-row
        v-for="(item, index) in model.answers"
        :key="index"
        v-else
        class="answer"
      >
        <el-divider></el-divider>

        <div class="teacher-header">
          <el-avatar :size="40" :src="item.first.avatarUrl"></el-avatar>
          <span class="teacher-name">{{ item.first.realName }}</span>
          <span class="teacher-time">
            {{ timeChange(item.first.time) }}
          </span>
        </div>
        <div class="teacher-answer">
          <div style="margin-bottom:1em">
            {{ item.first.content }}
          </div>
          <div style="display:flex;justify-content:flex-end">
            <el-button size="small" type="text" @click="studentComment(index)"
              >回复</el-button
            >
          </div>
          <el-collapse v-model="activeNames">
            <el-collapse-item
              style="margin-top:0.5em;border:none"
              title="子评论"
              :name="item.first.realName"
            >
              <div
                v-for="(item2, index2) in item.other"
                :key="index2"
                class="child-comments"
              >
                <el-divider></el-divider>
                <div class="student-header">
                  <el-avatar :size="40" :src="item2.avatarUrl"></el-avatar>
                  <span class="student-name">{{ item2.realName }}</span>
                  <span class="student-time">
                    {{ timeChange(item2.time) }}</span
                  >
                </div>
                <div class="student-replay">
                  {{ item2.content }}
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
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
      model: {
        answers: [],
      },
      activeNames: "",
      form: {
        time: "",
        questionID: null,
      },
    };
  },
  methods: {
    async fetchData() {
      const res = await this.$http.get(
        `http://server.versewow.cn/yunzhi/user/detail_question?questionID=${this.id}`
      );
      this.model = res.data.data;
      console.log("详细数据", res.data);
    },
    async studentComment(index) {
      this.$prompt("请输入回复", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputType: "textarea",
      })
        .then(async ({ value }) => {
          this.form.time = this.$moment(new Date()).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          this.form.content = value;
          this.form.answerID = this.model.answers[index].first.id;
          const res = await this.$http.post(
            `http://server.versewow.cn/yunzhi/user/student_comment`,
            this.form
          );

          this.$message({
            type: "success",
            message: "回复成功",
          });
          this.fetchData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    timeChange(value) {
      return this.$moment(value).format("YYYY-MM-DD HH:mm");
    },
  },
  created() {
    this.fetchData();

    this.form.questionID = Number(this.id);
    this.form.uuid = Number(localStorage.uuid);
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
.el-textarea__inner {
  height: 150px;
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
el-avatar img {
  width: 100%;
}
</style>
