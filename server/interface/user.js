import Router from 'koa-router'
import Email from '../dbs/config'
import axios from 'axios'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/user'
import passport from './utils/passport'

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client;

router.post('/signup', async (ctx, next) => {

  let {
    username,
    email,
    password,
    code
  } = ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodeMailer${username}`, 'code')
    const saveExprie = await Store.hget(`nodeMailer${username}`, 'exprie')
    //获取redis中存在的时间和保存的验证码信息进行判断
    if (saveCode === code) {

      if (new Date().getTime() - saveExprie > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期'
        }
      }
      return false
    } else {
      ctx.body = {
        code: -1,
        msg: '验证码错误'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请输入验证码'
    }
  }
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已经被注册'
    }
    return
  }
  let nuser = await User.create({
    username,
    email,
    password
  })
  if (nuser) {
    let res = this.axios.post('/users/signin', {
      username,
      password
    })
    if (res.data && res.status === 200 && res.code == 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功'
      }

    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }

})
//登陆接口
router.post('/signin', async (ctx, next) => {
    //使用passport.authenticate进行验证
  return passport.authenticate('local', (error, user, info, status) => {
    if (error) {
      ctx.body = {
        code: -1,
        msg: error
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功'
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }

    }
  })(ctx, next)
})
//发送验证码的接口
router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username;

  let saveExprie = await Store.hget(`nodeMailer:${username}`, 'exprie')

  if (saveExprie && new Date().getTime() - saveExprie < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  //创建发送邮件服务的配置信息
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  let ko = {
    code: Email.smtp.code(),
    exprie: Email.smtp.expire(),
    user: ctx.request.body.username,
    email: ctx.request.body.email
  }
  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '注册码',
    html: `您的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, next) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(`nodeMailer:${ko.user}`, 'code', ko.code, 'exprie', ko.exprie, 'email', ko.email)
      //发送成功配置redis
    }
  })
  ctx.body = {
    code: 0,
    msg: '发送成功,可能会有延迟'
  }
})
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
      //判断用户是否登陆
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: 0
    }
  }
})
//获取用户名的接口
router.get('/getuser',async (ctx,next)=>{
   if(ctx.isAuthenticated()){
       const {username,email}=ctx.session.passport.user
       ctx.body={
           user:username,
           email
       }
   }
   else
   {
    ctx.body={
        user:'',
        email:''
    }
   }
})
export default router
