import Router from 'koa-router'
import axios from './utils/axios'
import Cart from '../dbs/models/cart'
import md5 from 'crypto-js/md5'

let router = new Router({
  prefix: '/cart'
})

router.post('/create', async ctx => {

  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: "请登陆"
    }
  } else {
    let time = Date();
    let cartId = md5(Math.random() * 10000 + new Date().getTime()).toString();
    let { params: {id,detail}
    } = ctx.request.body
    let cart = new Cart({id,detail,cartId,time,user: ctx.session.passport.user})
    let result = await cart.save();
    if (result) {
      ctx.body = {
        code: 0,
        msg: "",
        cartId
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "fail",

      }
    }
  }

})
