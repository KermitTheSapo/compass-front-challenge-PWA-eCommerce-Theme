import express from 'express'
import ReviewController from '../controllers/reviewController'

const router = express.Router()

router
  .get('/', ReviewController.getReview)
  .get('/:id', ReviewController.getReviewById)
  .post('/', ReviewController.postReview)
  .put('/:id', ReviewController.putReview)
  .delete('/:id', ReviewController.deleteReview)
export default router
