import express from 'express'
import ProductController from '../controllers/productsController.js'

const router = express.Router()

router
  .get('/product', ProductController.getProduct)
  .get('/product/:id', ProductController.getProductById)
  .post('/product', ProductController.postProduct)
  .put('/product/:id', ProductController.putProduct)
  .delete('/product/:id', ProductController.deleteProduct)

export default router
