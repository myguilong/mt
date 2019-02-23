<!--  -->
<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账户?</em>
          <nuxt-link to="/login">
            <el-button type="primary" size="small">登陆</el-button>
          </nuxt-link>
        </span>
      </header>
    </article>
    <section>
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email"></el-input>
          <el-button class="primary" round @click="sendMsg">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code"></el-input>
          <span>{{statusMsg}}</span>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="aginpwd">
          <el-input v-model="form.aginpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
        </el-form-item>
        <div>{{form.eror}}</div>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      statusMsg: "1234",
      form: {
        name: "",
        email: "",
        code: "",
        pwd: "",
        aginpwd: "",
        eror: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "请输入正确的邮箱",
            trigger: "blur",
            type: "email"
          }
        ],
        pwd: [{ required: true, message: "创建密码", trigger: "blur" }],
        aginpwd: [
          { required: true, message: "再次输入密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value != this.pwd) {
                callback(new Error("两次输入的密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    sendMsg() {
      let namePass;
      let emailPass;
      let timerid;
      if (this.timerid) {
        return false;
      }
      this.$refs["ruleForm"].validateField("name", valid => {
        namePass = valid;
        //进行验证
      });
      this.statusMsg = "";
      if (namePass) {
        return false;
      }
      this.$refs["ruleForm"].validateField("email", valid => {
        emailPass = valid;
      });
      if (emailPass) {
        return false;
      }
      if (!namePass && !emailPass) {
        this.$axios
          .post("/users/verify", {
            username: encodeURIComponent(this.form.name),
            email: this.form.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              this.statusMsg = `验证码已发生,剩余${count--}秒`;
              this.timerid = setInterval(() => {
                this.statusMsg = `验证码已发生,剩余${count--}秒`;
                if (count === 0) {
                  clearInterval(this.timerid);
                }
              }, 1000);
            } else {
              this.statusMsg = data.msg;
            }
          });
      }
    },
    register() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          self.$axios
            .post("/users/singup", {
              username: window.encodeURIComponent(this.form.username),//转换成中文编码
              email: this.form.email,
              password: CryptoJS.MD5(this.form.pwd).toString(),
              code: this.form.code
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = "/login";
                } else {
                  this.eror = data.msg;
                }
              } else {
                this.eror = `服务器出错错误码:${status}`;
              }
              //清空eror的信息
              setTimeout(() => {
                this.eror = "";
              }, 1400);
            });
        }
      });
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>