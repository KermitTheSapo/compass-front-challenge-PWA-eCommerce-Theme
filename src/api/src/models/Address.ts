import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
  id: { type: String },
  pinCode: { type: Number, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  uf: { type: String, required: true }
})

const Address = mongoose.model('address', AddressSchema)

export default Address