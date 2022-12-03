import express from 'express'
import wishlistController from '../controllers/wishlistController'

const router = express.Router()

router
  .get('/', wishlistController.getWishlist)
  .get('/:id', wishlistController.getWishlistById)
  .post('/', wishlistController.postWishlist)
  .put('/:id', wishlistController.putWishlist)
  .delete('/:id', wishlistController.deleteWishlist)
export default router
