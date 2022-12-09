import mongoose from 'mongoose'

const BagSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  paragraph: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  subTotal: { type: Number, required: true },
  safe: { type: Number },
  discount: { type: Number },
  link: { type: String, required: true },
  imgAlt: { type: String, required: true },
  image: { type: String, required: true },
  ratings: { type: Number, required: true },
  quantity: { type: Number, required: true }
})

const Bag = mongoose.model('bag', BagSchema)

export default Bag