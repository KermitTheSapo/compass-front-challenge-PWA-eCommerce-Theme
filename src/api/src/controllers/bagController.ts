import Bag from "../models/Bag"

class bagController {
  // @ts-ignore
  static getBag = (req, res) => {
    // @ts-ignore
    Bag.find((err, bag) => {
      res.status(200).json(bag)
    })
  }
  // @ts-ignore
  static getBagById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Bag.findById(id, (err, bag) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - bag id not found` })
      } else {
        res.status(200).send(bag)
      }
    })
  }
  // @ts-ignore
  static postBag = async (req, res) => {
    const newBag = new Bag(req.body)
    newBag.save()
    return res.status(200).send({ message: "cadastrado" })
  }
  // @ts-ignore
  static putBag = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Bag.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating product: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteBag = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Bag.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'bag deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting bag: ${err}` })
      }
    })
  }
}

export default bagController
