import express from 'express'
import db from './config/dbConnect'
import routes from './routes/index'
import product from "./routes/productRoutes"
import bag from "./routes/bagRoutes"
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
app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})
app.use("/product", product)
app.use("/bag", bag)

app.use((req, res) => {
  res.status(404)
})
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})


routes(app)

export default app