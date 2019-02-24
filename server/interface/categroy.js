import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../dbs/models/province'
import categroy from '../dbs/models/category'
const router = new Router({
  prefix: '/categroy'
})
router.get('/crumbs', async ctx => {
  let result = await categroy.findOne({
    city: ctx.query.city.replace('市', '') || '北京'
  })
  if (result) {
    ctx.body = {
      code: 0,
      types: result.types,
      areas: result.areas
    }
  } else {
    ctx.body = {
      code: 0,
      types:'',
      areas: []

    }
  }

})
export default router
