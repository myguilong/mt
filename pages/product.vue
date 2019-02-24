<!--  -->
<template>
    <el-row class="page-product">
       <el-col :span="19">
          <curmbs/>
          <categroy :types="types" :areas="areas"/>
          <list :list="list"/>
       </el-col>
       <el-col :span="5">
         <mymap v-if="ponint.length" :windth="230" :height="290" :ponint="ponint"></mymap>
       </el-col>
    </el-row>
</template>
<script>
import curmbs from '@/components/products/crumbs'
import categroy from '@/components/products/categroy'
import list from '@/components/products/list'
import mymap from '@/components/public/map'

export default {
  data () {
    return {
        list:[],
        types:[],
        areas:[],
        list:[],
        keyword:"",
        ponint:[]

    };
  },
  components: {
       curmbs,categroy,list,mymap
  },
  async asyncData(ctx){
      console.log(ctx.query.key)
     let keyword= ctx.query.keyword
     let city= ctx.store.state.geo.position.city
     const {status,data:{types,areas}}=await ctx.$axios.get('/categroy/crumbs?city=包头')
     const { status:status2,data:{ top }}= await ctx.$axios.get(`/search/getTop?input=养&city=三亚`)
   return {
       areas:areas,
       types:types,
       list:top

    }
  },
  mounted(){
   
   
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss'>
  @import "@/assets/css/products/index.scss";
</style>