<!--  -->
<template>
  <el-row class="page-product">
    <el-col :span="19">
      <curmbs/>
      <categroy :types="types" :areas="areas"/>
      <list id="listbar" ref="list" :list="list"/>
    </el-col>
    <el-col :span="5">
      <!-- <mymap :windth="230" :height="290" :point="ponint"></mymap> -->
    </el-col>
  </el-row>
</template>
<script>
import curmbs from "@/components/products/crumbs";
import categroy from "@/components/products/categroy";
import list from "@/components/products/list";
import mymap from "@/components/public/map";

export default {
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      list: [],
      keyword: "",
      ponint: [],
      lis: []
    };
  },
  components: {
    curmbs,
    categroy,
    list,
    mymap
  },
  async asyncData(ctx) {
    let keyword = ctx.query.keywords;
    let city = ctx.store.state.geo.position.city.replace('市','');

    const {
      status,
      data: { types, areas }
    } = await ctx.$axios.get(`/categroy/crumbs?city=${city}`);

    const {status:status2,data:{pois}} = await ctx.$axios.get(
      `/search/products?keyword=${keyword}&city=${city}`
    );
    
    if (status === 200) {
      return {
        areas: areas,
        types: types,
        list: pois.filter(item=>item.photos.length).map(item=>{
          return {
            type: item.type,
            img: item.photos[0].url,
            name: item.name,
            comment: Math.floor(Math.random()*10000),
            rate: Number(item.biz_ext.rating),
            price: Number(item.biz_ext.cost),
            scene: item.tag,
            tel: item.tel,
            status: '可订明日',
            location: item.location,
            module: item.type.split(';')[0]
          }
        }),
 
      };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.myscoll);
    this.init();
    console.log(this.list)

  },
  computed: {},
  methods: {
    init() {
      this.ls = document.getElementsByClassName("s-item");
    },
    myscoll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
     
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/products/index.scss";
</style>