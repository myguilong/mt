<!--  -->
<template>
  <li v-if="list.photos.length"
    class="m-detail-item">
    <dl class="section">
      <dd>
        <img
          :src="list.photos[1].url"
         >
      </dd>
      <dd>
        <h4>{{list.name}}</h4>
        <p>
          <span >剩余{{ Number(list.biz_ext.meal_ordering) }}</span>
          <span >截止日期：</span>
        </p>
        <p>
          <span class="price">{{Number(list.biz_ext.cost)}}</span>
          <sub>门店价{{ Number(list.biz_ext.cost) }}</sub>
        </p>
      </dd>
      <dd>
        <el-button
          type="warning"
          round
          >立即抢购</el-button>
      </dd>
    </dl>
  </li>
</template>

<script>
export default {
    props:{
        list:{
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