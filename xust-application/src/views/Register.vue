<template>
  <div class="register-container">
    <div class="register">
      <div class="title">注册</div>

      <!-- form->提交的对象 -->
      <div class="options">
        <el-select v-model="form.status" placeholder="请选择身份">
          <el-option
            v-for="item in identity"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <input
        class="input"
        placeholder="请输入学号或工号"
        v-model="form.account"
      />

      <input class="input" placeholder="请输入姓名" v-model="form.realName" />

      <input class="input" placeholder="请输入密码" v-model="form.password" />

      <input class="input" placeholder="请确认密码" v-model="repassword" />

      <input class="input" placeholder="请输入邮箱" v-model="form.email" />

      <div>
        <input
          class="input"
          placeholder="请输入验证码"
          style="width:62%"
          v-model="reemail"
        />

        <el-button type="info" @click="sendEmail">
          发送验证码
        </el-button>
      </div>
      <div class="options">
        <el-select v-model="collegeName" placeholder="请选择学院">
          <el-option
            v-for="item in collegeList.data"
            :key="item.id"
            :label="item.collegeName"
            :value="item.id"
          ></el-option>
        </el-select>
      </div>

      <div class="options">
        <el-select
          class="options"
          v-model="form.major"
          placeholder="请选择专业"
        >
          <el-option
            v-for="item in acadamyList.data"
            :key="item.id"
            :label="item.majorName"
            :value="item.id"
          ></el-option>
        </el-select>
      </div>

      <el-button type="warning" class="register-btn" @click="onSubmit">
        注册
      </el-button>
      <div style="text-align:center;margin-top:2em">
        <router-link to="/login">
          <el-link type="primary">点击此处登录</el-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 要提交的数据
      form: {
        // 存放身份 0 学生 1 教师
        // accoutn:'',
        // realName:'',
        // nickName:'',
        // status: null,
        // email: ""
      },
      // 用来做验证的
      email: {},
      repassword: "",
      reemail: "",
      // 存放大学学院信息
      collegeList: {},
      // 大学学院具体名称
      collegeName: "",
      // 存放具体专业名称,
      acadamyList: {},

      // 身份信息下拉框数组
      identity: [
        {
          value: 0,
          label: "学生",
        },
        {
          value: 1,
          label: "教师",
        },
      ],

      major: [
        {
          value: "chinese",
          label: "语文",
        },
        {
          value: "art",
          label: "艺术",
        },
      ],
      value: "",
    };
  },
  methods: {
    async onSubmit() {
      // console.log("submit!");
      if (
        this.email.data === this.reemail &&
        this.form.password === this.repassword
      ) {
        console.log(12312312);

        const res = await this.$http.post(`/user/register`, this.form);
        console.log(res.data.status);
        if (res.data.status == 0) {
          this.$message.error("注册失败-账户或邮箱已被注册请重新输入");
        } else {
          this.$message({
            type: "success",
            message: "注册成功",
          });
          this.$router.push("/login");
        }
      }
    },

    // 发送验证码按钮方法
    sendEmail() {
      this.fetchEmail(this.form.email);
    },
    // 获取验证码
    async fetchEmail(email) {
      const res = await this.$http.get(`/user/email?email=${email}`);
      this.email = res.data;
      if (this.email.status === 1) {
        this.$message({
          type: "success",
          message: "邮件发送成功，请查收",
        });
      }
      // console.log(this.email);
    },
    // 获取学院列表
    async fetchCollage() {
      const res = await this.$http.get(`/user/getAcadamy`);
      this.collegeList = res.data;
      console.log(this.collegeList.data);
    },
    // 获取专业列表
    async fetchAcadamy(id) {
      const res = await this.$http.get(`/user/getMajor?acadamyId=${id}`);
      this.acadamyList = res.data;
    },
  },
  watch: {
    collegeName: function(newVal) {
      this.fetchAcadamy(newVal);
      // console.log(newVal);
    },
  },
  created() {
    this.fetchCollage();
  },
};
</script>

<style>
.register-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/bg-login.jpg") center center;
}
.register {
  width: 350px;
  background-color: rgba(53, 52, 52, 0.89);
  border-radius: 15px;
  padding: 20px;
}
.title {
  /* padding-left: 30px; */
  margin-bottom: 40px;
  font-size: 24px;
  color: white;
  font-weight: bold;
}
.input {
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid rgba(114, 112, 112, 0.842);
  width: 100%;
  height: 3em;
  color: white;
  margin-top: 2em;
}
.options .el-select {
  width: 100%;
  height: 3em;
  margin-top: 2em;
}
.options .el-select .el-input__inner {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(114, 112, 112, 0.842);
  color: #bbc7b6;
  font-size: 16px;
  padding: 0;
}
.input::-webkit-input-placeholder {
  font-size: 16px;
  color: #bbc7b6;
}
.register-btn {
  width: 100%;
  margin-top: 2em;
}
</style>
