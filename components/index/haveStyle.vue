<!--  -->
<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd
        v-for="(item,idx) in menu"
        :key="idx"
        :class="{active:keykind===item.en}"
        @mouseenter="menuhover(item.en)"
      >{{item.zh}}</dd>
    </dl>
    <ul class="ibody" v-if="cur">
      <li v-for="(item,idx) in cur" :key="idx" >
        <el-card>
          <img class="image" :src="setImgul(item.imgUrl)" alt>
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">
              <span>{{ item.oldPrice?item.oldPrice:'暂无' }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.currentPrice?item.currentPrice:'暂无价格'}}</em>
              <span>{{ item.currentPrice=='抢光了'?'':'起'}}</span>
            </li>
          </ul>
        </el-card>
      </li>
        </ul >
   
  </section>
</template>

<script>
export default {
  data() {
    return {
      keykind: "all",
      menu: [
        { zh: "全部", en: "all" },
        { zh: "约会聚餐", en: "feast" },
        { zh: "丽人spa", en: "spa" },
        { zh: "电影演出", en: "show" },
        { zh: "品质出游", en: "journey" }
      ],
      list: {
        all: [],
        feast: [],
        spa: [],
        show: [],
        journey: []
      }
    };
  },
  mounted() {
    this.$axios
      .get(
        `/search/resultStyleList?theme=quality&tab=${
          this.keykind
        }&ci=20&limit=10`
      )
      .then(({ status, data: { tab, data } }) => {
        this.list[this.keykind] = data;
      });
  },
  computed: {
    cur() {
      return this.list[this.keykind];
    }
  },
  methods: {
    menuhover(item) {
      this.keykind = item;
      console.log(this.list[this.keykind].length);
      if (this.list[this.keykind].length == 0) {
        this.$axios
          .get(
            `/search/resultStyleList?theme=quality&tab=${
              this.keykind
            }&ci=20&limit=10`
          )
          .then(({ status, data: { tab, data } }) => {
              let r=data.map(element=>{
                  return{
                      title:element.title,
                      imgUrl:element.imgUrl,
                      oldPrice:element.oldPrice,
                      currentPrice:element.currentPrice,
                      
                  }
              })
              console.log(r)
            this.list[this.keykind] = data;
          });
      }
    },
    setImgul(value) {
      console.log(typeof value);
      let str = value;
      let subvalue = str.split("w.h/");
      subvalue = subvalue.join("");
      return subvalue;
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>