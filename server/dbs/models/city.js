import mongoose from 'mongoose'
const schema = mongoose.Schema;

const City=new schema({
    id: {
        type: String,
        require: true
      },
      value: {
        type: Array,
        require: true
      }
})
export default mongoose.model('City',City)