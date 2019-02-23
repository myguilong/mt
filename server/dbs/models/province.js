import mongoose from 'mongoose'
const schema =mongoose.Schema
const Province = new schema({
    id:{
        type:String,
        require:true
      },
      value:{
        type:Array,
        require:true
      }
})
export default mongoose.model('Province',Province)