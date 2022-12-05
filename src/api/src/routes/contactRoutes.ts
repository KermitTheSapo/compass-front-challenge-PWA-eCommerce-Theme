import express from 'express'
import contactController from '../controllers/ContactController'

const router = express.Router()

router
  .get('/', contactController.getContact)
  .get('/:id', contactController.getContactById)
  .post('/', contactController.postContact)
  .put('/:id', contactController.putContact)
  .delete('/:id', contactController.deleteContact)
export default router
