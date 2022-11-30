import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://kermit:senhaCompass@pwa-ecommerce-theme-com.srdcs0o.mongodb.net/eCommerce',
)

let db = mongoose.connection

export default db
