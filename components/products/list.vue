<!--  -->
<template>
  <div class="m-products-list">
    <dl>
      <dd></dd>
    </dl>
    <ul></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          acitve: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
</style>