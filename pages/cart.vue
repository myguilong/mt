<!--  -->
<template>
  <div class="page-cart">
    <el-row>
      <el-col :span="24">
        <list/>
      </el-col>
      <div class="myStudy">
        <h1>总计:￥{{total}}</h1>
      </div>
      <div class="post">
          <el-button class="primary">
              提交订单
          </el-button>
      </div>
      <el-col class="empty">空</el-col>
    </el-row>
  </div>
</template>

<script>
import list from "@/components/cart/list";
export default {
  data() {
    return {
      cart: []
    };
  },

  components: {
    list
  },

  computed: {
    total() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  },

  methods: {}
};
</script>
<style lang='scss'>
@import "@/assets/css/cart/index.scss";
.myStudy {
  display: flex;
  justify-content: flex-end;
}
</style>