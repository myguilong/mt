<!--  -->
<template>
  <div></div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {};
  },
  middlware: async ctx => {
    ctx.$axios.get("/users/exit").then(({ status, data }) => {
        //middleware中间件一进入就执行
      if (status === 200 && data) {
        window.location.href = "/";
      }
    });
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss'>
</style>