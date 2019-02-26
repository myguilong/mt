<!--  -->
<template>
  <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.state.geo.position.city.replace('市','') }}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.state.geo.position.city.replace('市','') }}{{ type }}</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/"></a></el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default(){
                return '默认'
            }
        }
    },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='scss'>
</style>