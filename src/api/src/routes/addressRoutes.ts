import express from 'express'
import addressController from '../controllers/addressController'

const router = express.Router()

router
  .get('/', addressController.getAddress)
  .get('/:id', addressController.getAddressById)
  .post('/', addressController.postAddress)
  .put('/:id', addressController.putAddress)
  .delete('/:id', addressController.deleteAddress)
export default router
