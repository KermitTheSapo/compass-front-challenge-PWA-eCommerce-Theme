import express from 'express'
import product from './productRoutes'
import bag from './bagRoutes'
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

}


export default routes