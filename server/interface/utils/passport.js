import passport from 'koa-passport'
//使用koa-passport去注册本地passport
import LocalStrategy from 'passport-local'
//本地策略
import UserModel from '../../dbs/models/user'

// 提交数据(策略),做用户登录验证
passport.use(new LocalStrategy(async (username,password,done)=>{
    
     let where={username}
     let result = await UserModel.findOne(where);
    
     if(result)
     {
         if(password==result.password)
         {
           return done(null,result)
         }
        else{
            return done(null,false,'密码错误')
        }
     }
     else{
         return done(null,false,'用户不存在')
     }
}))


//反序列化
passport.serializeUser( (user,done)=>{
    return done(null,user)
})
//序列化
passport.deserializeUser((user,done)=>{
    return done(null,user)
})
export default passport
