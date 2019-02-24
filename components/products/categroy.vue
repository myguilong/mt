<!--  -->
<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <div class="mystyle">
        <dd v-for="(item,index) in types" :key="index" class="mystyleD">
          <iselect :name="item.type" :list="item.module"/>
        </dd>
      </div>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>区域</dt>
      <div class="mystyle">
        <dd class="mystyleD" v-for="(item,index) in areas" :key="index">
          <iselect :name="item.type" :list="item.module"/>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import iselect from "./iselect";
export default {
  props: {
    types: {
      type: Array,
      default() {}
    },
    areas: {
      type: Array,
      default() {}
    }
  },
  data() {
    return {};
  },

  components: {
    iselect
  },
  mounted() {
  
  },
  computed: {},

  methods: {}
};
</script>
<style lang='scss' scope>
.mystyle {
  width: 100%;
  .mystyleD {
    display: inline-block !important;
    display: inline;
  }
}
</style>