<!--  -->
<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{detail.name}}</h1>
        <h2>{{detail.type}}</h2>
      <el-rate v-model="detail.biz_ext.rating" disabled/>
      <span>{{Number(detail.biz_ext.rating)}}分</span>
      <span>{{Number(detail.biz_ext.cost)}}</span>
      <ul>
        <li >地址:{{detail.address}}</li>
        <li>电话:{{detail.tel}}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel
        height="214px"
        indicator-position="none">
        <el-carousel-item v-for="(item,index) in detail.photos" :key="index"
         >
          <h3><img :src="item.url"
            ></h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>

<script>
export default {
    props:{
        detail:{
            type:Object,
            default(){

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