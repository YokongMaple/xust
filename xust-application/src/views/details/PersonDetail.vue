<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../../assets/images/index2.jpg" style="width:100%" alt />
    <div class="case-content">
      <left-side title="个人中心"></left-side>
      <el-row class="detial" style="width:90%">
        <el-row>
          <el-divider content-position="left">基础信息</el-divider>
          <el-col :span="8">
            <div class="block">
              <el-image
                style="width: 200px; height: 300px"
                :fit="fit"
                :src="model.avatarUrl"
              ></el-image>
            </div>
          </el-col>
          <el-col :span="5">
            <el-form>
              <el-form-item size="medium" label="学号">
                <span>{{ model.account }}</span>
              </el-form-item>
              <el-form-item size="medium" label="姓名">
                <span>{{ model.realName }}</span>
              </el-form-item>
              <el-form-item size="medium" label="学院">
                <span>{{ model.collegeName }}</span>
              </el-form-item>
              <el-form-item size="medium" label="专业">
                <span>{{ model.majorName }}</span>
              </el-form-item>
              <el-form-item size="medium" label="身份">
                <span>{{
                  model.status == 0
                    ? "学生"
                    : model.status == 1
                    ? "教师"
                    : "管理员"
                }}</span>
              </el-form-item>
              <el-form-item size="medium" label="邮箱">
                <span>{{ model.email }}</span>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-divider content-position="left">更新</el-divider>
        <el-row>
          <el-form @submit.native.prevent="save">
            <el-form-item label="头像">
              <el-upload
                class="avatar-uploader"
                :action="'http://49.232.138.118:8080/yunzhi/user/upload_image'"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="afterUpload"
              >
                <img
                  v-if="model.avatarUrl"
                  :src="model.avatarUrl"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveAvatar">保存头像</el-button>
            </el-form-item>
          </el-form>
          <el-col :span="4">
            <el-button type="primary" @click="editDialogVisible = true"
              >修改密码</el-button
            >
          </el-col>
        </el-row>
      </el-row>
    </div>
    <!-- 修改用户对话框 -->
    <el-dialog
      title="修改密码"
      :visible.sync="editDialogVisible"
      @closed="editDialogClosed"
      width="30%"
    >
      <el-form ref="editFormRef" label-width="70">
        <el-row>
          <el-col :span="24">
            <el-form-item label="密码" prop="mobile">
              <el-input v-model="password"></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="确认密码" prop="mobile">
              <el-input v-model="repassword"></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editPassword">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Top from "../../components/Home/Top";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar,
  },
  data() {
    return {
      model: {},
      active: false,
      fit: "fill",
      // 控制用户修改对话框的现实与隐藏
      editDialogVisible: false,
      password: "",
      repassword: "",
    };
  },
  methods: {
    async saveAvatar() {
      let uuid = this.$route.params.uuid;
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/user/keep?uuid=${uuid}&avatarUrl=${this.model.avatarUrl}`
      );
      this.$message.success("保存头像成功");
    },
    async fetch() {
      //49.232.138.118:8080/yunzhi/admin/detail_user?uuid=5
      let uuid = this.$route.params.uuid;
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/user/center?uuid=${uuid}`
      );

      this.model = res.data.data;
      console.log(this.model);
    },
    afterUpload(res) {
      console.log(res);
      this.$set(this.model, "avatarUrl", res.data);
      console.log(this.model.avatarUrl);
    },
    beforeAvatarUpload(file) {
      const isLt3M = file.size / 1024 / 1024 < 3;

      if (!isLt3M) {
        this.$message.error("上传头像图片大小不能超过 3MB!");
      }
      return isLt3M;
    },
    // 展示编辑用户的对话框
    async showEditDialog(id) {
      this.editDialogVisible = true;
    },
    // 监听修改用户对话框的关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
      this.editDialogVisible = false;
    },
    async editPassword() {
      if (this.password == "") {
        return this.$message.error("密码不能为空");
      }
      if (this.password !== this.repassword) {
        return this.$message.error("请确认两次密码是否输入正确");
      }
      const uuid = this.$route.params.uuid;
      const data = { uuid: uuid, password: this.password };
      const res = await this.$http.post(
        `http://49.232.138.118:8080/yunzhi/user/change_pw`,
        data
      );
      this.$message.success("更新密码成功");
      console.log(res);
      this.editDialogVisible = false;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.case-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
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
.detial {
  margin-top: 50px;
  box-shadow: 0 0 5px black;
  padding: 50px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
