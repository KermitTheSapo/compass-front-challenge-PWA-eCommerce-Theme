import express from 'express'
import couponController from '../controllers/couponController'

const router = express.Router()

router
  .get('/', couponController.getCoupon)
  .get('/:id', couponController.getCouponById)
  .post('/', couponController.postCoupon)
  .put('/:id', couponController.putCoupon)
  .delete('/:id', couponController.deleteCoupon)
export default router
