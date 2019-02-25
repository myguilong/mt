import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../dbs/models/province'
import categroy from '../dbs/models/category'
const sign = 'c33b71bb56b83eab21cfd97c070ce4ef'
const router = new Router({
  prefix: '/categroy'
})
router.get('/crumbs', async ctx => {
//   let result = await categroy.findOne({
//     city: ctx.query.city.replace('市', '') || '北京'
//   })
//   if (result) {
//     ctx.body = {
//       code: 0,
//       types: result.types,
//       areas: result.areas
//     }
//   } else {
//     ctx.body = {
//       code: 0,
//       types:'',
//       areas: []

//     }
//   }
const {status,data:{areas,types}}=await axios.get(`http://cp-tools.cn/categroy/crumbs`,{
    params:{
        city:ctx.query.city.replace('市','') || "北京",
        sign
      }
})
  ctx.body={
      areas:status===200?areas:[],
      types:status===200?types:[]
  }

})
export default router
