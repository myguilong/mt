<!--  -->
<template>
  <div class="page-detail">
       <el-row>
          <el-col :span="24">
                <Crumbs/>
          </el-col>
       </el-row>
        <el-row>
          <el-col :span="24">
                <Summa :detail="product"/>
          </el-col>
       </el-row>
       <el-row class="m-title">
          <el-col :span="24">
             <h3>商家团购及优惠</h3>
          </el-col>
       </el-row>
       <el-row v-if="!login">
            <h3>2</h3>
       </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/detail/crumbs'
import Summa from '@/components/detail/summary'
import iTem from '@/components/detail/item'
export default {
  data () {
    return {
    };
  },
  components: {Crumbs,Summa},

  computed: {},

  methods: {},
  async asyncData(ctx) { 
      let keyword= ctx.query.keyword;
      let city=ctx.store.state.geo.position.city.replace(',','')
      const {status,data:{product,more,login}} = await ctx.$axios.get(`http://localhost:3000/search/detail?keyword=${keyword}&city=${city}`)
      if(status==200)
      {
          return {
              product,
              more,
              login
          }
      }

  },
}

</script>
<style lang='scss'>
@import '@/assets/css/detail/index.scss'
</style>