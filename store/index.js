import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,home
  },
  actions: {
    async nuxtServerInit({
      commit
    }, {
      req,
      app
    }) {
      //页面一加载调用此时不存在dom实例
      await app.$axios.get('/city/getPosition').then(({
        status,
        data
      }) => {
        if (status == 200) {
         let str=data;
        //  console.log(str.result)
        //  console.log(typeof (str.result))
         let jsonStr=str.result;
         let obj=(new Function("return"+jsonStr))();
         //字符串转换
         console.log(obj.cname)
        //  lstr=JSON.parse(str)
        //JSON.parse无法在服务端使用
        //  console.log(lstr)
         commit('geo/setPosition',{city:obj,region:"aa"})
        }
      })
      const {status,data:{result}}=  await app.$axios.get('/city/getMenu');
      //console.log(result.data.result)
      commit('home/setMenu',status===200?result:[])
      const {status:status2,data:{topsearch}}=await app.$axios.get("/search/hotPlace");
      commit ('home/setHotplace',status2===200?topsearch:[])
    }
  }
})
export default store
