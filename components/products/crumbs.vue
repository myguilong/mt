<!--  -->
<template>
  <div class="m-crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
      {{
         this.$store.state.geo.position.city.replace('市','')
          }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/"> {{
         this.$store.state.geo.position.city.replace('市','')
          }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
</style>