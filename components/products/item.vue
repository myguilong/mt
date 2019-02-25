<!--  -->
<template>
    <dl class="s-item">
    <dt>
      <img
        :src="products.img"
        alt="商品图片">
    </dt>
    <dd>
      <h3><nuxt-link :to="{path:'detail',query:{keyword:products.name,type:products.module}}">{{ products.name }}</nuxt-link></h3>
      <el-rate
         v-model="products.rate"
        :colors="['#ff9900', '#ff9900', '#FF9900']"
        disabled/>
      <span
       v-if="products.rate>5"
        class="s-item-comment">很好</span><span
         v-if="products.rate>3"
          class="s-item-comment">一般</span><span
           v-if="products.rate>1"
            class="s-item-comment">很差</span>
      <span class="s-item-value">{{products.rate}}分</span>
      <span class="s-item-comment-total">{{products. comment}}人评论</span>
      <p>
        <span class="s-item-type">{{products.module}}</span>
        <span class="s-item-addr">{{products.add}}</span>
      </p>
      <p>
        <em class="s-item-price">{{products.price}}￥起</em>
        <b>{{products.status}}</b>
      </p>
      <ul>
      <li>
        <li >
          <span class="detail-type"><table></table></span>{{products.scene }}
        </li>
        <li >
          <span class="detail-type">景酒</span>暂无描述
        </li>
      </ul>
    </dd>
  </dl> 
</template>
<script>
export default {
    props:{
        products:{
            type:Object,
            default(){

            }
        }
    },
  data () {
    return {
        value:2.5
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='scss'>
</style>