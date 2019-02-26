<!--  -->
<template>
  <div class="m-user">
      <template v-if="user">
          您好欢迎<span class="username">{{user}}</span>
          <nuxt-link to="/exit">退出</nuxt-link>
      </template>
      <template v-else>
          <nuxt-link to="/login" class="login">立即登陆</nuxt-link>
          <nuxt-link to="/register" class="register">注册</nuxt-link>
      </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
        user:''
    };
  },

  components: {},

  computed: {},

  methods: {},
 async mounted() {
      //获取用户信息数据
    const {status,data:{user}} = await this.$axios.get('users/getuser');
    console.log(user)
    this.user=user
  },
}

</script>
<style lang='scss'>
</style>