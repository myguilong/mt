<!--  -->
<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{this.$store.state.geo.position.name?this.$store.state.geo.position.name:this.$store.state.geo.position.city.cname}}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[香河 廊坊 天津]
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang='stylus'>
</style>