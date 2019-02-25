<!--  -->
<template>
  <div :id="id" :style="{width:width+'px',
  height:height+'px',margin:'34px auto'}" class="m-map"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
        id:""
    };
  },
  mounted() {
    let self = this;
    self.id = `map${Math.random().toString().slice(4, 6)}`;
    window.onload = () => {
      let map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zomm: 11,
        center: self.point
      });
      self.map = map;
      window.AMap.plugin("AMap.ToolBar", () => {
        let toolbar = new window.AMap.ToolBar();
        map.addControl(toolbar);
        let marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png",
          position: self.point
        });
        self.marker = marker;
        marker.setMap(map);
      });
    };
    const url='https://webapi.amap.com/maps?v=1.4.13&key=b78ec3529966cf3af95d44e613d98a50&callback=onload'
    const jsapi=document.createElement('script');
    jsapi.charset='utf-8'
    jsapi.src=url;
    document.head.appendChild(jsapi)
  },
  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss'>
</style>