import express from 'express'
import bagController from '../controllers/bagController'

const router = express.Router()

router
  .get('/', bagController.getBag)
  .get('/:id', bagController.getBagById)
  .post('/', bagController.postBag)
  .put('/:id', bagController.putBag)
  .delete('/:id', bagController.deleteBag)

export default router
