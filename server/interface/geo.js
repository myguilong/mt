import Router from 'koa-router'
import axios from './utils/axios'
import menu from '../dbs/models/menu'
import province from '../dbs/models/province'
import City from '../dbs/models/city'
let router = new Router({
  prefix: '/city'
})
const sign = '3303421'

router.get('/getPosition', async ctx => {
  const clientIp = ctx.request.ip || ctx.request.headers["X-Orig-IP"]

  const result = await axios.get(`http://pv.sohu.com/cityjson?ie=utf-8`)

  let str = result.data;
  let key = str.indexOf('=')
  str = str.substr(key + 1, str.length)

  //去除换行
  if (result.status == 200) {
    ctx.body = {
      code: 0,
      result: str

    }
  }
})
router.get('/getMenu', async ctx => {
  const result = await menu.findOne()
  ctx.body = {
    result: result.menu
  }
})
router.get('/getProvince', async ctx => {
  const result = await province.find();
  ctx.body = {
    province: result.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
})
router.get('/getCity', async ctx => {
  let city = await City.findOne({
    id: ctx.query.id
  })

  global.console.log(ctx.query.id)
  global.console.log(city)
  ctx.body = {
    code: 0,
    city: city.value.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name
      }
    })
  }
})
router.get('/allcity', async ctx => {
  let city = await City.find();
  let cityArr = []
  city.map(item => {
    item.value.map(iem => cityArr.push(iem))
  })
  ctx.body = {
    code: 0,
    city: cityArr.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name == '省直辖县级行政区划' || item.name == "市辖区" ? item.province : item.name
      }

    })
  }
})
router.get('/hotplace', async ctx => {
  let hotCity = ['上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都']
  ctx.body = {
    code: 0,
    hotCity
  }
})
export default router
