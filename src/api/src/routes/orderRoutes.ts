import express from 'express'
import OrderController from '../controllers/orderController'

const router = express.Router()

router
  .get('/', OrderController.getOrder)
  .get('/:id', OrderController.getOrderById)
  .post('/', OrderController.postOrder)
  .put('/:id', OrderController.putOrder)
  .delete('/:id', OrderController.deleteOrder)
export default router
