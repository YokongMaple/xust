<template>
  <div class="register-container">
    <div class="register">
      <div class="title">注册</div>
      <el-divider></el-divider>
      <el-form ref="form" class="content" :model="form" label-width="80px">
        <el-form-item label="账户">
          <el-input placeholder="请输入学号或工号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item v-show="value==='student'" label="昵称">
          <el-input placeholder="请输入昵称" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input placeholder="请确认密码" v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input placeholder="请输入邮箱" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input placeholder="请输入验证码" v-model="form.reemail"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in identity"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in major"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item v-if="value!=='student'" label="职位">
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in  position"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" size="medium" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/login">
        <el-link type="primary" style="margin-left: 80px;">点击此处登录</el-link>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: [],
        desc: ""
      },
      identity: [
        {
          value: "teacher",
          label: "教师"
        },
        {
          value: "student",
          label: "学生"
        }
      ],
      major: [
        {
          value: "chinese",
          label: "语文"
        },
        {
          value: "art",
          label: "艺术"
        }
      ],
      position: [
        {
          value: "director",
          label: "主任"
        },
        {
          value: "teacher",
          label: "教师"
        }
      ],
      value: "教师",
      value2: "",
      value3: ""
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.title {
  padding-left: 30px;
  margin-bottom: 40px;
  font-size: 24px;
  /* font-weight: bold; */
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.register {
  width: 350px;

  /* background-color: red; */
  box-shadow: 0px 0px 2px grey;
  border-radius: 20px;
  padding: 20px;
}
</style>