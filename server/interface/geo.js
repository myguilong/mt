import Router from 'koa-router'
import axios from './utils/axios'
import menu from '../dbs/models/menu'
import province from '../dbs/models/province'
import City from '../dbs/models/city'
let router = new Router({
  prefix: '/city'
})
const sign = 'c33b71bb56b83eab21cfd97c070ce4ef'

router.get('/getPosition', async ctx => {

  const {
    status,
    data: {
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  //   let str = result.data;
  //   let key = str.indexOf('=')
  //   str = str.substr(key + 1, str.length)
  //去除换行
  if (status == 200) {
    ctx.body = {
      province,
      city

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
  //   const result = await province.find();
  //   ctx.body = {
  //     province: result.map(item => {
  //       return {
  //         id: item.id,
  //         name: item.value[0]
  //       }
  //     })
  //   }
  const {
    status,
    data: {
      province
    }
  } = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  ctx.body = {
    province: status === 200 ? province : []
  }
})
//获得身份下的市区
router.get('/getCity', async ctx => {
  //   let city = await City.findOne({
  //     id: ctx.query.id
  //   })
  //   ctx.body = {
  //     code: 0,
  //     city: city.value.map(item => {
  //       return {
  //         province: item.province,
  //         id: item.id,
  //         name: item.name
  //       }
  //     })
  //   }
  let code = ctx.query.id
  const {
    status,
    data: {
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/province/${code}?sign=${sign}`)
  if(status===200)
  {
      ctx.body={
          city
      }
  }
  else
  {
      ctx.body={
          city:[]
      }
  }
})
//搜索城市的api
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
