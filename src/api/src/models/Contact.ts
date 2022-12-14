import mongoose from 'mongoose'
import bcrypt from "bcrypt"

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
  password: { type: String, select: false },
  image: { type: String }
})

ContactSchema.pre("save", async function (next) {
  // @ts-ignore
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

const Contact = mongoose.model('contact', ContactSchema)

export default Contact