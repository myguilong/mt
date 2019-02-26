<!--  -->
<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <Crumbs :type="product.type"/>
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
    <el-row  :span="24" v-if="canOrder || !login">
       <el-col>
        <iTem v-if="login"  :list="product"/>
        <div v-else class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/detail/crumbs";
import Summa from "@/components/detail/summary";
import iTem from "@/components/detail/item";
export default {
  data() {
    return {};
  },
  components: { Crumbs, Summa, iTem },

  computed: {
      canOrder(){
            return this.more.filter(item=>item.photos.length).length
      }
  },

  methods: {},
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;
    let city = ctx.store.state.geo.position.city.replace(",", "");
    const {
      status,
      data: { product, more, login }
    } = await ctx.$axios.get(
      `http://localhost:3000/search/detail?keyword=${keyword}&city=${city}`
    );
    if (status == 200) {
      return {
        product,
        more,
        login
      };
    } else {
      return {
        product,
        more,
        login:false
      };
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/detail/index.scss";
</style>