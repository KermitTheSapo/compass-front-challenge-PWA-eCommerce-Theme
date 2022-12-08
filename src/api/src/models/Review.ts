import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  id: { type: String },
  userName: { type: String, required: true },
  productId: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
})

const Review = mongoose.model('review', ReviewSchema)

export default Review