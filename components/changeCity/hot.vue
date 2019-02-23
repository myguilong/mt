<!--  -->
<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd v-for="item in list" :key="item.id">
        <a href>{{ item}}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$axios.get("/city/hotplace").then(({ status, data: { hotCity } }) => {
      if (status == 200) {
        this.list = hotCity;
      }
    });
  },
  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/hot.scss";
</style>