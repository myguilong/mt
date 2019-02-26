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
  middleware: async (ctx) => {
   const {status,data}=await ctx.$axios.get('/users/exit')
   console.log(data)
    if(status===200&&data&&data.code===0){
      window.location.href='/'
    }
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss'>
</style>