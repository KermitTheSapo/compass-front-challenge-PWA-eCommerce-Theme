import express from 'express'
import db from './config/dbConnect'
import routes from './routes/index'
import product from "./routes/productRoutes"
import bag from "./routes/bagRoutes"
import wishlist from "./routes/wishlistRoutes"
import coupon from "./routes/couponRoutes"
import address from "./routes/addressRoutes"
import contact from "./routes/contactRoutes"
import cors from 'cors'
const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

db.on('error', console.log.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connection made successfully.')
})

const app = express()
const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options))
app.use(express.json())
app.get('/', (_, res) => {
  res.send('welcome to home!')
})
app.use("/product", product)
app.use("/bag", bag)
app.use("/wishlist", wishlist)
app.use("/coupon", coupon)
app.use("/address", address)
app.use("/contact", contact)

app.use((_, res) => {
  res.status(404)
})
app.listen(PORT, () => {
  console.log(`Server running successfully ${HOSTNAME}:${PORT}`)
})


routes(app)

export default app
