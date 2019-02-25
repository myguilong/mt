import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
import topSearche from '../dbs/models/topsearche'
import { createContext } from 'vm';
const router = new Router({
  prefix: '/search'
})
const sign = 'c33b71bb56b83eab21cfd97c070ce4ef'
router.get('/getTop', async ctx => {
  //   try {
  //     let top = await Poi.find({
  //       'name': new RegExp(ctx.query.input),
  //       'city': ctx.query.city
  //     })
  //     ctx.body = {
  //       code: 0,
  //       top: top
  //     }

  //   } catch (err) {
  //     ctx.body = {
  //       name: '',
  //       city: ''
  //     }
  //   }
  const {
    status,
    data: {
      top
    }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body={
      top:status==200?top:[]
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
router.get('/products',async ctx=>{

     let keyword=ctx.query.keyword || '旅游'
     let city = ctx.query.city || '北京'

     const {status,data:{count,pois}}=await axios.get(`http://cp-tools.cn/search/resultsByKeywords`,{

        params:{
            keyword,
            city,
            sign
        }

     })
     ctx.body={
        count: status === 200 ? count : 0,
        pois: status === 200
          ? pois
          : []
     }
    //  if(status==200)
    //  {
    //      ctx.body={
    //          product,
    //          more:ctx.isAuthenticated()?more:[],
    //          login:ctx.isAuthenticated()
            
    //      }
    //  }
    //  else
    //  {
    //     ctx.body={
    //         product:{},
    //         more:ctx.isAuthenticated()?more:[],
    //         login:ctx.isAuthenticated()
           
    //     }
    //  }
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
router.get('/detail',async ctx=>{
    let keyword= ctx.query.keyword || '旅游'
    let city = ctx.query.city || '北京'
    const { status,data:{product,more}} = await axios.get(`http://cp-tools.cn/search/products`,{
        params:{
            keyword,
            city,
            sign
        }
    })
    ctx.body={
       product,
       more:ctx.isAuthenticated()?more:[],
       login:ctx.isAuthenticated()
    }
})
export default router
