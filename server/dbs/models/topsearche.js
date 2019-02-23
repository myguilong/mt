import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const topsearche=new Schema({
    id:{
        type:Number,
        require:true
    },
    value:{
        type:String,
        require:true
    }
})
export default mongoose.model('topsearche',topsearche)