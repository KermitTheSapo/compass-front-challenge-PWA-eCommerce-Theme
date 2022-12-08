import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  id: { type: String },
  orderId: { type: String, required: true },
  orderDate: { type: String, required: true },
  name: { type: String, required: true },
  total: { type: String, required: true },
  subTotal: { type: String, required: true },
  upi: { type: String, required: true },
  addressList: { type: Object, required: true },
  product: { type: Array, required: true },
})

const Order = mongoose.model('order', OrderSchema)

export default Order