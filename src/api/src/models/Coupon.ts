import mongoose from 'mongoose'

const CouponSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  code: { type: String, required: true }
})

const Coupon = mongoose.model('coupon', CouponSchema)

export default Coupon