import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  ddd: { type: String },
  phone: { type: String },
  cardCode: { type: String },
  firstName: { type: String },
  LastName: { type: String },
  email: { type: String },
  dateBirth: { type: String },
  password: { type: String },
  image: { type: String }
})

const Contact = mongoose.model('contact', ContactSchema)

export default Contact