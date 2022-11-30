import express from 'express'
import livros from './productRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'product' })
  })

  app.use(
    express.json(),
    livros
  )
}


export default routes