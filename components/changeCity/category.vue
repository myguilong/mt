<!--  -->
<template>
  <div class>
    <dl class="m-categroy">
      <dt>按拼音字母首选:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="(item,index) in block " :key="index" class="m-categroy-section">
      <dt :id="'city-'+item.title">{{item.title}}</dt>
      <dd>
        <span v-for="(c,index) in item.name" :key="index" @click="changeCity(c)">{{c.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pinyin from "js-pinyin";
import geo from 'vuex'
export default {
  data() {
    return {
      list: "ABCDERGHIJKLMNOPQRSTUVWXYZ".split(""),
      block: []
    };
  },
  async mounted() {

    let blocks = [];
    let {
      status,
      data: { city }
    } = await this.$axios.get("/city/allcity");
    if (status == 200) {
      let p; //先获得每个地址的拼音首字母
      let c; //获得得到字母的编码转换数字
      let d = {}; //存放信息
      city.map(item => {
        p = pinyin
          .getFullChars(item.name)
          .toLocaleLowerCase()
          .slice(0, 1); //获得拼音首字母
        c = p.charCodeAt(0);
        if (c > 96 && c < 123) {
          //如果是存在并且是小写
          if (!d[p]) {
            //判断d中是否含有该属性
            d[p] = [];
            //如果 没有创建这个属性
          }
        }
        d[p].push(item);
      });
      //将d对象转换为数组
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toLocaleUpperCase(), //转换大写
          name: v
        });
      }
      console.log(blocks);
      //排序
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
      console.log(blocks);
      this.block = blocks;
    }
  },
  components: {},

  computed: {},

  methods: {    
    changeCity(value) {
     this.$store.dispatch('geo/commitPosition',value)
   this.$router.push({path:'/'})
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>