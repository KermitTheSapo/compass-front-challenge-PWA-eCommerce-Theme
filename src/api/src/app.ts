import express from 'express'
import db from './config/dbConnect'
import routes from './routes/index'
import product from "./routes/productRoutes"
import bag from "./routes/bagRoutes"
import wishlist from "./routes/wishlistRoutes"
import coupon from "./routes/couponRoutes"
import address from "./routes/addressRoutes"
import contact from "./routes/contactRoutes"
import order from "./routes/orderRoutes"
import review from "./routes/reviewRoutes"
import cors from 'cors'
const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'https://compass-ecommerce.onrender.com'

db.on('error', console.log.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connection made successfully.')
})

const app = express()
const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173', "https://compass-ecommerce.onrender.com"];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options))
// @ts-ignore
app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))
app.get('/', (_, res) => {
  res.send('welcome to home!')
})

app.use("/product", product)
app.use("/bag", bag)
app.use("/wishlist", wishlist)
app.use("/coupon", coupon)
app.use("/address", address)
app.use("/contact", contact)
app.use("/review", review)
app.use("/order", order)

app.use((_, res) => {
  res.status(404)
})
app.listen(PORT, () => {
  console.log(`Server running successfully ${HOSTNAME}:${PORT}`)
})


routes(app)

export default app
