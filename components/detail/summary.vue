<!--  -->
<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{detail.name}}</h1>
      <el-rate v-model="rate" disabled/>
      <span>{{Number(detail.biz_ext.rating)}}分</span>
      <span>{{Number(detail.biz_ext.cost)}}</span>
      <ul>
        <li ><a>地址:{{detail.address}}</a></li>
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

  computed: {
      rate(){
          return Number(this.detail.biz_ext.rating) || Math.floor(Math.random() * 5)
      }
  },

  methods: {}
}

</script>
<style lang='scss'>
</style>