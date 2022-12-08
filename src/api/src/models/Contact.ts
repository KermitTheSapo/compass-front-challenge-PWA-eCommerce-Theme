import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  ddd: { type: String, required: true },
  phone: { type: String, required: true },
  cardCode: { type: String, required: true }
})

const Contact = mongoose.model('contact', ContactSchema)

export default Contact