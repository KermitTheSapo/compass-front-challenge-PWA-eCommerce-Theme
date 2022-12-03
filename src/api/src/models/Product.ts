import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  paragraph: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  safe: { type: Number },
  discount: { type: Number },
  link: { type: String, required: true },
  imgAlt: { type: String, required: true },
  image: { type: String, required: true },
  ratings: { type: Number, required: true },
  category: { type: String, required: true }
})

const product = mongoose.model('produtos', ProductSchema)

export default product