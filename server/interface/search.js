import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
import topSearche from '../dbs/models/topsearche'

const router = new Router({
  prefix: '/search'
})
const sign = 'abcd'
router.get('/getTop', async ctx => {
  try {
    let top = await Poi.find({
      'name': new RegExp(ctx.query.input),
      'city': ctx.query.city
    })
    ctx.body = {
      code: 0,
      top: top.map(item => {
        return {
          name: item.name,
          city: item.city
        }
      })
    }

  } catch (err) {
    ctx.body = {
      name: '',
      city: ''
    }
  }
})
router.get('/hotPlace', async ctx => {
  const result = await topSearche.find()
  ctx.body = {
    topsearch: result.map(item => {
      return {
        place: item.value
      }
    })
  }

})
router.get('/resultStyleList', async ctx => {
  // console.log(ctx.query.tab)
  const {
    status,
    data: {
      tab,
      tabs,
      data
    }
  } = await axios.get(`https://gz.meituan.com/ptapi/getScenesList?theme=quality&tab=${ctx.query.tab}&ci=20&limit=10`);
  if (status === 200) {
    ctx.body = {
      tab,
      tabs,
      data
    }
  } else {
    ctx.body = {
      tabs: '',
      data: ''
    }
  }

})
export default router
