import express from 'express'
import product from './productRoutes'
import bag from './bagRoutes'
import wishlist from './wishlistRoutes'
import coupon from './couponRoutes'
import address from './addressRoutes'
import contact from './contactRoutes'
import review from './reviewRoutes'
import order from './orderRoutes'
import auth from './authRoutes'
// @ts-ignore
const routes = (app) => {
  // @ts-ignore
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'product' })
  })
  app.use(
    express.json(),
    product
  )
  app.use(
    express.json(),
    bag
  )
  app.use(
    express.json(),
    wishlist
  )
  app.use(
    express.json(),
    coupon
  )
  app.use(
    express.json(),
    address
  )
  app.use(
    express.json(),
    contact
  )
  app.use(
    express.json(),
    review
  )
  app.use(
    express.json(),
    order
  )
  app.use(
    express.json(),
    auth
  )
}
export default routes