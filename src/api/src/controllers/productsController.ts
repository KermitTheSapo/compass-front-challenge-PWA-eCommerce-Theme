import product from '../models/Product'
class ProductController {
  // @ts-ignore
  static getProduct = (req, res) => {
    // @ts-ignore
    product.find((err, product) => {
      res.status(200).json(product)
    })
  }
  // @ts-ignore
  static getProductById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
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
  // @ts-ignore
  static postProduct = async (req, res) => {
    const newProduct = new product(req.body)
    newProduct.save()
    return res.status(200).send({ message: "registered item" })
  }
  // @ts-ignore
  static putProduct = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    product.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating product: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteProduct = (req, res) => {
    const id = req.params.id
    // @ts-ignore
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
