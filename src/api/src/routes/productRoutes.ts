import express from 'express'
import ProductController from '../controllers/productsController'

const router = express.Router()

router
  .get('/', ProductController.getProduct)
  .get("/category/:category", ProductController.getCategoryByName)
  .get('/:id', ProductController.getProductById)
  .post('/', ProductController.postProduct)
  .put('/:id', ProductController.putProduct)
  .delete('/:id', ProductController.deleteProduct)

export default router
