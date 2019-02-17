
<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <h4 class="tips" v-if="username"></h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input v-model="username" prefix-icon="profile"/>
        <el-input v-model="password" type="password" prefix-icon="password"/>
        <div class="foot">
            <el-checkbox v-model="checked">7天内自动登陆</el-checkbox>
            <b>忘记密码?</b>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login">
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      username: "",
      password: "",
      checked: ""
    };
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
@import "@/assets/css/login/index.scss";
</style>