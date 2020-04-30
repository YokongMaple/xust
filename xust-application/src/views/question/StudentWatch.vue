<template>
  <div>
    <el-card style="margin-top:2em">
      <el-row class="info">
        <el-col :span="6" class="avatar">
          <el-avatar :size="100" :src="model.question.avatarURL"></el-avatar>
        </el-col>
        <el-col :span="12" class="user-info">
          <span>{{ model.question.realName }}</span>
          <span>{{ model.question.content }}</span>
        </el-col>
      </el-row>
      <el-row v-for="(item, index) in 3" :key="index" class="answer">
        <el-divider></el-divider>

        <div class="teacher-header">
          <el-avatar :size="40" :src="model.avatar"></el-avatar>
          <span class="teacher-name">老师姓名</span>
          <span class="teacher-time"> 时间</span>
        </div>
        <div class="teacher-answer">
          老师回复的内容 老师回复的内容 老师回复的内容 老师回复的内容
          老师回复的内容 老师回复的内容 老师回复的内容
          <div style="display:flex;justify-content:flex-end">
            <el-button size="small" type="">回复</el-button>
          </div>
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
                  <el-avatar :size="40" :src="model.avatar"></el-avatar>
                  <span class="student-name">学生姓名</span>
                  <span class="student-time"> 时间</span>
                </div>
                <div class="student-replay">
                  5655555555555555555555555555555
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
      model: {},
      activeNames: "",
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
  },
  created() {
    this.fetchData();
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
