<!--  -->
<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="onFours()"
            @blur="leavefours()"
            @input="input"
            placeholder="搜索商家或地点"
          />
          <button class="el-button el-button--primary" @click="$router.push({path:`/product?key=a`})">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotsearch">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in HotSearch" :key="idx">
              <nuxt-link to="/food">{{item.place}}</nuxt-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="search">
            <dd v-for="(item,idx) in searchListText" :key="idx">
              <nuxt-link to>{{item.name}}</nuxt-link>
            </dd>
          </dl>
        </div>
        <p class="suggset">
          <a v-for="(item,index) in this.$store.state.home.hotplace" :key="index">{{item.place}}</a>
          
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">美团公寓</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col class="right" :span="4">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      isFours: false,
      HotSearch:this.$store.state.home.hotplace,
      searchListText: []
    };
  },

  components: {},

  computed: {
    isHotsearch() {
      return this.isFours && !this.search;
    },
    isSearchList() {
      return this.isFours && this.search;
    }
  },

  methods: {
    onFours() {
      this.isFours = true;
    //   let list = this.HotSearch
    //   if (list.length==0) {
    //     this.$axios.get("/search/hotPlace").then(({ status, data }) => {
    //       if (status === 200) {
    //         this.HotSearch = data.topsearch;
    //       }
    //     });
    //   }
    },
    leavefours() {
      setTimeout(() => {
        this.isFours = false;
      }, 130);
    },
    input: _.debounce(async function() {
      let city = "三亚";
      let self = this;
      if (self.search != "") {
        let {
          status,
          data: { top }
        } = await self.$axios.get(
          `/search/getTop?input=${self.search}&city=${city}`
        );
        self.searchListText = top.slice(0, 10);
      }
    }, 300)
  }
  //   watch: {
  //       search(value){
  //         console.log('a')

  //       }
  //   },
};
</script>
<style lang='scss'>
.suggset{
    a{
        margin-left: 5px;
    }
}
</style>