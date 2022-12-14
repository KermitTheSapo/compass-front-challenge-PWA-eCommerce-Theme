import product from '../models/Product'
import { findAllService, countProduct, findAllCategory } from '../services/product.service';
class ProductController {
  // @ts-ignore
  static getProduct = async (req, res) => {
    let { limit, offset } = req.query;
    limit = Number(limit);
    offset = Number(offset);
    if (!limit) {
      limit = 5;
    }
    if (!offset) {
      offset = 0;
    }
    const products = await findAllService(offset, limit);
    const total = await countProduct()
    const currentUrl = req.baseUrl
    const next = offset + limit;
    const prev = offset - limit < 0 ? null : offset - limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
    const prevUrl = prev !== null ? `${currentUrl}?limit=${limit}&offset=${prev}` : null;
    if (products.length === 0) {
      return res.status(404).send({
        message: 'No products found',
      })
    }
    res.send({
      nextUrl,
      prevUrl,
      limit,
      offset,
      total,
      results: products.map(item => ({
        id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        paragraph: item.paragraph,
        discount: item.discount,
        imgAlt: item.imgAlt,
        ratings: item.ratings,
        category: item.category
      }))
    });
  }
  // @ts-ignore
  static getCategoryByName = async (req, res) => {
    const category = req.params.category
    let { limit, offset } = req.query;
    limit = Number(limit);
    offset = Number(offset);
    if (!limit) {
      limit = 5;
    }
    if (!offset) {
      offset = 0;
    }
    // @ts-ignore
    const products = await findAllCategory(offset, limit, category);
    const total = await countProduct()
    const currentUrl = req.baseUrl
    const next = offset + limit;
    const prev = offset - limit < 0 ? null : offset - limit;
    const nextUrl = next < total ? `${currentUrl}/category/${category}?limit=${limit}&offset=${next}` : null;
    const prevUrl = prev !== null ? `${currentUrl}/category?${category}limit=${limit}&offset=${prev}` : null;
    if (products.length === 0) {
      return res.status(404).send({
        message: 'No products found',
      })
    }
    res.send({
      nextUrl,
      prevUrl,
      limit,
      offset,
      total,
      results: products.map(item => ({
        id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        paragraph: item.paragraph,
        discount: item.discount,
        imgAlt: item.imgAlt,
        ratings: item.ratings,
        category: item.category
      }))
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
