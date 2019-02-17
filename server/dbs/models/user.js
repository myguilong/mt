import mongoose from 'mongoose'

const schema = mongoose.Schema;

const UserSchma=new schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
export default mongoose.model('User',UserSchma)