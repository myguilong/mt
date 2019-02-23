<!--  -->
<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.name"></el-option>
    </el-select>
    <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.name"></el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      :trigger-on-focus="false"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import _ from "lodash";
import pinyin from "pinyin";
export default {
  data() {
    return {
      city: [],
      cvalue: [],
      pvalue: "",
      province: [],
      input: "",
      cities: []
    };
  },

  components: {},
  async mounted() {
    let a = pinyin("北京").join();
    console.log(a);
    const {
      status,
      data: { province }
    } = await this.$axios.get("/city/getProvince");
    if (status == 200) {
      this.province = province;
    }
  },
  computed: {},

  methods: {
    handleSelect() {},
    querySearchAsync: _.debounce(async function(query, cb) {
      let self = this;
      //   console.log(query)
      //   console.log()
      const {
        status,
        data: { data }
      } = await this.$axios.get(
        `https://apimobile.meituan.com/group/v1/area/search/${window.encodeURIComponent(
          query
        )}`
      );
      console.log(data);
      this.cities = data.map(item => {
        return {
          value: item.cityName
        };
      });
      console.log(this.cities);
      if (this.cities.length > 0) {
        cb(this.cities);
      }
      else
      {
          cb()
      }

      //这是一种解决方案前端获得所有的城市进行筛选
    }, 200)
    // querySearchAsync: _.debounce(async function(query, cb) {
    //   if (this.cities.length) {
    //     let result = [1, 2, 3, 4, 5];
    //     //   this.cities.filter(item=>item.name.indexOf(query)>-1)
    //     cb(result);
    //   } else {
    //     const {
    //       status,
    //       data: { city }
    //     } = await this.$axios.get("/city/allcity");
    //     this.cities = city;
    //     console.log(this.cities);
    //   }
    // })
  },
  watch: {
    async pvalue(value) {
      console.log(value);
      const selectProvice = this.province.filter(item => {
        return item.name == this.pvalue;
      })[0];
      const {
        status,
        data: { city }
      } = await this.$axios.get(`/city/getCity?id=${selectProvice.id}`);
      if (status == 200) {
        this.city = city;
      }
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>