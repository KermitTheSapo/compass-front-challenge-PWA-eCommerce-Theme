import Wishlist from "../models/Wishlist"

class wishlistController {
  // @ts-ignore
  static getWishlist = (req, res) => {
    // @ts-ignore
    Wishlist.find((err, wish) => {
      res.status(200).json(wish)
    })
  }
  // @ts-ignore
  static getWishlistById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Wishlist.findById(id, (err, wish) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - bag id not found` })
      } else {
        res.status(200).send(wish)
      }
    })
  }
  // @ts-ignore
  static postWishlist = async (req, res) => {
    const newWishlist = new Wishlist(req.body)
    newWishlist.save()
    return res.status(200).send({ message: "registered item" })
  }
  // @ts-ignore
  static putWishlist = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Wishlist.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating product: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteWishlist = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Wishlist.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Wishlist deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Wishlist: ${err}` })
      }
    })
  }
}

export default wishlistController
