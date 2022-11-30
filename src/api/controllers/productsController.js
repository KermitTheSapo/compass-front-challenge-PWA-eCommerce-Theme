import product from '../models/Product.js'

class ProductController {
  static getProduct = (req, res) => {
    product.find((err, product) => {
      res.status(200).json(product)
    })
  }

  static getProductById = (req, res) => {
    const id = req.params.id
    product.findById(id, (err, product) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Product id not found` })
      } else {
        res.status(200).send(product)
      }
    })
  }
  static postProduct = (req, res) => {
    let product = new product(req.body)

    product.save((err) => {
      if (err) {
        res.status(500).send({ message: `Error registering product: ${err}` })
      } else {
        res.status(201).send(product.toJSON())
      }
    })
  }

  static putProduct = (req, res) => {
    const id = req.params.id
    product.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating product: ${err}` })
      }
    })
  }

  static deleteProduct = (req, res) => {
    const id = req.params.id
    product.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting product: ${err}` })
      }
    })
  }
}

export default ProductController
