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
      <dd><span  v-for="c in item.name" :key="c">{{c}}</span></dd>
    </dl>
  </div>
</template>

<script>
import pinyin from "js-pinyin";
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
      let p;
      let c;
      let d={};
      city.map(item=>{
          p=pinyin.getFullChars(item.name).toLocaleLowerCase().slice(0,1)
          c=p.charCodeAt(0)
          if(c>96&&c<123)
          {
              if(!d[p])
              {
                  d[p]=[]
              }
          }
          d[p].push(item.name)
         
      })
      for(let [k,v] of Object.entries(d))
      {
          blocks.push({
              title:k.toLocaleUpperCase(),
              name:v
          })
      }
   
      blocks.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0))
      console.log(blocks)
      this.block=blocks
    }
  },
  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>