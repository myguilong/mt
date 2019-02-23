<!--  -->
<template>
  <div class="page-changeCity">
    <el-row>
        <changeCity></changeCity>
    </el-row>
    <el-row>
        <hot></hot>
    </el-row>
    <el-row>
        <cateGory></cateGory>
    </el-row>
  </div>
</template>

<script>
import changeCity from '@/components/changeCity/iselect'
import Hot from '@/components/changeCity/hot'
import cateGory from '@/components/changeCity/category'
export default {
  data() {
    return {};
  },

  components: {
      changeCity,Hot,cateGory
  },

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
</style>