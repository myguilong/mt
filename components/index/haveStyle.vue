<!--  -->
<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd v-for="(item,idx) in menu" :key="idx" :class="{active:keykind===item.zh}" @mouseenter="menuhover(item.zh)">{{item.zh}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,idx) in categoryList.list" :key="idx">
        <el-card>
          <img class="image" :src="item.img" alt>
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keykind: "全部",
      menu: [
        { zh: "全部", en: "all" },
        { zh: "约会聚餐", en: "part" },
        { zh: "丽人spa", en: "spa" },
        { zh: "电影演出", en: "move" },
        { zh: "品质出游", en: "travel" }
      ],
      list: [
        {
          title: "全部",
          list: [
            {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }, {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }
          ]
        },
        {
          title: "约会聚餐",
          list: [
            {
              title: "火锅",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "料理",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "旅游",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }, {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }
          ]
        },
        {
          title: "丽人spa",
          list: [
            {
              title: "蛋糕",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "西点",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "茶点",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }, {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }
          ]
        },
        {
          title: "电影演出",
          list: [
            {
              title: "烤鸭",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "国外旅行",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美团外卖",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }, {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }
          ]
        },
        {
          title: "品质出游",
          list: [
            {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }, {
              title: "理发",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "美容",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            },
            {
              title: "spa",
              img:
                "//p1.meituan.net/mogu/15b53f3336287155877c7b2f3fa63760153486.jpg@460w_260h_1e_1c"
            }
          ]
        }
      ]
    };
  },

  components: {},

  computed: {
    categoryList() {
      return this.list.filter(item => {
        return item.title === this.keykind;
      })[0];
    }
  },
  mounted() {},
  methods: {
    menuhover(item) {
      this.keykind = item;
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>