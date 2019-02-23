import mongoose from 'mongoose'
const Schema = mongose.Schema;
const Category = new Schema({
  city: {
    type: String
  },
  types: {
    type: Array,
    require: true
  },
  areas: {
    type: Array,
    require: true
  }
})
export default mongoose.model('Category',Category)