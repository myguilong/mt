<!--  -->
<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="(item,index) in nav"
        :key="index"
        :class="[item.name,item.active?'s-nav-active':'']"
        @click="get(index,item.name)"
      >{{item.txt}}</dd>
    </dl>
    <ul ref="productList">
      <item v-for="(poi,index) in list" :key="index" :products="poi"/>
    </ul>
  </div>
</template>

<script>
import item from "./item";

export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          active: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ]
    };
  },
  components: {
    item
  },
  computed: {},
  methods: {
    get(item, a) {
      this.nav.map(item => {
        item.active = false;
      });
      this.nav[item].active = true;
      //排序
      let block = this.list;
      if (a == "s-comment") {
        block.sort((a, b) => b.comment - a.comment);
      }
      if(a=="s-price"){
          block.sort((a,b)=>a.price-b.price)
      }
      console.log(block);
      this.list = block;
    }
  },
  mounted() {}
};
</script>
<style lang='scss'>
</style>